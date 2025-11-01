/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getStoreReviewsWithRatingsRequest,
  postStoreCommentRequest,
  putStoreCommentRequest,
  deleteStoreCommentRequest,
} from "../../../apis/api/Store/storeComment";
import { postStoreReviewRatingRequest } from "../../../apis/api/Store/storeReviewRating";

function ProductReview({ productId, principal }) {
  const queryClient = useQueryClient();

  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(5);

  // ✅ 리뷰 목록 조회
  const { data: reviews, isLoading } = useQuery(
    ["storeReviews", productId],
    async () => await getStoreReviewsWithRatingsRequest(productId),
    {
      refetchOnWindowFocus: false,
    }
  );

  // ✅ 리뷰 등록
  const createCommentMutation = useMutation(
    (data) => postStoreCommentRequest(data),
    {
      onSuccess: () => {
        alert("리뷰가 등록되었습니다!");
        setCommentText("");
        queryClient.invalidateQueries(["storeReviews", productId]);
      },
      onError: (err) => console.error("리뷰 등록 오류:", err),
    }
  );

  // ✅ 별점 등록
  const ratingMutation = useMutation(
    ({ commentId, rating }) =>
      postStoreReviewRatingRequest(commentId, rating),
    {
      onSuccess: () => {
        alert("별점이 등록되었습니다!");
        queryClient.invalidateQueries(["storeReviews", productId]);
      },
    }
  );

  // ✅ 리뷰 수정
  const updateCommentMutation = useMutation(
    ({ commentId, text }) => putStoreCommentRequest(commentId, { commentText: text }),
    {
      onSuccess: () => queryClient.invalidateQueries(["storeReviews", productId]),
    }
  );

  // ✅ 리뷰 삭제
  const deleteCommentMutation = useMutation(
    (commentId) => deleteStoreCommentRequest(commentId),
    {
      onSuccess: () => {
        alert("리뷰가 삭제되었습니다.");
        queryClient.invalidateQueries(["storeReviews", productId]);
      },
    }
  );

  if (isLoading) return <p css={s.loading}>리뷰 불러오는 중...</p>;

  return (
    <div css={s.container}>
      <h3 css={s.title}>상품 리뷰</h3>

      {/* 작성 영역 */}
      {principal ? (
        <div css={s.form}>
          <textarea
            css={s.textarea}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="리뷰를 작성해주세요"
          />
          <div css={s.ratingBox}>
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                css={num <= rating ? s.starActive : s.star}
                onClick={() => setRating(num)}
              >
                ★
              </span>
            ))}
          </div>
          <button
            css={s.submitBtn}
            onClick={() =>
              createCommentMutation.mutate({
                productId,
                commentText,
              })
            }
          >
            등록
          </button>
        </div>
      ) : (
        <p css={s.loginNotice}>로그인 후 리뷰를 작성할 수 있습니다.</p>
      )}

      {/* 리뷰 목록 */}
      <div css={s.reviewList}>
        {reviews?.data?.length > 0 ? (
          reviews.data.map((r) => (
            <div key={r.commentId} css={s.reviewCard}>
              <div css={s.reviewHeader}>
                <p css={s.user}>👤 사용자 #{r.userId}</p>
                <p css={s.date}>
                  {new Date(r.createDate).toLocaleDateString()}
                </p>
              </div>
              <div css={s.stars}>
                {"★".repeat(Math.round(r.averageRating || 0))}
                {"☆".repeat(5 - Math.round(r.averageRating || 0))}
              </div>
              <p css={s.text}>{r.commentText}</p>

              {principal?.userId === r.userId && (
                <div css={s.actions}>
                  <button
                    css={s.actionBtn}
                    onClick={() =>
                      updateCommentMutation.mutate({
                        commentId: r.commentId,
                        text: prompt("수정할 내용을 입력하세요", r.commentText),
                      })
                    }
                  >
                    수정
                  </button>
                  <button
                    css={s.actionBtn}
                    onClick={() =>
                      deleteCommentMutation.mutate(r.commentId)
                    }
                  >
                    삭제
                  </button>
                </div>
              )}

              {/* 별점 등록 */}
              {principal && (
                <div css={s.rateBox}>
                  <span>별점 주기:</span>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <span
                      key={num}
                      css={s.starSmall}
                      onClick={() =>
                        ratingMutation.mutate({
                          commentId: r.commentId,
                          rating: num,
                        })
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p css={s.noReview}>등록된 리뷰가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default ProductReview;
