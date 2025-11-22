import instance from "../../utills/instance";

/** 장바구니 추가 */
export const postStoreCartRequest = async (data) => {
  return await instance.post("/store/cart", data);
};

/** 내 장바구니 조회 */
export const getMyStoreCartRequest = async () => {
  return await instance.get("/store/cart");
};

/** 장바구니 수량 수정 */
export const putStoreCartQuantityRequest = async (cartId, quantity) => {
  return await instance.put(`/store/cart/${cartId}`, null, { params: { quantity } });
};

/** 장바구니 상품 삭제 */
export const deleteStoreCartItemRequest = async (cartId) => {
  return await instance.delete(`/store/cart/${cartId}`);
};

/** 장바구니 전체삭제 */
export const deleteStoreCartAllRequest = async () => {
  return await instance.delete(`/store/cart/clear`);
};