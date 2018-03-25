import React from 'react'
import {storiesOf} from '@storybook/react'
import Dialog, {DialogFooter, DialogHeader, DialogBody, DialogSurface} from './index'
import BasicUsage from './examples/BasicUsage'
import {DocItem} from '../../stories/UIExplorer'

storiesOf('! Dialog', module)
  .add('basic usage', () => (<BasicUsage />))
