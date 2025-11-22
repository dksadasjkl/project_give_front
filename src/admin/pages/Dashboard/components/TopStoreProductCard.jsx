/** @jsxImportSource @emotion/react */
import * as s from "./TopStoreProductCard.style";
import { useNavigate } from "react-router-dom";

const TopStoreProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      css={s.card}
      onClick={() => navigate(`/admin/store/products/${product.productId}`)}
    >
      <img
        src={product.productImageUrl}
        alt={product.productName}
        css={s.thumb}
      />
      <div css={s.info}>
        <div css={s.name}>{product.productName}</div>
        <div css={s.price}>{product.productPrice?.toLocaleString()}원</div>
      </div>
    </div>
  );
};

export default TopStoreProductCard;
