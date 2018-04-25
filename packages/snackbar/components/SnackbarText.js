import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {cssClasses} from '../constants'

const debug = require('debug')('react-mdl-library:snackbar:components:SnackbarText')

class SnackbarText extends React.PureComponent {
  
  render() {
    debug('render')

    const {children, className} = this.props
    const classes = ClassNames(
      'mdc-snackbar__text',
      className,
    )

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}


SnackbarText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

SnackbarText.defaultProps = {
}

SnackbarText.displayName = 'SnackbarText'

export default SnackbarText
