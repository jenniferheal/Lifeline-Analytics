import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import EditForm from '../components/EditForm'

export default function EditUser() {
  return (
    <>

      <Navbar />
      <EditForm route='/edit' method='edit' />
      <Footer />

    </>
  )
}
