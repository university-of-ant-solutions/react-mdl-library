import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {numbers} from '../constants'

const debug = require('debug')('react-mdl-library:steppers:StepLabel')

class StepLabel extends React.PureComponent {

  render() {
    debug('render')

    const {children, className, option, active, completed, error, onClick, step, ...other} = this.props
    const classes = ClassNames('mdc-step__label cursor', className)
    const classesLabel = ClassNames('mdc-step__label-text mdc-typography--body2', {
      'error': error,
      'active': active,
    })
    const classesIcon = ClassNames(
      'mdc-step__icon j239 mdc-step__svg',
      {'active': active},
      className,
    )
    let classesOption = ''
    if(option) {
      classesOption = ClassNames('mdc-step__label-text mdc-typography--block mdc-typography--caption', {
        'error': error,
        'active': active,
      })
    }
    return (
      <React.Fragment>
      {/* <span className="j224 j225 j231 error">
        <span className="j233">
          <svg className="mdc-step__icon mdc-step__svg j238" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
          </svg>
        </span>
        <span className="j234">
          <span className="j68 j77 mdc-step__label-text error">Create an ad group</span>
          <span className="mdc-typography--block mdc-typography--caption">Alert message</span>
        </span>
      </span> */}
      <span className={classes} {...other}>
        <span className="mdc-step__label-icon">
          {
            error && (<svg className="mdc-step__icon mdc-step__svg error" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
            </svg>)
          }
          {
            completed && !error && (<svg className="mdc-step__icon mdc-step__svg active" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path>
            </svg>)
          }
          {
            !error && !completed && (<svg className={classesIcon} focusable="false" viewBox={`0 0 ${numbers.STEPPER_CIRCLE_RADIUS} ${numbers.STEPPER_CIRCLE_RADIUS}`} aria-hidden="true">
              <circle cx={numbers.STEPPER_CIRCLE_RADIUS/2} cy={numbers.STEPPER_CIRCLE_RADIUS/2} r={numbers.STEPPER_CIRCLE_RADIUS/2} />
              <text className="mdc-step__icon-text" x={numbers.STEPPER_CIRCLE_RADIUS/2} y="16" textAnchor="middle">
                {step}
              </text>
            </svg>)
          }
        </span>
        <span className="mdc-step__label-fullwidth" onClick={onClick}>
          <span className={classesLabel}>
            {children}
          </span>
          {
            option && (<span className={classesOption}>
              {option}
            </span>)
          }
        </span>
      </span>
      </React.Fragment>
    )
  }
}

StepLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  option: PropTypes.string,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  error: PropTypes.bool,
  step: PropTypes.node.isRequired,
}

StepLabel.defaultProps = {
  active: false,
  error: false,
  completed: false,
}

StepLabel.displayName = 'StepLabel'

export default StepLabel