import { useState } from 'react';

export default function WaitlistForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  if (formStatus === 'success') {
    return (
      <div className="p-12 glass-panel border-success/30 rounded-lg flex flex-col items-center">
        <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </div>
        <h3 className="text-3xl font-black italic uppercase mb-4 tracking-tighter text-white">Welcome aboard, Rider.</h3>
        <p className="text-dark-text-secondary italic tracking-widest font-bold uppercase text-sm">You are officially on the list. High-five.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <input
          required
          type="text"
          placeholder="YOUR NAME"
          className="w-full bg-dark-surface border border-dark-border px-4 sm:px-6 py-4 sm:py-5 focus:border-hero-accent outline-none transition-colors font-black italic uppercase tracking-widest text-white text-sm sm:text-base"
        />
        <input
          required
          type="email"
          placeholder="EMAIL ADDRESS"
          className="w-full bg-dark-surface border border-dark-border px-4 sm:px-6 py-4 sm:py-5 focus:border-hero-accent outline-none transition-colors font-black italic uppercase tracking-widest text-white text-sm sm:text-base"
        />
      </div>
      <select className="w-full bg-dark-surface border border-dark-border px-4 sm:px-6 py-4 sm:py-5 focus:border-hero-accent outline-none transition-colors font-black italic uppercase tracking-widest text-white appearance-none text-sm sm:text-base">
        <option>SELECT YOUR MACHINE</option>
        <option>SPORT / STREET</option>
        <option>ADV / DUAL SPORT</option>
        <option>CRUISER</option>
        <option>TRACK / RACE</option>
        <option>OTHER / VINTAGE</option>
      </select>
      <button
        type="submit"
        disabled={formStatus === 'submitting'}
        className="w-full py-4 sm:py-6 bg-hero-accent text-white font-black italic uppercase text-lg sm:text-2xl tracking-tighter hover:bg-opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-3 sm:gap-4"
      >
        {formStatus === 'submitting' ? 'PROCESSING...' : (
          <>
            Request Beta Access
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </>
        )}
      </button>
    </form>
  );
}
