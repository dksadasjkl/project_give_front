import instance from "../../utills/instance";

/** 🚚 배송 등록 */
export const postStoreShippingRequest = async (data) => {
  return await instance.post("/store/shipping", data);
};

/** 🚚 주문별 배송 조회 */
export const getStoreShippingByOrderRequest = async (orderId) => {
  return await instance.get(`/store/shipping/order/${orderId}`);
};

/** 🚚 배송 상태 변경 */
export const putStoreShippingStatusRequest = async (shippingId, status) => {
  return await instance.put(`/store/shipping/${shippingId}/status`, null, { params: { status } });
};
