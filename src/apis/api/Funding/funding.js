import instance from '../../utills/instance';

export const getFundingProjectsPagingRequest = async (params) => {
  return await instance.get('/fundings/load-more', { params });
};

export const getFundingProjectCountRequest = async (params) => {
  return await instance.get('/fundings/count', { params });
};
