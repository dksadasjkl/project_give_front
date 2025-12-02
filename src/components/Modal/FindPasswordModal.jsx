/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from "react";
import Modal from "react-modal";
import UsernameInput from "../Account/UsernameInput/UsernameInput";
import { resetPasswordRequest } from "../../apis/api/Account/account";

Modal.setAppElement("#root");

const button = css`
    box-sizing: border-box;
    margin: 5px 5px 5px 0;
    border: 1px solid #ccc; 
    border-radius: 5px;
    padding: 5px 10px;
    background-color: #fff;
    color: #212121; 
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        border-color: #02ad44; 
        color: #02ad44;
    }
    &:active {
        background-color: #02ad44; 
        color: #fff; 
    }
`;

function FindPasswordModal({ isOpen, onClose }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);

    // 🔥 모달 열릴 때 자동 초기화
    useEffect(() => {
      if (isOpen) {
        setUsername("");
        setEmail("");
        setMessage(null);
      }
    }, [isOpen]);

    const handleSubmit = async () => {
      if (!username.trim() || !email.trim()) {
        setMessage({ type: "error", text: "아이디와 이메일을 모두 입력해주세요." });
        return;
      }

      try {
        await resetPasswordRequest({ username, email });
        alert("임시 비밀번호가 발급되었습니다. 이메일을 확인하세요.");
        onClose();
      } catch (error) {
        const errMsg = error.response?.data || "비밀번호 초기화 실패";
        setMessage({ type: "error", text: errMsg });
      }
    };

    const submitHandleKeyDown = (e) => {
        if(e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="비밀번호 초기화"
            style={{
                overlay: { backgroundColor: "rgba(0,0,0,0.4)" },
                content: {
                width: "400px",
                height: "500px",
                margin: "70px auto",
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                borderRadius: "10px",
                },
            }}
        >
            <h2>비밀번호 초기화</h2>

            <UsernameInput
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <UsernameInput
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                message={message}
                onKeyDown={submitHandleKeyDown}
            />

            <div style={{ marginTop: "15px", display: "flex", justifyContent: "flex-end" }}>
                <button css={button} onClick={handleSubmit} style={{ marginRight: "10px" }}>확인</button>
                <button css={button} onClick={onClose}>취소</button>
            </div>
        </Modal>
    );
}

export default FindPasswordModal;
