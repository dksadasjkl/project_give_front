import instance from "../../utills/instance";

export const postOrderRequest = async (data) => {
    return await instance.post("/donation-project-contributions", data);
};