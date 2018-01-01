import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  Bagdes
} from '../src/index'
import {
  DocItem,
} from './UIExplorer'

storiesOf('Bagdes', module)
  .add('number badge on icon', () => (
    <div>
      <DocItem
        render={<Bagdes text="7" icon overlap>
          notifications
        </Bagdes>}
      />
      <DocItem
        render={<Bagdes text="♥" icon overlap>
          notifications
        </Bagdes>}
      />
    </div>
  ))
  .add('number badge on text', () => (
    <div>
      <DocItem
        render={<Bagdes text="7">notifications</Bagdes>}
      />
      <DocItem
        render={<Bagdes text="♥">notifications</Bagdes>}
      />
    </div>
  ))
