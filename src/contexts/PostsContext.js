import React from 'react'

const PostsContext = React.createContext({
  drinks: [],
  users: [],
  setDrinksAndAuth: () => {},
  updateDrink: () => {},
  deleteDrink: () => {},
})


export default PostsContext