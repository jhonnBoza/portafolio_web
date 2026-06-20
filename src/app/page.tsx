import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';

const heroTags = ['Desarrollo Web', 'Apps Móviles', 'Backend', 'UI Design'];

const stats = [
  { label: 'Repositorios', value: '69', suffix: '+' },
  { label: 'Lenguajes', value: '10', suffix: '+' },
];

const stacks = [
  { num: '01', title: 'Web', items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
  { num: '02', title: 'Mobile', items: ['Flutter & Dart', 'Swift / iOS', 'Kotlin / Android'] },
  { num: '03', title: 'Backend', items: ['Node.js', 'Laravel & PHP', 'Python', 'Firebase'] },
  { num: '04', title: 'Tools', items: ['Git & GitHub', 'Xcode', 'Docker', 'VS Code'] },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="px-6 md:px-12 py-12">

      {/* ───── HERO ───── */}
      <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center">
        <p className="text-[#808080] text-sm mb-8">Lima, Perú 🇵🇪 · {personalInfo.title}</p>

        <span className="dot-before mb-6">Introducción</span>

        <h1 className="text-display text-white mb-7 max-w-3xl">
          Convirtiendo Ideas en <br className="hidden md:block" />
          Productos <span className="gradient-text">Digitales</span>
        </h1>

        <p className="text-[#bbb] text-base md:text-lg max-w-xl leading-relaxed mb-10">
          {personalInfo.description}
        </p>

        {/* tags */}
        <ul className="flex flex-wrap gap-2 mb-14">
          {heroTags.map((t) => (
            <li key={t}><span className="tag">{t}</span></li>
          ))}
        </ul>

        {/* stat cards */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
          {stats.map((s) => (
            <div key={s.label} className="card-inset px-8 pt-6 pb-3">
              <span className="dot-before text-sm">{s.label}</span>
              <div className="flex items-end justify-end mt-12">
                <span className="text-display-2 text-white leading-none">{s.value}</span>
                <span className="text-display-2 gradient-text leading-none">{s.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── STACK / SERVICES ───── */}
      <section className="py-24 border-t border-white/5">
        <div className="sec-head">
          <span className="num">01</span>
          <span className="line" />
          <span className="label">Stack Tecnológico</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stacks.map((s) => (
            <div key={s.num} className="card-inset p-7">
              <p className="font-head text-[#c1121f] text-lg mb-6">{s.num}</p>
              <h3 className="text-2xl text-white mb-5">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="text-[#999] text-sm flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-[#c1121f]" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ───── SELECTED WORKS ───── */}
      <section className="py-24 border-t border-white/5">
        <div className="sec-head">
          <span className="num">02</span>
          <span className="line" />
          <span className="label">Proyectos Seleccionados</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
              <div className="card-inset overflow-hidden p-3 mb-4">
                <div
                  className={`relative aspect-[16/10] rounded-2xl overflow-hidden ${
                    p.mobile ? 'bg-gradient-to-b from-[#1a1a1f] to-[#0b0b0d] flex items-center justify-center' : ''
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className={
                      p.mobile
                        ? 'object-contain p-3 group-hover:scale-105 transition-transform duration-500'
                        : 'object-cover group-hover:scale-105 transition-transform duration-500'
                    }
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="flex items-start justify-between px-1">
                <div>
                  <p className="text-[#808080] text-xs mb-1">
                    {p.technologies.slice(0, 2).join(' · ')}
                  </p>
                  <h3 className="text-2xl text-white group-hover:text-[#c1121f] transition-colors">
                    {p.title}
                  </h3>
                </div>
                <span className="text-[#808080] text-xs font-head">0{i + 1}</span>
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* ───── ABOUT PREVIEW ───── */}
      <section className="py-24 border-t border-white/5">
        <div className="sec-head">
          <span className="num">03</span>
          <span className="line" />
          <span className="label">Sobre Mí</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-white leading-tight mb-6">
              Un dev que no le <br /> teme al <span className="gradient-text">código</span>
            </h2>
            <p className="text-[#bbb] leading-relaxed mb-4">
              Estudiante de <span className="text-white">Tecsup</span> apasionado por construir productos
              digitales desde cero. Toco web, mobile, backend y todo lo que se me cruza.
            </p>
            <p className="text-[#999] leading-relaxed mb-8">
              Con más de 69 repositorios públicos en GitHub, aprendo construyendo. Cada proyecto es
              una oportunidad para explorar algo nuevo.
            </p>
            <Link href="/about" className="btn-pill">
              Conocer más
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="card-inset p-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── CONTACT CTA ───── */}
      <section className="py-24 border-t border-white/5">
        <div className="sec-head">
          <span className="num">04</span>
          <span className="line" />
          <span className="label">Contacto</span>
        </div>

        <h2 className="text-display text-white mb-6 max-w-2xl">
          ¿Listo para crear algo <span className="gradient-text">increíble</span>?
        </h2>
        <p className="text-[#bbb] text-lg mb-10 max-w-lg">
          Hablemos sobre tu proyecto. Respondo rápido.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-pill">Hablemos</Link>
          <a href={`mailto:${personalInfo.email}`} className="btn-outline">
            {personalInfo.email}
          </a>
        </div>
      </section>
    </div>
  );
}
