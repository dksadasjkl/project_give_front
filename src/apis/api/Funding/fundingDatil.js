import instance from "../../utills/instance";

export const getProjectRewardsRequest = async (donationProjectId) => {
  return await instance.get(`/donations/rewards/${donationProjectId}`);
};