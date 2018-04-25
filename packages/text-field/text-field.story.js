import React from 'react'
import {storiesOf} from '@storybook/react'
import TextField from './index'
import {DocItem} from '../../stories/UIExplorer'

storiesOf('! TextField', module)
  .add('with text labels', () => (
    <DocItem
      render={
        <TextField />
      }
    />
  ))
