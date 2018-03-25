import React from 'react'
import {storiesOf} from '@storybook/react'
import Grid from './Grid'
import Cell from './Cell'
import {DocItem} from '../../stories/UIExplorer'
import './demo.scss'

storiesOf('MDL Grid', module)
  .add('default grid', () => (
    <div style={{width: '100%'}}>
      <DocItem
        render={
          <Grid className="demo-grid">
            <Cell col={12}>12</Cell>
            <Cell col={8}>8</Cell>
            <Cell col={4}>4</Cell>
          </Grid>
        }
      />
    </div>
  ))
  .add('tablet grid', () => (
    <div style={{width: '100%'}}>
      <DocItem
        render={
          <Grid className="demo-grid">
            <Cell col={6} colTablet={8}>
              6 (8 tablet)
            </Cell>
            <Cell col={4} colTablet={4}>
              4 (4 tablet)
            </Cell>
            <Cell col={2} colTablet={4}>
              2 (4 tablet)
            </Cell>
          </Grid>
        }
      />
    </div>
  ))
  .add('phone grid', () => (
    <div style={{width: '100%'}}>
      <DocItem
        render={
          <Grid className="demo-grid">
            <Cell col={6} colPhone={4}>
              6 (4 phone)
            </Cell>
            <Cell col={4} colPhone={2}>
              4 (2 phone)
            </Cell>
            <Cell col={2} colPhone={2}>
              2 (2 phone)
            </Cell>
          </Grid>
        }
      />
    </div>
  ))
