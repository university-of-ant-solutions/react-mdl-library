import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Snackbar, {SnackbarAction, SnackbarText} from '../index'
import Button from '../../button'
import {DocItem} from '../../../stories/UIExplorer'

const debug = require('debug')('react-mdl-library:snackbar:examples:BasicExample')

class BasicExample extends React.Component {
  constructor(props) {
    super(props)

    this.index_ = 0
    this.state = {
      value: false,
      message: `BTC price has changed +${this.index_}% today`,
      status: 'hide'
    }
  }

  open = (evt) => {
    evt.preventDefault()
    debug('open')
    if(this.state.value) return
    this.index_++
    return this.setState({
      value: true,
      message: `BTC price has changed +${this.index_}% today`,
    })
  }

  onClose = () => {
    debug('close')
    return this.setState({
      value: false,
    })
  }

  onShow = (evt) => {
    debug('onShow')
    this.setState({
      status: 'show',
    })
  }

  onHide = (evt) => {
    debug('onHide')
    this.setState({
      status: 'hide',
    })
  }

  render() {
    debug('render')

    const {value, message, status} = this.state
    
    return (

        <React.Fragment>
          <Button onClick={this.open}>
            Open
          </Button>
          <a href="#">
            go to
          </a>
          <br />
          <span>status = {status}</span>
          <Snackbar active={value} align="start" className="mdc-theme--primary-bg" onShow={this.onShow} onHide={this.onHide} onClose={this.onClose}>
            <SnackbarText>
              {message}
            </SnackbarText>
            <SnackbarAction>
              <Button className="mdc-theme--text-primary-on-primary">
                view
              </Button>
            </SnackbarAction>
          </Snackbar>
        </React.Fragment>

    )
  }
}

BasicExample.propTypes = {}

BasicExample.defaultProps = {}

BasicExample.displayName = 'BasicExample'

export default BasicExample

// mdc-snackbar__action-button
