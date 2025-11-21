/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreReviewListPage.style";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAdminStoreReviewList } from "../../../apis/storeAdminApi";

function AdminStoreReviewListPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const size = 10;

  const { data, isLoading, error } = useQuery(
    ["adminStoreReviewList", page],
    () => getAdminStoreReviewList(page, size),
    { refetchOnWindowFocus: false }
  );

  const reviews = data?.data?.items || [];
  const total = data?.data?.total || 0; 
  const totalPages = Math.ceil(total / size);

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>리뷰 관리</h1>

      <table css={s.table}>
        <thead>
          <tr>
            <th>리뷰 ID</th>
            <th>상품 ID</th>
            <th>작성자</th>
            <th>프로필</th>
            <th>평점</th>
            <th>리뷰</th>
            <th>작성일</th>
            <th>상세</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((rev) => (
            <tr key={rev.commentId}>
              <td>{rev.commentId}</td>
              <td>{rev.productId}</td>
              <td>{rev.username}</td>

              <td>
                <img
                  src={rev.profileImageUrl}
                  alt="profile"
                  css={s.profileImg}
                />
              </td>

              <td>
                <p>⭐ {rev.averageRating?.toFixed(1)} / {rev.ratingCount}명</p>
              </td>

              <td css={s.reviewText}>{rev.commentText || "(내용 없음)"}</td>

              <td>{rev.createDate?.slice(0, 16).replace("T", " ")}</td>

              <td>
                <button
                  css={s.detailBtn}
                  onClick={() =>
                    navigate(`/admin/store/reviews/${rev.commentId}`)
                  }
                >
                  상세보기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div css={s.pagination}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          이전
        </button>

        <span>
          {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default AdminStoreReviewListPage;
