/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { api } from '../../../services/api';
import { Container } from './styles';

export default function Arquivos() {
  const [files, setFiles] = useState('');

  async function formSubmit(event) {
    event.preventDefault();

    files.map(async (file) => {
      const data = new FormData();
      data.append('file', file);
      data.append('type', 'galeria');

      await api.post('files', data);
    });
  }

  async function fileChange(event) {
    setFiles(Object.values(event.target.files));
  }

  return (
    <Container>
      <form onSubmit={formSubmit}>
        <input type="file" onChange={fileChange} multiple />
        <input type="submit" />
      </form>
    </Container>
  );
}
