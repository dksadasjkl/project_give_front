/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { getStoreProductDetailRequest } from "../../../apis/api/Store/store";
import { getStoreReviewsWithRatingsRequest } from "../../../apis/api/Store/storeComment";
import { getStoreQnaByProductRequest } from "../../../apis/api/Store/storeQna";
import ProductInfo from "../../../components/Store/ProductInfo/ProductInfo";
import ProductActionBar from "../../../components/Store/ProductActionBar/ProductActionBar";
import ProductReview from "../../../components/Store/ProductReview/ProductReview";
import ProductQna from "../../../components/Store/ProductQna/ProductQna";

function StoreDetail({ principal }) {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [qnaList, setQnaList] = useState([]);
  const [isDetailPage, setIsDetailPage] = useState(false); // 상세페이지 토글 상태

  // ✅ 상품 상세 조회
  useQuery(
    ["getStoreProductDetailRequest", productId],
    async () => await getStoreProductDetailRequest(productId),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (res) => setProduct(res.data),
      onError: (err) => console.error("상품 상세 조회 오류:", err),
    }
  );

  // ✅ 리뷰 + 평균 별점 조회
  useQuery(
    ["getStoreReviewsWithRatingsRequest", productId],
    async () => await getStoreReviewsWithRatingsRequest(productId),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => setReviews(res.data),
      onError: (err) => console.error("리뷰 조회 오류:", err),
    }
  );

  // ✅ QnA 조회
  useQuery(
    ["getStoreQnaByProductRequest", productId],
    async () => await getStoreQnaByProductRequest(productId),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => setQnaList(res.data),
      onError: (err) => console.error("QnA 조회 오류:", err),
    }
  );

  if (!product) return <div css={s.loading}>상품 정보를 불러오는 중...</div>;

  return (
    <div css={s.container}>
      {/* 상단 정보 */}
      <ProductInfo product={product} />

      {/* 수량 조절 + 장바구니 + 찜 + 결제 */}
      <ProductActionBar product={product} principal={principal} />

      {/* 상세 이미지 (토글식) */}
      <div css={s.detailSection}>
        <div css={() => s.detailImageBox(isDetailPage)}>
          <img src={product.productImageDetailUrl || product.productImageDetailUrl} alt="상세 이미지" />
        </div>
        <button
          css={s.detailToggleBtn}
          onClick={() => setIsDetailPage((prev) => !prev)}
        >
          {isDetailPage ? (
            <>
              상세페이지 닫기 <VscChevronUp />
            </>
          ) : (
            <>
              상세페이지 보기 <VscChevronDown />
            </>
          )}
        </button>
      </div>

      {/* 리뷰 */}
      <ProductReview productId={productId} principal={principal} />

      {/* QnA */}
      <ProductQna qnaList={qnaList} productId={productId} principal={principal} />
    </div>
  );
}

export default StoreDetail;
