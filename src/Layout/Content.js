import React from 'react'
import ReactDOM from 'react-dom'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'

const timeInterval = 5

class Content extends React.PureComponent {
  contentScrollHandler = debounce(ev => {
    ev.preventDefault()
    if (this.props.onScroll) {
      this.props.onScroll(ev, this.contentElement)
    }
  }, timeInterval)

  findScrollDirection = debounce(ev => {
    ev.preventDefault()
    let delta
    if (ev.wheelDelta) {
      delta = ev.wheelDelta
    } else {
      delta = -1 * ev.deltaY
    }
    if (delta < 0) {
      if (this.props.onScrollDown) {
        this.props.onScrollDown(ev, delta)
      }
    } else if (delta > 0) {
      if (this.props.onScrollUp) {
        this.props.onScrollUp(ev, delta)
      }
    }
  }, timeInterval)

  componentDidMount() {
    this.contentElement = ReactDOM.findDOMNode(this)
    this.contentElement.addEventListener('scroll', this.contentScrollHandler)
    this.contentElement.addEventListener('wheel', this.findScrollDirection)
  }

  componentWillUnmount() {
    this.contentElement.removeEventListener('scroll', this.contentScrollHandler)
    this.contentElement.removeEventListener('wheel', this.findScrollDirection)
  }

  handleTap = () => {
    console.log('handleTap')
  }

  render() {
    const {children, className, style} = this.props

    const classes = ClassNames('mdl-layout__content', className)

    return (
      <main className={classes} style={style} onScroll={this.contentScrollHandler}>
        {children}
      </main>
    )
  }
}

Content.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onScroll: PropTypes.func,
}

Content.defaultProps = {
  className: '',
  style: {},
}

export default Content
