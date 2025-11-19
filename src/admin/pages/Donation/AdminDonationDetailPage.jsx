/** @jsxImportSource @emotion/react */
import * as s from "./DonationDetailPage.style";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { getAdminDonationDetailRequest } from "../../apis/adminDonationApi";
import { adminDonationEditState } from "../../atoms/adminDonationEditAtom";

const AdminDonationDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // recoil 상태
  const [donationEditState, setDonationEditState] =
    useRecoilState(adminDonationEditState);


  const { data, isLoading, error } = useQuery(
    ["adminDonationDetail", projectId],
    () => getAdminDonationDetailRequest(projectId),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  const project = data?.data;

   const fixProjectData = (p) => ({
    donationProjectId: p.donationProjectId,
    donationProjectTitle: p.donationProjectTitle,
    donationProjectOrganization: p.donationProjectOrganization,
    donationProjectImageUrl: p.donationProjectImageUrl,
    donationProjectTargetAmount: p.donationProjectTargetAmount,
    donationProjectDescription: p.donationProjectDescription,

    donationProjectStartDate: p.donationProjectStartDate,
    donationProjectEndDate: p.donationProjectEndDate,

    // category 보정
    donationCategoryId:
      p.donationCategory?.donationCategoryId ??
      p.donationCategoryId ??
      0,

    // 타입 보정
    donationProjectType: p.donationProjectType ?? "DONATION",
  });
  
  return (
    <div css={s.container}>
      <h1 css={s.title}>기부 프로젝트 상세</h1>

      <div css={s.detailBox}>
        <img src={project.donationProjectImageUrl} alt="" css={s.thumbnail} />

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
            <strong>현재 금액:</strong>{" "}
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

      <button
        css={s.editBtn}
        onClick={() => {
          const fixed = fixProjectData(project); // 여기서 보정
          setDonationEditState(fixed);           // Recoil 저장
          navigate(`/admin/donation/${projectId}/edit`);
        }}
      >
        수정하기
      </button>
      <button
        css={s.detailManageBtn}
        onClick={() => navigate(`/admin/donation/${projectId}/details`)}
      >
        상세 콘텐츠 관리
      </button>
      <button
        css={s.detailManageBtn}
        onClick={() => navigate(`/admin/donation/${projectId}/comments`)}
      >
        댓글 관리
      </button>
      <button
        css={s.detailManageBtn}
        onClick={() => navigate(`/admin/donation/${projectId}/contributions`)}
      >
        후원 내역 관리
      </button>
    </div>
  );
};

export default AdminDonationDetailPage;
