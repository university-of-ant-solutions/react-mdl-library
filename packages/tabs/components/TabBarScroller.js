import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class TabBarScroller extends Component {
  
  render() {
    const {children, className} = this.props
    const classes = ClassNames('mdc-tab-bar-scroller', className)
    return (
      <div className={classes}>
        <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back mdc-tab-bar-scroller__indicator--enabled">
          <a className="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll back button">
            navigate_before
          </a>
        </div>
        <div className="mdc-tab-bar-scroller__scroll-frame">
          <nav id="scrollable-tab-bar" className="mdc-tab-bar mdc-tab-bar-scroller__scroll-frame__tabs mdc-tab-bar-upgraded" style={{
            transform: 'translateX(-280px)'}}
          >
            <a className="mdc-tab mdc-tab--active mdc-ripple-upgraded" href="#one">Item One</a>
            <a className="mdc-tab mdc-ripple-upgraded" href="#two">Item Two</a>
            <a className="mdc-tab mdc-ripple-upgraded" href="#three">Item Three</a>
            <a className="mdc-tab mdc-ripple-upgraded" href="#four">Item Four</a>
            <a className="mdc-tab mdc-ripple-upgraded" href="#five">Item Five</a>
            <a className="mdc-tab mdc-ripple-upgraded" href="#six">Item Six</a>
            <a className="mdc-tab mdc-ripple-upgraded" href="#seven">Item Seven</a>
            <a className="mdc-tab mdc-ripple-upgraded" href="#eight">Item Eight</a>
            <a className="mdc-tab mdc-ripple-upgraded" href="#nine">Item Nine</a>
            <span className="mdc-tab-bar__indicator"></span>
          </nav>
        </div>
        <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward">
          <a className="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll forward button">
            navigate_next
          </a>
        </div>
      </div>
    )
  }
}


TabBarScroller.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

TabBarScroller.defaultProps = {
}

TabBarScroller.displayName = 'TabBarScroller'

export default TabBarScroller
