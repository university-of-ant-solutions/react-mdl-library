import React from 'react'

export default class Container extends React.Component {
  render() {
    const { story } = this.props

    return (
      <div
        style={{
          padding: '3em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {story()}
      </div>
    )
  }
}