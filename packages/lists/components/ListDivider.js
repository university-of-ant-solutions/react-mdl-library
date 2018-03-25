import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:drawers:ListDivider')

class ListDivider extends React.PureComponent {

  render() {
    debug('render')

    const {className, ...other} = this.props
    const classes = ClassNames('mdc-list-divider', className)

    return (
      <hr className={classes} {...other} />
    )
  }
}

ListDivider.propTypes = {
  className: PropTypes.string,
}

ListDivider.defaultProps = {}

ListDivider.displayName = 'ListDivider'

export default ListDivider