import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import Sidebar from "./Sidebar/Sidebar"

interface LayoutProps {
  children: ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Main>
          {children}
        </Main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout