/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { api } from '../../../services/api';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const { restaurante_id, horarioSelecionado } = props;

  const handleSubmit = () =>
    api.post(`/agendamentos/${restaurante_id}`, {
      horario_id: horarioSelecionado,
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
        Reservar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          Reserva realizada com sucesso
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
