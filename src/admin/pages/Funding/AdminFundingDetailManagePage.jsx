/** @jsxImportSource @emotion/react */
import * as s from "./AdminFundingDetailManagePage.style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getAdminFundingProjectDetails,
  deleteAdminFundingProjectDetail,
} from "../../apis/adminFundingApi";
import DetailModal from "../Donation/components/DetailModal";

const AdminFundingDetailManagePage = () => {
  const { projectId } = useParams();
  const [details, setDetails] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  /** 상세 리스트 불러오기 */
  const loadDetails = async () => {
    try {
      const res = await getAdminFundingProjectDetails(projectId);
      setDetails(res.data);
    } catch (e) {
      alert("상세 정보를 불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    loadDetails();
  }, []);

  /** 삭제 */
  const deleteDetail = async (detailId) => {
    if (!window.confirm("삭제하시겠습니까?")) return;

    try {
      await deleteAdminFundingProjectDetail(detailId);
      alert("삭제 완료");
      loadDetails();
    } catch (e) {
      alert("삭제 실패");
    }
  };

  return (
    <div css={s.container}>
      <h1 css={s.title}>📄 펀딩 상세 콘텐츠 관리</h1>

      <button
        css={s.addButton}
        onClick={() => {
          setEditItem(null);
          setModalOpen(true);
        }}
      >
        + 상세 추가
      </button>

      <div css={s.listBox}>
        {details.map((item) => (
          <div key={item.donationProjectDetailId} css={s.card}>
            <div css={s.subtitle}>{item.donationProjectDetailSubtitle}</div>

            {item.donationProjectDetailImageUrl && (
              <img
                src={item.donationProjectDetailImageUrl}
                css={s.thumb}
                alt=""
              />
            )}

            <div css={s.order}>순서: {item.donationProjectDetailOrderNo}</div>

            <div css={s.cardButtons}>
              <button
                css={s.editBtn}
                onClick={() => {
                  setEditItem(item);
                  setModalOpen(true);
                }}
              >
                수정
              </button>

              <button
                css={s.deleteBtn}
                onClick={() =>
                  deleteDetail(item.donationProjectDetailId)
                }
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <DetailModal
          projectId={projectId}
          editItem={editItem}
          closeModal={() => setModalOpen(false)}
          reload={loadDetails}
        />
      )}
    </div>
  );
};

export default AdminFundingDetailManagePage;
