import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class ChipSet extends Component {

  render() {
    const {children, className} = this.props
    const classes = ClassNames('mdc-chip-set', className)

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

ChipSet.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

ChipSet.defaultProps = {
}

ChipSet.displayName = 'ChipSet'

export default ChipSet
