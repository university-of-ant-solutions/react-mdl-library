import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:layout-grid:LayoutGridInner')

class LayoutGridInner extends React.PureComponent {

  render() {
    debug('render')

    const {children, className, ...other} = this.props
    const classes = ClassNames('mdc-layout-grid__inner', {
      // 'mdc-tab--active': selected,
    }, className)

    return (
      <div className={classes} {...other}>
        {children}
      </div>
    )
  }
}

LayoutGridInner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

LayoutGridInner.defaultProps = {}

LayoutGridInner.displayName = 'LayoutGridInner'

export default LayoutGridInner