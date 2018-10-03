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
        <h1>@t7/render</h1>

        <p>
          <a href='https://github.com/t7-components/render/blob/master/source/demo.js'>
          View "demo.js" on GitHub
          </a>
        </p>

        <hr />

        <p className='example'>
          <h2>Render used with a "truthy" condition</h2>
          Using a "truthy" condition will cause the &#60;Render&#62; tag to render the content.<br /><br />
          &#60;Render if=&#123;truthy&#125;&#62;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;p&#62;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A truthy condition will render this text.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;/p&#62;<br />
          &#60;/Render&#62;<br /><br />
        </p>
          Will render the line below:<br />

        <Render if={bool}>
          <p className='text'>
            A truthy condition will render this text.
          </p>
        </Render>

        <br /><br />

        <hr />

        <p className='example'>
          <h2>Render used with a "falsy" condition</h2>
           Using a "falsy" condition will cause the &#60;Render&#62; tag to NOT render the content.<br /><br />
          &#60;Render if=&#123;falsy&#125;&#62;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#60;p&#62;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A falsy condition will NOT render this text.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#60;/p&#62;<br />
          &#60;/Render&#62;<br /><br />
        </p>
          Will not render any text below (ie. this is the last line of the demo!):<br />

        <Render if={false}>
          <p className='text'>
            A falsy condition will NOT render this text
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
