import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class Header extends Component {
  
  render() {
    const {children, className} = this.props
    const classes = ClassNames('mdc-layout__header', className)

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}


Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Header.defaultProps = {
}

Header.displayName = 'Header'

export default Header
