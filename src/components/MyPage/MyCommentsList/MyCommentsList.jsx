/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getMyCommentsRequest } from '../../../apis/api/Donation/donation';
import * as s from './style';
import MyCommentCard from './MyCommentCard/MyCommentCard';
import MyCommentsBanner from './MyCommentsBanner/MyCommentsBanner';

function MyCommentsList() {
  const [page, setPage] = useState(1);
  const size = 5;
  const pageBlock = 5;

  const queryClient = useQueryClient();

  const handleRefresh = () => {
    queryClient.invalidateQueries(['getMyCommentsRequest']);
  };

  const { data, isLoading } = useQuery({
    queryKey: ['getMyCommentsRequest', page],
    queryFn: () => getMyCommentsRequest(page, size),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 2, // 2분 캐시 유지
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const comments = data?.data?.comments || [];
  const totalCount = data?.data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / size) || 1;

  const totalComments = totalCount;
  const uniqueProjects = new Set(comments.map(c => c.donationProjectId)).size;

  //  블록 계산
  const startPage = Math.floor((page - 1) / pageBlock) * pageBlock + 1;
  const endPage = Math.min(startPage + pageBlock - 1, totalPages);

  return (
    <div css={s.container}>
      <div css={s.title}>내가 남긴 댓글</div>

      <MyCommentsBanner totalComments={totalComments} projectCount={uniqueProjects} />

      {/* 댓글 리스트 */}
      <div css={s.commentList}>
        {isLoading ? (
          <div css={s.emptyText}>불러오는 중...</div>
        ) : comments.length > 0 ? (
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
              onRefresh={handleRefresh}
            />
          ))
        ) : (
          <div css={s.emptyText}>아직 작성한 댓글이 없습니다.</div>
        )}
      </div>

      {/* 페이지네이션 */}
      <div css={s.pagination}>
        {startPage > 1 && (
          <button onClick={() => setPage(startPage - 1)}>&lt; 이전</button>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(num => (
          <button
            key={num}
            css={[s.pageBtn, page === num && s.pageBtnActive]}
            onClick={() => setPage(num)}
          >
            {num}
          </button>
        ))}

        {endPage < totalPages && (
          <button onClick={() => setPage(endPage + 1)}>다음 &gt;</button>
        )}
      </div>
    </div>
  );
}

export default MyCommentsList;
