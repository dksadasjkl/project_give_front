/** @jsxImportSource @emotion/react */
import * as s from "./AdminFundingListPage.style";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  getAdminFundingListRequest,
  deleteAdminFundingDeleteRequest,
} from "../../apis/adminFundingApi";

const AdminFundingListPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const size = 10;

  const { data, isLoading, error, refetch } = useQuery(
    ["adminFundingList", page],
    () => getAdminFundingListRequest(page, size),
    { refetchOnWindowFocus: false }
  );

  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    try {
      await deleteAdminFundingDeleteRequest(id);
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

  const getStatus = (start, end) => {
    const today = new Date();
    const sDate = new Date(start);
    const eDate = new Date(end);

    if (today < sDate) return "예정";
    if (today > eDate) return "종료";
    return "진행중";
  };

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
      <h1 css={s.title}>펀딩 프로젝트 목록</h1>

      <button
        css={s.createButton}
        onClick={() => navigate("/admin/funding/create")}
      >
        + 새 펀딩 생성
      </button>

      <table css={s.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>이미지</th>
            <th>제목</th>
            <th>기관명</th>
            <th>카테고리</th>
            <th>참여자수</th>
            <th>달성률</th>
            <th>기간</th>
            <th>D-DAY</th>
            <th>상태</th>
            <th></th>
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
                    navigate(`/admin/funding/${item.donationProjectId}`)
                  }
                >
                  {item.donationProjectId}
                </td>

                <td
                  css={s.clickable}
                  onClick={() =>
                    navigate(`/admin/funding/${item.donationProjectId}`)
                  }
                >
                  <img
                    src={item.donationProjectImageUrl}
                    css={s.thumb}
                    alt=""
                  />
                </td>

                <td css={s.clickable}>
                  {item.donationProjectTitle}
                </td>

                <td>{item.donationProjectOrganization}</td>

                <td>
                  {item?.donationCategory?.donationCategoryNameKor || "-"}
                </td>

                <td>{item.totalContribution || 0}명</td>

                <td>
                  <b>{progress}%</b>
                </td>

                <td>
                  {item.donationProjectStartDate?.substring(0, 10)} ~{" "}
                  {item.donationProjectEndDate?.substring(0, 10)}
                </td>

                <td>{getDDay(item.donationProjectEndDate)}</td>

                <td>{getStatus(item.donationProjectStartDate, item.donationProjectEndDate)}</td>

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

export default AdminFundingListPage;
