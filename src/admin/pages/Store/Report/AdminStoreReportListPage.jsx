/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreReportListPage.style";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAdminStoreReviewReportList } from "../../../apis/storeAdminApi";

function AdminStoreReportListPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const size = 10;

  const { data, isLoading, error } = useQuery(
    ["adminStoreReportList", page],
    () => getAdminStoreReviewReportList(page, size),
    { refetchOnWindowFocus: false }
  );

  const reports = data?.data?.items || [];
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / size);

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>신고 관리</h1>

      <table css={s.table}>
        <thead>
          <tr>
            <th>신고 ID</th>
            <th>리뷰 ID</th>
            <th>상품명</th>
            <th>신고자</th>
            <th>리뷰 내용</th>
            <th>신고 사유</th>
            <th>신고일</th>
            <th>상세</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((rpt) => (
            <tr key={rpt.reportId}>
              <td>{rpt.reportId}</td>
              <td>{rpt.commentId}</td>
              <td>{rpt.productName}</td>
              <td>{rpt.reporterUsername}</td>
              <td css={s.reason}>{rpt.commentText}</td>
              <td css={s.reason}>{rpt.reason}</td>
              <td>{rpt.createDate?.slice(0, 16).replace("T", " ")}</td>

              <td>
                <button
                  css={s.detailBtn}
                  onClick={() =>
                    navigate(`/admin/store/reviews/${rpt.commentId}`)
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

export default AdminStoreReportListPage;
