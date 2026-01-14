import React from 'react'
import {Routes, Route} from "react-router-dom"
import App from './App'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'

const Body = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />

        </Routes>
    </div>
  )
}

export default Body