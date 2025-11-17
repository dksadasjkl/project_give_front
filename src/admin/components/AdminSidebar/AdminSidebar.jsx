/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const menus = [
    { name: "Dashboard", path: "/admin" },
    { name: "기부 프로젝트 관리", path: "/admin/donation" },
    { name: "스토어 상품 관리", path: "/admin/store" },
    { name: "유저 관리", path: "/admin/user" },
    { name: "주문 / 배송 관리", path: "/admin/order" },
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
