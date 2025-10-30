import instance from "../../utills/instance";


/** 🧾 주문 생성 */
export const postStoreOrderRequest = async (data) => {
  return await instance.post("/store/orders", data);
};

/** 🧾 내 주문 목록 조회 */
export const getMyStoreOrdersRequest = async () => {
  return await instance.get("/store/orders/my");
};

/** 🧾 주문 상세 조회 */
export const getStoreOrderDetailRequest = async (orderId) => {
  return await instance.get(`/store/orders/${orderId}`);
};

/** 🧾 주문 상태 변경 */
export const putStoreOrderStatusRequest = async (orderId, status) => {
  return await instance.put(`/store/orders/${orderId}/status`, null, { params: { status } });
};

/** 🧾 주문 취소 */
export const deleteStoreOrderRequest = async (orderId) => {
  return await instance.delete(`/store/orders/${orderId}`);
};
