import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

function SpinnerLayer(props) {
  const {className, style, number} = props

  const classes = ClassNames(`mdl-spinner__layer mdl-spinner__layer-${number}`, className)

  return (
    <div className={classes} style={style}>
      <div className="mdl-spinner__circle-clipper mdl-spinner__left">
        <div className="mdl-spinner__circle" />
      </div>
      <div className="mdl-spinner__gap-patch">
        <div className="mdl-spinner__circle" />
      </div>
      <div className="mdl-spinner__circle-clipper mdl-spinner__right">
        <div className="mdl-spinner__circle" />
      </div>
    </div>
  )
}

SpinnerLayer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  number: PropTypes.number,
}

SpinnerLayer.defaultProps = {
  className: '',
  style: {},
  number: 0,
}

export default SpinnerLayer
