import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class ToolbarSpace extends React.PureComponent {

  render() {
    const {className} = this.props
    const classes = ClassNames('mdc-toolbar__space', className)

    return (
      <div className={classes}></div>
    )
  }
}

ToolbarSpace.propTypes = {
  className: PropTypes.string,
}

ToolbarSpace.defaultProps = {
}

ToolbarSpace.displayName = 'ToolbarSpace'

export default ToolbarSpace