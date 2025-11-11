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

  // ✅ 리뷰 관련 상태
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const [distribution, setDistribution] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // ✅ QnA 관련 상태
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

  // ✅ 리뷰 조회 (평균 / 분포 / 총 리뷰 포함)
  useQuery(["getStoreReviewsWithRatingsRequest", productId],
    async () => await getStoreReviewsWithRatingsRequest(productId),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        const data = res.data;
        setReviews(data.reviews || []);
        setAvgRating(data.averageRating || 0);
        setDistribution(data.distribution || []);
        setTotalCount(data.totalCount || 0);
      },
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

  // ✅ 섹션 감지 (스크롤 탭)
  useEffect(() => {
    const sections = [
      { id: "detail", ref: detailRef },
      { id: "review", ref: reviewRef },
      { id: "qna", ref: qnaRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0.3
        );
        if (visible) setActiveTab(visible.target.id);
      },
      { root: null, rootMargin: "-90px 0px -60% 0px", threshold: [0.1, 0.3, 0.6] }
    );

    sections.forEach(({ ref }) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  if (!product) return <div css={s.loading}>상품 정보를 불러오는 중...</div>;

  const handleScrollTo = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div css={s.container}>
      {/* ✅ 상세정보 */}
      <div id="detail" ref={detailRef}>
        <ProductInfo
          product={{
            ...product,
            averageRating: avgRating,
            reviewCount: totalCount,
          }}
          principal={principal}
        />

        {/* ✅ 탭바 */}
        <div css={s.actionBar}>
          <button css={[s.tabButton, activeTab === "detail" && s.activeTab]} onClick={() => handleScrollTo(detailRef)}>상세정보</button>
          <button css={[s.tabButton, activeTab === "review" && s.activeTab]} onClick={() => handleScrollTo(reviewRef)}>리뷰 ({totalCount})</button>
          <button css={[s.tabButton, activeTab === "qna" && s.activeTab]} onClick={() => handleScrollTo(qnaRef)}>Q&A ({qnaList.length})</button>
        </div>

        {/* ✅ 상세 이미지 토글 */}
        <div css={s.detailSection}>
          <div css={() => s.detailImageBox(isDetailPage)}>
            <img src={product.productImageDetailUrl} alt="상세 이미지" />
          </div>
          <button css={s.detailToggleBtn} onClick={() => setIsDetailPage(!isDetailPage)}>
            {isDetailPage ? <>상세페이지 닫기 <VscChevronUp /></> : <>상세페이지 보기 <VscChevronDown /></>}
          </button>
        </div>
      </div>

      {/* ✅ 리뷰 */}
      <div id="review" ref={reviewRef}>
        <ProductReview
          productId={productId}
          product={product}
          principal={principal}
          reviews={reviews}
          averageRating={avgRating}
          distribution={distribution}
          totalCount={totalCount}
        />
      </div>

      {/* ✅ Q&A */}
      <div id="qna" ref={qnaRef}>
        <ProductQna qnaList={qnaList} productId={productId} principal={principal} />
      </div>
    </div>
  );
}

export default StoreDetail;
