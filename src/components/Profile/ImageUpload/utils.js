import { api } from '../../../services/api';

async function formData(file, imageType, transformation) {
  const data = new FormData();
  data.append('file', file);
  data.append('type', imageType);
  data.append('transformation', transformation);

  await api.post('files/upload', data);
}

export async function bannerUpload(file) {
  await formData(file, 'banner', 'mesavip-banner-restaurante');
  await formData(file, 'list', 'mesavip-lista-de-restaurantes');
}

export async function galeryUpload(file) {
  await formData(file, 'galeria', '');
}
