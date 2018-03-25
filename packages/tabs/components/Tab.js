import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import isString from 'lodash/isString'

const debug = require('debug')('react-mdl-library:tabs:Tab')

class Tab extends React.PureComponent {

  onClick = e => {
    if (this.props.href && this.props.href.charAt(0) === '#') {
      e.preventDefault()
      this.props.setTab(this.props.href)
    }
  }

  getOffsetWidth = () => this.root_.offsetWidth

  getOffsetLeft = () => this.root_.offsetLeft

  componentDidMount(){
    this.props.registerTab(this)
  }

  render() {
    debug('render')

    // FIXED ME: declare setTab to fixed bug React does not recognize the `setTab` prop on a DOM element.
    // any better way
    const {children: childrenProp, className, setTab, registerTab, selected, ...other} = this.props
    const classes = ClassNames('mdc-tab', {
      'mdc-tab--active': selected,
    }, className)

    const children = React.Children.map(childrenProp, child => {
      if(isString(child)) {
        return (
          <span className="mdc-tab__icon-text">{child}</span>
        )
      }
      if (!React.isValidElement(child)) {
        return null
      }
      if (child.type && child.type.displayName === 'Icon') {
        return React.cloneElement(child, {
          className: ClassNames('mdc-tab__icon', child.props.className),
        })
      }
      return child
    })

    return (
      <a className={classes} onClick={this.onClick} ref={root_ => {
        this.root_ = root_
      }} {...other}>
        {children}
      </a>
    )
  }
}

Tab.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  setTab: PropTypes.func,
  registerTab: PropTypes.func,
  selected: PropTypes.bool,
  href: PropTypes.string.isRequired,
}

Tab.defaultProps = {}

Tab.displayName = 'Tab'

export default Tab