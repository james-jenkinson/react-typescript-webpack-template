import React from 'react'
import reactDom from 'react-dom'

const App: React.FC = () => (
  <>
    Hello foo bar foo bar
  </>
)

reactDom.hydrate(
  <App />,
  document.getElementById('app-container')
)
