import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class Main extends Component {
  
  render() {
    const {children, className} = this.props
    const classes = ClassNames('mdc-layout__main', className)

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}


Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Main.defaultProps = {
}

Main.displayName = 'Main'

export default Main
