/** @jsxImportSource @emotion/react */
import * as s from "./RecentDonationsTable.style";

const RecentDonationsTable = ({ recentDonations = [] }) => {
  return (
    <div css={s.box}>
      <h3 css={s.title}>최근 후원 내역</h3>

      <table css={s.table}>
        <thead>
          <tr>
            <th>사용자</th>
            <th>금액</th>
            <th>프로젝트</th>
            <th>날짜</th>
          </tr>
        </thead>

        <tbody>
          {recentDonations.length === 0 && (
            <tr>
              <td colSpan={4} css={s.empty}>
                최근 후원 데이터가 없습니다.
              </td>
            </tr>
          )}

          {recentDonations.map((d, i) => (
            <tr key={i}>
              <td>{d.username}</td>
              <td>{d.amount?.toLocaleString()}원</td>
              <td>{d.projectTitle}</td>
              <td>{d.date?.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentDonationsTable;
