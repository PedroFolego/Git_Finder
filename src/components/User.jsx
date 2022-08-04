import PropTypes from 'prop-types';
import React from 'react';

function User({ dataProfile }) {
  const {
    twitter_username: twitterUsername,
    public_repos: publicRepos,
    avatar_url: avatarUrl,
    company, blog, location,
    following, name, bio,
    login, followers,
  } = dataProfile;
  return (
    <section>
      <img src={avatarUrl} alt="user profile" />
      <h1>{name}</h1>
      <h3>{login}</h3>
      <h3>{bio}</h3>
      <h3>{blog}</h3>
      <h3>{twitterUsername}</h3>
      <h3>{publicRepos}</h3>
      <h3>{company}</h3>
      <h3>{location}</h3>
      <h3>
        {following}
        {' '}
        following
      </h3>
      <h3>
        {followers}
        {' '}
        followers
      </h3>
    </section>
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
