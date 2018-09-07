// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'

// CSS.
import './demo.css'

// UI components.
import Render from './'

// Define class.
class Demo extends React.Component {
  // Render method.
  render () {
    // Boolean.
    const bool = true

    // Expose UI.
    return (
      <React.Fragment>
        <Render if={bool}>
          <p>
            If you are reading this the component works.
          </p>
        </Render>
      </React.Fragment>
    )
  }
}

// Get root.
const root = document.getElementById('root')

// Render.
ReactDOM.render(<Demo />, root)
