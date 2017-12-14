import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

function CardMenu(props) {
  const {children, className, style} = props

  const classes = ClassNames('mdl-card__menu', className)
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

CardMenu.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

CardMenu.defaultProps = {
  className: '',
  style: {},
}

export default CardMenu
