import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const navigate=useNavigate()
 
  const handleChange = (e) => {
    const { id, value } = e.target;
 
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    console.log(formData,"data to be sent to server")

    try {
      const response = await fetch("http://localhost:6005/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("✅ Registered Successfully!");
        setFormData({ name: "", email: "", password: "" });
        navigate("/login")
      } else {
        setMessage(`❌ ${result.message || "Registration Failed!"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Server Error. Try again later.");
    }

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h4>🛍 Register to E-Commerce</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Register
                </button>
              </form>
              {message && <div className="text-center mt-3 fw-bold">{message}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

