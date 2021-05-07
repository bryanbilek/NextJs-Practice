import Head from "next/head";
import React from "react";

const projects = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Next - Projects</title>
      </Head>
      <h1>Projects Page</h1>
      <h2>List of Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users: data }, // will be passed to the page component as props
  };
}

export default projects;
