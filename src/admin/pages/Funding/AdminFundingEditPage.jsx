/** @jsxImportSource @emotion/react */
import * as s from "./AdminFundingEditPage.style";
import { useRecoilState } from "recoil";
import { adminFundingEditState } from "../../atoms/adminFundingEditAtom";

import { useMutation, useQuery } from "@tanstack/react-query";
import { putAdminFundingUpdateRequest } from "../../apis/adminFundingApi";

import { getAdminFundingCategoriesRequest } from "../../apis/adminFundingApi";

import TopInput from "../../components/TopInput/TopInput";
import TopSelect from "../../components/TopSelect/TopSelect";
import RegisterTop from "../../components/RegisterTop/RegisterTop";

import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../apis/firebase/firebaseConfig";

const AdminFundingEditPage = () => {
  const [funding, setFunding] = useRecoilState(adminFundingEditState);

  /** 펀딩 카테고리 로드 (FUNDING 전용) */
  const { data: categoryData } = useQuery(
    ["fundingCategories"],
    () => getAdminFundingCategoriesRequest(),
    { refetchOnWindowFocus: false }
  );

  /** map 해서 TopSelect 용 옵션 변환 */
  const categoryOptions = (categoryData?.data || []).map((c) => ({
    id: c.donationCategoryId,
    name: c.donationCategoryNameKor,
  }));

  /** 이미지 업로드 */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!window.confirm("이미지를 업로드하시겠습니까?")) return;

    const storageRef = ref(storage, `funding/project/${uuid()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      () => {},
      () => alert("업로드 실패"),
      () => {
        getDownloadURL(storageRef).then((url) => {
          setFunding((prev) => ({
            ...prev,
            donationProjectImageUrl: url,
          }));
          alert("이미지 업로드 완료");
        });
      }
    );
  };

  /** 펀딩 수정 API */
  const updateMutation = useMutation({
    mutationFn: () =>
      putAdminFundingUpdateRequest(funding.donationProjectId, funding),
    onSuccess: () => {
      alert("펀딩 프로젝트 수정 완료");
      window.location.href = "/admin/funding";
    },
    onError: () => alert("수정 실패"),
  });

  /**  RegisterTop 필드 구성 */
  const registerInputs = [
    [
      <TopInput
        label="ID"
        name="donationProjectId"
        disabled
        value={funding.donationProjectId}
        setState={setFunding}
      />,
      <TopInput
        label="제목"
        name="donationProjectTitle"
        value={funding.donationProjectTitle}
        setState={setFunding}
      />,
      <TopSelect
        label="카테고리"
        name="donationCategoryId"
        value={funding.donationCategoryId}
        setState={setFunding}
        options={categoryOptions} //  API 기반 옵션으로 변경됨
      />,
    ],

    [
      <TopInput
        label="기관명"
        name="donationProjectOrganization"
        value={funding.donationProjectOrganization}
        setState={setFunding}
      />,
      <TopInput
        label="목표 금액"
        name="donationProjectTargetAmount"
        value={funding.donationProjectTargetAmount}
        setState={setFunding}
      />,
      <></>,
    ],

    [
      <TopInput
        type="date"
        label="시작일"
        name="donationProjectStartDate"
        value={funding.donationProjectStartDate?.substring(0, 10)}
        setState={setFunding}
      />,
      <TopInput
        type="date"
        label="종료일"
        name="donationProjectEndDate"
        value={funding.donationProjectEndDate?.substring(0, 10)}
        setState={setFunding}
      />,
      <></>,
    ],

    [
      <div css={s.imageUploadRow}>
        {funding.donationProjectImageUrl && (
          <img src={funding.donationProjectImageUrl} css={s.previewImg} />
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
        <h1 css={s.title}>펀딩 프로젝트 수정</h1>
        <button css={s.button} onClick={() => updateMutation.mutate()}>
          수정 저장
        </button>
      </div>

      <RegisterTop registerInputs={registerInputs} />
    </>
  );
};

export default AdminFundingEditPage;
