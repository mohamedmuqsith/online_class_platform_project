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
import AdminUsers from './pages/admin/AdminUsers'; // Added
import ProtectedRoute from './components/ProtectedRoute'; // Added
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

        {/* User protected routes */}
        <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        <Route path="/course-calendar" element={<ProtectedRoute><CourseCalendar /></ProtectedRoute>} />
        <Route path="/meetings" element={<ProtectedRoute><Meetings /></ProtectedRoute>} />
        <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/create-event" element={<ProtectedRoute><CreateEvent /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path="/payment-gateway" element={<ProtectedRoute><PaymentGateway /></ProtectedRoute>} />
        <Route path="/certificate" element={<ProtectedRoute><Certificate /></ProtectedRoute>} />

        {/* Admin protected routes */}
        <Route path="/admin" element={<ProtectedRoute roleRequired="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/add-courses" element={<ProtectedRoute roleRequired="admin"><AddCourses /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute roleRequired="admin"><AdminUsers /></ProtectedRoute>} />
        <Route path="/admin/calendar-create" element={<ProtectedRoute roleRequired="admin"><CourseCalendarCreate /></ProtectedRoute>} />
        <Route path="/admin/online-classes" element={<ProtectedRoute roleRequired="admin"><OnlineClasses /></ProtectedRoute>} />
        <Route path="/admin/schedules" element={<ProtectedRoute roleRequired="admin"><Schedules /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;

