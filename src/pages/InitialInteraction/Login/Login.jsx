import React, { useState } from 'react';
import './login.scss'
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import DiidxazaLogo from '../../../components/logo/DiidxazaLogo'
import Button from '../../../components/Button/Button'


async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const { t } = useTranslation();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <>
      <div className="login-main-container">
        <div className="login-container">
          <div className="login-title-container">
            <DiidxazaLogo styleClass="logo-black-link" />
            <h2>{t("LoginLoginTitle")}</h2>
          </div>

          <div className="login-form-container">
            <form onSubmit={handleSubmit}>
              <label>
                <p>{t("LoginUsernameInput")}</p>
                <input className="input" type="text" onChange={e => setUserName(e.target.value)} />
              </label>
              <label>
                <p>{t("LoginPasswordInput")}</p>
                <input className="input" type="password" onChange={e => setPassword(e.target.value)} />
              </label>
              <div className="login-form-button-container">
                <div className="login-form-button">
                  <Button type="submit" styleName="secondary-button" text={t("LoginLoginButton")}></Button>
                </div>
              </div>
            </form>
          </div>

          <div className="login-create-account-container">
            <span>{t("LoginNewAccountSpan")}  <Link className="link" to="/signUp">{t("LoginNewAccountThenRegisterSpan")}</Link></span>

          </div>

          <div className="login-terms-container">
            <ul>
              <li>
                <Link className="link" to="/not-found">
                  <span>Terms</span>
                </Link>
              </li>
              <li>
                <Link className="link" to="/not-found">
                  <span>Privacy</span>
                </Link>
              </li>
              <li>
                <Link className="link" to="/not-found">
                  <span>Site Map</span>
                </Link>
              </li>
            </ul>
          </div>


        </div>
      </div>
    </>

  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
