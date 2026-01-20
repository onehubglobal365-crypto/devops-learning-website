
export interface RoadmapStep {
    time: string;
    title: string;
    description: string;
}

export interface RoadmapData {
    id: string; // unique slug
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    roadmap: RoadmapStep[];
}

export const roadmaps: Record<string, RoadmapData> = {
    'devops': {
        id: 'devops',
        title: 'DevOps',
        description: 'Master DevOps across all major cloud platforms. Learn Docker, Kubernetes, CI/CD pipelines, and infrastructure automation with real-world projects.',
        buttonText: 'Learn DevOps',
        buttonLink: '/devops',
        roadmap: [
            { time: 'Week 1-2', title: 'Linux & Scripting', description: 'Shell scripting, file systems, permissions' },
            { time: 'Week 3-4', title: 'Version Control', description: 'Git, GitHub, collaboration workflows' },
            { time: 'Week 5-6', title: 'Containerization', description: 'Docker, images, containers, networking' },
            { time: 'Week 7-9', title: 'Orchestration', description: 'Kubernetes architecture, pods, services, deployments' },
            { time: 'Week 10-12', title: 'CI/CD & Cloud', description: 'Jenkins, GitHub Actions, AWS/Azure basics' }
        ]
    },
    'python-fullstack': {
        id: 'python-fullstack',
        title: 'Python Full Stack',
        description: 'Master Python full stack development with Django, Flask, React, and modern frameworks. Build complete web applications from database to UI.',
        buttonText: 'Explore Python',
        buttonLink: '/python',
        roadmap: [
            { time: 'Week 1-2', title: 'Python Basics', description: 'Syntax, data structures, OOP' },
            { time: 'Week 3-4', title: 'Backend Frameworks', description: 'Django/Flask setup, routing, models' },
            { time: 'Week 5-6', title: 'Database Integration', description: 'SQL, ORM, migrations' },
            { time: 'Week 7-9', title: 'Frontend with React', description: 'Components, hooks, state management' },
            { time: 'Week 10-12', title: 'Full Stack Project', description: 'Integration, deployment, optimization' }
        ]
    },
    'java-fullstack': {
        id: 'java-fullstack',
        title: 'Java Full Stack',
        description: 'Master Java full stack development from frontend to backend. Learn Spring Boot, React, microservices, and build scalable enterprise applications.',
        buttonText: 'Learn Java',
        buttonLink: '/java',
        roadmap: [
            { time: 'Week 1-2', title: 'Java Core', description: 'Syntax, OOP, Collections, Multithreading' },
            { time: 'Week 3-4', title: 'Spring Framework', description: 'Spring Core, Dependency Injection, MVC' },
            { time: 'Week 5-6', title: 'Database & Hibernate', description: 'JPA, Hibernate, SQL Connections' },
            { time: 'Week 7-9', title: 'Microservices', description: 'Spring Boot, REST APIs, Microservices Architecture' },
            { time: 'Week 10-12', title: 'Integration & Deployment', description: 'React Frontend Integration, Docker, CI/CD' }
        ]
    },
    'web-dev': {
        id: 'web-dev',
        title: 'Web Development',
        description: 'Build modern, responsive web applications with React, Node.js, and cutting-edge technologies. From frontend to full-stack development.',
        buttonText: 'Start Web Dev',
        buttonLink: '/web-dev',
        roadmap: [
            { time: 'Week 1-2', title: 'HTML & CSS', description: 'Semantic HTML, CSS layouts, Flexbox, Grid' },
            { time: 'Week 3-4', title: 'JavaScript', description: 'ES6+, DOM manipulation, Async/Await' },
            { time: 'Week 5-6', title: 'React Fundamentals', description: 'Components, Props, State, Hooks' },
            { time: 'Week 7-9', title: 'Advanced React', description: 'Context API, Redux/Zustand, React Query' },
            { time: 'Week 10-12', title: 'Full Project', description: 'Next.js basics, deploying to Vercel' }
        ]
    },
    'sql': {
        id: 'sql',
        title: 'SQL & Databases',
        description: 'Master database design, optimization, and management. Learn SQL, NoSQL databases, data modeling, and advanced querying techniques.',
        buttonText: 'Explore Databases',
        buttonLink: '/sql',
        roadmap: [
            { time: 'Week 1-2', title: 'Foundations', description: 'Relational model, ER Diagrams, Basic SQL' },
            { time: 'Week 3-4', title: 'Advanced SQL', description: 'Joins, Subqueries, Stored Procedures' },
            { time: 'Week 5-6', title: 'Database Design', description: 'Normalization, Indexing, Performance' },
            { time: 'Week 7-9', title: 'NoSQL Databases', description: 'MongoDB, Redis, Cassandra concepts' },
            { time: 'Week 10-12', title: 'Capstone Project', description: 'Designing a complex schema, Optimization' }
        ]
    },
    'data-science': {
        id: 'data-science',
        title: 'Data Science',
        description: 'Master data science and analytics. Learn machine learning, data analysis, visualization, and build data-driven applications.',
        buttonText: 'Explore Data Science',
        buttonLink: '/data-science',
        roadmap: [
            { time: 'Week 1-2', title: 'Statistics & Math', description: 'Probability, Linear Algebra, stats' },
            { time: 'Week 3-4', title: 'Data Analysis', description: 'Pandas, Matplotlib, Seaborn' },
            { time: 'Week 5-6', title: 'Machine Learning I', description: 'Regression, Classification, Scikit-Learn' },
            { time: 'Week 7-9', title: 'Machine Learning II', description: 'Clustering, PCA, Model deployment' },
            { time: 'Week 10-12', title: 'Real-world Project', description: 'End-to-end DS pipeline' }
        ]
    },
    'programming': {
        id: 'programming',
        title: 'Programming',
        description: 'Software Development & Technologies',
        buttonText: 'Start Programming',
        buttonLink: '/tutorials/programming',
        roadmap: [
            { time: 'Week 1-2', title: 'Logic & Algorithms', description: 'Flowcharts, Pseudocode, Basic Algorithms' },
            { time: 'Week 3-4', title: 'C/C++ Basics', description: 'Syntax, Memory Management, Pointers' },
            { time: 'Week 5-6', title: 'Data Structures', description: 'Arrays, Linked Lists, Stacks, Queues' },
            { time: 'Week 7-9', title: 'Object Oriented Programming', description: 'Classes, Objects, Inheritance, Polymorphism' },
            { time: 'Week 10-12', title: 'Project Development', description: 'Building a console-based application' }
        ]
    },
    'medical-coding': {
        id: 'medical-coding',
        title: 'Medical Coding',
        description: 'Healthcare IT & Coding Systems',
        buttonText: 'Learn Med Coding',
        buttonLink: '/tutorials/medical-coding',
        roadmap: [
            { time: 'Week 1-2', title: 'Healthcare Basics', description: 'Medical Terminology, Anatomy' },
            { time: 'Week 3-4', title: 'ICD-10-CM', description: 'Diagnosis coding guidelines' },
            { time: 'Week 5-6', title: 'CPT Coding', description: 'Procedures, services, modifiers' },
            { time: 'Week 7-9', title: 'HCPCS & Billing', description: 'Supplies, services, reimbursement' },
            { time: 'Week 10-12', title: 'Certification Prep', description: 'Mock exams, case studies' }
        ]
    },
    'linux': {
        id: 'linux',
        title: 'Linux',
        description: 'Linux Administration and Command Line Mastery',
        buttonText: 'Start Linux',
        buttonLink: '/linux',
        roadmap: [
            { time: 'Week 1-2', title: 'Installation & GUI', description: 'Distributions, Installation, GNOME/KDE' },
            { time: 'Week 3-4', title: 'Command Line Basics', description: 'Navigation, File Operations, Permissions' },
            { time: 'Week 5-6', title: 'System Administration', description: 'Users, Groups, Processes, Services' },
            { time: 'Week 7-9', title: 'Shell Scripting', description: 'Variables, loops, conditions, automation' },
            { time: 'Week 10-12', title: 'Networking & Security', description: 'SSH, Firewalls, Network Configuration' }
        ]
    },
    'medical-coding-anatomy': {
        id: 'medical-coding-anatomy',
        title: 'Anatomy & Terminology',
        description: 'Master the language of medicine and human anatomy essential for accurate medical coding.',
        buttonText: 'Start Anatomy',
        buttonLink: '/tutorials/medical-coding/anatomy-medical-terminology',
        roadmap: [
            { time: 'Module 1', title: 'Medical Roots', description: 'Prefixes, suffixes, and combining forms' },
            { time: 'Module 2', title: 'Body Organization', description: 'Planes, cavities, and structural units' },
            { time: 'Module 3', title: 'Organ Systems', description: 'Skeletal, Muscular, Nervous, and Circulatory systems' },
            { time: 'Module 4', title: 'Pathology & Pharmacology', description: 'Disease processes and drug classifications' },
            { time: 'Module 5', title: 'Coding Application', description: 'Applying terminology to ICD-10 and CPT coding' }
        ]
    }
};
