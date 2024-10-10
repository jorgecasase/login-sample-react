import React, { useState } from 'react';
import Login from './Components/Login'
import Mensaje from './Components/Mensaje';
import Titulo from './Components/Titulo';

const App = () => {
  const [mensaje, setMensaje] = useState('');   
  const [esError, setEsError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {
        const user = users.find(user => user.email === email);
        if (user) {
          if (password === user.username) {
            setMensaje(`Bienvenido, ${user.name}!`);
            setEsError(false); 
            setIsLoggedIn(true);
          } else {
            setMensaje('Contraseña incorrecta');
            setEsError(true);
          }
        } else {
          setMensaje('Usuario no encontrado');
          setEsError(true); 
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setMensaje('Error al conectar con el servidor');
        setEsError(true);
      });
  };

  return (
    <div>
      <Titulo texto='React Login with useState'></Titulo>
      {!isLoggedIn && <Login handleLogin={handleLogin} />} {}
      <Mensaje mensaje={mensaje} esError={esError} />
    </div>
  );
};

export default App;
