import instance from "../../utills/instance";

export const postDonationProjectCommentRequest = async (data) => {
    return await instance.post("/donation-project-comments", data);
}

export const getCommentLoadMoreRequest = async (params) => {
  return await instance.get(`/donation-project-comments/load-more`, { params });  
};

export const getCommentCountRequest = async (params) => {
  return await instance.get("/donation-project-comments/count", { params });
};