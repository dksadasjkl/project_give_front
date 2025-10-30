/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getStoreQnaByProductRequest } from "../../../apis/api/Store/storeQna";
import { getStoreProductDetailRequest } from "../../../apis/api/Store/store";
import { getStoreReviewsWithRatingsRequest } from "../../../apis/api/Store/storeComment";
import ProductInfo from "../../../components/Store/ProductInfo/ProductInfo";
import ProductActionBar from "../../../components/Store/ProductActionBar/ProductActionBar";
import ProductReview from "../../../components/Store/ProductReview/ProductReview";
import ProductQna from "../../../components/Store/ProductQna/ProductQna";

function StoreDetail({ principal }) {
  const { productId } = useParams();

  // 상태
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [qnaList, setQnaList] = useState([]);

  // 상품 상세 조회
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

  // 리뷰 + 평균 별점
  useQuery(
    ["getStoreReviewsWithRatingsRequest", productId],
    async () => await getStoreReviewsWithRatingsRequest(productId),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => setReviews(res.data),
      onError: (err) => console.error("리뷰 조회 오류:", err),
    }
  );

  // 상품 문의 조회
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
      <ProductInfo product={product} />
      <ProductActionBar product={product} principal={principal} />
      <ProductReview productId={productId} principal={principal} />
      <ProductQna qnaList={qnaList} productId={productId} principal={principal} />
    </div>
  );
}

export default StoreDetail;