import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Statistics from './pages/Statistics'
import Testimonials from './pages/Testimonials'
import Resources from './pages/Resources'
import EditUser from './pages/EditUser'
import AddTestimonial from './pages/AddTestimonial'

// import ProtectedRoute from './components/ProtectedRoute'

function Logout() {
  localStorage.clear()
  return <Navigate to='/login' />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/add-testimonial' element={<AddTestimonial />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/update-user' element={<EditUser />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
