import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-screen">
    <Header/>
    <main className="container">
      <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default Layout