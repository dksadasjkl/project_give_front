/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMyStorePointsRequest } from "../../../apis/api/Store/storePoint";

function StorePointPage({ principal }) {
  const [page, setPage] = useState(1);
  const size = 10;
  const pageBlock = 5;

  const { data, isLoading } = useQuery({
    queryKey: ["getMyStorePointsRequest", page],
    queryFn: () => getMyStorePointsRequest(page, size),
    keepPreviousData: true,
    enabled: !!principal,
  });

  if (!principal)
    return <p css={s.loginNotice}>로그인 후 이용 가능합니다.</p>;
  if (isLoading) return <p css={s.loading}>포인트 내역을 불러오는 중...</p>;

  const points = data?.data?.points || [];
  const totalCount = data?.data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / size) || 1;

  // ✅ 블록 계산
  const startPage = Math.floor((page - 1) / pageBlock) * pageBlock + 1;
  const endPage = Math.min(startPage + pageBlock - 1, totalPages);

  return (
    <div css={s.container}>
      <div css={s.title}>포인트 내역</div>

      {points.length === 0 ? (
        <p css={s.empty}>포인트 내역이 없습니다.</p>
      ) : (
        <>
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
                  <tr key={p.pointId}>
                    <td>
                      {p.createDate
                        ? new Date(p.createDate).toLocaleDateString()
                        : "-"}
                    </td>
                    <td>{p.pointReason || "주문 결제 적립"}</td>
                    <td css={p.pointAmount > 0 ? s.plus : s.minus}>
                      {`${p.pointAmount > 0 ? "+" : ""}${p.pointAmount.toLocaleString()} P`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ 페이지네이션 */}
          <div css={s.pagination}>
            {startPage > 1 && (
              <button onClick={() => setPage(startPage - 1)}>&lt; 이전</button>
            )}

            {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((num) => (
              <button
                key={num}
                css={[s.pageBtn, page === num && s.pageBtnActive]}
                onClick={() => setPage(num)}
              >
                {num}
              </button>
            ))}

            {endPage < totalPages && (
              <button onClick={() => setPage(endPage + 1)}>다음 &gt;</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default StorePointPage;
