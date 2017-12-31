import React from 'react'
import {
  Button,
  Dialog
} from '../../src/index'

class SimpleDialogDisableBackdrop extends React.Component {
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
          title={<h4>Allow data collection?</h4>}
          actions={[
            <Button key={0} onClick={this.toggleDialog} color="primary" ripple>
              Agree
            </Button>,
            <Button key={1} onClick={this.toggleDialog} color="accent" ripple>
              Disagree
            </Button>,
          ]}
          open={openDialog}
          close={this.toggleDialog}
          style={{zIndex: '5'}}
          disableBackdrop
        >
          <p>Allowing us to collect data will let us get you the information you want faster.</p>
        </Dialog>
      </div>
    )
  }
}
export default SimpleDialogDisableBackdrop
