import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'golazo',
    title: 'Golazo',
    description: 'Plataforma de predicciones del Mundial 2026: apuesta con amigos el marcador exacto, ganador y diferencia de goles, compite en salas y sube en el ranking global en tiempo real.',
    image: '/projects/golazo/landing.png',
    gallery: [
      '/projects/golazo/landing.png',
      '/projects/golazo/login.png',
      '/projects/golazo/inicio.png',
      '/projects/golazo/mis-salas.png',
      '/projects/golazo/ranking.png',
    ],
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'OAuth'],
    githubUrl: 'https://github.com/FAILO123/apuestas_jwv',
    featured: true,
  },
  {
    slug: 'bosstore',
    title: 'BosStore',
    description: 'Tienda de videojuegos digitales full-stack: catálogo con filtros por género y plataforma, fichas de producto con galería y tráiler, carrito de compras, autenticación (Google/Discord) y checkout seguro con Stripe.',
    image: '/projects/bosstore/landing.webp',
    gallery: [
      '/projects/bosstore/landing.webp',
      '/projects/bosstore/login.png',
      '/projects/bosstore/catalogo.webp',
      '/projects/bosstore/detalle.webp',
      '/projects/bosstore/checkout.png',
    ],
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'OAuth'],
    githubUrl: 'https://github.com/jhonnBoza/BosStore',
    featured: true,
  },
  {
    slug: 'control-tsr',
    title: 'Control TSR',
    description: 'App móvil para el control de cisternas de agua: los choferes inician sesión con la placa, registran viajes con origen/destino, suben evidencias fotográficas con geolocalización en tiempo real, y un panel de administración monitorea las unidades, viajes y genera reportes.',
    image: '/projects/controltsr/inicio.png',
    gallery: [
      '/projects/controltsr/login.png',
      '/projects/controltsr/inicio.png',
      '/projects/controltsr/nuevo-viaje.png',
      '/projects/controltsr/viaje-ruta.webp',
      '/projects/controltsr/admin-panel.png',
    ],
    technologies: ['React Native', 'TypeScript', 'Geolocalización', 'WhatsApp OTP', 'Panel Web'],
    githubUrl: 'https://github.com/cesarmedranoy/ControlTSR',
    featured: true,
    mobile: true,
  },
];

export const personalInfo = {
  name: 'Jhon Boza',
  title: 'Junior Developer · Tecsup',
  description: 'Dev en constante crecimiento desde Perú 🇵🇪. Toco web, mobile, backend y todo lo que se me cruza. No le tengo miedo a los lenguajes nuevos.',
  motto: '"El código es poesía... que a veces no compila"',
  email: 'jhon.boza@tecsup.edu.pe',
  github: 'https://github.com/jhonnBoza',
  linkedin: 'https://linkedin.com/in/jhonnboza',
  instagram: 'https://www.instagram.com/jhnnz.7/',
  facebook: 'https://www.facebook.com/jhon.bz.52/',
  tiktok: 'https://www.tiktok.com/@jhnnvxz_1',
  siteUrl: 'https://jhonnboza.dev',
  avatar: 'https://avatars.githubusercontent.com/u/168006484?v=4',
  photo: '/jhon.jpg',
};
