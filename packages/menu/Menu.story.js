import React from 'react'
import {storiesOf} from '@storybook/react'
import {DocItem} from '../../stories/UIExplorer'
import './index'

storiesOf('! Menu', module)
  .add('with text labels', () => (
    <DocItem
      render={
        <div className="mdc-menu-anchor" style={{
            top: '0px',
            left: '0px'
          }}>
          <button id="menu-button" className="mdc-button mdc-button--raised demo-button demo-button--normal">
            <span>
              Show<span className="demo-button__normal-text"> Menu</span><span className="demo-button__long-text"> From Here Now!</span>
            </span>
          </button>

          <div className="mdc-menu demo-menu--extra-long mdc-menu--open" style={{
              position: 'absolute',
              transformOrigin: 'center top 0px',
              left: '0px',
              top: '0px'
            }} tabindex="-1" id="demo-menu">
            <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
              <li className="mdc-list-item" role="menuitem" tabindex="0">Back</li>
              <li className="mdc-list-item" role="menuitem" tabindex="0">Forward</li>
              <li className="mdc-list-item" role="menuitem" tabindex="0">Reload</li>
              <li className="mdc-list-divider" role="separator"></li>

              <li className="mdc-list-item" role="menuitem" tabindex="0">Save As...</li>
              <li className="mdc-list-item" role="menuitem" tabindex="0">Help</li>
              <span className="demo-menu__long-items">
                <li className="mdc-list-item" role="menuitem" tabindex="0">Settings</li>
                <li className="mdc-list-item" role="menuitem" tabindex="0">Feedback</li>
                <li className="mdc-list-item" role="menuitem" tabindex="0">Options...</li>
                <li className="mdc-list-item" role="menuitem" tabindex="0">Item 1</li>
                <li className="mdc-list-item" role="menuitem" tabindex="0">Item 2</li>
              </span>
              <span className="demo-menu__extra-long-items">
                <li className="mdc-list-item" role="menuitem" tabindex="0">Item 3</li>
                <li className="mdc-list-item" role="menuitem" tabindex="0">Item 4</li>
                <li className="mdc-list-item" role="menuitem" tabindex="0">Item 5</li>
                <li className="mdc-list-item" role="menuitem" tabindex="0">Item 6</li>
                <li className="mdc-list-item" role="menuitem" tabindex="0">Item 7</li>
                <li className="mdc-list-item" role="menuitem" tabindex="0">Item 8</li>
                <li className="mdc-list-item" role="menuitem" tabindex="0">Item 9</li>
              </span>
            </ul>
          </div>
        </div>
      }
    />
  ))
