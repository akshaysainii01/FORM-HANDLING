import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    //refresh stop krne ke liyaa
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>React form example</h2>
      <label>Name:</label>
      <input
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
export default SimpleForm;
