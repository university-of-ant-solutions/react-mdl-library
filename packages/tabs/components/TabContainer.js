import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import isString from 'lodash/isString'

const debug = require('debug')('react-mdl-library:tabs:TabContainer')

class TabContainer extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    // NOTE: always render when selected === true
    if (this.props.selected !== nextProps.selected || nextProps.selected) {
      return true
    }
    return false
  }

  render() {
    debug('render')

    const {children, className, selected, ...other} = this.props
    const classes = ClassNames('mdc-tab-container', {
      'is-active': selected,
    }, className)

    return (
      <div className={classes} {...other}>
        {children}
      </div>
    )
  }
}

TabContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  selected: PropTypes.bool,
  href: PropTypes.string,
}

TabContainer.defaultProps = {}

TabContainer.displayName = 'TabContainer'

export default TabContainer