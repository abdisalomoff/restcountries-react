import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import './App.css'

import HomePage from './components/HomePage'



function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
