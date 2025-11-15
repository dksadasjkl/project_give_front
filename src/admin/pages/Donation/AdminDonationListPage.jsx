/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import * as s from "./DonationListPage.style";
import { getAdminDonationListRequest } from "../../apis/adminDonationApi";
import { useNavigate } from "react-router-dom";

const AdminDonationListPage = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery(
    ["adminDonationList"],
    () => getAdminDonationListRequest(1, 20),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  const items = data?.data?.items || [];

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
    </div>
  );
};

export default AdminDonationListPage;
