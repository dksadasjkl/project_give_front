/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMyStoreOrdersRequest, putStoreOrderConfirmRequest } from "../../../apis/api/Store/storeOrder";

function StoreOrderPage({ principal }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [selectedOrder, setSelectedOrder] = useState(null);

  // ✅ 주문 목록 조회
  const { data, isLoading } = useQuery(
    ["getMyStoreOrdersRequest"],
    getMyStoreOrdersRequest,
    {
      refetchOnWindowFocus: false,
      enabled: !!principal,
    }
  );

  const orders = data?.data || [];

  // ✅ 구매 확정 API
  const confirmOrderMutation = useMutation(putStoreOrderConfirmRequest, {
    onSuccess: () => {
      alert("구매가 확정되었습니다! 이제 리뷰 작성이 가능합니다.");
      queryClient.invalidateQueries(["getMyStoreOrdersRequest"]);
    },
    onError: (err) => {
      console.error("구매 확정 실패:", err);
      alert("구매 확정 중 오류가 발생했습니다.");
    },
  });

  const handleConfirm = (orderId) => {
    if (window.confirm("이 주문을 구매 확정하시겠습니까?")) {
      confirmOrderMutation.mutate(orderId);
    }
  };

  if (!principal)
    return <p css={s.loginNotice}>로그인 후 이용 가능합니다.</p>;
  if (isLoading)
    return <p css={s.loading}>주문 내역을 불러오는 중...</p>;
  if (!orders.length)
    return <p css={s.empty}>주문 내역이 없습니다.</p>;

  return (
    <div css={s.container}>
      <h2 css={s.title}>🧾 내 주문 내역</h2>

      {orders.map((order) => (
        <div key={order.orderId} css={s.orderCard}>
          {/* 주문 헤더 */}
          <div css={s.orderHeader}>
            <h3>주문번호 #{order.orderId}</h3>
            <p>
              상태:{" "}
              <strong>
                {order.orderStatusText ||
                  order.orderStatus ||
                  "READY"}
              </strong>
            </p>
          </div>

          {/* 주문 상품 */}
          <div css={s.orderBody}>
            <img
              src={order.productImageUrl}
              alt={order.productName}
              css={s.image}
              onClick={() => navigate(`/store/${order.productId}`)}
            />
            <div css={s.info}>
              <p css={s.name}>{order.productName}</p>
              <p css={s.price}>
                {order.totalAmount?.toLocaleString()}원
              </p>
              <p>수량: {order.quantity}개</p>
              <p>
                주문일:{" "}
                {order.orderDate
                  ? new Date(order.orderDate).toLocaleDateString("ko-KR")
                  : "-"}
              </p>
            </div>
          </div>

          {/* 상세보기 / 구매확정 */}
          <div css={s.actions}>
            {order.orderStatus === "DELIVERED" && (
              <button
                css={s.confirmBtn}
                onClick={() => handleConfirm(order.orderId)}
              >
                구매확정
              </button>
            )}
            <button
              css={s.detailBtn}
              onClick={() =>
                setSelectedOrder(
                  selectedOrder === order.orderId ? null : order.orderId
                )
              }
            >
              {selectedOrder === order.orderId ? "닫기" : "상세보기"}
            </button>
          </div>

          {/* 상세정보 */}
          {selectedOrder === order.orderId && (
            <div css={s.detailBox}>
              <h4>💳 결제 정보</h4>
              {order.paymentMethod ? (
                <ul>
                  <li>결제 수단: {order.paymentMethod}</li>
                  <li>결제 상태: {order.paymentStatus}</li>
                  <li>
                    결제 금액:{" "}
                    {order.paymentAmount
                      ? order.paymentAmount.toLocaleString()
                      : order.totalAmount.toLocaleString()}
                    원
                  </li>
                </ul>
              ) : (
                <p>결제 내역 없음</p>
              )}

              <h4>🚚 배송 정보</h4>
              {order.recipientName ? (
                <ul>
                  <li>수령인: {order.recipientName}</li>
                  <li>배송지: {order.address || "주소 미입력"}</li>
                  <li>택배사: {order.shippingCarrier || "CJ대한통운"}</li>
                  <li>
                    운송장번호:{" "}
                    {order.trackingNumber || "배송 준비 중"}
                  </li>
                  <li>
                    배송 상태:{" "}
                    {order.shippingStatus || "READY"}
                  </li>
                </ul>
              ) : (
                <p>배송 정보 없음</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StoreOrderPage;
