import instance from "../../utills/instance";

/** ✅ 전체 상품 목록 조회 */
export const getStoreProductsRequest = async () => {
  return await instance.get("/store/products");
};

/** ✅ 상품 페이지네이션 (더보기) */
export const getStoreProductsPagingRequest = async (params) => {
  return await instance.get("/store/products/load-more", { params });
};

/** ✅ 총 상품 개수 조회 */
export const getStoreProductCountRequest = async (params) => {
  return await instance.get("/store/products/count", { params });
};

/** ✅ 상품 상세 조회 */
export const getStoreProductDetailRequest = async (productId) => {
  return await instance.get(`/store/products/${productId}`);
};

/** ✅ 카테고리 조회 (있다면) */
export const getStoreCategoriesRequest = async () => {
  return await instance.get("/store/categories");
};