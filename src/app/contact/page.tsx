import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}.`,
};

export default function ContactPage() {
  return (
    <div className="px-6 md:px-12 py-16 max-w-3xl">
      <p className="text-[#808080] text-sm mb-8">Contacto</p>
      <h1 className="text-display text-white mb-6">
        Trabajemos <span className="gradient-text">Juntos</span>
      </h1>
      <p className="text-[#bbb] text-lg mb-12">
        ¿Tienes un proyecto en mente? Cuéntame y te respondo lo antes posible.
      </p>

      <div className="card-inset p-8 mb-10">
        <ContactForm />
      </div>

      <div className="flex items-center gap-3 text-sm text-[#808080]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>
          O escríbeme directamente a{' '}
          <a href={`mailto:${personalInfo.email}`} className="text-[#c1121f] hover:underline">
            {personalInfo.email}
          </a>
        </span>
      </div>
    </div>
  );
}
