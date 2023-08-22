import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { LayoutContainer, ContentContainer, ContentHeader } from './LayoutUtils';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <ContentHeader>Celebrities</ContentHeader>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
