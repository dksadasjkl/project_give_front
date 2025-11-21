/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreOrderDetailPage.style";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  getAdminStoreOrderDetail,
  putAdminStoreOrderStatus,
} from "../../../apis/storeAdminApi";
import { useState } from "react";

/* ============================================
 *  🔵 한글 ENUM 매핑 테이블 (DB 기준 완전 통일)
 * ============================================ */
const ORDER_STATUS_MAP = {
  READY: "주문 접수",
  IN_TRANSIT: "배송중",
  DELIVERED: "배송완료",
  CANCELLED: "취소됨",
  CONFIRMED: "구매확정",
};

const PAYMENT_METHOD_MAP = {
  KAKAO_PAY: "카카오페이"
};

const PAYMENT_STATUS_MAP = {
  SUCCESS: "결제 완료",
  FAILED: "결제 실패",
  PENDING: "결제 대기중",
};

const SHIPPING_STATUS_MAP = {
  READY: "배송 준비중",
  IN_TRANSIT: "배송중",
  DELIVERED: "배송완료",
};

function AdminStoreOrderDetailPage() {
  const { orderId } = useParams();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, error } = useQuery(
    ["adminStoreOrderDetail", orderId],
    () => getAdminStoreOrderDetail(orderId),
    { refetchOnWindowFocus: false }
  );

  const order = data?.data;

  /* ================================
   *  주문 상태 변경 Mutation
   * ================================ */
  const updateStatusMutation = useMutation(
    (newStatus) => putAdminStoreOrderStatus(orderId, newStatus),
    {
      onSuccess: () => {
        alert("주문 상태가 변경되었습니다.");
        queryClient.invalidateQueries(["adminStoreOrderDetail", orderId]);
        setIsModalOpen(false);
      },
    }
  );

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>주문 상세 정보</h1>

      {/* 상태 변경 버튼 */}
      <div css={s.buttonGroup}>
        <button css={s.updateBtn} onClick={() => setIsModalOpen(true)}>
          주문 상태 변경
        </button>
      </div>

      {/* 주문 기본 정보 */}
      <section css={s.section}>
        <h2 css={s.sectionTitle}>주문 정보</h2>

        <div css={s.infoRow}>
          <span>주문번호</span>
          <p>{order.orderId}</p>
        </div>

        <div css={s.infoRow}>
          <span>유저 ID</span>
          <p>{order.userId}</p>
        </div>

        <div css={s.infoRow}>
          <span>주문일</span>
          <p>{order.orderDate?.slice(0, 16).replace("T", " ")}</p>
        </div>

        <div css={s.infoRow}>
          <span>주문 상태</span>
          <p>{ORDER_STATUS_MAP[order.orderStatus]}</p>
        </div>
      </section>

      {/* 결제 정보 */}
      <section css={s.section}>
        <h2 css={s.sectionTitle}>결제 정보</h2>

        <div css={s.infoRow}>
          <span>결제 수단</span>
          <p>{PAYMENT_METHOD_MAP[order.paymentMethod]}</p>
        </div>

        <div css={s.infoRow}>
          <span>결제 상태</span>
          <p>{PAYMENT_STATUS_MAP[order.paymentStatus]}</p>
        </div>

        <div css={s.infoRow}>
          <span>결제 금액</span>
          <p>{order.paymentAmount?.toLocaleString()}원</p>
        </div>
      </section>

      {/* 배송 정보 */}
      <section css={s.section}>
        <h2 css={s.sectionTitle}>배송 정보</h2>

        <div css={s.infoRow}>
          <span>수령인</span>
          <p>{order.recipientName}</p>
        </div>

        <div css={s.infoRow}>
          <span>주소</span>
          <p>{order.address}</p>
        </div>

        <div css={s.infoRow}>
          <span>택배사</span>
          <p>{order.shippingCarrier}</p>
        </div>

        <div css={s.infoRow}>
          <span>송장 번호</span>
          <p>{order.trackingNumber}</p>
        </div>

        <div css={s.infoRow}>
          <span>배송 상태</span>
          <p>{SHIPPING_STATUS_MAP[order.shippingStatus]}</p>
        </div>
      </section>

      {/* 상품 정보 */}
      <section css={s.section}>
        <h2 css={s.sectionTitle}>상품 정보</h2>

        <table css={s.table}>
          <thead>
            <tr>
              <th>상품 이미지</th>
              <th>상품명</th>
              <th>수량</th>
              <th>총 금액</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <img
                  src={order.productImageUrl}
                  alt={order.productName}
                  css={s.productImg}
                />
              </td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>{order.totalAmount?.toLocaleString()}원</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ============================
       *    상태 변경 모달
       * ============================ */}
      {isModalOpen && (
        <StatusModal
          currentStatus={order.orderStatus}
          onClose={() => setIsModalOpen(false)}
          onSave={(newStatus) => updateStatusMutation.mutate(newStatus)}
        />
      )}
    </div>
  );
}

/* =============================
 *   주문 상태 변경 모달 컴포넌트
 * ============================= */
function StatusModal({ currentStatus, onClose, onSave }) {
  const [status, setStatus] = useState(currentStatus);

  return (
    <div css={s.modalOverlay}>
      <div css={s.modalContent}>
        <h3 css={s.modalTitle}>주문 상태 변경</h3>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          css={s.modalSelect}
        >
          <option value="READY">주문 접수</option>
          <option value="IN_TRANSIT">배송중</option>
          <option value="DELIVERED">배송완료</option>
          <option value="CANCELLED">취소됨</option>
          <option value="CONFIRMED">구매확정</option>
        </select>

        <div css={s.modalButtonWrap}>
          <button css={s.modalSaveBtn} onClick={() => onSave(status)}>
            변경하기
          </button>
          <button css={s.modalCancelBtn} onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminStoreOrderDetailPage;
