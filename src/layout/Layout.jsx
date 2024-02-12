import React from 'react'
import Header from './Header'
import Footer from './Footer'

import LiveChatBot from '../components/common/LiveChatBot'

function Layout({children}) {
  return (
    <>
    <Header/>
      {children}
      <LiveChatBot/>
    <Footer/>
    </>
  )
}

export default Layout