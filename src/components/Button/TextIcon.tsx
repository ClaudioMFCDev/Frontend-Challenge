
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon: IconDefinition;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '', icon }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {label}
      <FontAwesomeIcon icon={icon}/>
    </button>
  );
};

export default Button;
