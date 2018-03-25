import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:dialog:DialogHeader')

class DialogHeader extends React.PureComponent {

  render() {
    debug('render')

    const {children, className, ...other} = this.props
    const classes = ClassNames('mdc-dialog__header', className)

    return (
      <header className={classes} {...other}>
        {children}
      </header>
    )
  }
}

DialogHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

DialogHeader.defaultProps = {}

DialogHeader.displayName = 'DialogHeader'

export default DialogHeader