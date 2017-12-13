import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

function Gird(props) {
  const {children, className, style} = props

  const classes = ClassNames(`mdl-grid`, className)
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

Gird.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

Gird.defaultProps = {
  children: '',
  className: '',
  style: {},
}

export default Gird
