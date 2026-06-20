import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

const skillGroups = [
  { num: '01', title: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Kotlin', 'Dart', 'Swift', 'PHP', 'HTML', 'CSS'] },
  { num: '02', title: 'Mobile', items: ['Flutter', 'Android', 'iOS', 'Swift / UIKit', 'Kotlin / Jetpack'] },
  { num: '03', title: 'Backend & DB', items: ['Node.js', 'Laravel', 'Firebase', 'MongoDB'] },
  { num: '04', title: 'Herramientas', items: ['Git & GitHub', 'Xcode', 'Android Studio', 'Docker', 'VS Code'] },
];

const focus = [
  '🔥 Profundizando en TypeScript y arquitecturas escalables',
  '📱 Mobile dev con Flutter y Swift',
  '☁️ Integrando Firebase y servicios cloud',
  '🧠 Aprendiendo algo nuevo cada semana (literalmente)',
];

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 py-16">
      <p className="text-[#808080] text-sm mb-8">Conóceme</p>
      <h1 className="text-display text-white mb-16">
        Sobre <span className="gradient-text">Mí</span>
      </h1>

      {/* Bio + code card */}
      <div className="grid lg:grid-cols-2 gap-12 mb-24">
        <div className="space-y-5 text-[#bbb] leading-relaxed">
          <p>
            Soy <span className="text-white font-medium">Jhon Boza</span>, estudiante de Tecsup y
            Junior Developer desde Perú 🇵🇪. Un dev en constante crecimiento, tocando todo lo que se
            me cruza: web, mobile, backend y más.
          </p>
          <p>
            No le tengo miedo a los lenguajes nuevos — si hay un proyecto, hay una forma de hacerlo.
            Con más de 69 repositorios públicos en GitHub, aprendo construyendo.
          </p>
          <p className="text-[#999] italic">&ldquo;El código es poesía… que a veces no compila&rdquo;</p>
        </div>

        <div className="card-inset p-7 font-mono text-sm leading-7">
          <p className="text-[#555] mb-1">{'// quien soy'}</p>
          <p><span className="text-[#c1121f]">const</span> <span className="text-white">jhon</span> = {'{'}</p>
          <p className="pl-4"><span className="text-[#e11d2a]">nombre</span>: <span className="text-[#bbb]">&quot;Jhon Boza&quot;</span>,</p>
          <p className="pl-4"><span className="text-[#e11d2a]">educacion</span>: <span className="text-[#bbb]">&quot;Tecsup&quot;</span>,</p>
          <p className="pl-4"><span className="text-[#e11d2a]">nivel</span>: <span className="text-[#bbb]">&quot;Junior Developer&quot;</span>,</p>
          <p className="pl-4"><span className="text-[#e11d2a]">ubicacion</span>: <span className="text-[#bbb]">&quot;Perú 🇵🇪&quot;</span>,</p>
          <p className="pl-4"><span className="text-[#e11d2a]">pasion</span>: <span className="text-[#bbb]">&quot;Crear cosas geniales&quot;</span>,</p>
          <p>{'}'}</p>
        </div>
      </div>

      {/* Stack */}
      <div className="sec-head">
        <span className="num">—</span>
        <span className="line" />
        <span className="label">Stack Tecnológico</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
        {skillGroups.map((g) => (
          <div key={g.num} className="card-inset p-7">
            <p className="font-head text-[#c1121f] text-lg mb-5">{g.num}</p>
            <h3 className="text-xl text-white mb-5">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="text-xs text-[#bbb] bg-[rgba(37,37,37,0.5)] border border-white/5 px-3 py-1.5 rounded-full">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Focus */}
      <div className="sec-head">
        <span className="num">—</span>
        <span className="line" />
        <span className="label">En qué estoy enfocado</span>
      </div>
      <div className="card-inset p-8 space-y-4">
        {focus.map((f) => (
          <p key={f} className="text-[#bbb]">{f}</p>
        ))}
      </div>
    </div>
  );
}
