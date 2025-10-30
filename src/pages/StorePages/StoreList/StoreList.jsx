import React, { useState } from 'react'
import StoreCard from '../../../components/Store/StoreCard/StoreCard';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { getStoreProductCountRequest, getStoreProductsPagingRequest } from '../../../apis/api/Store/store';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

function StoreList() {
  const navigate = useNavigate();

  const [storeList, setStoreList] = useState([]);
  const [page, setPage] = useState(1);
  const countPerPage = 20;
  const [totalCount, setTotalCount] = useState(0);

  // 상품 목록 (페이징)
  const storeProductsQuery = useQuery(
    ["storeProducts", page],
    async () =>
      await getStoreProductsPagingRequest({
        startIndex: (page - 1) * countPerPage,
        count: countPerPage,
      }),
    {
      keepPreviousData: true,
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
        const data = response.data || [];
        if (page === 1) setStoreList(data);
        else setStoreList((prev) => [...prev, ...data]);
      },
      onError: (err) => console.error("상품 목록 조회 오류:", err),
    }
  );

  // 상품 총 개수 조회
  useQuery(
    ["storeProductCount"],
    async () => await getStoreProductCountRequest(),
    {
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
        setTotalCount(response.data); // 단순 숫자 응답 (예: 4)
      },
    }
  );

  // 총 페이지 계산
  const totalPages = Math.ceil(totalCount / countPerPage);

  // 더보기 버튼
  const handleLoadMore = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return (
    <div css={s.container}>
      <h2 css={s.title}>🛍️ 전체 상품</h2>

      <div css={s.cardGrid}>
        {storeList.map((item) => (
          <StoreCard
            key={item.productId}
            product={item}
            onClick={() => navigate(`/store/${item.productId}`)}
          />
        ))}
      </div>

      {/* 더보기 버튼: 마지막 페이지에서만 사라짐 */}
      {page < totalPages && (
        <button css={s.loadMoreBtn} onClick={handleLoadMore}>
          더보기
        </button>
      )}
    </div>
  );
}

export default StoreList;