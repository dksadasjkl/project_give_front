/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./style";
import { useQuery } from "@tanstack/react-query";
import { FaRegCommentDots, FaStar } from "react-icons/fa";
import { getStoreReviewsWithRatingsRequest } from "../../../apis/api/Store/storeComment";

function StoreCard({ product, onClick }) {
  const { productId, productImageUrl, productName, productPrice } = product;

  // ✅ 댓글 + 평균 평점 조회
  const { data: reviews = [] } = useQuery(
    ["getStoreReviewsWithRatingsRequest", productId],
    async () => await getStoreReviewsWithRatingsRequest(productId),
    {
      enabled: !!productId,
      refetchOnWindowFocus: false,
      select: (res) => res?.data || [],
    }
  );

  const commentCount = reviews.length;
const averageRating =
    commentCount > 0
      ? (
          reviews.reduce((sum, r) => sum + (r.averageRating || 0), 0) / commentCount
        ).toFixed(1)
      : "0.0";

  return (
    <div css={s.card} onClick={onClick}>
      <div css={s.imageWrapper}>
        <img src={productImageUrl} alt={productName} css={s.image} />
      </div>

      <div css={s.info}>
        <h3 css={s.name}>{productName}</h3>

        {/* ✅ 가격 왼쪽 / 리뷰·평점 오른쪽 */}
        <div css={s.priceReviewRow}>
          <span css={s.price}>{productPrice.toLocaleString()}원</span>

          <div css={s.reviewBox}>
            <FaRegCommentDots size={14} color="#666" />
            <span css={s.commentCount}>{commentCount}</span>
            <span css={s.divider}>|</span>
            <FaStar size={14} color="#FFD700" />
            <span css={s.ratingText}>{averageRating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreCard;
