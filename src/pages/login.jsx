import { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar.jsx';
import { Link } from 'react-router-dom';

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful");
      } else {
        alert(data.message || "Login failed");
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-bg">
        <div className="login-card">

          <div className="card-top">
            <h2 className="card-title">welcome back</h2>
            <p className="card-sub">sign in to your PEP account</p>
          </div>

           <form onSubmit={handleSubmit}>

            <div className="field">
              <label htmlFor="email">email</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="ex: 25002@supnum.mr"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="enter your password"
                required
              />
            </div>

            <div className="forgot">
              <Link to="/forgot">forgot password?</Link>
            </div>

            <button
              className="btn-login"
              type="submit"
            >
              login now
            </button>

          </form>
      
          <div className="divider">
            <div className="divider-line"></div>
            <span>or</span>
            <div className="divider-line"></div>
          </div>

          <Link to="/signup">
            <button className="btn-signup">
              create an account
            </button>
          </Link>

          <div className="card-bottom">
            <p>© 2026 PEP platform — all rights reserved</p>
          </div>

        </div>
      </div>

    </>
  );
}

export default Login;
