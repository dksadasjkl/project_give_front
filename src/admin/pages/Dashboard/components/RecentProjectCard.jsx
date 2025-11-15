/** @jsxImportSource @emotion/react */
import * as s from "./RecentProjectCard.style";

const RecentProjectCard = ({ project }) => {
  return (
    <div css={s.card}>
      <img src={project.donationProjectImageUrl} css={s.thumb} />
      <div css={s.info}>
        <div css={s.title}>{project.donationProjectTitle}</div>
        <div css={s.org}>{project.donationProjectOrganization}</div>
        <div css={s.date}>
          등록일: {project.donationProjectStartDate?.substring(0, 10)}
        </div>
      </div>
    </div>
  );
};

export default RecentProjectCard;
