/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getMyStoreCartRequest,
  putStoreCartQuantityRequest,
  deleteStoreCartItemRequest,
} from "../../../apis/api/Store/storeCart";
import { useNavigate } from "react-router-dom";

function StoreCartPage({ principal }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [cartList, setCartList] = useState([]);

  // ✅ 장바구니 조회
  useQuery(["getMyStoreCartRequest"], getMyStoreCartRequest, {
    refetchOnWindowFocus: false,
    enabled: !!principal,
    onSuccess: (res) => setCartList(res.data || []),
    onError: (err) => console.error("장바구니 조회 오류:", err),
  });

  // ✅ 수량 변경
  const updateQuantityMutation = useMutation(
    ({ cartId, quantity }) => putStoreCartQuantityRequest(cartId, quantity),
    {
      onSuccess: () => queryClient.invalidateQueries(["getMyStoreCartRequest"]),
      onError: (err) => console.error("수량 변경 오류:", err),
    }
  );

  // ✅ 상품 삭제
  const deleteCartMutation = useMutation(deleteStoreCartItemRequest, {
    onSuccess: () => {
      alert("상품이 장바구니에서 삭제되었습니다 🗑️");
      queryClient.invalidateQueries(["getMyStoreCartRequest"]);
    },
  });

  if (!principal) return <p css={s.loginNotice}>로그인 후 이용 가능합니다.</p>;
  if (!cartList.length)
    return <p css={s.loading}>장바구니를 불러오는 중...</p>;

  const totalPrice = cartList.reduce(
    (acc, item) => acc + (item.productPrice || 0) * item.quantity,
    0
  );

  return (
    <div css={s.container}>
      <h2 css={s.title}>🛒 내 장바구니</h2>

      {cartList.length === 0 ? (
        <p css={s.empty}>장바구니가 비어 있습니다.</p>
      ) : (
        <>
          {cartList.map((item) => (
            <div key={item.cartId} css={s.cartItem}>
              <img
                src={item.productImageUrl}
                alt={item.productName}
                css={s.image}
                onClick={() => navigate(`/store/${item.productId}`)}
              />

              <div css={s.info}>
                <h3>{item.productName}</h3>
                <p>{item.productPrice?.toLocaleString()}원</p>

                <div css={s.quantityBox}>
                  <button
                    onClick={() =>
                      updateQuantityMutation.mutate({
                        cartId: item.cartId,
                        quantity: Math.max(1, item.quantity - 1),
                      })
                    }
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantityMutation.mutate({
                        cartId: item.cartId,
                        quantity: item.quantity + 1,
                      })
                    }
                  >
                    ＋
                  </button>
                </div>

                <button
                  css={s.deleteBtn}
                  onClick={() => deleteCartMutation.mutate(item.cartId)}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}

          <div css={s.summary}>
            <h3>총 결제 금액</h3>
            <p css={s.total}>{totalPrice.toLocaleString()}원</p>
            <button
              css={s.orderBtn}
              onClick={() =>
                navigate(`/store/payment`, {
                  state: { fromCart: true },
                })
              }
            >
              💳 결제하기
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default StoreCartPage;
