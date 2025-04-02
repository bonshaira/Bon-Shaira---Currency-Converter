import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Redux Provider */}
      <QueryClientProvider client={queryClient}> {/* React Query Provider */}
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
