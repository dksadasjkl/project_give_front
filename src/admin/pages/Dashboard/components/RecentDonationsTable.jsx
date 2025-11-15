/** @jsxImportSource @emotion/react */
import * as s from "./RecentDonationsTable.style";

const dummy = [
  { user: "kim***", amount: 30000, project: "바다거북 보호", date: "2025-11-14" },
  { user: "lee***", amount: 10000, project: "아동 교육", date: "2025-11-13" },
  { user: "park***", amount: 5000, project: "유기동물", date: "2025-11-13" },
];

const RecentDonationsTable = () => {
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
          {dummy.map((d, i) => (
            <tr key={i}>
              <td>{d.user}</td>
              <td>{d.amount.toLocaleString()}원</td>
              <td>{d.project}</td>
              <td>{d.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentDonationsTable;
