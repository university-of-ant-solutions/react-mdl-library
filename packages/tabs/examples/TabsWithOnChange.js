import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import TabBar, {Tab} from '../index'
import {DocItem} from '../../../stories/UIExplorer'

const debug = require('debug')('react-mdl-library:tabs:examples:TabsWithOnChange')

class TabsWithOnChange extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '#merchandise',
    }
  }

  setValue = value => {
    return this.setState({
      value
    })
  }

  render() {
    debug('render')
    const { value } = this.state
    return (
      <DocItem
        render={
          <div>
          <TabBar default={value} onChange={this.setValue}>
            <Tab href="#home">
              Home
            </Tab>
            <Tab href="#merchandise">
              Merchandise
            </Tab>
            <Tab href="#aboutus">
              About Us
            </Tab>
          </TabBar>
          Tab Selected = {value}
        </div>
      }/>
    )
  }
}

TabsWithOnChange.propTypes = {}

TabsWithOnChange.defaultProps = {}

TabsWithOnChange.displayName = 'TabsWithOnChange'

export default TabsWithOnChange