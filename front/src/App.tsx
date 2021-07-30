import React from 'react';

function App() {
  return (
    <div
      style={{ backgroundColor: '#1a1a1a', height: '100vh', width: '100vw' }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: 'auto',
          padding: '0 25px',
          backgroundImage: `url()`,
          height: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <img
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: -1,
            opacity: 0.7,
            left: 0,
            right: 0,
          }}
          src="https://source.unsplash.com/RCAhiGJsUUE/1000x1000"
        />
        <div style={{ display: 'flex', height: '100%', padding: 50 }}>
          <div
            style={{
              height: 40,
              marginTop: 'auto',
              display: 'flex',
              width: '100%',
              fontSize: 19,
            }}
          >
            <input
              style={{ color: 'black', width: '100%', fontSize: 19 }}
              type="text"
            />
            <button style={{ color: 'black' }}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
