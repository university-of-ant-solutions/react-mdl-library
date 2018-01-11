import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

function FontIcon(props) {
  const {children, className, style} = props
  const classes = ClassNames('material-icons', className)
  return (
    <i className={classes} style={style}>
      {children}
    </i>
  )
}

FontIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  style: PropTypes.object,
}

FontIcon.defaultProps = {
  children: null,
  className: null,
  style: {},
}

export default FontIcon
