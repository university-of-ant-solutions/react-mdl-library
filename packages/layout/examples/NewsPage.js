import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Toolbar, {ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarSpace} from '../../toolbars'
import List, {ListItem, ListGroup, ListGroupSubHeader} from '../../lists'
import LayoutGrid, {LayoutGridCell, LayoutGridInner} from '../../layout-grid'
import Icon from '../../icon'
import Headline from './Headline'
import data from './data'
import '../../card'

const debug = require('debug')('react-mdl-library:layout:examples:NewsPage')

class NewsPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    debug('render')
    return (
      <div className="demo-content mdc-toolbar-fixed-adjust">
        {/* <nav className="mdc-drawer mdc-drawer--permanent" style={{
          borderRight: 'none',
          backgroundColor: '#F6F6F6',
        }}>
          <ToolbarSpace />
          <ListGroup>
            <ListGroupSubHeader>
              SECTIONS
            </ListGroupSubHeader>
            <List type="nav">
              <ListItem type="a" className="demo-drawer-list-item mdc-list-item--selected mdc-list-item--activated" href="#">
                All
              </ListItem>
              <ListItem type="a" className="demo-drawer-list-item" href="#">
                Cointelegraph
              </ListItem>
              <ListItem type="a" className="demo-drawer-list-item" href="#">
                CCN
              </ListItem>
            </List>

            <hr className="mdc-list-divider" />
          </ListGroup>
        </nav> */}
        <main className="demo-main">
          <ToolbarSpace />
          <LayoutGrid className="mdc-layout-grid-phone">
            <Headline
              title="Top Stories"
              description="Find the latest breaking news and information about popular cryptocurrencies."
            />
            <LayoutGridInner>
              {data.map((d) => (
              <LayoutGridCell span={4} tablet={6} phone={12}>
              <div className="mdc-card">
                <a className="mdc-card__primary-action mdc-ripple-upgraded" href="#">
                  <div className="mdc-card__media mdc-card__media--16-9 demo-card__media demo-card__media--16-9" style={{
                    backgroundImage: `url("${d.media}")`
                  }}></div>
                  <div className="demo-card__primary">
                    <h2 className="demo-card__title mdc-typography--title">{d.title}</h2>
                    <h3 className="demo-card__subtitle mdc-typography--subheading1">by {d.creator.name}</h3>
                  </div>
                  {/* <div className="demo-card__secondary mdc-typography--body1">
                    Visit ten places on our planet that are undergoing the biggest changes today.
                  </div> */}
                </a>
                <div className="mdc-card__actions mdc-card__actions--full-bleed">
                  <a
                    className="mdc-button mdc-card__action mdc-card__action--button demo-card-action"
                    href="#"
                  >
                    Read More
                  </a>
                  <i
                    aria-hidden="true"
                    className="material-icons mdc-card__action--icon"
                  >
                    arrow_forward
                  </i>
                </div>
              </div>
              </LayoutGridCell>
              ))}
            </LayoutGridInner>
          </LayoutGrid>
        </main>
      </div>
    )
  }
}

NewsPage.propTypes = {}

NewsPage.defaultProps = {}

NewsPage.displayName = 'NewsPage'

export default NewsPage