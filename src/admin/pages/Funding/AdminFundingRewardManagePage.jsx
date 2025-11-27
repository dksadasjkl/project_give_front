/** @jsxImportSource @emotion/react */
import * as s from "./AdminFundingRewardManagePage.style";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  getAdminFundingRewards,
  postAdminFundingReward,
  putAdminFundingReward,
  deleteAdminFundingReward,
} from "../../apis/adminFundingApi";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import { v4 as uuidv4 } from "uuid"; 
import { storage } from "../../../apis/firebase/firebaseConfig";

const AdminFundingRewardManagePage = () => {
  const { projectId } = useParams();

  const [rewards, setRewards] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editReward, setEditReward] = useState(null);
  const [uploading, setUploading] = useState(false);

  /** 전체 기본값 */
  const EMPTY_REWARD = {
    fundingProjectRewardTitle: "",
    fundingProjectRewardDescription: "",
    fundingProjectRewardDetail: "",
    fundingProjectRewardPrice: 0,
    fundingProjectRewardQuantity: 0,
    fundingProjectRewardRemaining: 0,
    fundingProjectRewardDeliveryInfo: "",
    fundingProjectRewardNotice: "",
    fundingProjectRewardImageUrl: "",
  };

  /** 리워드 로딩 */
  const loadRewards = async () => {
    const res = await getAdminFundingRewards(projectId);
    setRewards(res.data);
  };

  useEffect(() => {
    loadRewards();
  }, []);

  /** 🔥 Firebase 이미지 업로드 */
  const handleUploadImage = async (file) => {
    if (!file) return;

    setUploading(true);

    try {
      const filePath = `funding/rewards/${uuidv4()}_${file.name}`;
      const storageRef = ref(storage, filePath);

      // Firebase 업로드
      await uploadBytes(storageRef, file);

      // URL 가져오기
      const downloadURL = await getDownloadURL(storageRef);

      // 상태 업데이트
      setEditReward((prev) => ({
        ...prev,
        fundingProjectRewardImageUrl: downloadURL,
      }));

      alert("이미지 업로드 완료!");
    } catch (err) {
      console.error("이미지 업로드 실패:", err);
      alert("업로드 중 오류 발생!");
    }

    setUploading(false);
  };

  /** 삭제 */
  const deleteReward = async (rewardId) => {
    if (!window.confirm("리워드를 삭제하시겠습니까?")) return;
    await deleteAdminFundingReward(rewardId);
    loadRewards();
  };

  /** 저장 */
  const saveReward = async () => {
    if (!editReward.fundingProjectRewardTitle) {
      alert("리워드 제목은 필수입니다.");
      return;
    }

    const payload = {
      ...editReward,
      fundingProjectRewardPrice: Number(editReward.fundingProjectRewardPrice),
      fundingProjectRewardQuantity: Number(editReward.fundingProjectRewardQuantity),
      fundingProjectRewardRemaining: Number(editReward.fundingProjectRewardRemaining),
    };

    if (editReward.fundingProjectRewardId) {
      await putAdminFundingReward(editReward.fundingProjectRewardId, payload);
      alert("리워드가 수정되었습니다.");
    } else {
      await postAdminFundingReward(projectId, payload);
      alert("리워드가 등록되었습니다.");
    }

    setModalOpen(false);
    loadRewards();
  };

  return (
    <div css={s.container}>
      <h1 css={s.title}>펀딩 리워드 관리</h1>

      <button
        css={s.addButton}
        onClick={() => {
          setEditReward({ ...EMPTY_REWARD });
          setModalOpen(true);
        }}
      >
        + 리워드 추가
      </button>

      {/* 리스트 */}
      <div css={s.rewardList}>
        {rewards.map((r) => (
          <div key={r.fundingProjectRewardId} css={s.card}>
            <div css={s.imageWrap}>
              <img css={s.image} src={r.fundingProjectRewardImageUrl} alt="" />
            </div>

            <div css={s.infoWrap}>
              <div css={s.rewardTitle}>{r.fundingProjectRewardTitle}</div>
              <div css={s.rewardDesc}>{r.fundingProjectRewardDescription}</div>

              <div css={s.rewardPrice}>
                <b>금액:</b> {r.fundingProjectRewardPrice.toLocaleString()}원
              </div>
              <div css={s.rewardQuantity}>
                <b>총 수량:</b> {r.fundingProjectRewardQuantity}개
              </div>
              <div css={s.rewardRemain}>
                <b>남은 수량:</b> {r.fundingProjectRewardRemaining}개
              </div>

              <div css={s.btnGroup}>
                <button
                  css={s.editBtn}
                  onClick={() => {
                    setEditReward({ ...r });
                    setModalOpen(true);
                  }}
                >
                  수정
                </button>
                <button css={s.deleteBtn} onClick={() => deleteReward(r.fundingProjectRewardId)}>
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 */}
      {modalOpen && (
        <div css={s.modalOverlay}>
          <div css={s.modal}>
            <h2>{editReward.fundingProjectRewardId ? "리워드 수정" : "리워드 추가"}</h2>

            {/* 이미지 미리보기 */}
            {editReward.fundingProjectRewardImageUrl && (
              <img
                src={editReward.fundingProjectRewardImageUrl}
                css={s.previewImage}
                alt="preview"
              />
            )}

            {/* 이미지 업로드 */}
            <label css={s.label}>이미지 업로드</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleUploadImage(e.target.files[0])}
            />
            {uploading && <p>업로드 중...</p>}
            <div>

            </div>
            <label css={s.label}>리워드명</label>
            <input
              css={s.input}
              value={editReward.fundingProjectRewardTitle}
              onChange={(e) =>
                setEditReward({ ...editReward, fundingProjectRewardTitle: e.target.value })
              }
            />
            {/* 제목 */}

            {/* 간단 설명 */}
            <label css={s.label}>간단 설명</label>
            <input
              css={s.input}
              value={editReward.fundingProjectRewardDescription}
              onChange={(e) =>
                setEditReward({ ...editReward, fundingProjectRewardDescription: e.target.value })
              }
            />

            {/* 상세 설명 */}
            <label css={s.label}>상세 내용</label>
            <textarea
              css={s.textarea}
              rows="3"
              value={editReward.fundingProjectRewardDetail}
              onChange={(e) =>
                setEditReward({ ...editReward, fundingProjectRewardDetail: e.target.value })
              }
            />

            {/* 금액 */}
            <label css={s.label}>금액</label>
            <input
              css={s.input}
              type="number"
              value={editReward.fundingProjectRewardPrice}
              onChange={(e) =>
                setEditReward({ ...editReward, fundingProjectRewardPrice: e.target.value })
              }
            />

            {/* 수량 */}
            <label css={s.label}>총 수량</label>
            <input
              css={s.input}
              type="number"
              value={editReward.fundingProjectRewardQuantity}
              onChange={(e) =>
                setEditReward({ ...editReward, fundingProjectRewardQuantity: e.target.value })
              }
            />

            {/* 남은 수량 */}
            <label css={s.label}>남은 수량</label>
            <input
              css={s.input}
              type="number"
              value={editReward.fundingProjectRewardRemaining}
              onChange={(e) =>
                setEditReward({ ...editReward, fundingProjectRewardRemaining: e.target.value })
              }
            />

            <div css={s.modalBtnWrap}>
              <button css={s.saveBtn} onClick={saveReward}>
                저장
              </button>
              <button css={s.cancelBtn} onClick={() => setModalOpen(false)}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminFundingRewardManagePage;
