import React from 'react'
import {storiesOf} from '@storybook/react'
import Toolbar, {ToolbarRow, ToolbarSection, ToolbarTitle} from './index'
import SingleRowsExample from './examples/SingleRows.example'
import FixedToolbarsExample from './examples/FixedToolbars.example'
import {DocItem} from '../../stories/UIExplorer'

storiesOf('! Toolbars', module)
  .add('single rows', () => (<SingleRowsExample />))
  .add('multiple rows', () => (
    <DocItem
      render={
      <Toolbar>
        <ToolbarRow>
          <ToolbarSection start>
            {/*FIXME: Replace with icon */}
            <a href="#" className="material-icons mdc-toolbar__menu-icon">menu</a>
            <ToolbarTitle>Title</ToolbarTitle>
          </ToolbarSection>
        </ToolbarRow>
        <ToolbarRow>
          ...
        </ToolbarRow>
      </Toolbar>
    }/>
  ))
  .add('sections', () => (
    <DocItem
      render={
      <Toolbar>
        <ToolbarRow>
          <ToolbarSection start>
            Section aligns to start.
          </ToolbarSection>
          <ToolbarSection>
            Section aligns to center.
          </ToolbarSection>
          <ToolbarSection end>
            Section aligns to end.
          </ToolbarSection>
        </ToolbarRow>
      </Toolbar>
    }/>
  ))
  .add('sections shrink', () => (
    <DocItem
      render={
      <Toolbar>
        <ToolbarRow>
          <ToolbarSection start>
            <ToolbarTitle>This is a super super super super long title</ToolbarTitle>
          </ToolbarSection>
          <ToolbarSection end shrink>
            <a className="material-icons search align-icons" aria-label="Search" alt="Search">search</a>
          </ToolbarSection>
        </ToolbarRow>
      </Toolbar>
    }/>
  ))
  .add('title', () => (
    <DocItem
      render={
      <Toolbar>
        <ToolbarRow>
          <ToolbarSection>
            <ToolbarTitle>Title</ToolbarTitle>
          </ToolbarSection>
        </ToolbarRow>
      </Toolbar>
    }/>
  ))
  .add('icons', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))
  .add('fixed toolbars', () => (<FixedToolbarsExample />))
  .add('waterfall toolbars', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))
  .add('fixed last row toolbar', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))
  .add('flexible toolbar', () => (
    <DocItem
      render={
      <React.Fragment>
        <h1>It has not implement yet</h1>        
      </React.Fragment>}
    />
  ))
  .add('others', () => (
    <DocItem
      render={
      <React.Fragment>
        <br />
        {/* <header className="mdc-toolbar mdc-toolbar--fixed">
          <div className="mdc-toolbar__row">
            <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
              <span className="mdc-toolbar__title">Title</span>
            </section>
          </div>
        </header>
        <main className="mdc-toolbar-fixed-adjust">
          <p className="demo-paragraph">
            A demo paragraph here.
          </p>
        </main> */}
      </React.Fragment>}
    />
  ))
