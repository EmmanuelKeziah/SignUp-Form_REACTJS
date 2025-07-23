import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [getAxiosUsers, setGetAxiosUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setGetAxiosUsers(response.data);
  };

  return (
    <div className="mt-16 bg-amber-300">
      <h1>API Consumption With Axios</h1>
      <table className="w-full text-sm text-left text-green-800 ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {getAxiosUsers.map(
            (
              { name, username, email, address, phone, website, company },
              index
            ) => (
              <tr key={index}>
                <td> {name} </td>
                <td> {username} </td>
                <td> {email} </td>
                <td>
                  {" "}
                  {address.street}, {address.city}
                </td>
                <td> {phone} </td>
                <td> {website} </td>
                <td> {company.name} </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Axios;
