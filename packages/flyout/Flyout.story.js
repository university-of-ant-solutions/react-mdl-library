import React from 'react'
import {storiesOf} from '@storybook/react'
import SimpleFlyout from './examples/SimpleFlyout.example'

storiesOf('! Flyout', module)
  .add('simple flyout', () => ( <SimpleFlyout />))
