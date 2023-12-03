import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

const loginFormStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "200px",
};

const inputStyles = {
  marginBottom: "10px",
  padding: "5px",
};

function App() {
  const [login, setLogin] = useState(localStorage.getItem('login') || "");
  const [password, setPassword] = useState(localStorage.getItem('password') || "");
  const savedUserRole = localStorage.getItem('isAdmin');
  const [isAdmin, setIsAdmin] = useState(savedUserRole !== null ? Number(savedUserRole) : null);
  if (localStorage.getItem('isAdmin') === null) {
    localStorage.setItem('isAdmin', '3');
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/login', {
        login: login,
        password: password
      });
      setIsAdmin(response.data.is_admin);
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      localStorage.setItem('isAdmin', response.data.is_admin);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Неправильный логин или пароль!');
      } else {
        console.error('There was an error!', error);
      }
    }
  };



  if (isAdmin === 1) {
    return <AdminPage setIsAdmin={setIsAdmin} />;
  } else if (isAdmin === 0) {
    return <ParticipantPage login={login} setIsAdmin={setIsAdmin} />;
  } else if (isAdmin === 2) {
    return <ReaderPage setIsAdmin={setIsAdmin} />;
  }

  return (
      <div className="App">
        <form style={loginFormStyles} onSubmit={handleSubmit}>
          <label>
            Логин      :
            <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                style={inputStyles}
            />
          </label>
          <label>
            Пароль:
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyles}
            />
          </label>
          <input type="submit" value="Войти" />
        </form>
      </div>
  );
}

export default App;
