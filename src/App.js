import { useState } from "react";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
  });
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(form);
  }

  return (
    <div className="container">
      <h1>Lab Week 10: Data Entry Form</h1>

      <form className="card" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Address
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </label>

        <div className="grid">
          <label>
            City
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Province
            <input
              type="text"
              name="province"
              value={form.province}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Postal Code
            <input
              type="text"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="output">
          <h2>Submission</h2>
          <p><strong>Email:</strong><br />{submitted.email}</p>
          <p><strong>Full Name:</strong><br />{submitted.fullName}</p>
          <p><strong>Address:</strong><br />{submitted.address}</p>
          <p><strong>City:</strong><br />{submitted.city}</p>
          <p><strong>Province:</strong><br />{submitted.province}</p>
          <p><strong>Postal Code:</strong><br />{submitted.postalCode}</p>
        </div>
      )}
    </div>
  );
}