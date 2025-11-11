import instance from "../../utills/instance";

/** ⭐ 별점 등록 */
export const postStoreReviewRatingRequest = async (commentId, rating) => {
  return await instance.post(`/store/review-rating/${commentId}`, null, { params: { rating } });
};

/** ⭐ 댓글별 평균 별점 조회 */
export const getStoreAverageRatingRequest = async (commentId) => {
  return await instance.get(`/store/review-rating/${commentId}/average`);
};


