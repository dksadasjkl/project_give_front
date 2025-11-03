/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './style';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import StoreCard from '../../../components/Store/StoreCard/StoreCard';
import SortDropdown from '../../../components/Donation/SortDropdown/SortDropdown';
import { storeSortOptions  } from '../../../constants/sortOptions';
import {
  getStoreCategoriesRequest,
  getStoreProductCountRequest,
  getStoreProductsPagingRequest,
} from '../../../apis/api/Store/store';
import { storeCategoryImages } from '../../../constants/storeCategoryImages'; // ✅ 이미지 매핑 import

function StoreList() {
  const navigate = useNavigate();

  const [storeList, setStoreList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchTypeId, setSearchTypeId] = useState(1);
  const [page, setPage] = useState(1);
  const countPerPage = 20;
  const [totalCount, setTotalCount] = useState(0);

  // ✅ 카테고리 조회
  useQuery(['getStoreCategoryQuery'], getStoreCategoriesRequest, {
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: (response) => setCategories(response),
    onError: (err) => console.error('카테고리 조회 오류:', err),
  });

  // ✅ 상품 목록 조회 (페이징 + 필터 + 정렬)
  useQuery(
    ['storeProducts', selectedCategory, page, searchTypeId],
    async () =>
      await getStoreProductsPagingRequest({
        categoryId: selectedCategory,
        startIndex: (page - 1) * countPerPage,
        count: countPerPage,
        searchTypeId,
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
      onError: (err) => console.error('상품 목록 조회 오류:', err),
    }
  );

  // ✅ 상품 총 개수 조회
  useQuery(
    ['storeProductCount', selectedCategory],
    async () => await getStoreProductCountRequest({ categoryId: selectedCategory }),
    {
      refetchOnWindowFocus: false,
      onSuccess: (response) => setTotalCount(response.data),
      onError: (err) => console.error('상품 개수 조회 오류:', err),
    }
  );

  const totalPages = Math.ceil(totalCount / countPerPage);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setPage(1);
  };

  const handleSortChange = (id) => {
    setSearchTypeId(id);
    setPage(1);
  };

  const handleLoadMore = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return (
    <div css={s.layout}>
      {/* ✅ 카테고리 바 */}
      <div css={s.categoryBar}>
        <div
          css={s.category(selectedCategory, 0)}
          onClick={() => handleCategoryClick(0)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
            alt="전체"
            css={s.categoryImage}
          />
          <span>전체</span>
        </div>

        {categories.map((category) => (
          <div
            key={category.donationCategoryId}
            css={s.category(selectedCategory, category.donationCategoryId)}
            onClick={() => handleCategoryClick(category.donationCategoryId)}
          >
            <img
              src={storeCategoryImages[category.donationCategoryId]}
              alt={category.donationCategoryNameKor}
              css={s.categoryImage}
            />
            <span>{category.donationCategoryNameKor}</span>
          </div>
        ))}
      </div>

      {/* ✅ 헤더 바 */}
      <div css={s.headerBar}>
        <div> </div>
        <SortDropdown
          options={storeSortOptions.map((option) => ({
            value: option.id,
            label: option.label,
          }))}
          value={searchTypeId}
          onChange={handleSortChange}
        />
      </div>

      {/* ✅ 상품 카드 리스트 */}
      <div css={s.cardGrid}>
        {storeList.map((item) => (
          <StoreCard
            key={item.productId}
            product={item}
            onClick={() => navigate(`/store/${item.productId}`)}
          />
        ))}
      </div>

      {/* ✅ 더보기 버튼 */}
      <div css={s.Buttonlayout}>
        {page < totalPages && (
          <button css={s.plusButton} onClick={handleLoadMore}>
            더보기
          </button>
        )}
      </div>
    </div>
  );
}

export default StoreList;
