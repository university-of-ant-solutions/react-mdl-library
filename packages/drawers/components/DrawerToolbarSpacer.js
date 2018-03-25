import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:drawers:DrawerToolbarSpacer')

class DrawerToolbarSpacer extends React.PureComponent {

  render() {
    debug('render')

    const {className, ...other} = this.props
    const classes = ClassNames('mdc-drawer__toolbar-spacer', className)

    return (
      <div className={classes} {...other}></div>
    )
  }
}

DrawerToolbarSpacer.propTypes = {
  className: PropTypes.string,
}

DrawerToolbarSpacer.defaultProps = {}

DrawerToolbarSpacer.displayName = 'DrawerToolbarSpacer'

export default DrawerToolbarSpacer