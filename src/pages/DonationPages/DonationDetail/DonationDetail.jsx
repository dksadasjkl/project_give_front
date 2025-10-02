import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDonationProjectDatatilRequest } from '../../../apis/api/Donation/donationDatail';

function DonationDetail() {
  const { donationProjectId } = useParams();
  const [ donationDetails, setDonationDetails ] = useState([]);

  const getDonationProjectDatatilQuery = useQuery(
    ["getDonationProjectDatatilQuery", donationProjectId],
    async () => await getDonationProjectDatatilRequest(
      donationProjectId
    ),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        setDonationDetails(response.data)
      },
      onError: (error) => {
          console.log(error);
      }
    }
  )


  return (
      <div>
      {donationDetails.map((detail) => (
        <div key={detail.donationProjectDetailId}>
          <h2>{detail.donationProjectDetailSubtitle}</h2>
          <img src={detail.donationProjectDetailImageUrl} alt={detail.donationProjectDetailSubtitle} />
          <p>{detail.donationProjectDetailContent}</p>
        </div>
      ))}
    </div>
  )
}

export default DonationDetail