/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from "@tanstack/react-query";
import { getMainRecommendRequest } from "../../apis/api/Main/main";

import MainBannerCarousel from "./components/MainBannerCarousel";
import MainSection from "./components/MainSection";
import RecommendationDonationList from "./components/RecommendationDonationList";
import RecommendationStoreList from "./components/RecommendationStoreList";

function MainPage() {

  const { data } = useQuery(
    ["mainRecommend"],
    getMainRecommendRequest
  );

  const donationList = data?.data?.donations || [];
  const productList = data?.data?.products || [];

  return (
    <div css={s.container}>

      {/* 배너는 첫 번째만 사용 */}
      <MainBannerCarousel
        donation={donationList[0]}
        product={productList[0]}
      />

      {/* 추천 기부 TOP3 */}
      <MainSection title="추천 기부 프로젝트">
        <RecommendationDonationList donations={donationList} />
      </MainSection>

      {/* 추천 쇼핑 TOP3 */}
      <MainSection title="인기 쇼핑 상품">
        <RecommendationStoreList products={productList} />
      </MainSection>  
      
    </div>
  );
}

export default MainPage;
