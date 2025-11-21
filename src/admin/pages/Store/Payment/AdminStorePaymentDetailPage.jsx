/** @jsxImportSource @emotion/react */
import * as s from "./AdminStorePaymentDetailPage.style";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAdminStorePaymentDetail } from "../../../apis/storeAdminApi";

/* ===============================
 * 🔵 한글 매핑 테이블
 * =============================== */
const PAYMENT_METHOD_MAP = {
  KAKAO_PAY: "카카오페이"
};

const PAYMENT_STATUS_MAP = {
  SUCCESS: "결제 완료",
  FAILED: "결제 실패",
  PENDING: "결제 대기중",
};

function AdminStorePaymentDetailPage() {
  const { paymentId } = useParams();

  const { data, isLoading, error } = useQuery(
    ["adminStorePaymentDetail", paymentId],
    () => getAdminStorePaymentDetail(paymentId),
    { refetchOnWindowFocus: false }
  );

  const payment = data?.data;

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>결제 상세 정보</h1>

      {/* 결제 기본 정보 */}
      <section css={s.section}>
        <h2 css={s.sectionTitle}>결제 정보</h2>

        <div css={s.infoRow}>
          <span>결제 ID</span>
          <p>{payment.paymentId}</p>
        </div>

        <div css={s.infoRow}>
          <span>주문 ID</span>
          <p>{payment.orderId}</p>
        </div>

        <div css={s.infoRow}>
          <span>결제 방법</span>
          <p>{PAYMENT_METHOD_MAP[payment.paymentMethod]}</p>
        </div>

        <div css={s.infoRow}>
          <span>결제 상태</span>
          <p>{PAYMENT_STATUS_MAP[payment.paymentStatus]}</p>
        </div>

        <div css={s.infoRow}>
          <span>결제 금액</span>
          <p>{payment.amount?.toLocaleString()}원</p>
        </div>

        <div css={s.infoRow}>
          <span>결제 일시</span>
          <p>{payment.paidAt?.slice(0, 16).replace("T", " ")}</p>
        </div>
      </section>

      {/* 메타 정보 */}
      <section css={s.section}>
        <h2 css={s.sectionTitle}>추가 정보</h2>

        <div css={s.infoRow}>
          <span>거래 ID</span>
          <p>{payment.transactionId}</p>
        </div>
      </section>
    </div>
  );
}

export default AdminStorePaymentDetailPage;
