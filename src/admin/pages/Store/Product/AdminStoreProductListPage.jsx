/** @jsxImportSource @emotion/react */
import * as s from "./AdminStoreProductListPage.style";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  getAdminStoreProductList,
  deleteAdminStoreProduct
} from "../../../apis/storeAdminApi";

import { storeCategoryMap } from "../../../../constants/storeCategoryMap";

const AdminStoreProductListPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const size = 10;

  const { data, isLoading, error, refetch } = useQuery(
    ["adminStoreProductList", page],
    () => getAdminStoreProductList(page, size),
    { refetchOnWindowFocus: false }
  );

  const items = data?.data?.items || [];
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / size);

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div css={s.wrap}>
      <h1 css={s.title}>공감가게 상품 목록</h1>

      <button
        css={s.createButton}
        onClick={() => navigate("/admin/store/products/create")}
      >
        + 새 상품 등록
      </button>

      <table css={s.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>이미지</th>
            <th>상품명</th>
            <th>카테고리</th>
            <th>가격</th>
            <th>재고</th>
            <th>상태</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.productId}>
              <td
                css={s.clickable}
                onClick={() =>
                  navigate(`/admin/store/products/${item.productId}`)
                }
              >
                {item.productId}
              </td>

              <td
                css={s.clickable}
                onClick={() =>
                  navigate(`/admin/store/products/${item.productId}`)
                }
              >
                <img src={item.productImageUrl} css={s.thumb} alt="" />
              </td>

              <td
                css={s.clickable}
                onClick={() =>
                  navigate(`/admin/store/products/${item.productId}`)
                }
              >
                {item.productName}
              </td>

              <td>{storeCategoryMap[item.categoryId] || "-"}</td>

              <td>{item.productPrice.toLocaleString()}원</td>

              <td>{item.productStock}</td>

              <td
                style={{
                  fontWeight: "600",
                  color: item.active ? "#2e7d32" : "#c62828",
                }}
              >
                {item.active ? "판매중" : "품절"}
              </td>

              <td>
                <button
                  css={s.deleteButton}
                  onClick={() => {
                    if (window.confirm("정말 삭제하시겠습니까?")) {
                      deleteAdminStoreProduct(item.productId).then(() => {
                        alert("삭제 완료");
                        refetch();
                      });
                    }
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div css={s.pagination}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          이전
        </button>

        <span>
          {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default AdminStoreProductListPage;
