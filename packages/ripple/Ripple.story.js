import React from 'react'
import {storiesOf} from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'
import Ripple from './index'

import {DocItem} from '../../stories/UIExplorer'

const rippleStyle = {
  width: '240px',
  height: '240px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

storiesOf('! Ripple', module)
  .add('flexible toolbar', () => (
    <DocItem
      render={
        <Ripple
          style={rippleStyle}
          primary={boolean('primary', false)}
          accent={boolean('accent', false)}
          unbounded={boolean('unbounded', false)}
        >
          <div style={rippleStyle}>Click Me</div>
        </Ripple>
      }
    />
  ))