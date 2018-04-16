import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:tabs:TabBar')

class TabBar extends Component {
  constructor(props) {
    super(props)

    const links = {}
    let length = 0
    let firstLink = null

    React.Children.map(props.children, (child, key) => {
      if (child.type && child.type.displayName === 'Tab') {
        const k = child.props.href
        links[k] = key
        length++
        if(!firstLink) {
          firstLink = k
        }
      }
    })
    
    this.tabs = []

    this.state = {
      value: props.default,
      links,
      length,
      firstLink,
      translateAmtForActiveTabLeft: 0,
      scaleAmtForActiveTabWidth: 0,
    }
  }

  // https://github.com/material-components/material-components-web/blob/3a1f1eae9d252e65615add7e9cabbe8bc3742412/packages/mdc-tabs/tab-bar/foundation.js#L88
  setValue = (value, cb) => {
    let s = value || this.state.firstLink
    const index = this.state.links[s]
    const activeTab = this.tabs[index]
    const translateAmtForActiveTabLeft = activeTab.getOffsetLeft()
    const scaleAmtForActiveTabWidth = activeTab.getOffsetWidth() / this.nav.offsetWidth
    return this.setState({
      value: s,
      translateAmtForActiveTabLeft,
      scaleAmtForActiveTabWidth,
    }, cb)
  }

  setTab = value => {
    this.setValue(value, () => {
      if (this.props.onChange) {
        this.props.onChange(value)
      }
    })
  }

  registerTab = (value) => {
    const {href} = value.props
    const index = this.state.links[href]
    this.tabs[index] = value
  }

  componentDidMount(){
    this.setValue(this.state.value)
  }

  render() {
    debug('render')

    const {children: childrenProp, className, indicator, iconsWithText, onChange, ...other} = this.props
    const {length, translateAmtForActiveTabLeft, scaleAmtForActiveTabWidth} = this.state
    const classes = ClassNames('mdc-tab-bar', {
      'mdc-tab-bar--icons-with-text': iconsWithText,
    }, className)
    const indicatorClasses = ClassNames('mdc-tab-bar__indicator', indicator)
    // get index
    const index = this.state.value
    const container = []

    const children = React.Children.map(childrenProp, (child, key) => {
      if (!React.isValidElement(child)) {
        return null
      }
      if (child.type && child.type.displayName === 'Tab') {
        let classes = child.props.className
        if(iconsWithText) {
          classes = ClassNames('mdc-tab--with-icon-and-text', classes)
        }

        return React.cloneElement(child, {
          setTab: this.setTab,
          registerTab: this.registerTab,
          selected: index === child.props.href,
          className: classes,
        })
      }
      if (child.type && child.type.displayName === 'TabContainer') {
        if(!child.props.href) {
          container.push(child)
        } else {
          container.push(React.cloneElement(child, {
            selected: index === child.props.href,
          }))
        }
        return null
      }
      return child
    })

    return (
      <React.Fragment>
        <nav className={classes} ref={nav => {
          this.nav = nav
        }} {...other}>
          {children}
          <span className={indicatorClasses} style={{
            transform: `translateX(${translateAmtForActiveTabLeft}px) scale(${scaleAmtForActiveTabWidth}, 1)`,
            visibility: 'visible',
          }}></span>
        </nav>
        {container}
      </React.Fragment>
    )
  }
}

TabBar.propTypes = {
  className: PropTypes.string,
  indicator: PropTypes.string,
  children: PropTypes.node,
  iconsWithText: PropTypes.bool,
  /**
   * Callback fired when the value changes.
   */
  onChange: PropTypes.func,
  default: PropTypes.string,
}

TabBar.defaultProps = {
  iconsWithText: false,
}

TabBar.displayName = 'TabBar'

export default TabBar