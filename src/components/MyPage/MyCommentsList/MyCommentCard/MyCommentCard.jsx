/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import { deleteDonationProjectCommentRequest, putDonationProjectCommentRequest } from '../../../../apis/api/Donation/donationComment';

function MyCommentCard({
  donationProjectCommentId,
  text,
  projectId,
  date,
  nickname,
  projectTitle,
  projectImageUrl,
  onRefresh // 부모에서 목록 새로고침용 전달
}) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const formattedDate = new Date(date).toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  /** ✅ 댓글 수정 요청 */
  const handleUpdate = async (e) => {
    e.stopPropagation();
    try {
      await putDonationProjectCommentRequest(donationProjectCommentId, {
        donationProjectCommentText: editText,
      });
      alert('댓글이 수정되었습니다.');
      setIsEditing(false);
      onRefresh?.();
    } catch (err) {
      console.error(err);
      alert('댓글 수정 중 오류가 발생했습니다.');
    }
  };

  /** ✅ 댓글 삭제 요청 */
  const handleDelete = async (e) => {
    e.stopPropagation();
    if (window.confirm('정말 이 댓글을 삭제하시겠습니까?')) {
      try {
        await deleteDonationProjectCommentRequest(donationProjectCommentId);
        alert('댓글이 삭제되었습니다.');
        onRefresh?.();
      } catch (err) {
        console.error(err);
        alert('댓글 삭제 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div css={s.commentCard} onClick={() => navigate(`/donation/${projectId}`)}>
      {/* 프로젝트 정보 */}
      <div css={s.projectInfo}>
        <img src={projectImageUrl} alt={projectTitle} css={s.projectImage} />
        <span css={s.projectTitle}>{projectTitle}</span>

        {/* 수정 / 삭제 버튼 */}
        <div css={s.actionButtons} onClick={(e) => e.stopPropagation()}>
          {isEditing ? (
            <>
              <button css={s.saveBtn} onClick={handleUpdate}>저장</button>
              <button css={s.cancelBtn} onClick={() => setIsEditing(false)}>취소</button>
            </>
          ) : (
            <>
              <button css={s.editBtn} onClick={() => setIsEditing(true)}>수정</button>
              <button css={s.deleteBtn} onClick={handleDelete}>삭제</button>
            </>
          )}
        </div>
      </div>

      {/* 댓글 작성자 */}
      <span css={s.nickname}>{nickname}</span>

      {/* 댓글 내용 */}
      <div css={s.commentFooter}>
        {isEditing ? (
          <textarea
            css={s.editTextarea}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <span css={s.commentText}>{text}</span>
        )}
        <span css={s.date}>{formattedDate}</span>
      </div>
    </div>
  );
}

export default MyCommentCard;