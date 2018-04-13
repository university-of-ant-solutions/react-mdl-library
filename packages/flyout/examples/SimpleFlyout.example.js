import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Button from '../../button'
import Icon from '../../icon'
import LayoutGrid, {LayoutGridCell, LayoutGridInner} from '../../layout-grid'
import List, {ListItem, ListGroup, ListGroupSubHeader} from '../../lists'
import Flyout from '../index'
import {DocItem} from '../../../stories/UIExplorer'

class SimpleFlyout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleClick_ = event => {
    this.setState(() => ({ open: !this.state.open }))
  }

  handleDismiss_ = () => {
    this.setState(() => ({ open: false }))
  }

  getAnchor = () => {
    return this.anchor
  }

  render() {
    const { open } = this.state

    return (
      <div
        style={{ display: "inline-block" }}
        ref={c => {
          this.anchor = c
        }}
      >
        <Button
          onClick={this.handleClick_}
        >
          <Icon>
            notifications
          </Icon>
        </Button>
        <Flyout
          open={open}
          getAnchor={this.getAnchor}
          idealDirection="up"
          message="Oops! This item is out of stock."
          onDismiss={this.handleDismiss}
          size="md"
        >
          <LayoutGrid>
            <LayoutGridInner>
              <LayoutGridCell span={4}>
                <List>
                  <ListItem>Single-line item</ListItem>
                  <ListItem>Single-line item</ListItem>
                  <ListItem>Single-line item</ListItem>
                </List>
              </LayoutGridCell>
            </LayoutGridInner>
          </LayoutGrid>
        </Flyout>
        {/* <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu> */}
      </div>
    )
  }
}

SimpleFlyout.propTypes = {}

SimpleFlyout.defaultProps = {}

SimpleFlyout.displayName = 'SimpleFlyout'

export default SimpleFlyout
