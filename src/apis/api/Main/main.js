import instance from "../../utills/instance";

export const getMainTopRequest = async () => {
  return await instance.get("/main/top");
};

export const getMainRecommendRequest = async () => {
  return await instance.get("/main/recommend");
};