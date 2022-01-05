import { Router } from './routes/router';

import { Header } from './components/Header/index';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Router />
    </>
  );
};