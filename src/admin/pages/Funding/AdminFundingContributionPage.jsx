/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import * as s from "./AdminFundingContributionPage.style";

import {
  getAdminFundingContributionsRequest,
  deleteAdminFundingContributionRequest
} from "../../apis/adminFundingApi";

import { useState } from "react";

const AdminFundingContributionPage = () => {
  const { projectId } = useParams();
  const [page, setPage] = useState(1);
  const size = 10;

  const { data, isLoading, error, refetch } = useQuery(
    ["adminFundingContributions", projectId, page],
    () => getAdminFundingContributionsRequest(projectId, page, size),
    { refetchOnWindowFocus: false }
  );

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteAdminFundingContributionRequest(id),
    onSuccess: () => {
      alert("참여 내역이 삭제되었습니다.");
      refetch();
    },
  });

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  const items = data?.data?.items || [];
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / size);

  return (
    <div css={s.container}>
      <h1 css={s.title}>후원 내역 관리</h1>

      <table css={s.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>후원자</th>
            <th>금액</th>
            <th>날짜</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 ? (
            <tr>
              <td css={s.noData} colSpan={5}>참여내역 없음</td>
            </tr>
          ) : (
            items.map((c) => (
              <tr key={c.donationProjectContributionId}>
                <td>{c.donationProjectContributionId}</td>
                <td>{c.donationProjectContributorName}</td>
                <td>{c.donationProjectContributionAmount.toLocaleString()}원</td>
                <td>{c.donationProjectContributionDate.substring(0, 16)}</td>
                <td>
                  <button
                    css={s.deleteBtn}
                    onClick={() =>
                      window.confirm("삭제하시겠습니까?") &&
                      deleteMutation.mutate(c.donationProjectContributionId)
                    }
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div css={s.pagination}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>이전</button>
        <span>{items.length === 0 ? 0 : page} / {totalPages}</span>
        <button disabled={page === totalPages || totalPages === 0}
                onClick={() => setPage(page + 1)}>
          다음
        </button>
      </div>
    </div>
  );
};

export default AdminFundingContributionPage;
