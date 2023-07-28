import React from 'react';
import DateRangeComponent from './DateRangeComponent';

function App() {
  // CSS styles for the parent div
  const appStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust the height as needed
    background: 'linear-gradient(180deg, #f0f0f0, #ffffff)', // Light linear gradient background
  };

  return (
    <div style={appStyles}>
      <div>
        <h1>Calender</h1>
        <DateRangeComponent />
      </div>
    </div>
  );
}

export default App;
