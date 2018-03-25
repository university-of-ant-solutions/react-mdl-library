import React from 'react'
import {storiesOf} from '@storybook/react'
import TabBar, {Tab, TabBarScroller} from './index'
import {DocItem} from '../../stories/UIExplorer'

storiesOf('! TabBarScroller', module)
  .add('with text labels', () => (
    <div>
      <DocItem
        render={
          <TabBarScroller>
            <Tab href="#one">
              Item One
            </Tab>
            <Tab href="#two">
              Item Two
            </Tab>
            <Tab href="#three">
              Item Three
            </Tab>
            <Tab href="#four">
              Item Four
            </Tab>
            <Tab href="#five">
              Item Five
            </Tab>
            <Tab href="#six">
              Item Six
            </Tab>
            <Tab href="#seven">
              Item Seven
            </Tab>
            <Tab href="#eight">
              Item Eight
            </Tab>
            <Tab href="#nine">
              Item Nine
            </Tab>
          </TabBarScroller>
        }
      />
    </div>
  ))
