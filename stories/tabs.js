import React from 'react'
import {storiesOf} from '@storybook/react'
import {LayoutApp, FontIcon, Tabs, Tab, TabBar, TabContainer} from '../src/index'
import {DocItem} from './UIExplorer'

class TabWithOnChangeEvent extends React.Component {
  state = {
    value: '#lannisters-panel',
  }

  handleChange = value => {
    this.setState({value})
  }

  render() {
    const {value} = this.state

    return (
      <DocItem
        render={
          <Tabs value={value} onChange={this.handleChange}>
            <TabBar>
              <Tab href="#starks-panel">
                <FontIcon>phone</FontIcon>
              </Tab>
              <Tab href="#lannisters-panel">
                <FontIcon>person</FontIcon>
              </Tab>
              <Tab href="#targaryens-panel">
                <FontIcon>notifications</FontIcon>
              </Tab>
            </TabBar>
            {value === '#starks-panel' && (
              <TabContainer className="is-active">
                <ul>
                  <li>Eddard</li>
                  <li>Catelyn</li>
                  <li>Robb</li>
                  <li>Sansa</li>
                  <li>Brandon</li>
                  <li>Arya</li>
                  <li>Rickon</li>
                </ul>
              </TabContainer>
            )}
            {value === '#lannisters-panel' && (
              <TabContainer className="is-active">
                <ul>
                  <li>Tywin</li>
                  <li>Cersei</li>
                  <li>Jamie</li>
                  <li>Tyrion</li>
                </ul>
              </TabContainer>
            )}
            {value === '#targaryens-panel' && (
              <TabContainer className="is-active">
                <ul>
                  <li>Viserys</li>
                  <li>Daenerys</li>
                </ul>
              </TabContainer>
            )}
          </Tabs>
        }
      />
    )
  }
}

storiesOf('Tabs', module)
  .add('basic tabs', () => (
    <DocItem
      render={
        <Tabs default="#starks-panel">
          <TabBar>
            <Tab href="#starks-panel">Starks</Tab>
            <Tab href="#lannisters-panel">Lannisters</Tab>
            <Tab href="#targaryens-panel">Targaryens</Tab>
          </TabBar>
          <TabContainer value="#starks-panel">
            <ul>
              <li>Eddard</li>
              <li>Catelyn</li>
              <li>Robb</li>
              <li>Sansa</li>
              <li>Brandon</li>
              <li>Arya</li>
              <li>Rickon</li>
            </ul>
          </TabContainer>
          <TabContainer value="#lannisters-panel">
            <ul>
              <li>Tywin</li>
              <li>Cersei</li>
              <li>Jamie</li>
              <li>Tyrion</li>
            </ul>
          </TabContainer>
          <TabContainer value="#targaryens-panel">
            <ul>
              <li>Viserys</li>
              <li>Daenerys</li>
            </ul>
          </TabContainer>
        </Tabs>
      }
    />
  ))
  .add('tabs with onChange event', () => <TabWithOnChangeEvent />)
