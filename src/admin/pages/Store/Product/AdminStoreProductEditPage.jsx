/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreProductEditPage.style";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import {
  getAdminStoreProductDetail,
  putAdminStoreProduct,
} from "../../../apis/storeAdminApi";

import { storeCategoryMap } from "../../../../constants/storeCategoryMap";
import { useState, useEffect } from "react";

const AdminStoreProductEditPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  /** 기존 상품 조회 */
  const { data, isLoading } = useQuery(
    ["adminStoreProductDetail", productId],
    () => getAdminStoreProductDetail(productId),
    { refetchOnWindowFocus: false }
  );

  const product = data?.data;

  /** 입력 폼 상태 */
  const [form, setForm] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productOriginalPrice: "",
    productStock: "",
    categoryId: "",
    productImageUrl: "",
    productImageDetailUrl: "",
    active: true,
  });

  /** 초기값 세팅 */
  useEffect(() => {
    if (product) {
      setForm({
        productName: product.productName,
        productDescription: product.productDescription,
        productPrice: product.productPrice,
        productOriginalPrice: product.productOriginalPrice,
        productStock: product.productStock,
        categoryId: product.categoryId,
        productImageUrl: product.productImageUrl,
        productImageDetailUrl: product.productImageDetailUrl,
        active: product.active,
      });
    }
  }, [product]);

  /** 수정 요청 */
  const updateMutation = useMutation(
    (newData) => putAdminStoreProduct(productId, newData),
    {
      onSuccess: () => {
        alert("상품 정보가 수정되었습니다.");
        navigate(`/admin/store/products/${productId}`);
      },
      onError: () => alert("수정 실패"),
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation.mutate(form);
  };

  if (isLoading) return <p>로딩중...</p>;
  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  return (
    <div css={s.container}>
      <h1 css={s.title}>상품 수정</h1>

      <form css={s.form} onSubmit={handleSubmit}>
        <label css={s.label}>상품명</label>
        <input
          css={s.input}
          value={form.productName}
          onChange={(e) => setForm({ ...form, productName: e.target.value })}
        />

        <label css={s.label}>상품 설명</label>
        <textarea
          css={s.textarea}
          value={form.productDescription}
          onChange={(e) =>
            setForm({ ...form, productDescription: e.target.value })
          }
        />

        <label css={s.label}>카테고리</label>
        <select
          css={s.select}
          value={form.categoryId}
          onChange={(e) =>
            setForm({ ...form, categoryId: Number(e.target.value) })
          }
        >
          {Object.entries(storeCategoryMap).map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>

        <label css={s.label}>가격</label>
        <input
          type="number"
          css={s.input}
          value={form.productPrice}
          onChange={(e) =>
            setForm({ ...form, productPrice: Number(e.target.value) })
          }
        />

        <label css={s.label}>원가</label>
        <input
          type="number"
          css={s.input}
          value={form.productOriginalPrice}
          onChange={(e) =>
            setForm({ ...form, productOriginalPrice: Number(e.target.value) })
          }
        />

        <label css={s.label}>재고</label>
        <input
          type="number"
          css={s.input}
          value={form.productStock}
          onChange={(e) =>
            setForm({ ...form, productStock: Number(e.target.value) })
          }
        />

        {/* 대표 이미지 + 미리보기 */}
        <label css={s.label}>대표 이미지 URL</label>
        <input
          css={s.input}
          value={form.productImageUrl}
          onChange={(e) =>
            setForm({ ...form, productImageUrl: e.target.value })
          }
        />

        <div css={s.previewBox}>
          {form.productImageUrl ? (
            <img
              css={s.previewImage}
              src={form.productImageUrl}
              alt="대표 이미지"
              onError={(e) => (e.target.src = "/no-image.png")}
            />
          ) : (
            <div css={s.previewPlaceholder}>대표 이미지 미리보기</div>
          )}
        </div>

        {/* 상세 이미지 + 미리보기 */}
        <label css={s.label}>상세 이미지 URL</label>
        <input
          css={s.input}
          value={form.productImageDetailUrl}
          onChange={(e) =>
            setForm({ ...form, productImageDetailUrl: e.target.value })
          }
        />

        <div css={s.previewBoxLarge}>
          {form.productImageDetailUrl ? (
            <img
              css={s.previewLargeImage}
              src={form.productImageDetailUrl}
              alt="상세 미리보기"
              onError={(e) => (e.target.src = "/no-image.png")}
            />
          ) : (
            <div css={s.previewPlaceholder}>상세 이미지 미리보기</div>
          )}
        </div>

        {/* 상태 */}
        <label css={s.label}>상태</label>
        <select
          css={s.select}
          value={form.active ? "true" : "false"}
          onChange={(e) =>
            setForm({ ...form, active: e.target.value === "true" })
          }
        >
          <option value="true">판매중</option>
          <option value="false">품절</option>
        </select>

        <div css={s.buttonGroup}>
          <button type="submit" css={s.saveBtn}>
            저장하기
          </button>

          <button
            type="button"
            css={s.cancelBtn}
            onClick={() => navigate(-1)}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminStoreProductEditPage;
