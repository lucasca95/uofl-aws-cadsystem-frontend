import Environment from "../environment";
import Api from "./ApiService";
import fileDownload from "js-file-download";

export const ImageService = {
    sendImgPOST: async (data = null) => {
      const axios = require('axios').default;
      let url = `${Environment.api}image/`;
      const formData = new FormData();
      formData.append("file", data.image);
      formData.append("userEmail", data.email);
      const getResult = await axios.post(`${url}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return getResult.data;
    },

    searchImgPOST: async (code = null, user_email = null) => {
      const axios = require('axios').default;
      let url = `${Environment.api}img/retrieve/`;
      const formData = new FormData();
      formData.append("imgcode", code);
      formData.append("user_email", user_email);
      let getResult = await axios.post(`${url}`, formData, {responseType:'blob'});
      // console.log('server responde...');
      // console.log(getResult.data);
      fileDownload((getResult.data), 'results.pdf');
      // let imgInfo = {
      //   'detection': -1,
      //   'classification': -1
      // }
      // if(getResult.data.status === 200){
      //   imgInfo.detection = getResult.data.detection;
      //   imgInfo.classification = getResult.data.classification;
      //   url = `${Environment.api}img/retrieve/`;
      //   // getResult = await axios.post(`${url}`, formData, {responseType:'blob'});
      //   // fileDownload(getResult.data, 'file.png');
      // }
      return getResult.data;
    },

    imageListPOST: async (userEmail = null) => {
      const axios = require('axios').default;
      let url = `${Environment.api}images/`;
      const getResult = await axios.post(`${url}`, {userEmail: userEmail});
      return getResult.data;
    },

    testGET: async () => {
      let url = `${Environment.api}`;
      const getResult = await Api.fetch(`${url}`, "GET");
      return getResult;
    },
  };
  
  export default ImageService;