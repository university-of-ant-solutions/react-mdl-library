import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:drawers:DrawerHeader')

class DrawerHeader extends React.PureComponent {

  render() {
    debug('render')

    const {children, className, ...other} = this.props
    const classes = ClassNames('mdc-drawer__header', className)

    return (
      <header className={classes} {...other}>
        <div className="mdc-drawer__header-content">
          {children}
        </div>
      </header>
    )
  }
}

DrawerHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

DrawerHeader.defaultProps = {}

DrawerHeader.displayName = 'DrawerHeader'

export default DrawerHeader