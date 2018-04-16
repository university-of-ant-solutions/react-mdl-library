import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import TabBar, {Tab, TabContainer} from '../index'
import {DocItem} from '../../../stories/UIExplorer'

const debug = require('debug')('react-mdl-library:tabs:examples:TabsWithContainerUrl')

class TabsWithContainerUrl extends Component {
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
            <TabContainer href="#home">
              home
            </TabContainer>
            <TabContainer href="#merchandise">
              merchandise
            </TabContainer>
            <TabContainer href="#aboutus">
              aboutus
            </TabContainer>
          </TabBar>
      }/>
    )
  }
}

TabsWithContainerUrl.propTypes = {}

TabsWithContainerUrl.defaultProps = {}

TabsWithContainerUrl.displayName = 'TabsWithContainerUrl'

export default TabsWithContainerUrl