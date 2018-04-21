import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class List extends Component {
  
  render() {
    const {children, className, twoLine, dense, avatar,  type: Type} = this.props
    const classes = ClassNames(
      'mdc-list',
      {'mdc-list--two-line': twoLine},
      {'mdc-list--dense': dense},
      {'mdc-list--avatar-list': avatar},
      className,
    )

    return (
      <Type className={classes}>
        {children}
      </Type>
    )
  }
}


List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  twoLine: PropTypes.bool,
  dense: PropTypes.bool,
  avatar: PropTypes.bool,
  type: PropTypes.string,
}

List.defaultProps = {
  twoLine: false,
  dense: false,
  avatar: false,
  type: 'ul',
}

List.displayName = 'List'

export default List
