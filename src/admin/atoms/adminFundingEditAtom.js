import { atom } from "recoil";

export const adminFundingEditState = atom({
  key: "adminFundingEditState",
  default: {
    donationProjectId: 0,
    donationProjectTitle: "",
    donationProjectOrganization: "",
    donationProjectImageUrl: "",
    donationProjectTargetAmount: 0,
    donationProjectStartDate: "",
    donationProjectEndDate: "",
    donationCategoryId: 0,
    donationProjectType: "FUNDING",  // 펀딩 고정

    rewards: [], // 펀딩 전용 리워드 목록
  },
});
