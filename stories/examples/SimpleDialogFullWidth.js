import React from 'react'
import {
  Button,
  Dialog
} from '../../src/index'

class SimpleDialogFullWidth extends React.Component {
  state = {
    openDialog: false,
  }

  toggleDialog = () => {
    const {openDialog} = this.state
    this.setState({
      openDialog: !openDialog,
    })
  }

  render() {
    const {openDialog} = this.state
    return (
      <div>
        <Button color="primary" ripple onClick={this.toggleDialog}>
          Open Dialog
        </Button>
        <Dialog
          title="MDL Dialog full width"
          actions={[
            <Button key={0} onClick={this.toggleDialog} color="primary" ripple>
              Agree
            </Button>,
            <Button key={1} onClick={this.toggleDialog} color="accent" ripple>
              Disagree
            </Button>,
          ]}
          open={openDialog}
          actionsFullWidth
          close={this.toggleDialog}
          style={{zIndex: '5'}}
        >
          <p>
            This is an example of the Material Design Lite dialog component. Please use responsibly.
          </p>
        </Dialog>
      </div>
    )
  }
}
export default SimpleDialogFullWidth
