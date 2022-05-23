import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Landing from './pages/Landing/Landing';
import { HomeLayout } from './layouts/HomeLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { UserLayout } from './layouts/UserLayout';
import RegisterAccount from './pages/Auth/RegisterAccount';
import VerifyAccount from './pages/Auth/VerifyAccount';
import LoginAccount from './pages/Auth/LoginAccount';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import SuccessUser from './pages/Dashboard+.js/SuccessUser';
import EditProfile2 from './pages/Dashboard/EditProfile2';

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path='/' element={<Landing />} />
      </Route>

      <Route element={<UserLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>

      <Route path='/getStarted' element={<EditProfile2 />} />

      <Route element={<AuthLayout />}>
        <Route path='register' element={<RegisterAccount />} />
        <Route path='/login' element={<LoginAccount />} />
        <Route path='/verify-account' element={<VerifyAccount />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />}>
        {/* <Route path="About" element={<About />} /> */}
      </Route>
    </Routes>
  );
}
