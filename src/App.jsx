import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AuthContext } from './components/context/auth.context'
import { getAccountApi } from './services/api.service'

const App = () => {
  const { setUser } = useContext(AuthContext)

  useEffect(() => {
    fetchUserinfo()
  }, [])

  const delay = (milSeconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, milSeconds)
    })
  }

  const fetchUserinfo = async () => {
    const res = await getAccountApi()
    await delay(3000)
    if (res.data) {
      // success
      setUser(res.data.user)
      console.log(">>> check user data: ", res.data)
    }
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>


  )
}

export default App
