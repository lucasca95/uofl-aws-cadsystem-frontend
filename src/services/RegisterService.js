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
    const formData = new FormData();
    formData.append('userFirstName', userData.userFirstName);
    formData.append('userLastName', userData.userLastName);
    formData.append('userEmail', userData.userEmail);
    formData.append('userPassword', userData.userPassword);
    const getResult = await axios.post(`${url}`, formData);
    return getResult.data;
  },
};
  
export default RegisterService;