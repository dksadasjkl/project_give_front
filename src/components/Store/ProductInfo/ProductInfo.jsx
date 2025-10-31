/** @jsxImportSource @emotion/react */
import ProductImage from "../ProductImage/ProductImage";
import * as s from "./style";
import ProductActionBar from "../ProductActionBar/ProductActionBar";

function ProductInfo({ product, principal }) {
  const {
    productName,
    productDescription,
    productPrice,
    productOriginalPrice,
    productStock,
    productImageUrl,
    averageRating = 0,
    reviewCount = 0,
  } = product;

  const discountRate =
    productOriginalPrice && productOriginalPrice > productPrice
      ? Math.round(
          ((productOriginalPrice - productPrice) / productOriginalPrice) * 100
        )
      : 0;

  // ✅ 리뷰 섹션으로 스크롤 이동
  const handleScrollToReviews = () => {
    const reviewSection = document.getElementById("reviewSection");
    if (reviewSection) {
      reviewSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div css={s.container}>
      {/* 왼쪽: 이미지 + 평점 */}
      <div css={s.imageBox}>
        <div css={s.imageWrapper}>
          <ProductImage src={productImageUrl} alt={productName} />
        </div>

        {/* ⭐ 평점 / 리뷰 보기 (이미지 아래) */}
        <div css={s.ratingRow} onClick={handleScrollToReviews}>
          <span css={s.star}>⭐</span>
          <span css={s.score}>{averageRating.toFixed(1)}</span>
          <span css={s.grayText}>
            (총 평점 {averageRating.toFixed(1)})
          </span>
          <span css={s.reviewLink}>리뷰 {reviewCount}건 보기 &gt;</span>
        </div>
      </div>

      {/* 오른쪽: 상품 정보 */}
      <div css={s.infoBox}>
        <h2 css={s.title}>{productName}</h2>

        {/* 할인 / 가격 */}
        <div css={s.priceRow}>
          {discountRate > 0 && (
            <span css={s.discount}>🔥{discountRate}% 할인중!</span>
          )}
          <div css={s.priceGroup}>
            {productOriginalPrice && (
              <span css={s.originalPrice}>
                {productOriginalPrice.toLocaleString()}원
              </span>
            )}
            <span css={s.price}>{productPrice.toLocaleString()}원</span>
          </div>
        </div>

        {/* 설명 */}
        <p css={s.desc}>{productDescription}</p>

        {/* 재고 */}
        <div css={s.metaRow}>
          <span>
            재고:{" "}
            <strong style={{ color: productStock > 0 ? "#0078ff" : "#999" }}>
              {productStock > 0 ? `${productStock}개 남음` : "품절"}
            </strong>
          </span>
        </div>

        {/* 장바구니 / 구매 */}
        <div css={s.purchaseSection}>
          <ProductActionBar product={product} principal={principal} />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
