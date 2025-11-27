/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const menus = [
    { name: "Dashboard", path: "/admin" },
    { name: "기부 프로젝트 관리", path: "/admin/donation" },
    { name: "펀딩 프로젝트 관리", path: "/admin/funding" },

    { name: "공감가게 상품 관리", path: "/admin/store/products" },
    { name: "공감가게 주문 관리", path: "/admin/store/orders" },
    { name: "공감가게 결제 관리", path: "/admin/store/payments" },
    { name: "공감가게 배송 관리", path: "/admin/store/shipping" },
    { name: "공감가게 리뷰 관리", path: "/admin/store/reviews" },
    { name: "공감가게 리뷰 신고 관리", path: "/admin/store/reports" },
    { name: "공감가게 QnA 관리", path: "/admin/store/qna" },
    { name: "공감가게 포인트 관리", path: "/admin/store/points" },
    { name: "유저 관리", path: "/admin/users" },
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
