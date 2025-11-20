/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreProductCreatePage.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postAdminStoreProduct } from "../../../apis/storeAdminApi";
import { storeCategoryMap } from "../../../../constants/storeCategoryMap";

const AdminStoreProductCreatePage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    categoryId: "",
    sellerId: "",
    productName: "",
    productDescription: "",
    productPrice: "",
    productOriginalPrice: "",
    productStock: "",
    productImageUrl: "",
    productImageDetailUrl: "",
    active: true,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async () => {
    if (!window.confirm("상품을 등록하시겠습니까?")) return;

    try {
      await postAdminStoreProduct(form);
      alert("상품이 등록되었습니다.");
      navigate("/admin/store");
    } catch (err) {
      alert("등록 실패");
      console.log(err);
    }
  };

  return (
    <div css={s.container}>
      <h1 css={s.title}>상품 등록</h1>

      <div css={s.form}>

        {/* 카테고리 */}
        <label css={s.label}>카테고리</label>
        <select
          name="categoryId"
          css={s.select}
          value={form.categoryId}
          onChange={onChange}
        >
          <option value="">카테고리 선택</option>
          {Object.entries(storeCategoryMap).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>

        {/* 판매자 ID */}
        <label css={s.label}>판매자 ID</label>
        <input
          css={s.input}
          name="sellerId"
          value={form.sellerId}
          onChange={onChange}
          placeholder="판매자 ID 입력"
        />

        {/* 상품명 */}
        <label css={s.label}>상품명</label>
        <input
          css={s.input}
          name="productName"
          value={form.productName}
          onChange={onChange}
          placeholder="상품명 입력"
        />

        {/* 설명 */}
        <label css={s.label}>상품 설명</label>
        <textarea
          css={s.textarea}
          name="productDescription"
          value={form.productDescription}
          onChange={onChange}
          placeholder="상품 설명 입력"
        />

        {/* 가격 */}
        <label css={s.label}>판매 가격</label>
        <input
          type="number"
          css={s.input}
          name="productPrice"
          value={form.productPrice}
          onChange={onChange}
          placeholder="판매 가격 입력"
        />

        <label css={s.label}>정가(원래 가격)</label>
        <input
          type="number"
          css={s.input}
          name="productOriginalPrice"
          value={form.productOriginalPrice}
          onChange={onChange}
          placeholder="정가 입력"
        />

        {/* 재고 */}
        <label css={s.label}>재고</label>
        <input
          type="number"
          css={s.input}
          name="productStock"
          value={form.productStock}
          onChange={onChange}
          placeholder="재고 입력"
        />

        {/* 대표 이미지 URL + 미리보기 */}
        <label css={s.label}>대표 이미지 URL</label>
        <input
          css={s.input}
          name="productImageUrl"
          value={form.productImageUrl}
          onChange={onChange}
          placeholder="대표 이미지 URL 입력"
        />

        <div css={s.previewBox}>
          {form.productImageUrl ? (
            <img
              css={s.previewImage}
              src={form.productImageUrl}
              alt="대표 미리보기"
              onError={(e) => (e.target.src = "/no-image.png")}
            />
          ) : (
            <div css={s.previewPlaceholder}>대표 이미지 미리보기</div>
          )}
        </div>

        {/* 상세 이미지 URL + 미리보기 */}
        <label css={s.label}>상세 이미지 URL</label>
        <input
          css={s.input}
          name="productImageDetailUrl"
          value={form.productImageDetailUrl}
          onChange={onChange}
          placeholder="상세 이미지 URL 입력"
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
          name="active"
          value={form.active}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, active: e.target.value === "true" }))
          }
        >
          <option value="true">판매중</option>
          <option value="false">품절</option>
        </select>

        {/* 버튼 */}
        <div css={s.buttonGroup}>
          <button css={s.submitBtn} onClick={submitHandler}>
            등록하기
          </button>
          <button css={s.cancelBtn} onClick={() => navigate(-1)}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminStoreProductCreatePage;
