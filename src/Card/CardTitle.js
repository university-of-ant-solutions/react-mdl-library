import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

function CardTitle(props) {
  const {children, className, style, titleText, expand} = props

  let classes = ClassNames('mdl-card__title', className)
  if (expand) {
    classes = ClassNames('mdl-card--expand', classes)
  }

  return (
    <div className={classes} style={style}>
      {titleText && <h2 className="mdl-card__title-text">{titleText}</h2>}
      {children}
    </div>
  )
}

CardTitle.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  titleText: PropTypes.string,
  expand: PropTypes.bool,
}

CardTitle.defaultProps = {
  className: '',
  style: {},
  titleText: null,
}

export default CardTitle
