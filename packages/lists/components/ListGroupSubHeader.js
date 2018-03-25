import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class ListGroupSubHeader extends Component {
  
  render() {
    const {children, className, type: Type} = this.props
    const classes = ClassNames(
      'mdc-list-group__subheader',
      className,
    )

    return (
      <Type className={classes}>
        {children}
      </Type>
    )
  }
}

ListGroupSubHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
}

ListGroupSubHeader.defaultProps = {
  type: 'h3',
}

ListGroupSubHeader.displayName = 'ListGroupSubHeader'

export default ListGroupSubHeader
