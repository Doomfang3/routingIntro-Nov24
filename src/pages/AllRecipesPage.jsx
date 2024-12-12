import { Link } from 'react-router-dom'

const AllRecipesPage = ({ recipes }) => {
  return (
    <div>
      <h1>All the recipes</h1>
      {recipes.map(currentRecipe => (
        <Link key={currentRecipe.id} to={`/recipes/${currentRecipe.id}`}>
          <h2>{currentRecipe.title}</h2>
        </Link>
      ))}
    </div>
  )
}

export default AllRecipesPage
