import instance from "../../apis/utills/instance";

/** =======================
 *   펀딩 프로젝트 CRUD
 * =======================*/

/** 펀딩 목록 조회 */
export const getAdminFundingListRequest = async (page = 1, size = 10) => {
  return await instance.get(`/admin/funding?page=${page}&size=${size}`);
};

/** 펀딩 상세 조회 */
export const getAdminFundingDetailRequest = async (projectId) => {
  return await instance.get(`/admin/funding/projects/${projectId}`);
};

/** 펀딩 생성 */
export const postAdminFundingCreateRequest = async (data) => {
  return await instance.post(`/admin/funding/projects`, data);
};

/** 펀딩 수정 */
export const putAdminFundingUpdateRequest = async (projectId, data) => {
  return await instance.put(`/admin/funding/projects/${projectId}`, data);
};

/** 펀딩 삭제 */
export const deleteAdminFundingDeleteRequest = async (projectId) => {
  return await instance.delete(`/admin/funding/projects/${projectId}`);
};


/** =======================
 *   상세 정보 (공통)
 * =======================*/

export const getAdminFundingProjectDetails = async (projectId) => {
  return await instance.get(`/admin/funding/projects/${projectId}/details`);
};

export const postAdminFundingProjectDetail = async (projectId, data) => {
  return await instance.post(`/admin/funding/projects/${projectId}/details`, data);
};

export const putAdminFundingProjectDetail = async (detailId, data) => {
  return await instance.put(`/admin/funding/projects/details/${detailId}`, data);
};

export const deleteAdminFundingProjectDetail = async (detailId) => {
  return await instance.delete(`/admin/funding/projects/details/${detailId}`);
};


/** =======================
 *   리워드 (펀딩 전용)
 * =======================*/

export const getAdminFundingRewards = async (projectId) => {
  return await instance.get(`/admin/funding/projects/${projectId}/rewards`);
};

export const postAdminFundingReward = async (projectId, data) => {
  return await instance.post(`/admin/funding/projects/${projectId}/rewards`, data);
};

export const putAdminFundingReward = async (rewardId, data) => {
  return await instance.put(`/admin/funding/rewards/${rewardId}`, data);
};

export const deleteAdminFundingReward = async (rewardId) => {
  return await instance.delete(`/admin/funding/rewards/${rewardId}`);
};


/** =======================
 *   댓글 관리
 * =======================*/

export const getAdminFundingCommentsRequest = async (projectId, page, size) => {
  return await instance.get(`/admin/funding/comments?projectId=${projectId}&page=${page}&size=${size}`);
};

export const deleteAdminFundingCommentRequest = async (commentId) => {
  return await instance.delete(`/admin/funding/comments/${commentId}`);
};


/** =======================
 *   참여 내역 (후원)
 * =======================*/

export const getAdminFundingContributionsRequest = async (projectId, page, size) => {
  return await instance.get(
    `/admin/funding/contributions?projectId=${projectId}&page=${page}&size=${size}`
  );
};

export const deleteAdminFundingContributionRequest = async (contributionId) => {
  return await instance.delete(`/admin/funding/contributions/${contributionId}`);
};


export const getAdminFundingCategoriesRequest = async () => {
  return await instance.get("/admin/funding/categories");
}
