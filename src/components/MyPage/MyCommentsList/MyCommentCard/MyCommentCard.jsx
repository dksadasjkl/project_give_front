/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';

function MyCommentCard({ text, projectId, date, nickname, projectTitle, projectImageUrl }) {
  const navigate = useNavigate();

  const formattedDate = new Date(date).toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div css={s.commentCard} onClick={() => navigate(`/donation/${projectId}`)}>
      {/* 프로젝트 이미지 & 제목 */}
      <div css={s.projectInfo}>
        <img src={projectImageUrl} alt={projectTitle} css={s.projectImage} />
        <span css={s.projectTitle}>{projectTitle}</span>
      </div>

      {/* 댓글 작성자 & 날짜 */}
      <span css={s.nickname}>{nickname}</span>

      {/* 댓글 내용 */}
      <div css={s.commentFooter}>
        <span css={s.commentText}>{text}</span>
        <span css={s.date}>{formattedDate}</span>
      </div>
    </div>
  );
}

export default MyCommentCard;