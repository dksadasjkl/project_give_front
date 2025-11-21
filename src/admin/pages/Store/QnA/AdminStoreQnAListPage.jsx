/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreQnAListPage.style";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAdminStoreQnaList } from "../../../apis/storeAdminApi";

function AdminStoreQnAListPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const size = 10;

  const { data, isLoading, error } = useQuery(
    ["adminStoreQnAList", page],
    () => getAdminStoreQnaList(page, size),
    { refetchOnWindowFocus: false }
  );

  const qnas = data?.data?.items || [];
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / size);

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>상품 문의(QnA) 관리</h1>

      <table css={s.table}>
        <thead>
          <tr>
            <th>QnA ID</th>
            <th>상품명</th>
            <th>작성자</th>
            <th>제목</th>
            <th>공개 여부</th>
            <th>문의일</th>
            <th>답변 상태</th>
            <th>상세</th>
          </tr>
        </thead>

        <tbody>
          {qnas.map((qna) => (
            <tr
              key={qna.qnaId}
              css={qna.answerContent ? null : s.needAnswerRow}
            >
              <td>{qna.qnaId}</td>

              <td>{qna.productName ?? "-"}</td>

              <td>{qna.username}</td>

              <td
                css={s.titleClickable}
                onClick={() => navigate(`/admin/store/qna/${qna.qnaId}`)}
              >
                {qna.questionTitle}
              </td>

              <td>{qna.secret ? "비밀글" : "공개"}</td>

              <td>{qna.createDate?.slice(0, 16).replace("T", " ")}</td>

              <td>
                {qna.answerContent ? (
                  <span css={s.answered}>답변 완료</span>
                ) : (
                  <span css={s.pending}>미답변</span>
                )}
              </td>

              <td>
                <button
                  css={s.detailBtn}
                  onClick={() => navigate(`/admin/store/qna/${qna.qnaId}`)}
                >
                  상세보기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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

export default AdminStoreQnAListPage;
