import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import './styled/index.scss'

function List(props) {
  const {children, className, type: Type} = props
  const classes = ClassNames('foo-button', className)
  return <Type className={classes}>{children}</Type>
}

List.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
}

// Specifies the default values for props:
List.defaultProps = {
  type: 'ul',
}

export default List
