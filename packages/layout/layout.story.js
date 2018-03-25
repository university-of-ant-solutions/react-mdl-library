import React from 'react'
import {storiesOf} from '@storybook/react'
import PermanentDrawerBelowToolbar from './examples/PermanentDrawerBelowToolbar'
import './examples/demo.scss'

storiesOf('! Layout', module)
  .add('permanent drawer below toolbar', () => (
    <PermanentDrawerBelowToolbar />
  ))