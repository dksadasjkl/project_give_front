/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { postStorePaymentRequest } from "../../../apis/api/Store/storePayment";
import { postStoreOrderRequest } from "../../../apis/api/Store/storeOrder";
import { useState } from "react";
import { portOnePayRequest } from "../../../apis/api/Order/portOne";

function StorePaymentPage({ principal }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, quantity } = location.state || {};

  const [isPaying, setIsPaying] = useState(false);

  // ✅ 결제 정보 등록 (서버 저장)
  const paymentMutation = useMutation(postStorePaymentRequest, {
    onSuccess: () => {
      alert("🎉 결제가 완료되었습니다! 포인트가 적립되었습니다.");
      navigate("/store");
    },
    onError: (err) => {
      console.error("결제 내역 저장 오류:", err);
      alert("❌ 결제 내역 저장에 실패했습니다.");
    },
  });

  // ✅ PortOne 카카오페이 결제 요청
  const handleKakaoPay = async () => {
    if (!principal) return alert("로그인 후 이용해주세요!");
    if (!product) return alert("상품 정보가 없습니다.");

    setIsPaying(true);

    try {
      // 1️⃣ PortOne 결제 실행
      const payResult = await portOnePayRequest({
        orderName: `${product.productName}`,
        totalAmount: product.productPrice * quantity,
      });

      if (payResult.code) {
        alert("❌ 결제가 취소되었습니다.");
        setIsPaying(false);
        return;
      }

      // 2️⃣ 결제 성공 시 주문 생성
      const orderDto = {
        productId: product.productId,
        quantity,
        totalAmount: product.productPrice * quantity,
      };

      const orderResponse = await postStoreOrderRequest(orderDto);
      const orderId = orderResponse.data.orderId || 1;

      // 3️⃣ 결제 내역 서버 저장
      paymentMutation.mutate({
        orderId,
        paymentMethod: "KAKAO_PAY",
        paymentStatus: "    ",
        amount: product.productPrice * quantity,
        transactionId: payResult.paymentId, // PortOne에서 받은 결제 ID
      });
    } catch (error) {
      console.error("결제 오류:", error);
      alert("❌ 결제 중 오류가 발생했습니다.");
    } finally {
      setIsPaying(false);
    }
  };

  if (!product)
    return <div css={s.loading}>결제할 상품 정보를 불러오는 중...</div>;

  return (
    <div css={s.container}>
      <h2 css={s.title}>💳 카카오페이 결제</h2>

      <div css={s.productBox}>
        <img src={product.productImageUrl} alt={product.productName} />
        <div css={s.productInfo}>
          <h3>{product.productName}</h3>
          <p>{product.productDescription}</p>
          <p>수량: {quantity}개</p>
          <p css={s.price}>
            총 결제 금액:{" "}
            <strong>
              {(product.productPrice * quantity).toLocaleString()}원
            </strong>
          </p>
        </div>
      </div>

      <div css={s.paymentBox}>
        <h4>결제 수단</h4>
        <div css={s.methodBox}>
          <div css={s.kakaoMethod}>🟡 카카오페이</div>
        </div>

        <button
          css={s.payBtn}
          onClick={handleKakaoPay}
          disabled={isPaying}
        >
          {isPaying ? "결제 처리 중..." : "카카오페이로 결제하기"}
        </button>
      </div>
    </div>
  );
}

export default StorePaymentPage;
