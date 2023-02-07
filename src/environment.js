const {REACT_APP_BACKEND, REACT_APP_BACKEND_URL} = process.env;
const Environment = {
  api: `${REACT_APP_BACKEND}`,
  // api: "https://idtuks4vm7.us-east-2.awsapprunner.com/",
  socket: "https://idtuks4vm7.us-east-2.awsapprunner.com/"
};

export default Environment;
