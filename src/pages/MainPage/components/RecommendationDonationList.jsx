/** @jsxImportSource @emotion/react */
import * as s from "./RecommendationDonationList.style";
import { useNavigate } from "react-router-dom";

const DEFAULT_IMG = "/assets/no-image.png";

function RecommendationDonationList({ donations }) {
  const navigate = useNavigate();

  return (
    <>
      {donations.map((item) => (
        <div
          key={item.donationProjectId}
          css={s.card}
          onClick={() => navigate(`/donation/${item.donationProjectId}`)}
        >
          <div css={s.imageBox}>
            <img
              src={item.donationProjectImageUrl || DEFAULT_IMG}
              alt={item.donationProjectTitle}
            />
          </div>

          <div css={s.infoBox}>
            <h4>{item.donationProjectTitle}</h4>
            <p>{item.donationProjectOrganization}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default RecommendationDonationList;
