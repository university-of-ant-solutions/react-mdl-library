import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:steppers:StepContent')

class StepContent extends React.PureComponent {

  render() {
    debug('render')

    const {children: childrenProp, className, active, setCompleted, setValue, setError, ...other} = this.props
    const classes = ClassNames('mdc-step__content', className)
    
    const classesContent = ClassNames('mdc-step__content-default j272', {
      'mdc-step__content-active': active,
    })

    let children = React.Children.only(childrenProp)
    children = React.cloneElement(children, {
      setError,
      setCompleted,
      setValue,
    })

    return (
      <div className={classes} {...other}>
        <div className={classesContent}>
          {children}
        </div>
      </div>
    )
  }
}

StepContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
}

StepContent.defaultProps = {
  active: false,
}

StepContent.displayName = 'StepContent'

export default StepContent