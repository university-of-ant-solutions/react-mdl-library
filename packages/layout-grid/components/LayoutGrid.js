import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:layout-grid:LayoutGrid')

class LayoutGrid extends React.PureComponent {

  render() {
    debug('render')

    const {children, className, ...other} = this.props
    const classes = ClassNames('mdc-layout-grid', {
      // 'mdc-tab--active': selected,
    }, className)

    return (
      <div className={classes} {...other}>
        {children}
      </div>
    )
  }
}

LayoutGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

LayoutGrid.defaultProps = {}

LayoutGrid.displayName = 'LayoutGrid'

export default LayoutGrid