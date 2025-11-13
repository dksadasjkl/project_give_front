/** @jsxImportSource @emotion/react */
import * as s from "./RecommendationDonation.style";

function RecommendationDonation({ donation }) {
  return (
    <div css={s.card}>
      <img src={donation?.donationProjectImageUrl} alt="" />
      <h4>{donation?.donationProjectTitle}</h4>
      <p>{donation?.donationProjectOrganization}</p>
    </div>
  );
}

export default RecommendationDonation;