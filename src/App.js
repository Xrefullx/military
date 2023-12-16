import React, { useState } from "react";
import axios from 'axios';
import './App.css';
import AdminPage from "./admin/AdminPage";
import ParticipantPage from "./participant/ParticipantPage";

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


  const getAuthToken = async () => {
    try {
      const requestData = {
        apiToken: 'Xrefullx',
      };
      const response = await axios.post('http://localhost:8080/api/auth', requestData);
      return response.data.token;
    } catch (error) {
      console.error('Error while fetching auth token:', error);
      throw error;
    }
  };


  const refreshToken = async () => {
    try {
      const newToken = await getAuthToken();
      localStorage.setItem('token', newToken);
      return newToken;
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let token = localStorage.getItem('token');

    if (!token) {
      try {
        token = await getAuthToken();
        localStorage.setItem('token', token);
      } catch (error) {
        return;
      }
    }

    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        login: login,
        password: password
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsAdmin(response.data.is_admin);
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      localStorage.setItem('isAdmin', response.data.is_admin);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        try {
          token = await refreshToken();
          localStorage.setItem('token', token);
          const response = await axios.post('http://localhost:8080/api/login', {
            login: login,
            password: password
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setIsAdmin(response.data.is_admin);
          localStorage.setItem('login', login);
          localStorage.setItem('password', password);
          localStorage.setItem('isAdmin', response.data.is_admin);
        } catch (refreshError) {
          console.error('Error refreshing token or retrying request:', refreshError);
          alert('Неправильный логин или пароль!');
        }
      } else {
        console.error('There was an error!', error);
      }
    }
  };




  if (isAdmin === 1) {
    return <AdminPage setIsAdmin={setIsAdmin} />;
  } else if (isAdmin === 0) {
    return <ParticipantPage login={login} setIsAdmin={setIsAdmin} />;
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
