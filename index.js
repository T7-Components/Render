import { Component } from 'react'
import PropTypes from 'prop-types'

/** The **Render** component conditionally renders children when a condition is met. */
export class Render extends Component {
  /**
   * Conditionally renders children when a condition is met
   * @return {Fragment} The children or null
   * See {@link https://reactjs.org/docs/fragments.html Fragment}
   */
  render () {
    const { props: { if: isConditionTruthy, children } } = this

    return isConditionTruthy ? children : null
  }

  static propTypes = {
    /** The condition being evaluated */
    if: PropTypes.any,

    /** The conditionally rendered children */
    children: PropTypes.node
  }
}
