/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreShippingDetailPage.style";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  getAdminStoreShippingDetail,
  putAdminStoreShippingStatus,
  putAdminStoreShippingTracking
} from "../../../apis/storeAdminApi";
import { useState } from "react";

const SHIPPING_STATUS_MAP = {
  READY: "배송 준비중",
  IN_TRANSIT: "배송중",
  DELIVERED: "배송완료",
};

function AdminStoreShippingDetailPage() {
  const { shippingId } = useParams();
  const queryClient = useQueryClient();

  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [trackingModalOpen, setTrackingModalOpen] = useState(false);

  /* ===================
   *   배송 상세 조회
   * =================== */
  const { data, isLoading, error } = useQuery(
    ["adminStoreShippingDetail", shippingId],
    () => getAdminStoreShippingDetail(shippingId),
    { refetchOnWindowFocus: false }
  );

  const ship = data?.data;

  /* ===================
   *   배송 상태 변경
   * =================== */
  const updateStatusMutation = useMutation(
    (newStatus) => putAdminStoreShippingStatus(shippingId, newStatus),
    {
      onSuccess: () => {
        alert("배송 상태가 변경되었습니다.");
        queryClient.invalidateQueries(["adminStoreShippingDetail", shippingId]);
        setStatusModalOpen(false);
      }
    }
  );

  /* ===================
   *   운송장 수정
   * =================== */
  const updateTrackingMutation = useMutation(
    (trackingNum) => putAdminStoreShippingTracking(shippingId, trackingNum),
    {
      onSuccess: () => {
        alert("송장 번호가 수정되었습니다.");
        queryClient.invalidateQueries(["adminStoreShippingDetail", shippingId]);
        setTrackingModalOpen(false);
      }
    }
  );

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>배송 상세 정보</h1>

      {/* 버튼 */}
      <div css={s.buttonGroup}>
        <button css={s.updateBtn} onClick={() => setStatusModalOpen(true)}>
          배송 상태 변경
        </button>
        <button css={s.updateBtn} onClick={() => setTrackingModalOpen(true)}>
          송장 번호 수정
        </button>
      </div>

      {/* 기본 정보 */}
      <section css={s.section}>
        <h2 css={s.sectionTitle}>배송 정보</h2>

        <div css={s.infoRow}>
          <span>배송 ID</span>
          <p>{ship.shippingId}</p>
        </div>

        <div css={s.infoRow}>
          <span>주문 ID</span>
          <p>{ship.orderId}</p>
        </div>

        <div css={s.infoRow}>
          <span>배송 상태</span>
          <p>{SHIPPING_STATUS_MAP[ship.shippingStatus]}</p>
        </div>

        <div css={s.infoRow}>
          <span>배송 시작일</span>
          <p>{ship.shippedAt?.slice(0, 16).replace("T", " ")}</p>
        </div>

        <div css={s.infoRow}>
          <span>배송 완료일</span>
          <p>
            {ship.deliveredAt
              ? ship.deliveredAt.slice(0, 16).replace("T", " ")
              : "-"}
          </p>
        </div>
      </section>

      {/* 수령인 정보 */}
      <section css={s.section}>
        <h2 css={s.sectionTitle}>수령인 정보</h2>

        <div css={s.infoRow}>
          <span>수령인</span>
          <p>{ship.recipientName}</p>
        </div>

        <div css={s.infoRow}>
          <span>연락처</span>
          <p>{ship.recipientPhone}</p>
        </div>

        <div css={s.infoRow}>
          <span>주소</span>
          <p>{ship.address}</p>
        </div>

        <div css={s.infoRow}>
          <span>우편번호</span>
          <p>{ship.zipcode}</p>
        </div>
      </section>

      {/* 택배 정보 */}
      <section css={s.section}>
        <h2 css={s.sectionTitle}>택배 정보</h2>

        <div css={s.infoRow}>
          <span>배송사</span>
          <p>{ship.shippingCarrier}</p>
        </div>

        <div css={s.infoRow}>
          <span>송장 번호</span>
          <p>{ship.trackingNumber}</p>
        </div>
      </section>

      {/* 모달 */}
      {statusModalOpen && (
        <StatusModal
          current={ship.shippingStatus}
          close={() => setStatusModalOpen(false)}
          save={(v) => updateStatusMutation.mutate(v)}
        />
      )}

      {trackingModalOpen && (
        <TrackingModal
          current={ship.trackingNumber}
          close={() => setTrackingModalOpen(false)}
          save={(v) => updateTrackingMutation.mutate(v)}
        />
      )}
    </div>
  );
}

/* -----------------------------
 *   배송 상태 변경 모달
 * ----------------------------- */
function StatusModal({ current, close, save }) {
  const [status, setStatus] = useState(current);

  return (
    <div css={s.modalOverlay}>
      <div css={s.modalContent}>
        <h3 css={s.modalTitle}>배송 상태 변경</h3>

        <select css={s.modalSelect} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="READY">배송 준비중</option>
          <option value="IN_TRANSIT">배송중</option>
          <option value="DELIVERED">배송완료</option>
        </select>

        <div css={s.modalButtonWrap}>
          <button css={s.modalSaveBtn} onClick={() => save(status)}>
            변경하기
          </button>
          <button css={s.modalCancelBtn} onClick={close}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

/* -----------------------------
 *   송장 번호 수정 모달
 * ----------------------------- */
function TrackingModal({ current, close, save }) {
  const [tracking, setTracking] = useState(current || "");

  return (
    <div css={s.modalOverlay}>
      <div css={s.modalContent}>
        <h3 css={s.modalTitle}>송장 번호 수정</h3>

        <input
          css={s.modalInput}
          value={tracking}
          onChange={(e) => setTracking(e.target.value)}
        />

        <div css={s.modalButtonWrap}>
          <button css={s.modalSaveBtn} onClick={() => save(tracking)}>
            저장하기
          </button>
          <button css={s.modalCancelBtn} onClick={close}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminStoreShippingDetailPage;
