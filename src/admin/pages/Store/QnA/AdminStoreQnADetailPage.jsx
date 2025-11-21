/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreQnADetailPage.style";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAdminStoreQnaDetail,
  postAdminStoreQnaAnswer,
  putAdminStoreQnaAnswer,
  deleteAdminStoreQna,
} from "../../../apis/storeAdminApi";
import { useState } from "react";

function AdminStoreQnADetailPage() {
  const { qnaId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error, refetch } = useQuery(
    ["adminStoreQnADetail", qnaId],
    () => getAdminStoreQnaDetail(qnaId),
    { refetchOnWindowFocus: false }
  );

  const qna = data?.data;
  const [answer, setAnswer] = useState("");

  const answerMutation = useMutation(
    () => postAdminStoreQnaAnswer(qnaId, answer),
    {
      onSuccess: () => {
        alert("답변이 등록되었습니다.");
        refetch();
      },
    }
  );

  const updateMutation = useMutation(
    () => putAdminStoreQnaAnswer(qnaId, answer),
    {
      onSuccess: () => {
        alert("답변이 수정되었습니다.");
        refetch();
      },
    }
  );

  const deleteMutation = useMutation(() => deleteAdminStoreQna(qnaId), {
    onSuccess: () => {
      alert("문의가 삭제되었습니다.");
      navigate("/admin/store/qna");
    },
  });

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;
  if (!qna) return <p>문의 정보를 찾을 수 없습니다.</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>QnA 상세 보기</h1>

      <section css={s.section}>
        <h2 css={s.sectionTitle}>문의 정보</h2>

        <div css={s.infoRow}>
          <span>QnA ID</span>
          <p>{qna.qnaId}</p>
        </div>

        <div css={s.infoRow}>
          <span>상품명</span>
          <p
            css={s.productName}
            onClick={() => navigate(`/admin/store/products/${qna.productId}`)}
          >
            {qna.productName}
          </p>
        </div>

        <div css={s.infoRow}>
          <span>작성자</span>
          <p>{qna.username} ({qna.nickname})</p>
        </div>

        <div css={s.infoRow}>
          <span>제목</span>
          <p>{qna.questionTitle}</p>
        </div>

        <div css={s.infoRowColumn}>
          <span>문의 내용</span>
          <p css={s.questionContent}>{qna.questionContent}</p>
        </div>

        <div css={s.infoRow}>
          <span>문의일</span>
          <p>{qna.createDate?.slice(0, 16).replace("T", " ")}</p>
        </div>

        <div css={s.infoRow}>
          <span>비밀글 여부</span>
          <p>{qna.secret ? "🔒 비밀글" : "공개"}</p>
        </div>
      </section>

      {/* 답변 영역 */}
      <section css={s.section}>
        <h2 css={s.sectionTitle}>답변 관리</h2>

        {qna.answerContent ? (
          <>
            <div css={s.infoRowColumn}>
              <span>현재 답변</span>
              <p css={s.answerBox}>{qna.answerContent}</p>
            </div>
            <textarea
              css={s.textarea}
              placeholder="답변 수정하기"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button css={s.updateBtn} onClick={() => updateMutation.mutate()}>
              답변 수정
            </button>
          </>
        ) : (
          <>
            <textarea
              css={s.textarea}
              placeholder="답변을 입력하세요"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button css={s.answerBtn} onClick={() => answerMutation.mutate()}>
              답변 등록
            </button>
          </>
        )}
      </section>

      <div css={s.buttonGroup}>
        <button css={s.deleteBtn} onClick={() => deleteMutation.mutate()}>
          문의 삭제
        </button>
        <button css={s.backBtn} onClick={() => navigate(-1)}>
          뒤로가기
        </button>
      </div>
    </div>
  );
}

export default AdminStoreQnADetailPage;
