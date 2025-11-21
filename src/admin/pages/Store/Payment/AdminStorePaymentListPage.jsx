/** @jsxImportSource @emotion/react */
import * as s from "./AdminStorePaymentListPage.style";
import { useQuery } from "@tanstack/react-query";
import { getAdminStorePaymentList } from "../../../apis/storeAdminApi";
import { useNavigate } from "react-router-dom";

const PAYMENT_METHOD_MAP = {
  KAKAO_PAY: "카카오페이"
};

const PAYMENT_STATUS_MAP = {
  SUCCESS: "결제 완료",
  FAILED: "결제 실패",
  PENDING: "결제 대기",
};

function AdminStorePaymentListPage() {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery(
    ["adminStorePaymentList"],
    () => getAdminStorePaymentList(),
    { refetchOnWindowFocus: false }
  );

  const payments = Array.isArray(data?.data?.items) ? data.data.items : [];

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>결제 내역 관리</h1>

      <table css={s.table}>
        <thead>
          <tr>
            <th>결제 ID</th>
            <th>주문번호</th>
            <th>결제 수단</th>
            <th>결제 상태</th>
            <th>결제 금액</th>
            <th>결제일</th>
            <th>상세보기</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((pay) => (
            <tr key={pay.paymentId}>
              <td>{pay.paymentId}</td>
              <td>{pay.orderId}</td>
              <td>{PAYMENT_METHOD_MAP[pay.paymentMethod]}</td>
              <td>
                <span css={s.status(pay.paymentStatus)}>
                  {PAYMENT_STATUS_MAP[pay.paymentStatus]}
                </span>
              </td>
              <td>{pay.amount?.toLocaleString()}원</td>
              <td>{pay.paidAt?.slice(0, 16).replace("T", " ")}</td>
              <td>
                <button
                  css={s.detailBtn}
                  onClick={() =>
                    navigate(`/admin/store/payments/${pay.paymentId}`)
                  }
                >
                  상세보기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminStorePaymentListPage;
