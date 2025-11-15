/** @jsxImportSource @emotion/react */
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import * as s from "./style";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div css={s.container}>
      <AdminSidebar />
      <main css={s.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
