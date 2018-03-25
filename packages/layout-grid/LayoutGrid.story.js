import React from 'react'
import {storiesOf} from '@storybook/react'
import LayoutGrid, {LayoutGridCell, LayoutGridInner} from './index'
import {DocItem} from '../../stories/UIExplorer'
import './examples/demo.scss'

storiesOf('! LayoutGrid', module)
  .add('in fluid container', () => (
    <React.Fragment>
      <DocItem
        render={
          <LayoutGrid>
            <LayoutGridInner>
              <LayoutGridCell className="demo-cell">3</LayoutGridCell>
              <LayoutGridCell className="demo-cell">3</LayoutGridCell>
              <LayoutGridCell className="demo-cell">3</LayoutGridCell>
            </LayoutGridInner>
          </LayoutGrid>
        }
      />
      <DocItem
        render={
          <LayoutGrid>
            <LayoutGridInner>
              <LayoutGridCell span={1} className="demo-cell">1</LayoutGridCell>
              <LayoutGridCell span={1} className="demo-cell">1</LayoutGridCell>
              <LayoutGridCell span={1} className="demo-cell">1</LayoutGridCell>
              <LayoutGridCell span={1} className="demo-cell">1</LayoutGridCell>
              <LayoutGridCell span={1} className="demo-cell">1</LayoutGridCell>
              <LayoutGridCell span={1} className="demo-cell">1</LayoutGridCell>
              <LayoutGridCell span={1} className="demo-cell">1</LayoutGridCell>
              <LayoutGridCell span={1} className="demo-cell">1</LayoutGridCell>
              <LayoutGridCell span={1} className="demo-cell">1</LayoutGridCell>
              <LayoutGridCell span={1} className="demo-cell">1</LayoutGridCell>
              <LayoutGridCell span={1} className="demo-cell">1</LayoutGridCell>
              <LayoutGridCell span={1} className="demo-cell">1</LayoutGridCell>
            </LayoutGridInner>
          </LayoutGrid>
        }
      />
      <DocItem
        render={
          <LayoutGrid>
            <LayoutGridInner>
              <LayoutGridCell span={6} className="demo-cell">6</LayoutGridCell>
              <LayoutGridCell span={4} className="demo-cell">4</LayoutGridCell>
              <LayoutGridCell span={2} className="demo-cell">2</LayoutGridCell>
            </LayoutGridInner>
          </LayoutGrid>
         }
        />
    </React.Fragment>
  ))

  .add('nested grid', () => (
    <React.Fragment>
      <DocItem
        render={
          <LayoutGrid>
            <LayoutGridInner>
              <LayoutGridCell className="demo-cell">
                <LayoutGridInner>
                  <LayoutGridCell className="demo-cell demo-cell__bg-gray"><span>Second level</span></LayoutGridCell>
                  <LayoutGridCell className="demo-cell demo-cell__bg-gray"><span>Second level</span></LayoutGridCell>
                </LayoutGridInner>
              </LayoutGridCell>
              <LayoutGridCell className="demo-cell">First level</LayoutGridCell>
              <LayoutGridCell className="demo-cell">First level</LayoutGridCell>
            </LayoutGridInner>
          </LayoutGrid>
        }
      />
    </React.Fragment>
  ))

  .add('with tweaks at different screen sizes', () => (
    <React.Fragment>
      <DocItem
        render={
        <LayoutGrid>
          <LayoutGridInner>
            <LayoutGridCell span={6} tablet={8} className="demo-cell">6 (8 tablet)</LayoutGridCell>
            <LayoutGridCell span={4} tablet={6} className="demo-cell">4 (6 tablet)</LayoutGridCell>
            <LayoutGridCell span={2} phone={4} className="demo-cell">2 (4 phone)</LayoutGridCell>
          </LayoutGridInner>
        </LayoutGrid>
      }/>
    </React.Fragment>
  ))
