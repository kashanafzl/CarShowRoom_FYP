import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import googleimg from "../../Assets/img/google.svg";


export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Login successful:", formData);
      // Add your login logic here (e.g. API call)
    }
  };

  const goToSignupPage = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="signupbgdiv">
        <div className="alreadyaccountline">
          <p> Don't have an account? <span onClick={goToSignupPage}>Sign Up</span></p>
        </div>

        <form className="mainflexsignupdiv" onSubmit={handleSubmit}>
          <div className="welcomecontent">
            <h1>
              Welcome! To <span>Car Show Room</span>
            </h1>
            <p>My Amazing Lorem ipsum dolor sit amet. Cars you can see</p>
          </div>

          <div className="signcontent">
            <h2>Login</h2>
            <p>Let’s Create Your Account to Join Us!</p>

            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}

            <div className="checkboxandp">
              <input type="checkbox" className="checke" />
              <p>Remember me</p>
            </div>

            <button type="submit">Login</button>

            <h6>OR</h6>

            <button type="button" className="googlebtnandtext">
              <img src={googleimg} alt="Google" />
              <p>Continue With Google</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
