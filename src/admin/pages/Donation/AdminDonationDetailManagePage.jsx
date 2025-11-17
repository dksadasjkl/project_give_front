/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./DonationDetailManagePage.style";
import { useParams } from "react-router-dom";
import DetailModal from "./components/DetailModal";
import instance from "../../../apis/utills/instance";

const AdminDonationDetailManagePage = () => {
  const { projectId } = useParams();
  const [details, setDetails] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  /** 상세 리스트 불러오기 */
  const loadDetails = async () => {
    try {
      const res = await instance.get(`/admin/donation/projects/${projectId}/details`);
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
      await instance.delete(`/admin/donation/projects/details/${detailId}`);
      alert("삭제 완료");
      loadDetails();
    } catch (e) {
      alert("삭제 실패");
    }
  };

  return (
    <div css={s.container}>
      <h1 css={s.title}>📄 상세 콘텐츠 관리</h1>

      <button css={s.addButton} onClick={() => { setEditItem(null); setModalOpen(true); }}>
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
                onClick={() => deleteDetail(item.donationProjectDetailId)}
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

export default AdminDonationDetailManagePage;
