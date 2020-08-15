import React from 'react'

const PostsContext = React.createContext({
  posts: [],
  users: [],
  addPost: () => {},
  updatePost: () => {},
  deletePost: () => {},
})

export default PostsContext