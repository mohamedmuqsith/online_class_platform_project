import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Blog from './pages/Blog';
import Membership from './pages/Membership';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Payment from './pages/Payment';
import CourseCalendar from './pages/CourseCalendar';
import Meetings from './pages/Meetings';
import Search from './pages/Search';
import Contact from './pages/Contact';
import CreateEvent from './pages/CreateEvent';
import AdminDashboard from './pages/admin/AdminDashboard';
import AddCourses from './pages/admin/AddCourses';
import CourseCalendarCreate from './pages/admin/CourseCalendarCreate';
import OnlineClasses from './pages/admin/OnlineClasses';
import Schedules from './pages/admin/Schedules';
import ProfilePage from './pages/ProfilePage';
import EditProfile from './pages/EditProfile';
import PaymentGateway from './pages/PaymentGateway';
import Certificate from './pages/Certificate';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/course-calendar" element={<CourseCalendar />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-courses" element={<AddCourses />} />
        <Route path="/admin/calendar-create" element={<CourseCalendarCreate />} />
        <Route path="/admin/online-classes" element={<OnlineClasses />} />
        <Route path="/admin/schedules" element={<Schedules />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/payment-gateway" element={<PaymentGateway />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </Router>
  );
}

export default App;
