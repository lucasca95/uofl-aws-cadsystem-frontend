import Environment from "../environment";
import Api from "./ApiService";

export const WorkoutService = {
    getWorkoutsGET: async (page=1, limit=5) => {
      const axios = require('axios').default;
      let url = `${Environment.api}workouts/?page=${page}&limit=${limit}`;
      const getResult = await axios.get(`${url}`);
      return getResult.data;
    },
    getWorkoutHRGET: async (workout_id=null) => {
      const axios = require('axios').default;
      let url = `${Environment.api}workout/${workout_id}/HR`;
      const getResult = await axios.get(`${url}`);
      return getResult.data[0];
    },
    getWorkoutTHGET: async (workout_id=null) => {
      const axios = require('axios').default;
      let url = `${Environment.api}workout/${workout_id}/TH`;
      const getResult = await axios.get(`${url}`);
      return getResult.data[0];
    },
    sendWorkoutPOST: async (data = null) => {
      // console.log(`In workout post data is`);
      // console.log(data);
      const axios = require('axios').default;
      let url = `${Environment.api}workouts/`;
      const formData = new FormData();
      formData.append("HRFile", data.hr[0]);
      formData.append("THFile", data.th[0]);
      const getResult = await axios.post(`${url}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return getResult.data;
    },
    downloadWorkoutGET: async (workout_id = null) => {
      const axios = require('axios').default;
      let url = `${Environment.api}workouts/${workout_id}`;
      const getResult = await axios.get(`${url}`, {responseType: 'blob'})
      return getResult;
    },
 
    testGET: async () => {
      let url = `${Environment.api}`;
      const getResult = await Api.fetch(`${url}`, "GET");
      return getResult;
    },
  };
  
  export default WorkoutService;