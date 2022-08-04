import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

function UserProfile({ dataProfile }) {
  const {
    name, bio, twitter_username,
    avatar_url, repos_url,
    company, blog, location,
    login, followers, following,
    public_repos,
  } = dataProfile;
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

UserProfile.propTypes = {
  dataProfile: PropTypes.shape({
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    repos_url: PropTypes.string,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
    twitter_username: PropTypes.string,
    login: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    public_repos: PropTypes.number,
  }),
}.isRequired;
