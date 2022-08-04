import PropTypes from 'prop-types';
import React from 'react';
import Repositories from '../components/Repositories';
import User from '../components/User';

function UserProfile({ dataProfile }) {
  const { repos_url: reposUrl, public_repos: publicRepos } = dataProfile;

  return (
    <main>
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
