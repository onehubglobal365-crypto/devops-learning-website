'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TUTORIALS_NAV } from '@/data/tutorials-nav';

import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './sidebar';
import { Rocket, Terminal, GitBranch, Settings, Box, Share2, RefreshCw, Activity, Zap, BookOpen, Briefcase, X, ArrowRight } from 'lucide-react';

// Define the types for the props
interface TechLayoutProps {
  children: React.ReactNode;
  onThisPage?: { id: string; title: string }[];
  technology: 'java' | 'python' | 'sql' | 'web-dev' | 'data-science' | 'code-terminal' | 'devops' | 'linux' | 'azure-data-engineer' | 'artificial-intelligence' | 'medical-coding' | 'powerbi' | 'excel';
  activeSection?: string;
  setActiveSection?: (section: string) => void;
  activeSubsection?: string | null;
  setActiveSubsection?: (section: string | null) => void;
  hideSidebar?: boolean;
  customNavigationItems?: SidebarItem[];
  hideNavButtons?: boolean;
  disableBackground?: boolean;
  background?: string;
  sidebarTheme?: 'light' | 'dark';
}

interface SidebarItem {
  id: string;
  title: string;
  href: string;
  icon?: string | React.ReactNode;
  children?: SidebarItem[];
}

// Technology-specific navigation items
const getTechNavigationItems = (tech: string): SidebarItem[] => {
  const baseItems: SidebarItem[] = [];

  const techItems = {
    java: [
      {
        id: 'java-tutorial',
        title: 'Java Tutorial',
        href: '/java',
        icon: '',
        children: [
          { id: 'introduction', title: 'Java Tutorial', href: '/java#introduction' },
          { id: 'basics', title: 'Java Basics', href: '/java#basics' },
          { id: 'syntax', title: 'Java Syntax', href: '/java#syntax' },
          { id: 'output', title: 'Java Output', href: '/java#output' },
          { id: 'comments', title: 'Java Comments', href: '/java#comments' },
          { id: 'variables', title: 'Java Variables', href: '/java#variables' },
          { id: 'data-types', title: 'Java Data Types', href: '/java#data-types' },
          { id: 'operators', title: 'Java Operators', href: '/java#operators' },
          { id: 'strings', title: 'Java Strings', href: '/java#strings' },
          { id: 'math', title: 'Java Math', href: '/java#math' },
          { id: 'booleans', title: 'Java Booleans', href: '/java#booleans' },
          { id: 'if-else', title: 'Java If...Else', href: '/java#if-else' },
          { id: 'switch', title: 'Java Switch', href: '/java#switch' },
          { id: 'loops', title: 'Java Loops', href: '/java#loops' },
          { id: 'arrays', title: 'Java Arrays', href: '/java#arrays' },
          { id: 'methods', title: 'Java Methods', href: '/java#methods' }
        ]
      },
      {
        id: 'java-oop',
        title: 'Java OOP Concepts',
        href: '/java',
        icon: '',
        children: [
          { id: 'oop-concepts', title: 'Java OOP Concepts', href: '/java#oop-concepts' },
          { id: 'classes-objects', title: 'Java Classes and Objects', href: '/java#classes-objects' },
          { id: 'class-attributes', title: 'Java Class Attributes', href: '/java#class-attributes' },
          { id: 'class-methods', title: 'Java Class Methods', href: '/java#class-methods' },
          { id: 'constructors', title: 'Java Constructors', href: '/java#constructors' },
          { id: 'modifiers', title: 'Java Modifiers', href: '/java#modifiers' },
          { id: 'encapsulation', title: 'Java Encapsulation', href: '/java#encapsulation' },
          { id: 'packages', title: 'Java Packages', href: '/java#packages' },
          { id: 'inheritance', title: 'Java Inheritance', href: '/java#inheritance' },
          { id: 'polymorphism', title: 'Java Polymorphism', href: '/java#polymorphism' },
          { id: 'abstraction', title: 'Java Abstraction', href: '/java#abstraction' },
          { id: 'interfaces', title: 'Java Interface', href: '/java#interfaces' },
          { id: 'enums', title: 'Java Enums', href: '/java#enums' }
        ]
      },
      {
        id: 'java-advanced',
        title: 'Java Advanced',
        href: '/java',
        icon: '',
        children: [
          { id: 'java-keywords', title: 'Java Keywords', href: '/java#java-keywords' },
          { id: 'strings-handling', title: 'Java String Methods', href: '/java#strings-handling' },
          { id: 'arrays-collections', title: 'Java Collections', href: '/java#arrays-collections' },
          { id: 'exception-handling', title: 'Java Exception Handling', href: '/java#exception-handling' },
          { id: 'packages-modules', title: 'Java Packages/Modules', href: '/java#packages-modules' },
          { id: 'file-handling', title: 'Java File Handling', href: '/java#file-handling' },
          { id: 'advanced', title: 'Java Advanced', href: '/java#advanced' },
          { id: 'date-time', title: 'Java Date/Time', href: '/java#date-time' },
          { id: 'arraylist', title: 'Java ArrayList', href: '/java#arraylist' },
          { id: 'linkedlist', title: 'Java LinkedList', href: '/java#linkedlist' },
          { id: 'hashmap', title: 'Java HashMap', href: '/java#hashmap' },
          { id: 'hashset', title: 'Java HashSet', href: '/java#hashset' },
          { id: 'iterator', title: 'Java Iterator', href: '/java#iterator' },
          { id: 'wrapper-classes', title: 'Java Wrapper Classes', href: '/java#wrapper-classes' },
          { id: 'exceptions-advanced', title: 'Java Exceptions', href: '/java#exceptions-advanced' },
          { id: 'regex', title: 'Java RegEx', href: '/java#regex' },
          { id: 'threads', title: 'Java Threads', href: '/java#threads' },
          { id: 'lambda', title: 'Java Lambda', href: '/java#lambda' }
        ]
      },
      {
        id: 'java-resources',
        title: 'Resources',
        href: '/java',
        icon: '',
        children: [
          { id: 'practice-projects', title: 'Practice Projects', href: '/java#practice-projects' },
          { id: 'video-tutorials', title: 'Video Tutorials', href: '/java#video-tutorials' }
        ]
      }
    ],
    python: [
      {
        id: 'python-basics',
        title: 'Python Basics',
        href: '/python',
        icon: '',
        children: [
          { id: 'introduction', title: 'Introduction', href: '/python#introduction' },
          { id: 'syntax-indentation', title: 'Syntax & Indentation', href: '/python#syntax-indentation' },
          { id: 'variables-data-types', title: 'Variables & Data Types', href: '/python#variables-data-types' },
          { id: 'operators', title: 'Type Casting & Operators', href: '/python#operators' },
          { id: 'conditionals', title: 'Conditionals', href: '/python#conditionals' },
          { id: 'loops', title: 'Loops', href: '/python#loops' }
        ]
      },
      {
        id: 'python-intermediate',
        title: 'Python Intermediate',
        href: '/python',
        icon: '',
        children: [
          { id: 'strings', title: 'Strings', href: '/python#strings' },
          { id: 'data-structures', title: 'Data Structures', href: '/python#data-structures' },
          { id: 'functions', title: 'Functions', href: '/python#functions' },
          { id: 'oop', title: 'OOP', href: '/python#oop' },
          { id: 'file-handling', title: 'File Handling', href: '/python#file-handling' },
          { id: 'exception-handling', title: 'Exception Handling', href: '/python#exception-handling' },
          { id: 'modules-packages', title: 'Modules & Packages', href: '/python#modules-packages' }
        ]
      },
      {
        id: 'python-advanced',
        title: 'Python Advanced',
        href: '/python',
        icon: '',
        children: [
          { id: 'advanced-concepts', title: 'Advanced Concepts', href: '/python#advanced-concepts' }
        ]
      },
      {
        id: 'python-resources',
        title: 'Resources',
        href: '/python',
        icon: '',
        children: [
          { id: 'video-tutorials', title: 'Video Tutorials', href: '/python#video-tutorials' },
          { id: 'practice-projects', title: 'Practice Projects', href: '/python#practice-projects' },
          { id: 'summary', title: 'Summary', href: '/python#summary' }
        ]
      }
    ],
    sql: [
      { id: 'introduction', title: 'SQL Introduction', href: '/sql#introduction' },
      { id: 'dbms-vs-rdbms', title: 'DBMS VS RDBMS', href: '/sql#dbms-vs-rdbms' },
      { id: 'acidprinciples', title: 'ACID Principles', href: '/sql#acidprinciples' },
      { id: 'basic-commands', title: 'Basic Commands', href: '/sql#basic-commands' },
      { id: 'datatypes', title: 'Data Types', href: '/sql#datatypes' },
      { id: 'operators', title: 'SQL Operators', href: '/sql#operators' },
      { id: 'database', title: 'Database', href: '/sql#database' },
      { id: 'table', title: 'SQL table', href: '/sql#table' },
      { id: 'altertable', title: 'ALTER-table', href: '/sql#altertable' },
      { id: 'insert', title: 'INSERT-table', href: '/sql#insert' },
      { id: 'drop', title: 'DROP-table', href: '/sql#drop' }
    ],
    powerbi: [
      { id: 'introduction', title: 'Power BI Introduction', href: '/powerbi#introduction' },
      { id: 'module2', title: 'overview and comparision', href: '/powerbi#module2' },
      { id: 'module3', title: 'power bi installation', href: '/powerbi#module3' },
      { id: 'module4', title: 'Understanding interface', href: '/powerbi#module4' },
      { id: 'module5', title: 'Datasource & Power Query', href: '/powerbi#module5' },
      { id: 'module6', title: 'Datamodeling', href: '/powerbi#module6' },
      { id: 'module7', title: 'DAX', href: '/powerbi#module7' },
      { id: 'module8', title: 'Data Visualization', href: '/powerbi#module8' },
      { id: 'module9', title: 'patterns', href: '/powerbi#module9' },
      { id: 'module10', title: 'publishing', href: '/powerbi#module10' },
      { id: 'module11', title: 'services', href: '/powerbi#module11' },

    ],
    excel: [
      { id: 'introduction', title: 'Excel Introduction', href: '/excel#introduction' },
      { id: 'basics', title: 'Basic Concepts', href: '/excel#basics' },
      { id: 'formulas', title: 'Formulas & Functions', href: '/excel#formulas' },
      { id: 'module4', title: 'interface', href: '/excel#module4' },
      { id: 'module5', title: 'import & export', href: '/excel#module5' },
    ],

    'web-dev': [
      {
        id: 'frontend',
        title: 'Frontend Development',
        href: '/web-dev',
        icon: '',
        children: [
          { id: 'html', title: 'HTML', href: '/web-dev' },
          { id: 'css', title: 'CSS', href: '/web-dev' },
          { id: 'javascript', title: 'JavaScript', href: '/web-dev' }
        ]
      },
      {
        id: 'backend',
        title: 'Backend Development',
        href: '/web-dev',
        icon: '',
        children: [
          { id: 'nodejs', title: 'Node.js', href: '/web-dev' },
          { id: 'express', title: 'Express.js', href: '/web-dev' }
        ]
      }
    ],
    'data-science': [
      {
        id: 'data-analysis',
        title: 'Data Analysis',
        href: '/data-science',
        icon: '',
        children: [
          { id: 'pandas', title: 'Pandas', href: '/data-science' },
          { id: 'numpy', title: 'NumPy', href: '/data-science' }
        ]
      },
      {
        id: 'machine-learning',
        title: 'Machine Learning',
        href: '/data-science',
        icon: '',
        children: [
          { id: 'scikit-learn', title: 'Scikit-learn', href: '/data-science' },
          { id: 'tensorflow', title: 'TensorFlow', href: '/data-science' }
        ]
      }
    ],
    'code-terminal': [
      {
        id: 'terminal-basics',
        title: 'Terminal Basics',
        href: '/code-terminal',
        icon: '',
        children: [
          { id: 'commands', title: 'Basic Commands', href: '/code-terminal' },
          { id: 'navigation', title: 'File Navigation', href: '/code-terminal' }
        ]
      },
      {
        id: 'terminal-advanced',
        title: 'Advanced Terminal',
        href: '/code-terminal',
        icon: '',
        children: [
          { id: 'scripting', title: 'Shell Scripting', href: '/code-terminal' },
          { id: 'automation', title: 'Automation', href: '/code-terminal' }
        ]
      }
    ],
    // powerbi: TUTORIALS_NAV.powerbi,

    devops: [
      {
        id: 'devops-foundation',
        title: '1. DevOps Foundation',
        href: '/devops',
        icon: <Rocket className="w-5 h-5 text-red-500" />,
        children: [
          { id: 'introduction', title: 'Introduction to DevOps', href: '/devops#introduction' },
          { id: 'core-concepts', title: 'Core Concepts', href: '/devops#core-concepts' },
          { id: 'devops-lifecycle', title: 'DevOps Lifecycle', href: '/devops#devops-lifecycle' }
        ]
      },
      {
        id: 'linux-fundamentals',
        title: '2. Linux Fundamentals',
        href: '/devops',
        icon: <Terminal className="w-5 h-5 text-yellow-400" />,
        children: [
          { id: 'linux-introduction', title: 'Linux Introduction', href: '/devops#linux-introduction' },
          { id: 'linux-file-system', title: 'Linux File System', href: '/devops#linux-file-system' },
          { id: 'linux-navigation', title: 'Linux Navigation', href: '/devops#linux-navigation' },
          { id: 'linux-file-management', title: 'File Management', href: '/devops#linux-file-management' },
          { id: 'linux-permissions', title: 'Linux Permissions', href: '/devops#linux-permissions' },
          { id: 'linux-process-management', title: 'Process Management', href: '/devops#linux-process-management' },
          { id: 'linux-networking', title: 'Linux Networking', href: '/devops#linux-networking' },
          { id: 'linux-shell-scripting', title: 'Shell Scripting', href: '/devops#linux-shell-scripting' }
        ]
      },
      {
        id: 'version-control',
        title: '3. Version Control',
        href: '/devops',
        icon: <GitBranch className="w-5 h-5 text-orange-500" />,
        children: [
          { id: 'git-fundamentals', title: 'Git Fundamentals', href: '/devops#git-fundamentals' },
          { id: 'git-workflows', title: 'Git Workflows', href: '/devops#git-workflows' },
          { id: 'git-advanced', title: 'Advanced Git', href: '/devops#git-advanced' },
          { id: 'github-gitlab', title: 'GitHub & GitLab', href: '/devops#github-gitlab' }
        ]
      },
      {
        id: 'infrastructure-automation',
        title: '4. Infrastructure Automation',
        href: '/devops',
        icon: <Settings className="w-5 h-5 text-red-500" />,
        children: [
          { id: 'ansible-basics', title: 'Ansible Basics', href: '/devops#ansible-basics' },
          { id: 'ansible-playbooks', title: 'Ansible Playbooks', href: '/devops#ansible-playbooks' },
          { id: 'ansible-roles', title: 'Ansible Roles', href: '/devops#ansible-roles' },
          { id: 'ansible-advanced', title: 'Advanced Ansible', href: '/devops#ansible-advanced' }
        ]
      },
      {
        id: 'containerization',
        title: '5. Containerization',
        href: '/devops',
        icon: <Box className="w-5 h-5 text-blue-500" />,
        children: [
          { id: 'docker-basics', title: 'Docker Basics', href: '/devops#docker-basics' },
          { id: 'docker-compose', title: 'Docker Compose', href: '/devops#docker-compose' },
          { id: 'container-best-practices', title: 'Container Best Practices', href: '/devops#container-best-practices' }
        ]
      },
      {
        id: 'orchestration',
        title: '6. Orchestration',
        href: '/devops',
        icon: <Share2 className="w-5 h-5 text-blue-600" />,
        children: [
          { id: 'kubernetes-basics', title: 'Kubernetes Basics', href: '/devops#kubernetes-basics' },
          { id: 'k8s-deployments', title: 'K8s Deployments', href: '/devops#k8s-deployments' },
          { id: 'k8s-services', title: 'K8s Services', href: '/devops#k8s-services' },
          { id: 'k8s-monitoring', title: 'K8s Monitoring', href: '/devops#k8s-monitoring' }
        ]
      },
      {
        id: 'cicd',
        title: '7. CI/CD',
        href: '/devops',
        icon: <RefreshCw className="w-5 h-5 text-sky-500" />,
        children: [
          { id: 'jenkins-basics', title: 'Jenkins Basics', href: '/devops#jenkins-basics' },
          { id: 'jenkins-pipelines', title: 'Jenkins Pipelines', href: '/devops#jenkins-pipelines' },
          { id: 'github-actions', title: 'GitHub Actions', href: '/devops#github-actions' },
          { id: 'gitlab-ci', title: 'GitLab CI', href: '/devops#gitlab-ci' }
        ]
      },
      {
        id: 'monitoring',
        title: '8. Monitoring',
        href: '/devops',
        icon: <Activity className="w-5 h-5 text-green-500" />,
        children: [
          { id: 'prometheus-basics', title: 'Prometheus Basics', href: '/devops#prometheus-basics' },
          { id: 'grafana-dashboards', title: 'Grafana Dashboards', href: '/devops#grafana-dashboards' },
          { id: 'elk-stack', title: 'ELK Stack', href: '/devops#elk-stack' },
          { id: 'alerting', title: 'Alerting & Incident Response', href: '/devops#alerting' }
        ]
      },
      {
        id: 'devops-advanced',
        title: '9. Advanced Topics',
        href: '/devops',
        icon: <Zap className="w-5 h-5 text-yellow-400" />,
        children: [
          { id: 'automation', title: 'Automation & Orchestration', href: '/devops#automation' },
          { id: 'security', title: 'DevSecOps & Security', href: '/devops#security' },
          { id: 'cloud-platforms', title: 'Cloud Platforms', href: '/devops#cloud-platforms' },
          { id: 'monitoring-observability', title: 'Monitoring & Observability', href: '/devops#monitoring-observability' }
        ]
      },
      {
        id: 'devops-resources',
        title: '10. Resources',
        href: '/devops',
        icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
        children: [
          { id: 'tools-technologies', title: 'Tools & Technologies', href: '/devops#tools-technologies' },
          { id: 'learning-path', title: 'Learning Path', href: '/devops#learning-path' },
          { id: 'summary', title: 'Summary', href: '/devops#summary' }
        ]
      }
    ],
    linux: [
      {
        id: 'linux-basics',
        title: 'Linux Basics',
        href: '/linux',
        icon: '',
        children: [
          { id: 'introduction', title: 'Introduction to Linux', href: '/linux#introduction' },
          { id: 'file-system', title: 'File System Structure', href: '/linux#file-system' },
          { id: 'navigation', title: 'Navigation Commands', href: '/linux#navigation' },
          { id: 'file-management', title: 'File & Directory Management', href: '/linux#file-management' },
          { id: 'viewing-editing', title: 'Viewing & Editing Files', href: '/linux#viewing-editing' },
          { id: 'permissions', title: 'User & Permission Management', href: '/linux#permissions' },
          { id: 'process-management', title: 'Process & System Management', href: '/linux#process-management' },
          { id: 'networking', title: 'Networking Basics', href: '/linux#networking' },
          { id: 'package-management', title: 'Package Management', href: '/linux#package-management' },
          { id: 'shell-scripting', title: 'Shell Scripting Basics', href: '/linux#shell-scripting' },
          { id: 'logs-monitoring', title: 'Logs & Monitoring', href: '/linux#logs-monitoring' },
          { id: 'shortcuts', title: 'Essential Shortcuts', href: '/linux#shortcuts' }
        ]
      },
      {
        id: 'linux-resources',
        title: 'Resources',
        href: '/linux',
        icon: '',
        children: [
          { id: 'video-tutorials', title: 'Video Tutorials', href: '/linux#video-tutorials' },
          { id: 'summary', title: 'Summary', href: '/linux#summary' }
        ]
      }
    ],
    'azure-data-engineer': [
      {
        id: 'azure-data-engineer-basics',
        title: 'Azure Basics',
        href: '/tutorials/azure-data-engineer',
        icon: '',
        children: [
          { id: 'module1', title: 'Resources Hierarchy', href: '/tutorials/azure-data-engineer#module1' },
          { id: 'module2', title: 'Resource Groups', href: '/tutorials/azure-data-engineer#module2' },
          { id: 'module3', title: 'Storage Services in BLOB', href: '/tutorials/azure-data-engineer#module3' },
          { id: 'module4', title: 'Types of Blobs in BLOB', href: '/tutorials/azure-data-engineer#module4' },
          { id: 'module5', title: 'Access Tiers in BLOB', href: '/tutorials/azure-data-engineer#module5' },
          { id: 'module6', title: 'Blob Storage', href: '/tutorials/azure-data-engineer#module6' },
          { id: 'module7', title: 'Storage Services in ADLS', href: '/tutorials/azure-data-engineer#module7' },
          { id: 'module8', title: 'Blobs in ADLS', href: '/tutorials/azure-data-engineer#module8' },
          { id: 'module9', title: 'Access Tiers in ADLS', href: '/tutorials/azure-data-engineer#module9' },
          { id: 'module10', title: 'ADLS Gen2', href: '/tutorials/azure-data-engineer#module10' },
        ]},
        {
          id: 'azure-data-engineer-databricks',
          title: 'Azure DataBricks',
          href: '/tutorials/azure-data-engineer',
          icon: '',
          children: [
          { id: 'module11', title: 'Module 11', href: '/tutorials/azure-data-engineer#module11' },
          { id: 'module12', title: 'Module 12', href: '/tutorials/azure-data-engineer#module12' },
          { id: 'module13', title: 'Module 13', href: '/tutorials/azure-data-engineer#module13' },
          { id: 'module14', title: 'Module 14', href: '/tutorials/azure-data-engineer#module14' },
          { id: 'module15', title: 'Module 15', href: '/tutorials/azure-data-engineer#module15' },
          { id: 'module16', title: 'Module 16', href: '/tutorials/azure-data-engineer#module16' },
          { id: 'module17', title: 'Module 17', href: '/tutorials/azure-data-engineer#module17' },
          { id: 'module18', title: 'Module 18', href: '/tutorials/azure-data-engineer#module18' },
          { id: 'module19', title: 'Module 19', href: '/tutorials/azure-data-engineer#module19' },
          { id: 'module20', title: 'Module 20', href: '/tutorials/azure-data-engineer#module20' },
          { id: 'module21', title: 'Module 21', href: '/tutorials/azure-data-engineer#module21' },
          { id: 'module22', title: 'Module 22', href: '/tutorials/azure-data-engineer#module22' },
          { id: 'module23', title: 'Module 23', href: '/tutorials/azure-data-engineer#module23' },
          { id: 'module24', title: 'Module 24', href: '/tutorials/azure-data-engineer#module24' },
          { id: 'module25', title: 'Module 25', href: '/tutorials/azure-data-engineer#module25' },
          { id: 'module26', title: 'Module 26', href: '/tutorials/azure-data-engineer#module26' },
          { id: 'module27', title: 'Module 27', href: '/tutorials/azure-data-engineer#module27' },
          { id: 'module28', title: 'module 28', href: '/tutorials/azure-data-engineer#module28' },
          { id: 'module29', title: 'Module 29', href: '/tutorials/azure-data-engineer#module29' },
          { id: 'module30', title: 'Module 30', href: '/tutorials/azure-data-engineer#module30' },
          { id: 'module31', title: 'Module 31', href: '/tutorials/azure-data-engineer#module31' },
          { id: 'module32', title: 'Module 32', href: '/tutorials/azure-data-engineer#module32' },
          { id: 'module33', title: 'module 33', href: '/tutorials/azure-data-engineer#module33' },
          { id: 'module34', title: 'module 34', href: '/tutorials/azure-data-engineer#module34' },
          { id: 'module35', title: 'module 35', href: '/tutorials/azure-data-engineer#module35' },
        ]
      },
       {
          id: 'azure-data-engineer-datafactory',
          title: 'Azure Data Factory',
          href: '/tutorials/azure-data-engineer',
          icon: '',
          children: [
          { id: 'module36', title: 'module 36', href: '/tutorials/azure-data-engineer#module36'},
          { id: 'module37', title: 'module 37', href: '/tutorials/azure-data-engineer#module37'},
          { id: 'module38', title: 'module 38', href: '/tutorials/azure-data-engineer#module38'},
          { id: 'module39', title: 'module 39', href: '/tutorials/azure-data-engineer#module39'},
          { id: 'module40', title: 'module 40', href: '/tutorials/azure-data-engineer#module40'},
          { id: 'module41', title: 'module 41', href: '/tutorials/azure-data-engineer#module41'},
          { id: 'module42', title: 'module 42', href: '/tutorials/azure-data-engineer#module42'},
          { id: 'module43', title: 'module 43', href: '/tutorials/azure-data-engineer#module43'},
        ]},
    ],
    'artificial-intelligence': [
      {
        id: 'llms',
        title: 'Large Language Models (LLMs)',
        href: '/tutorials/artificial-intelligence#llms',
        icon: '',
        children: [
          { id: 'llm-introduction', title: 'Introduction to LLMs', href: '/tutorials/artificial-intelligence#llm-introduction' },
          { id: 'llm-architecture', title: 'LLM Architecture', href: '/tutorials/artificial-intelligence#llm-architecture' },
          { id: 'llm-training', title: 'Training LLMs', href: '/tutorials/artificial-intelligence#llm-training' },
          { id: 'llm-applications', title: 'LLM Applications', href: '/tutorials/artificial-intelligence#llm-applications' }
        ]
      }
    ]
  };

  return [...baseItems, ...(techItems[tech as keyof typeof techItems] || [])];
};

export default function TechLayout({ children, onThisPage = [], technology, activeSection: externalActiveSection, setActiveSection: externalSetActiveSection, activeSubsection, setActiveSubsection, hideSidebar = false, customNavigationItems, hideNavButtons = false, disableBackground = false, background = 'linear-gradient(to bottom right, #dcfce7, #d1fae5, #ccfbf1)', sidebarTheme = 'light' }: TechLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [internalActiveSection, setInternalActiveSection] = useState('');
  const [visibleAds, setVisibleAds] = useState({ ad1: true, ad2: true, ad3: true });

  const handleCloseAd = (adKey: 'ad1' | 'ad2' | 'ad3') => {
    setVisibleAds(prev => ({ ...prev, [adKey]: false }));
    setTimeout(() => {
      setVisibleAds(prev => ({ ...prev, [adKey]: true }));
    }, 3 * 60 * 1000); // 3 minutes
  };

  const activeSection = externalActiveSection !== undefined ? externalActiveSection : internalActiveSection;
  const setActiveSection = externalSetActiveSection || setInternalActiveSection;

  const sectionList = useMemo(() => onThisPage ?? [], [onThisPage]);
  const resolvedActiveSection = useMemo(() => {
    if (!sectionList.length) return activeSection;
    // If activeSection is provided, use it directly (it might be a subsection ID)
    // Don't fallback to first section - the activeSection is managed by the page component
    if (activeSection) {
      return activeSection;
    }
    return sectionList[0]?.id;
  }, [sectionList, activeSection]);

  useEffect(() => {
    if (!sectionList.length) return;
    sectionList.forEach(section => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const datasetKey = 'techPrevDisplay';
      if (!el.dataset[datasetKey]) {
        el.dataset[datasetKey] = el.style.display || '';
      }
      if (!resolvedActiveSection || resolvedActiveSection === section.id) {
        el.style.display = el.dataset[datasetKey] ?? '';
      } else {
        el.style.display = 'none';
      }
    });

    return () => {
      sectionList.forEach(section => {
        const el = document.getElementById(section.id);
        if (!el) return;
        const datasetKey = 'techPrevDisplay';
        if (el.dataset[datasetKey] !== undefined) {
          el.style.display = el.dataset[datasetKey] ?? '';
          delete el.dataset[datasetKey];
        } else {
          el.style.removeProperty('display');
        }
      });
    };
  }, [sectionList, resolvedActiveSection]);

  // Use custom navigation items if provided, otherwise use default
  const navigationItems = customNavigationItems || getTechNavigationItems(technology);
  const currentIndex = resolvedActiveSection ? sectionList.findIndex(section => section.id === resolvedActiveSection) : -1;
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < sectionList.length - 1;

  // Handle scroll to update active section (for sidebar highlighting only - NO scrolling)
  useEffect(() => {
    if (!sectionList.length) return; // Skip scroll handling if no onThisPage prop

    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = window.scrollY;
    let isScrollingProgrammatically = false;
    let programmaticScrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      // If scroll delta is large (>100px), it's likely programmatic scrolling - skip
      if (scrollDelta > 100) {
        isScrollingProgrammatically = true;
        clearTimeout(programmaticScrollTimeout);
        programmaticScrollTimeout = setTimeout(() => {
          isScrollingProgrammatically = false;
        }, 2000); // Increased delay to prevent interference
        return;
      }

      // Skip if programmatic scroll is happening
      if (isScrollingProgrammatically) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Double-check that we're not in a programmatic scroll
        if (isScrollingProgrammatically) return;

        const sections = sectionList
          .map(item => document.getElementById(item.id))
          .filter((section): section is HTMLElement => Boolean(section && section.offsetParent !== null));
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            // Only update if section actually changed to prevent unnecessary re-renders
            const currentSection = externalActiveSection !== undefined ? externalActiveSection : '';
            if (section.id !== currentSection) {
              // ONLY update state for highlighting - DO NOT trigger any scrolling
              // But only if this is user scrolling, not programmatic
              setActiveSection(section.id);
              if (setActiveSubsection) {
                setActiveSubsection(null);
              }
            }
            break;
          }
        }
      }, 300); // Increased debounce delay
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(programmaticScrollTimeout);
    };
  }, [sectionList, setActiveSection, setActiveSubsection, externalActiveSection]);

  const sidebarStyle = sidebarTheme === 'light'
    ? { backgroundColor: 'rgba(255, 255, 255, 0.65)', border: '1px solid rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }
    : { backgroundColor: 'var(--glass-bg)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' };

  return (
    <div className="flex min-h-screen relative w-full overflow-x-hidden" style={{ background: background }}>
      {/* Brand logo moved to right sidebar */}

      {/* Berry & Sky Static Background - Removed */}

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Fixed position, stays visible while content scrolls */}
      {!hideSidebar && (
        <aside
          className={`
            fixed left-0 z-50 w-full max-w-xs sm:max-w-sm lg:w-[280px]
            transform transition-transform duration-300 ease-in-out
            top-0 h-screen
            lg:top-0 lg:h-screen
            lg:left-0 lg:rounded-none
            lg:translate-x-0 lg:z-30
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            overflow-hidden
            will-change-transform
            flex flex-col
           `}
          style={sidebarStyle}
        >


          {/* Mobile close button */}
          <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b" style={{ borderBottomColor: 'rgba(255, 255, 255, 0.15)', backgroundColor: 'rgba(26, 26, 26, 0.98)' }}>
            <span className="text-white font-semibold">Menu</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
              aria-label="Close sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* SQL Specific Sidebar Header */}
          {technology === 'sql' && (
            <div className="w-full bg-white border-b border-gray-100 p-0">
              <div className="relative w-full h-36">
                <Image
                  src="/images/sql_logo.png"
                  alt="SQL Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          )}
          {technology === 'powerbi' && (
            <div className="w-full bg-white border-b border-gray-100 p-0">
              <div className="relative w-full h-36">
                <Image
                  src="/images/powerbi.png"
                  alt="PowerBI Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          )}
          {technology === 'excel' && (
            <div className="w-full bg-white border-b border-gray-100 p-0">
              <div className="relative w-full h-36">
                <Image
                  src="https://xplorexcel.com/wp-content/uploads/2021/01/excel.jpg"
                  alt="Excel Logo"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          )}
          {technology === 'azure-data-engineer' && (
            <div className="w-full bg-white border-b border-gray-100 p-0">
              <div className="relative w-full h-36">
                <Image
                  src="/images/azure.png"
                  alt="Azure Logo"
                  fill
                  className="object-contain p-6"
                  priority
                  unoptimized
                />
              </div>
            </div>
          )}
          <div className="flex-1 min-h-0 w-full relative">
            <Sidebar
              items={navigationItems}
              onThisPage={sectionList}
              activeSection={resolvedActiveSection}
              setActiveSection={(sectionId: string) => {
                setActiveSection(sectionId);
                // Only close sidebar on mobile/tablet after selection if it's in overlay mode
                if (window.innerWidth < 1024) {
                  setSidebarOpen(false);
                }
              }}
              activeSubsection={activeSubsection}
              setActiveSubsection={setActiveSubsection}
              theme={sidebarTheme}
            />
          </div>
        </aside>
      )}

      {/* Main Content - scrolls independently, sidebar stays fixed */}
      <div className={`flex-1 flex flex-col ${!hideSidebar ? 'lg:ml-[280px]' : ''} min-h-screen w-full`}>
        {/* Mobile header */}
        <header className="lg:hidden bg-[#1a1a1a] border-b border-gray-600">
          <div className="flex items-center justify-between px-4 py-4">
            {!hideSidebar && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-3 rounded-xl text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
            {hideSidebar && <div className="w-10" />}
            <h1 className="text-xl font-bold text-white">
              {technology === 'java' ? 'Java Programming' :
                technology === 'python' ? 'Python Programming' :
                  technology === 'sql' ? 'SQL' :
                    technology === 'web-dev' ? 'Web Development' :
                      technology === 'data-science' ? 'Data Science' :
                        technology === 'code-terminal' ? 'Code Terminal' :
                          technology === 'devops' ? 'DevOps' :
                            technology === 'azure-data-engineer' ? 'Azure Data Engineer' :
                              technology === 'medical-coding' ? 'Medical Coding' :
                                technology === 'powerbi' ? 'Power BI' : 'OneHubGlobal'}
            </h1>
            <div className="w-10" /> {/* Spacer for centering */}
          </div>
        </header>

        <main className="flex-1 relative z-10 w-full" style={{ backgroundColor: 'transparent', paddingTop: '0', minHeight: '100vh', color: 'var(--text-primary)' }}>
          <div className="flex flex-col xl:flex-row w-full ml-0 px-4 sm:px-6 lg:pl-0 lg:pr-0 xl:pr-64 2xl:pl-0 2xl:pr-64 transition-all duration-300">
            <div className="flex-1 max-w-none">
              <article className="max-w-none text-[var(--text-primary)] leading-relaxed space-y-6 break-words">
                {children}
                {!hideNavButtons && sectionList.length > 1 && resolvedActiveSection && setActiveSection && (
                  <div className="flex flex-col gap-4 mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <button
                        onClick={() => {
                          if (!hasPrevious) return;
                          const target = sectionList[currentIndex - 1];
                          if (target) setActiveSection(target.id);
                        }}
                        disabled={!hasPrevious}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${hasPrevious
                          ? 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500'
                          : 'bg-gray-800 text-gray-500 border border-gray-700 cursor-not-allowed'
                          }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Previous</span>
                        {hasPrevious && (
                          <span className="text-sm text-gray-400">
                            {sectionList[currentIndex - 1]?.title}
                          </span>
                        )}
                      </button>

                      <div className="text-sm text-gray-400 text-center md:text-right">
                        {currentIndex + 1} of {sectionList.length}
                      </div>

                      <button
                        onClick={() => {
                          if (!hasNext) return;
                          const target = sectionList[currentIndex + 1];
                          if (target) setActiveSection(target.id);
                        }}
                        disabled={!hasNext}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${hasNext
                          ? 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500'
                          : 'bg-gray-800 text-gray-500 border border-gray-700 cursor-not-allowed'
                          }`}
                      >
                        {hasNext && (
                          <span className="text-sm text-gray-400">
                            {sectionList[currentIndex + 1]?.title}
                          </span>
                        )}
                        <span>Next</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </article>
            </div>

            {/* Right Side Advertisements - Fixed and not scrolling */}
            <aside className="hidden xl:flex flex-col w-64 fixed top-0 right-0 h-screen border-l border-gray-200 bg-white z-[150]">
              {/* Brand Logo Header */}
              <div className="p-6 flex items-center justify-center flex-shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 bg-gray-50 rounded-full px-6 py-3 border border-gray-100 group transition-all hover:scale-105 shadow-sm">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-white shadow-sm group-hover:rotate-12 transition-transform">
                    <Image
                      src="/logo_new.jpg"
                      alt="OHG365 Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col pr-1">
                    <div
                      className="flex items-center text-xs font-black tracking-tight leading-none"
                      style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
                    >
                      <span className="text-[#083D77]">ONE</span>
                      <span className="text-orange-500">HUB</span>
                      <span className="text-cyan-500">GLOBAL</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Ads Container - Fills remaining space */}
              <div className="flex-1 flex flex-col min-h-0">
                {visibleAds.ad1 && (
                  <div className="flex-1 relative bg-white border-b border-gray-100 overflow-hidden group min-h-[160px]">
                    <button
                      onClick={() => handleCloseAd('ad1')}
                      className="absolute top-4 right-4 z-30 flex items-center justify-center w-8 h-8 rounded-full bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40 backdrop-blur-md"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <Link href="tel:+919059450707" className="block h-full cursor-pointer">
                      <div className="h-full relative bg-gradient-to-br from-[#083D77] to-blue-900 flex flex-col items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-700">
                        {/* Background Decoration */}
                        <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
                        <div className="absolute bottom-[-20%] left-[-20%] w-40 h-40 bg-orange-500/5 rounded-full blur-2xl flex-shrink-0" />

                        <div className="relative z-10 flex flex-col items-center gap-4">
                          <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl group-hover:rotate-6 transition-transform">
                            <Rocket className="w-10 h-10 text-white" />
                          </div>
                          <div className="flex flex-col items-center text-center px-4">
                            <span className="text-white text-sm font-black uppercase tracking-[0.2em] mb-1">Career</span>
                            <span className="text-orange-400 text-lg font-black uppercase tracking-widest">Guidance</span>
                          </div>
                        </div>

                        {/* Bottom Label */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all group-hover:bottom-6">
                          <span className="text-[10px] text-white font-bold whitespace-nowrap uppercase tracking-tighter">Talk to Experts</span>
                          <ArrowRight className="w-3 h-3 text-orange-400" />
                        </div>
                      </div>
                    </Link>
                  </div>
                )}

                {visibleAds.ad2 && (
                  <div className="flex-1 relative bg-white border-b border-gray-100 overflow-hidden group min-h-[160px]">
                    <button
                      onClick={() => handleCloseAd('ad2')}
                      className="absolute top-4 right-4 z-30 flex items-center justify-center w-8 h-8 rounded-full bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40 backdrop-blur-md"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <Link href="https://ohg-ai-interviewer.vercel.app/" target="_blank" className="block h-full cursor-pointer">
                      <div className="h-full relative bg-gradient-to-br from-cyan-500 to-blue-600 flex flex-col items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-700">
                        {/* Background Decoration */}
                        <div className="absolute top-[-20%] left-[-20%] w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />

                        <div className="relative z-10 flex flex-col items-center gap-4">
                          <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl group-hover:-rotate-6 transition-transform">
                            <Activity className="w-10 h-10 text-white" />
                          </div>
                          <div className="flex flex-col items-center text-center px-4">
                            <span className="text-white text-sm font-black uppercase tracking-[0.2em] mb-1">AI Mock</span>
                            <span className="text-cyan-200 text-lg font-black uppercase tracking-widest">Interviews</span>
                          </div>
                        </div>

                        {/* Bottom Label */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all group-hover:bottom-6">
                          <span className="text-[10px] text-white font-bold whitespace-nowrap uppercase tracking-tighter">Start Practice</span>
                          <ArrowRight className="w-3 h-3 text-cyan-200" />
                        </div>
                      </div>
                    </Link>
                  </div>
                )}

                {visibleAds.ad3 && (
                  <div className="flex-1 relative bg-white overflow-hidden group min-h-[160px]">
                    <button
                      onClick={() => handleCloseAd('ad3')}
                      className="absolute top-4 right-4 z-30 flex items-center justify-center w-8 h-8 rounded-full bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40 backdrop-blur-md"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <Link href="https://konnecthere.com/" target="_blank" className="block h-full cursor-pointer">
                      <div className="h-full relative bg-gradient-to-br from-green-500 to-emerald-700 flex flex-col items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-700">
                        {/* Background Decoration */}
                        <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />

                        <div className="relative z-10 flex flex-col items-center gap-4">
                          <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl group-hover:rotate-12 transition-transform">
                            <Briefcase className="w-10 h-10 text-white" />
                          </div>
                          <div className="flex flex-col items-center text-center px-4">
                            <span className="text-white text-sm font-black uppercase tracking-[0.2em] mb-1">Hire & Be</span>
                            <span className="text-green-200 text-lg font-black uppercase tracking-widest">Hired</span>
                          </div>
                        </div>

                        {/* Bottom Label */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all group-hover:bottom-6">
                          <span className="text-[10px] text-white font-bold whitespace-nowrap uppercase tracking-tighter">View Portals</span>
                          <ArrowRight className="w-3 h-3 text-green-200" />
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </main>
      </div>

    </div>
  );
}
