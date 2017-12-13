import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {TAB_CLASS, ACTIVE_CLASS} from './constants'

class TabBar extends React.Component {
  render() {
    const {children: childrenProp, setIndex, index, style, className} = this.props

    const classes = ClassNames('mdl-layout__tab-bar', className)

    const children = React.Children.map(childrenProp, child => {
      if (!React.isValidElement(child)) {
        return null
      }
      if (child.type && child.type.displayName === 'Tab') {
        return React.cloneElement(child, {
          setIndex,
          selected: index === child.props.href,
        })
      }
      return child
    })
    return (
      <div className={classes} style={style}>
        {children}
      </div>
    )
  }
}

TabBar.propTypes = {
  setIndex: PropTypes.func,
  index: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

// Specifies the default values for props:
TabBar.defaultProps = {}

TabBar.displayName = 'TabBar'

export default TabBar
