import React from 'react'
import {storiesOf} from '@storybook/react'
import LayoutGrid, {LayoutGridInner, LayoutGridCell} from '../layout-grid'
import MenuLongList from './examples/MenuLongList.example'

storiesOf('! Menu', module)
  .add('with text labels', () => (
    <LayoutGrid>
      <LayoutGridInner>
        <LayoutGridCell className="demo-cell" span={4}><MenuLongList anchorCorner="TOP_START"/></LayoutGridCell>
        <LayoutGridCell className="demo-cell" span={4}><MenuLongList anchorCorner="TOP_LEFT"/></LayoutGridCell>
        <LayoutGridCell className="demo-cell" span={4}><MenuLongList anchorCorner="TOP_RIGHT"/></LayoutGridCell>
        <LayoutGridCell span={12}></LayoutGridCell>
        <LayoutGridCell className="demo-cell" span={4}><MenuLongList anchorCorner="TOP_END"/></LayoutGridCell>
        <LayoutGridCell className="demo-cell" span={4}><MenuLongList anchorCorner="BOTTOM_LEFT"/></LayoutGridCell>
        <LayoutGridCell className="demo-cell" span={4}><MenuLongList anchorCorner="BOTTOM_RIGHT"/></LayoutGridCell>
        <LayoutGridCell className="demo-cell" span={4}><MenuLongList anchorCorner="BOTTOM_START"/></LayoutGridCell>
        <LayoutGridCell className="demo-cell" span={4}><MenuLongList anchorCorner="BOTTOM_END"/></LayoutGridCell>

      </LayoutGridInner>
    </LayoutGrid>
))
