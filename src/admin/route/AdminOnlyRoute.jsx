import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AdminOnlyRoute({ principal, children }) {
  const [checked, setChecked] = useState(false);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (principal === undefined) return; // 로딩 중

    // 비로그인
    if (!principal) {
      alert("로그인이 필요합니다.");
      setAllowed(false);
      setChecked(true);
      return;
    }

    // principal.authorities에서 ROLE 체크
    const roles = principal.authorities?.map(a => a.authority) || [];
    const isAdmin = roles.includes("ROLE_ADMIN");

    if (!isAdmin) {
      alert("관리자만 접근 가능합니다.");
      setAllowed(false);
      setChecked(true);
      return;
    }

    // 관리자 OK
    setAllowed(true);
    setChecked(true);
  }, [principal]);

  if (!checked) return null;

  if (!allowed) return <Navigate to="/" replace />;

  return children;
}

export default AdminOnlyRoute;
