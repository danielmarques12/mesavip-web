/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { api } from '../../../services/api';
import { Container } from './styles';
import { bannerUpload, galeriaUpload } from './utils';

export default function ImageUpload(props) {
  const [files, setFiles] = useState('');
  const { multipleFiles, imageType } = props;

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
        <span>Upload {multipleFiles ? 'Galeria' : 'Banner'}</span>

        <input type="file" onChange={fileChange} multiple={multipleFiles} />
        <input type="submit" />
      </form>
    </Container>
  );
}
