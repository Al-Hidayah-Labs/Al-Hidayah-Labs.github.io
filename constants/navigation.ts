
interface PageDetails {
    slug: string;
    title: string;
    description: string;
}

export const pages: { [key: string]: PageDetails } = {
    'Home': { slug: 'home', title: 'Home', description: '' },
    'Projects': { slug: 'projects', title: 'Projects', description: 'A catalog of our open-source apps, toolkits, and demos.' },
    'Research': { slug: 'research', title: 'Research', description: 'Explore our research areas, papers, and roadmaps.' },
    'Datasets': { slug: 'datasets', title: 'Datasets', description: 'Browse our collection of high-quality, open datasets.' },
    'Models': { slug: 'models', title: 'Models', description: 'Find and use our pre-trained models for your applications.' },
    'Community': { slug: 'community', title: 'Community', description: 'Join our Discord, attend events, and learn how to contribute.' },
    'Blog': { slug: 'blog', title: 'Blog', description: 'Read our latest announcements, research highlights, and tutorials.' },
    'About': { slug: 'about', title: 'About Us', description: 'Learn more about our mission, team, and partners.' },
    'Ethics & Governance': { slug: 'ethics-governance', title: 'Ethics & Governance', description: 'Our framework for building responsible AI.' },
    'Code of Conduct': { slug: 'code-of-conduct', title: 'Code of Conduct', description: 'Our community guidelines and expectations.' },
    'Security & Disclosure': { slug: 'security-disclosure', title: 'Security & Disclosure', description: 'Information on our security practices and how to report vulnerabilities.' },
    'Press/Media Kit': { slug: 'press-media-kit', title: 'Press & Media Kit', description: 'Resources for members of the press.' },
    'Careers': { slug: 'careers', title: 'Careers', description: 'Join our team and help build the future of Islamic AI.' },
    'Contact': { slug: 'contact', title: 'Contact Us', description: 'Get in touch with the Al Hidayah Labs team.' },
    'Privacy': { slug: 'privacy', title: 'Privacy Policy', description: 'How we handle your data and respect your privacy.' },
    'Terms': { slug: 'terms', title: 'Terms of Service', description: 'The terms and conditions for using our services and resources.' },
};

export const navLinks: string[] = ['Home', 'Projects', 'Research', 'Datasets', 'Models', 'Community', 'Blog', 'About'];
// export const footerLinks: string[] = ['Ethics & Governance', 'Code of Conduct', 'Security & Disclosure', 'Press/Media Kit', 'Careers', 'Contact', 'Privacy', 'Terms'];
export const footerLinks: string[] = ['Careers', 'Contact', 'Privacy', 'Terms'];

export const slugToPageMap: { [key: string]: string } = Object.fromEntries(
  Object.values(pages).map(p => [p.slug, p.title])
);
