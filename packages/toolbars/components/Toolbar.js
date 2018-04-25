import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class Toolbar extends React.PureComponent {
  
  render() {
    const {children, className, fixed} = this.props
    const classes = ClassNames(
      'mdc-toolbar',
      {'mdc-toolbar--fixed': fixed},
      className,
    )

    return (
      <header className={classes}>
        {children}
      </header>
    )
  }
}


Toolbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fixed: PropTypes.bool,
}

Toolbar.defaultProps = {
}

Toolbar.displayName = 'Toolbar'

export default Toolbar
