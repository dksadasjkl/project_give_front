/** @jsxImportSource @emotion/react */
import * as s from "./DashboardCard.style";

const DashboardCard = ({ title, value }) => {
  return (
    <div css={s.card}>
      <div css={s.title}>{title}</div>
      <div css={s.value}>{value}</div>
    </div>
  );
};

export default DashboardCard;
