import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:dialog:DialogBody')

class DialogBody extends React.PureComponent {

  render() {
    debug('render')

    const {children, className, ...other} = this.props
    const classes = ClassNames('mdc-dialog__body', className)

    return (
      <section className={classes} {...other}>
        {children}
      </section>
    )
  }
}

DialogBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

DialogBody.defaultProps = {}

DialogBody.displayName = 'DialogBody'

export default DialogBody