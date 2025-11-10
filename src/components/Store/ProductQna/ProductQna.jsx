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
  const [openId, setOpenId] = useState(null); // ✅ 클릭 시 열릴 QnA ID

  const handleToggle = (qnaId) => {
    setOpenId(openId === qnaId ? null : qnaId);
  };

  const maskUsername = (username) => {
    if (!username) return "";
    const len = username.length;
    if (len <= 5) return username.slice(0, len - 2) + "**";
    if (len <= 7) return username.slice(0, len - 3) + "***";
    return username.slice(0, len - 4) + "****";
  };

  return (
    <div css={s.container}>
      <h3 css={s.title}>Q&A</h3>
      <p css={s.description}>
        구매하시려는 상품에 대해 궁금한점이 있으신 경우 문의해주세요.
      </p>

      <div css={s.tableWrapper}>
        <div css={s.tableHeader}>
          <span css={s.colStatus}>답변상태</span>
          <span css={s.colTitle}>제목</span>
          <span css={s.colWriter}>작성자</span>
          <span css={s.colDate}>작성일</span>
        </div>

        {qnaList.length === 0 ? (
          <p css={s.noQna}>등록된 문의가 없습니다.</p>
        ) : (
          qnaList.map((qna) => {
            const isSecretPost = qna.secret;
            const answered = !!qna.answerContent;
            const formattedDate = new Date(qna.createDate).toLocaleDateString();
            const maskedUser = maskUsername(qna.username || `user${qna.userId}`);
            const canView =
              !isSecretPost || principal?.userId === qna.userId;

            return (
              <div key={qna.qnaId} css={s.qnaGroup}>
                <div
                  css={s.tableRow}
                  onClick={() => {
                    if (isSecretPost && !canView) {
                      alert("비공개 문의내역은 작성자 본인만 확인하실 수 있습니다.");
                      return;
                    }
                    handleToggle(qna.qnaId);
                  }}
                >
                  <span css={s.colStatus}>
                    {answered ? (
                      <span css={s.answered}>답변완료</span>
                    ) : (
                      <span css={s.waiting}>미답변</span>
                    )}
                  </span>
                  <span css={s.colTitle}>
                    {isSecretPost ? "🔒 비밀글입니다." : qna.questionTitle}
                  </span>
                  <span css={s.colWriter}>{maskedUser}</span>
                  <span css={s.colDate}>{formattedDate}</span>
                </div>

                {/* ✅ 클릭 시 토글로 표시 */}
                {openId === qna.qnaId && (
                  <>
                    <div css={s.detailRow}>
                      <span css={s.colStatus}></span>
                      <span css={s.detailContent}>
                        {isSecretPost && !canView
                          ? "비공개 문의내역은 작성자 본인만 확인하실 수 있습니다."
                          : qna.questionContent}
                      </span>
                      <span css={s.colWriter}></span>
                      <span css={s.colDate}></span>
                    </div>

                    {answered && canView && (
                      <div css={s.answerRow}>
                        <span css={s.colStatus}></span>
                        <span css={s.answerTitle}>
                          ┗ <span css={s.answerHighlight}>답변</span>&nbsp;
                          {qna.answerContent}
                        </span>
                        <span css={s.colWriter}>판매자</span>
                        <span css={s.colDate}>
                          {new Date(qna.answerDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ProductQna;
