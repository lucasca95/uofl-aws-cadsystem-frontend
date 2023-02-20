import Environment from "../environment";

export const RegisterService = {
  // INPUT -> userData={
  //  'userFirstName: sth,
  //  'userLastName': sth,
  //  'userEmail': sth@mail.com,
  //  'userPassword': sth1234,
  // }
  registerPOST: async (userData = null) => {
    const axios = require('axios').default;
    let url = `${Environment.api}register/`;
    const getResult = await axios.post(`${url}`, {
      userFirstName: userData.userFirstName,
      userLastName: userData.userLastName,
      userEmail: userData.userEmail,
      userPassword: userData.userPassword
    });
    return getResult.data;
  },
};
  
export default RegisterService;