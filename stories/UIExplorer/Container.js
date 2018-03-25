import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class Container extends Component {
  
  render() {
    const {children, className} = this.props
    const classes = ClassNames(
      'ui-container',
      className,
    )

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}


Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Container.defaultProps = {
}

Container.displayName = 'Container'

export default Container
