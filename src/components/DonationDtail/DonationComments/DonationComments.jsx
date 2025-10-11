import React from 'react'/** @jsxImportSource @emotion/react */
import * as s from "./style";
import LoadMoreButton from '../../Button/LoadMoreButton/LoadMoreButton';
import ReactQuill from 'react-quill';
import { useQuillInput } from '../../../hooks/useQuillInput';
import { QUILL_MODULES } from '../../../constants/quillModules';
import 'react-quill/dist/quill.snow.css';
import { useMutation } from '@tanstack/react-query';
import { postDonationProjectCommentRequest } from '../../../apis/api/Donation/donationComment';

function DonationComments({ comments, totalCount, onLoadMore, hasMore, contributions, principal, donationProjectId }) {
  const [quillValue, handleQuillValueChange, setQuillValue] = useQuillInput();
  const loggedInUserId = principal?.userId;
  const hasDonated = contributions?.some(c => c.userId === loggedInUserId);

  // 댓글 작성 mutation
  const postCommentMutation = useMutation({
    mutationKey: "postCommentMutation",
    mutationFn: postDonationProjectCommentRequest,
    onSuccess: (response) => {
        console.log(response);
        alert("댓글이 등록되었습니다.");
        window.location.reload();
    },
    onError: (error) => {
        console.error(error);
        alert("댓글 등록에 실패했습니다.");
    }
  });

  const submitComment = () => {
    if (!quillValue || quillValue.trim() === "") {
      alert("댓글 내용을 입력해주세요.");
      return
    }

    // HTML 태그 제거
    const plainText = quillValue.replace(/<[^>]+>/g, "");

    postCommentMutation.mutate({
      donationProjectId: donationProjectId,
      userId: loggedInUserId,
      donationProjectCommentText: plainText
    });
  };

  return (
    <div css={s.commentLayout}>
           {/* 댓글 작성 영역 */}
            {hasDonated ? (
              <div css={s.quillBox}>
                <ReactQuill 
                  style={{ width: "100%", height: "150px", display: 'block' }}
                  modules={QUILL_MODULES}
                  onChange={handleQuillValueChange}
                />
                <button css={s.writebutton} onClick={submitComment}>작성하기</button>
              </div>
            ) : (
              <></>
            )}
          <div css={s.commentHeader}>          
            총 <span>{totalCount}</span>개의 댓글
          </div>
          {comments.map((comment) => (
            <div key={comment.donationProjectCommentId} css={s.commentContainer}>
                <div css={s.commentAuthorBox}>  
                  <div css={s.commentNickname}>{comment.nickname}</div>
                  <div css={s.commentUserId}>({comment.username.slice(0, 3)}***)</div>
                </div>
                
                <div css={s.commentContent}>{comment.donationProjectCommentText}</div>
                <div css={s.commentDate}>
                  {new Date(comment.createDate).toLocaleString('ko-KR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}  
                </div> 
            </div>

          ))}
        {hasMore && (
          <div css={s.button}>
            <LoadMoreButton onClick={onLoadMore} />
          </div>
        )}
      </div>
  )
}

export default DonationComments