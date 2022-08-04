import React, { useEffect } from 'react';

function UserProfile({ dataProfile }) {
  useEffect(() => {

  });
  // const getRepositories = async () => {

  // };
  return (
    <main>
      <h1>Profile</h1>
      <h3>{dataProfile.name}</h3>
    </main>
  );
}

export default UserProfile;
