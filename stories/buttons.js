import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  Button,
  IconButton,
  FontIcon
} from '../src/index'
import {
  DocItem,
} from './UIExplorer'

storiesOf('Button', module)
  .add('flat button', () => (
    <div>
      <DocItem
        render={<Button>Button</Button>}
      />
      <DocItem
        render={<Button color="primary">Primary Button</Button>}
      />
      <DocItem
        render={<Button color="accent">Accent Button</Button>}
      />
      <DocItem
        render={<Button color="accent" disabled>Disabled Button</Button>}
      />
    </div>
  ))
  .add('raised button', () => (
    <div>
      <DocItem
        render={<Button raised ripple>Button</Button>}
      />
      <DocItem
        render={<Button raised color="primary">Button</Button>}
      />
      <DocItem
        render={<Button raised color="accent">Button</Button>}
      />
      <DocItem
        render={<Button raised color="accent" disabled>Button</Button>}
      />
    </div>
  ))
  .add('float action button', () => (
    <div>
      <DocItem
        render={<Button fab>
          <FontIcon>add</FontIcon>
        </Button>}
      />
      <DocItem
        render={<Button ripple fab color="primary">
          <FontIcon>create</FontIcon>
        </Button>}
      />
      <DocItem
        render={<Button ripple fab color="accent">
          <FontIcon>add</FontIcon>
        </Button>}
      />
      <DocItem
        render={<Button fab color="accent" disabled>
          <FontIcon>add</FontIcon>
        </Button>}
      />
    </div>
  ))
  .add('icon button', () => (
    <div>
      <DocItem
        render={<IconButton icon="close" ripple />}
      />
      <DocItem
        render={<IconButton icon="chat_bubble" color="primary" />}
      />
      <DocItem
        render={<IconButton icon="favorite" color="accent" />}
      />
      <DocItem
        render={<IconButton icon="send" color="primary" disabled />}
      />
    </div>
  ))
