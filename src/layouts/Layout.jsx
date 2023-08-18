import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { LayoutContainer, ContentContainer, ContentHeader, ContentFooter } from './LayoutUtils';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <ContentHeader>Celebrities</ContentHeader>
        <Outlet />
        <ContentFooter />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
