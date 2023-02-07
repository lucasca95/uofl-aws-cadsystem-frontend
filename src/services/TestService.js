import Environment from "../environment";
import Api from "./ApiService";

export const TestService = {
    testGET: async (img = null) => {
      const axios = require('axios').default;
      let url = `${Environment.api}`;
      const getResult = await axios.get(`${url}`);
      return getResult.data;
    },
  };
  
  export default TestService;