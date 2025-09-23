import instance from "../utills/instance";

export const getDonationProjectsRequest = async () => {
    return await instance.get("/donations");
};