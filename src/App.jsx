import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Layout/router/router';

const App = () => {
  return (
  <RouterProvider router={router}></RouterProvider>
  );
};

export default App;