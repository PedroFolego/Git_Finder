import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form,
} from 'react-bootstrap';

function SearchProfile({ setDataProfile }) {
  const [input, setInput] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  const navigate = useNavigate();

  const notFoundUser = () => {
    setInput('');
    setInvalidUser(true);
  };

  const getProfile = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${input}`);
      setDataProfile(response.data);
      localStorage.setItem('profile', JSON.stringify(response.data));
      navigate('/profile');
    } catch (error) {
      notFoundUser();
    }
  };

  const verifyImput = () => {
    if (input === '') {
      setInvalidUser(false);
      return setEmptyInput(true);
    }
    return getProfile();
  };

  const onChangeButton = (e) => {
    setEmptyInput(false);
    setInvalidUser(false);
    setInput(e.target.value);
  };

  return (
    <section style={{ height: '100vh' }} className="col mw-100 mh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center">Buscar Repositório no github</h1>
      <Form style={{ margin: '10px' }} className="d-flex justify-content-center align-items-center">
        <Form.Control
          data-testid="input"
          style={{ marginRight: '10px' }}
          id="inputProfile"
          placeholder="Digite o nome do usuário"
          value={input}
          onChange={onChangeButton}
        />
        <Button
          data-testid="button"
          variant="primary"
          type="button"
          onClick={verifyImput}
        >
          Pesquisar
        </Button>
      </Form>
      {emptyInput && <h4 className="text-center mt-2">informe um nome de usuário válido do github</h4>}
      {invalidUser
          && (
          <h4 className="text-center mt-2">
            Usuário não encontrado no github. Verifique se você digitou o nome corretamente
          </h4>
          )}
    </section>

  );
}

export default SearchProfile;

SearchProfile.propTypes = {
  setDataProfile: PropTypes.func.isRequired,
};
