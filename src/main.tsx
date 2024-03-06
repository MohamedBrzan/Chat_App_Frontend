import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './main.scss';
import Loading from './components/Loading/Loading.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <HelmetProvider>
        <CssBaseline />
        <BrowserRouter>
          <div onContextMenu={(e) => e.preventDefault()}>
          <App />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  </Suspense>
);
