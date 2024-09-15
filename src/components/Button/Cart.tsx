import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const MyCart: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#FFFFFF",}} />
      {label}
    </button>
  );
};

export default MyCart;
