/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getMyStoreWishlistRequest,
  deleteStoreWishlistRequest,
} from "../../../apis/api/Store/storeWishlist";
import { useNavigate } from "react-router-dom";

function StoreWishlistPage({ principal }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [wishlist, setWishlist] = useState([]);

  // ✅ 찜 목록 조회
  useQuery(["getMyStoreWishlistRequest"], getMyStoreWishlistRequest, {
    refetchOnWindowFocus: false,
    enabled: !!principal,
    onSuccess: (res) => setWishlist(res.data || []),
    onError: (err) => console.error("찜목록 조회 오류:", err),
  });

  // ✅ 삭제
  const deleteWishlistMutation = useMutation(deleteStoreWishlistRequest, {
    onSuccess: () => {
      alert("찜 목록에서 제거되었습니다 ❤️‍🔥");
      queryClient.invalidateQueries(["getMyStoreWishlistRequest"]);
    },
  });

  if (!principal)
    return <p css={s.loginNotice}>로그인 후 이용 가능합니다.</p>;
  if (!wishlist.length)
    return <p css={s.loading}>찜 목록을 불러오는 중...</p>;

  return (
    <div css={s.container}>
      <div css={s.title}>찜 목록</div>

      {wishlist.length === 0 ? (
        <p css={s.empty}>찜한 상품이 없습니다.</p>
      ) : (
        <div css={s.grid}>
          {wishlist.map((item) => (
            <div
              key={item.productId}
              css={s.card}
              onClick={() => navigate(`/store/${item.productId}`)}
            >
              <div css={s.imageBox}>
                <img
                  src={item.productImageUrl}
                  alt={item.productName}
                  css={s.image}
                />
              </div>
              <div css={s.info}>
                <h3>{item.productName}</h3>
                <p css={s.price}>{item.productPrice?.toLocaleString()}원</p>
                <button
                  css={s.removeBtn}
                  onClick={(e) => {
                    e.stopPropagation(); // ✅ 카드 클릭 이벤트 차단
                    deleteWishlistMutation.mutate(item.productId);
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StoreWishlistPage;
