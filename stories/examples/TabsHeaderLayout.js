import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {
  Tabs,
  Tab,
  TabBar,
  TabContainer,
  FontIcon,
  LayoutApp as Layout,
  Drawer,
  Header,
  HeaderRow,
  Content,
} from '../../index'

const debug = require('debug')('components:TabsHeaderLayout:TabsHeaderLayout')

class TabsHeaderLayout extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showDrawer: false,
    }
  }

  toggleDrawer = () => {
    this.setState({
      showDrawer: true,
    })
  }

  closeDrawer = () => {
    this.setState({
      showDrawer: false,
    })
  }

  render() {
    const {showDrawer} = this.state

    return (
      <Layout
        style={{
          height: '300px',
        }}
        fixedHeader
        upgraded
      >
        <Header showDrawer={this.toggleDrawer}>
          <HeaderRow title="Title" />
          <Tabs default="#targaryens-panel">
            <TabBar style={{height: 'auto'}}>
              <Tab href="#starks-panel" label="Starks" />
              <Tab href="#lannisters-panel" label="Lannisters" />
              <Tab href="#targaryens-panel" label="Targaryens" />
            </TabBar>
          </Tabs>
        </Header>
        <Drawer title="Title" show={showDrawer} close={this.closeDrawer}>
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
        <Content />
      </Layout>
    )
  }
}

TabsHeaderLayout.propTypes = {}

TabsHeaderLayout.defaultProps = {}

export default TabsHeaderLayout
