import React, { StrictMode, useEffect } from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useGetPosts } from './api';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function Test() {
  useEffect(() => {
    socket.emit('test', 'test', (resp: any) => {
      console.log(resp);
    });
  }, [socket]);

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
