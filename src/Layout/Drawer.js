import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:Drawer:Drawer')

class Drawer extends React.PureComponent {
  closeDrawer = evt => {
    evt.preventDefault()
    if (this.props.close) {
      this.props.close()
    }
  }

  // componentWillReceiveProps = (nextProps) => {
  //   console.log(nextProps, 'componentWillReceiveProps')
  // }

  render() {
    const {children, className, title, style, styleBackdrop, show} = this.props
    let classesDrawer = ClassNames('mdl-layout__drawer', className)
    let classesObfuscator = ClassNames('mdl-layout__obfuscator')

    if (show) {
      classesDrawer = ClassNames('is-visible', classesDrawer)
      classesObfuscator = ClassNames('is-visible', classesObfuscator)
    }
    debug('render')

    return [
      <div key={0} className={classesDrawer} style={style}>
        <span className="mdl-layout-title">{title}</span>
        {children}
      </div>,
      <div
        key={1}
        className={classesObfuscator}
        onClick={this.closeDrawer}
        style={styleBackdrop}
      />,
    ]
  }
}

Drawer.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  styleBackdrop: PropTypes.object,
  show: PropTypes.bool,
  close: PropTypes.func,
}

Drawer.defaultProps = {
  className: '',
  title: '',
  style: {},
  styleBackdrop: {},
  show: false,
}

export default Drawer
