import { atom } from "recoil";

export const adminDonationEditState = atom({
  key: "adminDonationEditState",
  default: {
    donationProjectId: 0,
    donationProjectTitle: "",
    donationProjectOrganization: "",
    donationProjectImageUrl: "",
    donationProjectTargetAmount: 0,
    donationProjectDescription: "",
    donationProjectStartDate: "",
    donationProjectEndDate: "",
    donationCategoryId: 0,
    donationProjectType: "DONATION"
  },
});
