import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:dialog:DialogFooter')

class DialogFooter extends React.PureComponent {

  render() {
    debug('render')

    const {children, className, ...other} = this.props
    const classes = ClassNames('mdc-dialog__footer', className)

    return (
      <footer className={classes} {...other}>
        {children}
      </footer>
    )
  }
}

DialogFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

DialogFooter.defaultProps = {}

DialogFooter.displayName = 'DialogFooter'

export default DialogFooter