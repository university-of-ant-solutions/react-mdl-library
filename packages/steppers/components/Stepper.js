import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:steppers:Stepper')

class Stepper extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      active: props.active || 1,
    }
  }

  render() {
    debug('render')

    const {children: childrenProp, className, vertical, active, ...other} = this.props

    const classes = ClassNames('mdc-stepper', {
      'mdc-stepper--vertical': vertical,
    }, className)
    const {length} = childrenProp
    const children = React.Children.map(childrenProp, (child, key) => {
      if (!React.isValidElement(child)) {
        return null
      }
      if (child.type && child.type.displayName === 'Step') {
        return React.cloneElement(child, {
          active: active === child.props.step,
          connector: key + 1 < length,
        })
      }

      return React.cloneElement(child, {
        active: active === child.props.step,
      })
      // return child
    })

    return (
      <div className={classes} {...other}>
        {children}
      </div>
    )
  }
}

Stepper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  vertical: PropTypes.bool,
}

Stepper.defaultProps = {
  vertical: false,
}

Stepper.displayName = 'Stepper'

export default Stepper