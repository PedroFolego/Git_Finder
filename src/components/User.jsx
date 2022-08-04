import PropTypes from 'prop-types';
import React from 'react';

function User(dataProfile) {
  const {
    twitter_username: twitterUsername,
    public_repos: publicRepos,
    avatar_url: avatarUrl,
    company, blog, location,
    following, name, bio,
    login, followers,
  } = dataProfile;
  return (
    <section />
  );
}

export default User;

User.propTypes = {
  dataProfile: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
    twitterUsername: PropTypes.string,
    login: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    publicRepos: PropTypes.number,
  }),
}.isRequired;
