import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useGetPosts } from './api';

function Test() {
  const a = useGetPosts();
  return (
    <div>
      <pre>{JSON.stringify(a, null, 2)}</pre>
    </div>
  );
}

const queryClient = new QueryClient();
render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Test />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root'),
);
