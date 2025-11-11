import instance from "../../utills/instance";

/** 🧩 리뷰 신고 등록 */
export const postStoreReviewReportRequest = async (commentId, reason) => {
  return await instance.post("/store/review/report", {
    commentId,
    reason,
  });
};

/** 🧩 신고된 리뷰 목록 조회 (관리자용, 선택사항) */
export const getStoreReviewReportsRequest = async () => {
  return await instance.get("/store/review/report");
};

/** 🧩 신고 리뷰 삭제 (관리자용, 선택사항) */
export const deleteStoreReviewReportRequest = async (reportId) => {
  return await instance.delete(`/store/review/report/${reportId}`);
};
