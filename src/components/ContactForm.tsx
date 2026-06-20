'use client';

import { useState } from 'react';

type Status = 'idle' | 'success';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  const inputClass =
    'w-full px-5 py-3.5 rounded-2xl bg-[rgba(37,37,37,0.5)] border border-white/8 text-white placeholder-[#666] focus:outline-none focus:border-[#c1121f]/60 transition-all text-sm';

  const labelClass = 'block text-xs font-medium text-[#808080] mb-2 uppercase tracking-wider';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>Nombre</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange}
          required className={inputClass} placeholder="Tu nombre" />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Correo electrónico</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange}
          required className={inputClass} placeholder="tu@email.com" />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Mensaje</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange}
          required rows={5} className={`${inputClass} resize-none`}
          placeholder="Cuéntame sobre tu proyecto..." />
      </div>
      <button type="submit" className="btn-pill w-full justify-center">
        Enviar mensaje
      </button>
      {status === 'success' && (
        <div className="flex items-center gap-3 bg-[#c1121f]/10 border border-[#c1121f]/20 text-[#e11d2a] text-sm px-4 py-3 rounded-2xl">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          ¡Gracias! Tu mensaje fue enviado correctamente.
        </div>
      )}
    </form>
  );
}
