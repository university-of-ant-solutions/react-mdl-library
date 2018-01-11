import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

function List(props) {
  const {children, className, type: Type} = props
  const classes = ClassNames('mdl-list', className)
  return <Type className={classes}>{children}</Type>
}

List.propTypes = {
  className: PropTypes.node,
  children: PropTypes.node,
  type: PropTypes.string,
}

// Specifies the default values for props:
List.defaultProps = {
  type: 'ul',
  className: null,
  children: null,
}

export default List
