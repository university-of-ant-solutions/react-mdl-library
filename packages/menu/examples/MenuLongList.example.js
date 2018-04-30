import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Menu from '../index'
import List, {ListItem, ListDivider} from '../../lists'
import Button from '../../button'
import {DocItem} from '../../../stories/UIExplorer'

const debug = require('debug')('react-mdl-library:menu:examples:MenuLongList')

class MenuLongList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: false,
    }
  }

  setValue = value => {
    return this.setState({
      value
    })
  }

  open = (evt) => {
    evt.preventDefault()
    this.setValue(true)
  }

  close = (evt) => {
    evt.preventDefault()
    this.setValue(false)
  }

  onClickMenu = (evt) => {
    console.log('onClickMenu', evt.target.innerHTML)
  }

  render() {
    debug('render')
    const {anchorCorner} = this.props
    const {value} = this.state

    return (
        <div style={{
          position: 'relative',
        }}>
        <div className="mdc-menu-anchor" style={{
          top: '35%',
          left: '0px',
          position: 'absolute',
          margin: '16px',
        }}>
          <Button raised onClick={this.open}>
            {anchorCorner}
          </Button>
          <Menu open={value} onClose={this.close} anchorCorner={anchorCorner} className="demo-menu--extra-long" tabIndex="-1">
            <List className="mdc-menu__items" role="menu" aria-hidden="true">
              <ListItem role="menuitem" tabIndex="0" onClick={this.onClickMenu}>
                Back
              </ListItem>
              <ListItem role="menuitem" tabIndex="0" onClick={this.onClickMenu}>
                Forward
              </ListItem>
              <ListItem role="menuitem" tabIndex="0" onClick={this.onClickMenu}>
                Reload
              </ListItem>
              <ListDivider role="separator" />
              <ListItem role="menuitem" tabIndex="0" onClick={this.onClickMenu}>
                Save As...
              </ListItem>
              {/* <span className="demo-menu__long-items">
                <ListItem role="menuitem" tabIndex="0">
                  Settings
                </ListItem>
                <ListItem role="menuitem" tabIndex="0">
                  Feedback
                </ListItem>
                <ListItem role="menuitem" tabIndex="0">
                  Options...
                </ListItem>
                <ListItem role="menuitem" tabIndex="0">
                  Item 1
                </ListItem>
                <ListItem role="menuitem" tabIndex="0">
                  Item 2
                </ListItem>
              </span> */}
              {/* <span className="demo-menu__extra-long-items">
                <ListItem role="menuitem" tabIndex="0">
                  Item 3
                </ListItem>
                <ListItem role="menuitem" tabIndex="0">
                  Item 4
                </ListItem>
                <ListItem role="menuitem" tabIndex="0">
                  Item 5
                </ListItem>
                <ListItem role="menuitem" tabIndex="0">
                  Item 6
                </ListItem>
                <ListItem role="menuitem" tabIndex="0">
                  Item 7
                </ListItem>
                <ListItem role="menuitem" tabIndex="0">
                  Item 8
                </ListItem>
                <ListItem role="menuitem" tabIndex="0">
                  Item 9
                </ListItem>
              </span> */}
            </List>
          </Menu>
        </div>
        </div>
      // }/>
    )
  }
}

MenuLongList.propTypes = {}

MenuLongList.defaultProps = {}

MenuLongList.displayName = 'MenuLongList'

export default MenuLongList