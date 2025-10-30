import instance from "../../utills/instance";

/** 💰 내 포인트 내역 조회 */
export const getMyStorePointsRequest = async () => {
  return await instance.get("/store/points");
};
