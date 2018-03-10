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
  className: PropTypes.string,
  style: PropTypes.object,
}

FontIcon.defaultProps = {
  children: '',
  className: '',
  style: {},
}

export default FontIcon
