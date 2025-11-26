import instance from "../../apis/utills/instance";

// 관리자 대시보드 데이터 조회
export const getAdminDashboardRequest = () => {
  return instance.get("/admin/dashboard");
};