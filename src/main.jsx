import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ListMySkateboards from './pages/ListMySkateboards'
import FindMySkateboard from './pages/FindMySkateboard'
import SkateboardDetail from './pages/SkateboardDetail'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/list-my-skateboards" element={<ListMySkateboards />} />
        <Route path="/find-my-skateboard" element={<FindMySkateboard />} />
        <Route path="/skateboard/:skateboardId" element={<SkateboardDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
