import React from 'react';

const Page = ({title, children}) => {
  return (
    <div className="page">
      {title && <h2 className="primary">{title}</h2>}
      {children}
    </div>
  );
};

export default Page;