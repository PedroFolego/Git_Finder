import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function Repositories({ reposUrl, publicRepos }) {
  const [repositories, setRepositories] = useState([]);

  const getRepositories = async () => {
    const response = await axios.get(reposUrl);
    setRepositories(response.data);
  };

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <section>
      <header>
        <h1>
          Repositories
          {' '}
          {publicRepos}
        </h1>
      </header>
      <nav>
        {repositories.map((repo) => (
          <div>
            <h2>{repo.name}</h2>
            <h4>{repo.language}</h4>
            <p>{repo.description}</p>
            {/* {repo.license && <p>{repo.license}</p>} */}
            <h4>
              Forks
              {' '}
              {repo.forks}
            </h4>
            <div>
              {repo.topics.map((topic) => (<p>{topic}</p>))}
            </div>
            <h4>{repo.updated_at}</h4>
          </div>
        ))}
      </nav>
    </section>
  );
}

export default Repositories;

Repositories.propTypes = {
  reposUrl: PropTypes.string.isRequired,
  publicRepos: PropTypes.number.isRequired,
};
