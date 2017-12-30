import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  FontIcon,
  Chip,
  // Avatar,
} from '../index'
function handleRequestDelete() {
  alert('You clicked the delete icon.') // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.') // eslint-disable-line no-alert
}

storiesOf('Chip', module)
  .add('basic chip', () => <Chip label="Basic Chip" />)
  .add('deletable chip', () => (
    <Chip label="Deletable Chip" onRequestDelete={handleRequestDelete} />
  ))
  .add('custom delete icon', () => (
    <Chip
      label="Done Chip"
      deleteIcon={<FontIcon>done</FontIcon>}
      onRequestDelete={handleRequestDelete}
    />
  ))
  .add('button chip', () => <Chip type="button" label="Button Chip" onClick={handleClick} />)
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
