import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Button from '../../button'
import {DocItem} from '../../../stories/UIExplorer'

const debug = require('debug')('react-mdl-library:steppers:examples:StepOneAddExchangeKey')

class StepOneAddExchangeKey extends React.Component {

  state = {
    apikey: null,
    apisecretkey: null,
    disabled: false,
  }

  handleAPIKeyChange = (evt) => {
    evt.preventDefault()
    const {value} = evt.target
    this.setState({
      apikey: value,
    })
  }

  handleAPISecretKeyChange = (evt) => {
    evt.preventDefault()
    const {value} = evt.target
    this.setState({
      apisecretkey: value,
    })
  }

  validateValue = (value) => (value && value !== '')

  checkProcess = () => {
    
  }

  next = (evt) => {
    evt.preventDefault()
    
    // process logic here
    const {apikey, apisecretkey} = this.state
    if(this.validateValue(apikey) && this.validateValue(apisecretkey)) {
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
      apikey,
      apisecretkey,
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
          Please, enter the odd number:         
        </p>
        <input type="text" placeholder="API Key" value={apikey} onChange={this.handleAPIKeyChange} />
        <br />
        <input type="text" placeholder="API Secret Key" value={apisecretkey} onChange={this.handleAPISecretKeyChange} />
        <br /> <br />
        <Button disabled>
          Back
        </Button>
        <Button raised disabled={disabled} onClick={this.next}>
          Next
        </Button>
      </React.Fragment>
    )
  }
}

StepOneAddExchangeKey.propTypes = {
  next: PropTypes.func.isRequired,
}

StepOneAddExchangeKey.defaultProps = {}

StepOneAddExchangeKey.displayName = 'StepOneAddExchangeKey'

export default StepOneAddExchangeKey
