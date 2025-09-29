/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";
import { authLoginRequest, authSignupRequest, checkNicknameRequest, checkUsernameRequest } from "../../../apis/api/Account/account";
import getServerAddress from "../../../constants/serverAddress";
import { useMutation } from "@tanstack/react-query";
import AuthPageInput from "../../../components/Account/AuthPageInput/AuthPageInput";

function AuthenticationPage() {
    const navigate = useNavigate();
    const [ authState, setAuthState ] = useState(1); // 1 : 로그인 2 : 회원가입
    // 로그인
    const [ username, usernameChange ] = useInput(); 
    const [ password, passwordChange ] = useInput(); 
    // 회원가입
     const [ userName, userNameChange, userNameMessage, setUserNameMessage ] = useInput("username");
     const [ passWord, passWordChange, passWordMessage ] = useInput("password");
    const [ checkPassword, checkPasswordChange ] = useInput("checkPassword");
    const [ email, emailChange, emailMessage ] = useInput("email");
    const [ name, nameChange, nameMessage ] = useInput("name");
    const [ phone, phoneChange, phoneMessage ] = useInput("phone");
    const [ nickname, nicknameChange, nicknameMessage, setNicknameMessage ] = useInput("nickname");
    const [ checkPasswordMessage, setCheckPasswordMessage ] = useState(null);

    const authLoginMutation = useMutation({
        mutationKey: "authLoginMutation",
        mutationFn: authLoginRequest,
        onSuccess: response => {
            const accessToken = response.data;
            localStorage.setItem("AccessToken", accessToken);
            alert("로그인 완료 되었습니다.")
            window.location.replace("/");
        },
        onError: error => {
            alert(error.response.data);
        }
    })

    const handleLoginSubmit = () => {
        authLoginMutation.mutate({
            username,
            password
        })
    }

    const authSignupMutation = useMutation({
        mutationKey: "authSignupMutation",
        mutationFn: authSignupRequest,
        onSuccess: response => {
            alert("가입이 완료되었습니다.")
            navigate("/");
        },
        onError: error => {
            alert(error);
        } 
    });


    const handleSignupSubmit = () => {
        const checkFlags = [
            userNameMessage?.type,
            passWordMessage?.type,
            nameMessage?.type,
            phoneMessage?.type,
            nicknameMessage?.type,
            emailMessage?.type
        ];

        if(checkFlags.includes("error") || checkFlags.includes(undefined) || checkFlags.includes(null)) {
            alert("가입 정보를 다시 확인하세요.");
            return;
        }
        authSignupMutation.mutate({
            username: userName,
            password: passWord,
            name: name,
            phone: phone,
            nickname: nickname,
            email: email,
        })
    }

    useEffect(() => {
        if(!checkPassword || !passWord) {
            setCheckPasswordMessage(() => null);
            return;
        }

        if(checkPassword === passWord) {
            setCheckPasswordMessage(() => {
                return {
                    type: "success",
                    text: ""
                }
            })
        } else {
            setCheckPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다."
                }
            })
        }
    }, [checkPassword, passWord]);

    const submitHandleKeyDown = (e) => {
        if(e.key === "Enter") {
            handleLoginSubmit();
        }
    }
    const checkUsernameMutation = useMutation({
    mutationKey: ["checkUsernameMutation"],
    mutationFn: checkUsernameRequest,
    onSuccess: (exists) => {
        if (exists) {
        setUserNameMessage({
            type: "error",
            text: "이미 사용 중인 아이디입니다."
        });
        } else {
        setUserNameMessage({
            type: "success",
            text: "사용 가능한 아이디입니다."
        });
        }
    },

    onError: (error) => {
        const errors = error.response?.data?.errors;
           if (errors?.username) {
        setUserNameMessage({
            type: "error",
            text: errors.username
        });
        } else {
        setUserNameMessage({
            type: "error",
            text: "중복체크 실패"
        });
        }
    },
    });

    const handleUsernameCheck = () => {
          if (!userName.trim()) {
            setUserNameMessage({
            type: "error",
            text: "아이디를 입력해주세요."
            });
            return;
        }
        checkUsernameMutation.mutate({
            username:userName
        })
    }

    
    const checkNicknameMutation = useMutation({
    mutationKey: ["checkNicknameMutation"],
    mutationFn: checkNicknameRequest, // API 요청 함수
    onSuccess: (exists) => {
        if (exists) {
        setNicknameMessage({
            type: "error",
            text: "이미 사용 중인 닉네임입니다."
        });
        } else {
        setNicknameMessage({
            type: "success",
            text: "사용 가능한 닉네임입니다."
        });
        }
    },
    onError: (error) => {
        // 백엔드 ValidException에서 보내는 field별 메시지 확인
        const errors = error.response?.data?.errors;
        if (errors?.nickname) {
        setNicknameMessage({
            type: "error",
            text: errors.nickname
        });
        } else {
        setNicknameMessage({
            type: "error",
            text: "중복체크 실패"
        });
        }
    },
    });


    const handleNicknameCheck = () => {
    if (!nickname.trim()) {
        setNicknameMessage({
        type: "error",
        text: "닉네임을 입력해주세요."
        });
        return;
    }
    checkNicknameMutation.mutate({
        nickname:nickname
    });
    };


  return (
     <div css={s.layout}>
            <div css={s.container}>
                <div css={s.header(authState)}>
                    <div onClick={() => setAuthState(1)}>로그인</div>
                    <div onClick={() => setAuthState(2)}>회원가입</div>
                </div>
                <div>
                    {
                        authState === 1 ?
                            <>
                                <div css={s.inputLayout}>
                                    <div css={s.input}>
                                        <AuthPageInput type={"text"} name={"username"} placeholder={"사용자이름"} value={username} onChange={usernameChange} />
                                        <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange} onKeyDown={submitHandleKeyDown} />
                                    </div>
                                    <button css={s.logInButton} onClick={handleLoginSubmit}>로그인</button>
                                </div>
                                <div css={s.signUp}>
                                    <span>아이디 찾기</span>
                                    <span>|</span>
                                    <span>비밀번호 찾기</span>
                                    <span>|</span>
                                    <span onClick={() => setAuthState(2)}>회원가입</span>
                                </div>
                                 <div css={s.oauth}>
                                    <a href={`http://${getServerAddress()}/oauth2/authorization/google`}>
                                        <img src="https://img.icons8.com/color/512/google-logo.png" alt="google"/>
                                    </a>
                                    <a href={`http://${getServerAddress()}/oauth2/authorization/kakao`}>
                                        <img src="https://d1nuzc1w51n1es.cloudfront.net/c9b51919f15c93b05ae8.png" alt="kakao"/>
                                    </a>
                                    <a href={`http://${getServerAddress()}/oauth2/authorization/naver`}>
                                        <img src="https://d1nuzc1w51n1es.cloudfront.net/6e4f331986317290b3ee.png" alt="naver"/>
                                    </a>
                                </div>
                            </> 
                            : 
                            <>
                                <div css={s.signUpLayout}>
                                    <AuthPageInput type={"text"} name={"username"} placeholder={"사용자이름"} value={userName} onChange={userNameChange} message={userNameMessage} />
                                     <button css={s.idCheckButton} onClick={handleUsernameCheck}>중복체크</button>
                                </div>
                                <div css={s.signUpLayoutInputList}>
                                    <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={passWord} onChange={passWordChange} message={passWordMessage} />
                                    <AuthPageInput type={"password"} name={"checkPassword"} placeholder={"비밀번호 확인"} value={checkPassword} onChange={checkPasswordChange} message={checkPasswordMessage} />
                                    <AuthPageInput type={"text"} name={"name"} placeholder={"성명"} value={name} onChange={nameChange} message={nameMessage} />
                                </div>
                                 <div css={s.signUpLayout}>
                                    <AuthPageInput type={"text"} name={"nickname"} placeholder={"닉네임"} value={nickname} onChange={nicknameChange} message={nicknameMessage} />
                                    <button css={s.idCheckButton} onClick={handleNicknameCheck}>중복체크</button>
                                </div>
                                <div css={s.signUpLayoutInputList}>
                                    <AuthPageInput type={"text"} name={"phone"} placeholder={"전화번호"} value={phone} onChange={phoneChange} message={phoneMessage} />
                                    <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange} message={emailMessage} />
                                </div>
                                <div css={s.regiseterButton}>
                                    <button onClick={handleSignupSubmit}>가입하기</button>
                                </div>
                            </> 
                    }
                </div>
            </div>
        </div>
  )
}

export default AuthenticationPage