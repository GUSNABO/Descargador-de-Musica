import React from 'react';
import NeonBackground from './components/NeonBackground';
import DownloaderForm from './components/DownloaderForm';

function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <NeonBackground />
      <DownloaderForm />
    </div>
  );
}

export default App;
