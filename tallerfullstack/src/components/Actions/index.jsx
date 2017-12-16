import React from 'react';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

import { grey400 } from 'material-ui/styles/colors';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="acciones"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);


class Actions extends React.Component {
  constructor(props){
      super(props);
      console.log(props);

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
       return (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem onClick>Editar</MenuItem>
                <MenuItem>Eliminar</MenuItem>
            </IconMenu>
    );
  }
}

export default Actions;