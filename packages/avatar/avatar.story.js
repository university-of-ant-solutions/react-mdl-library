import React from 'react'
import {storiesOf} from '@storybook/react'
import Avatar from './index'
import {DocItem} from '../../stories/UIExplorer'

storiesOf('! Avatar', module)
  .add('number badge on icon', () => (
    <div>
      <DocItem
        render={
          <Avatar text="7" type="button" className="mdc-button" icon overlap>
            notifications
          </Avatar>
        }
      />
      <DocItem
        render={
          <Avatar text="♥" icon overlap>
            notifications
          </Avatar>
        }
      />
    </div>
  ))
  .add('number badge on text', () => (
    <div>
      <DocItem render={<Avatar text="7">notifications</Avatar>} />
      <DocItem render={<Avatar text="♥">notifications</Avatar>} />
    </div>
  ))
