import React from 'react';
import './Button.scss';

const Button = ({ label }) => {
  return (
    <a 
      href="https://calendly.com/hermann_life_institute/strategiesitzung-clone" 
      className="button" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};

export default Button;