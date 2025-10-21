/** @jsxImportSource @emotion/react */
import * as s from './style';

function MyCommentsBanner({ totalComments, projectCount }) {
  return (
    <div css={s.banner}>
      <div>댓글 작성 프로젝트 : {projectCount}개</div>
      <div>총 작성 댓글 수: {totalComments}개</div>
    </div>
  );
}

export default MyCommentsBanner;