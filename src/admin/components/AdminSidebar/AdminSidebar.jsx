/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const menus = [
    { name: "Dashboard", path: "/admin" },
    { name: "기부 프로젝트 관리", path: "/admin/donation" },
    { name: "펀딩 프로젝트 관리", path: "/admin/funding" },

    { name: "스토어 상품 관리", path: "/admin/store/products" },
    { name: "스토어 주문 관리", path: "/admin/store/orders" },
    { name: "스토어 결제 관리", path: "/admin/store/payments" },
    { name: "스토어 배송 관리", path: "/admin/store/shipping" },
    { name: "스토어 리뷰 관리", path: "/admin/store/reviews" },
    { name: "스토어 리뷰 신고 관리", path: "/admin/store/reports" },
    { name: "스토어 QnA 관리", path: "/admin/store/qna" },
    { name: "스토어 포인트 관리", path: "/admin/store/points" },
    // 유저관리 추가 예정
  ];

  const isActive = (menuPath) => {
    if (menuPath === "/admin") {
      return location.pathname === "/admin";
    }

    return location.pathname.startsWith(menuPath);
  };

  return (
    <aside css={s.sidebar}>
      <h1 css={s.logo}>GIVE ADMIN</h1>

      <ul css={s.menuList}>
        {menus.map((menu, idx) => (
          <li key={idx}>
            <Link
              css={[s.menuItem, isActive(menu.path) && s.activeMenu]}
              to={menu.path}
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
