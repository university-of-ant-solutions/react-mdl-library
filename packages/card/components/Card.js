import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class Card extends Component {

  render() {
    const {children, className, style, type: Type, ...other} = this.props
    const classes = ClassNames(
      'mdc-card',
      className,
    )
    return (
      <Type className={classes} style={style} {...other}>
        {children}
      </Type>
    )
  }
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

Card.defaultProps = {
  className: '',
  style: {},
  type: 'div',
}

Card.displayName = 'Card'

export default Card