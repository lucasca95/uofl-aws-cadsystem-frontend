import Environment from "../environment";

export const VerificationService = {

  verifyEmailPOST: async (userData = null) => {
    const axios = require('axios').default;
      let url = `${Environment.api}verify/`;
      const getResult = await axios.post(`${url}`, {
        email: userData.email,
        token: userData.token
      });
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