
import { Route, Routes } from 'react-router-dom'
import {Router} from './Router/Router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blogs'

import './App.css'

function App() {

  return (
   <Routes>
      <Route path={Router.Home} element={<Home />} />
      <Route path={Router.About} element={<About />} />
      <Route path={Router.Contact} element={<Contact />} />
      <Route path={Router.Blogs} element={<Blog />} />
      <Route path={Router.NotFound} element={<h1>404 Not Found</h1>} />
   </Routes>
  )
}

export default App
