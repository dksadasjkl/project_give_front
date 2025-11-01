/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { postStorePaymentRequest } from "../../../apis/api/Store/storePayment";
import { postStoreOrderRequest } from "../../../apis/api/Store/storeOrder";
import { postStoreShippingRequest } from "../../../apis/api/Store/storeShipping";
import { portOnePayRequest } from "../../../apis/api/Order/portOne";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { useInput } from "../../../hooks/useInput";

function StorePaymentPage({ principal }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, quantity } = location.state || {};

  const [isPaying, setIsPaying] = useState(false);
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  // ✅ 기본값: principal에서 수령인 정보 불러오기
  const [recipientName, setRecipientName] = useState(
    principal?.name || principal?.nickname || ""
  );
  const [recipientPhone, setRecipientPhone] = useState(
    principal?.phone || ""
  );
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, onChangeDetailAddress] = useInput("address");

  // ✅ 랜덤 운송장번호 생성
  const generateTrackingNumber = () => {
    const randomDigits = Math.floor(1000000000 + Math.random() * 9000000000);
    return `C${randomDigits}`;
  };

  // ✅ 다음 주소 API 완료 이벤트
  const handleComplete = (data) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsPostcodeOpen(false);
  };

  // ✅ 결제 실행
  const handleKakaoPay = async () => {
    if (!principal) return alert("로그인 후 이용해주세요!");
    if (!product) return alert("상품 정보가 없습니다.");
    if (!recipientName || !recipientPhone || !zipcode || !address)
      return alert("배송 정보를 모두 입력해주세요!");

    setIsPaying(true);

    try {
      // 1️⃣ 포트원 결제 요청
      const payResult = await portOnePayRequest({
        orderName: `${product.productName}`,
        totalAmount: product.productPrice * quantity + 3000,
      });

      if (payResult.code) {
        alert("❌ 결제가 취소되었습니다.");
        setIsPaying(false);
        return;
      }

      // 2️⃣ 주문 생성
      const orderResponse = await postStoreOrderRequest({
        productId: product.productId,
        quantity,
        totalAmount: product.productPrice * quantity + 3000,
      });
      const orderId = orderResponse.data?.orderId;

      // 3️⃣ 결제 내역 저장
      await postStorePaymentRequest({
        orderId,
        paymentMethod: "KAKAO_PAY",
        paymentStatus: "SUCCESS",
        amount: product.productPrice * quantity + 3000,
        transactionId: payResult.paymentId,
      });

      // 4️⃣ 배송 정보 저장
      await postStoreShippingRequest({
        orderId,
        recipientName,
        recipientPhone,
        address: `${address} ${detailAddress}`,
        zipcode,
        shippingCarrier: "CJ대한통운",
        trackingNumber: generateTrackingNumber(),
      });

      alert("🎉 결제가 완료되었습니다! 포인트가 적립되었습니다.");
      navigate("/store/orders");
    } catch (error) {
      console.error(error);
      alert("❌ 결제 중 오류가 발생했습니다.");
    } finally {
      setIsPaying(false);
    }
  };

  const totalAmount = product ? product.productPrice * quantity + 3000 : 0;

  if (!product)
    return <div css={s.loading}>결제할 상품 정보를 불러오는 중...</div>;

  return (
    <div css={s.container}>
      <h2 css={s.title}>💳 카카오페이 결제</h2>

      {/* 상품 요약 */}
      <div css={s.productBox}>
        <img src={product.productImageUrl} alt={product.productName} />
        <div css={s.productInfo}>
          <h3>{product.productName}</h3>
          <p>{product.productDescription}</p>
          <p>수량: {quantity}개</p>
          <p>상품 금액: {(product.productPrice * quantity).toLocaleString()}원</p>
          <p>배송비: +3,000원</p>
          <p css={s.price}>
            총 결제 금액: <strong>{totalAmount.toLocaleString()}원</strong>
          </p>
        </div>
      </div>

      {/* 배송 정보 */}
      <div css={s.shippingBox}>
        <h4>배송 정보</h4>

        <input
          type="text"
          placeholder="수령인 이름"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
          css={s.input}
        />

        <input
          type="text"
          placeholder="연락처 (010-0000-0000)"
          value={recipientPhone}
          onChange={(e) => setRecipientPhone(e.target.value)}
          css={s.input}
        />

        <div css={s.postcodeRow}>
          <input
            type="text"
            placeholder="우편번호"
            value={zipcode}
            readOnly
            css={s.inputSmall}
          />
          <button css={s.postcodeBtn} onClick={() => setIsPostcodeOpen(true)}>
            우편번호 찾기
          </button>
        </div>

        {/* ✅ 다음 주소 API 모달 */}
        {isPostcodeOpen && (
          <div css={s.postcodeOverlay}>
            <div css={s.postcodePopup}>
              <DaumPostcode
                onComplete={handleComplete}
                style={{ width: "100%", height: "400px" }}
              />
              <button
                css={s.closePostcodeBtn}
                onClick={() => setIsPostcodeOpen(false)}
              >
                닫기 ✕
              </button>
            </div>
          </div>
        )}

        <input
          type="text"
          placeholder="기본주소"
          value={address}
          readOnly
          css={s.input}
        />
        <input
          type="text"
          placeholder="상세주소"
          value={detailAddress}
          onChange={onChangeDetailAddress}
          css={s.input}
        />
      </div>

      {/* 결제 수단 */}
      <div css={s.paymentBox}>
        <h4>결제 수단</h4>
        <div css={s.methodBox}>
          <div css={s.kakaoMethod}>🟡 카카오페이</div>
        </div>
        <button css={s.payBtn} onClick={handleKakaoPay} disabled={isPaying}>
          {isPaying ? "결제 처리 중..." : "카카오페이로 결제하기"}
        </button>
      </div>
    </div>
  );
}

export default StorePaymentPage;
