import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function SearchProfile({ setUrlProfile, urlProfile }) {
  const [input, setInput] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      await axios.get(`https://api.github.com/users/${input}`);
      setUrlProfile(`https://api.github.com/users/${input}`);

      console.log(urlProfile);
      navigate('/profile');
    } catch (error) {
      setInvalidUser(true);
    }
  };

  const verifyImput = () => {
    if (input === '') {
      return setEmptyInput(false);
    }
    return getProfile();
  };

  const onChangeButton = (e) => {
    setEmptyInput(false);
    setInvalidUser(false);
    setInput(e.target.value);
  };

  return (
    <main>
      <h1>Buscar Repositório no github</h1>
      <nav>
        <label htmlFor="inputProfile">
          <input
            id="inputProfile"
            placeholder="Digite o nome do usuário"
            onChange={onChangeButton}
          />
        </label>
        <button
          type="button"
          onClick={verifyImput}
        >
          Pesquisar
        </button>
        {emptyInput && <h1>informe um nome de usuário válido do github</h1>}
        {invalidUser
          && (
          <h1>
            Usuário não encontrado no github. Verifique se você digitou o nome corretamente
          </h1>
          )}
      </nav>
    </main>
  );
}

export default SearchProfile;

SearchProfile.propTypes = {
  urlProfile: PropTypes.string.isRequired,
  setUrlProfile: PropTypes.func.isRequired,
};
