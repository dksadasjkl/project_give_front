import instance from "../../utills/instance";

export const getCategoriesRequest = async () => {
  const response = await instance.get("/categories");
  return response.data; 
}

export const getDonationCategoriesRequest = async () => {
  const response = await instance.get("/donations/categories");
  return response.data; 
}

export const getFundingCategoriesRequest = async () => {
  const response = await instance.get("/fundings/categories");
  return response.data; 
}