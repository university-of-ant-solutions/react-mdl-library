import React from 'react'
import {storiesOf} from '@storybook/react'
import TabBar, {Tab, TabBarScroller} from './index'
import Icon from '../icon'
import TabsWithOnChange from './examples/TabsWithOnChange'
import {DocItem} from '../../stories/UIExplorer'

storiesOf('! TabBar', module)
  .add('with text labels', () => (
    <DocItem
      render={
        <TabBar>
          <Tab href="#home">
            Home
          </Tab>
          <Tab href="#merchandise">
            Merchandise
          </Tab>
          <Tab href="#aboutus">
            About Us
          </Tab>
        </TabBar>
      }
    />
  ))

  .add('with icon labels', () => (
    <DocItem
      render={
        <TabBar>
          <Tab href="#recents">
            <Icon aria-label="Recents">phone</Icon>
          </Tab>
          <Tab href="#favorites">
            <Icon aria-label="Favorites">favorite</Icon>
          </Tab>
          <Tab href="#nearby">
            <Icon aria-label="nearby">person_pin</Icon>
          </Tab>
        </TabBar>
      }
    />
  ))

  .add('with icon and text labels', () => (
    <DocItem
      render={
        <TabBar iconsWithText default='#favorites'>
          <Tab href="#recents">
            <Icon aria-hidden='true' aria-label='Recents'>phone</Icon>
            Recents
          </Tab>
          <Tab href="#favorites">
            <Icon aria-hidden='true' aria-label='Favorites'>favorites</Icon>
            Favorites
          </Tab>
          <Tab href="#nearby">
            <Icon aria-hidden='true' aria-label='Nearby'>person_pin</Icon>
            Nearby
          </Tab>
        </TabBar>
      }
    />
  ))

  .add('with on change', () => (<TabsWithOnChange />))
