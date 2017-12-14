import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import SpinnerSlayer from './SpinnerLayer'

function Spinner(props) {
  const {className, style, singleColor} = props

  const classes = ClassNames(
    `mdl-spinner`,
    {'mdl-spinner--single-color': singleColor},
    `mdl-js-spinner`,
    `is-active`,
    `is-upgraded`,
    className,
  )

  return (
    <div className={classes} style={style}>
      <SpinnerSlayer number={1} />
      <SpinnerSlayer number={2} />
      <SpinnerSlayer number={3} />
      <SpinnerSlayer number={4} />
    </div>
  )
}

Spinner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  singleColor: PropTypes.bool,
}

Spinner.defaultProps = {
  className: '',
  style: {},
  singleColor: false,
}

export default Spinner
