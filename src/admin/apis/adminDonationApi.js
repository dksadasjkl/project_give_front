import instance from "../../apis/utills/instance";

/** ✅ 기부 프로젝트 목록 가져오기 */
export const getAdminDonationListRequest = async (page = 1, size = 10) => {
  return await instance.get(`/admin/donation?page=${page}&size=${size}`);
};

/** ✅ 기부 프로젝트 상세조회 */
export const getAdminDonationDetailRequest = async (id) => {
  return await instance.get(`/admin/donation/projects/${id}`);
};

/** ✅ 기부 프로젝트 생성 */
export const postAdminDonationCreateRequest = async (data) => {
  return await instance.post(`/admin/donation/projects`, data);
};

/** ✅ 기부 프로젝트 수정 ( 수정됨) */
export const putAdminDonationUpdateRequest = async (donationProjectId, data) => {
  return await instance.put(`/admin/donation/projects/${donationProjectId}`, data);
};

/** ✅ 기부 프로젝트 삭제 (수정됨) */
export const deleteAdminDonationDeleteRequest = async (donationProjectId) => {
  return await instance.delete(`/admin/donation/projects/${donationProjectId}`);
};


/** 기부 상세 조회 */
export const getAdminProjectDetails = async (projectId) => {
  return await instance.get(`/admin/donation/projects/${projectId}/details`);
};

/** 기부 상세 추가 */
export const postAdminProjectDetail = async (projectId, data) => {
  return await instance.post(`/admin/donation/projects/${projectId}/details`, data);
};

/** 기부 상세 수정 */
export const putAdminProjectDetail = async (detailId, data) => {
  return await instance.put(`/admin/donation/projects/details/${detailId}`, data);
};

/** 기부 상세 삭제 */
export const deleteAdminProjectDetail = async (detailId) => {
  return await instance.delete(`/admin/donation/projects/details/${detailId}`);
};