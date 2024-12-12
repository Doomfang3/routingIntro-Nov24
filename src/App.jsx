import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'
import AllRecipesPage from './pages/AllRecipesPage'
import OneRecipesPage from './pages/OneRecipePage'

const recipes = [
  { id: '1', title: 'Pizza', instructions: 'Cook and eat' },
  { id: '2', title: 'Gauffre', instructions: 'Eat, Cook and eat' },
  { id: '3', title: 'Tiramisu', instructions: 'Eat' },
]

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path='/recipes' element={<AllRecipesPage recipes={recipes} />} />
        <Route path='/recipes/:recipeId' element={<OneRecipesPage recipes={recipes} />} />

        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </div>
  )
}

export default App
