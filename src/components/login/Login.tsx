import "./style.css";
import avatar from "./assets/avatar.jpeg";

export const Login = () => {
  return (
    <div className="login">
      <div className="avatar">
        <img src={avatar} />
      </div>
      <h2>Login</h2>
      <h3>Welcome back Otavio</h3>
      <form className="login-form">
        <div className="textbox">
          <input type="email" placeholder="Username" />
          <span className="material-symbols-outlined"> account_circle </span>
        </div>
        <div className="textbox">
          <input type="password" placeholder="Password" />
          <span className="material-symbols-outlined"> lock </span>
        </div>
        <button type="submit">LOGIN</button>
        <a href="https://website.com">Forgot your credentials?</a>
      </form>
    </div>
  );
};
