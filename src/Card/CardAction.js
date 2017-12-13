import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

function CardAction(props) {
  const {children, className, style, border} = props

  let classes = ClassNames('mdl-card__actions', className)
  if (border) {
    classes = ClassNames('mdl-card--border', classes)
  }

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

CardAction.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  border: PropTypes.bool,
}

CardAction.defaultProps = {
  className: '',
  style: {},
}

export default CardAction
