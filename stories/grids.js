import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  Grid,
  Cell,
} from '../src/index'
import {
  DocItem,
} from './UIExplorer'

storiesOf('Grid', module)
  .add('default grid', () => (
    <div style={{width: '100%'}}>
      <DocItem
        render={<Grid className="demo-grid">
        <Cell col={12}>12</Cell>
        <Cell col={8}>8</Cell>
        <Cell col={4}>4</Cell>
      </Grid>}
      />
      
      <style jsx global>{`
        .demo-grid .mdl-cell {
          box-sizing: border-box;
          background-color: #bdbdbd;
          height: 200px;
          padding-left: 8px;
          padding-top: 4px;
          color: white;
        }
      `}</style>
    </div>
  ))
  .add('tablet grid', () => (
    <div style={{width: '100%'}}>
      <DocItem
        render={<Grid className="demo-grid">
        <Cell col={6} colTablet={8}>
          6 (8 tablet)
        </Cell>
        <Cell col={4} colTablet={4}>
          4 (4 tablet)
        </Cell>
        <Cell col={2} colTablet={4}>
          2 (4 tablet)
        </Cell>
      </Grid>}
      />
      <style jsx global>{`
        .demo-grid .mdl-cell {
          box-sizing: border-box;
          background-color: #bdbdbd;
          height: 200px;
          padding-left: 8px;
          padding-top: 4px;
          color: white;
        }
      `}</style>
    </div>
  ))
  .add('phone grid', () => (
    <div style={{width: '100%'}}>
      <DocItem
        render={<Grid className="demo-grid">
        <Cell col={6} colPhone={4}>
          6 (4 phone)
        </Cell>
        <Cell col={4} colPhone={2}>
          4 (2 phone)
        </Cell>
        <Cell col={2} colPhone={2}>
          2 (2 phone)
        </Cell>
      </Grid>}
      />
      <style jsx global>{`
        .demo-grid .mdl-cell {
          box-sizing: border-box;
          background-color: #bdbdbd;
          height: 200px;
          padding-left: 8px;
          padding-top: 4px;
          color: white;
        }
      `}</style>
    </div>
  ))
