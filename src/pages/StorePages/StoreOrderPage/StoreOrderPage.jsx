/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  getMyStoreOrdersRequest,
} from "../../../apis/api/Store/storeOrder";
import {
  getStorePaymentByOrderRequest,
} from "../../../apis/api/Store/storePayment";
import {
  getStoreShippingByOrderRequest,
} from "../../../apis/api/Store/storeShipping";

function StoreOrderPage({ principal }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);

  useQuery(["getMyStoreOrdersRequest"], getMyStoreOrdersRequest, {
    refetchOnWindowFocus: false,
    enabled: !!principal,
    onSuccess: (res) => setOrders(res.data || []),
    onError: (err) => console.error("주문 목록 조회 오류:", err),
  });

  const handleViewDetails = async (orderId) => {
    setSelectedOrder(orderId);
    try {
      const paymentRes = await getStorePaymentByOrderRequest(orderId);
      const shippingRes = await getStoreShippingByOrderRequest(orderId);
      setPaymentInfo(paymentRes.data);
      setShippingInfo(shippingRes.data);
    } catch (err) {
      console.error("상세 조회 오류:", err);
    }
  };

  if (!principal) return <p css={s.loginNotice}>로그인 후 이용 가능합니다.</p>;
  if (!orders.length)
    return <p css={s.loading}>주문 내역을 불러오는 중...</p>;

  return (
    <div css={s.container}>
      <h2 css={s.title}>🧾 내 주문 내역</h2>

      {orders.length === 0 ? (
        <p css={s.empty}>주문 내역이 없습니다.</p>
      ) : (
        orders.map((order) => (
          <div key={order.orderId} css={s.orderCard}>
            <div css={s.orderHeader}>
              <h3>주문번호 #{order.orderId}</h3>
              <p>상태: {order.orderStatus}</p>
            </div>

            <div css={s.orderBody}>
              <img
                src={order.productImageUrl}
                alt={order.productName}
                css={s.image}
                onClick={() => navigate(`/store/${order.productId}`)}
              />
              <div css={s.info}>
                <p css={s.name}>{order.productName}</p>
                <p css={s.price}>{order.totalAmount?.toLocaleString()}원</p>
                <p>수량: {order.quantity}개</p>
                <p>주문일: {new Date(order.createDate).toLocaleDateString()}</p>
              </div>
            </div>

            <div css={s.actions}>
              <button
                css={s.detailBtn}
                onClick={() => handleViewDetails(order.orderId)}
              >
                상세보기
              </button>
            </div>

            {selectedOrder === order.orderId && (
              <div css={s.detailBox}>
                <h4>💳 결제 정보</h4>
                {paymentInfo ? (
                  <ul>
                    <li>결제수단: {paymentInfo.paymentMethod}</li>
                    <li>결제상태: {paymentInfo.paymentStatus}</li>
                    <li>
                      결제금액: {paymentInfo.amount?.toLocaleString()}원
                    </li>
                  </ul>
                ) : (
                  <p>결제 내역 없음</p>
                )}

                <h4>🚚 배송 정보</h4>
                {shippingInfo ? (
                  <ul>
                    <li>배송상태: {shippingInfo.shippingStatus}</li>
                    <li>배송시작일: {shippingInfo.startDate || "-"}</li>
                    <li>도착예정일: {shippingInfo.endDate || "-"}</li>
                  </ul>
                ) : (
                  <p>배송 정보 없음</p>
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default StoreOrderPage;
