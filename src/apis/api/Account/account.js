import instance from "../../utills/instance";


export const authLoginRequest = async (data) => {
    return await instance.post("/auth/login", data);
}

export const authSignupRequest = async (data) => {
    return await instance.post("/user", data);
}

export const oAuth2SignupRequest = async (data) => {
    return await instance.post("/user/oauth2/sign-up", data);
}

export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}