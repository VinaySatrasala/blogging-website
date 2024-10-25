import { useState } from 'react'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {Blog} from './pages/Blog'
import {BrowserRouter, Route, Routes} from  'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='Signup' element={<Signup/>}></Route>
          <Route path='Signin' element={<Signin/>}></Route>
          <Route path='Blog' element={<Blog/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App