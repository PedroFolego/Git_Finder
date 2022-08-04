import PropTypes from 'prop-types';
import React from 'react';
import Repositories from '../components/Repositories';
import User from '../components/User';
import './UserProfile.css';

function UserProfile({ dataProfile }) {
  const { repos_url: reposUrl, public_repos: publicRepos } = dataProfile;

  return (
    <main className="mainProfile">
      <User dataProfile={dataProfile} />
      <Repositories reposUrl={reposUrl} publicRepos={publicRepos} />
    </main>
  );
}

export default UserProfile;

UserProfile.propTypes = {
  dataProfile: PropTypes.shape({
    reposUrl: PropTypes.string,
    publicRepos: PropTypes.number,
  }),
}.isRequired;
