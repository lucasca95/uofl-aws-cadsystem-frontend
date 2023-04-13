import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Theme from './theme/theme';
import ProtectedRoutes from './routes/ProtectedRoutes';
import { useStore } from './common/Context';

import WorkoutsP from './components/pages/WorkoutsP';
import NotFoundP from './components/pages/NotFoundP';
import WorkoutP from './components/pages/WorkoutP';

function App() {
  const [{user}, dispatch] = useStore();
  const [pageIsLoading, setPageIsLoading] = useState(true);

  useEffect(()=>{
    setPageIsLoading(false);
    window.location.hash = '/';
    console.clear();
  },[]);

  return (pageIsLoading)
  ?
    <CircularProgress color="inherit" />
  :
    <Theme>
        <Router>
          <Routes>
            <Route path='/' element={<WorkoutsP/>} />
            <Route path='/workouts/' element={<WorkoutsP/>} />
            <Route path='/workout/:workout_id' element={<WorkoutP/>}/>
            <Route path="*" element={<NotFoundP/>} />
          </Routes>
        </Router>
    </Theme>
  ;
}

export default App;