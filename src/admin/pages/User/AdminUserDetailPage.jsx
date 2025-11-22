/** @jsxImportSource @emotion/react */
import * as s from "./AdminUserDetailPage.style";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getAdminUserDetail, deleteAdminUser } from "../../apis/adminUserApi";

function AdminUserDetailPage() {
  const { userId } = useParams();
  const navigate = useNavigate();

  // ▼ 유저 상세 조회
  const { data, isLoading, error } = useQuery(
    ["adminUserDetail", userId],
    () => getAdminUserDetail(userId),
    { refetchOnWindowFocus: false }
  );

  const user = data?.data;

  // ▼ 유저 삭제
  const deleteMutation = useMutation(() => deleteAdminUser(userId), {
    onSuccess: () => {
      alert("회원이 삭제되었습니다.");
      navigate("/admin/users");
    },
    onError: () => {
      alert("삭제 실패");
    },
  });

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;
  if (!user) return <p>유저 정보를 찾을 수 없습니다.</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>유저 상세 정보</h1>

      <div css={s.card}>
        <div css={s.row}>
          <span css={s.label}>유저 ID</span>
          <span css={s.value}>{user.user_id}</span>
        </div>

        <div css={s.row}>
          <span css={s.label}>아이디</span>
          <span css={s.value}>{user.user_username}</span>
        </div>

        <div css={s.row}>
          <span css={s.label}>닉네임</span>
          <span css={s.value}>{user.user_nickname}</span>
        </div>

        <div css={s.row}>
          <span css={s.label}>이메일</span>
          <span css={s.value}>{user.user_email}</span>
        </div>

        <div css={s.row}>
          <span css={s.label}>전화번호</span>
          <span css={s.value}>{user.user_phone}</span>
        </div>

        <div css={s.row}>
          <span css={s.label}>권한</span>
          <span css={s.value}>
            {user.roles
              ? user.roles.split(",").map((role, idx) => (
                  <span key={idx} css={s.roleTag}>
                    {role}
                  </span>
                ))
              : "-"}
          </span>
        </div>

        <div css={s.row}>
          <span css={s.label}>가입일</span>
          <span css={s.value}>
            {user.create_date
              ? user.create_date.slice(0, 16).replace("T", " ")
              : "-"}
          </span>
        </div>
      </div>

      <div css={s.buttonWrap}>
        <button css={s.deleteBtn} onClick={() => deleteMutation.mutate()}>
          회원 삭제
        </button>

        <button css={s.backBtn} onClick={() => navigate("/admin/users")}>
          목록으로
        </button>
      </div>
    </div>
  );
}

export default AdminUserDetailPage;
