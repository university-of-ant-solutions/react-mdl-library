import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import TabBar, {Tab} from '../index'
import {DocItem} from '../../../stories/UIExplorer'

const debug = require('debug')('react-mdl-library:drawers:examples:PermanentDrawerBelowToolbar')

class PermanentDrawerBelowToolbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    debug('render')
    return (
      <DocItem
      render={
      <div className="mdc-typography demo-body__permanent-drawer-below-toolbar" data-gr-c-s-loaded="true" cz-shortcut-listen="true">
        <header className="mdc-toolbar mdc-toolbar--fixed">
          <div className="mdc-toolbar__row">
            <section className="mdc-toolbar__section mdc-toolbar__section--align-start mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
              <span className="mdc-toolbar__title catalog-title">Permanent Drawer Below Toolbar</span>
            </section>
          </div>
        </header>

        <div className="demo-content__permanent-drawer-below-toolbar mdc-toolbar-fixed-adjust">
          <nav id="demo-drawer" className="mdc-drawer mdc-drawer--permanent demo-drawer">
            <div className="mdc-list-group">
              <nav className="mdc-list">
                <a className="mdc-list-item mdc-list-item--selected demo-drawer-list-item" href="#">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>Inbox
                </a>
                <a className="mdc-list-item demo-drawer-list-item" href="#">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>Star
                </a>
                <a className="mdc-list-item demo-drawer-list-item" href="#">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>Sent Mail
                </a>
                <a className="mdc-list-item demo-drawer-list-item" href="#">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>Drafts
                </a>
              </nav>

              <hr className="mdc-list-divider" />

              <nav className="mdc-list">
                <a className="mdc-list-item demo-drawer-list-item" href="#">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">email</i>All Mail
                </a>
                <a className="mdc-list-item demo-drawer-list-item" href="#">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">delete</i>Trash
                </a>
                <a className="mdc-list-item demo-drawer-list-item" href="#">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">report</i>Spam
                </a>
              </nav>
            </div>
          </nav>
          <main className="demo-main">
            <h1 className="mdc-typography--display1">Permanent Drawer</h1>
            <p className="mdc-typography--body1">It sits to the left of this content.</p>

            <div id="demo-radio-buttons">
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
      </div>
      }/>
    )
  }
}

PermanentDrawerBelowToolbar.propTypes = {}

PermanentDrawerBelowToolbar.defaultProps = {}

PermanentDrawerBelowToolbar.displayName = 'PermanentDrawerBelowToolbar'

export default PermanentDrawerBelowToolbar