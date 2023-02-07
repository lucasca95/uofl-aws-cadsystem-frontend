import { Navigate, Outlet } from "react-router-dom";
import { useStore } from '../common/Context';

const ProtectedRoutes = () => {

  const [{user}, dispatch] = useStore();

  return (
    user ? <Outlet/> : <Navigate to='/login' replace />
  )
};

export default ProtectedRoutes;
