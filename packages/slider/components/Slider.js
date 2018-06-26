import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import isNaN from 'lodash/isNaN'
import {cssClasses, strings, numbers} from '../constants'
import {addClass, removeClass, getCorrectEventName, getCorrectPropertyName} from '../../utils'

const debug = require('debug')('react-mdl-library:slider:Slider')

/** @enum {string} */
const KEY_IDS = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
}

/** @enum {string} */
// const MOVE_EVENT_MAP = {
//   'mousedown': 'mousemove',
//   'touchstart': 'touchmove',
//   'pointerdown': 'pointermove',
// }

// const DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart']
// const UP_EVENTS = ['mouseup', 'pointerup', 'touchend']

class Slider extends Component {
  constructor(props) {
    super(props)

    debug('constructor')

    /** @private {?ClientRect} */
    this.savedTabIndex_ = NaN;
    this.rect_ = null
    this.active_ = false
    this.inTransit_ = false
    this.preventFocusState_ = false
    this.step_ = props.step
    this.value_ = props.value
  }

  /**
   * Toggles the active state of the slider
   * @param {boolean} active
   */
  setActive_ = (active) => {
    this.active_ = active
    if(active) {
      addClass(this.adapter_, cssClasses.ACTIVE)
    }
    else {
      removeClass(this.adapter_, cssClasses.ACTIVE)
    }
  }

  /**
   * Returns the pageX of the event
   * @param {!Event} evt
   * @return {number}
   * @private
   */
  getPageX_(evt) {
    if (evt.targetTouches && evt.targetTouches.length > 0) {
      return evt.targetTouches[0].pageX
    }
    return evt.pageX
  }

  /**
   * Computes the new value from the pageX position
   * @param {number} pageX
   * @return {number}
   */
  computeValueFromPageX_(pageX) {
    const {max, min} = this.props
    const xPos = pageX - this.rect_.left
    let pctComplete = xPos / this.rect_.width
    
    // NOTE: currently, we dont support isRTL
    if (this.isRTL()) {
      pctComplete = 1 - pctComplete
    }
    
    // Fit the percentage complete between the range [min,max]
    // by remapping from [0, 1] to [min, min+(max-min)].
    return min + pctComplete * (max - min)
  }

  /**
   * Toggles the inTransit state of the slider
   * @param {boolean} inTransit
   */
  setInTransit_ = (inTransit) => {
    this.inTransit_ = inTransit
    if(active) {
      addClass(this.adapter_, cssClasses.ACTIVE)
    }
    else {
      removeClass(this.adapter_, cssClasses.ACTIVE)
    }
    this.toggleClass_(cssClasses.IN_TRANSIT, this.inTransit_)
  }

  // https://github.com/material-components/material-components-web/blob/master/packages/mdc-slider/foundation.js#L279
  interactionStartHandler_ = (evt) => {
    if (this.props.disabled) {
      return
    }
    this.preventFocusState_ = true
    // this.setInTransit_(!this.handlingThumbTargetEvt_)
    // this.handlingThumbTargetEvt_ = false
    this.setActive_(true)

    /**
    const moveHandler = (evt) => {
      this.handleMove_(evt);
    };

    // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
    // do not always fire these consistently in pairs.
    // (See https://github.com/material-components/material-components-web/issues/1192)
    const upHandler = () => {
      this.handleUp_();
      this.adapter_.deregisterBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
      UP_EVENTS.forEach((evtName) => this.adapter_.deregisterBodyInteractionHandler(evtName, upHandler));
    };

    this.adapter_.registerBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
    UP_EVENTS.forEach((evtName) => this.adapter_.registerBodyInteractionHandler(evtName, upHandler));
    */
   this.setValueFromEvt_(evt)
  }

  /**
   * Sets the slider value from an event
   * @param {!Event} evt
   * @private
   */
  setValueFromEvt_ = (evt) => {
    const pageX = this.getPageX_(evt)
    const value = this.computeValueFromPageX_(pageX)
    this.setValue_(value, true)
  }

  /**
   * Sets the value of the slider
   * @param {number} value
   * @param {boolean} shouldFireInput
   * @param {boolean=} force
   */
  setValue_ = (value, shouldFireInput, force = false) => {
    if (value === this.value_ && !force) {
      return
    }

    const {min, max} = this.props
    const valueSetToBoundary = value === min || value === max
    if (this.step_ && !valueSetToBoundary) {
      value = this.quantize_(value)
    }
    if (value < min) {
      value = min
    } else if (value > max) {
      value = max
    }
    this.value_ = value
    this.adapter_.setAttribute(strings.ARIA_VALUENOW, String(this.value_))
    this.updateUIForCurrentValue_()

    // if (shouldFireInput) {
    //   this.adapter_.notifyInput();
    //   if (this.isDiscrete_) {
    //     this.adapter_.setMarkerValue(value);
    //   }
    // }
    if (this.props.notifyInput) {
      this.props.notifyInput(value)
    }
    if (this.props.discrete) {
      this.setMarkerValue(value)
    }
  }

  /**
   * Calculates the quantized value
   * @param {number} value
   * @return {number}
   */
  quantize_(value) {
    const numSteps = Math.round(value / this.step_)
    const quantizedVal = numSteps * this.step_
    return quantizedVal
  }

  setMarkerValue = (value) => {
    this.pinValueMarker_.innerText = value
  }

  computeBoundingRect = () => this.adapter_.getBoundingClientRect()

  layout = () => {
    this.rect_ = this.computeBoundingRect()
    this.updateUIForCurrentValue_()
  }

  updateUIForCurrentValue_ = () => {
    const {value_: value} = this
    const {max, min} = this.props
    const pctComplete = (value - min) / (max - min)
    let translatePx = pctComplete * this.rect_.width
    // NOTE: currently, we dont support isRTL
    if (this.isRTL()) {
      translatePx = this.rect_.width - translatePx
    }

    const transformProp = getCorrectPropertyName(window, 'transform');
    const transitionendEvtName = getCorrectEventName(window, 'transitionend');

    if (this.inTransit_) {
      const onTransitionEnd = () => {
        this.setInTransit_(false)
        this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd)
      }
      this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd)
    }

    this.updateUIFrame_ = requestAnimationFrame(() => {
      // NOTE(traviskaufman): It would be nice to use calc() here,
      // but IE cannot handle calcs in transforms correctly.
      // See: https://goo.gl/NC2itk
      // Also note that the -50% offset is used to center the slider thumb.
      this.setThumbContainerStyleProperty(transformProp, `translateX(${translatePx}px) translateX(-50%)`)
      this.setTrackStyleProperty(transformProp, `scaleX(${pctComplete})`)
    })
  }

  setThumbContainerStyleProperty = (propertyName, value) => {
    this.thumbContainer_.style.setProperty(propertyName, value)
  }

  setTrackStyleProperty = (propertyName, value) => {
    this.track_.style.setProperty(propertyName, value)
  }

  /**
   * Called when the user moves the slider
   * @param {!Event} evt
   * @private
   */
  handleMove_ = (evt) => {
    evt.preventDefault()
    if(this.active_ === false) return
    this.setValueFromEvt_(evt)
  }

  handleFocus_() {
    if (this.preventFocusState_) {
      return
    }
    addClass(this.adapter_, cssClasses.FOCUS)
  }

  handleBlur_() {
    this.preventFocusState_ = false
    removeClass(this.adapter_, cssClasses.FOCUS)
  }

  /**
   * Called when the user's interaction with the slider ends
   * @private
   */
  handleUp_ = () => {
    this.setActive_(false)
    // this.adapter_.notifyChange()
    if(this.props.notifyChange) {
      this.props.notifyChange(this.value_)
    }
  }

  /**
   * Handles keydown events
   * @param {!Event} evt
   */
  handleKeydown_ = (evt) => {
    const keyId = this.getKeyId_(evt)
    const value = this.getValueForKeyId_(keyId)
    if (isNaN(value)) {
      return
    }

    // Prevent page from scrolling due to key presses that would normally scroll the page
    evt.preventDefault();
    addClass(this.adapter_, cssClasses.FOCUS)
    this.setValue_(value, true)
    // this.adapter_.notifyChange()
    this.props.notifyChange(value)
  }

  /**
   * Returns the computed name of the event
   * @param {!Event} kbdEvt
   * @return {string}
   */
  getKeyId_ = (kbdEvt) => {
    if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
      return KEY_IDS.ARROW_LEFT
    }
    if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
      return KEY_IDS.ARROW_RIGHT
    }
    if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
      return KEY_IDS.ARROW_UP
    }
    if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
      return KEY_IDS.ARROW_DOWN
    }
    if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
      return KEY_IDS.HOME
    }
    if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
      return KEY_IDS.END
    }
    if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
      return KEY_IDS.PAGE_UP
    }
    if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
      return KEY_IDS.PAGE_DOWN
    }

    return ''
  }

  isRTL = () => {
    return this.props.rtl
  }

  /**
   * Computes the value given a keyboard key ID
   * @param {string} keyId
   * @return {number}
   */
  getValueForKeyId_ = (keyId) => {
    const {max, min} = this.props
    const {step_: step} = this

    let delta = step || (max - min) / 100
    
    // NOTE: currently, we dont support isRTL
    const valueNeedsToBeFlipped = this.isRTL() && (
      keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT
    )
    if (valueNeedsToBeFlipped) {
      delta = -delta
    }

    switch (keyId) {
    case KEY_IDS.ARROW_LEFT:
    case KEY_IDS.ARROW_DOWN:
      return this.value_ - delta
    case KEY_IDS.ARROW_RIGHT:
    case KEY_IDS.ARROW_UP:
      return this.value_ + delta
    case KEY_IDS.HOME:
      return this.min_
    case KEY_IDS.END:
      return this.max_
    case KEY_IDS.PAGE_UP:
      return this.value_ + delta * numbers.PAGE_FACTOR
    case KEY_IDS.PAGE_DOWN:
      return this.value_ - delta * numbers.PAGE_FACTOR
    default:
      return NaN
    }
  }

  getTrackMarkerRows = () => {
    const rows = []
    for (let i = 0; i < this.props.max; i++) {
      rows.push( <div className="mdc-slider__track-marker" key={i} />)
    }
    return rows
  }

  /** @return {boolean} */
  isDisabled() {
    return this.props.disabled
  }

  /** @param {boolean} disabled */
  setDisabled(disabled) {
    // this.disabled_ = disabled;
    // this.toggleClass_(cssClasses.DISABLED, this.disabled_);
    if (disabled) {
      this.savedTabIndex_ = this.adapter_.tabIndex
      this.adapter_.setAttribute(strings.ARIA_DISABLED, 'true')
      this.adapter_.removeAttribute('tabindex')
    } else {
      this.adapter_.removeAttribute(strings.ARIA_DISABLED)
      if (!isNaN(this.savedTabIndex_)) {
        this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_))
      }
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.layout)
  }

  componentDidMount = () => {
    this.layout()
    // At last step, provide a reasonable default value to discrete slider
    if (this.props.discrete && this.step_ == 0) {
      this.step_ = 1
    }
    window.addEventListener('resize', this.layout)
    this.setDisabled(this.props.disabled)
  }

  render() {
    debug('render')

    const {className, discrete, disabled, markers, rtl, min, max, notifyInput, notifyChange, ...other} = this.props
    const classes = ClassNames('mdc-slider', {
      'mdc-slider--discrete': discrete,
      'mdc-slider--display-markers': markers,
      'mdc-slider--disabled': disabled,
    }, className)

    return (
      <div
        dir={rtl ? 'rtl': ''}
        className={classes}
        tabIndex="0"
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={this.value_}
        aria-label="Select Value"
        ref={slider => {
          this.adapter_ = slider
        }}
        {...other}
        onMouseDown={this.interactionStartHandler_}
        onPointerDown={this.interactionStartHandler_}
        onTouchStart={this.interactionStartHandler_}
        onMouseMove={this.handleMove_}
        onTouchMove={this.handleMove_}
        onPointerMove={this.handleMove_}
        onMouseUp={this.handleUp_}
        onPointerUp={this.handleUp_}
        onTouchEnd={this.handleUp_}
        onKeyDown={this.handleKeydown_}
        >
          <div className="mdc-slider__track-container">
            <div className="mdc-slider__track" ref={track => {
              this.track_ = track
            }}></div>
            {markers && <div className="mdc-slider__track-marker-container">
              {this.getTrackMarkerRows()}
            </div>
            }
          </div>
          <div className="mdc-slider__thumb-container" ref={thumbContainer => {
            this.thumbContainer_ = thumbContainer
          }}>
            <div className="mdc-slider__pin">
              <span className="mdc-slider__pin-value-marker" ref={pin => {
                this.pinValueMarker_ = pin
              }}>{this.value_}</span>
            </div>
            <svg className="mdc-slider__thumb" width="21" height="21">
              <circle cx="10.5" cy="10.5" r="7.875"></circle>
            </svg>
            <div className="mdc-slider__focus-ring"></div>
          </div>
      </div>
    )
  }
}

Slider.propTypes = {
  className: PropTypes.string,
  discrete: PropTypes.bool,
  disabled: PropTypes.bool,
  markers: PropTypes.bool,
  rtl: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  notifyInput: PropTypes.func,
  notifyChange: PropTypes.func,
}

Slider.defaultProps = {
  discrete: false,
  disabled: false,
  markers: false,
  rtl: false,
  min: 0,
  max: 100,
  step: 0,
  value: 0,
}

Slider.displayName = 'Slider'

export default Slider