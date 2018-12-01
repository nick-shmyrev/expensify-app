import { Link } from 'react-router-dom';
import React from 'react';

const NotFoundPage = () => (
  <div>
    <p>Error 404</p>
    <Link to="/">Back to Home</Link>
  </div>
);

export default NotFoundPage;
