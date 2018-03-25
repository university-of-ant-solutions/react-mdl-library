import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class Chip extends Component {

  render() {
    const {children, className} = this.props
    const classes = ClassNames('mdc-chip', className)

    return (
      <div className={classes} tabindex="0">
        <div className='mdc-chip__text'>{children}</div>
      </div>
    )
  }
}

Chip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Chip.defaultProps = {
}

Chip.displayName = 'Chip'

export default Chip