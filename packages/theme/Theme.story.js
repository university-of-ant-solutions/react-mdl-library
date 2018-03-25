import React from 'react'
import {storiesOf} from '@storybook/react'
import {DocItem} from '../../stories/UIExplorer'
import './index'

storiesOf('! Theme', module)
  .add('loaded', () => (<DocItem
    render={
    <React.Fragment>
      <h1>It has not implement yet</h1>        
    </React.Fragment>}
  />))
