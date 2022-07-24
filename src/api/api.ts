import axios from 'axios';

export const getSelectDataTerms = async () => {
  const response = await axios.get('https://onboarding.art-code.team/api/test/v1/search/terms');

  return response.data;
};

export const getSelectDataBrandsTerms = async () => {
  const response = await axios.get('https://onboarding.art-code.team/api/test/v1/search/brands_terms');

  return response.data;
};

export const getSelectDataStyles = async () => {
  const response = await axios.get('https://onboarding.art-code.team/api/test/v1/search/styles');

  return response.data;
};
