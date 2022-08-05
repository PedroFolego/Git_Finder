import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';
import './User.css';

function User({ dataProfile }) {
  const {
    twitter_username: twitterUsername,
    avatar_url: avatarUrl,
    company, blog, location,
    following, name, bio,
    login, followers,
  } = dataProfile;
  return (
    <aside style={{ height: '100vh' }} className="mh-100 d-flex flex-column justify-content-center align-items-center userSide">
      <img src={avatarUrl} alt="user profile" className="rounded-circle profileImg" />
      <article className="d-flex flex-column">
        <h2>{name}</h2>
        <h4 className="mb-4">{login}</h4>
        <Button variant="secondary" className="d-flex align-self-center w-50 justify-content-center">Follow</Button>
        <h5 className="my-4">{bio}</h5>
        <h5>{blog}</h5>
        {twitterUsername && (
        <h5>
          @
          {twitterUsername}
        </h5>
        )}
        <h5>{company}</h5>
        <h5>{location}</h5>
        <div className="d-flex flex-row justify-content-around align-items-center">
          <p data-testid="following">
            <b>{following}</b>
            {' '}
            following
          </p>
          <p data-testid="followers">
            <b>{followers}</b>
            {' '}
            followers
          </p>
        </div>
      </article>
    </aside>
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
