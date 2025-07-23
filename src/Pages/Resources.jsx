import React from "react";
import { useState } from "react";

const Resources = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    firstName: "",
    email: "",
    password: "",
  });

  const updateForm = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormUpdate = (e) => {
    console.log(
      e.target.name,
      e.target.value,
      e.target.type,
      e.target.placeholder
    );
  };

  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-3 mx-auto p-5 rounded shadow-lg min-w-[400px] rounded-b-lg text-white text-center max-w-40"
      >
        <h1 className="text-xl font-bold mb-2">Resources Form</h1>
        <input
          type="text"
          placeholder="Enter your first name"
          name="username"
          value={userDetails.email}
          onChange={(e) => {handleFormUpdate}
          // onchange={(e) => {updateForm}}
        }
        />

        <div className="form-group mb-4">
          <label htmlFor="">FirstName</label>
          <input 
            type="text" 
            value={userDetails.firstName}
            name="firstName"
            onChange={(e) => updateForm(e)}
            placeholder="Enter your first name"
          />
        </div>

        <button 
        type="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Resources;
