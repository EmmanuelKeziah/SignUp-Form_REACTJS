import React, { useState } from 'react';   


const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userPass, setUserPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [userPhone, setUserPhone] = useState();
    const [userEmail, setUserEmail] = useState('');
    const [users, setUsers] = useState([]);
    

    console.log (users);


    const submitHandler = (e) => {
      e.preventDefault();
      setUsers ([...users, 
        {
          firstName,
          lastName,
          userPass, 
          confirmPass, 
          userPhone,
          userEmail,
        }]);

        //Clear the form fields after submission
      setFirstName('');
      setLastName('');
      setUserPass('');
      setConfirmPass('');
      setUserPhone('');
      setUserEmail('');
    }


  return (

    <section className='background flex  justify-center items-center max-w-[90vw] mx-auto'>
      <main className='min-h-screen'>
        <div className=" p-5 ">
          <form 
          onSubmit={submitHandler}
          className='flex flex-col gap-3  mx-auto p-5 rounded shadow-lg min-w-[400px] rounded-b-lg text-white text-center'>

            <h1 className='text-xl font-bold mb-2'>Sign Up Form</h1>

            <input type="text" placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {firstName}

            <input type="text"        placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {lastName}

            <input type="password" placeholder='Password'
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
            />

            <input type="number" placeholder='Phone Number'
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
            />

            <input type="email" placeholder='Example@gmail.com' 
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            {userEmail}

            <button type="submit" className='bg-white text-blue-600 font-bold p-2 rounded hover:bg-blue-700 hover:text-white transition duration-300 max-w-[200px] mx-auto'>
              Sign Up
            </button>
          </form>
        </div>
      </main>

      <main className=' card-2 min-w-[400px] mx-auto p-5 min-h-[200px] shadow-lg flex flex-wrap'>
        {users.map((user, index) => (
          <div className="bg-purple-200 p-3 m-2 rounded-lg shadow-lg text-black" key={index}>
            <h2>
              <b>First Name: {user.firstName} </b>
            </h2>

            <h3>
              <b>Last Name: {user.lastName} </b>
            </h3>

            <h3>
              <b>Password: {user.userPass} </b> 
            </h3>

            <h3>
              <b>Confirm Password: {user.confirmPass} </b>
            </h3>

            <h3>  
              <b>Phone Number: {user.userPhone} </b>
            </h3>

            <h3>
              <b>Email: {user.userEmail} </b>
            </h3>
          </div>
        ))}
      </main>
    </section>
  )
}

export default Contact