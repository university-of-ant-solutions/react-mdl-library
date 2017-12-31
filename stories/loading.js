import React from 'react'
import {storiesOf} from '@storybook/react'

import {
  Loading,
  Spinner,
} from '../src/index'

storiesOf('Loading', module)
  .add('progress bar', () => <Loading />)
  .add('default spinner', () => <Spinner />)
  .add('single color spinner', () => <Spinner singleColor />)
