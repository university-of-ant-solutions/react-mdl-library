import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {cssClasses, strings, Corner, CornerBit, numbers} from '../constants'
import {addClass, removeClass, registerBodyClickHandler, deregisterBodyClickHandler} from '../../utils'

/** @type {string|undefined} */
let storedTransformPropertyName_;

/**
 * Returns the name of the correct transform property to use on the current browser.
 * @param {!Window} globalObj
 * @param {boolean=} forceRefresh
 * @return {string}
 */
function getTransformPropertyName(globalObj, forceRefresh = false) {
  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    const el = globalObj.document.createElement('div');
    const transformPropertyName = ('transform' in el.style ? 'transform' : 'webkitTransform');
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

/**
 * FLOW
 *  open => autoPosition_ => getAutoLayoutMeasurements_ 
 */

const debug = require('debug')('react-mdl-library:menu:Menu')

class Menu extends React.Component {
  constructor(props) {
    super(props)

    debug('constructor')
  
    /** @private {boolean} */
    this.isOpen_ = props.open
    /** @private {!{ width: number, height: number }} */
    this.dimensions_
    
    /** @private {Corner} */
    this.anchorCorner_ = Corner[props.anchorCorner]

    /** @private {AnchorMargin} */
    this.anchorMargin_ = {top: 0, right: 0, bottom: 0, left: 0}

    /** @private {number} */
    this.openAnimationEndTimerId_ = 0;
    /** @private {number} */
    this.closeAnimationEndTimerId_ = 0;
    /** @private {number} */
    this.selectedTriggerTimerId_ = 0;
    /** @private {number} */
    this.animationRequestId_ = 0;

    /** @private {number} */
    this.itemHeight_;
    
    /** @private {?AutoLayoutMeasurements} */
    this.measures_ = null;
    /** @private {number} */
    this.selectedIndex_ = -1;
    /** @private {boolean} */
    this.rememberSelection_ = false;
    /** @private {boolean} */
    this.quickOpen_ = false;

    // A keyup event on the menu needs to have a corresponding keydown
    // event on the menu. If the user opens the menu with a keydown event on a
    // button, the menu will only get the key up event causing buggy behavior with selected elements.
    /** @private {boolean} */
    this.keyDownWithinMenu_ = false;
  }

  /**
   * @param {!AnchorMargin} margin 4-plet of margins from anchor.
   */
  setAnchorMargin(margin) {
    this.anchorMargin_.top = typeof margin.top === 'number' ? margin.top : 0;
    this.anchorMargin_.right = typeof margin.right === 'number' ? margin.right : 0;
    this.anchorMargin_.bottom = typeof margin.bottom === 'number' ? margin.bottom : 0;
    this.anchorMargin_.left = typeof margin.left === 'number' ? margin.left : 0;
  }

  setPosition = (position) => {
    this.adapter_.style.left = 'left' in position ? position.left : null;
    this.adapter_.style.right = 'right' in position ? position.right : null;
    this.adapter_.style.top = 'top' in position ? position.top : null;
    this.adapter_.style.bottom = 'bottom' in position ? position.bottom : null;
  }

  getAttributeForEventTarget = (target, attributeName) => target.getAttribute(attributeName)

  /**
   * @param {number} index Index of the item to set as selected.
   */
  setSelectedIndex(index) {
    if (index === this.selectedIndex_) {
      return
    }

    const prevSelectedIndex = this.selectedIndex_
    if (prevSelectedIndex >= 0) {
      this.adapter_.rmAttrForOptionAtIndex(prevSelectedIndex, 'aria-selected')
      this.adapter_.rmClassForOptionAtIndex(prevSelectedIndex, cssClasses.SELECTED_LIST_ITEM)
    }

    this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfItems() ? index : -1
    if (this.selectedIndex_ >= 0) {
      this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true')
      this.adapter_.addClassForOptionAtIndex(this.selectedIndex_, cssClasses.SELECTED_LIST_ITEM)
    }
  }

  handleKeyboardDown_ = (evt) => {

  }

  handleKeyboardUp_ = (evt) => {

  }

  /**
   * Closes the menu.
   * @param {Event=} evt
   */
  close = (evt = null) => {
    if(!this.adapter_ || !this.isOpen_) return

    const targetIsDisabled = evt ?
      this.adapter_.getAttributeForEventTarget(evt.target, strings.ARIA_DISABLED_ATTR) === 'true' :
      false

    if (targetIsDisabled) {
      return;
    }

    deregisterBodyClickHandler(this.documentClickHandler_)

    const {quickOpen} = this.props

    if (!quickOpen) {
      addClass(this.adapter_, cssClasses.ANIMATING_CLOSED)
    }

    requestAnimationFrame(() => {
      removeClass(this.adapter_, cssClasses.OPEN)
      if (!quickOpen) {
        this.closeAnimationEndTimerId_ = setTimeout(() => {
          this.closeAnimationEndTimerId_ = 0;
          removeClass(this.adapter_, cssClasses.ANIMATING_CLOSED);
        }, numbers.TRANSITION_CLOSE_DURATION);
      }
    });
    this.isOpen_ = false
    this.restoreFocus()
  }

  // notifyCancel = () => {
  //   throw new Error('not implement yet')
  // }

  // notifySelected = () => {
  //   throw new Error('not implement yet')
  // }

  /**
   * FOCUS SECTION
   * Open the menu.
   * @param {{focusIndex: ?number}=} options
   */
  saveFocus = () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/activeElement
    this.previousFocus_ = document.activeElement
  }
  restoreFocus = () => {
    if (this.previousFocus_) {
      this.previousFocus_.focus()
    }
  }
  isFocused = () => document.activeElement === this.adapter_
  focus = () => this.adapter_.focus()
  getFocusedItemIndex = () => this.items.indexOf(document.activeElement)
  focusItemAtIndex = (index) => this.items[index].focus()

  /**
   * @param {?number} focusIndex
   * @private
   */
  focusOnOpen_ = (focusIndex) => {
    if (focusIndex === null) {
      // If this instance of MDCMenu remembers selections, and the user has
      // made a selection, then focus the last selected item
      if (this.rememberSelection_ && this.selectedIndex_ >= 0) {
        this.adapter_.focusItemAtIndex(this.selectedIndex_);
        return;
      }

      this.adapter_.focus();
      // If that doesn't work, focus first item instead.
      if (!this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(0);
      }
    } else {
      this.adapter_.focusItemAtIndex(focusIndex);
    }
  }
  /**
   * FOCUS SECTION
   */

  /** @private */
  hasAnchor = () => this.adapter_.parentElement && this.adapter_.parentElement.classList.contains('mdc-menu-anchor')

  /**
   * @param {Corner} corner Origin corner of the menu.
   * @return {number} Maximum height of the menu, based on available space. 0 indicates should not be set.
   * @private
   */
  getMenuMaxHeight_ = (corner) => {
    let maxHeight = 0;
    const {viewportDistance} = this.measures_;
    const isBottomAligned = Boolean(corner & CornerBit.BOTTOM);

    // When maximum height is not specified, it is handled from css.
    if (this.anchorCorner_ & CornerBit.BOTTOM) {
      if (isBottomAligned) {
        maxHeight = viewportDistance.top + this.anchorMargin_.top;
      } else {
        maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom;
      }
    }

    return maxHeight;
  }

  /**
   * @param {Corner} corner Origin corner of the menu.
   * @return {number} Horizontal offset of menu origin corner from corresponding anchor corner.
   * @private
   */
  getHorizontalOriginOffset_ = (corner) => {
    const {anchorWidth} = this.measures_;
    const isRightAligned = Boolean(corner & CornerBit.RIGHT);
    const avoidHorizontalOverlap = Boolean(this.anchorCorner_ & CornerBit.RIGHT);
    let x = 0;
    if (isRightAligned) {
      const rightOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.left : this.anchorMargin_.right;
      x = rightOffset;
    } else {
      const leftOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.right : this.anchorMargin_.left;
      x = leftOffset;
    }
    return x;
  }

  /**
   * @param {Corner} corner Origin corner of the menu.
   * @return {number} Vertical offset of menu origin corner from corresponding anchor corner.
   * @private
   */
  getVerticalOriginOffset_ = (corner) => {
    const {viewport, viewportDistance, anchorHeight, menuHeight} = this.measures_
    const isBottomAligned = Boolean(corner & CornerBit.BOTTOM);
    const {MARGIN_TO_EDGE} = numbers;
    const avoidVerticalOverlap = Boolean(this.anchorCorner_ & CornerBit.BOTTOM);
    const canOverlapVertically = !avoidVerticalOverlap;
    let y = 0;

    if (isBottomAligned) {
      y = avoidVerticalOverlap ? anchorHeight - this.anchorMargin_.top : -this.anchorMargin_.bottom;
      // adjust for when menu can overlap anchor, but too tall to be aligned to bottom
      // anchor corner. Bottom margin is ignored in such cases.
      if (canOverlapVertically && menuHeight > viewportDistance.top + anchorHeight) {
        y = -(Math.min(menuHeight, viewport.height - MARGIN_TO_EDGE) - (viewportDistance.top + anchorHeight));
      }
    } else {
      y = avoidVerticalOverlap ? (anchorHeight + this.anchorMargin_.bottom) : this.anchorMargin_.top;
      // adjust for when menu can overlap anchor, but too tall to be aligned to top
      // anchor corners. Top margin is ignored in that case.
      if (canOverlapVertically && menuHeight > viewportDistance.bottom + anchorHeight) {
        y = -(Math.min(menuHeight, viewport.height - MARGIN_TO_EDGE) - (viewportDistance.bottom + anchorHeight));
      }
    }
    return y;
  }

  setTransformOrigin = (origin) => {
    this.adapter_.style[`${getTransformPropertyName(window)}-origin`] = origin
  }

  setMaxHeight = (height) => {
    this.adapter_.style.maxHeight = height
  }

  autoPosition_() {
    if (!this.hasAnchor()) {
      return
    }

    // Compute measurements for autoposition methods reuse.
    this.measures_ = this.getAutoLayoutMeasurements_();

    const corner = this.getOriginCorner_()
    const maxMenuHeight = this.getMenuMaxHeight_(corner);
    let verticalAlignment = (corner & CornerBit.BOTTOM) ? 'bottom' : 'top';
    let horizontalAlignment = (corner & CornerBit.RIGHT) ? 'right' : 'left';
    const horizontalOffset = this.getHorizontalOriginOffset_(corner);
    const verticalOffset = this.getVerticalOriginOffset_(corner);
    const position = {
      [horizontalAlignment]: horizontalOffset ? horizontalOffset + 'px' : '0',
      [verticalAlignment]: verticalOffset ? verticalOffset + 'px' : '0',
    };
    const {anchorWidth, menuHeight, menuWidth} = this.measures_;
    // Center align when anchor width is comparable or greater than menu, otherwise keep corner.
    if (anchorWidth / menuWidth > numbers.ANCHOR_TO_MENU_WIDTH_RATIO) {
      horizontalAlignment = 'center';
    }

    // Adjust vertical origin when menu is positioned with significant offset from anchor. This is done so that
    // scale animation is "anchored" on the anchor.
    if (!(this.anchorCorner_ & CornerBit.BOTTOM) &&
        Math.abs(verticalOffset / menuHeight) > numbers.OFFSET_TO_MENU_HEIGHT_RATIO) {
      const verticalOffsetPercent = Math.abs(verticalOffset / menuHeight) * 100;
      const originPercent = (corner & CornerBit.BOTTOM) ? 100 - verticalOffsetPercent : verticalOffsetPercent;
      verticalAlignment = Math.round(originPercent * 100) / 100 + '%';
    }

    this.setTransformOrigin(`${horizontalAlignment} ${verticalAlignment}`);
    this.setPosition(position);
    this.setMaxHeight(maxMenuHeight ? maxMenuHeight + 'px' : '');

    // Clear measures after positioning is complete.
    this.measures_ = null;
  }

  /**
   * Open the menu.
   * @param {{focusIndex: ?number}=} options
   */
  open = ({focusIndex = null} = {}) => {
    if(!this.adapter_ || this.isOpen_) return

    this.saveFocus()
    const {quickOpen} = this.props

    if (!quickOpen) {
      addClass(this.adapter_, cssClasses.ANIMATING_OPEN)
    }

    this.animationRequestId_ = requestAnimationFrame(() => {
      this.dimensions_ = this.getInnerDimensions()
      this.autoPosition_()
      addClass(this.adapter_, cssClasses.OPEN)
      // this.focusOnOpen_(focusIndex)
      registerBodyClickHandler(this.documentClickHandler_)
      if (!quickOpen) {
        this.openAnimationEndTimerId_ = setTimeout(() => {
          this.openAnimationEndTimerId_ = 0
          removeClass(this.adapter_, cssClasses.ANIMATING_OPEN)
        }, numbers.TRANSITION_OPEN_DURATION)
      }
    })
    this.isOpen_ = true
  }

  handler_ = (open) => {
    if(open) this.open(open)
    else this.close()
  }

  handlePossibleSelected_ = (evt) => {
    if (this.getAttributeForEventTarget(evt.target, strings.ARIA_DISABLED_ATTR) === 'true') {
      return
    }
    const targetIndex = this.getIndexForEventTarget(evt.target)
    if (targetIndex < 0) {
      return
    }
    // Debounce multiple selections
    if (this.selectedTriggerTimerId_) {
      return
    }
    this.selectedTriggerTimerId_ = setTimeout(() => {
      this.selectedTriggerTimerId_ = 0
      this.close()
      if (this.rememberSelection_) {
        this.setSelectedIndex(targetIndex)
      }
      // this.notifySelected({index: targetIndex})
    }, numbers.SELECTED_TRIGGER_DELAY)
  }

  /**
   * Return the items within the menu. Note that this only contains the set of elements within
   * the items container that are proper list items, and not supplemental / presentational DOM
   * elements.
   * @return {!Array<!Element>}
   */
  items = () => {
    const itemsContainer = this.itemsContainer_()
    return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'))
  }

  getIndexForEventTarget = (target) => {
    const items = this.items()
    return items.indexOf(target)
  }

  documentClickHandler_ = (evt) => {
    let el = evt.target

    while (el && el !== document.documentElement) {
      if (this.getIndexForEventTarget(el) !== -1) {
        return
      }
      el = el.parentNode
    }

    // this.adapter_.notifyCancel();
    if(this.props.onClose) {
      this.props.onClose(evt)
    }
 }

  /**
   * @return {AutoLayoutMeasurements} Measurements used to position menu popup.
   */
  getInnerDimensions = () => {
    const itemsContainer = this.itemsContainer_()
    return {width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight}
  }
  /**
   * Return the item container element inside the component.
   * @return {?Element}
   */
  itemsContainer_ = () => {
    // return LIST
    return this.adapter_.querySelector(strings.ITEMS_SELECTOR)
  }

  getAnchorDimensions = () => this.adapter_.parentElement.getBoundingClientRect()
  getWindowDimensions = () => {
    return {width: window.innerWidth, height: window.innerHeight}
  }
  getAutoLayoutMeasurements_() {
    const anchorRect = this.getAnchorDimensions()
    const viewport = this.getWindowDimensions()
    return {
      viewport: viewport,
      viewportDistance: {
        top: anchorRect.top,
        right: viewport.width - anchorRect.right,
        left: anchorRect.left,
        bottom: viewport.height - anchorRect.bottom,
      },
      anchorHeight: anchorRect.height,
      anchorWidth: anchorRect.width,
      menuHeight: this.dimensions_.height,
      menuWidth: this.dimensions_.width,
    }
  }

  /**
   * Computes the corner of the anchor from which to animate and position the menu.
   * @return {Corner}
   * @private
   */
  isRtl = () => this.props.direction === 'rtl'

  getOriginCorner_ = () => {

    // Defaults: open from the top left.
    let corner = Corner.TOP_LEFT;

    const {viewportDistance, anchorHeight, anchorWidth, menuHeight, menuWidth} = this.measures_;
    const isBottomAligned = Boolean(this.anchorCorner_ & CornerBit.BOTTOM);
    const availableTop = isBottomAligned ? viewportDistance.top + anchorHeight + this.anchorMargin_.bottom
      : viewportDistance.top + this.anchorMargin_.top;
    const availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom
      : viewportDistance.bottom + anchorHeight - this.anchorMargin_.top;

    const topOverflow = menuHeight - availableTop;
    const bottomOverflow = menuHeight - availableBottom;
    if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
      corner |= CornerBit.BOTTOM;
    }

    const isRtl = this.isRtl()
    const isFlipRtl = Boolean(this.anchorCorner_ & CornerBit.FLIP_RTL);
    const avoidHorizontalOverlap = Boolean(this.anchorCorner_ & CornerBit.RIGHT);
    const isAlignedRight = (avoidHorizontalOverlap && !isRtl) ||
      (!avoidHorizontalOverlap && isFlipRtl && isRtl);
    const availableLeft = isAlignedRight ? viewportDistance.left + anchorWidth + this.anchorMargin_.right :
      viewportDistance.left + this.anchorMargin_.left;
    const availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right :
      viewportDistance.right + anchorWidth - this.anchorMargin_.left;

    const leftOverflow = menuWidth - availableLeft;
    const rightOverflow = menuWidth - availableRight;

    if ((leftOverflow < 0 && isAlignedRight && isRtl) ||
        (avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0) ||
        (rightOverflow > 0 && leftOverflow < rightOverflow)) {
      corner |= CornerBit.RIGHT;
    }
    
    return corner
  }

  /**
   * Lifecycle
   */

  componentWillReceiveProps = (nextProps) => {
    this.handler_(nextProps.open)
  }

  componentDidMount = () => {
    debug('componentDidMount')
    if(this.props.open){
      this.open(this.props.open)
    }
  }

  render() {
    debug('render')
    
    const {children, className, anchorCorner, quickOpen, open, onClose, ...other} = this.props
    const classes = ClassNames(cssClasses.ROOT, className)

    return (
      <div className={classes} tabIndex="-1" ref={adapter_ => {
        this.adapter_ = adapter_
      }}
      onClick={this.handlePossibleSelected_}
      {...other}>
        {children}
      </div>
    )
  }
}

Menu.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  quickOpen: PropTypes.bool,
  direction: PropTypes.string,
  anchorCorner: PropTypes.oneOf([
    'TOP_LEFT',
    'TOP_RIGHT',
    'BOTTOM_LEFT',
    'BOTTOM_RIGHT',
    'TOP_START',
    'TOP_END',
    'BOTTOM_START',
    'BOTTOM_END',
  ]),
}

Menu.defaultProps = {
  quickOpen: false,
  open: false,
  anchorCorner: 'TOP_START',
}

Menu.displayName = 'Menu'

export default Menu