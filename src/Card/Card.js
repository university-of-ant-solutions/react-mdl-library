import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

function Card(props) {
  const {children, className, style} = props

  const classes = ClassNames('mdl-card', className)
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

Card.defaultProps = {
  className: '',
  style: {},
}

export default Card
