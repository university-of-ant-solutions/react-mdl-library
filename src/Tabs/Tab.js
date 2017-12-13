import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {TAB_CLASS, ACTIVE_CLASS} from './constants'

const debug = require('debug')('react-mdl-library:Tabs:Tab')

class Tab extends React.PureComponent {
  onClick = e => {
    if (this.props.href.charAt(0) === '#') {
      e.preventDefault()
      this.props.setIndex(this.props.href)
    }
  }

  render() {
    const {children, href, className, selected} = this.props

    debug(`render ${href}`)

    let classes = ClassNames('mdl-layout__tab', className)

    if (selected) {
      classes = ClassNames(classes, ACTIVE_CLASS)
    }
    return (
      <a href={href} onClick={this.onClick} className={classes}>
        {children}
      </a>
    )
  }
}

Tab.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  selected: PropTypes.bool,
  setIndex: PropTypes.func,
}

// Specifies the default values for props:
Tab.defaultProps = {
  children: '',
  href: '',
  className: '',
  selected: false,
}

Tab.displayName = 'Tab'

export default Tab
