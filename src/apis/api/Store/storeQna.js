import instance from "../../utills/instance";

/** ❓ 상품 문의 등록 */
export const postStoreQnaRequest = async (data) => {
  return await instance.post("/store/qna", data);
};

// /** ❓ 상품별 문의 조회 */
// export const getStoreQnaByProductRequest = async (productId) => {
//   return await instance.get(`/store/qna/product/${productId}`);
// };

/** ❓ 관리자 답변 등록 */
export const putStoreQnaAnswerRequest = async (qnaId, answerContent) => {
  return await instance.put(`/store/qna/${qnaId}/answer`, null, { params: { answerContent } });
};

/** ❓ 문의 삭제 */
export const deleteStoreQnaRequest = async (qnaId) => {
  return await instance.delete(`/store/qna/${qnaId}`);
};

/** ✅ 상품별 Q&A 페이지네이션 조회 */
export const getStoreQnaPageRequest = async (productId, page = 1, size = 10) => {
  const response = await instance.get(`/store/qna/product/${productId}`, {
    params: { page, size },
  });
  return response.data;
};
