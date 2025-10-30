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

  // ✅ 장바구니 추가
  const addCartMutation = useMutation(postStoreCartRequest, {
    onSuccess: () => alert("🛒 장바구니에 추가되었습니다!"),
    onError: (err) => console.error("장바구니 오류:", err),
  });

  // ✅ 찜 등록
  const addWishlistMutation = useMutation(postStoreWishlistRequest, {
    onSuccess: () => alert("❤️ 찜 목록에 추가되었습니다!"),
    onError: (err) => console.error("찜 오류:", err),
  });

  // ✅ 수량 조절
  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "plus" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  // ✅ 장바구니 추가 클릭
  const handleAddCart = () => {
    if (!principal) return alert("로그인 후 이용 가능합니다.");
    addCartMutation.mutate({
      productId: product.productId,
      quantity,
    });
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

  return (
    <div css={s.container}>
      <div css={s.quantityBox}>
        <button onClick={() => handleQuantityChange("minus")}>−</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange("plus")}>＋</button>
      </div>

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
