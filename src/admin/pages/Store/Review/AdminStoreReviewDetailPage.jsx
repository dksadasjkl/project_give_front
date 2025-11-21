/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreReviewDetailPage.style";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getAdminStoreReviewDetail, deleteAdminStoreReview } from "../../../apis/storeAdminApi";

function AdminStoreReviewDetailPage() {
  const { reviewId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error, refetch } = useQuery(
    ["adminStoreReviewDetail", reviewId],
    () => getAdminStoreReviewDetail(reviewId),
    { refetchOnWindowFocus: false }
  );

  const review = data?.data;

  const handleDelete = async () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteAdminStoreReview(reviewId);
      alert("리뷰 삭제 완료");
      navigate("/admin/store/reviews");
    } catch {
      alert("삭제 실패");
    }
  };

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;
  if (!review) return <p>데이터 없음</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>리뷰 상세 보기</h1>

      <section css={s.section}>
        <h2 css={s.sectionTitle}>기본 정보</h2>

        <div css={s.infoRow}>
          <span>리뷰 ID</span>
          <p>{review.commentId}</p>
        </div>

        <div css={s.infoRow}>
          <span>상품 ID</span>
          <p>{review.productId}</p>
        </div>

        <div css={s.infoRow}>
          <span>작성자</span>
          <p>{review.username}</p>
        </div>

        <div css={s.infoRow}>
          <span>프로필 사진</span>
          <img src={review.profileImageUrl} css={s.profileImg} alt="profile" />
        </div>

        <div css={s.infoRow}>
          <span>평점</span>
          <p>⭐ {review.averageRating?.toFixed(1)} / {review.ratingCount}명</p>
        </div>

        <div css={s.infoRow}>
          <span>작성일</span>
          <p>{review.createDate?.slice(0, 16).replace("T", " ")}</p>
        </div>

        <div css={s.infoRow}>
          <span>수정일</span>
          <p>{review.updateDate?.slice(0, 16).replace("T", " ")}</p>
        </div>
      </section>

      <section css={s.section}>
        <h2 css={s.sectionTitle}>리뷰 내용</h2>
        <p css={s.commentText}>
          {review.commentText || "(내용 없음)"}
        </p>
      </section>

      <div css={s.buttonGroup}>
        <button css={s.deleteBtn} onClick={handleDelete}>리뷰 삭제</button>
        <button css={s.backBtn} onClick={() => navigate(-1)}>뒤로가기</button>
      </div>
    </div>
  );
}

export default AdminStoreReviewDetailPage;
