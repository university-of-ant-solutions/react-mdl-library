import React from 'react'
import {storiesOf} from '@storybook/react'
import TabBar from './index'
import {DocItem} from '../../stories/UIExplorer'

storiesOf('! Slider', module)
  .add('with text labels', () => (
    <DocItem
      render={
        <span>123</span>
      }
    />
  ))
