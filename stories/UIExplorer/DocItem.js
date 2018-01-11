import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
// import PropTypes from 'prop-types'
// import ClassNames from 'classnames'
import Code from './Code'

class DocItem extends React.PureComponent {
  render() {
    const {render} = this.props
    return (
      <div style={{marginRight: '20px'}}>
        {render}
        <Code>
          {reactElementToJSXString(render, {
            showDefaultProps: false,
          }).toString()}
        </Code>
      </div>
    )
  }
}

DocItem.propTypes = {}

DocItem.defaultProps = {}

export default DocItem
