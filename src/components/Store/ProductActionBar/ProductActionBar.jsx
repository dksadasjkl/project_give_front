/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation } from "@tanstack/react-query";
import { postStoreCartRequest } from "../../../apis/api/Store/storeCart";
import { postStoreWishlistRequest } from "../../../apis/api/Store/storeWishlist";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ProductActionBar({ product, principal }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [showPreview, setShowPreview] = useState(false); // ✅ 미리보기 표시 상태

  // ✅ 장바구니 추가
  const addCartMutation = useMutation(postStoreCartRequest, {
    onSuccess: () => alert("🛒 장바구니에 추가되었습니다!"),
    onError: (err) => {
      const message = err?.response?.data?.message;
      alert(message ? `⚠️ ${message}` : "장바구니 추가 중 오류가 발생했습니다.");
    },
  });

  // ✅ 찜 등록
  const addWishlistMutation = useMutation(postStoreWishlistRequest, {
    onSuccess: () => alert("❤️ 찜 목록에 추가되었습니다!"),
    onError: (err) => {
      const message = err?.response?.data?.message;
      alert(message ? `⚠️ ${message}` : "찜 등록 중 오류가 발생했습니다.");
    },
  });

  // ✅ 수량 조절
  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      const newQuantity = type === "plus" ? prev + 1 : Math.max(1, prev - 1);
      if (newQuantity > 1) setShowPreview(true); // ✅ 수량 증가 시 미리보기 표시
      return newQuantity;
    });
  };

  // ✅ 미리보기 닫기 버튼
  const handleClosePreview = () => {
    setShowPreview(false);
  };

  // ✅ 장바구니 추가 클릭
  const handleAddCart = () => {
    if (!principal) return alert("로그인 후 이용 가능합니다.");
    addCartMutation.mutate({ productId: product.productId, quantity });
  };

  // ✅ 찜 등록 클릭
  const handleAddWishlist = () => {
    if (!principal) return alert("로그인 후 이용 가능합니다.");
    addWishlistMutation.mutate(product.productId);
  };

  // ✅ 결제 페이지 이동
  const handleOrder = () => {
    if (!principal) return alert("로그인 후 이용 가능합니다.");
    navigate(`/store/payment`, { state: { product, quantity } });
  };

  const totalPrice = (product.productPrice * quantity).toLocaleString();

  return (
    <div css={s.container}>
      {/* 수량 + 금액 */}
      <div css={s.quantityContainer}>
          <div css={s.quantityBox}>
            <button onClick={() => handleQuantityChange("minus")}>−</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange("plus")}>＋</button>
          </div>
      </div>

      {/* ✅ 장바구니 미리보기 (수량 1 이상일 때만 표시) */}
      {showPreview && (
        <div css={s.previewBox}>
          <div css={s.previewHeader}>
            <div css={s.previewTitle}>담은 상품 확인</div>
            <button css={s.closeBtn} onClick={handleClosePreview}>
              ✕
            </button>
          </div>

          <div css={s.previewItem}>
            <span css={s.previewName}>{product.productName}</span>
            <span css={s.previewCount}>x {quantity}</span>
            <span css={s.previewPrice}>{totalPrice}원</span>
          </div>
        </div>
      )}

      {/* 구매 버튼 */}
      <div css={s.actions}>
        <button css={s.wishlistBtn} onClick={handleAddWishlist}>
          ❤️ 찜
        </button>
        <button css={s.cartBtn} onClick={handleAddCart}>
          🛒 장바구니
        </button>
        <button css={s.orderBtn} onClick={handleOrder}>
          💳 구매하기
        </button>
      </div>

    </div>
  );
}

export default ProductActionBar;
