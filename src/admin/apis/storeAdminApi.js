import instance from "../../apis/utills/instance";

/** ========================================================
 *  STORE — 상품
 * ======================================================== */

export const getAdminStoreProductList = async (page = 1, size = 10) =>
  await instance.get(`/admin/store/products?page=${page}&size=${size}`);

export const getAdminStoreProductDetail = async (productId) =>
  await instance.get(`/admin/store/products/${productId}`);

export const postAdminStoreProduct = async (data) =>
  await instance.post(`/admin/store/products`, data);

export const putAdminStoreProduct = async (productId, data) =>
  await instance.put(`/admin/store/products/${productId}`, data);

export const deleteAdminStoreProduct = async (productId) =>
  await instance.delete(`/admin/store/products/${productId}`);


/** ========================================================
 *  STORE — 주문
 * ======================================================== */

export const getAdminStoreOrderList = async (page = 1, size = 10) =>
  await instance.get(`/admin/store/orders?page=${page}&size=${size}`);

export const getAdminStoreOrderDetail = async (orderId) =>
  await instance.get(`/admin/store/orders/${orderId}`);

export const putAdminStoreOrderStatus = async (orderId, status) =>
  await instance.put(`/admin/store/orders/${orderId}/status?status=${status}`);

export const deleteAdminStoreOrder = async (orderId) =>
  await instance.delete(`/admin/store/orders/${orderId}`);


/** ========================================================
 *  STORE — 결제
 * ======================================================== */

export const getAdminStorePaymentList = async (page = 1, size = 10) =>
  await instance.get(`/admin/store/payments?page=${page}&size=${size}`);

export const getAdminStorePaymentDetail = async (paymentId) =>
  await instance.get(`/admin/store/payments/${paymentId}`);

export const putAdminStorePaymentStatus = async (paymentId, status) =>
  await instance.put(`/admin/store/payments/${paymentId}/status?status=${status}`);

export const deleteAdminStorePayment = async (paymentId) =>
  await instance.delete(`/admin/store/payments/${paymentId}`);


/** ========================================================
 *  STORE — 배송
 * ======================================================== */

export const getAdminStoreShippingList = async (page = 1, size = 10) =>
  await instance.get(`/admin/store/shipping?page=${page}&size=${size}`);

export const getAdminStoreShippingDetail = async (shippingId) =>
  await instance.get(`/admin/store/shipping/${shippingId}`);

export const putAdminStoreShippingStatus = async (shippingId, status) =>
  await instance.put(`/admin/store/shipping/${shippingId}/status?status=${status}`);

export const putAdminStoreShippingTracking = async (shippingId, trackingNumber) =>
  await instance.put(`/admin/store/shipping/${shippingId}/tracking?trackingNumber=${trackingNumber}`);

export const deleteAdminStoreShipping = async (shippingId) =>
  await instance.delete(`/admin/store/shipping/${shippingId}`);


/** ========================================================
 *  STORE — 리뷰
 * ======================================================== */

export const getAdminStoreReviewList = async (page = 1, size = 10) =>
  await instance.get(`/admin/store/reviews?page=${page}&size=${size}`);

export const getAdminStoreReviewDetail = async (reviewId) =>
  await instance.get(`/admin/store/reviews/${reviewId}`);

export const deleteAdminStoreReview = async (reviewId) =>
  await instance.delete(`/admin/store/reviews/${reviewId}`);


/** ========================================================
 *  STORE — 리뷰 신고
 * ======================================================== */

export const getAdminStoreReviewReportList = async (page = 1, size = 10) =>
  await instance.get(`/admin/store/reviews/reports?page=${page}&size=${size}`);

export const getAdminStoreReviewReportDetail = async (reportId) =>
  await instance.get(`/admin/store/reviews/reports/${reportId}`);

export const putAdminStoreReviewReportResolve = async (reportId) =>
  await instance.put(`/admin/store/reviews/reports/${reportId}/resolve`);

export const deleteAdminStoreReviewReportAndReview = async (reportId) =>
  await instance.delete(`/admin/store/reviews/reports/${reportId}/delete-review`);
