import React, { useState } from 'react'/** @jsxImportSource @emotion/react */
import * as s from "./style";
import LoadMoreButton from '../../Button/LoadMoreButton/LoadMoreButton';
import ReactQuill from 'react-quill';
import { useQuillInput } from '../../../hooks/useQuillInput';
import { QUILL_MODULES } from '../../../constants/quillModules';
import 'react-quill/dist/quill.snow.css';
import { useMutation } from '@tanstack/react-query';
import { deleteDonationProjectCommentRequest, postDonationProjectCommentRequest, putDonationProjectCommentRequest } from '../../../apis/api/Donation/donationComment';

function DonationComments({
  comments,
  totalCount,
  onLoadMore,
  hasMore,
  contributions,
  principal,
  donationProjectId,
}) {
  const [quillValue, handleQuillValueChange, setQuillValue] = useQuillInput();
  const [editingId, setEditingId] = useState(null); // 현재 수정 중인 댓글 ID
  const [editText, setEditText] = useState(""); // 수정 중인 텍스트

  const loggedInUserId = principal?.userId;
  const hasDonated = contributions?.some((c) => c.userId === loggedInUserId);

  /** ✅ 댓글 등록 */
  const postCommentMutation = useMutation({
    mutationKey: ["postCommentMutation"],
    mutationFn: postDonationProjectCommentRequest,
    onSuccess: () => {
      alert("댓글이 등록되었습니다.");
      window.location.reload();
    },
    onError: (error) => {
      console.error(error);
      alert("댓글 등록에 실패했습니다.");
    },
  });

  /** ✅ 댓글 수정 */
  const updateCommentMutation = useMutation({
    mutationKey: ["updateCommentMutation"],
    mutationFn: ({ id, text }) =>
      putDonationProjectCommentRequest(id, {
        donationProjectCommentText: text,
      }),
    onSuccess: () => {
      alert("댓글이 수정되었습니다.");
      window.location.reload();
    },
    onError: (err) => {
      console.error(err);
      alert("댓글 수정에 실패했습니다.");
    },
  });

  /** ✅ 댓글 삭제 */
  const deleteCommentMutation = useMutation({
    mutationKey: ["deleteCommentMutation"],
    mutationFn: (id) => deleteDonationProjectCommentRequest(id),
    onSuccess: () => {
      alert("댓글이 삭제되었습니다.");
      window.location.reload();
    },
    onError: (err) => {
      console.error(err);
      alert("댓글 삭제에 실패했습니다.");
    },
  });

  /** 댓글 작성 핸들러 */
  const submitComment = () => {
    if (!quillValue || quillValue.trim() === "") {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    const plainText = quillValue.replace(/<[^>]+>/g, "");

    postCommentMutation.mutate({
      donationProjectId: donationProjectId,
      userId: loggedInUserId,
      donationProjectCommentText: plainText,
    });
  };

  /** 댓글 수정 버튼 클릭 */
  const handleEditClick = (comment) => {
    setEditingId(comment.donationProjectCommentId);
    setEditText(comment.donationProjectCommentText);
  };

  /** 수정 저장 */
  const handleSave = (id) => {
    if (!editText.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    updateCommentMutation.mutate({ id, text: editText });
  };

  /** 삭제 */
  const handleDelete = (id) => {
    if (window.confirm("정말 이 댓글을 삭제하시겠습니까?")) {
      deleteCommentMutation.mutate(id);
    }
  };

  return (
    <div css={s.commentLayout}>
      {/* ✏️ 댓글 작성 영역 */}
      {hasDonated ? (
        <div css={s.quillBox}>
          <ReactQuill
            style={{ width: "100%", height: "150px", display: "block" }}
            modules={QUILL_MODULES}
            onChange={handleQuillValueChange}
          />
          <button css={s.writebutton} onClick={submitComment}>
            작성하기
          </button>
        </div>
      ) : (
        <></>
      )}

      {/* 💬 댓글 목록 */}
      <div css={s.commentHeader}>
        총 <span>{totalCount}</span>개의 댓글
      </div>

      {comments.map((comment) => {
        const isMine = comment.userId === loggedInUserId; // 본인 댓글 여부

        return (
          <div
            key={comment.donationProjectCommentId}
            css={s.commentContainer}
          >
            <div css={s.commentAuthorBox}>
              <div css={s.commentNickname}>{comment.nickname}</div>
              <div css={s.commentUserId}>
                ({comment.username.slice(0, 3)}***)
              </div>

              {/* ✏️ 수정/삭제 버튼 (본인 댓글일 때만 노출) */}
              {isMine && (
                <div css={s.commentActions}>
                  {editingId === comment.donationProjectCommentId ? (
                    <>
                      <button
                        css={s.saveBtn}
                        onClick={() =>
                          handleSave(comment.donationProjectCommentId)
                        }
                      >
                        저장
                      </button>
                      <button
                        css={s.cancelBtn}
                        onClick={() => setEditingId(null)}
                      >
                        취소
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        css={s.editBtn}
                        onClick={() => handleEditClick(comment)}
                      >
                        수정
                      </button>
                      <button
                        css={s.deleteBtn}
                        onClick={() =>
                          handleDelete(comment.donationProjectCommentId)
                        }
                      >
                        삭제
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* 💬 댓글 본문 */}
            {editingId === comment.donationProjectCommentId ? (
              <textarea
                css={s.editTextarea}
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <div css={s.commentContent}>
                {comment.donationProjectCommentText}
              </div>
            )}

            {/* 🕒 작성일 */}
            <div css={s.commentDate}>
              {new Date(comment.createDate).toLocaleString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        );
      })}

      {/* 🔽 더보기 버튼 */}
      {hasMore && (
        <div css={s.button}>
          <LoadMoreButton onClick={onLoadMore} />
        </div>
      )}
    </div>
  );
}

export default DonationComments;