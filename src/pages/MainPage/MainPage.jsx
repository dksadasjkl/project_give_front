/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from "@tanstack/react-query";
import { getMainTopRequest } from "../../apis/api/Main/main";

import MainBannerCarousel from "./components/MainBannerCarousel";
import MainSection from "./components/MainSection";
import RecommendationDonation from "./components/RecommendationDonation";
import RecommendationStore from "./components/RecommendationStore";

function MainPage() {
  const { data: topData } = useQuery(["mainTop"], getMainTopRequest);

  const donation = topData?.data?.bannerDonation;
  const product = topData?.data?.bannerProduct;

  return (
    <div css={s.container}>
      
      <MainBannerCarousel donation={donation} product={product} />

      <MainSection title="추천 기부 프로젝트">
        <RecommendationDonation donation={donation} />
      </MainSection>

      <MainSection title="인기 쇼핑 상품">
        <RecommendationStore product={product} />
      </MainSection>

    </div>
  );
}

export default MainPage;
