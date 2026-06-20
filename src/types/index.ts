export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  /** Optional extra screenshots for the project gallery/carousel */
  gallery?: string[];
  /** Mobile app — screenshots are vertical, show them contained instead of cropped */
  mobile?: boolean;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
}
