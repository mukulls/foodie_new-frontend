import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Homepage from './pages/Homepage';
import AuthCallbackPage from './pages/AuthCallbackPage'
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './auth/ProtectedRoute';
import ManageRestaurantPage from './pages/ManageRestaurantPage';
import SearchPage from './pages/SeachPage';
import OrderStatusPage from './pages/OrderStatusPage';
export const AppRoutes = () => {
  return (
   <Routes>
    <Route path = '/' element={<Layout showHero> <Homepage/> </Layout>}/>
    <Route path = '/auth-callback' element={<AuthCallbackPage/>}/>
    <Route path='/seach/:city' element={<Layout showHero={false}><SearchPage/></Layout>}/>
    <Route element={<ProtectedRoute/>}>
    <Route path = '/order-status' element={<Layout><OrderStatusPage/></Layout>}/>
    <Route path = '/user-profile' element={<Layout><UserProfilePage/></Layout>}/>
    <Route path = '/manage-restaurant' element={<Layout><ManageRestaurantPage/></Layout>}/>
    </Route>
    
    <Route path = '*' element={<Navigate to = "/"/>}/>
   </Routes>
  );
};