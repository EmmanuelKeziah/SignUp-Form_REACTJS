import React, { useEffect, useState } from "react";

const About = () => {
  const [getFetchPost, setGetFetchPost] = useState([]);

  const fetchApiData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setGetFetchPost(data));
  };
  console.log(getFetchPost);

  // Fetch data when the component mounts and set the state to the fetched data
  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="text-center mt-10 p-5 bg-black rounded max-w-[200px] mx-auto">
      <h1>API Consumption using Fetch</h1>
      {getFetchPost.map((data, index) => (
        <section className="text-white" key={index}>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </section>
      ))}
    </div>
  );
};

export default About;
