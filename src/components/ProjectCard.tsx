import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

const techColors: Record<string, string> = {
  'TypeScript': 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  'Next.js': 'bg-slate-500/15 text-slate-300 border-slate-500/20',
  'React': 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  'Flutter': 'bg-sky-500/15 text-sky-300 border-sky-500/20',
  'Dart': 'bg-sky-400/15 text-sky-200 border-sky-400/20',
  'Swift': 'bg-orange-500/15 text-orange-300 border-orange-500/20',
  'HTML': 'bg-orange-400/15 text-orange-200 border-orange-400/20',
  'CSS': 'bg-blue-400/15 text-blue-200 border-blue-400/20',
  'JavaScript': 'bg-yellow-500/15 text-yellow-300 border-yellow-500/20',
  'Firebase': 'bg-amber-500/15 text-amber-300 border-amber-500/20',
  'PostgreSQL': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
};

const defaultTechColor = 'bg-violet-500/15 text-violet-300 border-violet-500/20';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col glass rounded-2xl overflow-hidden hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent opacity-60" />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 mb-4 line-clamp-2 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2.5 py-1 rounded-full border font-medium ${techColors[tech] ?? defaultTechColor}`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-slate-500 font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
