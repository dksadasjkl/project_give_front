/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMyStoreCartRequest } from "../../../apis/api/Store/storeCart";
import { postStoreOrderRequest } from "../../../apis/api/Store/storeOrder";
import { postStorePaymentRequest } from "../../../apis/api/Store/storePayment";
import { postStoreShippingRequest } from "../../../apis/api/Store/storeShipping";
import { portOnePayRequest } from "../../../apis/api/Order/portOne";
import { useState } from "react";
import { deleteStoreCartAllRequest } from "../../../apis/api/Store/storeCart";
import DaumPostcode from "react-daum-postcode";

function StorePaymentPage({ principal }) {
  const navigate = useNavigate();
  const location = useLocation();

  // 일반 결제용 데이터
  const product = location.state?.product || null;
  const quantity = location.state?.quantity || null;

  // 장바구니 결제 여부
  const fromCart = location.state?.fromCart || false;

  const [isPaying, setIsPaying] = useState(false);
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  // 배송 정보 기본값
  const [recipientName, setRecipientName] = useState(
    principal?.name || principal?.nickname || ""
  );
  const [recipientPhone, setRecipientPhone] = useState(principal?.phone || "");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  // 장바구니 데이터 조회 (fromCart일 때만)
  const { data: cartResponse } = useQuery(
    ["getMyStoreCartRequest"],
    getMyStoreCartRequest,
    { enabled: fromCart }
  );

  const cartList = cartResponse?.data || [];

  // 상품 총액 계산
  let productsTotal = 0;

  if (fromCart) {
    productsTotal = cartList.reduce(
      (sum, item) => sum + item.productPrice * item.quantity,
      0
    );
  } else if (product && quantity) {
    productsTotal = product.productPrice * quantity;
  }

  const totalAmount = productsTotal + 3000;

  const handleComplete = (data) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsPostcodeOpen(false);
  };

  const generateTrackingNumber = () => {
    const random = Math.floor(1000000000 + Math.random() * 9000000000);
    return `C${random}`;
  };

 const handleKakaoPay = async () => {
  if (!recipientName || !recipientPhone || !zipcode || !address) {
    alert("배송 정보를 모두 입력해 주세요.");
    return;
  }

  setIsPaying(true);

  try {
    const payResult = await portOnePayRequest({
      orderName: fromCart ? "장바구니 결제" : product.productName,
      totalAmount
    });

    if (payResult.code) {
      alert("결제가 취소되었습니다.");
      setIsPaying(false);
      return;
    }

    let orderIds = [];

    // 일반 결제
    if (!fromCart) {
      const orderResponse = await postStoreOrderRequest({
        productId: product.productId,
        quantity,
        totalAmount
      });

      orderIds = orderResponse.data.orderIds;  // 배열 형태로 통일
    }

    // 장바구니 결제
    if (fromCart) {
      const orderResponse = await postStoreOrderRequest({
        items: cartList.map(item => ({
          productId: item.productId,
          quantity: item.quantity
        })),
        totalAmount
      });

      orderIds = orderResponse.data.orderIds;    // 여러 개
    }

    // 모든 주문에 결제 정보 저장
    await Promise.all(
      orderIds.map(id =>
        postStorePaymentRequest({
          orderId: id,
          paymentMethod: "KAKAO_PAY",
          paymentStatus: "SUCCESS",
          amount: totalAmount,
          transactionId: payResult.paymentId
        })
      )
    );

    // 모든 주문에 배송 정보 저장
    await Promise.all(
      orderIds.map(id =>
        postStoreShippingRequest({
          orderId: id,
          recipientName,
          recipientPhone,
          address: `${address} ${detailAddress}`,
          zipcode,
          shippingCarrier: "CJ대한통운",
          trackingNumber: generateTrackingNumber()
        })
      )
    );

    if (fromCart) {
      try {
        await deleteStoreCartAllRequest();
      } catch (err) {
        console.error("장바구니 전체 삭제 오류:", err);
      }
    }

    alert("결제가 완료되었습니다.");
    navigate("/store/orders");

  } catch (error) {
    console.error(error);
    alert("결제 중 오류가 발생했습니다.");
  } finally {
    setIsPaying(false);
  }
};

  // 일반 결제인데 데이터를 못받은 경우
  if (!fromCart && !product) {
    return <div css={s.loading}>결제할 상품 정보를 불러오는 중입니다...</div>;
  }

  // 장바구니 결제인데 데이터 없는 경우
  if (fromCart && cartList.length === 0) {
    return <div css={s.loading}>장바구니 정보를 불러오는 중입니다...</div>;
  }

  return (
    <div css={s.container}>
      <h2 css={s.title}>카카오페이 결제</h2>

      <div css={s.productBox}>
        <div>
          {fromCart ? (
            <>
              <p>상품 종류: {cartList.length}종</p>
              <p>상품 총액: {productsTotal.toLocaleString()}원</p>
            </>
          ) : (
            <>
              <p>상품명: {product.productName}</p>
              <p>수량: {quantity}개</p>
              <p>
                상품 금액: {(product.productPrice * quantity).toLocaleString()}
                원
              </p>
            </>
          )}

          <p>배송비: 3,000원</p>
          <p css={s.price}>최종 결제 금액: {totalAmount.toLocaleString()}원</p>
        </div>
      </div>

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
          placeholder="연락처"
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
                닫기
              </button>
            </div>
          </div>
        )}

        <input
          type="text"
          placeholder="기본 주소"
          value={address}
          readOnly
          css={s.input}
        />

        <input
          type="text"
          placeholder="상세 주소"
          value={detailAddress}
          onChange={(e) => setDetailAddress(e.target.value)}
          css={s.input}
        />
      </div>

      <div css={s.paymentBox}>
        <h4>결제 수단</h4>

        <button css={s.payBtn} onClick={handleKakaoPay} disabled={isPaying}>
          {isPaying ? "결제 처리 중..." : "카카오페이로 결제하기"}
        </button>
      </div>
    </div>
  );
}

export default StorePaymentPage;
