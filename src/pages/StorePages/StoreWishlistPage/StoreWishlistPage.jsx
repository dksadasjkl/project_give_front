/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMyStoreWishlistRequest, deleteStoreWishlistRequest } from "../../../apis/api/Store/storeWishlist";
import { useNavigate } from "react-router-dom";

function StoreWishlistPage({ principal }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const size = 6;
  const pageBlock = 5;

  const { data, isLoading } = useQuery({
    queryKey: ["getMyStoreWishlistRequest", page],
    queryFn: () => getMyStoreWishlistRequest(page, size),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const deleteWishlistMutation = useMutation(deleteStoreWishlistRequest, {
    onSuccess: () => {
      alert("찜 목록에서 제거되었습니다");
      queryClient.invalidateQueries(["getMyStoreWishlistRequest"]);
    },
  });

  const wishlist = data?.data?.wishlists || [];
  const totalCount = data?.data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / size) || 1;

  const startPage = Math.floor((page - 1) / pageBlock) * pageBlock + 1;
  const endPage = Math.min(startPage + pageBlock - 1, totalPages);

  if (!principal) return <p css={s.loginNotice}>로그인 후 이용 가능합니다.</p>;

  return (
    <div css={s.container}>
      <div css={s.title}>내 찜 목록</div>

      {isLoading ? (
        <p css={s.loading}>불러오는 중...</p>
      ) : wishlist.length === 0 ? (
        <p css={s.empty}>찜한 상품이 없습니다.</p>
      ) : (
        <>
          <div css={s.grid}>
            {wishlist.map((item) => (
              <div
                key={item.productId}
                css={s.card}
                onClick={() => navigate(`/store/${item.productId}`)}
              >
                <div css={s.imageBox}>
                  <img src={item.productImageUrl} alt={item.productName} css={s.image} />
                </div>
                <div css={s.info}>
                  <h3>{item.productName}</h3>
                  <p css={s.price}>{item.productPrice?.toLocaleString()}원</p>
                  <button
                    css={s.removeBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteWishlistMutation.mutate(item.productId);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div css={s.pagination}>
            {startPage > 1 && (
              <button onClick={() => setPage(startPage - 1)}>&lt; 이전</button>
            )}
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((num) => (
              <button
                key={num}
                css={[s.pageBtn, page === num && s.pageBtnActive]}
                onClick={() => setPage(num)}
              >
                {num}
              </button>
            ))}
            {endPage < totalPages && (
              <button onClick={() => setPage(endPage + 1)}>다음 &gt;</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default StoreWishlistPage;
