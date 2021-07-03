// import React, { useState } from 'react';
// import ImageUpload from '../../components/Profile/ImageUpload';
// import { Input, SubmitInput } from '../../components/ComponentStyles';
// import { api } from '../../services/api';
// import {
//   Container,
//   ProfileCard,
//   UpdateUser,
//   DeleteUser,
//   Upload,
// } from './styles';

// export default function Profile() {
//   const [user, setUser] = useState({});

//   async function handleUpdateSubmit(event) {
//     event.preventDefault();
//     await api.put('users', user);
//   }

//   return (
//     <Container>
//       <ProfileCard>
//         <h2>Update user data</h2>
//         <UpdateUser>
//           <form onSubmit={handleUpdateSubmit}>
//             <Input
//               type="email"
//               placeholder="New e-mail"
//               onChange={(event) =>
//                 setUser({ ...user, email: event.target.value })
//               }
//             />
//             <Input
//               type="password"
//               placeholder="New password"
//               onChange={(event) =>
//                 setUser({ ...user, password: event.target.value })
//               }
//             />

//             <Input placeholder="Confirm password" type="password" />
//             <SubmitInput type="submit" value="Update data" />
//           </form>
//         </UpdateUser>
//         <DeleteUser />
//       </ProfileCard>

//       {/* {isRestaurant() ? (
//         <Upload>
//           <ImageUpload imageType="banner" multipleFiles={false} />
//           <ImageUpload imageType="galeria" multipleFiles />
//         </Upload>
//       ) : null} */}
//     </Container>
//   );
// }
