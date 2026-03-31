export interface NavItem {
    id: string;
    title: string;
    href: string;
}

export const TUTORIALS_NAV: Record<string, NavItem[]> = {
    python: [
        { id: 'introduction', title: 'Introduction', href: '/python#introduction' },
        { id: 'overview', title: 'Python Overview', href: '/python#overview' },
        { id: 'installation', title: 'Installation', href: '/python#installation' },
        { id: 'syntax', title: 'Basic Syntax', href: '/python#syntax' },
    ],
    java: [
        { id: 'introduction', title: 'Introduction', href: '/java#introduction' },
        { id: 'overview', title: 'Java Overview', href: '/java#overview' },
        { id: 'installation', title: 'Installation', href: '/java#installation' },
        { id: 'syntax', title: 'Java Syntax', href: '/java#syntax' },
    ],
    powerbi: [
        { id: 'introduction', title: 'Power BI Introduction', href: '/powerbi#introduction' },
        { id: 'module2', title: 'overview and comparision', href: '/powerbi#module2' },
        { id: 'module3', title: 'power bi installation', href: '/powerbi#module3' },
        { id: 'module4', title: 'Understanding interface', href: '/powerbi#module4' },
    ],
    excel: [
        { id: 'introduction', title: 'Excel Introduction', href: '/excel#introduction' },
        { id: 'basics', title: 'Basic Concepts', href: '/excel#basics' },
        { id: 'formulas', title: 'Formulas & Functions', href: '/excel#formulas' },
        { id: 'formatting', title: 'Cell Formatting', href: '/excel#formatting' },
        { id: 'charts', title: 'Charts & Visualization', href: '/excel#charts' },
    ],
    html: [
        { id: 'm1', title: 'Introduction', href: '/tutorials/html#m1' },
        { id: 'm2', title: 'Elements', href: '/tutorials/html#m2' },
        { id: 'm3', title: 'Attributes', href: '/tutorials/html#m3' },
        { id: 'm4', title: 'Headings', href: '/tutorials/html#m4' },
    ],
    css: [
        { id: 'm1', title: 'Introduction', href: '/tutorials/css#m1' },
        { id: 'm2', title: 'Syntax', href: '/tutorials/css#m2' },
        { id: 'm3', title: 'Selectors', href: '/tutorials/css#m3' },
    ],
    javascript: [
        { id: 'm49', title: 'Introduction', href: '/tutorials/javascript#m49' },
        { id: 'm50', title: 'Where To', href: '/tutorials/javascript#m50' },
        { id: 'm51', title: 'Output', href: '/tutorials/javascript#m51' },
    ],
};
