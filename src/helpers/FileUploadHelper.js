import { api } from '../services/api';

async function formData(file, imageType, transformation) {
  const data = new FormData();
  data.append('file', file);
  data.append('type', imageType);
  data.append('transformation', transformation);

  await api.post('files', data);
}

export function bannerUpload(file) {
  formData(file, 'banner', 'mesavip-banner-restaurante');
  formData(file, 'lista', 'mesavip-lista-de-restaurantes');
}

export function galeriaUpload(file) {
  formData(file, 'galeria', '');
}
