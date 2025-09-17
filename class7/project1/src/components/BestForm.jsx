import { useState } from "react"
import "./BestForm.css"
import { useNavigate } from "react-router-dom";
function BestForm() {

  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fName: "",
    email: "",
    password: "",
    Dob: "",
    education: "",
    gender: "female",
    course: "BA",
    resume: "",
  });

  const [familyMember, setFamilyMember] = useState([]);

  function handleFamilyMember(event) {
    const { value, checked } = event.target;
    if (checked) {
      setFamilyMember((familyMember) => [...familyMember, value]);
    } else {
      setFamilyMember((familyMember) =>
        familyMember.filter((member) => member !== value)
      );
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  function printData(event) {
    event.preventDefault();
    formData.familyMember = familyMember;
    console.log(formData);
    console.log("family member array", familyMember);
    navigate("/profile",{state:formData})

  }

  return (
    <div className="form-container">
      <h1 className="form-title">Best Form</h1>
      <form onSubmit={printData} className="best-form">
        <div className="form-group">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            name="fName"
            placeholder="Enter your First Name"
            value={formData.fName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="on"
          />
        </div>

        <div className="form-group">
          <h3>Choose Your Gender</h3>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Others"
              checked={formData.gender === "Others"}
              onChange={handleChange}
            />{" "}
            Others
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="Dob">Date of Birth</label>
          <input
            type="date"
            id="Dob"
            name="Dob"
            value={formData.Dob}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="education">Education</label>
          <textarea
            id="education"
            name="education"
            placeholder="Write about your education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Select Course</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="B.Tech">B.Tech</option>
            <option value="Bsc">Bsc</option>
            <option value="BA">BA</option>
            <option value="MCA">MCA</option>
          </select>
        </div>

        <div className="form-group">
          <h3>Tick Your Family Members</h3>
          <label>
            <input
              type="checkbox"
              value="Father"
              onChange={handleFamilyMember}
            />{" "}
            Father
          </label>
          <label>
            <input
              type="checkbox"
              value="Mother"
              onChange={handleFamilyMember}
            />
            Mother
          </label>
          <label>
            <input
              type="checkbox"
              value="Sister"
              onChange={handleFamilyMember}
            />
            Sister
          </label>
          <label>
            <input
              type="checkbox"
              value="Brother"
              onChange={handleFamilyMember}
            />
            Brother
          </label>
        </div>

        <div className="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default BestForm;
