import Header from "../../widgets/header/header"
import Footer from "../../widgets/footer/footer"
import { Outlet } from "react-router"


const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout