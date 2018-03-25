import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class ListGroup extends Component {
  
  render() {
    const {children, className} = this.props
    const classes = ClassNames(
      'mdc-list-group',
      className,
    )

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}


ListGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

ListGroup.defaultProps = {
}

ListGroup.displayName = 'ListGroup'

export default ListGroup
