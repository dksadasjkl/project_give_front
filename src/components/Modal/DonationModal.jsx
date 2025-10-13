/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 999,
  },
  content: {
    position: "relative",
    width: "400px",
    height: "350px",
    margin: "100px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    padding: "20px",
    overflow: "visible",
  },
};

const button = css`
  box-sizing: border-box;
  margin: 5px;
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

  &:disabled {
    border-color: #ccc;
    color: #999;
    cursor: not-allowed;
  }

  &:active:enabled {
    background-color: #02ad44; 
    color: #fff; 
  }
`;


function DonationModal({ donationAmount, onChange, onConfirm, onCancel, message }) {
  const [agreeTerms, setAgreeTerms] = useState(false);

  const isConfirmEnabled = donationAmount > 0 && agreeTerms;

  return (
    <Modal isOpen={true} onRequestClose={onCancel} style={modalStyle} >
      <h2>기부하기</h2>
      
      <input
        type="number"
        value={donationAmount}
        onChange={onChange}
        placeholder="기부 금액 입력"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      {message?.type === "error" && <p style={{ color: "red" }}>{message.text}</p>}

      <div style={{ marginBottom: "15px", textAlign: "left", width: "100%" }}>
        <label>
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
            style={{ marginRight: "8px" }}
          />
          기부 약관에 동의합니다.
        </label>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button css={button} onClick={onCancel}>취소</button>
        <button css={button} onClick={onConfirm} disabled={!isConfirmEnabled}>
          결제 및 기부
        </button>
      </div>
    </Modal>
  );
}

export default DonationModal;