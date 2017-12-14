import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Router from 'next/router'
import {UPGRADED_CLASS} from './constants'

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`)
}

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    if (props.value) {
      this.state = {
        value: props.value,
      }
    } else {
      this.state = {
        value: props.default,
      }
    }
  }

  setValue = value => {
    if (this.props.onChange) {
      return this.props.onChange(value)
    }
    return this.setState({value})
  }

  render() {
    const {children: childrenProp, className} = this.props

    const classes = ClassNames('mdl-tabs', className)

    // get index
    const index = this.props.value ? this.props.value : this.state.value

    const children = React.Children.map(childrenProp, child => {
      if (!React.isValidElement(child)) {
        return null
      }
      if (child.type && child.type.displayName === 'TabBar') {
        return React.cloneElement(child, {
          setIndex: this.setValue,
          index,
        })
      }
      if (child.type && child.type.displayName === 'TabContainer') {
        return React.cloneElement(child, {
          selected: index === child.props.value,
        })
      }
      return child
    })
    return <div className={classes}>{children}</div>
  }
}

Tabs.propTypes = {
  className: PropTypes.string,
  default: PropTypes.string,
  value: PropTypes.string,
  /**
   * Callback fired when the value changes.
   *
   * @param {number} value We default to the index of the child
   */
  onChange: PropTypes.func,
}

// Specifies the default values for props:
Tabs.defaultProps = {
  className: '',
}

Tabs.displayName = 'Tabs'

export default Tabs
