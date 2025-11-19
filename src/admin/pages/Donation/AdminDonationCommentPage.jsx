/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import * as s from "./AdminDonationCommentPage.style";
import { getAdminCommentsRequest, deleteAdminCommentRequest } from "../../apis/adminDonationApi";
import { useState } from "react";

const AdminDonationCommentPage = () => {
  const { projectId } = useParams();
  
  const [page, setPage] = useState(1);
  const size = 10;

  const { data, isLoading, error, refetch } = useQuery(
    ["adminComments", projectId, page],
    () => getAdminCommentsRequest(projectId, page, size),
    { refetchOnWindowFocus: false }
  );

  const deleteMutation = useMutation({
    mutationFn: (commentId) => deleteAdminCommentRequest(commentId),
    onSuccess: () => {
      alert("댓글이 삭제되었습니다.");
      refetch();
    }
  });

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  const items = data?.data?.items || [];
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / size);

  return (
    <div css={s.container}>
      <h1 css={s.title}>댓글 관리</h1>

      <table css={s.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>작성자</th>
            <th>내용</th>
            <th>작성일</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="5" css={s.noData}>댓글이 존재하지 않습니다.</td>
            </tr>
          ) : (
            items.map((c) => (
              <tr key={c.donationProjectCommentId}>
                <td>{c.donationProjectCommentId}</td>
                <td>{c.user?.nickname || "-"}</td>
                <td>{c.donationProjectCommentText}</td>
                <td>{c.createDate.substring(0, 16)}</td>
                <td>
                  <button
                    css={s.deleteBtn}
                    onClick={() => {
                      if (window.confirm("삭제하시겠습니까?")) {
                        deleteMutation.mutate(c.donationProjectCommentId);
                      }
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* 페이지네이션 — 댓글 있을 때만 렌더링 */}
      {total > 0 && (
        <div css={s.pagination}>
          <button 
            disabled={page === 1} 
            onClick={() => setPage(page - 1)}
          >
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
      )}
    </div>
  );
};

export default AdminDonationCommentPage;
