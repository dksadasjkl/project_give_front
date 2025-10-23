  import React, { useState } from 'react'
  /** @jsxImportSource @emotion/react */
  import * as s from "./style";
  import { useQuery } from '@tanstack/react-query';
  import { getDonationProjectCountRequest, getDonationProjectsPagingRequest, getDonationProjectsRequest } from '../../../apis/api/Donation/donation';
  import DonationCard from '../../../components/Donation/DonationCard/DonationCard';
  import SortDropdown from '../../../components/Donation/SortDropdown/SortDropdown';
  import { TbInnerShadowBottomRight } from "react-icons/tb";
  import { useNavigate } from 'react-router-dom';
import { categoryIcons } from '../../../constants/categories';
import { sortOptions } from '../../../constants/sortOptions';
import { getDonationCategoriesRequest } from '../../../apis/api/Categorie/categorie';



  function DonationList() {
    const navigate = useNavigate();
    const [ donationList, setDonationList ] = useState([]);
    const [categories, setCategories] = useState([]);
    const [ selectedCategory, setSelectedCategory] = useState(0);
    const [ searchTypeId, setSearchTypeId ] = useState(1); // 검색/정렬 기준 기본값 1. 최신순
    const [ page, setPage ] = useState(1);
    const countPerPage = 20; 
    const [totalCount, setTotalCount] = useState(0); // 전체 데이터 수 (예: 21개)
    const [totalLoadCount, setTotalLoadCount] = useState(0); // 총 페이지 수 (예: 3페이지)
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    
    // 카테고리 조회
    const getDonationCategoryRequestQuery = useQuery(
      ["getDonationCategoryRequestQuery"], 
      getDonationCategoriesRequest,
      {   
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
          setCategories(response); 
        }
      }
    );

    // 기부 프로젝트 조회 (페이징)
    const donationProjectsQuery = useQuery(
      ["donationProjects", selectedCategory, page, searchTypeId],
      async () => await getDonationProjectsPagingRequest({
          donationCategoryId: selectedCategory,
          startIndex: (page - 1) * countPerPage, // ex) 1페이지 0~19, 2페이지 20~39
          count: countPerPage,  // 20개씩 요청
          searchTypeId: searchTypeId // 1: 최신순, 2: 모금액 많은순, 3: 모금액 적은순,  4: 모금률 높은순, 5: 종료임박순
        }),
      {
        keepPreviousData: true, // 이전 데이터 유지 → 로딩 시 깜빡임 방지
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
        if (page === 1) {
          setDonationList(response.data); // 첫 페이지면 덮어쓰기
        } else {
          setDonationList(prev => [...prev, ...response.data]); // 이후 페이지면 이어붙이기
        }
      },
        onError: (error) => {
            console.log(error);
        }
      }
    );

    const getDonationProjectCountRequestQuery = useQuery(
    ["getDonationProjectCountRequestQuery", donationProjectsQuery.data], // 쿼리 key
    async () => await getDonationProjectCountRequest({
        donationCategoryId: selectedCategory, // 선택된 카테고리
        count: countPerPage 
    }),
    {
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
        setTotalCount(response.data.totalCount); // totalCount 상태 업데이트
        setTotalLoadCount(response.data.totalLoadCount) // 최대 페이지
      },
      onError: (error) => {
        console.error(error);
      }
    }
  );

    const handleCategoryClick = (categoryId) => {
      setSelectedCategory(categoryId);
      setPage(1); // 페이지 초기화 (첫번째 페이지로 가기)
  };

    const handleLoadMore = () => {
      setPage(prev => prev + 1); // 페이지 증가 → useQuery가 자동으로 다음 데이터 요청 = 1페이지 0~19, 2페이지 20~39
    };

    const handleSortChange = (id) => {
      setSearchTypeId(id);
      setPage(1); // 페이지 초기화 (첫번째 페이지로 가기)
    };

    
    return (
      <div css={s.layout}>

        {/* 카테고리 */}
        <div css={s.categoryBar}>
          <div css={s.category(selectedCategory, 0)}
            key={0}
            onClick={() => handleCategoryClick(0)}
          >
            <span>
              <TbInnerShadowBottomRight 
                style={{
                    fontSize: "20px" ,
                    margin: "0px 4px 4px 0px",
                    verticalAlign: "middle"
                  }} />
            </span>
            전체
          </div>
            {categories &&categories.map(category => {
            const IconComponent = categoryIcons[category.donationCategoryNameKor]
            return (
              <div
                key={category.donationCategoryId}
                onClick={() => handleCategoryClick(category.donationCategoryId)}
                css={s.category(selectedCategory, category.donationCategoryId)}
              > 
                <span>
                  <IconComponent  
                    style={{
                    fontSize: "20px" ,
                    margin: "0px 4px 4px 0px",
                    verticalAlign: "middle"
                  }} />
                </span>
                {category.donationCategoryNameKor}
              </div>
            );
            })}
        </div>
        
        {/* 헤더 */}
        <div css={s.headerBar}>
            <div>
              모금함  
              <span> {totalCount}개</span>
            </div>
            <div>
                <SortDropdown 
                    options={sortOptions.map(option => ({
                      value: option.id,
                      label: option.label
                    }))}
                    value={searchTypeId} 
                    onChange={handleSortChange}
                  />
            </div>
        </div>

        {/* 기부프로젝트 리스트 */}
        <div css={s.donationCard}>
          {donationList.map((donation) => {
            const percent = Math.floor(
              (donation.donationProjectCurrentAmount / donation.donationProjectTargetAmount) * 100
            );
            return (
              <DonationCard 
                key={donation.donationProjectId}
                title={donation.donationProjectTitle}
                organization={donation.donationProjectOrganization}
                contentImg={donation.donationProjectImageUrl}
                amount={donation.donationProjectCurrentAmount}
                percent={percent} // 계산된 퍼센트 전달
                onClick={() => navigate(`/donation/${donation.donationProjectId}`)} // 해당 상세 페이지 이동
              />
            );
          })}
        </div>
        
        {/* 기부프로젝트 리스트 +20개씩 */}
        <div css={s.Buttonlayout}>
        { page < totalLoadCount &&
          <button css={s.plusButton} onClick={handleLoadMore}>더보기</button>
        }
        </div>

      </div>
    )
  }
  export default DonationList