/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import * as s from "./DonationListPage.style";
import { getAdminDonationListRequest, deleteAdminDonationDeleteRequest } from "../../apis/adminDonationApi";
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
      refetch(); // 🔥 다시 불러오기
    } catch {
      alert("삭제 실패");
    }
  };

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  const items = data?.data?.items || [];
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / size);

  return (
    <div>
      <h1 css={s.title}>기부 프로젝트 목록</h1>

      {/* 🔥 생성 버튼 추가 */}
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
            <th>현재 금액</th>
            <th>목표 금액</th>
            <th>기간</th>
            <th>관리</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.donationProjectId} css={s.row}>
              <td onClick={() => navigate(`/admin/donation/${item.donationProjectId}`)}>
                {item.donationProjectId}
              </td>

              <td onClick={() => navigate(`/admin/donation/${item.donationProjectId}`)}>
                <img
                  src={item.donationProjectImageUrl}
                  alt=""
                  width="60"
                  height="60"
                  style={{ borderRadius: "6px" }}
                />
              </td>

              <td onClick={() => navigate(`/admin/donation/${item.donationProjectId}`)}>
                {item.donationProjectTitle}
              </td>

              <td>{item.donationProjectOrganization}</td>
              <td>{item.donationProjectCurrentAmount?.toLocaleString()}원</td>
              <td>{item.donationProjectTargetAmount?.toLocaleString()}원</td>
              <td>
                {item.donationProjectStartDate?.substring(0, 10)} ~{" "}
                {item.donationProjectEndDate?.substring(0, 10)}
              </td>

              {/* 🔥 삭제 버튼 */}
              <td>
                <button
                  css={s.deleteButton}
                  onClick={() => handleDelete(item.donationProjectId)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
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
