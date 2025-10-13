import * as PortOne from "@portone/browser-sdk/v2";

export const portOnePayRequest = async ({ orderName, totalAmount }) => {
    return await PortOne.requestPayment({
        storeId: process.env.REACT_APP_STORE_ID,
        channelKey: process.env.REACT_APP_CHANNEL_KEY,
        paymentId: `mid_${new Date().getTime()}`,
        currency: "CURRENCY_KRW",
        orderName: orderName,
        totalAmount: totalAmount,
        payMethod: "EASY_PAY",
        isTestChannel: true,
    });
};