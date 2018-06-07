import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {numbers} from '../constants'

const debug = require('debug')('react-mdl-library:steppers:StepLabelIcon')

function StepLabelIcon(props) {
  debug('render')

  const {children, className, active} = props

  const classes = ClassNames(
    'j55 j239 j235',
    {'active': active},
    className,
  )

  return (
    <svg className={classes} focusable="false" viewBox={`0 0 ${numbers.STEPPER_CIRCLE_RADIUS} ${numbers.STEPPER_CIRCLE_RADIUS}`} aria-hidden="true">
      <circle cx={numbers.STEPPER_CIRCLE_RADIUS/2} cy={numbers.STEPPER_CIRCLE_RADIUS/2} r={numbers.STEPPER_CIRCLE_RADIUS/2} />
      <text className="j240" x={numbers.STEPPER_CIRCLE_RADIUS/2} y="16" textAnchor="middle">1</text>
    </svg>
  )
}

StepLabelIcon.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
}

StepLabelIcon.defaultProps = {
  className: '',
  active: false,
}

export default StepLabelIcon
