import React from 'react';

export function Button({ className = '', variant, ...props }) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all';

  return <button className={`${base} ${className}`} {...props} />;
}
