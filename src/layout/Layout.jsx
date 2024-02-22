import React from 'react'
import Header from './Header'
import Footer from './Footer'

import LiveChatBot from '../components/common/LiveChatBot'
import LiveBot from '../components/common/LiveBot'

function Layout({children}) {
  return (
    <>
    <Header/>
      {children}
      {/* <LiveBot/> */}
      <LiveChatBot/>
    <Footer/>
    </>
  )
}

export default Layout