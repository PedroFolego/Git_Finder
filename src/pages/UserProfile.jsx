import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Repositories from '../components/Repositories';
import User from '../components/User';

function UserProfile({ dataProfile }) {
  const { repos_url: reposUrl } = dataProfile;

  return (
    <main>
      <User dataProfile={dataProfile} />
      <Repositories reposUrl={reposUrl} />
    </main>
  );
}

export default UserProfile;

UserProfile.propTypes = {
  dataProfile: PropTypes.shape({
    repos_url: PropTypes.string,
  }),
}.isRequired;
