import React from 'react'
import {Routes, Route} from "react-router-dom"
import App from './App'
import PrivacyPolicy from './pages/PrivacyPolicy'

const Body = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
    </div>
  )
}

export default Body