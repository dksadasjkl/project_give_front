/** @jsxImportSource @emotion/react */
import * as s from "./AdminStorePointListPage.style";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAdminStorePointList } from "../../../apis/storeAdminApi";

function AdminStorePointListPage() {
  const [page, setPage] = useState(1);
  const size = 20;

  const { data, isLoading, error } = useQuery(
    ["adminPointList", page],
    () => getAdminStorePointList(page, size),
    { refetchOnWindowFocus: false }
  );

  const list = data?.data?.items || [];
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / size);

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>포인트 관리</h1>

      <table css={s.table}>
        <thead>
          <tr>
            <th>포인트 ID</th>
            <th>회원 ID</th>
            <th>유저명</th>
            <th>주문 ID</th>
            <th>포인트</th>
            <th>사유</th>
            <th>적립일</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item) => (
            <tr key={item.pointId}>
              <td>{item.pointId}</td>
              <td>{item.userId}</td>
              <td>{item.userUsername}</td>
              <td>{item.orderId}</td>
              <td>{item.pointAmount}</td>
              <td>{item.pointReason}</td>
              <td>{item.createDate?.slice(0, 16).replace("T", " ")}</td>
            </tr>
          ))}
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
}

export default AdminStorePointListPage;
