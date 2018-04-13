import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:flyout:Flyout')

class Flyout extends React.PureComponent {
  
  getAnchorDimensions = () => {
    const anchor = this.props.getAnchor()
    if(anchor){
      return anchor.getBoundingClientRect()
    }
    return {}
  }

  getWindowDimensions = () => {
    return {width: window.innerWidth, height: window.innerHeight}
  }

  componentWillReceiveProps = (nextProps) => {
    // this.handler_(nextProps.open)
    console.log(this.getAnchorDimensions())
    console.log(this.getWindowDimensions())
  }

  componentDidMount() {
    console.log(this.getAnchorDimensions())
    console.log(this.getWindowDimensions())
  }

  render() {
    debug('render')
    const {children, className, open, anchor, ...other} = this.props
    const classes = ClassNames('mdc-flyout', className)
    return (
      <div className={classes} {...other} style={{
        position: 'absolute',
        right: 0,
        top: '44px',
        backgroundColor: '#eee',
        minWidth: '376px', // position
      }}>
        <div style={{
          borderRadius: '8px', // border
          backgroundColor: '#fff',
          border: '1px solid #ccc',
        }}>
          <div className="_5e _qi _3u" style={{
            left: '130px'
          }}>
            <svg width="24" height="24"><path d="M0 0 L12 12 L24 0"></path></svg>
          </div>
          {children}
        </div>
      </div>
    )
  }
}

Flyout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  getAnchor: PropTypes.func,
  open: PropTypes.bool,
}

Flyout.defaultProps = {
  open: false,
}

Flyout.displayName = 'Flyout'

export default Flyout