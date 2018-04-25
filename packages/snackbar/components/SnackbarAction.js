import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {cssClasses} from '../constants'

const debug = require('debug')('react-mdl-library:snackbar:components:SnackbarAction')

class SnackbarAction extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    debug('render')
    const {children: childrenProp, className} = this.props
    const classes = ClassNames(
      'mdc-snackbar__action-wrapper',
      className,
    )

    const children = React.Children.map(childrenProp, child => {
      if (child.type && child.type.displayName === 'Button') {
        return React.cloneElement(child, {
          className: ClassNames('mdc-snackbar__action-button', child.props.className),
        })
      }
      return child
    })

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}


SnackbarAction.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

SnackbarAction.defaultProps = {
}

SnackbarAction.displayName = 'SnackbarAction'

export default SnackbarAction
