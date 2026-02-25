'use client';

import Link from 'next/link';
import TechLayout from '@/components/layout/tech-layout';
import VideoSection from '@/components/video/VideoSection';
import { videoTutorialsData, getVideosForTopic } from '@/data/videoTutorials';
import { useState, useEffect } from 'react';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';

export default function PowerBIPage() {
    const [activeSection, setActiveSection] = useState('introduction');

    const pageHeadings = [
        { id: 'introduction', title: 'Power BI Introduction' },
        { id: 'module2', title: 'overview and comparision' },
        // You can add more section IDs here as you create them manually
    ];

    // Handle URL hash changes to set active section
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            if (hash && pageHeadings.some(heading => heading.id === hash)) {
                setActiveSection(hash);
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Get navigation for current section (Matches SQL styling)
    const getNavigation = () => {
        const currentIndex = pageHeadings.findIndex(h => h.id === activeSection);
        const previousSection = currentIndex > 0 ? pageHeadings[currentIndex - 1] : null;
        const nextSection = currentIndex < pageHeadings.length - 1 ? pageHeadings[currentIndex + 1] : null;

        return {
            previous: previousSection ? {
                href: `/powerbi/#${previousSection.id}`,
                title: previousSection.title,
                isSection: true
            } : {
                href: '/sql',
                title: 'SQL Tutorial',
                isSection: false
            },
            next: nextSection ? {
                href: `/powerbi/#${nextSection.id}`,
                title: nextSection.title,
                isSection: true
            } : {
                href: '/data-science',
                title: 'Data Science',
                isSection: false
            }
        };
    };

    const navigation = getNavigation();

    const renderContent = () => {
        switch (activeSection) {
            case 'introduction':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="introduction" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                                Power BI Tutorial
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 text-center">
                                Learn how to transform data into interactive insights with Power BI
                            </p>

                            <div className="max-w-6xl mx-auto text-xl">
                                <h2 className="text-4xl font-bold text-slate-900 mb-6">Introduction to Business Intelligence & Power BI</h2>
                                <br />
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is Business Intelligence (BI)?</h2>
                                <div className="text-lg text-gray-700 leading-relaxed">
                                    <p className="mb-4"><strong>Formal Definition:</strong> Business Intelligence (BI) is a technology-driven process for analyzing data and presenting actionable information to support executive, managerial, and operational decision-making. The objective is to interpret vast volumes of data to identify strategic opportunities.</p>
                                    <p className="mb-4"><strong>Core Concept:</strong> BI transforms raw, unstructured data into meaningful insights through data aggregation, analysis, and visualization. It answers critical business questions regarding performance, market trends, and operational efficiency.</p>
                                    <p className="mb-2"><strong>The BI Workflow: </strong>It is a cyclical process involving:</p>
                                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6 text-lg'>
                                        <li><strong>Data Sourcing:</strong> Extracting data from disparate systems (ERP, CRM, Excel, databases).</li>
                                        <li><strong>Data Integration & Warehousing:</strong> Consolidating data into a single source of truth.</li>
                                        <li><strong>Analysis & Querying: </strong> Interrogating data using OLAP, data mining, and statistical tools.</li>
                                        <li><strong>Data Visualization & Reporting:</strong>  Presenting insights via dashboards, reports, and scorecards.</li>
                                        <li><strong>Decision-Making & Monitoring:</strong> Enabling stakeholders to act on insights and track outcomes.</li>
                                    </ol>
                                    <p><strong>Business Value:</strong> BI moves organizations from intuitive, historical reporting to proactive, data-driven strategy. It enhances competitive advantage by revealing inefficiencies, predicting trends, and optimizing resources.</p>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4"> What is Power BI?</h2>
                                <div className="text-lg text-gray-700 leading-relaxed">
                                    <p className="mb-6"><strong>Official Description:</strong>Power BI is a unified, scalable platform for self-service and enterprise business intelligence, developed by Microsoft. It provides a cohesive suite of tools to connect, model, visualize, and share data insights across an organization.</p>

                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Architectural Components:</h2>
                                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Power BI Desktop:</strong>  A free, feature-rich authoring tool for Windows. It is the primary development environment used to perform data ingestion (from 500+ connectors), transformation (Power Query), modeling (relationships, DAX), and report design.</li>
                                        <li><strong>Power BI Service:</strong> A cloud-based Software-as-a-Service (SaaS) platform. Published reports are hosted here for sharing, collaboration, automated refresh scheduling, and distribution via apps and workspaces.</li>
                                        <li><strong>Power BI Mobile:</strong> Native applications for iOS, Android, and Windows devices. They enable secure, interactive access to dashboards and reports with touch-optimized design.</li>
                                        <li><strong>Power BI Report Server:</strong> An on-premises solution for organizations requiring data to remain within their own infrastructure, allowing report publishing and management behind the firewall.</li>
                                    </ol>
                                    <p><strong>Strategic Positioning:</strong> Power BI distinguishes itself through deep integration with the Microsoft ecosystem (Azure, SQL Server, Office 365, Dynamics), robust self-service capabilities, and enterprise-grade governance and security features.</p>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Strategic Rationale for Power BI Adoption.</h2>
                                <div className="text-lg text-gray-700 leading-relaxed">
                                    <p className="mb-4">Organizations implement Power BI to achieve specific strategic and operational objectives:</p>
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Democratization of Data:</strong> Empowers business users (citizen data analysts) to create their own reports and insights without constant dependency on IT or data science teams.</li>
                                        <li><strong>Unified Data Platform:</strong> Breaks down data silos by seamlessly connecting to a vast array of on-premises and cloud data sources, from Excel files to Azure Synapse Analytics.</li>
                                        <li><strong>Cost-Effective Scalability:</strong> Offers a flexible licensing model (Free, Pro, Premium) that scales from individual use to large enterprise deployments with advanced AI and big data capabilities.</li>
                                        <li><strong>Real-Time Analytics:</strong> Supports direct connectivity and live querying to operational databases, enabling dashboards that reflect current business states for timely decision-making.</li>
                                        <li><strong>Enterprise-Grade Collaboration & Governance:</strong> Facilitates secure sharing and collaboration within a governed framework. Features like data lineage, sensitivity labels, and deployment pipelines ensure manageability at scale.</li>
                                    </ul>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4"> Organizational Roles Utilizing Power BI.</h2>
                                <div className="text-lg text-gray-700 leading-relaxed">
                                    <p className="mb-4">Power BI serves a spectrum of professionals across business and technology functions:</p>

                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Business & Data Analysts:</strong> Core users who build reports, perform analysis, and derive insights for specific business units (Sales, Marketing, Finance).</li>
                                        <li><strong>Departmental Managers & Decision Makers:</strong> Consumers of dashboards who monitor KPIs, track performance against targets, and drill into details for root-cause analysis.</li>
                                        <li><strong>Executives & Leadership:</strong>  Use high-level strategic dashboards for a consolidated view of organizational health and to track key strategic initiatives.</li>
                                        <li><strong>Data Engineers & IT Professionals:</strong> Manage data infrastructure, configure gateways for on-premises data refresh, enforce security models (RLS), and oversee platform administration.</li>
                                        <li><strong>Finance & Operations Professionals:</strong> Analyze budgets, forecast variances, and monitor cost centers and operational efficiency metrics.</li>
                                        <li><strong>Sales & Marketing Professionals:</strong> Track pipeline health, campaign ROI, customer acquisition costs, and market penetration.</li>
                                    </ul>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Real-World Enterprise Applications</h2>
                                <div className="text-lg text-gray-700 leading-relaxed">
                                    <p className="mb-4">Power BI delivers tangible value across diverse industries:</p>
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Retail & CPG:</strong> Analyzing sales performance across channels, optimizing inventory levels based on predictive trends, and understanding customer basket analysis and loyalty.</li>
                                        <li><strong>Healthcare:</strong> Monitoring hospital operational metrics (bed turnover, patient wait times), clinical outcomes, and resource utilization to improve patient care and operational efficiency.</li>
                                        <li><strong>Manufacturing & Supply Chain:</strong> Tracking Overall Equipment Effectiveness (OEE), production yield, supplier performance, and logistics costs to drive lean initiatives.</li>
                                        <li><strong>Financial Services:</strong> Managing risk exposure, tracking portfolio performance, detecting fraudulent activity patterns, and ensuring regulatory compliance reporting.</li>
                                        <li><strong>Education:</strong> Analyzing student enrollment trends, academic performance, faculty workload, and institutional resource allocation for strategic planning.</li>
                                    </ul>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Business Intelligence Workflow (Visualized in Power BI Context)</h2>
                                <div className="text-lg text-gray-700 leading-relaxed">
                                    <p className="mb-4">A standard, iterative BI project lifecycle within the Power BI ecosystem follows these stages:</p>
                                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Requirements Gathering:</strong> Collaborate with business stakeholders to define key questions, required metrics (KPIs), and dashboard objectives.</li>
                                        <li><strong>Data Acquisition & Integration:</strong> Use Power Query Editor in Power BI Desktop to connect to source systems, extract data, and perform ETL (Extract, Transform, Load) processes.</li>
                                        <li><strong>Data Modeling:</strong> Structure the data within the Desktop by defining tables, creating relationships (star/snowflake schema), and building a robust semantic model with calculated columns and measures (using DAX).</li>
                                        <li><strong>Report & Visualization Development:</strong> Design interactive, user-friendly reports by selecting appropriate visualizations (charts, tables, maps) that effectively communicate the insights from the data model.</li>
                                        <li><strong>Insight Sharing & Collaboration:</strong> Publish the report to the Power BI Service. Share it with colleagues, distribute via Apps, set up automated data refresh schedules, and configure row-level security (RLS).</li>
                                        <li><strong>Consumption & Action:</strong> Stakeholders consume insights via the Service, Mobile apps, or embedded reports in other applications (like SharePoint). Insights lead to business decisions and actions.</li>
                                        <li><strong>Iteration & Maintenance:</strong>  The cycle repeats based on new questions, changing data, or feedback, ensuring the BI solution remains aligned with business needs.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </main>
                );

            case 'module2':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="module2" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                                Overview and comparision.
                            </h1>
                            <div className="max-w-6xl mx-auto text-xl">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4"> Power BI Competitive Landscape and Tool Selection</h2>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Power BI vs. Tableau: A Comparative Analysis</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">This comparison is essential for tool selection and architecture decisions. Both are leaders in the Gartner Magic Quadrant for Analytics and BI Platforms, but with distinct philosophies.</p>

                                <h2 className="text-xl font-bold text-slate-900 mb-4">Power BI Strategic Advantages:</h2>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Total Cost of Ownership (TCO):</strong> Offers a significantly lower entry cost with a free, fully-featured authoring tool (Power BI Desktop) and a scalable SaaS model. Enterprise deployments via <strong>Power BI Premium (Capacity-based)</strong> can provide cost predictability for large user bases.</li>
                                    <li><strong>Microsoft Ecosystem Integration:</strong> Provides native, deep integration with:
                                        <ul className='list-disc pl-6 mt-2 space-y-2 text-gray-700'>
                                            <li><strong>Azure:</strong> (Azure Synapse, Data Lake, SQL DB) for cloud-scale analytics.</li>
                                            <li><strong>Microsoft 365:</strong> Seamless sharing via Teams, SharePoint, and Outlook.</li>
                                            <li><strong>Dynamics 365:</strong> Real-time operational reporting.</li>
                                            <li><strong>SQL Server & Analysis Services:</strong> Leverages existing investments in tabular models.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Self-Service & Pro-Developer Harmony:</strong> Empowers business users with intuitive tools like Power Query and Q&A (natural language queries), while providing advanced developers with comprehensive capabilities in DAX, data modeling, and custom visuals.</li>
                                    <li><strong>Agile Development Cycle:</strong> Benefits from a consistent monthly update cadence, rapidly introducing new features, connectors, and AI capabilities (e.g., Quick Insights, Decomposition Trees).</li>
                                </ul>

                                <h2 className="text-xl font-bold text-slate-900 mb-4">Tableau Strategic Advantages:</h2>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Visual Analytics Maturity:</strong> Renowned for exceptional visual design flexibility and a "viz-first" approach that facilitates deep exploratory data analysis through an intuitive drag-and-drop interface.</li>
                                    <li><strong>Performance at Extreme Scale:</strong> Historically demonstrates robust performance when directly querying very large datasets (billions of rows) via its hyper engine, often with less need for pre-aggregation compared to Power BI's in-memory model.</li>
                                    <li><strong>Advanced Analytic Community:</strong> Hosts a strong community of data scientists and advanced analysts, with extensive resources for complex statistical geospatial, and predictive analytics integrations (e.g., with R and Python).</li>
                                    <li><strong>Dashboard Design Freedom:</strong> Provides pixel-level control over layout and formatting, enabling the creation of highly customized, publication-quality dashboards.</li>
                                </ul>

                                <p className="text-lg text-gray-700 leading-relaxed mb-8"><strong>Strategic Verdict:</strong> Power BI is optimal for organizations heavily invested in the Microsoft stack, seeking a cost-effective, scalable platform that balances self-service empowerment with enterprise governance. Tableau remains a preferred choice for use cases demanding maximum visual customization and exploratory analysis on vast, complex datasets, often where cost is a secondary constraint.</p>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Power BI vs. Excel: Complementary Roles in the Modern Analytics Stack</h2>
                                <div className="text-lg text-gray-700 leading-relaxed mb-8">
                                    <p className="mb-4">The relationship is not competitive but complementary. They form a cohesive analytics continuum within the Microsoft ecosystem.</p>
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Excel</strong> is an <strong>universal calculation and data manipulation engine.</strong> Its strength lies in granular, cell-level control, ad-hoc modeling, and individual analytical workflows.</li>
                                        <li><strong>Power BI</strong> is an <strong>enterprise reporting, dashboarding, and distribution platform</strong>. Its strength lies in scalable data modeling, interactive visualization, and secure, broad dissemination of insights.</li>
                                    </ul>
                                    <p><strong>Analogy:</strong> Excel is the laboratory where data is prepared and experimented upon. Power BI is the observatory from which the resulting insights are shared and monitored across the organization.</p>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Decision Framework: Power BI vs. Excel</h2>
                                <table className="w-full border-collapse border border-slate-400 mt-4 mb-8 rounded-lg overflow-hidden shadow-sm">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="border border-slate-400 p-3 text-left">Criterion</th>
                                            <th className="border border-slate-400 p-3 text-left">Choose Power BI When...</th>
                                            <th className="border border-slate-400 p-3 text-left">Choose Excel When...</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr>
                                            <td className="border border-slate-400 p-3 text-gray-900"><strong>Data Volume & Refresh</strong></td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Datasets exceed Excel's practical limits (~1M rows). Scheduled, automated refreshes from multiple sources are required.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Working with smaller, static datasets (100K-1M rows). Data is manually curated or updated infrequently.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-400 p-3 text-gray-900"><strong>Core Objective</strong></td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Creating interactive, shared dashboards and reports for ongoing performance monitoring and decision support.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Performing ad-hoc, personal analysis, financial modeling, or one-time deep dives requiring complex, cell-level logic.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-400 p-3 text-gray-900"><strong>Collaboration & Security</strong></td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Reports need to be securely distributed to many users with row-level security (RLS) and version control.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Collaboration is limited to shared workbooks, with security managed via file permissions or SharePoint check-in/out.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-400 p-3 text-gray-900"><strong>Data Modeling</strong></td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Combining multiple related data sources (DBs, APIs, files) into a structured semantic model with relationships.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Analysis is primarily contained within a single table or pivot model. Relationships are simple or managed via VLOOKUP.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-400 p-3 text-gray-900"><strong>User Experience</strong></td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Providing a guided, interactive exploration experience for business consumers via slicers, drill-through, etc.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Users require maximum flexibility to alter calculations, layouts, and formats on the fly for specific needs.</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    <strong>Key Integration:</strong> Utilize <strong>"Analyze in Excel"</strong> feature, which allows Power BI dataset consumers to connect Excel pivot tables and charts directly to the managed semantic model, combining Excel's analytical flexibility with Power BI's governed data source.
                                </p>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Power BI: SWOT Analysis</h2>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">Strengths:</h2>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Economic Value:</strong> Unmatched price-to-performance ratio in the mid-market and enterprise BI segment.</li>
                                    <li><strong>Strategic Integration:</strong> Cohesive integration within the broader Microsoft Cloud (Azure, M365) reduces friction and accelerates time-to-insight.</li>
                                    <li><strong>Rapid Innovation:</strong> A committed R&D cycle ensures the platform continuously evolves with modern analytics trends (AI, automation, hybrid deployment).</li>
                                    <li><strong>Power Query Engine:</strong> A world-class data preparation tool (M Language) accessible across Power BI, Excel, and Dataflows, ensuring ETL skill transferability.</li>
                                    <li><strong>Enterprise Readiness:</strong> Robust administration, auditing, and security features (including sensitivity labels and Microsoft Purview integration) support governance at scale.</li>
                                </ul>

                                <h2 className="text-xl font-bold text-slate-900 mb-4">Weaknesses:</h2>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Performance Boundaries:</strong> While the Vertipaq in-memory engine is highly efficient, DirectQuery performance can degrade with complex models on very large datasets (10-100M rows), requiring careful data model optimization.</li>
                                    <li><strong>Visual Customization Constraints:</strong> Default formatting and layout options are more restrictive than Tableau. Achieving highly specific design requirements often necessitates custom visual development (TypeScript/React).</li>
                                    <li><strong>DAX Complexity:</strong> The Data Analysis Expressions (DAX) language, while powerful, has a non-intuitive learning curve for users accustomed to Excel formulas, particularly regarding context transition and filter propagation.</li>
                                    <li><strong>Report Formatting Granularity:</strong> Lacks the pixel-perfect control over report layout and element formatting found in dedicated reporting tools like SQL Server Reporting Services (SSRS) or Crystal Reports.</li>
                                </ul>

                                <p className="text-lg text-gray-700 leading-relaxed">
                                    <strong>Conclusion:</strong> Power BI's position is strongest as a <strong>strategic enterprise BI standard</strong>that democratizes analytics. Its limitations are often addressable through best practices in data modeling, performance tuning, and leveraging the extensibility framework. Selection should be guided by the organization's existing technology stack, user skill profiles, primary use cases, and data scale requirements.
                                </p>
                            </div>
                        </div>
                    </main>
                );

            default:
                return null;
        }
    };

    return (
        <TechLayout
            onThisPage={pageHeadings}
            technology="powerbi"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            background="white"
        >
            <div
                className="min-h-screen rounded-3xl p-8 text-slate-900 border transition-all duration-300"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
                }}
            >
                {renderContent()}
            </div>
        </TechLayout>
    );
}
