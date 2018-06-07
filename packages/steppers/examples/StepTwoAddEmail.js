import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Button from '../../button'
import {DocItem} from '../../../stories/UIExplorer'

const debug = require('debug')('react-mdl-library:steppers:examples:StepTwoAddEmail')
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class StepTwoAddEmail extends React.Component {

  state = {
    email: null,
    disabled: false,
  }

  handleEmailChange = (evt) => {
    evt.preventDefault()
    const {value} = evt.target
    this.setState({
      email: value,
    }, this.checkProcess)
  }

  checkProcess = () => {
    const {email} = this.state
    if(this.validateEmail(email)) {
      this.props.setValue({
        error: false,
      })
    }
  }

  validateEmail = (email) => {
    return re.test(String(email).toLowerCase())
  }

  next = (evt) => {
    evt.preventDefault()
    const {email} = this.state
    if(this.validateEmail(email)) {
      this.props.setValue({
        error: false,
        completed: true,
      }, () => {
        this.props.next(evt)
      })
    } else {
      this.props.setValue({
        error: true,
        completed: false,
      })
    }
  }

  render() {
    debug('render')
  
    const {
      email,
      disabled,
    } = this.state

    const {
      active,
      className,
      ...other
    } = this.props

    const classes = ClassNames('mdc-step__content', className)
  
    const classesContent = ClassNames('j191 j272', {
      'mdc-step__content-active': active,
    })

    return (
      <React.Fragment>
        <p className="mdc-typography--body1">
          We will send you a report email everyday to shows you how your investment performance, asset allocation, top gain/loss, news ...
        </p>
        <input type="text" placeholder="Email" value={email} onChange={this.handleEmailChange} />
        <br /> <br />
        <Button onClick={this.props.back}>
          Back
        </Button>
        <Button raised disabled={disabled} onClick={this.next}>
          Next
        </Button>
      </React.Fragment>
    )
  }
}

StepTwoAddEmail.propTypes = {
  next: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
}

StepTwoAddEmail.defaultProps = {}

StepTwoAddEmail.displayName = 'StepTwoAddEmail'

export default StepTwoAddEmail
