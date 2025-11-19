import React from 'react';

export function Textarea({ className = '', ...props }) {
  const base =
    'w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
  return <textarea className={`${base} ${className}`} {...props} />;
}
