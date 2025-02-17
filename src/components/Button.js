
import React from 'react';
import { Link } from 'react-router-dom';
export function Button({ to, children }) {
  return <Link to={to} className="bg-blue-500 text-white p-2 rounded">{children}</Link>;
}
