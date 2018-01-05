import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

function CardSupportingText(props) {
  const {children, className, style} = props

  const classes = ClassNames('mdl-card__supporting-text', className)

  return <div className={classes} style={style}>{children}</div>
}

CardSupportingText.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

CardSupportingText.defaultProps = {
  className: '',
  style:{},
}

export default CardSupportingText