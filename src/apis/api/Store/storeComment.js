import instance from "../../utills/instance";

/**  댓글 등록 */
export const postStoreCommentRequest = async (data) => {
  return await instance.post("/store/comments", data);
};

/**  상품별 댓글 조회 */
export const getStoreCommentsRequest = async (productId) => {
  return await instance.get(`/store/comments/${productId}`);
};

/**  댓글 수정 */
export const putStoreCommentRequest = async (commentId, data) => {
  return await instance.put(`/store/comments/${commentId}`, data);
};

/**  댓글 삭제 */
export const deleteStoreCommentRequest = async (commentId) => {
  return await instance.delete(`/store/comments/${commentId}`);
};

/**  댓글 개수 */
export const getStoreCommentCountRequest = async (productId) => {
  return await instance.get(`/store/comments/${productId}/count`);
};

/**  리뷰 + 평균 별점 통합 조회 */
export const getStoreReviewsWithRatingsRequest = async (productId) => {
  return await instance.get(`/store/reviews/${productId}`);
};

/** 페이지네이션 리뷰 조회 */
export const getStoreReviewsPageRequest = async (productId, page = 1, size = 5, sort = "latest") => {
  const response = await instance.get(`/store/reviews/${productId}`, {
    params: { page, size, sort },
  });
  return response.data;
};

/** 리뷰 작성 가능 여부 (구매자 확인) */
export const getStoreReviewEligibilityRequest = async (productId) => {
  const response = await instance.get(`/store/reviews/${productId}/eligibility`);
  return response.data; // { eligible: true or false }
};