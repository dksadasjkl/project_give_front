/** @jsxImportSource @emotion/react */
import * as s from "./DonationEditPage.style";
import { useRecoilState } from "recoil";
import { adminDonationEditState } from "../../atoms/adminDonationEditAtom";
import { useMutation } from "@tanstack/react-query";
import { putAdminDonationUpdateRequest } from "../../apis/adminDonationApi";

import TopInput from "../../components/TopInput/TopInput";
import TopSelect from "../../components/TopSelect/TopSelect";
import RegisterTop from "../../components/RegisterTop/RegisterTop";

import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../apis/firebase/firebaseConfig";

const donationCategoryOptions = [
  { id: 1, name: "아동·청소년" },
  { id: 2, name: "노인" },
  { id: 3, name: "동물" },
  { id: 4, name: "환경" },
];

const AdminDonationEditPage = () => {
  const [donation, setDonation] = useRecoilState(adminDonationEditState);

  /** 🔥 대표 이미지 업로드 */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!window.confirm("이미지를 업로드하시겠습니까?")) return;

    const storageRef = ref(storage, `donation/project/${uuid()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      () => {},
      () => alert("업로드 실패"),
      () => {
        getDownloadURL(storageRef).then((url) => {
          setDonation((prev) => ({
            ...prev,
            donationProjectImageUrl: url,
          }));
          alert("이미지 업로드 완료");
        });
      }
    );
  };

  /** 🔥 프로젝트 수정 API */
  const updateMutation = useMutation({
    mutationFn: () =>
      putAdminDonationUpdateRequest(donation.donationProjectId, donation),
    onSuccess: () => {
      alert("기부 프로젝트 수정 완료");
      window.location.href = "/admin/donation";
    },
    onError: () => alert("수정 실패"),
  });

  /** 🔥 RegisterTop 입력 그룹 */
const registerInputs = [
  [
    <TopInput
      label="ID"
      name="donationProjectId"
      disabled
      value={donation.donationProjectId}
      setState={setDonation}
    />,
    <TopInput
      label="제목"
      name="donationProjectTitle"
      value={donation.donationProjectTitle}
      setState={setDonation}
    />,
    <TopSelect
      label="카테고리"
      name="donationCategoryId"
      value={donation.donationCategoryId}
      setState={setDonation}
      options={donationCategoryOptions}
    />,
  ],

  [
    <TopInput
      label="기관명"
      name="donationProjectOrganization"
      value={donation.donationProjectOrganization}
      setState={setDonation}
    />,
    <TopInput
      label="목표 금액"
      name="donationProjectTargetAmount"
      value={donation.donationProjectTargetAmount}
      setState={setDonation}
    />,
    <></>,
  ],

  [
    <TopInput
      type="date"
      label="시작일"
      name="donationProjectStartDate"
      value={donation.donationProjectStartDate?.substring(0, 10)}
      setState={setDonation}
    />,
    <TopInput
      type="date"
      label="종료일"
      name="donationProjectEndDate"
      value={donation.donationProjectEndDate?.substring(0, 10)}
      setState={setDonation}
    />,
    <></>,
  ],

  // 🔥 이미지 업로드를 RegisterTop 안에 추가
  [
    <div css={s.imageUploadRow}>
      {donation.donationProjectImageUrl && (
        <img src={donation.donationProjectImageUrl} css={s.previewImg} />
      )}

      <label css={s.uploadButton}>
        대표 이미지 업로드
        <input type="file" onChange={handleImageUpload} css={s.hiddenFileInput} />
      </label>
    </div>,
    <></>,
    <></>,
  ],
];

  return (
    <>
      <div css={s.header}>
        <h1 css={s.title}>기부 프로젝트 수정</h1>
        <button css={s.button} onClick={() => updateMutation.mutate()}>
          수정 저장
        </button>
      </div>

      {/* 기본정보 입력 */}
      <RegisterTop registerInputs={registerInputs} />
    </>
  );
};

export default AdminDonationEditPage;
