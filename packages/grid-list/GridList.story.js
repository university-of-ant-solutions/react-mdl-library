import React from 'react'
import {storiesOf} from '@storybook/react'
import GridList, {GridListTiles, GridTile} from './index'
import {DocItem} from '../../stories/UIExplorer'

storiesOf('! GridList', module)
  .add('basic', () => (
      <DocItem
        render={
          <GridList>
            <GridListTiles>
              <GridTile>
                <div className="mdc-grid-tile__primary">
                  <img className="mdc-grid-tile__primary-content" src="https://material-components-web.appspot.com/images/1-1.jpg" />
                </div>
                <span className="mdc-grid-tile__secondary">
                  <span className="mdc-grid-tile__title">Title</span>
                </span>
              </GridTile>
              <GridTile>
                <div className="mdc-grid-tile__primary">
                  <img className="mdc-grid-tile__primary-content" src="https://material-components-web.appspot.com/images/1-1.jpg" />
                </div>
                <span className="mdc-grid-tile__secondary">
                  <span className="mdc-grid-tile__title">Title</span>
                </span>
              </GridTile>
            </GridListTiles>
          </GridList>
        }
      />
  ))

  .add('empty grid', () => (
    <DocItem
      render={
        <GridList>
          <GridListTiles></GridListTiles>
        </GridList>
      }
    />
  ))

  .add('tile aspect ratio 1x1 with oneline footer caption', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))

  .add('tile aspect ratio 1x1 with 1px gutter', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))

  .add('tile aspect ratio 1x1 image only', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))

  .add('tile aspect ratio 1x1 with oneline header caption', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))

  .add('tile aspect ratio 1x1 with twoline footer caption', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))

  .add('tile aspect ratio 1x1 with oneline footer caption and icon at start of the caption', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))

  .add('tile aspect ratio 1x1 with twoline footer caption and icon at start of the caption', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))

  .add('tile aspect ratio 1x1 with oneline footer caption and icon at end of the caption', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))
  
  .add('tile aspect ratio 1x1 with twoline footer caption and icon at end of the caption', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))

  .add('tile aspect ratio 16x9 with oneline footer caption (Support: 16:9, 4:3, 3:4, 2:3, 3:2 as well)', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))

  .add('use div\'s background instead of img tag (useful when image ratio cannot be ensured)', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))
