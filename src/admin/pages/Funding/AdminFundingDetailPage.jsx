/** @jsxImportSource @emotion/react */
import * as s from "./AdminFundingDetailPage.style";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";

import { getAdminFundingDetailRequest } from "../../apis/adminFundingApi";
import { adminFundingEditState } from "../../atoms/adminFundingEditAtom";

const AdminFundingDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [fundingEditState, setFundingEditState] =
    useRecoilState(adminFundingEditState);

  const { data, isLoading, error } = useQuery(
    ["adminFundingDetail", projectId],
    () => getAdminFundingDetailRequest(projectId),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <p>불러오는 중...</p>;
  if (error) return <p>에러 발생</p>;

  const project = data?.data;

  const fixProjectData = (p) => ({
    donationProjectId: p.donationProjectId,
    donationProjectTitle: p.donationProjectTitle,
    donationProjectOrganization: p.donationProjectOrganization,
    donationProjectImageUrl: p.donationProjectImageUrl,
    donationProjectTargetAmount: p.donationProjectTargetAmount,

    donationProjectStartDate: p.donationProjectStartDate,
    donationProjectEndDate: p.donationProjectEndDate,

    donationCategoryId:
      p.donationCategory?.donationCategoryId ?? p.donationCategoryId ?? 0,

    donationProjectType: "FUNDING",
  });

  return (
    <div css={s.container}>
      <h1 css={s.title}>펀딩 프로젝트 상세</h1>

      <div css={s.detailBox}>
        <img src={project.donationProjectImageUrl} css={s.thumbnail} alt="" />

        <div css={s.infoBox}>
          <h2 css={s.projectTitle}>{project.donationProjectTitle}</h2>

          <p>
            <strong>기관명:</strong> {project.donationProjectOrganization}
          </p>

          <p>
            <strong>카테고리:</strong>{" "}
            {project.donationCategory?.donationCategoryNameKor}
          </p>

          <p>
            <strong>현재 모금액:</strong>{" "}
            {project.donationProjectCurrentAmount?.toLocaleString()}원
          </p>

          <p>
            <strong>목표 금액:</strong>{" "}
            {project.donationProjectTargetAmount?.toLocaleString()}원
          </p>

          <p>
            <strong>기간:</strong>{" "}
            {project.donationProjectStartDate?.substring(0, 10)} ~{" "}
            {project.donationProjectEndDate?.substring(0, 10)}
          </p>
        </div>
      </div>

      {/*--- 버튼 영역 ---*/}
      <button
        css={s.editBtn}
        onClick={() => {
          setFundingEditState(fixProjectData(project));
          navigate(`/admin/funding/${projectId}/edit`);
        }}
      >
        수정하기
      </button>

      <button
        css={s.manageBtn}
        onClick={() => navigate(`/admin/funding/${projectId}/details`)}
      >
        상세 콘텐츠 관리
      </button>

      <button
        css={s.rewardBtn}
        onClick={() => navigate(`/admin/funding/${projectId}/rewards`)}
      >
        리워드 관리
      </button>

      <button
        css={s.manageBtn}
        onClick={() => navigate(`/admin/funding/${projectId}/comments`)}
      >
        댓글 관리
      </button>

      <button
        css={s.manageBtn}
        onClick={() => navigate(`/admin/funding/${projectId}/contributions`)}
      >
        후원 내역 관리
      </button>
    </div>
  );
};

export default AdminFundingDetailPage;
