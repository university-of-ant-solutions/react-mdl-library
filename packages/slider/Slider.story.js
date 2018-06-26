import React from 'react'
import {storiesOf} from '@storybook/react'
import Slider from './index'
import SliderWithEvent from './examples/SliderWithEvent.example'
import {DocItem} from '../../stories/UIExplorer'
storiesOf('! Slider', module)
.add('continuous', () => (
  <DocItem
    render={
      <React.Fragment>
        <h3 className="mdc-typography--subtitle1">Continuous</h3>
        <Slider />
      </React.Fragment>
    }
    />
  ))
  .add('discrete', () => (
  <DocItem
    render={
      <React.Fragment>
        <h3 className="mdc-typography--subtitle1">Discrete</h3>
        <Slider discrete />
        <h3 className="mdc-typography--subtitle1">Discrete with max min</h3>
        <Slider discrete step={2} value={6} min={0} max={10} />
      </React.Fragment>
    }
    />
  ))
  .add('discrete with tick marks', () => (
    <DocItem
      render={
        <React.Fragment>
          <h3 className="mdc-typography--subtitle1">Discrete with Tick Marks</h3>
          <Slider discrete markers step={1} value={6} min={0} max={10} />
        </React.Fragment>
      }
    />
  ))
  .add('discrete with tick marks and rtl', () => (
    <DocItem
      render={
        <React.Fragment>
          <h3 className="mdc-typography--subtitle1">Discrete with Tick Marks</h3>
          <Slider rtl discrete markers step={1} value={6} min={0} max={10} />
        </React.Fragment>
      }
    />
  ))
  .add('slider with events', () => (
    <DocItem
      render={
        <React.Fragment>
          <h3 className="mdc-typography--subtitle1">Slider With Events</h3>
          <SliderWithEvent />
          <SliderWithEvent discrete markers step={1} value={6} min={0} max={10} />
        </React.Fragment>
      }
    />
  ))
  .add('disabled', () => (
    <DocItem
      render={
        <React.Fragment>
          <h3 className="mdc-typography--subtitle1">Disabled</h3>
          <Slider discrete disabled />
          <h3 className="mdc-typography--subtitle1">Disabled with max min</h3>
          <Slider discrete disabled step={2} value={6} min={0} max={10} />
        </React.Fragment>
      }
      />
    ))
