import instance from "../../utills/instance";

export const postDonationProjectCommentRequest = async (data) => {
    return await instance.post("/donation-project-comments", data);
}

export const getCommentLoadMoreRequest = async (params) => {
  return await instance.get(`/donation-project-comments/load-more`, { params });  
};

export const getCommentCountRequest = async (params) => {
  return await instance.get("/donation-project-comments/count", { params });
};

/** ✅ 댓글 수정 */
export const putDonationProjectCommentRequest = async (commentId, data) => {
  return await instance.put(`/donation-project-comments/${commentId}`, data);
};

/** ✅ 댓글 삭제 */
export const deleteDonationProjectCommentRequest = async (commentId) => {
  return await instance.delete(`/donation-project-comments/${commentId}`);
};