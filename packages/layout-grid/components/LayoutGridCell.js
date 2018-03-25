import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:layout-grid:LayoutGridCell')

class LayoutGridCell extends React.PureComponent {

  render() {
    debug('render')

    const {children, className, span, tablet, phone, ...other} = this.props
    const classes = ClassNames('mdc-layout-grid__cell', {
      [`mdc-layout-grid__cell--span-${span}`]: !!span,
      [`mdc-layout-grid__cell--span-${span}-tablet`]: !!tablet,
      [`mdc-layout-grid__cell--span-${span}-phone`]: !!phone,
    }, className)

    return (
      <div className={classes} {...other}>
        {children}
      </div>
    )
  }
}

LayoutGridCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  span: PropTypes.number,
  tablet: PropTypes.number,
  phone: PropTypes.number,
}

LayoutGridCell.defaultProps = {
}

LayoutGridCell.displayName = 'LayoutGridCell'

export default LayoutGridCell