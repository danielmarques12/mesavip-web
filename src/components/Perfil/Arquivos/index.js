/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { api } from '../../../services/api';
import { Container } from './styles';
import { bannerUpload, galeriaUpload } from '../../../helpers/FileUploadHelper';

export default function Arquivos(props) {
  const [files, setFiles] = useState('');
  const { multiple, imageType } = props;

  async function formSubmit(event) {
    event.preventDefault();

    files.map(async (file) =>
      imageType === 'banner' ? bannerUpload(file) : galeriaUpload(file)
    );
  }

  async function fileChange(event) {
    setFiles(Object.values(event.target.files));
  }

  return (
    <Container>
      <form onSubmit={formSubmit}>
        <input type="file" onChange={fileChange} multiple={multiple} />
        <input type="submit" />
      </form>
    </Container>
  );
}
