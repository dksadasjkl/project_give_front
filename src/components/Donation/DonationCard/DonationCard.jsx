// DonationCard.jsx
/** @jsxImportSource @emotion/react */
import * as s from './style';

function DonationCard({ title, organization, percent, amount,contentImg  }) {
    const imgRegex = /<img[^>]+>/;
    const img = imgRegex.exec(contentImg);


  return (
    <div>
        <div>
           {contentImg}
        </div>
        <div>
            <div>{title}</div>
            <div>{organization}</div>
            <div>{percent}%</div>
            <div>{amount}</div>
        </div>
    </div>
  );
};

export default DonationCard;