/** @jsxImportSource @emotion/react */
import * as s from "./RecommendationStoreList.style";
import { useNavigate } from "react-router-dom";

const DEFAULT_IMG = "/assets/no-image.png";

function RecommendationStoreList({ products }) {
  const navigate = useNavigate();

  return (
    <>
      {products.map((item) => (
        <div
          key={item.productId}
          css={s.card}
          onClick={() => navigate(`/store/${item.productId}`)}
        >
          <div css={s.imageBox}>
            <img src={item.productImageUrl || DEFAULT_IMG} alt={item.productName} />
          </div>

          <div css={s.infoBox}>
            <h4>{item.productName}</h4>
            <p>{item.productPrice.toLocaleString()}원</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default RecommendationStoreList;
