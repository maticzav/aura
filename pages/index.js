import React, {Component} from 'react'
import {css} from 'glamor'
import App from '../components/App'
import Header from '../components/Header'
import Hasher from '../components/Hasher'
import Footer from '../components/Footer'


export default() => (
   <App>
      <Header />
      <Hasher />
      <Footer />
   </App>
)
