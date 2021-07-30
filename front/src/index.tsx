import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div>Hello world</div>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root'),
);
