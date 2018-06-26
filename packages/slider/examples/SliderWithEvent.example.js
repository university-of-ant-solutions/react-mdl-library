import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Slider from '../index'
import {DocItem} from '../../../stories/UIExplorer'

const debug = require('debug')('react-mdl-library:slider:examples:SliderWithEvent')

class SliderWithEvent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value || 1,
    }
  }

  setValue = value => {
    return this.setState({
      value
    })
  }

  render() {
    debug('render')
    const {value} = this.state

    return (
      <DocItem
      render={
        <React.Fragment>
          <Slider notifyInput={this.setValue} notifyChange={this.setValue} {...this.props}/>
          Value = {value}
        </React.Fragment>
      } />
    )
  }
}

SliderWithEvent.propTypes = {}

SliderWithEvent.defaultProps = {}

SliderWithEvent.displayName = 'SliderWithEvent'

export default SliderWithEvent