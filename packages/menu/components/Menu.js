import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const debug = require('debug')('react-mdl-library:menu:Menu')

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    debug('render')

    return (
      <div className="mdc-menu-anchor">
        123
      </div>
    )
  }
}

Menu.propTypes = {}

Menu.defaultProps = {}

Menu.displayName = 'Menu'

export default Menu