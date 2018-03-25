import React from 'react'
import {storiesOf} from '@storybook/react'
import Icon from './index'
import {DocItem, Container} from '../../stories/UIExplorer'

storiesOf('! Icon', module)
  .add('number badge on icon', () => (
  <DocItem
    render={
    <Container>
      <Icon>account_balance</Icon>
      <Icon color="secondary">
        add_circle
      </Icon>
      <Icon color="action">
        add_circle
      </Icon>
      <Icon color="disabled">
        add_circle
      </Icon>
      <Icon color="primary" style={{ fontSize: 30 }}>
        add_circle
      </Icon>
      <Icon color="error" style={{ fontSize: 36 }}>
        add_circle
      </Icon>
    </Container>
  }/>
))