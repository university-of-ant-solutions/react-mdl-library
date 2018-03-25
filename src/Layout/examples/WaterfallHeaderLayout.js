import React from 'react'
import PropTypes from 'prop-types'
import {
  Tabs,
  Tab,
  TabBar,
  TabContainer,
  LayoutApp,
  Drawer,
  Header,
  HeaderRow,
  Content,
} from '../../index'

export default class WaterfallHeaderLayout extends React.Component {
  state = {
    showDrawer: false,
    isTabsHidden: false,
  }

  toggleDrawer = () => {
    const {showDrawer} = this.state
    this.setState({
      showDrawer: !showDrawer,
    })
  }

  contentScrollHandler = (evt, content) => {
    const {isTabsHidden} = this.state
    if (content.scrollTop > 0) {
      !isTabsHidden &&
        this.setState({
          isTabsHidden: true,
        })
    }
    if (content.scrollTop <= 0) {
      isTabsHidden &&
        this.setState({
          isTabsHidden: false,
        })
    }
  }

  render() {
    const {showDrawer, isTabsHidden} = this.state

    return (
      <LayoutApp upgraded fixedHeader>
        <Header waterfall showDrawer={this.toggleDrawer} isTabsHidden={isTabsHidden}>
          <HeaderRow title="Title" />
          <Tabs default="#targaryens-panel">
            <TabBar style={{height: 'auto'}}>
              <Tab href="#starks-panel">Starks</Tab>
              <Tab href="#lannisters-panel">Lannisters</Tab>
              <Tab href="#targaryens-panel">Targaryens</Tab>
            </TabBar>
          </Tabs>
        </Header>
        <Drawer title="Title" show={showDrawer} close={this.toggleDrawer}>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">
              Link
            </a>
            <a className="mdl-navigation__link" href="">
              Link
            </a>
            <a className="mdl-navigation__link" href="">
              Link
            </a>
            <a className="mdl-navigation__link" href="">
              Link
            </a>
          </nav>
        </Drawer>
        <Content onScroll={this.contentScrollHandler}>
          <div style={{height: '1000px'}} />
        </Content>
      </LayoutApp>
    )
  }
}
