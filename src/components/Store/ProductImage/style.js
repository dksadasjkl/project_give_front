import { css } from "@emotion/react";

export const wrapper = css`
  position: relative;
  display: flex;
  align-items: flex-start;
`;

export const container = css`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: contain; /* ✅ 초기 잘림 방지 */
  background: #fff;    /* 레터박스 배경 */
  border-radius: 8px;
`;

const LENS_SIZE = 160;

/**
 * offset: {x,y} 컨테이너 기준 마우스 좌표
 * layout: {width,height,offsetX,offsetY,contW,contH,naturalWidth,naturalHeight}
 */
export const zoomLens = (offset, layout) => {
  if (!layout) return css``;

  const half = LENS_SIZE / 2;

  // 컨테이너 기준 마우스를 "이미지 내부 좌표"로 변환
  const localX = offset.x - layout.offsetX;
  const localY = offset.y - layout.offsetY;

  // 이미지 영역 안으로 클램프
  const x = Math.min(Math.max(localX, 0), layout.width);
  const y = Math.min(Math.max(localY, 0), layout.height);

  // 렌즈가 이미지 밖으로 안 나가게 (이미지 영역 기준)
  const lensClampX = Math.min(Math.max(x, half), layout.width - half);
  const lensClampY = Math.min(Math.max(y, half), layout.height - half);

  // 렌즈 박스는 컨테이너 좌표계에서 위치해야 하므로 레터박스 오프셋 더함
  const top = layout.offsetY + (lensClampY - half);
  const left = layout.offsetX + (lensClampX - half);

  return css`
    position: absolute;
    width: ${LENS_SIZE}px;
    height: ${LENS_SIZE}px;
    top: ${top}px;
    left: ${left}px;
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.25);
    pointer-events: none;
    transition: top 0.05s linear, left 0.05s linear;
  `;
};







export const zoomPreview = (src, offset, layout, zoomFactor) => {
  if (!layout) return css``;

  const half = LENS_SIZE / 2;
  const localX = offset.x - layout.offsetX;
  const localY = offset.y - layout.offsetY;
  const x = Math.min(Math.max(localX, 0), layout.width);
  const y = Math.min(Math.max(localY, 0), layout.height);
  const cx = Math.min(Math.max(x, half), layout.width - half);
  const cy = Math.min(Math.max(y, half), layout.height - half);

  const scaleX = layout.naturalWidth / layout.width;
  const scaleY = layout.naturalHeight / layout.height;

  const bgWidth = layout.width * zoomFactor * scaleX;
  const bgHeight = layout.height * zoomFactor * scaleY;

  /**
   * ✅ 핵심 수정:
   * 렌즈가 확대 비율만큼 더 넓게 계산되던 것을 보정.
   * 실제로 확대창에서 렌즈 안의 영역만 보이게끔 조정.
   */
  const bgPosX =
    -((cx - half / zoomFactor) * zoomFactor * scaleX) + (LENS_SIZE / 2) * zoomFactor * scaleX - half * scaleX;
  const bgPosY =
    -((cy - half / zoomFactor) * zoomFactor * scaleY) + (LENS_SIZE / 2) * zoomFactor * scaleY - half * scaleY;

  // 미세 중심 보정
  const biasX = -10; // 필요 시 ±1~2px 단위 조정 가능
  const biasY = -3;

  const previewW = 480;
  const previewH = 480;
  const maxX = -(bgWidth - previewW);
  const maxY = -(bgHeight - previewH);
  const limitedBgPosX = Math.min(Math.max(bgPosX + biasX, maxX), 0);
  const limitedBgPosY = Math.min(Math.max(bgPosY + biasY, maxY), 0);

  return css`
    position: absolute;
    left: calc(100% + 10px);
    top: -50px;
    width: ${previewW}px;
    height: ${previewH}px;
    border-radius: 8px;
    border: 1px solid #ddd;
    background-image: url(${src});
    background-repeat: no-repeat;
    background-size: ${bgWidth}px ${bgHeight}px;
    background-position: ${limitedBgPosX}px ${limitedBgPosY}px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    pointer-events: none;
    z-index: 100;
  `;
};
