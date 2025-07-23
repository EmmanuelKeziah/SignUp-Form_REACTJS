import React, { useState } from "react";

const FAQs = () => {
  const [myName, setMyName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [myBio, setMyBio] = useState("I am a new user");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      myName,
      myEmail,
      myBio,
    };

    setUsers([...users, newUser]);

    // Clear input fields
    setMyName("");
    setMyEmail("");
    setMyBio("I am a new user");
  };

  return (
    <div className="form bg-gradient-to-r from-purple-300 to-blue-200 h-auto w-[500px] mx-auto my-10 rounded-lg shadow-lg p-5">
      <section>
        <main>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Enter your Name"
              value={myName}
              onChange={(e) => setMyName(e.target.value)}
              className="p-2 rounded-md"
              required
            />
            {myName}

            <input
              type="email"
              placeholder="Enter your Email"
              value={myEmail}
              onChange={(e) => setMyEmail(e.target.value)}
              className="p-2 rounded-md"
              required
            />
            {myEmail}

            <textarea
              placeholder="Enter your Bio"
              value={myBio}
              onChange={(e) => setMyBio(e.target.value)}
              className="p-2 rounded-md"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </main>

        <main className="flex flex-col mt-5 gap-3">
          {users.map((user, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-3 text-center">
                Name: {user.myName}
              </h3>
              <p>
                <b>Email:</b> {user.myEmail}
              </p>
              <p>
                <b>Bio:</b> {user.myBio}
              </p>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
};

export default FAQs;
