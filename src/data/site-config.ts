export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text?: string;
    href: string;
    icon?: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://lucidmarginalia.com',
    title: 'Lucid Marginalia',
    subtitle: 'Margo qui demonstrationem mirabilem cepisset',
    description: 'Personal blogging site of Ryan Kavanagh. A place where I can leave my thoughts in the margin of human history',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            href: 'https://github.com/ryankav',
            icon: 'fab fa-github'
        }
    ],
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
