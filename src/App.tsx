import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ShoppingCart } from './pages/ShoppingCart'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ShoppingCart />} />
      </Routes>
    </Router>
  )
}

export default App
