import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Toolbar, {ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarSpace} from '../../toolbars'
import LayoutGrid, {LayoutGridCell, LayoutGridInner} from '../../layout-grid'
import Headline from './Headline'

const debug = require('debug')('react-mdl-library:layout:examples:HomePage')

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    debug('render')
    return (
      <div className="demo-content mdc-toolbar-fixed-adjust">
        <main className="demo-main">
          <ToolbarSpace />
          <LayoutGrid className="mdc-layout-grid-phone">
            <Headline
              title="Markets"
              description="Prices and charts for all popular cryptocurrencies."
            />
           </LayoutGrid>
        </main>
      </div>
    )
  }
}

HomePage.propTypes = {}

HomePage.defaultProps = {}

HomePage.displayName = 'HomePage'

export default HomePage