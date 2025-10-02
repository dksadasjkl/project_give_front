import instance from "../../utills/instance";

export const getDonationProjectDatatilRequest = async (donationProjectId) => {
  return await instance.get(`/donation-project-details/${donationProjectId}`);  // Path Variable로 ID 전달
};