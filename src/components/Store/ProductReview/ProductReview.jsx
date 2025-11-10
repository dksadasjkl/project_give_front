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
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editRating, setEditRating] = useState(0);
  const [isSaving, setIsSaving] = useState(false); // 저장 중 표시

  // ✅ 리뷰 목록 조회
  const { data: reviews, isLoading } = useQuery(
    ["storeReviews", productId],
    async () => await getStoreReviewsWithRatingsRequest(productId),
    { refetchOnWindowFocus: false }
  );

  // ✅ 리뷰 등록
  const createCommentMutation = useMutation(postStoreCommentRequest, {
    onSuccess: () => {
      alert("리뷰가 등록되었습니다!");
      setCommentText("");
      queryClient.invalidateQueries(["storeReviews", productId]);
    },
    onError: (err) => {
      console.error(err);
      alert(err?.response?.data?.message || "리뷰 등록 중 오류가 발생했습니다.");
    },
  });

  // ✅ 별점 등록 및 수정
  const ratingMutation = useMutation(
    ({ commentId, rating }) => postStoreReviewRatingRequest(commentId, rating),
    {
      onError: (error) => {
        const msg = error?.response?.data?.message;
        if (msg === "이미 별점을 등록한 사용자입니다.") {
          alert("이미 별점을 등록한 사용자입니다.");
        } else {
          alert(msg || "별점 등록 중 오류가 발생했습니다.");
        }
      },
    }
  );

  // ✅ 리뷰 수정
  const updateCommentMutation = useMutation(
    ({ commentId, text }) => putStoreCommentRequest(commentId, { commentText: text }),
    {
      onError: (err) => {
        console.error(err);
        alert(err?.response?.data?.message || "리뷰 수정 중 오류가 발생했습니다.");
      },
    }
  );

  // ✅ 리뷰 삭제
  const deleteCommentMutation = useMutation(deleteStoreCommentRequest, {
    onSuccess: () => {
      alert("리뷰가 삭제되었습니다.");
      queryClient.invalidateQueries(["storeReviews", productId]);
    },
    onError: (err) => {
      console.error(err);
      alert(err?.response?.data?.message || "리뷰 삭제 중 오류가 발생했습니다.");
    },
  });

  // ✅ 저장 로직 (댓글 + 별점 병렬 저장)
  const handleSave = async (commentId) => {
    if (!editText.trim()) {
      alert("리뷰 내용을 입력해주세요.");
      return;
    }

    setIsSaving(true);
    try {
      await Promise.all([
        updateCommentMutation.mutateAsync({ commentId, text: editText }),
        ratingMutation.mutateAsync({ commentId, rating: editRating }),
      ]);

      alert("리뷰와 별점이 수정되었습니다!");
      setEditingId(null);
      queryClient.invalidateQueries(["storeReviews", productId]);
    } catch (err) {
      const msg = err?.response?.data?.message || "리뷰/별점 수정 중 오류가 발생했습니다.";
      alert(msg);
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

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
            onClick={() => createCommentMutation.mutate({ productId, commentText })}
            disabled={!commentText.trim()}
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
                <p css={s.date}>{new Date(r.createDate).toLocaleDateString()}</p>
              </div>

              {/* ⭐ 수정 모드 */}
              {editingId === r.commentId ? (
                <div css={s.editForm}>
                  <textarea
                    css={s.textarea}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <div css={s.ratingBox}>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <span
                        key={num}
                        css={num <= editRating ? s.starActive : s.star}
                        onClick={() => setEditRating(num)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div css={s.actions}>
                    <button
                      css={s.submitBtn}
                      disabled={isSaving}
                      onClick={() => handleSave(r.commentId)}
                    >
                      {isSaving ? "저장 중..." : "저장"}
                    </button>
                    <button css={s.actionBtn} onClick={() => setEditingId(null)}>
                      취소
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div css={s.stars}>
                    {"★".repeat(Math.round(r.averageRating || 0))}
                    {"☆".repeat(5 - Math.round(r.averageRating || 0))}
                  </div>
                  <p css={s.text}>{r.commentText}</p>

                  {principal?.userId === r.userId && (
                    <div css={s.actions}>
                      <button
                        css={s.actionBtn}
                        onClick={() => {
                          setEditingId(r.commentId);
                          setEditText(r.commentText);
                          setEditRating(Math.round(r.averageRating || 0));
                        }}
                      >
                        수정
                      </button>
                      <button
                        css={s.actionBtn}
                        onClick={() => deleteCommentMutation.mutate(r.commentId)}
                      >
                        삭제
                      </button>
                    </div>
                  )}
                </>
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
