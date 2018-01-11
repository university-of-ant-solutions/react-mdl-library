import React from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import ClassNames from 'classnames'
import hljs from 'highlight.js'

class Code extends React.PureComponent {
  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  componentWillUnmount() {}

  highlightCode = () => {
    const {children} = this.props
    // update real DOM element after component render
    const node = ReactDOM.findDOMNode(this)

    try {
      node.innerHTML = hljs.highlight('html', children, true).value
    } catch (e) {
      console.warn(e)
      node.innerHTML = children // remove syntax highlight
    }
  }

  render() {
    return (
      <pre
        style={{
          padding: '16px 40px',
          backgroundColor: 'rgba(0,0,0,.06)',
        }}
      />
    )
  }
}

Code.propTypes = {}

Code.defaultProps = {}

export default Code
