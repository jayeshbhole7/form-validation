import React, { useState } from 'react';
// import DataToDisplay from '../fromData';
import { useNavigate } from 'react-router-dom';
import './form.css';

const FormComp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const history = useHistory();
  const navigate =useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Validations req
    if (!formData.firstName) { errors.firstName = 'firstName is required'; }
    if (!formData.lastName) { errors.lastName = 'lastName is required'; }
    if (!formData.username) { errors.username = 'userName is required'; }
    if (!formData.email) { errors.email = 'email is required'; }
    if (!formData.password) { errors.password = 'password is required'; }
    if (!formData.phoneNo) { errors.phoneNo = 'phoneNo is required'; }
    if (!formData.country) { errors.country = 'country is required'; }
    if (!formData.city) { errors.city = 'city is required'; }
    if (!formData.panNo) { errors.panNo = 'panNo is required'; }
    if (!formData.aadharNo) { errors.aadharNo = 'aadharNo is required'; }



    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      navigate('/data', { state: { formData } });
    } else {
      setErrors(errors);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="form-control"
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="form-control"
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="form-control"
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="form-control"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="form-control"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="toggle-password-btn"
        >
          {showPassword ? "Hide" : "Show"} Password
        </button>
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          placeholder="Phone No."
          className="form-control"
        />
        {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
      </div>
      <div className="form-group">
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
          <option value="Japan">Japan</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="Brazil">Brazil</option>
          <option value="Argentina">Argentina</option>
          <option value="Colombia">Colombia</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="UK">UK</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="Russia">Russia</option>
          <option value="Australia">Australia</option>
          <option value="South Korea">South Korea</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Thailand">Thailand</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Philippines">Philippines</option>
          <option value="Egypt">Egypt</option>
          <option value="South Africa">South Africa</option>
          <option value="Iran">Iran</option>
          <option value="Iraq">Iraq</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Turkey">Turkey</option>
        </select>
        {errors.country && <span className="error">{errors.country}</span>}
      </div>
      <div className="form-group">
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
          <option value="Paris">Paris</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Beijing">Beijing</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Mexico City">Mexico City</option>
          <option value="Cairo">Cairo</option>
          <option value="Lagos">Lagos</option>
          <option value="Istanbul">Istanbul</option>
          <option value="Berlin">Berlin</option>
          <option value="Madrid">Madrid</option>
          <option value="Rome">Rome</option>
          <option value="Seoul">Seoul</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Toronto">Toronto</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          <option value="Dubai">Dubai</option>
          <option value="Singapore">Singapore</option>
        </select>
        {errors.city && <span className="error">{errors.city}</span>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="panNo"
          value={formData.panNo}
          onChange={handleChange}
          placeholder="PAN No."
          className="form-control"
        />
        {errors.panNo && <span className="error">{errors.panNo}</span>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
          placeholder="Aadhar No."
          className="form-control"
        />
        {errors.aadharNo && <span className="error">{errors.aadharNo}</span>}
      </div>
      <button type="submit" disabled={submitted} className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default FormComp;
