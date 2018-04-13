import React from 'react'
import {storiesOf} from '@storybook/react'
import Button from './index'
import Icon from '../icon'
import {DocItem} from '../../stories/UIExplorer'
import './examples/demo.scss'

storiesOf('! Button', module)
  .add('css only - text button', () => (
    <DocItem
      render={
        <fieldset>
          <legend className="mdc-typography--title">Text Button</legend>
          <div>
            <Button>
              Baseline
            </Button>
            <Button dense>
              Dense
            </Button>
            <Button>
              <Icon>
                favorite
              </Icon>
              Icon
            </Button>
            <Button disabled>
              Disabled
            </Button>

            <button className="mdc-button secondary-text-button mdc-theme--text-primary-on-primary" data-demo-no-js="">
              Secondary (not in core)
            </button>

            <button className="mdc-button mdc-theme--text-primary-on-primary" data-demo-no-js="">
              <svg className="mdc-button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M23 12c0-6.07-4.93-11-11-11S1 5.93 1 12s4.93 11 11 11 11-4.93 11-11zM5 17.64C3.75 16.1 3 14.14 3 12c0-2.13.76-4.08 2-5.63v11.27zM17.64 5H6.36C7.9 3.75 9.86 3 12 3s4.1.75 5.64 2zM12 14.53L8.24 7h7.53L12 14.53zM17 9v8h-4l4-8zm-6 8H7V9l4 8zm6.64 2c-1.55 1.25-3.51 2-5.64 2s-4.1-.75-5.64-2h11.28zM21 12c0 2.14-.75 4.1-2 5.64V6.37c1.24 1.55 2 3.5 2 5.63z"></path>
              </svg>
              SVG Icon
            </button>
            <a href="javascript:void(0)" className="mdc-button mdc-theme--text-primary-on-primary" data-demo-no-js="">
              Link
            </a>
          </div>
        </fieldset>
      }
    />
  ))
  .add('css only - raised button', () => (
    <DocItem
      render={
      <fieldset>
        <legend className="mdc-typography--title">Raised Button</legend>
        <div>
          <Button raised>
            Baseline
          </Button>
          <Button dense raised>
            Dense
          </Button>
          <Button raised>
            <Icon>
              favorite
            </Icon>
            Icon
          </Button>
          <Button raised disabled>
            Disabled
          </Button>

          <button className="mdc-button mdc-button--raised secondary-filled-button" data-demo-no-js="">
            Secondary (not in core)
          </button>
          <button className="mdc-button mdc-button--raised" data-demo-no-js="">
            <svg className="mdc-button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M23 12c0-6.07-4.93-11-11-11S1 5.93 1 12s4.93 11 11 11 11-4.93 11-11zM5 17.64C3.75 16.1 3 14.14 3 12c0-2.13.76-4.08 2-5.63v11.27zM17.64 5H6.36C7.9 3.75 9.86 3 12 3s4.1.75 5.64 2zM12 14.53L8.24 7h7.53L12 14.53zM17 9v8h-4l4-8zm-6 8H7V9l4 8zm6.64 2c-1.55 1.25-3.51 2-5.64 2s-4.1-.75-5.64-2h11.28zM21 12c0 2.14-.75 4.1-2 5.64V6.37c1.24 1.55 2 3.5 2 5.63z"></path>
            </svg>
            SVG Icon
          </button>
          <a href="javascript:void(0)" className="mdc-button mdc-button--raised" data-demo-no-js="">
            Link
          </a>
        </div>
      </fieldset>
    }
    />
  ))
  .add('css only - unelevated', () => (
    <DocItem
    render={
      <fieldset>
        <legend className="mdc-typography--title">Unelevated Button (Experimental)</legend>
        <div>
          <Button unelevated>
            Baseline
          </Button>
          <Button dense unelevated>
            Dense
          </Button>
          <Button unelevated>
            <Icon>
              favorite
            </Icon>
            Icon
          </Button>
          <Button unelevated disabled>
            Disabled
          </Button>

          <button className="mdc-button mdc-button--unelevated secondary-filled-button" data-demo-no-js="">
            Secondary (not in core)
          </button>
          <button className="mdc-button mdc-button--unelevated" data-demo-no-js="">
            <svg className="mdc-button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M23 12c0-6.07-4.93-11-11-11S1 5.93 1 12s4.93 11 11 11 11-4.93 11-11zM5 17.64C3.75 16.1 3 14.14 3 12c0-2.13.76-4.08 2-5.63v11.27zM17.64 5H6.36C7.9 3.75 9.86 3 12 3s4.1.75 5.64 2zM12 14.53L8.24 7h7.53L12 14.53zM17 9v8h-4l4-8zm-6 8H7V9l4 8zm6.64 2c-1.55 1.25-3.51 2-5.64 2s-4.1-.75-5.64-2h11.28zM21 12c0 2.14-.75 4.1-2 5.64V6.37c1.24 1.55 2 3.5 2 5.63z"></path>
            </svg>
            SVG Icon
          </button>
          <a href="javascript:void(0)" className="mdc-button mdc-button--unelevated" data-demo-no-js="">
            Link
          </a>
          
        </div>
      </fieldset>
    }
    />
  ))
  .add('css only - stroked', () => (
    <DocItem
    render={
      <fieldset>
        <legend className="mdc-typography--title">Stroked Button (Experimental)</legend>
        <div>
          <Button stroked>
            Baseline
          </Button>
          <Button dense stroked>
            Dense
          </Button>
          <Button stroked>
            <Icon>
              favorite
            </Icon>
            Icon
          </Button>
          <Button stroked disabled>
            Disabled
          </Button>

          <button className="mdc-button mdc-button--stroked secondary-stroked-button" data-demo-no-js="">
            Secondary (not in core)
          </button>
          <button className="mdc-button mdc-button--stroked" data-demo-no-js="">
            <svg className="mdc-button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M23 12c0-6.07-4.93-11-11-11S1 5.93 1 12s4.93 11 11 11 11-4.93 11-11zM5 17.64C3.75 16.1 3 14.14 3 12c0-2.13.76-4.08 2-5.63v11.27zM17.64 5H6.36C7.9 3.75 9.86 3 12 3s4.1.75 5.64 2zM12 14.53L8.24 7h7.53L12 14.53zM17 9v8h-4l4-8zm-6 8H7V9l4 8zm6.64 2c-1.55 1.25-3.51 2-5.64 2s-4.1-.75-5.64-2h11.28zM21 12c0 2.14-.75 4.1-2 5.64V6.37c1.24 1.55 2 3.5 2 5.63z"></path>
            </svg>
            SVG Icon
          </button>
          <a href="javascript:void(0)" className="mdc-button mdc-button--stroked" data-demo-no-js="">
            Link
          </a>
        </div>
      </fieldset>
    }
    />
  ))
  .add('css only', () => (
    <DocItem
      render={
        <React.Fragment>
        <fieldset>
          <legend className="mdc-typography--title">Custom button (Experimental)</legend>
          <div>
            <button className="mdc-button mdc-button--unelevated big-round-corner-button" data-demo-no-js="">
              Big Corner Radius
            </button>
            <button className="mdc-button mdc-button--stroked thick-stroke-button" data-demo-no-js="">
              Thick Stroke Width
            </button>
          </div>
        </fieldset>
        <fieldset>
          <legend className="mdc-typography--title">Different Color Icons/Ink</legend>
          <div>
            <button className="mdc-button mdc-button--unelevated demo-ink-color" data-demo-no-js="">
              <i className="material-icons mdc-button__icon">favorite</i>
              Ink Color
            </button>
            <button className="mdc-button mdc-button--stroked demo-icon-color" data-demo-no-js="">
              <i className="material-icons mdc-button__icon">favorite</i>
              Icon Color
            </button>
          </div>
        </fieldset>
        </React.Fragment>
      }
    />
  ))
