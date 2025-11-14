/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function DonationNearbyMap() {
  const navigate = useNavigate();

  const [map, setMap] = useState(null);
  const [myPosition, setMyPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const defaultCenter = { lat: 37.566826, lng: 126.9786567 };

  const isKakaoLoaded =
    typeof window !== "undefined" &&
    window.kakao &&
    window.kakao.maps;

  // 🔥 1. 위치 가져오기 (에러 메시지 출력 제거)
  useEffect(() => {
    if (!navigator.geolocation) {
      setMyPosition(defaultCenter);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setMyPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => {
        setMyPosition(defaultCenter);
      }
    );
  }, []);

  // 🔥 2. 카카오 검색 기반
  useEffect(() => {
    if (!isKakaoLoaded || !map) return;

    const kakao = window.kakao;
    const ps = new kakao.maps.services.Places();

    // 카테고리 자동 키워드 (수정 완료)
    const categoryKeywords = {
      ALL: "복지",
      1: "아동센터",
      2: "환경센터",
      3: "노인복지관",
      4: "장애인복지관",
    };

    const categoryWord = categoryKeywords[selectedCategory] || "";
    const finalKeyword = `${searchInputValue} ${categoryWord}`.trim();

    if (!keyword) return;

    setIsLoading(true);
    setErrorMsg("");

    ps.keywordSearch(finalKeyword, (data, status) => {
      setIsLoading(false);

      if (status !== kakao.maps.services.Status.OK) {
        setMarkers([]);
        return;
      }

      const bounds = new kakao.maps.LatLngBounds();

      const nextMarkers = data.map((place) => {
        const lat = Number(place.y);
        const lng = Number(place.x);

        bounds.extend(new kakao.maps.LatLng(lat, lng));

        return {
          id: place.id,
          content: place.place_name,
          position: { lat, lng },
          address: place.road_address_name || place.address_name,
          category: place.category_group_name,
          url: place.place_url,
        };
      });

      setMarkers(nextMarkers);
      map.setBounds(bounds);
    });
  }, [keyword, selectedCategory, isKakaoLoaded, map]);

  if (!isKakaoLoaded) {
    return <div css={s.loading}>카카오 지도를 불러오는 중입니다...</div>;
  }

  const kakao = window.kakao;

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      setKeyword(searchInputValue.trim());
    }
  };

  const handleSearchClick = () => {
    setKeyword(searchInputValue.trim());
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleListItemClick = (marker) => {
    setSelectedMarker(marker);
    if (map) {
      map.panTo(new kakao.maps.LatLng(marker.position.lat, marker.position.lng));
    }
  };

  const categories = [
    { value: "ALL", label: "전체" },
    { value: "1", label: "아동/청소년" },
    { value: "2", label: "환경" },
    { value: "3", label: "노인" },
    { value: "4", label: "장애인" },
  ];

  return (
    <div css={s.layout}>
      <div css={s.layoutContainer}>
        {/* 검색 영역 */}
        <div css={s.container}>
          <div css={s.selectContainer}>
            <div css={s.selectLabel}>카테고리</div>
            <select css={s.select} value={selectedCategory} onChange={handleCategoryChange}>
              {categories.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

            <div css={s.inputGroup}>
                <div css={s.selectContainer}>
                    <div css={s.selectLabel}>검색어</div>
                    <input
                    css={s.input}
                    type="text"
                    value={searchInputValue}
                    onChange={(e) => setSearchInputValue(e.target.value)}
                    onKeyUp={handleKeyUp}
                    placeholder="지역명 또는 키워드 입력"
                    />
                </div>

                <button css={s.searchButton} onClick={handleSearchClick}>
                    <FaSearch />
                </button>
            </div>
        </div>

        {/* 지도 */}
        <Map
          center={myPosition || defaultCenter}
          style={{ width: "100%", height: "700px" }}
          level={4}
          onCreate={setMap}
        >
          {myPosition && (
            <MapMarker position={myPosition} clickable={false}>
            </MapMarker>
          )}

          {markers.map((marker) => (
            <MapMarker
              key={marker.id}
              position={marker.position}
              onMouseOver={() => setSelectedMarker(marker)}
              onClick={() => window.open(marker.url, "_blank")}
            >
              {selectedMarker && selectedMarker.id === marker.id && (
                <div style={{ color: "#000", cursor: "pointer", width: "220px" }}>
                  <div style={{ fontWeight: 700, marginBottom: "4px" }}>{marker.content}</div>
                  <div style={{ fontSize: "12px", color: "#555" }}>{marker.address}</div>
                </div>
              )}
            </MapMarker>
          ))}
        </Map>

        {isLoading && <div css={s.loading}>검색 중...</div>}
      </div>

      {/* 우측 리스트 */}
      <div css={s.listContainer}>
        {markers.length === 0 && !isLoading && (
          <div css={s.empty}>검색 결과가 없습니다.</div>
        )}

        {markers.map((marker) => (
          <div
            key={marker.id}
            css={s.listItem}
            onMouseOver={() => setSelectedMarker(marker)}
            onClick={() => window.open(marker.url, "_blank")}
          >
            <div css={s.listTitle}>{marker.content}</div>
            <div css={s.listAddress}>{marker.address}</div>
            <div css={s.listMeta}>
              {marker.category && <span css={s.listCategory}>{marker.category}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonationNearbyMap;
