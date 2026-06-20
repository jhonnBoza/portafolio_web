import Link from 'next/link';

const items = [
  {
    label: 'Inicio',
    href: '/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[22px] h-[22px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 11l9-8 9 8M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" />
      </svg>
    ),
  },
  {
    label: 'Proyectos',
    href: '/projects',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[22px] h-[22px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
  {
    label: 'Sobre Mí',
    href: '/about',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[22px] h-[22px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" />
      </svg>
    ),
  },
  {
    label: 'Contacto',
    href: '/contact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[22px] h-[22px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function RightNav() {
  return (
    <nav className="hidden xl:flex fixed right-12 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 p-1 rounded-full bg-white/10 backdrop-blur-xl">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className="group relative w-[50px] h-[50px] rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          {item.icon}
          <span className="absolute right-[60px] whitespace-nowrap bg-white text-black text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
