import React from 'react'
import {storiesOf} from '@storybook/react'
import LinearProgress from './index'
import {DocItem} from '../../stories/UIExplorer'
import './examples/demo.scss'

storiesOf('! Linear Progress', module)
.add('linear progress indicators - determinate', () => (
  <DocItem
    render={
      <React.Fragment>
        
        <figure className="linear-progress-demo">
          <LinearProgress color="mdc-theme--secondary-bg" />
          <figcaption>Determinate with default</figcaption>
        </figure>

        <figure className="linear-progress-demo">
          <LinearProgress value={95} color="mdc-theme--secondary-bg" />
          <figcaption>Determinate with value</figcaption>
        </figure>

        <figure className="linear-progress-demo">
          <LinearProgress value={5} completed={10} color="mdc-theme--secondary-bg" />
          <figcaption>Determinate with value and completed</figcaption>
        </figure>
      </React.Fragment>
    }
  />
))

  .add('linear progress indicators - indeterminate', () => (
  <DocItem
    render={
      <React.Fragment>
        <figure className="linear-progress-demo">
          <LinearProgress indeterminate color="mdc-theme--secondary-bg" />
          <figcaption>Indeterminate</figcaption>
        </figure>
      </React.Fragment>
    }
  />
))

  .add('linear progress indicators - buffer', () => (
  <DocItem
    render={
      <React.Fragment>
        <figure className="linear-progress-demo">
          <LinearProgress value={50} valueBuffer={75} color="mdc-theme--secondary-bg" />
          <figcaption>Buffer</figcaption>
        </figure>
      </React.Fragment>
    }
  />
))
  .add('linear progress indicators - reversed', () => (
    <DocItem
      render={
        <React.Fragment>
          <figure className="linear-progress-demo">
            <LinearProgress value={50} reversed color="mdc-theme--secondary-bg" />
            <figcaption>Reversed</figcaption>
          </figure>

          <figure className="linear-progress-demo">
            <LinearProgress indeterminate reversed color="mdc-theme--secondary-bg" />
            <figcaption>Indeterminate Reversed</figcaption>
          </figure>
          
          <figure className="linear-progress-demo">
            <LinearProgress value={50} valueBuffer={75} reversed color="mdc-theme--secondary-bg" />
            <figcaption>Buffer Reversed</figcaption>
          </figure>

          <figure className="linear-progress-demo">
            <div role="progressbar" className="mdc-linear-progress demo-linear-progress--custom" data-buffer="true">
              <div className="mdc-linear-progress__buffering-dots"></div>
              <div className="mdc-linear-progress__buffer" style={{
                transform: 'scaleX(0.75)',
              }}></div>
              <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{
                transform: 'scaleX(0.5)',
              }}>
                <span className="mdc-linear-progress__bar-inner mdc-theme--secondary-bg"></span>
              </div>
              <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                <span className="mdc-linear-progress__bar-inner"></span>
              </div>
            </div>
            <figcaption>Custom Colors with Buffer</figcaption>
          </figure>
        </React.Fragment>
      }
    />
  ))
