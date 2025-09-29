import instance from "../../utills/instance";


export const authLoginRequest = async (data) => {
    return await instance.post("/auth/login", data);
}

export const authSignupRequest = async (data) => {
    return await instance.post("/users", data);
}

export const oAuth2SignupRequest = async (data) => {
    return await instance.post("/users/oauth2/sign-up", data);
}

export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}

export const checkUsernameRequest = async (data) => {
  const response = await instance.post("/account/username-check", data);
  return response.data; // true/false
};

export const checkNicknameRequest = async (data) => {
  const response = await instance.post(`/account/nickname-check`, data);
  return response.data; 
};