import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

function CardSupportingText(props) {
  const {children, className} = props

  const classes = ClassNames('mdl-card__supporting-text', className)

  return <div className={classes}>{children}</div>
}

CardSupportingText.propTypes = {
  className: PropTypes.string,
}

CardSupportingText.defaultProps = {
  className: '',
}
export default CardSupportingText
