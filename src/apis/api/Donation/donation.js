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

export const getMyDonationsRequest = async () => {
  return await instance.get("/mypage/donations");
};

export const getMyCommentsRequest = async () => {
  return await instance.get("/mypage/donation-comments");
};
