/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMyStorePointsRequest } from "../../../apis/api/Store/storePoint";

function StorePointPage({ principal }) {
  const [points, setPoints] = useState([]);

  useQuery(["getMyStorePointsRequest"], getMyStorePointsRequest, {
    refetchOnWindowFocus: false,
    enabled: !!principal,
    onSuccess: (res) => {
      console.log("💰 포인트 데이터:", res.data);
      setPoints(res.data || []);
    },
    onError: (err) => console.error("포인트 내역 조회 오류:", err),
  });

  if (!principal) return <p css={s.loginNotice}>로그인 후 이용 가능합니다.</p>;

  // 로딩 표시 (조회 완료 전)
  if (!points || points.length === 0)
    return <p css={s.loading}>포인트 내역을 불러오는 중...</p>;

  return (
    <div css={s.container}>
      <h2 css={s.title}>💰 내 포인트 내역</h2>

      {points.length === 0 ? (
        <p css={s.empty}>포인트 내역이 없습니다.</p>
      ) : (
        <div css={s.tableWrapper}>
          <table css={s.table}>
            <thead>
              <tr>
                <th>적립일</th>
                <th>적립/사용 내역</th>
                <th>포인트</th>
              </tr>
            </thead>
            <tbody>
              {points.map((p) => (
                <tr key={p.pointId || Math.random()}>
                  <td>
                    {p.createDate
                      ? new Date(p.createDate).toLocaleDateString()
                      : "-"}
                  </td>
                  <td>{p.description || "주문 결제 적립"}</td>
                  <td css={p.amount > 0 ? s.plus : s.minus}>
                    {typeof p.amount === "number"
                      ? `${p.amount > 0 ? "+" : ""}${p.amount.toLocaleString()} P`
                      : "0 P"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StorePointPage;
