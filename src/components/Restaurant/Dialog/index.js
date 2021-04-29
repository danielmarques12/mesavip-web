/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { api } from '../../../services/api';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const { restaurant_id, selectedHour } = props;

  const handleSubmit = () =>
    api.post(`/reservations/${restaurant_id}`, {
      hour_id: selectedHour,
    });

  const handleClickOpen = () => {
    setOpen(true);
    handleSubmit();
  };

  const handleClose = () => {
    setOpen(false);
    document.location.reload();
  };

  return (
    <div>
      <Button
        variant="outlined"
        type="submit"
        color="primary"
        onClick={handleClickOpen}
      >
        Reservate
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          Reservated successfully
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
