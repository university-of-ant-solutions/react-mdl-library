import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import './styled/index.scss'

function Layout(props) {
  const {children, className} = props
  const classes = ClassNames('foo-button app', className)
  return children
  /**
  return (
  <div className={classes}>
      <div className="OFyC1e">
        <div className="u5oEgd">
          Temporary Drawer
        </div>
      </div>
      <div className="AOq4tb Wxeofe">
        <div className="rDQqN">
          HEADER
        </div>
      </div>
      <div className="T4LgNb O1bNWe">
        <div className="DAbEod" role="main">
          <div className="pWgqe"></div>
          <content>
            {children}
          </content>
        </div>
      </div>
  </div>
  )
  */
}

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

// Specifies the default values for props:
Layout.defaultProps = {}

export default Layout
