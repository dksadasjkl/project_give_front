import instance from "../../utills/instance";

/** 💰 내 포인트 내역 (페이지네이션) */
export const getMyStorePointsRequest = async (page, size) => {
  return await instance.get(`/store/points?page=${page}&size=${size}`);
};