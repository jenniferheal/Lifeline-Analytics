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
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route
          path='/add-testimonial' element={
            <ProtectedRoute>
              <AddTestimonial />
            </ProtectedRoute>
          }
        />
        <Route path='/resources' element={<Resources />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<RegisterAndLogout />} />
        <Route
          path='/update-user' element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
