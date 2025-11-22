/** @jsxImportSource @emotion/react */
import * as s from "./DashboardCard.style";

const DashboardCard = ({ title, value, subText }) => {
  return (
    <div css={s.card}>
      <div css={s.title}>{title}</div>
      <div css={s.value}>{value}</div>
      {subText && <div css={s.sub}>{subText}</div>}
    </div>
  );
};

export default DashboardCard;
