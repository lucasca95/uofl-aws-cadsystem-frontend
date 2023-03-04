import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Theme from './theme/theme';
import ProtectedRoutes from './routes/ProtectedRoutes';
import { useStore } from './common/Context';

import LoginP from './components/pages/LoginP';
import ImagesP from './components/pages/ImagesP';
import EmailVerificationP from './components/pages/EmailVerificationP';
import NotFoundP from './components/pages/NotFoundP';
import Environment from './environment';


function App() {
  const [{user}, dispatch] = useStore();
  const [pageIsLoading, setPageIsLoading] = useState(true);

  useEffect(()=>{
    setPageIsLoading(false);
    // console.log(Environment.api);
  },[]);

  return (pageIsLoading)
  ?
    <CircularProgress color="inherit" />
  :
    <Theme>
        <Router>
          <Routes>
            <Route element={<ProtectedRoutes/>}>
              <Route path='/' element={<ImagesP/>} />
              <Route path='/home/' element={<ImagesP/>} />
            </Route>
            <Route path="/login/" element={<LoginP/>} />
            <Route path="/login" element={<LoginP/>} />
            <Route path="/verify/" element={<EmailVerificationP/>} />
            <Route path="/verify/:token/:email/" element={<EmailVerificationP/>} />
            <Route path="/verify/:token/:email" element={<EmailVerificationP/>} />
            <Route path="*" element={<NotFoundP/>} />
          </Routes>
        </Router>
    </Theme>
  ;
}

export default App;