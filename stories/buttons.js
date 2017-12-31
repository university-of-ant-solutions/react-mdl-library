import React from 'react'
import {storiesOf} from '@storybook/react'

import {
  Button,
  IconButton,
  FontIcon
} from '../src/index'

storiesOf('Button', module)
  .add('flat button', () => (
    <div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <Button>Button</Button>
      </div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <Button color="primary">Button</Button>
      </div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <Button color="accent">Button</Button>
      </div>
      <div style={{display: 'inline'}}>
        <Button color="accent" disabled>
          Button
        </Button>
      </div>
    </div>
  ))
  .add('raised button', () => (
    <div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <Button raised ripple>
          Button
        </Button>
      </div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <Button raised color="primary">
          Button
        </Button>
      </div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <Button raised color="accent">
          Button
        </Button>
      </div>
      <div style={{display: 'inline'}}>
        <Button raised color="accent" disabled>
          Button
        </Button>
      </div>
    </div>
  ))
  .add('float action button', () => (
    <div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <Button fab>
          <FontIcon>add</FontIcon>
        </Button>
      </div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <Button ripple fab color="primary">
          <FontIcon>create</FontIcon>
        </Button>
      </div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <Button ripple fab color="accent">
          <FontIcon>add</FontIcon>
        </Button>
      </div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <Button fab color="accent" disabled>
          <FontIcon>add</FontIcon>
        </Button>
      </div>
    </div>
  ))
  .add('icon button', () => (
    <div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <IconButton icon="close" ripple />
      </div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <IconButton icon="chat_bubble" color="primary" />
      </div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <IconButton icon="favorite" color="accent" />
      </div>
      <div style={{display: 'inline', marginRight: '20px'}}>
        <IconButton icon="send" color="primary" disabled />
      </div>
    </div>
  ))
