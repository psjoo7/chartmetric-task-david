import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderSearchbarContainer,
  HeaderSearchbarIcon,
  HeaderSearchbar,
} from './HeaderUtils';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleLogo = (event) => {
    if (event.type === 'click') {
      setSearchValue('');
      navigate('/');
    }
  };

  const handleSearchbar = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      navigate('/search/person');
    }
  };

  const handleSearchbarChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <HeaderContainer>
      <HeaderLogo
        src={`${process.env.PUBLIC_URL}/assets/images/CM_logo.svg`}
        alt="CM Logo"
        onClick={handleLogo}
      />
      <HeaderSearchbarContainer>
        <HeaderSearchbar
          type="search"
          placeholder="Search for a celebrities"
          onKeyDown={handleSearchbar}
          value={searchValue}
          onChange={handleSearchbarChange}
        />
        <HeaderSearchbarIcon
          src={`${process.env.PUBLIC_URL}/assets/images/search_icon.svg`}
          alt="Search Logo"
          onClick={handleSearchbar}
        />
      </HeaderSearchbarContainer>
    </HeaderContainer>
  );
};

export default Header;
