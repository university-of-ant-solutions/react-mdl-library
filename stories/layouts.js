import React from 'react'
import {storiesOf} from '@storybook/react'

import BasicLayout from './examples/BasicLayout'
import TabsHeaderLayout from './examples/TabsHeaderLayout'
import WaterfallHeaderLayout from './examples/WaterfallHeaderLayout'

storiesOf('Layout', module)
  .add('Basic Layout', () => <BasicLayout />)
  .add('Tabs Header Layout', () => <TabsHeaderLayout />)
  .add('Waterfall Header Layout', () => <WaterfallHeaderLayout />)
