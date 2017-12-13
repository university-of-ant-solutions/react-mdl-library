import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {
  INITIAL_SCALE,
  // INITIAL_SIZE,
  // INITIAL_OPACITY,
  // FINAL_OPACITY,
  FINAL_SCALE,
  IS_ANIMATING,
  IS_VISIBLE,
} from './constants'
import {addClass, removeClass} from '../utils'

const debug = require('debug')('components:Button:Button')

class Button extends React.PureComponent {
  constructor(props) {
    super(props)
    this.frameCount = 0
    this.ignoringMouseDown = false
  }

  /**
   * Getter for frameCount
   * @return {number} the frame count.
   */
  getFrameCount = () => this.frameCount

  /**
   * Setter for frameCount
   * @param {number} fC the frame count.
   */
  setFrameCount = fC => {
    this.frameCount = fC
  }

  addAnimating = () => {
    addClass(this.rippleElement, IS_ANIMATING)
  }

  removeAnimating = () => {
    removeClass(this.rippleElement, IS_ANIMATING)
  }

  downHandler = event => {
    this.displayEffect()

    if (event.type === 'mousedown' && this.ignoringMouseDown) {
      this.ignoringMouseDown = false
    } else {
      if (event.type === 'touchstart') {
        this.ignoringMouseDown = true
      }

      const {frameCount} = this.getFrameCount()

      if (frameCount > 0) {
        return
      }

      this.setFrameCount(1)

      const bound = event.currentTarget.getBoundingClientRect()
      let x = null
      let y = null
      if (event.clientX === 0 && event.clientY === 0) {
        x = Math.round(bound.width / 2)
        y = Math.round(bound.height / 2)
      } else {
        const clientX = event.clientX !== undefined ? event.clientX : event.touches[0].clientX
        const clientY = event.clientY !== undefined ? event.clientY : event.touches[0].clientY
        x = Math.round(clientX - bound.left)
        y = Math.round(clientY - bound.top)
      }
      this.setRippleTransform(true, x, y)
      window.requestAnimationFrame(this.animFrameHandler)
    }
  }

  upHandler = event => {
    if (event && event.detail !== 2) {
      // Allow a repaint to occur before removing this class, so the animation
      // shows for tap events, which seem to trigger a mouseup too soon after
      // mousedown.
      window.setTimeout(this.hideEffect, 0)
    }
  }

  setRippleStyles = ({rippleSize, transformString}) => {
    if (rippleSize) {
      this.rippleElement.style.width = `${rippleSize}px`
      this.rippleElement.style.height = `${rippleSize}px`
    }
    if (transformString) {
      this.rippleElement.style.webkitTransform = transformString
      this.rippleElement.style.msTransform = transformString
      this.rippleElement.style.transform = transformString
    }
  }

  setRippleTransform = (start, x, y) => {
    let transformString, scale
    let offset = `translate(${x}px, ${y}px)`
    if (start) {
      scale = INITIAL_SCALE
    } else {
      scale = FINAL_SCALE
      offset = `translate(${this.boundWidth / 2}px, ${this.boundHeight / 2}px)`
    }
    transformString = `translate(-50%, -50%) ${offset}${scale}`

    // debugger
    this.setRippleStyles({transformString})

    if (start) {
      this.removeAnimating()
    } else {
      this.addAnimating()
    }
  }

  displayEffect = () => {
    addClass(this.rippleElement, IS_VISIBLE)
  }

  hideEffect = () => {
    removeClass(this.rippleElement, IS_VISIBLE)
  }

  animFrameHandler = () => {
    if (this.frameCount-- > 0) {
      window.requestAnimationFrame(this.animFrameHandler)
    } else {
      this.setRippleTransform(false)
    }
  }

  componentDidMount = () => {
    this.buttonElement = ReactDOM.findDOMNode(this)
    const {ripple} = this.props
    if (ripple) {
      this.rippleElement = this.buttonElement.querySelectorAll('.mdl-ripple')[0]
      const element = this.buttonElement
      const rect = element.getBoundingClientRect()
      this.boundHeight = rect.height
      this.boundWidth = rect.width
      const rippleSize = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2

      this.setRippleStyles({rippleSize})
    }
  }

  render() {
    debug(`render button`)
    const {
      children,
      className,
      color,
      raised,
      fab,
      disabled: disabledProp,
      ripple,
      ...other
    } = this.props
    const classes = ClassNames(
      'mdl-button',
      'mdl-js-button',
      {'mdl-button--raised': raised},
      {'mdl-button--fab': fab},
      {'mdl-button--primary': color === 'primary'},
      {'mdl-button--accent': color === 'accent'},
      {'mdl-js-ripple-effect': ripple},
      className,
    )

    if (ripple) {
      return (
        <button
          className={classes}
          disabled={disabledProp}
          onMouseDown={this.downHandler}
          onTouchStart={this.downHandler}
          onMouseUp={this.upHandler}
          onMouseLeave={this.upHandler}
          onTouchEnd={this.upHandler}
          onBlur={this.upHandler}
          {...other}
        >
          {children}
          <span className="mdl-button__ripple-container">
            <span className="mdl-ripple" />
          </span>
        </button>
      )
    }
    return (
      <button className={classes} disabled={disabledProp} {...other}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  raised: PropTypes.bool,
  fab: PropTypes.bool,
  disabled: PropTypes.bool,
  ripple: PropTypes.bool,
}

Button.defaultProps = {
  children: null,
  className: '',
  color: '',
  raised: false,
  fab: false,
  disabled: false,
  ripple: false,
}

export default Button
