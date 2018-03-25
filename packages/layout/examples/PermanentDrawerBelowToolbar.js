import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Dialog, {DialogFooter, DialogHeader, DialogBody, DialogSurface} from '../../dialog'
import Toolbar, {ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarSpace} from '../../toolbars'
import List, {ListItem, ListGroup, ListGroupSubHeader, ListDivider} from '../../lists'
import TabBar, {Tab} from '../../tabs'
import Drawer, { DrawerHeader } from '../../drawers'
import Icon from '../../icon'
import Layout from '../index'
import HomePage from './HomePage'
import ReportsPage from './ReportsPage'
import NewsPage from './NewsPage'
import MePage from './MePage'
import '../../typography'

const debug = require('debug')('react-mdl-library:layout:examples:PermanentDrawerBelowToolbar')

class PermanentDrawerBelowToolbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: false,
      page: '#home',
      open: false,
    }
  }

  setValue = value => {
    return this.setState({
      value
    })
  }

  setPage_ = page => {
    return this.setState({
      page
    })
  }

  open = () => {
    this.setValue(true)
  }

  close = () => {
    this.setValue(false)
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

    const { value, page, open } = this.state
    return (
      <Layout className="mdc-typography">
      <Toolbar fixed>
        <ToolbarRow>
          <ToolbarSection start>
            <Icon type="a" href="#" className="mdc-toolbar__menu-icon" onClick={this.openState}>menu</Icon>
            <ToolbarTitle>
            <div className="header-logo">
              <div className="logo" style={{
                backgroundImage: 'url(http://www.fiftyline.com/favicon.png)',
                backgroundPosition: 'left center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                height: '24px',
                width: '24px',
              }}>
                {/* <a href="/" data-g-category="navigation" data-g-action="click" data-g-label="logo" target="_self">Fiftyline</a> */}
              </div>
            </div>
            </ToolbarTitle>
          </ToolbarSection>
          <ToolbarSection end role="toolbar">
            <Icon type='a' href='#' className="mdc-toolbar__icon" aria-label="Notifications" alt="Notifications">notifications</Icon>
            <button className="mdc-toolbar__icon mdc-button" style={{
              height: '48px',
            }} onClick={this.open}>
              Signin
            </button>
          </ToolbarSection>
        </ToolbarRow>
        <ToolbarRow style={{
          minHeight: '48px',
        }}>
          <ToolbarSection style={{
            padding: '0px',
          }}>
            <TabBar default='#home' onChange={this.setPage_}>
              <Tab href="#home">
                Home
              </Tab>
              <Tab href="#reports">
                Reports
              </Tab>
              <Tab href="#news">
                News
              </Tab>
              <Tab href="#me">
                Me
              </Tab>
            </TabBar>
          </ToolbarSection>
        </ToolbarRow>
      </Toolbar>
      {page === '#home' && <HomePage />}
      {page === '#reports' && <ReportsPage />}
      {page === '#news' && <NewsPage />}
      {page === '#me' && <MePage />}
      <Drawer temporary open={open} className="demo-drawer" onClick={this.closeState}>
        <DrawerHeader>
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
      <Dialog open={value}>
        <DialogSurface className="mdc-theme--primary-bg">
          <DialogHeader>
            <h2 className="mdc-dialog__header__title">
              Are you happy?
            </h2>
          </DialogHeader>
          <DialogBody>
            Please check the left and right side of this element for fun.
          </DialogBody>
          <DialogFooter>
            <button type="button" onClick={this.close} className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel mdc-ripple-upgraded">Cancel</button>
            <button type="button" onClick={this.close} className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept mdc-ripple-upgraded">Continue</button>
          </DialogFooter>
        </DialogSurface>
      </Dialog>
    </Layout>
    )
  }
}

PermanentDrawerBelowToolbar.propTypes = {}

PermanentDrawerBelowToolbar.defaultProps = {}

PermanentDrawerBelowToolbar.displayName = 'PermanentDrawerBelowToolbar'

export default PermanentDrawerBelowToolbar