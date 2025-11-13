import { css } from "@emotion/react";

export const bannerWrapper = css`
  width: 100%;
  height: 400px; 
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 40px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #ffd400;
  }
`;

export const slide = css`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;

  &:hover img {
    transform: scale(1.04);
  }
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

export const overlay = css`
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  text-shadow: 0px 2px 10px rgba(0,0,0,0.4);

  h2 {
    margin: 0;
    font-size: 28px;
    font-weight: 800;
  }

  p {
    margin: 8px 0 0;
    font-size: 16px;
    opacity: 0.9;
  }
`;
