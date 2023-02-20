import Environment from "../environment";

export const VerificationService = {

  verifyEmailPOST: async (userData = null) => {
    const axios = require('axios').default;
      let url = `${Environment.api}emailvalidation/`;

      const formData = new FormData();
      formData.append('token', userData.token);
      formData.append('email', userData.email);
      const getResult = await axios.post(`${url}`, formData);
      // console.log('server responde...');
      // console.log(getResult.data);
      return getResult.data;
  },

  testEndpoint: async () => {
    const axios = require('axios').default;
    const url = `${Environment.api}emailvalidation/`;
    const getResult = await axios.post(url);
    return getResult;
  },
};

export default VerificationService;