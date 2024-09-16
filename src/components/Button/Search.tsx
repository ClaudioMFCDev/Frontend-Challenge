import { useState } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const SearchInput: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };


  return (
    <form className="search-form">
        <div className='dropdown-button dropdown-button-opac search-container'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search"
            className="search-input"
            />
        </div>
    </form>
  );
};

export default SearchInput;
