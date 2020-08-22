import React from 'react'

const PostsContext = React.createContext({
  drinks: [],
  users: [],
  addDrink: () => {},
  updateDrink: () => {},
  deleteDrink: () => {},
})

export default PostsContext