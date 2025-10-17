/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useEffect, useRef, useState } from "react";
import { useInput } from "../../../../hooks/useInput";
import MyPageSidebar from "../../MyPageSidebar/MyPageSidebar"
import { useMutation } from "@tanstack/react-query";
import { checkNicknameRequest, passwordEditRequest, profileUpdateRequest } from "../../../../apis/api/Account/account";
import AuthPageInput from "../../../Account/AuthPageInput/AuthPageInput";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../apis/firebase/firebaseConfig";
import PasswordEditor from "../PasswordEditor/PasswordEditor";
import ProfileView from "../ProfileView/ProfileView";
import ProfileImageEditor from "../ProfileImageEditor/ProfileImageEditor";
import NicknameEditor from "../NicknameEditor/NicknameEditor";

function MyProfile({ principal }) {
    const [isEditing, setIsEditing] = useState(false);
    const [ profileImageUrl, setProfileImageUrl] = useState(principal?.profileImageUrl);
    const [nickname, nicknameChange, nicknameMessage, setNicknameMessage, setNicknameValue] = useInput("");
    const [oldPassword, oldPasswordChange, oldPasswordMessage, setOldPasswordMessage, setOldPassword] = useInput("oldPassword");
    const [newPassword, newPasswordChange, newPasswordMessage, setNewPasswordMessage, setNewPassword] = useInput("newPassword");
    const [newPasswordCheck, newPasswordCheckChange, newPasswordCheckMessage, setNewPasswordCheckMessage, setNewPasswordCheck] = useInput("newPasswordCheck");
    const fileRef = useRef();

    useEffect(() => {
        if (principal?.nickname) {
        setNicknameValue(principal.nickname);
        }
        if (principal?.profileImageUrl) {
        setProfileImageUrl(principal.profileImageUrl);
        }
    }, [principal, setNicknameValue]);


    const profileUpdate = useMutation({
        mutationKey: "profileUpdate",
        mutationFn: profileUpdateRequest,
        onSuccess: () => {
        alert("프로필이 업데이트 되었습니다.");
            setIsEditing(false);
            window.location.reload();
        },
        onError: (error) => {
            alert("업데이트 실패");
        }
    })


    const handleConfirm = () => {
        if (!nickname && !profileImageUrl) {
            alert("변경할 값이 없습니다.");
            return;
        }

        profileUpdate.mutate({
            nickname: nickname || principal?.nickname,
            profileImageUrl: profileImageUrl || principal?.profileImageUrl
        });
    };

    // 비밀번호 변경
    const passwordEdit = useMutation({
        mutationKey: "passwordEdit",
        mutationFn: passwordEditRequest,
        onSuccess: () => {
            alert("비밀번호 수정이 완료되었습니다.");
            localStorage.removeItem("AccessToken");
            window.location.replace("/account");
        },
        onError: (error) => {
            const errors = error.response?.data?.errors;

            // 각 인풋 밑에 메시지 표시
            if (errors) {
                if (errors.oldPassword) setOldPasswordMessage({ type: "error", text: errors.oldPassword });
                if (errors.newPassword) setNewPasswordMessage({ type: "error", text: errors.newPassword });
                if (errors.newPasswordCheck) setNewPasswordCheckMessage({ type: "error", text: errors.newPasswordCheck });
            }
        }
    });

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if(files.length === 0 || !window.confirm("파일을 업로드 하시겠습니까?")) return;

        const storageRef = ref(storage, `pet/profileImageUrl/${uuid()}_${files[0].name}`);
        const uploadTask = uploadBytesResumable(storageRef, files[0]);

        uploadTask.on("state_changed", null, null, () => {
            alert("업로드 완료");
            getDownloadURL(storageRef).then(url => setProfileImageUrl(url));
        });
    }

    return (
        <div css={s.layout}>
            <div css={s.userDetails}>
                <div css={s.title}>계정 관리</div>
                <div css={s.subTitle}>기본 정보</div>
                <div css={s.profileBox}>
                    {!isEditing 
                        ? 
                        <ProfileView
                        nickname={principal?.nickname}
                        email={principal?.email}
                        profileImageUrl={principal?.profileImageUrl}
                        onEditClick={() => {
                            setIsEditing(true);
                        }}
                        />
                        : 
                        <>
                            <ProfileImageEditor imageUrl={profileImageUrl} fileRef={fileRef} onFileChange={handleFileChange} />
                            <NicknameEditor
                                nicknameValue={nickname}
                                onChange={nicknameChange}
                                message={nicknameMessage}
                                setNicknameMessage={setNicknameMessage}
                                onCancel={() => {
                                    setNicknameValue(principal?.nickname || "");
                                    setNicknameMessage({ type: "", text: "" }); 
                                    setProfileImageUrl(principal?.profileImageUrl || "");
                                    setIsEditing(false);} 
                                }
                                onConfirm={handleConfirm}
                            />
                        </>
                    }
                </div>
                <div css={s.subTitle}>비밀번호 변경</div>
                <PasswordEditor
                    oldPassword={oldPassword} oldPasswordChange={oldPasswordChange} oldPasswordMessage={oldPasswordMessage}
                    newPassword={newPassword} newPasswordChange={newPasswordChange} newPasswordMessage={newPasswordMessage}
                    newPasswordCheck={newPasswordCheck} newPasswordCheckChange={newPasswordCheckChange} newPasswordCheckMessage={newPasswordCheckMessage}
                    onSubmit={() => passwordEdit.mutate({ oldPassword, newPassword, newPasswordCheck })}
                />
            </div>
        </div>
    )
}

export default MyProfile;