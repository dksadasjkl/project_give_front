/** @jsxImportSource @emotion/react */
import { useMutation } from "@tanstack/react-query";
import { portOnePayRequest } from "../../../apis/api/Order/portOne";
import * as s from "./style";
import { postOrderRequest } from "../../../apis/api/Order/order";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";
import { useState } from "react";
import DonationModal from "../../Modal/DonationModal";

function FundingTabs({ principal, donationProjectId }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationAmount, handleDonationAmountChange, message] = useInput("donationAmount");

  // PortOne 결제 요청
  const portOneMutation = useMutation(portOnePayRequest, {
    onSuccess: async (res) => {
      if (res.code) {
        console.error("결제가 취소되었습니다.");
        return;
      }

      // 결제 성공 시 기부 등록
      const dto = {
        donationProjectId,
        userId: principal.userId,
        donationProjectContributionAmount: Number(donationAmount),
      };
      try {
        await postOrderRequest(dto);
        alert("🎉 기부가 정상적으로 완료되었습니다. 감사합니다!");
        navigate(`/funding/${donationProjectId}`);
      } catch (err) {
        console.error("기부 등록 실패:", err);
        alert("❌ 기부 등록에 실패했습니다. 다시 시도해주세요.");
      }
    },
    onError: (err) => console.error("결제 요청 오류:", err),
  });

  // 모달 열기
  const handleDonateClick = () => setIsModalOpen(true);

  // 결제 시작: 모달 닫고 PortOne 호출
  const handleConfirm = () => {
    setIsModalOpen(false); 

     portOneMutation.mutate({
      orderName: `기부_${donationProjectId}`,
      totalAmount: Number(donationAmount),
    }); 
    
  };

  const handleCancel = () => setIsModalOpen(false);

  return (
    <div>
      <div css={s.donationTabs}>
        <div css={s.tabIntro}>모금소개</div>
        <div css={s.tabDonate} onClick={handleDonateClick}>펀딩하기</div>
      </div>  
      {isModalOpen && (
        <DonationModal
          donationAmount={donationAmount}
          onChange={handleDonationAmountChange}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          message={message}
        />
      )}
    </div>
  );
}

export default FundingTabs;