import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class Dialogs extends React.Component {
  constructor(props){
      super(props);
      console.log(props);

      this.state= {open: false};

      // bind functions
      this._handleOpen = this._handleOpen.bind(this);
      this._handleClose = this._handleClose.bind(this);
  }

  _handleOpen(){
    this.setState({open: true});
  }

  _handleClose(){
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this._handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this._handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Modal Dialog" onClick={this._handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
  }
}

export default Dialogs;