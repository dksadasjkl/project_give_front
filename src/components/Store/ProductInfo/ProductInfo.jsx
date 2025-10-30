/** @jsxImportSource @emotion/react */
import ProductImage from "../ProductImage/ProductImage";
import * as s from "./style";

function ProductInfo({ product }) {
  const {
    productName,
    productDescription,
    productPrice,
    productOriginalPrice,
    productStock,
    productImageUrl,
    createDate,
  } = product;

  const discountRate =
    productOriginalPrice && productOriginalPrice > productPrice
      ? Math.round(
          ((productOriginalPrice - productPrice) / productOriginalPrice) * 100
        )
      : 0;

  return (
    <div css={s.container}>
      <div css={s.imageBox}>
        <ProductImage src={productImageUrl} alt={productName} />
      </div>

      <div css={s.infoBox}>
        <h2 css={s.title}>{productName}</h2>
        {discountRate > 0 && <p css={s.discount}>🔥 {discountRate}% 할인중!</p>}
        <div css={s.priceBox}>
          {productOriginalPrice && (
            <p css={s.originalPrice}>
              {productOriginalPrice.toLocaleString()}원
            </p>
          )}
          <p css={s.price}>{productPrice.toLocaleString()}원</p>
        </div>
        <p css={s.desc}>{productDescription}</p>
        <p css={s.stock}>
          재고:{" "}
          <span style={{ color: productStock > 0 ? "#0078ff" : "#999" }}>
            {productStock > 0 ? `${productStock}개 남음` : "품절"}
          </span>
        </p>
        <p css={s.date}>등록일: {new Date(createDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default ProductInfo;