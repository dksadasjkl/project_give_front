import instance from "../../utills/instance";

/** 💳 결제 등록 */
export const postStorePaymentRequest = async (data) => {
  return await instance.post("/store/payments", data);
};

/** 💳 주문별 결제 조회 */
export const getStorePaymentByOrderRequest = async (orderId) => {
  return await instance.get(`/store/payments/order/${orderId}`);
};
