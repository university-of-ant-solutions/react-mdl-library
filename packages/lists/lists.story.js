import React from 'react'
import {storiesOf} from '@storybook/react'
import List, {ListItem, ListGroup, ListGroupSubHeader} from './index'
import {DocItem} from '../../stories/UIExplorer'

storiesOf('! Lists', module)
  .add('single line list', () => (
    <DocItem
      render={
        <List>
          <ListItem>Single-line item</ListItem>
          <ListItem>Single-line item</ListItem>
          <ListItem>Single-line item</ListItem>
        </List>
      }
    />
  ))

  .add('two line list', () => (
    <DocItem
      render={
        <List twoLine>
          <ListItem
            primary='First-line text'
            secondary='Second-line text'
          ></ListItem>
          <ListItem
            primary='First-line text'
            secondary='Second-line text'
          ></ListItem>
          <ListItem
            primary='First-line text'
            secondary='Second-line text'
          ></ListItem>
        </List>
      }
    />
  ))

  .add('list groups', () => (
    <DocItem
      render={
        <ListGroup>
          <ListGroupSubHeader>List 1</ListGroupSubHeader>
          <List>
            <ListItem>line item</ListItem>
            <ListItem>line item</ListItem>
            <ListItem>line item</ListItem>
          </List>

          <ListGroupSubHeader>List 2</ListGroupSubHeader>
          <List>
            <ListItem>line item</ListItem>
            <ListItem>line item</ListItem>
            <ListItem>line item</ListItem>
          </List>
        </ListGroup>
      }
    />
  ))

  .add('list dividers', () => (
    <DocItem
      render={
        <ListGroup>
          <ListItem>Item 1 - Division 1</ListItem>
          <ListItem>Item 2 - Division 1</ListItem>
          <ListItem divider></ListItem>
          <ListItem>Item 1 - Division 2</ListItem>
          <ListItem>Item 2 - Division 2</ListItem>
        </ListGroup>
      }
    />
  ))

  .add('two-line lists, avatars, metadata, inset dividers', () => (
    <DocItem
      render={
        <ListGroup>
          <ListGroupSubHeader>Folders</ListGroupSubHeader>
          <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list">
            <ListItem>
              <span className="mdc-list-item__graphic" role="presentation">
                <i className="material-icons" aria-hidden="true">folder</i>
              </span>
              <span className="mdc-list-item__text">
                Photos
                <span className="mdc-list-item__secondary-text">Jan 9, 2014</span>
              </span>
              <a href="#" className="mdc-list-item__meta material-icons" aria-label="View more information" title="More info" onclick="event.preventDefault();">
                info
              </a>
            </ListItem>
            <ListItem>
              <span className="mdc-list-item__graphic" role="presentation">
                <i className="material-icons" aria-hidden="true">folder</i>
              </span>
              <span className="mdc-list-item__text">
                Recipes
                <span className="mdc-list-item__secondary-text">Jan 17, 2014</span>
              </span>
              <a href="#" className="mdc-list-item__meta material-icons" aria-label="View more information" title="More info" onclick="event.preventDefault();">
                info
              </a>
            </ListItem>
            <ListItem>
              <span className="mdc-list-item__graphic" role="presentation">
                <i className="material-icons" aria-hidden="true">folder</i>
              </span>
              <span className="mdc-list-item__text">
                Work
                <span className="mdc-list-item__secondary-text">Jan 28, 2014</span>
              </span>
              <a href="#" className="mdc-list-item__meta material-icons" aria-label="View more information" title="More info" onclick="event.preventDefault();">
                info
              </a>
            </ListItem>
          </ul>
          <hr className="mdc-list-divider mdc-list-divider--inset" />
          <ListGroupSubHeader>Files</ListGroupSubHeader>
          <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list demo-list demo-list--with-avatars demo-list--custom demo-list--icon-placeholders">
            <ListItem>
              <span className="mdc-list-item__graphic" role="presentation">
                <i className="material-icons" aria-hidden="true">insert_drive_file</i>
              </span>
              <span className="mdc-list-item__text">
                Vacation Itinerary
                <span className="mdc-list-item__secondary-text">Jan 10, 2014</span>
              </span>
              <a href="#" className="mdc-list-item__meta material-icons" aria-label="View more information" title="More info" onclick="event.preventDefault();">
                info
              </a>
            </ListItem>
            <ListItem>
              <span className="mdc-list-item__graphic" role="presentation">
                <i className="material-icons" aria-hidden="true">insert_drive_file</i>
              </span>
              <span className="mdc-list-item__text">
                Kitchen Remodel
                <span className="mdc-list-item__secondary-text">Jan 20, 2014</span>
              </span>
              <a href="#" className="mdc-list-item__meta material-icons" aria-label="View more information" title="More info" onclick="event.preventDefault();">
                info
              </a>
            </ListItem>
          </ul>
        </ListGroup>
      }
    />
  ))

  .add('inset dividers', () => (
    <DocItem
      render={
        <List avatar className="demo-list demo-list--with-avatars demo-list demo-list--icon-placeholders">
          <ListItem>
            <span className="mdc-list-item__graphic"></span>
            Single-line item - section 1
          </ListItem>
          <ListItem>
            <span className="mdc-list-item__graphic"></span>
            Single-line item - section 1
          </ListItem>
          <ListItem>
            <span className="mdc-list-item__graphic"></span>
            Single-line item - section 1
          </ListItem>
          <li className="mdc-list-divider mdc-list-divider--inset" role="separator"></li>
          <ListItem>
            <span className="mdc-list-item__graphic"></span>
            Single-line item - section 2
          </ListItem>
          <ListItem>
            <span className="mdc-list-item__graphic"></span>
            Single-line item - section 2
          </ListItem>
        </List>
      }
    />
  ))

  .add('interactive lists (with ink ripple)', () => (
    <DocItem
      render={
        <nav className="mdc-list demo-list" data-demo-interactive-list="">
          <a href="#" className="mdc-list-item mdc-ripple-upgraded">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">
              network_wifi
            </i>
            Wi-Fi
          </a>
          <a href="#" className="mdc-list-item mdc-ripple-upgraded">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">
              bluetooth
            </i>
            Bluetooth
          </a>
          <a href="#" className="mdc-list-item mdc-ripple-upgraded">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">
              data_usage
            </i>
            Data Usage
          </a>
        </nav>
      }
    />
  ))
