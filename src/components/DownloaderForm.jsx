import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Music, Video, Loader } from 'lucide-react';

const DownloaderForm = () => {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('mp3'); // Default formatted selection
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleDownload = async () => {
    if (!url) {
      setStatus('PLEASE ENTER A VALID URL');
      return;
    }

    setLoading(true);
    setStatus(`INITIATING ${format.toUpperCase()} PROTOCOL...`);

    try {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = '/download'; 
      
      const urlInput = document.createElement('input');
      urlInput.type = 'hidden';
      urlInput.name = 'url';
      urlInput.value = url;

      const formatInput = document.createElement('input');
      formatInput.type = 'hidden';
      formatInput.name = 'format';
      formatInput.value = format;

      form.appendChild(urlInput);
      form.appendChild(formatInput);
      document.body.appendChild(form);
      form.submit();
      
      setTimeout(() => {
        setLoading(false);
        setStatus('DOWNLOAD SEQUENCE COMPLETE');
        document.body.removeChild(form);
      }, 3000);

    } catch (error) {
      console.error(error);
      setStatus('ERROR: CONNECTION FAILURE');
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full max-w-lg p-8 mx-4"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 0 50px rgba(0, 243, 255, 0.1)',
        borderRadius: '20px',
      }}
    >
      {/* Decorative Border Glow */}
      <div className="absolute inset-0 rounded-[20px] pointer-events-none" 
           style={{
             border: '1px solid transparent',
             background: 'linear-gradient(45deg, var(--primary-neon), var(--secondary-neon)) border-box',
             WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
             WebkitMaskComposite: 'xor',
             maskComposite: 'exclude',
             opacity: 0.5
           }} 
      />

      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-2 tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          NEON<span style={{ color: 'var(--secondary-neon)', textShadow: '0 0 10px var(--secondary-neon)' }}>STREAM</span>
        </h1>
        <p className="text-cyan-400 tracking-[0.2em] text-sm opacity-80" style={{ color: 'var(--primary-neon)' }}>
          FUTURE OF DOWNLOADING
        </p>
      </div>

      <div className="space-y-6">
        <div className="relative group">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube Link Here..."
            className="w-full bg-black/50 border border-[var(--primary-neon)] rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-neon)] transition-all duration-300"
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              boxShadow: '0 0 15px rgba(0, 243, 255, 0.1)'
            }}
          />
          <div className="absolute inset-0 rounded-xl bg-[var(--primary-neon)] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Format Selection Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setFormat('mp3')}
            className={`flex-1 group relative overflow-hidden px-4 py-3 rounded-xl border transition-all duration-300 ${format === 'mp3' ? 'border-[var(--secondary-neon)] shadow-[0_0_20px_rgba(188,19,254,0.4)] bg-[var(--secondary-neon)]/10' : 'border-[var(--primary-neon)] opacity-60 hover:opacity-100'}`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 font-bold tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <Music className="w-5 h-5" /> MP3 AUDIO
            </span>
          </button>

          <button
            onClick={() => setFormat('mp4')}
            className={`flex-1 group relative overflow-hidden px-4 py-3 rounded-xl border transition-all duration-300 ${format === 'mp4' ? 'border-[var(--secondary-neon)] shadow-[0_0_20px_rgba(188,19,254,0.4)] bg-[var(--secondary-neon)]/10' : 'border-[var(--primary-neon)] opacity-60 hover:opacity-100'}`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 font-bold tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <Video className="w-5 h-5" /> MP4 VIDEO
            </span>
          </button>
        </div>

        {/* Main Download Button */}
        <button
          onClick={handleDownload}
          disabled={loading}
          className="w-full group relative overflow-hidden px-6 py-5 rounded-xl bg-[var(--primary-neon)]/10 border border-[var(--primary-neon)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,243,255,0.6)] hover:bg-[var(--primary-neon)]/20"
        >
          <div className="absolute inset-0 bg-[var(--primary-neon)] opacity-0 group-hover:opacity-10 transition-opacity" />
          <span className="relative z-10 flex items-center justify-center gap-3 font-bold text-xl tracking-widest text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            {loading ? <Loader className="w-6 h-6 animate-spin" /> : <Download className="w-6 h-6" />}
            {loading ? 'PROCESSING...' : 'DOWNLOAD NOW'}
          </span>
        </button>

        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-center mt-4 overflow-hidden"
            >
              <div className="py-2 text-[var(--primary-neon)] font-mono tracking-widest flex items-center justify-center gap-2">
                {loading && <Loader className="w-4 h-4 animate-spin" />}
                {status}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 text-center text-xs opacity-40 tracking-widest">
        SYSTEM READY // V2.0
      </div>
    </motion.div>
  );
};

export default DownloaderForm;
