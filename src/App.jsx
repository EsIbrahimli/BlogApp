
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import {Router} from './Router/router'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blogs'))
const BlogDetail = lazy(() => import('./pages/Blogs/BlogDetail'))

import './App.css'

function App() {

  return (
   <Suspense fallback={<div>Loading...</div>}>
     <Routes>
        <Route path={Router.Home} element={<Home />} />
        <Route path={Router.About} element={<About />} />
        <Route path={Router.Contact} element={<Contact />} />
        <Route path={Router.Blogs} element={<Blog />} />
        <Route path={Router.BlogDetail} element={<BlogDetail />} />
        <Route path={Router.NotFound} element={<h1>404 Not Found</h1>} />
     </Routes>
   </Suspense>
  )
}

export default App
