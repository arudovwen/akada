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
import Dashboard from './pages/Dashboard/Home';
import EditProfile from './pages/Dashboard/Profile/EditProfile';
import Profile from './pages/Dashboard/Profile/Index';
import Notifications from './pages/Dashboard/Notifications/Notifications';
import Student from './pages/Dashboard/Student/Student';
import StudentDetails from './pages/Dashboard/StudentDetails/StudentDetails';
import SuccessUser from './pages/Dashboard/Forms/SuccessUser';
import LeaderBoard from './pages/Dashboard/LeaderBoard/LeaderBoard';
import Roles from './pages/Dashboard/Roles and Permission/Roles';
import Payments from './pages/Dashboard/Payments/Payments';

import Add from './pages/Dashboard/AddUser/Add';

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path='/' element={<Landing />} />
      </Route>
      <Route element={<UserLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/edit' element={<EditProfile />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/leader-board' element={<LeaderBoard />} />
        <Route path='/add-user' element={<Add />} />
        <Route path='//SuccessUser' element={<SuccessUser />} />
        <Route path='/roles' element={<Roles />} />
        <Route path='/payments' element={<Payments />} />
      </Route>

      {/* <Route path="/add-user" element={<Student />} /> */}

      {/* <Route path='/add-user' element={<Student />} /> */}
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
