/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAdminDonationDetailRequest } from "../../apis/adminDonationApi";
import * as s from "./DonationDetailPage.style";

const AdminDonationDetailPage = () => {
  const { projectId } = useParams();

  const { data, isLoading, error } = useQuery(
    ["adminDonationDetail", projectId],
    () => getAdminDonationDetailRequest(projectId),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  const project = data?.data;

  return (
    <div css={s.container}>
      <h1 css={s.title}>기부 프로젝트 상세</h1>

      <div css={s.detailBox}>
        <img src={project.donationProjectImageUrl} alt="" css={s.thumbnail} />

        <div css={s.infoBox}>
          <h2 css={s.projectTitle}>{project.donationProjectTitle}</h2>
          <p><strong>기관명:</strong> {project.donationProjectOrganization}</p>
          <p><strong>카테고리:</strong> {project.donationCategory?.donationCategoryNameKor}</p>
          <p><strong>현재 금액:</strong> {project.donationProjectCurrentAmount?.toLocaleString()}원</p>
          <p><strong>목표 금액:</strong> {project.donationProjectTargetAmount?.toLocaleString()}원</p>
          <p>
            <strong>기간:</strong>
            {project.donationProjectStartDate?.substring(0, 10)} ~ {project.donationProjectEndDate?.substring(0, 10)}
          </p>
        </div>
      </div>

      <div css={s.section}>
        <h3>상세 내용</h3>
        <p css={s.description}>{project.donationProjectDescription}</p>
      </div>
    </div>
  );
};

export default AdminDonationDetailPage;
