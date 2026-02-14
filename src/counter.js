import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Functional Component using useState
function Counter() {
  // Declare a state variable 'count' and an updater function 'setCount'
  const [count, setCount] = useState(0); // Initial state is 0

  // Function to handle the button click and update the state
  const handleIncrement = () => {
    setCount(count + 1); // Calling setCount triggers a re-render
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

// // Root rendering in index.js or similar entry file
// const rootElement = document.getElementById('root');
// // Use createRoot for React 18+
// const root = ReactDOM.createRoot(rootElement); 
// root.render(<Counter />);