/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from "react";
import Modal from "react-modal";
import UsernameInput from "../Account/UsernameInput/UsernameInput";
import { findUsernameRequest } from "../../apis/api/Account/account";

Modal.setAppElement("#root"); // 접근성 위해 root 설정

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

function FindIdModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) {
      setMessage({ 
        type: "error", 
        text: "이름과 이메일을 모두 입력해주세요." 
    });
      return;
    }
    try {
      const response = await findUsernameRequest({ name, email });
        alert(`아이디: ${response}`);
        setName("");
        setEmail("");
        setMessage(null);
        onClose();
    } catch (error) {
      const errMsg = error.response?.data || "아이디 찾기 실패";
      setMessage({ type: "error", text: errMsg });
    }
  };

      const submitHandleKeyDown = (e) => {
        if(e.key === "Enter") {
            handleSubmit();
        }
    }

  return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="아이디 찾기"
        style={{
            overlay: { backgroundColor: "rgba(0,0,0,0.4)" },
            content: {
            width: "400px",
            height: "500px",
            margin: "0px auto",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            borderRadius: "10px",
            },
        }}
        >
            <h2>아이디 찾기</h2>
            <UsernameInput
                type="text"
                placeholder="성명"
                value={name}
                onChange={(e) => setName(e.target.value)}
                message={message?.type === "error" && message.text ? { type: "error", text: "" } : null} 
                css={{ marginBottom: "5px" }}
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

export default FindIdModal;