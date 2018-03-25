import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import isString from 'lodash/isString'

const debug = require('debug')('react-mdl-library:linear-progress:LinearProgress')

class LinearProgress extends React.PureComponent {

  render() {
    debug('render')

    const {children, className, color, style, value, completed, valueBuffer, indeterminate, reversed, ...other} = this.props
    const classes = ClassNames(
      'mdc-linear-progress',
      {'mdc-linear-progress--indeterminate': indeterminate},
      {'mdc-linear-progress--reversed': reversed},
      className,
    )
    let co = ClassNames(
      'mdc-linear-progress__bar-inner',
      color,
    )
    let v = value
    let c = completed
    let vb = valueBuffer || completed
    if(indeterminate) {
      v = completed
      c = completed
    }
    return (
      <div role="progressbar" className={classes} {...other}>
        <div className="mdc-linear-progress__buffering-dots"></div>
        <div className="mdc-linear-progress__buffer" style={{
          transform: `scaleX(${vb/c})`,
        }}></div>
        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{
          transform: `scaleX(${v/c})`,
        }}>
          <span className={co}></span>
        </div>
        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span className="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>
    )
  }
}

LinearProgress.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.number,
  completed: PropTypes.number,
  valueBuffer: PropTypes.number,
  indeterminate: PropTypes.bool,
  reversed: PropTypes.bool,
}

LinearProgress.defaultProps = {
  value: 0,
  completed: 100,
  valueBuffer: 100,
  indeterminate: false,
  reversed: false,
}

LinearProgress.displayName = 'LinearProgress'

export default LinearProgress