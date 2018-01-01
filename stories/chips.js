import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  FontIcon,
  Chip,
  // Avatar,
} from '../src/index'
import {
  DocItem,
} from './UIExplorer'

function handleRequestDelete() {
  alert('You clicked the delete icon.') // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.') // eslint-disable-line no-alert
}

storiesOf('Chip', module)
  .add('basic chip', () => (
    <div>
      <DocItem
        render={<Chip label="Basic Chip" />}
      />
    </div>
  ))
  .add('deletable chip', () => (
    <div>
      <DocItem
        render={<Chip label="Deletable Chip" onRequestDelete={handleRequestDelete} />}
      />
    </div>
  ))
  .add('custom delete icon', () => (
    <div>
      <DocItem
        render={<Chip
          label="Done Chip"
          deleteIcon={<FontIcon>done</FontIcon>}
          onRequestDelete={handleRequestDelete}
        />}
      />
    </div>
  ))
  .add('button chip', () => (
    <div>
      <DocItem
        render={<Chip type="button" label="Button Chip" onClick={handleClick} />}
      />
    </div>
  ))
  // .add('contact chip with text', () => (
  //   <Chip
  //     label="Avatar"
  //     avatar={
  //       <Avatar color="#fff" backgroundColor="#009688" sizes={32}>
  //         A
  //       </Avatar>
  //     }
  //   />
  // ))
  // .add('contact chip with avatar', () => (
  //   <Chip
  //     label="Deletable Contact Chip"
  //     avatar={<Avatar src="https://getmdl.io/templates/dashboard/images/user.jpg" sizes={32} />}
  //     deleteIcon={<FontIcon>cancel</FontIcon>}
  //     onRequestDelete={handleRequestDelete}
  //   />
  // ))
