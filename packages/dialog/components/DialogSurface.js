import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:dialog:DialogSurface')

class DialogSurface extends React.PureComponent {

  render() {
    debug('render')

    const {children, className, ...other} = this.props
    const classes = ClassNames('mdc-dialog__surface', className)

    return (
      <div className={classes} {...other}>
        {children}
      </div>
    )
  }
}

DialogSurface.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

DialogSurface.defaultProps = {}

DialogSurface.displayName = 'DialogSurface'

export default DialogSurface