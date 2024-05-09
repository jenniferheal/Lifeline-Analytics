import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'

export default function Login() {
  return (
    <>
      <Navbar />
      <Form route='/login' method='login' />
      <Footer />

    </>
  )
}
