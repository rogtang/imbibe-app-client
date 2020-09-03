import React from 'react'

const PostsContext = React.createContext({
  drinks: [],
  users: [],
  setDrinks: () => {},
  updateDrink: () => {},
  deleteDrink: () => {},
})

export default PostsContext