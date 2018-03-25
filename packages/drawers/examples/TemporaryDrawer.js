import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Drawer, { DrawerHeader } from '../index'
import List, {ListItem, ListGroup, ListGroupSubHeader, ListDivider} from '../../lists'
import Toolbar, {ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarSpace} from '../../toolbars'
import Icon from '../../icon'
import {DocItem} from '../../../stories/UIExplorer'

const debug = require('debug')('react-mdl-library:drawers:examples:TemporaryDrawer')

class TemporaryDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  openState = (evt) => {
    evt.preventDefault()
    this.setState({
      open: true,
    })
  }

  closeState = (evt) => {
    evt.preventDefault()
    this.setState({
      open: false,
    })
  }

  render() {
    debug('render')

    const { open } = this.state
    return (
      // <DocItem
      // render={
        <div className="mdc-typography demo-body" data-gr-c-s-loaded="true" cz-shortcut-listen="true">
          <Toolbar fixed>
            <ToolbarRow>
              <ToolbarSection start className="mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
                <Icon type="a" href="#" className="mdc-toolbar__menu-icon" onClick={this.openState}>menu</Icon>
                <ToolbarTitle>Temporary Drawer</ToolbarTitle>
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>
          <Drawer temporary open={open} className="demo-drawer" onClick={this.closeState}>
            <DrawerHeader className="mdc-theme--text-primary-on-primary mdc-theme--secondary-bg">
              Header here
            </DrawerHeader>
            <ListGroup className="mdc-drawer__content">
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

                <ListItem type="a" className="demo-drawer-list-item" href="#">
                  <Icon aria-hidden="true">send</Icon>Sent Mail
                </ListItem>
                <ListItem type="a" className="demo-drawer-list-item" href="#">
                  <Icon aria-hidden="true">drafts</Icon>Drafts
                </ListItem>
              </List>

              <ListDivider />

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
              </List>
            </ListGroup>
          </Drawer>
          <main className="demo-main mdc-toolbar-fixed-adjust">
            <a className="mdc-theme--primary-bg mdc-theme--text-primary-on-primary" href="#" aria-label="Notifications" alt="Notifications">notifications</a>
            <h1 className="mdc-typography--display1">Temporary Drawer</h1>
            <p className="mdc-typography--body1">Click the menu icon above to open.</p>
            <div id="demo-radio-buttons" className="theme-radio-buttons">
              <div className="mdc-form-field">
                <div className="mdc-radio">
                  <input className="mdc-radio__native-control" type="radio" id="theme-radio-default" name="theme" checked="" />
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
          </main>
        </div>
      // }/>
    )
  }
}

TemporaryDrawer.propTypes = {}

TemporaryDrawer.defaultProps = {}

TemporaryDrawer.displayName = 'TemporaryDrawer'

export default TemporaryDrawer