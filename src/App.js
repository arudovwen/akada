import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Landing from './pages/Landing/Landing';
import { HomeLayout } from './layouts/HomeLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { UserLayout } from './layouts/UserLayout';
import SignUp from './pages/SignUp';
import SignUp2 from './pages/SignUp2';
import CreatedAccount from './pages/CreatedAccount';

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>

      <Route path="/dashboard" element={<UserLayout />}>
        <Route path="About" element={<About />} />
      </Route>

      <Route path="getStarted" element={<SignUp />} />
      <Route path="getStarted/getStarted2" element={<SignUp2 />} />
      <Route path="/createdAccount" element={<CreatedAccount />} />

      <Route path="/admin" element={<AdminLayout />}>
        {/* <Route path="About" element={<About />} /> */}
      </Route>
    </Routes>
  );
}
