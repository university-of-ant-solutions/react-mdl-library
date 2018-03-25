import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class GridList extends Component {
  
  render() {
    const {children, className} = this.props
    const classes = ClassNames('mdc-grid-list', className)

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}


GridList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

GridList.defaultProps = {
}

GridList.displayName = 'GridList'

export default GridList
