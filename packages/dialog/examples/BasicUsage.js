import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Dialog, {DialogFooter, DialogHeader, DialogBody, DialogSurface} from '../index'
import {DocItem} from '../../../stories/UIExplorer'

const debug = require('debug')('react-mdl-library:dialog:examples:BasicUsage')

class BasicUsage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: false,
    }
  }

  setValue = value => {
    return this.setState({
      value
    })
  }

  open = () => {
    this.setValue(true)
  }

  close = () => {
    this.setValue(false)
  }

  render() {
    debug('render')
    const { value } = this.state
    return (
      <React.Fragment>
        <button type="button" onClick={this.open} className="mdc-button mdc-ripple-upgraded mdc-theme--text-primary-on-primary">Open</button>
        <DocItem
          render={
          <Dialog open={value}>
            <DialogSurface className="mdc-theme--primary-bg">
              <DialogHeader>
                <h2 className="mdc-dialog__header__title">
                  Are you happy?
                </h2>
              </DialogHeader>
              <DialogBody>
                Please check the left and right side of this element for fun.
              </DialogBody>
              <DialogFooter>
                <button type="button" onClick={this.close} className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel mdc-ripple-upgraded  mdc-theme--text-primary-on-primary">Cancel</button>
                <button type="button" onClick={this.close} className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept mdc-ripple-upgraded  mdc-theme--text-primary-on-primary">Continue</button>
              </DialogFooter>
            </DialogSurface>
          </Dialog>
        }/>
      </React.Fragment>
    )
  }
}

BasicUsage.propTypes = {}

BasicUsage.defaultProps = {}

BasicUsage.displayName = 'BasicUsage'

export default BasicUsage