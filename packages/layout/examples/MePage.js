import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Toolbar, {ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarSpace} from '../../toolbars'
import List, {ListItem, ListGroup, ListGroupSubHeader} from '../../lists'
import LayoutGrid, {LayoutGridCell, LayoutGridInner} from '../../layout-grid'
import Headline from './Headline'

const debug = require('debug')('react-mdl-library:layout:examples:MePage')

class MePage extends Component {
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
              title="Me"
              // description=""
            />
           </LayoutGrid>
        </main>
      </div>
    )
  }
}

MePage.propTypes = {}

MePage.defaultProps = {}

MePage.displayName = 'MePage'

export default MePage