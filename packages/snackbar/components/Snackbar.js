import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {cssClasses, strings, numbers} from '../constants'

const debug = require('debug')('react-mdl-library:snackbar:components:Snackbar')

class Snackbar extends React.PureComponent {
  constructor(props) {
    super(props)

    this.active_ = false
    this.actionWasClicked_ = false
    this.dismissOnAction_ = true
    this.firstFocus_ = true
    this.pointerDownRecognized_ = false
    this.snackbarHasFocus_ = false
    this.snackbarData_ = null
    this.queue_ = []
  }

  getText = () => this.adapter_.querySelector(strings.TEXT_SELECTOR)

  getActionButton = () => this.adapter_.querySelector(strings.ACTION_BUTTON_SELECTOR)

  unsetAriaHidden = () => this.adapter_.removeAttribute('aria-hidden')

  setAriaHidden = () => this.adapter_.setAttribute('aria-hidden', 'true')

  blurHandler_ = () => {
    if(this.active_) return
    clearTimeout(this.timeoutId_)
    this.snackbarHasFocus_ = false
    this.timeoutId_ = setTimeout(this.props.onClose, this.props.timeout || numbers.MESSAGE_TIMEOUT)
  }
  // setFocus: () => getActionButton().focus(),

  show(active) {
    if(!active || this.active_) return
    clearTimeout(this.timeoutId_)
    this.firstFocus_ = true

    this.active_ = true
    this.unsetAriaHidden()
    if(this.props.onShow){
      this.props.onShow()
    }
    this.timeoutId_ = setTimeout(this.props.onClose, this.props.timeout || numbers.MESSAGE_TIMEOUT)
  }

  cleanup_ = () => {
    if(this.props.active || !this.active_) return
    clearTimeout(this.timeoutId_)
    this.setAriaHidden()
    this.active_ = false
    this.snackbarHasFocus_ = false
    if(this.props.onHide){
      this.props.onHide()
    }
  }


  componentWillReceiveProps = (nextProps) => {
    this.show(nextProps.active)
  }

  componentDidMount = () => {
    this.show(this.props.active)
  }

  render() {
    debug('render')

    const {children, className, active, actionOnBottom, multiline, align} = this.props
    const classes = ClassNames(
      cssClasses.ROOT,
      {[cssClasses.MULTILINE]: multiline},
      {[cssClasses.ACTION_ON_BOTTOM]: multiline && actionOnBottom},
      {[cssClasses.ACTIVE]: active},
      {'mdc-snackbar--align-start': align === 'start' || align === 'end'},
      className,
    )

    return (
      <div dir={align === 'end' ? 'rtl' : ''}>
        <div className={classes} aria-live="assertive" aria-atomic="true" onBlur={this.blurHandler_} onTransitionEnd={this.cleanup_} ref={c => {
          this.adapter_ = c
        }}>
          {children}
        </div>
      </div>
    )
  }
}


Snackbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
  actionOnBottom: PropTypes.bool,
  multiline: PropTypes.bool,
  align: PropTypes.oneOf(['start', 'end']),
  timeout: PropTypes.number,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
  onClose: PropTypes.func.isRequired,
}

Snackbar.defaultProps = {
  active: false,
  actionOnBottom: false,
  multiline: false,
  timeout: numbers.MESSAGE_TIMEOUT,
}

Snackbar.displayName = 'Snackbar'

export default Snackbar
