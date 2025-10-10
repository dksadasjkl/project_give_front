/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./style";

function LoadMoreButton({ onClick, disabled }) {
  return (
    <button 
      css={s.plusButton} 
      onClick={onClick} 
      disabled={disabled}
    >
      더보기
    </button>
  );
}

export default LoadMoreButton;