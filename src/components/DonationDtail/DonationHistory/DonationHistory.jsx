import React from 'react'/** @jsxImportSource @emotion/react */
import * as s from "./style";
import LoadMoreButton from '../../Button/LoadMoreButton/LoadMoreButton';

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}.${month}.${day} ${hours}:${minutes}`;
}

function DonationHistory({ contributions, onLoadMore, hasMore }) {
    


    if (!contributions || contributions.length === 0) {
        return <div css={s.emptyMessage}>
                    아직 참여내역이 없습니다. <br />
                    첫 번째 기부자가 되어주세요!
                </div>;
    }
    return (
        <div css={s.historyLayout}>
            <div css={s.totalCount}>
                총 <span>{contributions.length}</span>건 기부되었습니다
            </div>
            {contributions.map((contribution) => (
                <div key={contribution.donationProjectContributionId} css={s.historyItem}>
                    <span css={s.contributionDate}>
                        {formatDate(contribution.donationProjectContributionDate)}
                    </span>
                    <div css={s.contributorInfo}>
                        {contribution.donationProjectContributorName}님{" "}
                        <span>{contribution.donationProjectContributionAmount.toLocaleString()}</span>원 참여
                    </div>
                </div>
            ))}
            <div css={s.button}>
                {hasMore && (
                    <LoadMoreButton onClick={onLoadMore} disabled={!hasMore} />
                )}
            </div>
        </div>
    )
}

export default DonationHistory