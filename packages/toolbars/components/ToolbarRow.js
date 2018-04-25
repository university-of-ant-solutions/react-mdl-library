import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class ToolbarRow extends React.PureComponent {

  render() {
    const {children, className, ...other} = this.props
    const classes = ClassNames('mdc-toolbar__row', className)

    return (
      <div className={classes} {...other}>
        {children}
      </div>
    )
  }
}

ToolbarRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

ToolbarRow.defaultProps = {
}

ToolbarRow.displayName = 'ToolbarRow'

export default ToolbarRow