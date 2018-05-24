import React from 'react'
// import ClassNames from 'classnames'
import PropTypes from 'prop-types'

class Placeholder extends React.Component {
  state = {
    ready: this.props.ready,
    loaded: false,
  }

  setNotReady = () => {
    const {delay} = this.props
    const state = {
      ready: false,
    }
    if (delay > 0) {
      this.timeout = setTimeout(() => {
        this.setState(state)
      }, delay)
    } else {
      this.setState(state)
    }
  }

  setReady = () => {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
    const state = {
      ready: true,
    }
    if (!this.state.loaded) {
      state.loaded = true
    }
    if (!this.state.ready) {
      this.setState(state)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.firstLaunchOnly && !this.state.loaded && this.state.ready && !nextProps.ready) {
      this.setNotReady()
    } else if (nextProps.ready) {
      this.setReady()
    }
  }

  render() {
    const {children, placeholder} = this.props
    const {ready} = this.state

    if (ready) return children

    return placeholder
  }
}

Placeholder.propTypes = {
  delay: PropTypes.number,
  loading: PropTypes.bool,
  firstLaunchOnly: PropTypes.bool,
  placeholder: PropTypes.node,
}

Placeholder.defaultProps = {
  loading: true,
  delay: 0,
  firstLaunchOnly: true,
}

export default Placeholder
