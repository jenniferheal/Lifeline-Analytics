import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Form from '../components/Form'

export default function Register() {
  return (
    <>

      <Navbar />
      <Form route='/api/user/register/' route='signup' />
      <Footer />

    </>
  )
}
