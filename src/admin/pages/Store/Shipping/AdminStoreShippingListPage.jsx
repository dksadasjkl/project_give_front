/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreShippingListPage.style";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAdminStoreShippingList } from "../../../apis/storeAdminApi";

/* ================================
 * 🔵 한글 매핑 테이블
 * ================================ */
const SHIPPING_STATUS_MAP = {
  READY: "배송 준비중",
  IN_TRANSIT: "배송중",
  DELIVERED: "배송완료",
};

function AdminStoreShippingListPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const size = 10;

  const { data, isLoading, error } = useQuery(
    ["adminStoreShippingList", page],
    () => getAdminStoreShippingList(page, size),
    { refetchOnWindowFocus: false }
  );

  const list = Array.isArray(data?.data?.items) ? data.data.items : [];
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / size);

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>배송 관리</h1>

      <table css={s.table}>
        <thead>
          <tr>
            <th>배송 ID</th>
            <th>주문 ID</th>
            <th>수령인</th>
            <th>연락처</th>
            <th>주소</th>
            <th>우편번호</th>
            <th>배송사</th>
            <th>송장번호</th>
            <th>배송 상태</th>
            <th>배송 시작일</th>
            <th>배송 완료일</th>
          </tr>
        </thead>

        <tbody>
          {list.map((ship) => (
            <tr
              key={ship.shippingId}
              css={s.row}
              onClick={() =>
                navigate(`/admin/store/shipping/${ship.shippingId}`)
              }
            >
              <td>{ship.shippingId}</td>
              <td>{ship.orderId}</td>
              <td>{ship.recipientName}</td>
              <td>{ship.recipientPhone}</td>
              <td>{ship.address}</td>
              <td>{ship.zipcode}</td>
              <td>{ship.shippingCarrier}</td>
              <td>{ship.trackingNumber}</td>
              <td>{SHIPPING_STATUS_MAP[ship.shippingStatus]}</td>
              <td>{ship.shippedAt?.slice(0, 16).replace("T", " ")}</td>
              <td>
                {ship.deliveredAt
                  ? ship.deliveredAt.slice(0, 16).replace("T", " ")
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
        <div css={s.pagination}>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            이전
          </button>

          <span>
            {page} / {totalPages}
          </span>

          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            다음
          </button>
        </div>
    </div>
  );
}

export default AdminStoreShippingListPage;
