/** @jsxImportSource @emotion/react */
import * as s from "./AdminUserListPage.style";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAdminUserList } from "../../apis/adminUserApi";

function AdminUserListPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const size = 10;

  const { data, isLoading, error } = useQuery(
    ["adminUserList", page],
    () => getAdminUserList(page, size),
    { refetchOnWindowFocus: false }
  );

  const users = data?.data?.items || [];
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / size) || 1;

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>유저 관리</h1>

      <table css={s.table}>
        <thead>
          <tr>
            <th>유저 ID</th>
            <th>아이디</th>
            <th>닉네임</th>
            <th>이메일</th>
            <th>전화번호</th>
            <th>권한</th>
            <th>가입일</th>
            <th>상세</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.user_username}</td>
              <td>{user.user_nickname}</td>
              <td>{user.user_email}</td>
              <td>{user.user_phone}</td>

              <td>
                {user.roles
                  ? user.roles.split(",").map((role, idx) => (
                      <span key={idx} css={s.roleTag}>
                        {role}
                      </span>
                    ))
                  : "-"}
              </td>

              <td>
                {user.create_date
                  ? user.create_date.slice(0, 16).replace("T", " ")
                  : "-"}
              </td>

              <td>
                <button
                  css={s.detailBtn}
                  onClick={() => navigate(`/admin/users/${user.user_id}`)}
                >
                  상세보기
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

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default AdminUserListPage;
