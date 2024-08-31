import React, { useState, useEffect } from 'react';
import LoadingPage from './pages/LoadingPage';
import Home from './pages/Home'; // Assuming you have a Home component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 10 seconds delay to showcase messages

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <LoadingPage /> : <Home />}
    </>
  );
};

export default App;
