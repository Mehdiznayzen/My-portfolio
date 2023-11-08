import React, { useEffect, useState } from 'react'
import { IndexHome, IndexAbout, IndexWork, IndexServices, IndexClient, IndexFooter } from './constants/index'
import './app.css'



function App() {
  return (
    <div className='text-white overflow-hidden'>
      <IndexHome/>
      <IndexAbout/>
      <IndexServices/>
      <IndexWork/>
      <IndexClient/>
      <IndexFooter/>
    </div>
  )
}

export default App