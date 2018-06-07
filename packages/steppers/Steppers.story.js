import React from 'react'
import {storiesOf} from '@storybook/react'
import BasicUsage from './examples/BasicUsage'
import {DocItem} from '../../stories/UIExplorer'
import './examples/demo.scss'

storiesOf('! Steppers', module)
  .add('basic usage', () => (<BasicUsage />))
