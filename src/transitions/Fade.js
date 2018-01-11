// https://github.com/callemall/material-ui/blob/d732bb1cc6438a5c9ead721e5caa68479dd6af61/src/transitions/Fade.js
import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Transition from 'react-transition-group/Transition'
import {addClass, removeClass} from '../utils'

class Fade extends React.Component {
  handleEnter = node => {
    addClass(node, 'fade-component__exiting-transition')
  }

  handlenEntered = node => {
    removeClass(node, 'fade-component__exiting-transition')
    addClass(node, 'fade-component__entered-transition')
  }

  handleExit = node => {
    removeClass(node, 'fade-component__entered-transition')
    addClass(node, 'fade-component__exiting-transition')
  }

  render() {
    const {appear, children, isActive, timeout, unmount} = this.props

    let node
    if (children && React.isValidElement(children)) {
      node = React.cloneElement(children, {
        className: ClassNames(
          'fade-component__exiting-transition fade-component__animation',
          children.props.className,
        ),
      })
    }
    let mountOnEnter = false
    let unmountOnExit = false
    if (unmount) {
      mountOnEnter = true
      unmountOnExit = true
    }

    return [
      <Transition
        key={0}
        onEnter={this.handleEnter}
        onEntered={this.handlenEntered}
        onExit={this.handleExit}
        timeout={timeout}
        in={isActive}
        appear={appear}
        mountOnEnter={mountOnEnter}
        unmountOnExit={unmountOnExit}
      >
        {node}
      </Transition>,
    ]
  }
}

Fade.propTypes = {
  children: PropTypes.node,
  appear: PropTypes.bool,
  isActive: PropTypes.bool,
  unmount: PropTypes.bool,
}

Fade.defaultProps = {
  appear: true,
  unmount: true,
}

export default Fade
