import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

function CardMedia(props) {
  const {src, style, className} = props

  const classes = ClassNames('mdl-card__media', className)

  return (
    <div className={classes}>
      <img src={src} style={style} />
    </div>
  )
}

CardMedia.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.object,
}

CardMedia.defaultProps = {
  className: '',
  src: '',
}

export default CardMedia
