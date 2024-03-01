import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import AdminPage from "./admin/AdminPage";
import LoginAttemptsPage from "./admin/LoginAttemptsPage";
import ParticipantPage from "./participant/ParticipantPage";
import HistoryAnswerPage from "./admin/HistoryAnswerPage";

function App() {
  const [login, setLogin] = useState(localStorage.getItem('login') || "");
  const [password, setPassword] = useState(localStorage.getItem('password') || "");
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === '1');
  const [redirectTo, setRedirectTo] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const requestData = {
        apiToken: 'Xrefullx',
      };

      const response = await axios.post('https://dynamicforces.ru/api/auth', requestData);
      const token = response.data.token;

      const loginResponse = await axios.post('https://dynamicforces.ru/api/login', {
        login: login,
        password: password
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const isAdminResponse = loginResponse.data.is_admin === 1;

      setIsAdmin(isAdminResponse);
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      localStorage.setItem('isAdmin', isAdminResponse ? '1' : '0');

      if (isAdminResponse) {
        setRedirectTo('/admin');
      } else {
        setRedirectTo('/participant');
      }
    } catch (error) {
      console.error('Error while logging in:', error);
    }
  };

  return (
      <Router>
        <div className="App">
          {redirectTo && <Redirect to={redirectTo} />}
          <Switch>
            <Route
                path="/history/:userId"
                render={(props) => (
                    isAdmin ? <LoginAttemptsPage {...props} /> : <Redirect to="/" />
                )}
            />
            <Route path="/admin">
              {isAdmin ? <AdminPage login={login} /> : <Redirect to="/" />}
            </Route>
            <Route path="/participant">
              {!isAdmin ? <ParticipantPage login={login} /> : <Redirect to="/" />}
            </Route>
            <Route
                path="/Answerhistory/:id_answer"
                render={(props) => (
                    isAdmin ? <HistoryAnswerPage id_answer={props.match.params.id_answer} {...props} /> : <Redirect to="/" />
                )}
            />

            <Route path="/">
              <div className="login-form">
                <form onSubmit={handleSubmit}>
                  <div className="input-container">
                    <label>
                      Логин:
                      <input
                          type="text"
                          value={login}
                          onChange={(e) => setLogin(e.target.value)}
                          className="input-styles"
                      />
                    </label>
                  </div>
                  <div className="input-container">
                    <label>
                      Пароль:
                      <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="input-styles"
                      />
                    </label>
                  </div>
                  <div className="input-container">
                    <input type="submit" value="Войти" className="input-submit" />
                  </div>
                </form>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
