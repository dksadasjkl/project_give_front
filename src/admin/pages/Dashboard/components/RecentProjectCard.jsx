/** @jsxImportSource @emotion/react */
import * as s from "./RecentProjectCard.style.js";
import { useNavigate } from "react-router-dom";

const RecentProjectCard = ({ project }) => {
  const navigate = useNavigate();

  if (!project) return null; 

  return (
    <div
      css={s.card}
      onClick={() => navigate(`/admin/donation/${project.donationProjectId}`)}
    >
      <img
        src={project.donationProjectImageUrl || "/no-image.png"}  
        css={s.thumb}
        alt="프로젝트 이미지"
      />

      <div css={s.info}>
        <div css={s.title}>{project.donationProjectTitle || "제목 없음"}</div>
        <div css={s.org}>{project.donationProjectOrganization || "기관명 없음"}</div>
        <div css={s.date}>
          등록일: {project.donationProjectStartDate?.substring(0, 10) || "-"}
        </div>
      </div>
    </div>
  );
};

export default RecentProjectCard;
