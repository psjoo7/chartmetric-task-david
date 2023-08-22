import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderSearchbarContainer,
  HeaderSearchbarIcon,
  HeaderSearchbar,
} from './HeaderUtils';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchValue('');
  }, [location.pathname]);

  const handleLogo = (event: React.MouseEvent<HTMLImageElement>) => {
    if (event.type === 'click') {
      navigate('/');
    }
  };

  const handleSearchbar = (
    event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLImageElement>,
  ) => {
    if ('key' in event && event.key === 'Enter') {
      if (searchValue === '') navigate(`/`);
      else navigate(`/search/person?query=${searchValue}`);
    } else if (event.type === 'click') {
      if (searchValue === '') navigate(`/`);
      else navigate(`/search/person?query=${searchValue}`);
    }
  };

  const handleSearchbarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
