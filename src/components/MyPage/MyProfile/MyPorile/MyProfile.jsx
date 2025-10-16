/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useRef, useState } from "react";
import { useInput } from "../../../../hooks/useInput";
import MyPageSidebar from "../../MyPageSidebar/MyPageSidebar"
import { useMutation } from "@tanstack/react-query";
import { checkNicknameRequest, passwordEditRequest } from "../../../../apis/api/Account/account";
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
    const [newProfileImageUrl, setNewProfileImageUrl] = useState(principal?.profileImageUrl);
    const [oldPassword, oldPasswordChange, oldPasswordMessage, setOldPasswordMessage, setOldPassword] = useInput("oldPassword");
    const [newPassword, newPasswordChange, newPasswordMessage, setNewPasswordMessage, setNewPassword] = useInput("newPassword");
    const [newPasswordCheck, newPasswordCheckChange, newPasswordCheckMessage, setNewPasswordCheckMessage, setNewPasswordCheck] = useInput("newPasswordCheck");
    const fileRef = useRef();

const passwordEdit = useMutation({
    mutationKey: "passwordEdit",
    mutationFn: passwordEditRequest,
    onSuccess: () => {
        alert("비밀번호 수정이 완료되었습니다.");
        localStorage.removeItem("AccessToken");
        window.location.replace("/auth/authentication");
    },
onError: (error) => {
    const errors = error.response?.data?.errors;

    if (errors) {
        if (errors.oldPassword) {
            const message = { type: "error", text: errors.oldPassword };
            setOldPasswordMessage(message);
        }
        if (errors.newPassword) {
            setNewPasswordMessage({ type: "error", text: errors.newPassword });
        }
        if (errors.newPasswordCheck) {
            setNewPasswordCheckMessage({ type: "error", text: errors.newPasswordCheck });
        }
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
            getDownloadURL(storageRef).then(url => setNewProfileImageUrl(url));
        });
    }

    return (
        <div css={s.layout}>
            <div css={s.userDetails}>
                <div css={s.title}>계정 관리</div>
                <div>기본 정보</div>
                <div css={s.box}>
                    {!isEditing 
                        ? <ProfileView nickname={principal?.nickname} email={principal?.email} profileImageUrl={principal?.profileImageUrl} onEditClick={() => setIsEditing(true)} />
                        : 
                        <>
                            <ProfileImageEditor imageUrl={newProfileImageUrl} fileRef={fileRef} onFileChange={handleFileChange} />
                            <NicknameEditor nicknameValue={principal?.nickname} onChange={() => {}} message={null} onCancel={() => setIsEditing(false)} />
                        </>
                    }
                </div>

                <div css={s.passwordEdit}>비밀번호 변경</div>
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