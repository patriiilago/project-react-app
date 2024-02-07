import './App.css'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import RecipesDetailsPage from './Pages/RecipesDetailsPage'
import NotFoundPage from './Pages/NotFoundPage'

import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <div className='App'>

      <NavBar />
      <SideBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sobre-mi' element={<AboutPage />} />
        <Route path='/details/:recipe_id' element={<RecipesDetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />

    </div>

  )
}

export default App
