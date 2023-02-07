import Environment from "../environment";
import Api from "./ApiService";
import fileDownload from "js-file-download";

export const LoginService = {
  // INPUT -> userData={
  //  'userEmail': sth@mail.com,
  //  'userPassword': sth1234,
  // }
  loginPOST: async (userData = null) => {
    const axios = require('axios').default;
    let url = `${Environment.api}login/`;
    // console.log(`About to send:`);
    // console.log(`${userData}`);
    // console.log(url);
    // alert('check url');
    const getResult = await axios.post(
      `${url}`, 
      {
        userEmail: userData.userEmail, 
        userPassword: userData.userPassword
      }
    );
    return getResult.data;
  },
};
  
export default LoginService;