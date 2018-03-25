import React from 'react'
import {storiesOf} from '@storybook/react'
import Avatar from './index'
import TemporaryDrawer from './examples/TemporaryDrawer'
import PersistentDrawer from './examples/PersistentDrawer'
import PermanentDrawerBelowToolbar from './examples/PermanentDrawerBelowToolbar'
import PermanentDrawerAboveToolbar from './examples/PermanentDrawerAboveToolbar'
import {DocItem} from '../../stories/UIExplorer'
import './examples/demo.scss'

storiesOf('! Drawers', module)
  .add('temporary drawer', () => (<TemporaryDrawer />))

  .add('persistent drawer', () => (<PersistentDrawer />))

  .add('permanent drawer above toolbar', () => (
    <PermanentDrawerAboveToolbar />
  ))

  .add('permanent drawer below toolbar', () => (
    <PermanentDrawerBelowToolbar />
  ))
