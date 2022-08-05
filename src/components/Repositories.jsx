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
    <section className="d-flex flex-column justify-content-center align-items-center repositorySide">
      <header className="d-flex w-100 border-bottom border-secondary">
        <h2 className="px-2 mb-0 rounded border-secondary">
          Repositories
          {' '}
          {publicRepos}
        </h2>
      </header>
      <nav className="mt-4 w-100">
        {repositories.map((repo) => (
          <div className="border-bottom mt-2 " key={repo.name}>
            <h2 className="text-primary"><a href={repo.html_url}>{repo.name}</a></h2>
            {repo.language && <li>{repo.language}</li>}
            <p className="mt-2">{repo.description}</p>
            <div className="d-flex flex-wrap mt-2">
              {repo.topics.map((topic) => (<p key={topic} className="justify-content-center align-items-center border rounded px-1 bg-secondary text-white">{topic}</p>))}
            </div>
            <div className="d-flex justify-content-start mt-0">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-code-fork" />
                <p className="mt-3 mx-2">{repo.forks}</p>
              </div>
              <p className="mt-3 mx-2">
                Last update:
                {' '}
                {repo.updated_at.slice(0, 10)}
              </p>
            </div>
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
