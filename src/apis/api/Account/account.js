import instance from "../../utills/instance";


export const authLoginRequest = async (data) => {
    return await instance.post("/auth/login", data);
}

export const authSignupRequest = async (data) => {
    return await instance.post("/users", data);
}
