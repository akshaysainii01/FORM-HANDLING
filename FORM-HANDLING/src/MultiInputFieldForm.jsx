import { useState } from "react";

function MultiInputFieldForm() {
  // form state name age email
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });

  const handleSubmit = (e) => {
    //refresh ke liya
    e.preventDefault();
    console.log(formData);
  };

    //useState object ke liyaa 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Multiple Input Form</h2>
      {/* input name component */}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => handleChange(e)}
      />
      <br />

      <input
        name="email"
        type="email"
        placeholder="Email "
        value={formData.email}
        onChange={(e)=>handleChange(e)}
      />
      <br />

      <input
        name="age"
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e)=>handleChange(e)}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default MultiInputFieldForm;
