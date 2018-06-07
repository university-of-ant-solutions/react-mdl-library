import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import isObject from 'lodash/isObject'

const debug = require('debug')('react-mdl-library:steppers:Step')

function noob() {}

class Step extends React.PureComponent {

  state = {
    error: false,
    completed: false,
  }

  setError = (error = true) => {
    return this.setState({
      error,
    })
  }

  setCompleted = (completed = true) => {
    return this.setState({
      completed,
    })
  }

  setValue = (value, cb = noob) => {
    if(isObject(value)) {
      this.setState(value, cb)
    } else {
      console.warn('value must be object')
    }
  }

  render() {
    debug(`render ${this.props.step}`)

    const {children: childrenProp, className, active, connector, step, ...other} = this.props
    const {error, completed} = this.state
    const classes = ClassNames('mdc-step', className)

    const children = React.Children.map(childrenProp, child => {
      if (!React.isValidElement(child)) {
        return null
      }
      if (child.type && child.type.displayName === 'StepLabel') {
        return React.cloneElement(child, {
          error,
          step,
          active,
          completed,
        })
      }
      if (child.type && child.type.displayName === 'StepContent') {
        return React.cloneElement(child, {
          active,
          setError: this.setError,
          setCompleted: this.setCompleted,
          setValue: this.setValue,
        })
      }
      return child
    })

    return (
      <div className={classes} {...other}>
        {children}
        {connector && (<div className="j241 j243">
          <span className="j245 j247"></span>
        </div>)}
      </div>
    )
  }
}

Step.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  step: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  completed: PropTypes.bool,
  connector: PropTypes.bool,
}

Step.defaultProps = {
  active: false,
  completed: false,
  connector: true,
}

Step.displayName = 'Step'

export default Step