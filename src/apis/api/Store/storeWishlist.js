import instance from "../../utills/instance";

/** 🧩 찜 등록 */
export const postStoreWishlistRequest = async (productId) => {
  return await instance.post(`/store/wishlist/${productId}`);
};

/** 🧩 찜 삭제 */
export const deleteStoreWishlistRequest = async (productId) => {
  return await instance.delete(`/store/wishlist/${productId}`);
};

/** 🧩 내 찜 목록 조회 */
export const getMyStoreWishlistRequest = async () => {
  return await instance.get("/store/wishlist");
};
