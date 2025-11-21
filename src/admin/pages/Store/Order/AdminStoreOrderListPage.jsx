/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreOrderListPage.style";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  getAdminStoreOrderList,
  deleteAdminStoreOrder,
} from "../../../apis/storeAdminApi";
import { useState } from "react";

const AdminStoreOrderListPage = () => {
  const navigate = useNavigate();
  const size = 10;
  const [page, setPage] = useState(1);

  const { data, isLoading, error, refetch } = useQuery(
    ["adminStoreOrderList", page],
    () => getAdminStoreOrderList(page, size),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  const items = data?.data?.items ?? [];
  const total = data?.data?.total ?? 0;
  const totalPages = Math.ceil(total / size);

  const orderStatusMap = {
    READY: "주문 접수",
    PAID: "결제 완료",
    SHIPPING: "배송 중",
    DELIVERED: "배송 완료",
    CANCELED: "주문 취소",
  };

  const shippingStatusMap = {
    READY: "배송 준비",
    SHIPPING: "배송 중",
    DELIVERED: "배송 완료",
  };

  return (
    <div css={s.wrap}>
      <h1 css={s.title}>주문 목록</h1>

      <table css={s.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>회원</th>
            <th>상품</th>
            <th>수량</th>
            <th>총 금액</th>
            <th>결제 상태</th>
            <th>배송 상태</th>
            <th>주문일</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.orderId}>
              <td
                css={s.clickable}
                onClick={() => navigate(`/admin/store/orders/${item.orderId}`)}
              >
                {item.orderId}
              </td>

               <td
                css={s.clickable}
                onClick={() => navigate(`/admin/store/orders/${item.orderId}`)}
              >
                {item.userId}
              </td>

              <td css={s.productCell}>
                <img
                  src={item.productImageUrl}
                  css={s.thumb}
                  alt=""
                  onClick={() => window.open(item.productImageUrl, "_blank")}
                />
                <span 
                  css={s.clickable} 
                  onClick={() => navigate(`/admin/store/orders/${item.orderId}`)}
                  >{item.productName}
                </span>
              </td>

              <td>{item.quantity}개</td>

              <td>{(item.totalAmount ?? 0).toLocaleString()}원</td>

              <td>
                <span css={s.statusTag}>
                  {item.paymentStatus ?? "미결제"}
                </span>
              </td>

              <td>
                <span css={s.statusTag}>
                  {shippingStatusMap[item.shippingStatus] ?? "정보 없음"}
                </span>
              </td>

              <td>{item.orderDate?.replace("T", " ")}</td>

              <td>
                <button
                  css={s.deleteButton}
                  onClick={() => {
                    if (window.confirm("정말 삭제하시겠습니까?")) {
                      deleteAdminStoreOrder(item.orderId).then(() => {
                        alert("삭제 완료");
                        refetch();
                      });
                    }
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div css={s.pagination}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          이전
        </button>

        <span>
          {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default AdminStoreOrderListPage;
