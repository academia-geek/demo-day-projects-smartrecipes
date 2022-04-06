import { useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  const auth = useSelector((state) => state.login.isAuth);
  return auth;
}
export const ProtectedRoutes = () => {
  
  const isAuth = useAuth();
  
   return isAuth ? <Outlet /> : 
   <Navigate to="/" />
  
}