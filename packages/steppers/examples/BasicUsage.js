import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Button from '../../button'
import Stepper, {Step, StepLabel, StepContent} from '../index'
import StepOneAddExchangeKey from './StepOneAddExchangeKey'
import StepTwoAddEmail from './StepTwoAddEmail'
import {DocItem} from '../../../stories/UIExplorer'

const debug = require('debug')('react-mdl-library:steppers:examples:BasicUsage')

class BasicUsage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 1,
    }
  }

  openStep1 = (evt) => {
    if(evt && evt.preventDefault) {
      evt.preventDefault()
    }
    return this.setState(preState => ({
      value: 1,
    }))
  }

  openStep2 = (evt) => {
    if(evt && evt.preventDefault) {
      evt.preventDefault()
    }
    return this.setState(preState => ({
      value: 2,
    }))
  }

  openStep3 = (evt) => {
    if(evt && evt.preventDefault) {
      evt.preventDefault()
    }
    return this.setState(preState => ({
      value: 3,
    }))
  }

  back = (evt) => {
    if(evt && evt.preventDefault) {
      evt.preventDefault()
    }
    return this.setState(preState => ({
      value: preState.value - 1 > 0 ? preState.value - 1 : 5,
    }))
  }

  next = (evt) => {
    if(evt && evt.preventDefault) {
      evt.preventDefault()
    }
    return this.setState(preState => ({
      value: preState.value + 1 <= 5 ? preState.value + 1 : 1,
    }))
  }

  done = (evt) => {
    evt.preventDefault()
    alert('done')
  }

  render() {
    debug('render')

    const { value } = this.state
  
    return (
      // <DocItem
      //   render={
        <React.Fragment>
          <Stepper active={value} vertical>
            <Step step={1}>
              <StepLabel option="Text option" onClick={this.openStep1}>
                Add exchange key
              </StepLabel>
              <StepContent>
                <StepOneAddExchangeKey
                  next={this.next}
                  back={this.back}
                />
              </StepContent>
            </Step>
            <Step step={2}>
              <StepLabel onClick={this.openStep2}>
                Add your email address
              </StepLabel>
              <StepContent>
                <StepTwoAddEmail 
                  next={this.next}
                  back={this.back}
                />
              </StepContent>
            </Step>
            <Step step={3}>
              <StepLabel onClick={this.openStep3}>
                Create an ad
              </StepLabel>
              <StepContent>
                <React.Fragment>
                  <div>
                    <h1 className="mdc-typography--headline1">Headline 1</h1>
                    <h2 className="mdc-typography--headline2">Headline 2</h2>
                    <h3 className="mdc-typography--headline3">Headline 3</h3>
                    <h4 className="mdc-typography--headline4">Headline 4</h4>
                    <h5 className="mdc-typography--headline5">Headline 5</h5>
                    <h6 className="mdc-typography--headline6">Headline 6</h6>
                    <h6 className="mdc-typography--subtitle1">Subtitle 1</h6>
                    <h6 className="mdc-typography--subtitle2">Subtitle 2</h6>
                    <p className="mdc-typography--body1">Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
                    <p className="mdc-typography--body2">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.</p>
                    <div>
                      <span className="mdc-typography--button">Button text</span>
                    </div>
                    <div>
                      <span className="mdc-typography--caption">Caption text</span>
                    </div>
                    <div>
                      <span className="mdc-typography--overline">Overline text</span>
                    </div>
                  </div>
                  <Button onClick={this.back}>
                    Back
                  </Button>
                  <Button raised onClick={this.next}>
                    Next
                  </Button>
                </React.Fragment>
              </StepContent>
            </Step>
            <Step step={4}>
              <StepLabel>Create an ad</StepLabel>
              <StepContent>
                <React.Fragment>
                <p className="mdc-typography--body1">
                  Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.
                </p>
                <Button onClick={this.back}>
                  Back
                </Button>
                <Button raised onClick={this.next}>
                  Next
                </Button>
                </React.Fragment>
              </StepContent>
            </Step>
            <Step step={5}>
              <StepLabel>Create an ad</StepLabel>
              <StepContent>
                <React.Fragment>
                <p className="mdc-typography--body1">
                  Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.
                </p>
                <Button onClick={this.back}>
                  Back
                </Button>
                <Button raised onClick={this.done}>
                  Done
                </Button>
                </React.Fragment>
              </StepContent>
            </Step>
          </Stepper>
        </React.Fragment>
      // }/>
    )
  }
}

BasicUsage.propTypes = {}

BasicUsage.defaultProps = {}

BasicUsage.displayName = 'BasicUsage'

export default BasicUsage
