import React from 'react'
import {storiesOf} from '@storybook/react'
import {Loading, Spinner} from '../src/index'
import {DocItem} from './UIExplorer'

storiesOf('Loading', module)
  .add('progress bar', () => <DocItem render={<Loading />} />)
  .add('default spinner', () => <DocItem render={<Spinner />} />)
  .add('single color spinner', () => <DocItem render={<Spinner singleColor />} />)
