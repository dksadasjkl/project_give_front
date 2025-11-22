import instance from "../../apis/utills/instance";

/** 관리자 - 유저 목록 */
export const getAdminUserList = async (page = 1, size = 10) => {
  return await instance.get(`/admin/users?page=${page}&size=${size}`);
};

/** 관리자 - 유저 상세 */
export const getAdminUserDetail = async (userId) => {
  return await instance.get(`/admin/users/${userId}`);
};

/** 관리자 - 유저 삭제 */
export const deleteAdminUser = async (userId) => {
  return await instance.delete(`/admin/users/${userId}`);
};
