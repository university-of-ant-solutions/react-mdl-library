import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  Bagdes
} from '../index'

storiesOf('Bagdes', module)
  .add('number badge on icon', () => (
    <div>
      <Bagdes text="7" icon overlap>
        notifications
      </Bagdes>
      <Bagdes text="♥" icon overlap>
        notifications
      </Bagdes>
    </div>
  ))
  .add('number badge on text', () => (
    <div>
      <Bagdes text="7">notifications</Bagdes>
      <Bagdes text="♥">notifications</Bagdes>
    </div>
  ))
