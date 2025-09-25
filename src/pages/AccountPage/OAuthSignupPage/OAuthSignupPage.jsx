/** @jsxImportSource @emotion/react */
import { useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./style";
import React, { useEffect, useState } from 'react'
import { useInput } from "../../../hooks/useInput";
import AuthPageInput from "../../../components/Account/AuthPageInput/AuthPageInput";
import { useMutation } from "@tanstack/react-query";
import { oAuth2SignupRequest } from "../../../apis/api/Account/account";

function OAuthSignupPage() {
    const [ searchParams ] = useSearchParams();
    const navigate = useNavigate();
    const [ checkPassword, checkPasswordChange ] = useInput("checkPassword");
    const [ userName, userNameChange, userNameMessage ] = useInput("username");
    const [ passWord, passWordChange, passWordMessage ] = useInput("password");
    const [ email, emailChange, emailMessage ] = useInput("email");
    const [ name, nameChange, nameMessage ] = useInput("name");
    const [ phone, phoneChange, phoneMessage ] = useInput("phone");
    const [ nickname, nicknameChange, nicknameMessage ] = useInput("nickname");
    const [ checkPasswordMessage, setCheckPasswordMessage ] = useState(null);

    const oAuth2SignupMutation = useMutation({
        mutationKey: "oAuth2SignupMutation",
        mutationFn: oAuth2SignupRequest,
        onSuccess: response => {
            alert("가입이 완료되었습니다.")
            navigate("/");
        },
        onError: error => {
            alert(error);
        } 
    });
        
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
        oAuth2SignupMutation.mutate({
            username: userName,
            password: passWord,
            name: name,
            phone: phone,
            nickname: nickname,
            email: email,
            oauth2Name: searchParams.get("name"),
            providerName: searchParams.get("provider")
        })
    }

  return (
    <div css={s.layout}>
            <div css={s.container}>
                <div css={s.header}>
                    <div>회원가입 ({searchParams.get("provider")})</div>
                </div>
                <div> 
                    <>
                        <div css={s.signUpLayout}>
                            <AuthPageInput type={"text"} name={"username"} placeholder={"사용자이름"} value={userName} onChange={userNameChange} message={userNameMessage} />
                        </div>
                        <div css={s.signUpLayoutInputList}>
                            <AuthPageInput type={"passWord"} name={"passWord"} placeholder={"비밀번호"} value={passWord} onChange={passWordChange} message={passWordMessage} />
                            <AuthPageInput type={"password"} name={"checkPassword"} placeholder={"비밀번호 확인"} value={checkPassword} onChange={checkPasswordChange} message={checkPasswordMessage} />
                            <AuthPageInput type={"text"} name={"name"} placeholder={"성명"} value={name} onChange={nameChange} message={nameMessage} />
                        </div>
                        <div css={s.signUpLayoutInputList}>
                            <AuthPageInput type={"text"} name={"phone"} placeholder={"전화번호"} value={phone} onChange={phoneChange} message={phoneMessage} />
                            <AuthPageInput type={"text"} name={"nickname"} placeholder={"닉네임"} value={nickname} onChange={nicknameChange} message={nicknameMessage} />
                            <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange} message={emailMessage} />
                        </div>
                        <div css={s.regiseterButton}>
                            <button onClick={handleSignupSubmit}>가입하기</button>
                        </div>
                    </> 
                  
                </div>
            </div>
        </div>
  )
}

export default OAuthSignupPage