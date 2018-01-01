import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {PANEL_CLASS, ACTIVE_CLASS} from './constants'

class TabContainer extends React.PureComponent {
  render() {
    const {children, href, className, selected} = this.props
    let classes = ClassNames('mdl-tabs__panel', className)
    if (selected) {
      classes = ClassNames(ACTIVE_CLASS, classes)
    }
    return <div className={classes}>{children}</div>
  }
}

TabContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  selected: PropTypes.bool,
  setIndex: PropTypes.func,
}

// Specifies the default values for props:
TabContainer.defaultProps = {
  label: '',
  className: '',
  selected: false,
}

TabContainer.displayName = 'TabContainer'

export default TabContainer
