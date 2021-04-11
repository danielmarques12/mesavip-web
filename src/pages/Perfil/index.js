import React, { useState } from 'react';
import ImageUpload from '../../components/Perfil/ImageUpload';
import { isRestaurant } from '../../services/auth';
import { Input, SubmitInput } from '../../components/ComponentStyles';
import { api } from '../../services/api';
import {
  Container,
  ProfileCard,
  UpdateUser,
  DeleteUser,
  Upload,
} from './styles';

export default function Perfil() {
  const [user, setUser] = useState({});

  async function handleUpdateSubmit(event) {
    event.preventDefault();
    await api.put('usuarios', user);
  }

  return (
    <Container>
      <ProfileCard>
        <h2>Atualizar dados de cadastro</h2>
        <UpdateUser>
          <form onSubmit={handleUpdateSubmit}>
            <Input
              type="email"
              placeholder="Novo e-mail"
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />
            <Input
              type="password"
              placeholder="Nova senha"
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />

            <Input placeholder="Confirmar senha" type="password" />
            <SubmitInput type="submit" value="Atualizar dados" />
          </form>
        </UpdateUser>
        <DeleteUser />
      </ProfileCard>

      {isRestaurant() ? (
        <Upload>
          <ImageUpload imageType="banner" multipleFiles={false} />
          <ImageUpload imageType="galeria" multipleFiles />
        </Upload>
      ) : null}
    </Container>
  );
}
