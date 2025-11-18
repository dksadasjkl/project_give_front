/** @jsxImportSource @emotion/react */
import * as s from "./AdminDonationCreatePage.style";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDonationCategoriesRequest } from "../../../apis/api/Categorie/categorie";
import { postAdminDonationCreateRequest } from "../../apis/adminDonationApi";

import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../apis/firebase/firebaseConfig";

function AdminDonationCreatePage() {
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    title: "",
    organization: "",
    organizationImageUrl: "",
    imageUrl: "",
    categoryId: "",
    targetAmount: "",
    projectType: "DONATION",
    startDate: new Date(),
    endDate: new Date(),
  });

  // 🔥 subtitle 추가!!!
  const [details, setDetails] = useState([
    { subtitle: "", content: "", imageUrl: "" }
  ]);

  const [rewards, setRewards] = useState([
    { rewardName: "", rewardAmount: "", rewardLimit: "" },
  ]);

  useEffect(() => {
    getDonationCategoriesRequest().then((res) =>
      setCategories(res.data || [])
    );
  }, []);

  /** Firebase 업로드 */
  const uploadToFirebase = async (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `donation/${uuid()}_${file.name}`);
      const task = uploadBytesResumable(storageRef, file);

      task.on(
        "state_changed",
        () => {},
        reject,
        async () => {
          const url = await getDownloadURL(storageRef);
          resolve(url);
        }
      );
    });
  };

  const handleUpload = async (e, key) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = await uploadToFirebase(file);
    setForm((prev) => ({ ...prev, [key]: url }));
  };

  const handleDetailImageUpload = async (idx, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = await uploadToFirebase(file);
    const updated = [...details];
    updated[idx].imageUrl = url;
    setDetails(updated);
  };

  const formatNumber = (value) => {
    const onlyNum = value.replace(/[^0-9]/g, "");
    return onlyNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

const handleSubmit = async () => {

  // 🔥 상세 정보 매핑 (프론트 → 백엔드 DTO 형태로 변환)
  const mappedDetails = details.map((d, idx) => ({
    donationProjectDetailSubtitle: d.subtitle,
    donationProjectDetailContent: d.content,
    donationProjectDetailImageUrl: d.imageUrl,
    donationProjectDetailOrderNo: idx + 1
  }));

  // 🔥 리워드 매핑 (funding일 때만 사용)
  const mappedRewards = rewards.map((r) => ({
        fundingProjectRewardTitle: r.rewardName,
        fundingProjectRewardPrice: Number(r.rewardAmount.replace(/,/g, "")),
        fundingProjectRewardQuantity: Number(r.rewardLimit),
        // 추가정보 없으면 빈 값 처리
        fundingProjectRewardDescription: "",
        fundingProjectRewardDetail: "",
        fundingProjectRewardRemaining: Number(r.rewardLimit),
        fundingProjectRewardDeliveryInfo: "",
        fundingProjectRewardNotice: "",
        fundingProjectRewardImageUrl: "",
    }));

    const payload = {
        donationProjectTitle: form.title,
        donationProjectOrganization: form.organization,
        donationProjectOrganizationImageUrl: form.organizationImageUrl,
        donationProjectImageUrl: form.imageUrl,
        donationCategoryId: Number(form.categoryId),
        donationProjectTargetAmount: Number(form.targetAmount.replace(/,/g, "")),
        donationProjectStartDate: form.startDate.toISOString().slice(0, 10),
        donationProjectEndDate: form.endDate.toISOString().slice(0, 10),
        donationProjectType: form.projectType,

        // 🔥 변환된 상세 데이터
        details: mappedDetails,

        // 🔥 펀딩이면 리워드 포함, 기부면 빈 배열로
        rewards: form.projectType === "FUNDING" ? mappedRewards : []
    };

    await postAdminDonationCreateRequest(payload);
    alert("등록 완료!");
    window.location.href = "/admin/donation";
    };


  return (
    <div css={s.container}>
      <h1>프로젝트 등록</h1>

      <label>프로젝트 제목</label>
      <input
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <label>기관명</label>
      <input
        value={form.organization}
        onChange={(e) => setForm({ ...form, organization: e.target.value })}
      />

      <label>기관 로고 이미지</label>
      <input type="file" onChange={(e) => handleUpload(e, "organizationImageUrl")} />
      {form.organizationImageUrl && <img src={form.organizationImageUrl} css={s.previewImg} />}

      <label>대표 이미지</label>
      <input type="file" onChange={(e) => handleUpload(e, "imageUrl")} />
      {form.imageUrl && <img src={form.imageUrl} css={s.previewImg} />}

      <label>카테고리</label>
      <select
        value={form.categoryId}
        onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
      >
        <option value="">선택</option>
        {categories.map((c) => (
          <option key={c.donationCategoryId} value={c.donationCategoryId}>
            {c.donationCategoryNameKor}
          </option>
        ))}
      </select>

      <label>프로젝트 타입</label>
      <select
        value={form.projectType}
        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
      >
        <option value="DONATION">기부</option>
        <option value="FUNDING">펀딩</option>
      </select>

      <label>목표 금액</label>
      <input
        value={form.targetAmount}
        onChange={(e) =>
          setForm({ ...form, targetAmount: formatNumber(e.target.value) })
        }
      />

      <label>시작 날짜</label>
      <DatePicker
        selected={form.startDate}
        onChange={(d) => setForm({ ...form, startDate: d })}
        dateFormat="yyyy-MM-dd"
      />

      <label>종료 날짜</label>
      <DatePicker
        selected={form.endDate}
        onChange={(d) => setForm({ ...form, endDate: d })}
        dateFormat="yyyy-MM-dd"
      />

      <h3>상세 정보</h3>
      {details.map((d, idx) => (
        <div key={idx} css={s.detailBox}>
          <input
            placeholder="소제목 입력"
            value={d.subtitle}
            onChange={(e) => {
              const updated = [...details];
              updated[idx].subtitle = e.target.value;
              setDetails(updated);
            }}
          />

          <textarea
            value={d.content}
            onChange={(e) => {
              const updated = [...details];
              updated[idx].content = e.target.value;
              setDetails(updated);
            }}
          />

          <input type="file" onChange={(e) => handleDetailImageUpload(idx, e)} />

          {d.imageUrl && <img src={d.imageUrl} css={s.detailPreview} />}
        </div>
      ))}

      <button onClick={() => setDetails([...details, { subtitle: "", content: "", imageUrl: "" }])}>
        상세 추가 +
      </button>

      {form.projectType === "FUNDING" && (
        <>
          <h3>리워드</h3>
          {rewards.map((r, idx) => (
            <div key={idx} css={s.rewardBox}>
              <input
                placeholder="리워드명"
                value={r.rewardName}
                onChange={(e) => {
                  const updated = [...rewards];
                  updated[idx].rewardName = e.target.value;
                  setRewards(updated);
                }}
              />
              <input
                placeholder="금액"
                value={r.rewardAmount}
                onChange={(e) => {
                  const updated = [...rewards];
                  updated[idx].rewardAmount = formatNumber(e.target.value);
                  setRewards(updated);
                }}
              />
              <input
                placeholder="수량 제한"
                value={r.rewardLimit}
                onChange={(e) => {
                  const updated = [...rewards];
                  updated[idx].rewardLimit = e.target.value;
                  setRewards(updated);
                }}
              />
            </div>
          ))}
          <button
            onClick={() =>
              setRewards([...rewards, { rewardName: "", rewardAmount: "", rewardLimit: "" }])
            }
          >
            리워드 추가 +
          </button>
        </>
      )}

      <button css={s.submitBtn} onClick={handleSubmit}>
        등록
      </button>
    </div>
  );
}

export default AdminDonationCreatePage;
