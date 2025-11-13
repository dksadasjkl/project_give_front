/** @jsxImportSource @emotion/react */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useNavigate } from "react-router-dom";
import * as s from "./MainBannerCarousel.style";

function MainBannerCarousel({ donation, product }) {
  const navigate = useNavigate();

  const banners = [
    {
      type: "donation",
      image: donation?.donationProjectImageUrl,
      title: donation?.donationProjectTitle,
      sub: donation?.donationProjectOrganization,
      link: `/donation/${donation?.donationProjectId}`,
    },
    {
      type: "store",
      image: product?.productImageUrl,
      title: product?.productName,
      sub: `${product?.productPrice?.toLocaleString()}원`,
      link: `/store/${product?.productId}`
    }
  ];

  return (
    <div css={s.bannerWrapper}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2800 }}
        pagination={{ clickable: true }}
        loop={true}
        speed={700}
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            
            {/* 전체 클릭 가능 */}
            <div
              css={s.slide}
              onClick={() => navigate(item.link)}
            >
              <img src={item.image} alt={item.title} css={s.image} />

              <div css={s.overlay}>
                <h2>{item.title}</h2>
                <p>{item.sub}</p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainBannerCarousel;
