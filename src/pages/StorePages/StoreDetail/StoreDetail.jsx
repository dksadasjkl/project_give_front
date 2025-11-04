/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { getStoreProductDetailRequest } from "../../../apis/api/Store/store";
import { getStoreReviewsWithRatingsRequest } from "../../../apis/api/Store/storeComment";
import { getStoreQnaByProductRequest } from "../../../apis/api/Store/storeQna";
import ProductInfo from "../../../components/Store/ProductInfo/ProductInfo";
import ProductReview from "../../../components/Store/ProductReview/ProductReview";
import ProductQna from "../../../components/Store/ProductQna/ProductQna";

function StoreDetail({ principal }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [qnaList, setQnaList] = useState([]);
  const [activeTab, setActiveTab] = useState("detail");
  const [isDetailPage, setIsDetailPage] = useState(false);

  const detailRef = useRef(null);
  const reviewRef = useRef(null);
  const qnaRef = useRef(null);

  // ✅ 상품 상세 조회
  useQuery(["getStoreProductDetailRequest", productId],
    async () => await getStoreProductDetailRequest(productId),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (res) => setProduct(res.data),
    }
  );

  // ✅ 리뷰 조회
  useQuery(["getStoreReviewsWithRatingsRequest", productId],
    async () => await getStoreReviewsWithRatingsRequest(productId),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => setReviews(res.data || []),
    }
  );

  // ✅ QnA 조회
  useQuery(["getStoreQnaByProductRequest", productId],
    async () => await getStoreQnaByProductRequest(productId),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => setQnaList(res.data),
    }
  );

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + (r.averageRating || 0), 0) / reviews.length
      : 0;

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    if (detailRef.current) observer.observe(detailRef.current);
    if (reviewRef.current) observer.observe(reviewRef.current);
    if (qnaRef.current) observer.observe(qnaRef.current);

    return () => observer.disconnect();
  }, []);

  if (!product) return <div css={s.loading}>상품 정보를 불러오는 중...</div>;

  return (
    <div css={s.container}>
      {/* ✅ 상세정보 */}
      <div id="detail" ref={detailRef}>
        <ProductInfo
          product={{ ...product, averageRating: avgRating, reviewCount: reviews.length }}
          principal={principal}
        />

        {/* ✅ 상단 고정 탭바를 이미지 위로 이동 */}
        <div css={s.detailSection}>
          <div css={s.actionBar}>
            <button
              css={[s.tabButton, activeTab === "detail" && s.activeTab]}
              onClick={() => handleScrollTo(detailRef)}
            >
              상세정보
            </button>
            <button
              css={[s.tabButton, activeTab === "review" && s.activeTab]}
              onClick={() => handleScrollTo(reviewRef)}
            >
              리뷰 ({reviews.length})
            </button>
            <button
              css={[s.tabButton, activeTab === "qna" && s.activeTab]}
              onClick={() => handleScrollTo(qnaRef)}
            >
              Q&A ({qnaList.length})
            </button>
          </div>

          <div css={() => s.detailImageBox(isDetailPage)}>
            <img src={product.productImageDetailUrl} alt="상세 이미지" />
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
      </div>

      {/* ✅ 리뷰 */}
      <div id="review" ref={reviewRef}>
        <ProductReview productId={productId} principal={principal} />
      </div>

      {/* ✅ QnA */}
      <div id="qna" ref={qnaRef}>
        <ProductQna qnaList={qnaList} productId={productId} principal={principal} />
      </div>
    </div>
  );
}

export default StoreDetail;
