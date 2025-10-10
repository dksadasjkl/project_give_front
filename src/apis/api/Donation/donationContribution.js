import instance from "../../utills/instance";

export const getContributionsRequest = async (donationProjectId) => {
  return await instance.get(`/donation-project-contributions/${donationProjectId}`);  
};

export const getContributionLoadMoreRequest = async (params) => {
  return await instance.get(`/donation-project-contributions/load-more`, { params });  
};

export const getContributionCountRequest = async (params) => {
  return await instance.get("/donation-project-contributions/count", { params });
};