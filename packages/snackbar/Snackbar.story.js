import React from 'react'
import {storiesOf} from '@storybook/react'
import BasicExample from './examples/BasicExample.example'
import {DocItem} from '../../stories/UIExplorer'

storiesOf('! Snackbar', module)
  .add('basic example', () => (
    <BasicExample />
  ))
