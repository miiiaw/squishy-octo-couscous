import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Posts from './components/Posts'
import Projects from './components/Projects'
import Layout from './components/Layout'

function App() {

  return (
    <>
    <Layout >
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<About />} path='/about' />
        <Route element={<SinglePost />} path='/post/:slug' />
        <Route element={<Posts />} path='/posts' />
        <Route element={<Projects />} path='/projects' />
      </Routes>
    </Layout>
    </>
  )
}

export default App
