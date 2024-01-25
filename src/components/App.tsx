import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import type { FC } from 'react'
import Drivers from './Drivers'

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/drivers' element={<Drivers />} />
        <Route path='/' element={<Navigate to='/drivers' />} />
      </Routes>
    </Router>
  )
}

export default App
