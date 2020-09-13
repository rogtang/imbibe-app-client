import React from 'react'

const AuthenticationContext = React.createContext({
  isAuthenticated: false,
  setAuthentication: () => {} 
})


export default AuthenticationContext