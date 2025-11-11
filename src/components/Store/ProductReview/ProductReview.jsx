/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState, useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  postStoreCommentRequest,
  deleteStoreCommentRequest,
  getStoreReviewsPageRequest,
} from "../../../apis/api/Store/storeComment";
import { postStoreReviewRatingRequest } from "../../../apis/api/Store/storeReviewRating";
import { postStoreReviewReportRequest } from "../../../apis/api/Store/storeReport";

function ProductReview({
  productId,
  product,
  principal,
  averageRating = 0,
  distribution = [],
}) {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const size = 5;
  const pageBlock = 10;

  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(0);
  const [sortOption, setSortOption] = useState("latest");

  // ✅ 신고 관련 상태
  const [reportTarget, setReportTarget] = useState(null);
  const [reportReason, setReportReason] = useState("");
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  // ✅ 리뷰 데이터 불러오기 (페이지네이션)
  const { data, isLoading } = useQuery(
    ["getStoreReviewsPageRequest", productId, page],
    () => getStoreReviewsPageRequest(productId, page, size, sortOption),
    { keepPreviousData: false }
  );

  const reviews = data?.reviews || [];
  const totalCount = data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / size);

  // ✅ 페이지 그룹 (1~10, 11~20)
  const startPage = Math.floor((page - 1) / pageBlock) * pageBlock + 1;
  const endPage = Math.min(startPage + pageBlock - 1, totalPages);

  const handlePageChange = (num) => setPage(num);
  const handlePrevBlock = () => setPage(startPage - 1);
  const handleNextBlock = () => setPage(endPage + 1);

  // ✅ 리뷰 등록
  const createCommentMutation = useMutation(postStoreCommentRequest, {
    onSuccess: async (res) => {
      const newCommentId = res.data.commentId;
      if (rating >= 1) {
        try {
          await postStoreReviewRatingRequest(newCommentId, rating);
        } catch (e) {
          console.error("⭐ 별점 등록 실패:", e);
        }
      }
      alert("리뷰가 등록되었습니다!");
      setCommentText("");
      setRating(0);
      queryClient.invalidateQueries(["getStoreReviewsPageRequest", productId]);
    },
  });

  // ✅ 리뷰 신고
  const reportMutation = useMutation(
    ({ commentId, reason }) => postStoreReviewReportRequest(commentId, reason),
    {
      onSuccess: () => {
        alert("리뷰 신고가 접수되었습니다.");
        setIsReportModalOpen(false);
        setReportReason("");
      },
    }
  );

  // ✅ 유저명 마스킹
  const maskUsername = (username) => {
    const len = username?.length || 0;
    if (len <= 4) return username.slice(0, 2) + "**";
    return username.slice(0, len - 3) + "***";
  };

  const sortedReviews = useMemo(() => {
    if (sortOption === "ratingHigh")
      return [...reviews].sort((a, b) => b.averageRating - a.averageRating);
    if (sortOption === "ratingLow")
      return [...reviews].sort((a, b) => a.averageRating - b.averageRating);
    return [...reviews].sort(
      (a, b) => new Date(b.createDate) - new Date(a.createDate)
    );
  }, [reviews, sortOption]);

  const handleCreateReview = () => {
    if (!commentText.trim()) {
      alert("리뷰 내용을 입력해주세요.");
      return;
    }
    if (rating < 1) {
      alert("별점을 선택해주세요.");
      return;
    }
    createCommentMutation.mutate({ productId, commentText });
  };

  // ✅ 신고 모달 열기
  const openReportModal = (commentId) => {
    setReportTarget(commentId);
    setIsReportModalOpen(true);
  };

  // ✅ 신고 제출
  const handleSubmitReport = () => {
    if (!reportReason.trim()) {
      alert("신고 사유를 입력해주세요.");
      return;
    }
    reportMutation.mutate({ commentId: reportTarget, reason: reportReason });
  };

  return (
    <div css={s.container}>
      <h2 css={s.title}>상품 리뷰</h2>

      {principal ? (
        <div css={s.form}>
          <textarea
            css={s.textarea}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="리뷰를 작성해주세요."
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
          <button css={s.submitBtn} onClick={handleCreateReview}>
            등록
          </button>
        </div>
      ) : (
        <p css={s.loginNotice}>로그인 후 리뷰를 작성할 수 있습니다.</p>
      )}

      {/* ✅ 정렬 및 총 리뷰 */}
      <div css={s.reviewHeader}>
        <div css={s.reviewCount}>
          리뷰 <strong>{totalCount}</strong>건
        </div>
        <select
          css={s.sortSelect}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="latest">최신순</option>
          <option value="ratingHigh">평점 높은순</option>
          <option value="ratingLow">평점 낮은순</option>
        </select>
      </div>

      {isLoading ? (
        <p css={s.loading}>불러오는 중...</p>
      ) : (
        <>
          <div css={s.reviewList}>
            {sortedReviews.length > 0 ? (
              sortedReviews.map((r) => (
                <div key={r.commentId} css={s.reviewCard}>
                  <div css={s.reviewHeaderRow}>
                    <img css={s.userImg} src={r.profileImageUrl} alt="user" />
                    <div css={s.userDetailBox}>
                      <div css={s.starRow}>
                        {"★".repeat(Math.round(r.averageRating || 0))}
                        {"☆".repeat(5 - Math.round(r.averageRating || 0))}
                      </div>
                      <div css={s.infoRow}>
                        <span css={s.username}>{maskUsername(r.username)}</span>
                        <span css={s.dot}>•</span>
                        <span css={s.date}>
                          {new Date(r.createDate).toLocaleDateString("ko-KR", {
                            year: "2-digit",
                            month: "2-digit",
                            day: "2-digit",
                          })}
                        </span>
                        <span css={s.dot}>•</span>
                        <button
                          css={s.reportBtn}
                          onClick={() => openReportModal(r.commentId)}
                        >
                          신고
                        </button>
                      </div>
                    </div>
                  </div>
                  <div css={s.menuName}>{product.productName}</div>
                  <p css={s.text}>{r.commentText}</p>
                </div>
              ))
            ) : (
              <p css={s.noReview}>등록된 리뷰가 없습니다.</p>
            )}
          </div>

          {/* ✅ 페이지네이션 */}
          {totalPages > 1 && (
            <div css={s.pagination}>
              {startPage > 1 && (
                <button css={s.pageBtn} onClick={handlePrevBlock}>
                  &lt; 이전
                </button>
              )}
              {Array.from(
                { length: endPage - startPage + 1 },
                (_, i) => startPage + i
              ).map((num) => (
                <button
                  key={num}
                  css={[s.pageBtn, page === num && s.pageBtnActive]}
                  onClick={() => handlePageChange(num)}
                >
                  {num}
                </button>
              ))}
              {endPage < totalPages && (
                <button css={s.pageBtn} onClick={handleNextBlock}>
                  다음 &gt;
                </button>
              )}
            </div>
          )}
        </>
      )}

      {/* ✅ 신고 모달 */}
      {isReportModalOpen && (
        <div css={s.modalOverlay}>
          <div css={s.modalBox}>
            <h3>리뷰 신고</h3>
            <textarea
              css={s.reportInput}
              placeholder="신고 사유를 입력해주세요."
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
            />
            <div css={s.modalActions}>
              <button css={s.modalCancel} onClick={() => setIsReportModalOpen(false)}>
                취소
              </button>
              <button css={s.modalSubmit} onClick={handleSubmitReport}>
                신고하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductReview;
