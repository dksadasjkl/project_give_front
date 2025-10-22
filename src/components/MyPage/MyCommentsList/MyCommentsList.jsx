/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMyCommentsRequest } from '../../../apis/api/Donation/donation';
import * as s from './style';
import MyCommentCard from './MyCommentCard/MyCommentCard';
import MyCommentsBanner from './MyCommentsBanner/MyCommentsBanner';

function MyCommentsList() {
  const [comments, setComments] = useState([]);

  const getMyCommentsRequestQuery = useQuery(
    ["getMyCommentsRequestQuery"],
    getMyCommentsRequest,
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
        setComments(response.data || []);
      }
    }
  );

  const totalComments = comments.length;
  // 댓글을 남긴 프로젝트 수 (중복 제거)
  const uniqueProjects = new Set(comments.map(c => c.donationProjectId)).size;

  return (
    <div css={s.container}>
      <div css={s.title}>내가 남긴 댓글</div>

      {/* 상단 배너 */}
      <MyCommentsBanner totalComments={totalComments} projectCount={uniqueProjects} />

      {/* 댓글 리스트 */}
      <div css={s.commentList}>
        {comments.length > 0 ? (
          comments.map(comment => (
            <MyCommentCard
              key={comment.donationProjectCommentId}
              donationProjectCommentId={comment.donationProjectCommentId} 
              text={comment.donationProjectCommentText}
              projectId={comment.donationProjectId}
              date={comment.createDate}
              nickname={comment.nickname}
              projectTitle={comment.donationProjectTitle}       
              projectImageUrl={comment.donationProjectImageUrl} 
              onRefresh={() => getMyCommentsRequestQuery.refetch()}
            />
          ))
        ) : (
          <div css={s.emptyText}>아직 작성한 댓글이 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default MyCommentsList;