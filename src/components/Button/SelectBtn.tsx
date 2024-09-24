import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

interface DropdownButtonProps {
  title?: string;
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon: IconDefinition;
  items: string[];
}


const DropdownButton: React.FC<DropdownButtonProps> = ({ title, label, onClick, type = 'button', className = '', icon, items}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className={className} onClick={toggleDropdown}>
        <div id='icon-label'>
          <FontAwesomeIcon icon={icon} size='2x' style={{color: '#63c37b'}}/>

          <div className='label-btn'>
          <div className='title-btn'>
            <p>{title}</p>
          </div>
            <p>{label}</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>

      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} className="dropdown-list-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
