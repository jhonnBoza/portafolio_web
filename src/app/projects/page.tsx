import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora mis proyectos de desarrollo web y móvil',
};

export default function ProjectsPage() {
  return (
    <div className="px-6 md:px-12 py-16">
      <p className="text-[#808080] text-sm mb-8">Portafolio</p>
      <div className="sec-head">
        <span className="num">—</span>
        <span className="line" />
        <span className="label">Todos los proyectos</span>
      </div>

      <h1 className="text-display text-white mb-6">
        Mis <span className="gradient-text">Proyectos</span>
      </h1>
      <p className="text-[#bbb] text-lg max-w-xl mb-16">
        Una selección de proyectos que he construido explorando distintas tecnologías y plataformas.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
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
                <p className="text-[#808080] text-xs mb-1">{p.technologies.slice(0, 3).join(' · ')}</p>
                <h3 className="text-2xl text-white group-hover:text-[#c1121f] transition-colors">{p.title}</h3>
              </div>
              <span className="text-[#808080] text-xs font-head">0{i + 1}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
