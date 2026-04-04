import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ changed
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import Loader from './components/loader/organisms/index';
import App from './App';
import store from './redux/store/index';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ new

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <HelmetProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </HelmetProvider>
    </React.Suspense>
  </React.StrictMode>
);

reportWebVitals();