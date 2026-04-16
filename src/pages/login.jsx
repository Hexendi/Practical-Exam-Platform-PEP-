import { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar.jsx';
import { Link } from 'react-router-dom';


//
const users = [
  {
    email: "admin@test.com",
    password: "1234",
    role: "admin"
  },
  {
    email: "user@test.com",
    password: "0000",
    role: "user"
  }
];






function Login() {
  const [formData,setFormData] = useState({
    email:"",
    password:""
  });
  const handleChange =  (e) => {
    const {name,value} = e.target;
    setFormData(prev =>({
      ...prev , 
      [name]:value
    }))};

    const handleSubmit = async (e) => {
      e.preventDefault();

      const res = await fetch("http://localhost:5000/login" , {
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    localStorage.setItem("token", data.token);
  }
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
              onChange={handleChange}
              placeholder="ex: 25002@supnum.mr"
            />
          </div>

          <div className="field">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="pass"
              onChange={handleChange}
              placeholder="enter your password"
            />
          </div>

          <div className="forgot">
            <Link to="/forgot">forgot password?</Link>
          </div>
          <form onSubmit={handleSubmit}>
          <button className="btn-login" type="submit">login now</button>
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
