import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class ToolbarTitle extends React.PureComponent {

  render() {
    const {children, className} = this.props
    const classes = ClassNames('mdc-toolbar__title', className)

    return (
      <span className={classes}>
        {children}
      </span>
    )
  }
}

ToolbarTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

ToolbarTitle.defaultProps = {
}

ToolbarTitle.displayName = 'ToolbarTitle'

export default ToolbarTitle