/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import * as s from "./DonationListPage.style";
import {
  getAdminDonationListRequest,
  deleteAdminDonationDeleteRequest,
} from "../../apis/adminDonationApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminDonationListPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const size = 10;

  const { data, isLoading, error, refetch } = useQuery(
    ["adminDonationList", page],
    () => getAdminDonationListRequest(page, size),
    { refetchOnWindowFocus: false }
  );

  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteAdminDonationDeleteRequest(id);
      alert("삭제 완료");
      refetch();
    } catch {
      alert("삭제 실패");
    }
  };

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  const items = data?.data?.items || [];
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / size);

  /**  상태 계산 */
  const getStatus = (start, end) => {
    const today = new Date();
    const sDate = new Date(start);
    const eDate = new Date(end);

    if (today < sDate) return "예정";
    if (today > eDate) return "종료";
    return "진행중";
  };

  /**  D-DAY 계산 */
  const getDDay = (end) => {
    const today = new Date();
    const eDate = new Date(end);
    const diff = Math.ceil((eDate - today) / (1000 * 60 * 60 * 24));

    if (diff < 0) return "종료";
    if (diff === 0) return "D-DAY";
    return `D-${diff}`;
  };

  return (
    <div css={s.wrap}>
      <h1 css={s.title}>기부 프로젝트 목록</h1>

      <button
        css={s.createButton}
        onClick={() => navigate("/admin/donation/create")}
      >
        + 새 프로젝트 생성
      </button>

      <table css={s.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>이미지</th>
            <th>제목</th>
            <th>기관명</th>
            <th>카테고리</th>
            <th>참여자 수</th>
            <th>달성률</th>
            <th>기간</th>
            <th>D-DAY</th>
            <th>상태</th>
            <th>관리</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            const progress =
              item.donationProjectTargetAmount > 0
                ? Math.floor(
                    (item.donationProjectCurrentAmount /
                      item.donationProjectTargetAmount) *
                      100
                  )
                : 0;

            return (
              <tr key={item.donationProjectId}>
                <td
                  css={s.clickable}
                  onClick={() =>
                    navigate(`/admin/donation/${item.donationProjectId}`)
                  }
                >
                  {item.donationProjectId}
                </td>

                <td
                  css={s.clickable}
                  onClick={() =>
                    navigate(`/admin/donation/${item.donationProjectId}`)
                  }
                >
                  <img
                    src={item.donationProjectImageUrl}
                    css={s.thumb}
                    alt=""
                  />
                </td>

                <td css={s.clickable}
                   onClick={() =>
                    navigate(`/admin/donation/${item.donationProjectId}`)
                  }
                >
                  {item.donationProjectTitle}
                  
                </td>

                <td>{item.donationProjectOrganization}</td>

                {/* 카테고리 표시 */}
                <td>
                  {item?.donationCategory?.donationCategoryNameKor || "-"}
                </td>

                {/* 참여자 수 */}
                <td>{item.totalContribution || 0}명</td>

                {/*  달성률 */}
                <td>
                  <b>{progress}%</b>
                </td>

                <td>
                  {item.donationProjectStartDate?.substring(0, 10)} ~{" "}
                  {item.donationProjectEndDate?.substring(0, 10)}
                </td>

                {/* D-DAY */}
                <td>{getDDay(item.donationProjectEndDate)}</td>

                {/* 상태 */}
                <td>
                  {getStatus(
                    item.donationProjectStartDate,
                    item.donationProjectEndDate
                  )}
                </td>

                <td>
                  <button
                    css={s.deleteButton}
                    onClick={() => handleDelete(item.donationProjectId)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div css={s.pagination}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          이전
        </button>

        <span>
          {page} / {totalPages}
        </span>

        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          다음
        </button>
      </div>
    </div>
  );
};

export default AdminDonationListPage;
