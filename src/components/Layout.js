/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
const Layout = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false)

  const toggleSidebarHandler = () => {
    setSidebarIsOpen(!sidebarIsOpen)
  }

  return (
    <>
      <Sidebar isOpen={sidebarIsOpen} onToggleSidebar={toggleSidebarHandler} />
      <Navbar onToggleSidebar={toggleSidebarHandler} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
