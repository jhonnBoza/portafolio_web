import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import Carousel from '@/components/Carousel';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Proyecto no encontrado' };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="px-6 md:px-12 py-16 max-w-4xl">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-[#808080] hover:text-white transition-colors mb-10"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Volver a proyectos
      </Link>

      <article>
        <h1 className="text-display text-white mb-8">{project.title}</h1>

        <div className="mb-10">
          {project.gallery && project.gallery.length > 0 ? (
            <Carousel images={project.gallery} alt={project.title} />
          ) : (
            <div className="card-inset p-3">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1200px) 100vw, 900px"
                />
              </div>
            </div>
          )}
        </div>

        <p className="text-[#bbb] text-lg leading-relaxed mb-10">{project.description}</p>

        <div className="mb-10">
          <h2 className="text-xl text-white mb-4">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-pill">
              Ver Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Ver Código
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
