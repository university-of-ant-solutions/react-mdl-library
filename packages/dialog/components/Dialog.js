import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import debounce from 'lodash/debounce'
import {cssClasses} from '../constants'
import {addClass, removeClass} from '../../utils'
// https://github.com/material-components/material-components-web/blob/master/packages/mdc-dialog/foundation.js

const debug = require('debug')('react-mdl-library:dialog:Dialog')

class Dialog extends React.PureComponent {
  constructor(props) {
    super(props)

    this.openState_ = props.open
  }

  disableScroll_() {  
    if(!document || !document.body || !this.props.backdrop) return
    addClass(document.body, cssClasses.SCROLL_LOCK)
  }

  enableScroll_() {
    if(!document || !document.body || !this.props.backdrop) return
    removeClass(document.body, cssClasses.SCROLL_LOCK)
  }

  transitionEndHandler_ = debounce((evt) => {
    if(!this.aside) return
    removeClass(this.aside, cssClasses.ANIMATING)
  }, 120)

  open_ = () => {
    if(!this.aside || this.openState_) return
    this.openState_ = true

    addClass(this.aside, cssClasses.OPEN)
    addClass(this.aside, cssClasses.ANIMATING)
    this.disableScroll_()
  }

  close_ = () => {
    if(!this.aside || !this.openState_) return
    this.openState_ = false

    removeClass(this.aside, cssClasses.OPEN)
    addClass(this.aside, cssClasses.ANIMATING)
    this.enableScroll_()
  }

  handler_ = (open) => {
    if(open) this.open_()
    else this.close_()
  }

  componentWillReceiveProps = (nextProps) => {
    this.handler_(nextProps.open)
  }

  componentDidMount = () => {
    if(this.props.open){
      this.open_(this.props.open)
    }
  }

  render() {
    debug('render')

    const {children, className, open, backdrop, ...other} = this.props
    const classes = ClassNames(cssClasses.ROOT, className)

    return (
      <aside className={classes} onTransitionEnd={this.transitionEndHandler_} {...other} ref={aside => {
        this.aside = aside
      }}>
        {children}
        {backdrop && <div className={cssClasses.BACKDROP}></div>}
      </aside>
    )
  }
}

Dialog.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool,
  backdrop: PropTypes.bool,
}

Dialog.defaultProps = {
  open: false,
  backdrop: true,
}

Dialog.displayName = 'Dialog'

export default Dialog