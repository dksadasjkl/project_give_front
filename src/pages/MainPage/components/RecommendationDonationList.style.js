import { css } from "@emotion/react";

export const card = css`
  width: 100%;
  height: 320px;
  border: 1px solid #eee;
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
  overflow: hidden;
  transition: 0.25s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
  }
`;

export const imageBox = css`
  width: 100%;
  height: 220px; 
  background: #f3f3f3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
`;

export const infoBox = css`
  padding: 12px;
  height: 100px; 

  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    margin: 8px 0 0;
    font-size: 13px;
    color: #777;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
