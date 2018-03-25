import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';

class Ripple extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {}
  }

  initFoundation() {
    this.foundation_ = this.getDefaultFoundation()

    Object.entries(adapter).forEach(([handlerName, handler]) => {
      this.foundation_.adapter_[handlerName] = handler.bind(this)
    })
    this.initialize()
    this.foundation_.init()
    this.initialSyncWithDOM()
    this.syncWithProps(this.props)

    // this method should be deprecated in the future in favor of standard refs
    this.props.apiRef && this.props.apiRef(this)
  }


  componentDidMount() {
    // Ripples can be used with many types of components
    // we need to use ReactDOM as an escape hatch to just find the DOMnode
    this.root_ = ReactDOM.findDOMNode(this)
    // this.initFoundation()
  }

  componentWillUnmount() {
    // this.destroy()
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
    this.foundation_ = undefined;

    // We need to hold onto our refs until all child components are unmounted
    // Here we just wait an extra frame and set them to null so garbage collection will take over.
    window.requestAnimationFrame(() => {
      refs.forEach(refName => {
        this[refName] = null
      })
    })
  }

  render() {
    const {
      children,
      className,
      primary,
      accent,
      unbounded,
      surface,
      apiRef,
      ...rest
    } = this.props

    const child = React.Children.only(children)
    const unboundedProp = unbounded ?
      { 'data-mdc-ripple-is-unbounded': true } :
      {}

    return React.cloneElement(child, {
      ...child.props,
      ...rest,
      ...unboundedProp,
      className: ClassNames(
        className,
        child.props.className,
        // [...this.state.classes],
        {
          'mdc-ripple-surface': surface !== undefined ? surface : true,
          'mdc-ripple-surface--primary': primary,
          'mdc-ripple-surface--accent': accent
        }
      )
    })
  }
}

Ripple.propTypes = {
  children: PropTypes.node,
}

Ripple.defaultProps = {
}

Ripple.displayName = 'Ripple'

export default Ripple