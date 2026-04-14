import '../App.css';
import Navbar from '../components/Navbar.jsx';

function Login() {
  return (
    <>
      <Navbar />
      <div className="login-bg">
        <div className="login-card">

          <div className="card-top">
            <h2 className="card-title">welcome back</h2>
            <p className="card-sub">sign in to your PEP account</p>
          </div>

          <div className="field">
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="ex: 25002@supnum.mr"
            />
          </div>

          <div className="field">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="pass"
              placeholder="enter your password"
            />
          </div>

          <div className="forgot">
            <a href="/forgot">forgot password?</a>
          </div>

          <button className="btn-login">login now</button>

          <div className="divider">
            <div className="divider-line"></div>
            <span>or</span>
            <div className="divider-line"></div>
          </div>

          <button className="btn-signup" onClick={() => window.location.href = '/signup'}>
            create an account
          </button>

          <div className="card-bottom">
            <p>© 2026 PEP platform — all rights reserved</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;
