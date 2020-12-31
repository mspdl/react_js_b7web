import React from 'react'
import { useSelector } from 'react-redux'

function App() {

  let user = useSelector(state => state.user)

  return <>
    <h1>Testing user email: {user.email}</h1>
  </>
}

export default App