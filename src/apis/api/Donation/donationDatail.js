import instance from "../../utills/instance";

export const getDonationProjectDatatilRequest = async (donationProjectId) => {
  return await instance.get(`/donation-project-details/${donationProjectId}`);  // Path Variable로 ID 전달
};

export const getContributionsRequest = async (donationProjectId) => {
  return await instance.get(`/donation-project-contributions/${donationProjectId}`);  // Path Variable로 ID 전달
};

export const getContributionssRequest = async (params) => {
  return await instance.get(`/donation-project-contributions/load-more`, { params });  // Path Variable로 ID 전달
};