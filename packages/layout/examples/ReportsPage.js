import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Icon from '../../icon'
import Toolbar, {ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarSpace} from '../../toolbars'
import List, {ListItem, ListGroup, ListGroupSubHeader} from '../../lists'

const debug = require('debug')('react-mdl-library:layout:examples:ReportsPage')

class ReportsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    debug('render')
    return (
      <div className="demo-content mdc-toolbar-fixed-adjust">
        <nav id="demo-drawer" className="mdc-drawer mdc-drawer--permanent demo-drawer" style={{
          borderRight: 'none',
          backgroundColor: '#F6F6F6',
        }}>
          <ToolbarSpace />
          <ListGroup>
            <ListGroupSubHeader>
              SECTIONS
            </ListGroupSubHeader>
            <List type="nav">
              <ListItem type="a" className="demo-drawer-list-item" href="#">
                <Icon aria-hidden="true">trending_up</Icon>Top Coins
              </ListItem>
              <ListItem type="a" className="demo-drawer-list-item mdc-list-item--selected mdc-list-item--activated" href="#">
                <Icon aria-hidden="true">insert_chart</Icon>Analysis
              </ListItem>


              {/* <ListItem type="a" className="demo-drawer-list-item" href="#">
                <Icon aria-hidden="true">send</Icon>Sent Mail
              </ListItem>
              <ListItem type="a" className="demo-drawer-list-item" href="#">
                <Icon aria-hidden="true">drafts</Icon>Drafts
              </ListItem> */}
            </List>

            <hr className="mdc-list-divider" />
            
            {/* 
            <List>
              <ListItem type="a" className="demo-drawer-list-item" href="#">
                <Icon aria-hidden="true">email</Icon>All Mail
              </ListItem>
              <ListItem type="a" className="demo-drawer-list-item" href="#">
                <Icon aria-hidden="true">delete</Icon>Trash
              </ListItem>
              <ListItem type="a" className="demo-drawer-list-item" href="#">
                <Icon aria-hidden="true">report</Icon>Spam
              </ListItem>
            </List> */}
          </ListGroup>
        </nav>
        <main className="demo-main">
          <ToolbarSpace />
          <h3 className="mdc-typography--display1">ReportsPage</h3>

          <h4 className="mdc-typography--display1">Permanent Drawer</h4>
          <p className="mdc-typography--body1">It sits to the left of this content.</p>

          <div id="demo-radio-buttons">
            <div className="mdc-form-field">
              <div className="mdc-radio">
                <input className="mdc-radio__native-control" type="radio" id="theme-radio-default" name="theme" checked />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label for="theme-radio-default">Default</label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-radio">
                <input className="mdc-radio__native-control" type="radio" id="theme-radio-custom" name="theme" />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label for="theme-radio-custom">Custom Theme</label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-radio">
                <input className="mdc-radio__native-control" type="radio" id="theme-radio-accessible" name="theme" />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label for="theme-radio-accessible">Accessible Theme</label>
            </div>
          </div>

          <div className="extra-content-wrapper">
            <button type="button" className="mdc-button mdc-button--stroked mdc-button--dense demo-toolbar-example-heading__rtl-toggle-button">Toggle RTL</button>
          </div>
          <div className="extra-content-wrapper">
            <button id="toggle-wide" className="mdc-button mdc-button--stroked mdc-button--dense">Toggle extra-wide content</button>
            <div id="extra-wide-content" className="mdc-elevation--z2">&nbsp;</div>
          </div>
          <div className="extra-content-wrapper">
            <button id="toggle-tall" className="mdc-button mdc-button--stroked mdc-button--dense">Toggle extra-tall content</button>
            <div id="extra-tall-content" className="mdc-elevation--z2">&nbsp;</div>
          </div>
        </main>
      </div>
    )
  }
}

ReportsPage.propTypes = {}

ReportsPage.defaultProps = {}

ReportsPage.displayName = 'ReportsPage'

export default ReportsPage