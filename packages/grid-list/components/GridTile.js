import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class GridTile extends Component {
  
  render() {
    const {children, className, ...other} = this.props
    const classes = ClassNames('mdc-grid-tile', className)

    return (
      <li className={classes} {...other}>
        {children}
      </li>
    )
  }
}


GridTile.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

GridTile.defaultProps = {
}

GridTile.displayName = 'GridTile'

export default GridTile
