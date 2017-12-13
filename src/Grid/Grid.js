import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

function Grid(props) {
  const {children, className, style} = props

  const classes = ClassNames(`mdl-grid`, className)
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

Grid.defaultProps = {
  children: '',
  className: '',
  style: {},
}

export default Grid
