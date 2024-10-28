import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {Blog} from './pages/Blog'
import {BrowserRouter, Route, Routes} from  'react-router-dom'
import './App.css'
import { NewBlog } from './pages/NewBlog'
import { Blogs } from './pages/Blogs'
import { AppBar } from './Compoents/AppBar'

function App() {

  return (
    <>
      <AppBar></AppBar>
      <BrowserRouter>
        <Routes>
          <Route path='Signup' element={<Signup/>}></Route>
          <Route path='Signin' element={<Signin/>}></Route>
          <Route path='Blog/:id' element={<Blog/>}></Route>
          <Route path='New-Blog' element={<NewBlog/>}></Route>
          <Route path='blogs' element={<Blogs/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
