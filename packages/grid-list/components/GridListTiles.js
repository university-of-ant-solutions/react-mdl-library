import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class GridListTiles extends Component {
  
  render() {
    const {children, className} = this.props
    const classes = ClassNames('mdc-grid-list__tiles', className)

    return (
      <ul className={classes}>
        {children}
      </ul>
    )
  }
}


GridListTiles.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

GridListTiles.defaultProps = {
}

GridListTiles.displayName = 'GridListTiles'

export default GridListTiles
