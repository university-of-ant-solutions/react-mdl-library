import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Drawer, { DrawerHeader, DrawerToolbarSpacer } from '../index'
import List, {ListItem, ListGroup, ListGroupSubHeader, ListDivider} from '../../lists'
import Icon from '../../icon'
import {DocItem} from '../../../stories/UIExplorer'

const debug = require('debug')('react-mdl-library:drawers:examples:PersistentDrawer')

class PersistentDrawer extends Component {
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

  toggleDrawer = (evt) => {
    evt.preventDefault()
    this.setState(
      prevState => ({
        open: !prevState.open,
      }),
    )
  }

  render() {
    debug('render')

    const { open } = this.state

    return (
      // <DocItem
      // render={
        <div className="mdc-typography demo-body__persistent-drawer" data-gr-c-s-loaded="true" cz-shortcut-listen="true">
          <Drawer persistent open={open} className="demo-drawer">
            <DrawerToolbarSpacer className="mdc-theme--text-primary-on-primary mdc-theme--secondary-bg" />
            <ListGroup>
              <ListGroupSubHeader>
                SECTIONS
              </ListGroupSubHeader>
              <List type="nav">
                <ListItem type="a" className="demo-drawer-list-item" href="#">
                  <Icon aria-hidden="true">inbox</Icon>Inbox
                </ListItem>
                <ListItem type="a" className="demo-drawer-list-item mdc-list-item--selected mdc-list-item--activated" href="#">
                  <Icon aria-hidden="true">star</Icon>Star
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
          <div className="demo-content__persistent-drawer">
            <header className="mdc-toolbar mdc-elevation--z4">
              <div className="mdc-toolbar__row">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start mdc-theme--text-primary-on-primary mdc-theme--primary-bg">
                  <Icon type="a" href="#" className="mdc-toolbar__menu-icon" onClick={this.toggleDrawer}>menu</Icon>
                  <span className="mdc-toolbar__title catalog-title">Persistent Drawer</span>
                </section>
              </div>
            </header>
            <main className="demo-main">
              <a className="mdc-theme--primary-bg mdc-theme--text-primary-on-primary" href="#" aria-label="Notifications" alt="Notifications">notifications</a>
              <h1 className="mdc-typography--display1">Persistent Drawer</h1>
              <p className="mdc-typography--body1">Click the menu icon above to open and close the drawer.</p>
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
              <button type="button" className="mdc-button mdc-button--stroked mdc-button--dense demo-toolbar-example-heading__rtl-toggle-button">Toggle RTL</button>
            </main>
          </div>
        </div>
      // }/>
    )
  }
}

PersistentDrawer.propTypes = {}

PersistentDrawer.defaultProps = {}

PersistentDrawer.displayName = 'PersistentDrawer'

export default PersistentDrawer