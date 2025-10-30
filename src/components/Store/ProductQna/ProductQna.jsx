/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  postStoreQnaRequest,
  deleteStoreQnaRequest,
} from "../../../apis/api/Store/storeQna";

function ProductQna({ qnaList = [], productId, principal }) {
  const queryClient = useQueryClient();
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  const [isSecret, setIsSecret] = useState(false);

  // ✅ 문의 등록
  const postQnaMutation = useMutation(postStoreQnaRequest, {
    onSuccess: () => {
      alert("문의가 등록되었습니다 📝");
      queryClient.invalidateQueries(["getStoreQnaByProductRequest", productId]);
      setQuestionTitle("");
      setQuestionContent("");
      setIsSecret(false);
    },
    onError: (err) => console.error(err),
  });

  // ✅ 문의 삭제
  const deleteQnaMutation = useMutation(deleteStoreQnaRequest, {
    onSuccess: () => {
      alert("문의가 삭제되었습니다 🗑️");
      queryClient.invalidateQueries(["getStoreQnaByProductRequest", productId]);
    },
    onError: (err) => console.error(err),
  });

  // ✅ 등록 버튼
  const handleSubmit = () => {
    if (!questionTitle.trim() || !questionContent.trim()) {
      alert("제목과 내용을 모두 입력해주세요!");
      return;
    }

    postQnaMutation.mutate({
      productId,
      questionTitle,
      questionContent,
      secret: isSecret,
    });
  };

  // ✅ 삭제 버튼
  const handleDelete = (qnaId) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteQnaMutation.mutate(qnaId);
    }
  };

  return (
    <div css={s.container}>
      <h3 css={s.title}>❓ 상품 문의</h3>

      {principal ? (
        <div css={s.form}>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
            css={s.input}
          />
          <textarea
            placeholder="문의 내용을 입력하세요"
            value={questionContent}
            onChange={(e) => setQuestionContent(e.target.value)}
            css={s.textarea}
          />
          <div css={s.formBottom}>
            <label>
              <input
                type="checkbox"
                checked={isSecret}
                onChange={(e) => setIsSecret(e.target.checked)}
              />
              비밀글로 등록
            </label>
            <button css={s.submitBtn} onClick={handleSubmit}>
              등록
            </button>
          </div>
        </div>
      ) : (
        <p css={s.loginNotice}>로그인 후 문의를 작성할 수 있습니다.</p>
      )}

      <div css={s.qnaList}>
        {qnaList.length === 0 ? (
          <p css={s.noQna}>등록된 문의가 없습니다.</p>
        ) : (
          qnaList.map((qna) => (
            <div key={qna.qnaId} css={s.qnaCard}>
              <div css={s.qnaHeader}>
                <span css={s.qnaTitle}>{qna.questionTitle}</span>
                {principal?.userId === qna.userId && (
                  <button
                    css={s.deleteBtn}
                    onClick={() => handleDelete(qna.qnaId)}
                  >
                    삭제
                  </button>
                )}
              </div>
              <p css={s.qnaContent}>{qna.secret ? "🔒 비밀글입니다." : qna.questionContent}</p>

              {qna.answerContent && (
                <div css={s.answerBox}>
                  <p css={s.answerLabel}>💬 관리자 답변</p>
                  <p css={s.answerText}>{qna.answerContent}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductQna;
