import React from 'react'
import Meta from '../components/meta'
import Navbar from '../components/navbar'
export default ({ children, meta }) => (
  <div>
    <Meta props={ meta }/>
    <Navbar />
    { children }
  </div>
)