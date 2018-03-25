import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import debounce from 'lodash/debounce'
import {cssClasses, strings} from '../constants'
import {
  addClass,
  removeClass,
  hasClass,
  restoreElementTabState,
  saveElementTabState,
  makeElementUntabbable,
  registerDocumentKeydownHandler,
  deregisterDocumentKeydownHandler,
} from '../../utils'

const debug = require('debug')('react-mdl-library:drawers:Drawer')

class Drawer extends React.Component {

  constructor(props) {
    super(props)

    this.openState_ = props.open
  }

  disableScroll_() {  
    if(!document || !document.body) return
    addClass(document.body, cssClasses.SCROLL_LOCK)
  }

  enableScroll_() {
    if(!document || !document.body) return
    removeClass(document.body, cssClasses.SCROLL_LOCK)
  }

  transitionEndHandler_ = debounce((evt) => {
    if(!this.aside) return
    // removeClass(this.aside, cssClasses.ANIMATING)
  }, 300)

  documentKeydownHandler_ =  debounce((evt) => {
    if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
      this.props.onClick(evt)
    }
  }, 300)

  // open() {
    // this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_); OK
    // this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_); OK
    // this.adapter_.addClass(this.animatingCssClass_);  OK
    // this.adapter_.addClass(this.openCssClass_);  OK
    // this.retabinate_(); OK
    // // Debounce multiple calls
    // if (!this.isOpen_) {
    //   this.adapter_.notifyOpen();
    // }
    // this.isOpen_ = true; OK
  // }

  // close() {
  //   this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_); OK
  //   this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_); OK
  //   this.adapter_.addClass(this.animatingCssClass_); OK
  //   this.adapter_.removeClass(this.openCssClass_); OK
  //   this.detabinate_(); OK
  //   // Debounce multiple calls
  //   if (this.isOpen_) {
  //     this.adapter_.notifyClose();
  //   }
  //   this.isOpen_ = false; OK
  // }

  open_ = () => {
    if(!this.aside || this.openState_) return
    this.openState_ = true
    
    addClass(this.aside, cssClasses.OPEN)
    addClass(this.aside, cssClasses.ANIMATING)
    registerDocumentKeydownHandler(this.documentKeydownHandler_)
    this.retabinate_()
    this.disableScroll_()
  }

  close_ = () => {
    if(!this.aside || !this.openState_) return
    this.openState_ = false

    removeClass(this.aside, cssClasses.OPEN)
    addClass(this.aside, cssClasses.ANIMATING)
    deregisterDocumentKeydownHandler(this.documentKeydownHandler_)
    this.detabinate_()
    this.enableScroll_()
  }

  getFocusableElements = () => this.aside.querySelectorAll(strings.FOCUSABLE_ELEMENTS)

  /**
   *  Render all children of the drawer inert when it's closed.
   */
  detabinate_ = () => {
    if (this.inert_) {
      return
    }

    const elements = this.getFocusableElements()
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        saveElementTabState(elements[i])
        makeElementUntabbable(elements[i])
      }
    }

    this.inert_ = true
  }

  /**
   *  Make all children of the drawer tabbable again when it's open.
   */
  retabinate_ = () => {
    if (!this.inert_) {
      return
    }

    const elements = this.getFocusableElements()
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        restoreElementTabState(elements[i])
      }
    }

    this.inert_ = false
  }

  handler_ = (open) => {
    if(open) this.open_()
    else this.close_()
  }

  isRootTransitioningEventTarget_() {
    // Classes extending MDCSlidableDrawerFoundation should implement this method to return true or false
    // if the event target is the root event target currently transitioning.
    return false;
  }

  componentClickHandler_ = (evt) => {
    if(hasClass(evt.target, 'mdc-drawer--temporary') || hasClass(evt.target, 'mdc-drawer--persistent')) {
      this.props.onClick(evt)
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.handler_(nextProps.open)
  }

  componentDidMount = () => {
    if(this.props.open){
      this.open_()
    }
  }

  render() {
    debug('render')

    const {children, className, temporary, persistent, open, onClick, ...other} = this.props
    const classes = ClassNames('mdc-drawer', {
      'mdc-drawer--temporary': temporary,
      'mdc-drawer--persistent': persistent,
    }, className)

    return (
      <aside className={classes} onTransitionEnd={this.transitionEndHandler_} {...other} onClick={this.componentClickHandler_} ref={aside => {
        this.aside = aside
      }}>
        <nav className="mdc-drawer__drawer">
          {children}
        </nav>
      </aside>
    )
  }
}

Drawer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  temporary: PropTypes.bool,
  persistent: PropTypes.bool,
  open: PropTypes.bool,
}

Drawer.defaultProps = {
  temporary: false,
  persistent: false,
}

Drawer.displayName = 'Drawer'

export default Drawer