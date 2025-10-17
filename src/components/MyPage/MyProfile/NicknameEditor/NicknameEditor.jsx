/** @jsxImportSource @emotion/react */
import { useMutation } from "@tanstack/react-query";
import AuthPageInput from "../../../Account/AuthPageInput/AuthPageInput";
import * as s from "./style"
import { checkNicknameRequest } from "../../../../apis/api/Account/account";

function NicknameEditor({ nicknameValue, onChange, message, setNicknameMessage, onCancel, onConfirm }) {
    // ✅ 닉네임 중복 체크 mutation
    const checkNicknameMutation = useMutation({
        mutationKey: ["checkNicknameMutation"],
        mutationFn: checkNicknameRequest,
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

    // 중복체크 버튼 클릭 시 실행
    const handleNicknameCheck = () => {
        if (!nicknameValue.trim()) {
            setNicknameMessage({
                type: "error",
                text: "닉네임을 입력해주세요."
            });
            return;
        }
        checkNicknameMutation.mutate({ nickname: nicknameValue });
    };

    return (
        <div css={s.nicknameEditorContainer}>
            <div css={s.nicknameEditorTitle}>닉네임 변경</div>
            <div css={s.nicknameEditorInputGroup}>
                <AuthPageInput
                    type="text"
                    name="nickname"
                    value={nicknameValue}
                    onChange={onChange}
                    message={message}
                />
                <button css={s.nicknameCheckButton} onClick={handleNicknameCheck}>
                    중복 확인
                </button>
            </div>

            <div>
                <button css={s.profileActionButton} onClick={onCancel}>취소</button>
                <button css={s.profileActionButton} onClick={onConfirm}>확인</button>
            </div>
        </div>
    );
}

export default NicknameEditor;