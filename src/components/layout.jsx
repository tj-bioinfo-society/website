import * as React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header whiteBg={props.whiteBg ? props.whiteBg : false} />
      <div className='flex-grow'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout