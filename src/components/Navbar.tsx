import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button/TextIcon";

type Links = {
    name: string;
    href: string;
};

const linksL: Links[] = [
    {name: 'CURRENCY', href: '#'},
    {name: 'ITEMS', href: '#'},
    {name: 'ACCOUNTS', href: '#'},
    {name: 'SERVICES', href: '#'},
    {name: 'SWAP', href: '#'},
    {name: 'SELL', href: '#'},
];

const linksR: Links[] = [
    {name: 'USD', href: '#'},
    {name: 'CART (5)', href: '#'},
];

const MyNavbar = () => {
    return (
        <nav>
            {/* 1/2 */}
            <div className="nav-content">
                <div className="logo">
                    <img src="logo.svg" alt="chicksgold-logo" />
                </div>
                <ul className="nav-linksL">
                    {linksL.map( (link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.name}
                            </a>
                            <FontAwesomeIcon icon={faChevronDown} 
                            style={{color: "#FFFFFF",}}
                            size="sm"/>
                        </li>
                        ) ) }
                </ul>
            </div>
            {/* 1/2 */}
            <div className="nav-content">
                <ul className="nav-linksR">
                    {linksR.map( (link, index) => (
                        <li key={index}>
                            <a href={link.href}>
                                {link.name === 'CART (5)' && (
                                    <FontAwesomeIcon icon={faCartShopping} style={{color: "#DDDDDD",}} />  
                                )
                                }
                                {link.name}
                            </a>
                            {link.name !== 'CART (5)' && (
                                <FontAwesomeIcon icon={faChevronDown} 
                                style={{color: "#FFFFFF",}}
                                size="sm"/>
                            )}
                        </li>
                    ) ) }
                </ul>
                <div className="auth-buttons">
                    <Button label="SIGN IN" className="sign-in-btn" icon={faUser}/>
                </div>
            </div>
        </nav>
    )
}

export default MyNavbar;