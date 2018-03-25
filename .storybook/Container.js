import React from 'react'

export default class Container extends React.Component {
  render() {
    const { story } = this.props

    return (story())
  }
}