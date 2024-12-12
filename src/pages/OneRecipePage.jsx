import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

const OneRecipesPage = ({ recipes }) => {
  const { recipeId } = useParams()

  const [recipe] = useState(recipes.find(currentRecipe => currentRecipe.id === recipeId))

  if (!recipe) {
    return <Navigate to='/recipes' />
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.instructions}</p>
    </div>
  )
}

export default OneRecipesPage
