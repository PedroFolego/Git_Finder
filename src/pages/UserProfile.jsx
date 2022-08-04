import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import User from '../components/User';

function UserProfile({ dataProfile }) {
  const { repos_url: reposUrl } = dataProfile;
  useEffect(() => {

  });
  // const getRepositories = async () => {

  // };
  return (
    <main>
      <User dataProfile={dataProfile} />
      <h1>{reposUrl}</h1>
    </main>
  );
}

export default UserProfile;

UserProfile.propTypes = {
  dataProfile: PropTypes.shape({
    repos_url: PropTypes.string,
  }),
}.isRequired;
