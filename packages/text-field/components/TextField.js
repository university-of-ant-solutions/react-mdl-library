import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {cssClasses} from '../constants'
import {addClass, removeClass, randomID} from '../../utils'

const debug = require('debug')('react-mdl-library:text-field:TextField')

class TextField extends React.PureComponent {

  inputFocusHandler_ = () => this.activateFocus()

  inputBlurHandler_ = () => this.deactivateFocus()


  inputInputHandler_ = () => {

  }

  setPointerXOffset_ = () => {

  }

  textFieldInteractionHandler_ = () => {

  }

  validationAttributeChangeHandler_ = () => {

  }

  /**
   * Activates the text field focus state.
   */
  activateFocus() {
    this.isFocused_ = true
    this.styleFocused_(this.isFocused_)
    // this.adapter_.activateLineRipple()
    // this.notchOutline(this.shouldFloat)
    // if (this.adapter_.hasLabel()) {
    //   this.adapter_.shakeLabel(this.shouldShake)
    //   this.adapter_.floatLabel(this.shouldFloat)
    // }
    // if (this.helperText_) {
    //   this.helperText_.showToScreenReader()
    // }
  }

  /**
   * Styles the component based on the focused state.
   * @param {boolean} isFocused
   * @private
   */
  styleFocused_(isFocused) {
    if (isFocused) {
      addClass(this.adapter_, cssClasses.FOCUSED)
    } else {
      removeClass(this.adapter_, cssClasses.FOCUSED)
    }
  }

  /**
   * Deactivates the Text Field's focus state.
   */
  deactivateFocus() {
    this.isFocused_ = false
    // this.adapter_.deactivateLineRipple();
    // const input = this.getNativeInput_();
    // const shouldRemoveLabelFloat = !input.value && !this.isBadInput_();
    // const isValid = this.isValid();
    // this.styleValidity_(isValid);
    this.styleFocused_(this.isFocused_)
    // if (this.adapter_.hasLabel()) {
    //   this.adapter_.shakeLabel(this.shouldShake);
    //   this.adapter_.floatLabel(this.shouldFloat);
    //   this.notchOutline(this.shouldFloat);
    // }
    // if (shouldRemoveLabelFloat) {
    //   this.receivedUserInput_ = false;
    // }
  }

  render() {
    debug('render')
    const {className} = this.props

    const classes = ClassNames(
      cssClasses.ROOT,
      cssClasses.UPGRADED,
      className,
    )
    // mdc-line-ripple--active
    return (
      <div className={classes}
        onFocus={this.inputFocusHandler_}
        onBlur={this.inputBlurHandler_}
        ref={adapter_ => {
        this.adapter_ = adapter_
      }}>
        <input type="text" className="mdc-text-field__input" id="my-text-field" aria-controls="my-text-field-helper-text" />
        <label for="my-text-field" className="mdc-floating-label mdc-floating-label--float-above">Text Field</label>
        <div className="mdc-line-ripple" style={{
          transformOrigin: '81px center 0px',
        }}>
        </div>
      </div>
    )
  }
}

TextField.propTypes = {
  className: PropTypes.string,
}

TextField.defaultProps = {}

TextField.displayName = 'TextField'

export default TextField