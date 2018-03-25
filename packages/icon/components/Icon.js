import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class Icon extends Component {

  render() {
    const {children, className, style, type: Type, ...other} = this.props
    const classes = ClassNames(
      'material-icons',
      className,
    )
    return (
      <Type className={classes} style={style} {...other}>
        {children}
      </Type>
    )
  }
}

Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
}

Icon.defaultProps = {
  className: '',
  style: {},
  type: 'i',
}

Icon.displayName = 'Icon'

export default Icon