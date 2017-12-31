import React from 'react'
import PropTypes from 'prop-types'
import {storiesOf} from '@storybook/react'
import {
  Button,
  Fade,
} from '../src/index'

class FadeDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fade1: true,
      fade2: true,
    }
  }

  toggleFade1 = () => {
    const {fade1} = this.state
    this.setState({
      fade1: !fade1,
    })
  }

  toggleFade2 = () => {
    const {fade2} = this.state
    this.setState({
      fade2: !fade2,
    })
  }

  render() {
    return (
      <div>
        <h5>1. Dont unmount the component after it finishes exiting</h5>
        <Button onClick={this.toggleFade2}>Hide/Show</Button>
        <br />
        <Fade appear unmount={false} isActive={this.state.fade2} timeout={300}>
          <h5
            style={{
              padding: 20,
              display: 'inline-block',
              backgroundColor: '#8787d8',
            }}
          >
            [Lyrics+Vietsub] Headlights - Eminem ft. Nate Ruess
          </h5>
        </Fade>
        <h5>2. Unmount the component after it finishes exiting</h5>
        <Button onClick={this.toggleFade1}>Hide/Show</Button>
        <br />
        <Fade appear isActive={this.state.fade1} timeout={300}>
          <h5
            style={{
              padding: 20,
              display: 'inline-block',
              backgroundColor: '#8787d8',
            }}
          >
            [Lyrics+Vietsub] Headlights - Eminem ft. Nate Ruess
          </h5>
        </Fade>
        <br />
        <h5
          style={{
            padding: 20,
            display: 'inline-block',
            backgroundColor: '#8787d8',
          }}
        >
          [Lyrics+Vietsub] Headlights - Eminem ft. Nate Ruess
        </h5>
      </div>
    )
  }
}

FadeDemo.propTypes = {}

FadeDemo.defaultProps = {}

storiesOf('transitions', module).add('Fade', () => <FadeDemo />)
