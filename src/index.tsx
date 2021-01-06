import React from 'react'
import reactDom from 'react-dom'

const App = () => (
  <>
    Hello world
  </>
)

reactDom.hydrate(
  <App />,
  document.getElementById('app-container')
)
