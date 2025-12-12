'use client';

import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('✅ SUCCESS');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(`ERROR: ${data.error || 'FAILED'}`);
      }
    } catch (error) {
      setStatus('error');
      setMessage('ERROR: NETWORK_FAILURE');
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ENTER EMAIL ADDRESS"
          required
          disabled={status === 'loading'}
          className="w-full px-4 py-3 rounded-md bg-dark-bg border border-dark-border 
                   text-brand-white placeholder-brand-slate/50 font-mono text-sm
                   focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime
                   disabled:opacity-50 transition-all uppercase"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-4 py-3 rounded-md font-mono text-sm font-bold bg-brand-lime text-primary-text
                   hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>PROCESSING...</span>
            </>
          ) : (
            <>
              <span>JOIN WAITLIST</span>
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
      
      {message && (
        <div className={`text-xs font-mono p-2 border rounded-md ${
          status === 'success' 
            ? 'border-green-500/30 text-green-500 bg-green-500/5' 
            : 'border-red-500/30 text-red-500 bg-red-500/5'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}
