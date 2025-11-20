/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreProductDetailPage.style";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import {
  getAdminStoreProductDetail,
  deleteAdminStoreProduct,
} from "../../../apis/storeAdminApi";

import { storeCategoryMap } from "../../../../constants/storeCategoryMap";
import { useState } from "react";

const AdminStoreProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [showDetailImg, setShowDetailImg] = useState(false);

  const { data, isLoading, error } = useQuery(
    ["adminStoreProductDetail", productId],
    () => getAdminStoreProductDetail(productId),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  const product = data?.data;
  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>상품 상세 정보</h1>

      <div css={s.card}>
        <img
          src={product.productImageUrl}
          alt="대표 이미지"
          css={s.thumb}
          onClick={() => window.open(product.productImageUrl, "_blank")}
        />

        <div css={s.infoBox}>
          <h2>{product.productName}</h2>

          <p><strong>상품 ID:</strong> {product.productId}</p>
          <p><strong>판매자 ID:</strong> {product.sellerId}</p>

          <p><strong>카테고리:</strong> {storeCategoryMap[product.categoryId] || "-"}</p>

          <p>
            <strong>가격:</strong> {product.productPrice.toLocaleString()}원{" "}
            <span css={s.originalPrice}>({product.productOriginalPrice.toLocaleString()}원)</span>
          </p>

          <p><strong>재고:</strong> {product.productStock}개</p>

          <p>
            <strong>상태:</strong>{" "}
            <span css={product.active ? s.active : s.inactive}>
              {product.active ? "판매중" : "품절"}
            </span>
          </p>

          <p><strong>등록일:</strong> {product.createDate?.replace("T", " ")}</p>
          <p><strong>수정일:</strong> {product.updateDate?.replace("T", " ")}</p>

          <p css={s.description}>
            <strong>설명</strong>
            <br />
            {product.productDescription}
          </p>
        </div>
      </div>

      {/* 상세 이미지 접기/펼치기 */}
      {product.productImageDetailUrl && (
        <div css={s.detailSection}>
          <button
            css={s.toggleBtn}
            onClick={() => setShowDetailImg((prev) => !prev)}
          >
            {showDetailImg ? "▲ 상세 이미지 접기" : "▼ 상세 이미지 보기"}
          </button>

          {showDetailImg && (
            <img
              css={s.detailImage}
              src={product.productImageDetailUrl}
              alt="상세 이미지"
              onClick={() => window.open(product.productImageDetailUrl, "_blank")}
            />
          )}
        </div>
      )}

      <div css={s.buttonGroup}>
        <button
          css={s.editBtn}
          onClick={() => navigate(`/admin/store/products/${productId}/edit`)}
        >
          수정하기
        </button>
      </div>
    </div>
  );
};

export default AdminStoreProductDetailPage;
