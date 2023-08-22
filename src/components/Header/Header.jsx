import { useNavigate, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderSearchbarContainer,
  HeaderSearchbarIcon,
  HeaderSearchbar,
} from './HeaderUtils';
import { useState, useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 위치 정보를 가져옵니다.
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    // 라우터 위치가 변경될 때마다 호출되는 부분
    setSearchValue('');
  }, [location.pathname]); // 의존성 배열에 location.pathname을 추가하여 위치가 바뀔 때마다 이 훅이 실행되도록 합니다.

  const handleLogo = (event) => {
    if (event.type === 'click') {
      navigate('/');
    }
  };

  const handleSearchbar = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      if (searchValue === '') navigate(`/`);
      else navigate(`/search/person?query=${searchValue}`);
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
