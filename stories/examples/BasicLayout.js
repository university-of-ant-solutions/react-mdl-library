import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {
  LayoutApp as Layout,
  Drawer,
  Header,
  HeaderRow,
  Content,
  FontIcon,
} from '../../index'

const debug = require('debug')('components:BasicLayout:BasicLayout')

class BasicLayout extends React.PureComponent {
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
      >
        <Header showDrawer={this.toggleDrawer}>
          <HeaderRow title="Title">
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
          </HeaderRow>
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

BasicLayout.propTypes = {}

BasicLayout.defaultProps = {}

export default BasicLayout
