/** @jsxImportSource @emotion/react */
import * as s from "./RecommendationStore.style";

function RecommendationStore({ product }) {
  return (
    <div css={s.card}>
      <img src={product?.productImageUrl} alt="" />
      <h4>{product?.productName}</h4>
      <p>{product?.productPrice?.toLocaleString()}원</p>
    </div>
  );
}

export default RecommendationStore;
