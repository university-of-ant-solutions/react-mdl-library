import React from 'react'
import {storiesOf} from '@storybook/react'
import Placeholder, {Circle, Line, Rect, LineWrapper} from './index'
import {DocItem} from '../../stories/UIExplorer'
import './examples/demo.scss'

storiesOf('! Placeholder', module)
  .add('basic', () => (
    <DocItem
      render={
        <Placeholder
          ready={false}
          delay={100}
          placeholder={
            <div className="module post-feed mdc-placeholder__delay260">
              <Circle />
              <LineWrapper>
                <Line className="mdc-placeholder__width110" />
                <Line className="mdc-placeholder__width250" />
              </LineWrapper>
              <div class="mdc-placeholder__height20"></div>
              <Line className="mdc-placeholder__width500" />
              <Line className="mdc-placeholder__width470" />
            </div>
          }
        >
          Content Here
        </Placeholder>
      }
    />
  ))

  .add('circle', () => (
    <DocItem
      render={
        <div className="module post-feed mdc-placeholder__delay260">
          <Circle />
        </div>
      }
    />
  ))

  .add('line', () => (
    <DocItem
      render={
        <div className="module post-feed mdc-placeholder__delay380">
          <Line className="mdc-placeholder__width500" />
          <Line className="mdc-placeholder__width470" />
          <br />
          <Line className="mdc-placeholder__width110" />
          <Line className="mdc-placeholder__width250" />
        </div>
      }
    />
  ))

  .add('example 1', () => (
    <DocItem
      render={
        <React.Fragment>
          <LineWrapper>
            <Line className="mdc-placeholder__width500" />
            <Line className="mdc-placeholder__width470" />
            <br />
            <Line className="mdc-placeholder__width110" />
            <Line className="mdc-placeholder__width250" />
          </LineWrapper>
        </React.Fragment>
      }
    />
  ))

  .add('example 2', () => (
    <DocItem
      render={
        <div className="module post-feed mdc-placeholder__delay380">
          <Rect/>
          <LineWrapper>
            <Line className="mdc-placeholder__width110" />
            <Line className="mdc-placeholder__width220" />
          </LineWrapper>
          <div class="mdc-placeholder__height20"></div>
          <Rect/>
          <LineWrapper>
            <Line className="mdc-placeholder__width110" />
            <Line className="mdc-placeholder__width220" />
          </LineWrapper>
          <div class="mdc-placeholder__height20"></div>
          <Rect/>
          <LineWrapper>
            <Line className="mdc-placeholder__width110" />
            <Line className="mdc-placeholder__width220" />
          </LineWrapper>
        </div>
      }
    />
  ))

  .add('example 3', () => (
    <DocItem
      render={
        <div className="module post-feed mdc-placeholder__delay260">
          <Circle />
          <LineWrapper>
            <Line className="mdc-placeholder__width110" />
            <Line className="mdc-placeholder__width250" />
          </LineWrapper>
          <div class="mdc-placeholder__height20"></div>
          <Line className="mdc-placeholder__width500" />
          <Line className="mdc-placeholder__width470" />
        </div>
      }
    />
  ))
