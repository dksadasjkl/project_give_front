/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./style";

function StoreCard({ product, onClick }) {
  return (
    <div css={s.card} onClick={onClick}>
      <div css={s.imageWrapper}>
        <img src={product.productImageUrl} alt={product.productName} css={s.image} />
      </div>

      <div css={s.info}>
        <h3 css={s.name}>{product.productName}</h3>
        <p css={s.price}>
          {product.productPrice.toLocaleString()}원{" "}
          <span css={s.originalPrice}>
            {product.productOriginalPrice.toLocaleString()}원
          </span>
        </p>
      </div>
    </div>
  );
}

export default StoreCard;