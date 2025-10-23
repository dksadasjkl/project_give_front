/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './style';
import { useQuery } from '@tanstack/react-query';
import FundingCard from '../../../components/Funding/FundingCard/FundingCard';
import { useNavigate } from 'react-router-dom';
import { sortOptions } from '../../../constants/sortOptions';
import { getFundingCategoriesRequest } from '../../../apis/api/Categorie/categorie';
import { getFundingProjectCountRequest, getFundingProjectsPagingRequest } from '../../../apis/api/Funding/funding';
import SortDropdown from '../../../components/Donation/SortDropdown/SortDropdown';

function FundingList() {
  const navigate = useNavigate();

  const [fundingList, setFundingList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchTypeId, setSearchTypeId] = useState(1);
  const [page, setPage] = useState(1);
  const countPerPage = 20;
  const [totalCount, setTotalCount] = useState(0);
  const [totalLoadCount, setTotalLoadCount] = useState(0);

  // 카테고리 조회
  const getFundingCategoryQuery = useQuery(
    ['getFundingCategoryQuery'],
    getFundingCategoriesRequest,
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => setCategories(response),
    }
  );

  // 펀딩 프로젝트 조회 (페이징)
  const fundingProjectsQuery = useQuery(
    ['fundingProjects', selectedCategory, page, searchTypeId],
    async () =>
      await getFundingProjectsPagingRequest({
        donationCategoryId: selectedCategory,
        startIndex: (page - 1) * countPerPage,
        count: countPerPage,
        searchTypeId: searchTypeId,
      }),
    {
      keepPreviousData: true,
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
        if (page === 1) {
          setFundingList(response.data);
        } else {
          setFundingList((prev) => [...prev, ...response.data]);
        }
      },
      onError: (error) => console.log(error),
    }
  );

  // 펀딩 프로젝트 개수 조회
  const getFundingProjectCountQuery = useQuery(
    ['getFundingProjectCountQuery', fundingProjectsQuery.data],
    async () =>
      await getFundingProjectCountRequest({
        donationCategoryId: selectedCategory,
        count: countPerPage,
      }),
    {
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
        setTotalCount(response.data.totalCount);
        setTotalLoadCount(response.data.totalLoadCount);
      },
      onError: (error) => console.error(error),
    }
  );

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setPage(1);
  };

  const handleSortChange = (id) => {
    setSearchTypeId(id);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div css={s.layout}>
      {/* 카테고리 */}
      <div css={s.categoryBar}>
        <div
          css={s.category(selectedCategory, 0)}
          onClick={() => handleCategoryClick(0)}
        >
          전체
        </div>
        {categories &&
          categories.map((category) => (
            <div
              key={category.donationCategoryId}
              css={s.category(selectedCategory, category.donationCategoryId)}
              onClick={() => handleCategoryClick(category.donationCategoryId)}
            >
              {category.donationCategoryNameKor}
            </div>
          ))}
      </div>

      {/* 헤더 */}
      <div css={s.headerBar}>
        <div> </div>
        <SortDropdown
          options={sortOptions.map((option) => ({
            value: option.id,
            label: option.label,
          }))}
          value={searchTypeId}
          onChange={handleSortChange}
        />
      </div>

      {/* 카드 리스트 */}
      <div css={s.fundingCardGrid}>
            {fundingList.map((funding) => {
            const percent = Math.floor(
              (funding.donationProjectCurrentAmount / funding.donationProjectTargetAmount) * 100
            );

            // 남은 일수 계산
            const endDate = new Date(funding.donationProjectEndDate);
            const today = new Date();
            const daysLeft = Math.max(Math.ceil((endDate - today) / (1000 * 60 * 60 * 24)), 0);

            return (
              <FundingCard
                key={funding.donationProjectId}
                title={funding.donationProjectTitle}
                organization={funding.donationProjectOrganization}
                contentImg={funding.donationProjectImageUrl}
                percent={percent}
                daysLeft={daysLeft}
                amount={funding.donationProjectCurrentAmount}
                onClick={() => navigate(`/funding/${funding.donationProjectId}`)}
              />
            );
          })}
      </div>

      {/* 더보기 */}
      <div css={s.Buttonlayout}>
        {page < totalLoadCount && (
          <button css={s.plusButton} onClick={handleLoadMore}>
            더보기
          </button>
        )}
      </div>
    </div>
  );
}

export default FundingList;