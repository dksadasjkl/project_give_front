/** @jsxImportSource @emotion/react */
import { useRef, useState, useEffect } from "react";
import * as s from "./style";

function ProductImage({ src, alt = "상품 이미지" }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const [isHover, setIsHover] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // 컨테이너 기준 마우스 좌표
  const [layout, setLayout] = useState(null); // 실제 그려진 이미지 레이아웃
  const zoomFactor = 2.2;

  // 실제 그려진 이미지 크기/오프셋 계산
  const computeLayout = () => {
    if (!containerRef.current || !imgRef.current) return;
    const cRect = containerRef.current.getBoundingClientRect();

    const naturalWidth = imgRef.current.naturalWidth || 1;
    const naturalHeight = imgRef.current.naturalHeight || 1;
    const contW = cRect.width;
    const contH = cRect.height;

    const imgAR = naturalWidth / naturalHeight;
    const boxAR = contW / contH;

    let drawW, drawH, offsetX, offsetY;
    if (boxAR > imgAR) {
      // 박스가 더 가로로 넓음 → 높이에 맞춤
      drawH = contH;
      drawW = drawH * imgAR;
      offsetX = (contW - drawW) / 2;
      offsetY = 0;
    } else {
      // 박스가 더 세로로 넓음 → 너비에 맞춤
      drawW = contW;
      drawH = drawW / imgAR;
      offsetX = 0;
      offsetY = (contH - drawH) / 2;
    }

    setLayout({
      // 컨테이너 크기
      contW,
      contH,
      // 실제 그려진 이미지 크기
      width: drawW,
      height: drawH,
      // 컨테이너 내부에서 이미지가 시작하는 위치(레터박스)
      offsetX,
      offsetY,
      // 원본
      naturalWidth,
      naturalHeight,
    });
  };

  // 이미지 로드/소스 변경/리사이즈 시 레이아웃 재계산
  useEffect(() => {
    computeLayout();
    window.addEventListener("resize", computeLayout);
    return () => window.removeEventListener("resize", computeLayout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const handleImageLoad = () => computeLayout();

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;  // 컨테이너 기준
    const y = e.clientY - rect.top;
    setOffset({ x, y });
  };

  return (
    <div
      css={s.wrapper}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* 🖼️ 원본 이미지 (contain으로 잘림 없이) */}
      <div css={s.container} ref={containerRef} onMouseMove={handleMouseMove}>
        <img ref={imgRef} css={s.image} src={src} alt={alt} onLoad={handleImageLoad} />
        {/* 🔍 렌즈 */}
        {isHover && layout && <div css={() => s.zoomLens(offset, layout)} />}
      </div>

      {/* 🪞 확대 프리뷰 */}
      {isHover && layout && (
        <div css={() => s.zoomPreview(src, offset, layout, zoomFactor)} />
      )}
    </div>
  );
}

export default ProductImage;
