/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import * as s from "./DonationListPage.style";
import { getAdminDonationListRequest } from "../../apis/adminDonationApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminDonationListPage = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);       // 현재 페이지
  const size = 10;                           // 한 페이지당 10개 출력 (원하면 변경 가능)

  const { data, isLoading, error } = useQuery(
    ["adminDonationList", page],             // 페이지 변경되면 자동 refetch
    () => getAdminDonationListRequest(page, size),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  const items = data?.data?.items || [];
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / size);

  return (
    <div>
      <h1 css={s.title}>기부 프로젝트 목록</h1>

      <table css={s.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>이미지</th>
            <th>제목</th>
            <th>기관명</th>
            <th>현재 금액</th>
            <th>목표 금액</th>
            <th>기간</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr
              key={item.donationProjectId}
              css={s.row}
              onClick={() =>
                navigate(`/admin/donation/${item.donationProjectId}`)
              }
            >
              <td>{item.donationProjectId}</td>
              <td>
                <img
                  src={item.donationProjectImageUrl}
                  alt=""
                  width="60"
                  height="60"
                  style={{ borderRadius: "6px" }}
                />
              </td>
              <td>{item.donationProjectTitle}</td>
              <td>{item.donationProjectOrganization}</td>
              <td>{item.donationProjectCurrentAmount?.toLocaleString()}원</td>
              <td>{item.donationProjectTargetAmount?.toLocaleString()}원</td>
              <td>
                {item.donationProjectStartDate?.substring(0, 10)} ~{" "}
                {item.donationProjectEndDate?.substring(0, 10)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div css={s.pagination}>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          이전
        </button>

        <span>
          {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default AdminDonationListPage;
