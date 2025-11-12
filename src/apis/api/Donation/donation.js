import instance from "../../utills/instance";

export const getDonationProjectsRequest = async () => {
    return await instance.get("/donations");
};

export const getDonationProjectsPagingRequest = async (params) => {
  return await instance.get("/donations/load-more", { params });
};

export const getDonationProjectCountRequest = async (params) => {
  return await instance.get("/donations/count", { params });
};

export const getMyDonationsRequest = async (page = 1, size = 6) => {
  return await instance.get(`/mypage/donations?page=${page}&size=${size}`);
};

export const getMyCommentsRequest = async (page, size) => {
  return await instance.get(`/mypage/donation-comments?page=${page}&size=${size}`);
};