import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home, Search } from 'pages';
import { GlobalStyles, theme } from 'styles';
import Layout from 'layouts/Layout';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/person/popular" />} />
            <Route path="/search/person" element={<Search />} />
            <Route path="/person/popular" element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
