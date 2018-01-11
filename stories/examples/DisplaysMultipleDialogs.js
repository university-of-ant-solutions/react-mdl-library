import React from 'react'
import {Button, Dialog} from '../../src/index'

class DisplaysMultipleDialogs extends React.Component {
  state = {
    openDialog: false,
    openDialog2: false,
  }

  toggleDialog = () => {
    const {openDialog} = this.state
    this.setState({
      openDialog: !openDialog,
    })
  }

  toggleDialog2 = () => {
    const {openDialog2} = this.state
    this.setState({
      openDialog2: !openDialog2,
    })
  }

  render() {
    const {openDialog, openDialog2} = this.state
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
            <Button key={1} onClick={this.toggleDialog2} color="accent" ripple>
              Disagree
            </Button>,
          ]}
          open={openDialog}
          close={this.toggleDialog}
          style={{zIndex: '5'}}
        >
          <p>Allowing us to collect data will let us get you the information you want faster.</p>
        </Dialog>

        <Dialog
          title={<h4>Dialog 02</h4>}
          actions={[
            <Button key={0} onClick={this.toggleDialog2} color="primary" ripple>
              Agree
            </Button>,
          ]}
          open={openDialog2}
          close={this.toggleDialog2}
          style={{zIndex: '5'}}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at tortor sed eros congue
            pretium.
          </p>
        </Dialog>
      </div>
    )
  }
}
export default DisplaysMultipleDialogs
