import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import React from 'react';
import { render } from '@testing-library/react';

const renderRouter = (component) => {
  const history = createMemoryHistory();

  return render(
    <Router location={history.location} navigator={history}>
      {component}
    </Router>,
  );
};

export default renderRouter;
