import "./login.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DiidxazaLogo from "../../../components/logo/DiidxazaLogo";
import Button from "../../../components/Button/Button";
import { useLoginForm } from "../../../hooks/useAccountForm";
import { BiError } from "react-icons/bi";

const initialForm = {
  username: "",
  password: ""
};

const validationsForm = (form) => {
  let errors = {};
  let regexUsername = /^[A-Za-z0-9]{3,20}$/;
  let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!%?#])[A-Za-z\d@!%?#]{8,16}$/;
  if (!regexUsername.test(form.username)) {
    errors.username = "Error";
  }
  if (!regexPassword.test(form.password)) {
    errors.password = "Error";
  }
  return errors;
};

export default function Login({ setToken }) {
  const { t } = useTranslation();
  const {
    form,
    errors,
    loading,
    response,
    className,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useLoginForm(initialForm, validationsForm);

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
                <input className="input" name="username" type="text" onBlur={handleBlur} onChange={handleChange} value={form.username} required />
                <div className="system-message-container">
                  {errors.username && <p className="errorInput">{t("ErrorUsername")}</p>}
                </div>
              </label>
              <label>
                <p>{t("LoginPasswordInput")}</p>
                <input className="input" name="password" type="password" onBlur={handleBlur} onChange={handleChange} value={form.password} required />
                <div className="system-message-container">
                  {errors.password && <p className="errorInput">{t("ErrorPassword")}</p>}
                </div>
              </label>
              <div className="system-message-container">
                {loading && <p className={className}><BiError />  {response}</p>}
              </div>
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

/*Login.propTypes = {
  setToken: PropTypes.func.isRequired
}*/
