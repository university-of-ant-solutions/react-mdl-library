import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:button:Button')

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    debug('render')

    const {children: childrenProp, className, dense, raised, unelevated, stroked, ...other} = this.props
    const classes = ClassNames('mdc-button', {
      'mdc-button--dense': dense,
      'mdc-button--raised': raised,
      'mdc-button--unelevated': unelevated,
      'mdc-button--stroked': stroked,
    }, className)

    const children = React.Children.map(childrenProp, (child, key) => {
      if (child.type && child.type.displayName === 'Icon') {
        let classes = classes = ClassNames('mdc-button__icon', child.props.className)

        return React.cloneElement(child, {
          className: classes,
        })
      }
      return child
    })

    return (
      <button className={classes}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  dense: PropTypes.bool,
  raised: PropTypes.bool,
  unelevated: PropTypes.bool,
  stroked: PropTypes.bool,
}

Button.defaultProps = {
  dense: false,
  raised: false,
  unelevated: false,
  stroked: false,
}

Button.displayName = 'Button'

export default Button