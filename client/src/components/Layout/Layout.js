import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'

export const Layout = ({Children}) => {
  return (
    <div>
        <Header/>
        <div className='content'>
            {Children}
        </div>
        <Footer/>
    </div>
  )
}
