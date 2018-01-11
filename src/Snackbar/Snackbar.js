// https://github.com/google/material-design-lite/blob/mdl-1.x/src/snackbar/snackbar.js
import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:Snackbar')

const SNACKBAR = 'mdl-snackbar'
const MESSAGE = 'mdl-snackbar__text'
const ACTION = 'mdl-snackbar__action'
const ACTIVE = 'mdl-snackbar--active'

function Snackbar(props) {
  const {className, style, children, show, onHide} = props

  let classes = ClassNames(SNACKBAR, className)
  if (show) {
    classes = ClassNames(classes, ACTIVE)
  }

  debug('render')

  return (
    <div className={classes} style={style}>
      <div className={MESSAGE}>{children}</div>
      <button type="button" className={ACTION} onClick={onHide}>
        Undo
      </button>
    </div>
  )
}

Snackbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  onHide: PropTypes.func,
}

Snackbar.defaultProps = {
  children: null,
  className: '',
  style: {},
  onHide: () => {},
}

export default Snackbar
