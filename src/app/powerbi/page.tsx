'use client';

import Link from 'next/link';
import TechLayout from '@/components/layout/tech-layout';
import VideoSection from '@/components/video/VideoSection';
import { videoTutorialsData, getVideosForTopic } from '@/data/videoTutorials';
import { useState, useEffect } from 'react';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';
import { TUTORIALS_NAV } from '@/data/tutorials-nav';

export default function PowerBIPage() {
    const [activeSection, setActiveSection] = useState('introduction');

    const pageHeadings = [
        { id: 'introduction', title: 'Power BI Introduction' },
        { id: 'module2', title: 'overview and comparision' },
        { id: 'module3', title: 'power bi installation' },
        { id: 'module4', title: 'Understanding interface' },
        { id: 'module5', title: 'Datasource & Power Query' },
        { id: 'module6', title: 'Datamodeling' },
        { id: 'module7', title: 'DAX' },
        { id: 'module8', title: 'Data Visualization' },
        { id: 'module9', title: 'patterns' },
        { id: 'module10', title: 'publishing' },
        { id: 'module11', title: 'services' },
        // { id: 'module12', title: 'SDS' },

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
            // case 'module12':
            //     return(
            //         <main>
            //             <div className='animate-fade-in-up'>
                            
            //                     <h1 id='module12' className='text-4xl md:text-5xl font-extra-bold mb-8 text-center'>
                                    
            //                     </h1>
            //                     <div className='max-w-6xl mx-auto'>
            //                         <h2 className='text-2xl font-bold text-slate-900 mb-3'>
                                        
            //                         </h2>
            //                         <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                                        
            //                         </p>
            //                         <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
            //                             <li><strong></strong></li>
            //                             <li><strong></strong> </li>
            //                             <li><strong></strong> </li>
            //                         </ul>
            //                         <p className='text-lg text-gray-700 leading-relaxed mb-3'>
            //                             <strong></strong> 

            //                         </p>
            //                     </div>
                            
            //             </div>
            //         </main>
            //     );




            case 'module11':
                return (
                    <main>
                        <div className='animate-fade-in-up'>
                            <h1 id='module11' className='text-4xl md:text-5xl font-extra-bold mb-8 text-center'>
                                Power BI Service
                            </h1>
                            <div className='max-w-6xl mx-auto'>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3'>
                                    Post-Publication Architecture
                                </h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    Upon successful publication, the .pbix file's components are decomposed and stored separately in the Power BI Service:
                                </p>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Dataset:</strong> The semantic data model, including all tables, relationships, measures (DAX), and the Power Query (M) definition. This is the single source of truth and can serve as the data source for multiple reports.</li>
                                    <li><strong>Report:</strong> The presentation layer containing the visualizations, pages, and formatting. The report file connects to the published dataset.</li>
                                    <li><strong>Data:</strong> For Import Mode datasets, the compressed, columnar data is loaded into either shared cloud compute (Pro license) or dedicated Premium capacity. For DirectQuery/Live Connection, only the connection metadata is stored; queries are sent to the source system on-demand.</li>
                                </ul>
                                <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    <strong>Key Concept:</strong> The published Dataset and the original .pbix file are now independent. Changes made to the dataset in the Service (e.g., scheduled refresh) do not affect your local .pbix. To modify the model or report, you must edit and republish from Desktop, or use Power BI Desktop in Direct Query mode connected to the published dataset.

                                </p>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3'>Manual Data Refresh</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    Useful for ad-hoc updates after source data changes.
                                    <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li className='text-xl font-bold'>Process:</li>
                                        <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li>Navigate to the workspace containing your dataset.</li>
                                            <li>Select the Datasets + dataflows tab.</li>
                                            <li>Locate your dataset. Click the ellipsis (...) menu next to it.</li>
                                            <li>Select Refresh now.</li>
                                            <li>Monitor the status. A refresh icon will appear, and the Last Refresh timestamp will update upon completion.</li>
                                        </ol>
                                        <li><strong>Refresh History & Details:</strong> To inspect the outcome, select Schedule Refresh from the same menu, then navigate to the Refresh History section. This log shows success/failure status, start/end times, and detailed error messages for troubleshooting.</li>
                                    </ul>

                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3'>Configuring Scheduled Data Refresh</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    Automates the process of updating imported data on a defined cadence.

                                </p>
                                <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li className='text-xl font-bold'>Configuration Steps:</li>
                                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>From the dataset's ellipsis (...) menu, select Settings.</li>
                                        <li>Expand the Scheduled refresh section.</li>
                                        <li>Toggle "Keep your data up to date" to On.</li>
                                        <li>Set the Frequency (e.g., Daily, Hourly) and define the specific Time Zone and times.</li>
                                        <li className='text-xl font-bold'>Configure Data Source Credentials (Critical):</li>
                                        <li><strong>Optional:</strong> Enable "Refresh failed, send refresh notification" to get email alerts.</li>
                                        <li>Click Apply.</li>
                                    </ol>
                                    <li><strong>Refresh Limits:</strong> Pro licenses allow up to 8 refreshes per day. Premium workspaces allow up to 48 refreshes per day.</li>
                                </ul>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3'>Data Gateways for On-Premises Sources</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    The On-premises data gateway is a bridge that enables secure communication between the Power BI cloud service and data sources inside a private corporate network.

                                </p>
                                <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li className='text-xl font-bold'>Key Concepts & Setup:</li>
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Purpose:</strong> Allows scheduled refresh and DirectQuery/Live Connection for data sources that are not natively accessible from the internet (e.g., SQL Server on a local server, SharePoint on-premises, Oracle DB).</li>
                                        <li><strong>Installation:</strong> The gateway software must be installed on a dedicated, always-on machine within the on-premises network. It runs as a Windows service.</li>
                                        <li className='text-xl font-bold'>Configuration in the Cloud:</li>
                                        <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li>After installation, sign into the gateway with an Entra ID account that has admin rights in the Power BI Service.</li>
                                            <li>In the Power BI Service (Settings &gt; Manage gateways), you will see the registered gateway.</li>
                                            <li>Add Data Sources to the gateway, specifying the exact server name, database, and authentication method (often a dedicated service account with read permissions).</li>
                                        </ol>
                                        <li><strong>Mapping in Dataset Settings:</strong> When configuring scheduled refresh for a dataset that uses on-premises sources, you will be prompted to select the appropriate Gateway and the pre-configured Data Source to use for the connection.</li>
                                    </ul>
                                    <li><strong>Modes:</strong> Standard Mode (shared for multiple users) is typical for organizational use. Personal Mode (deprecated) ties the gateway to a single user.</li>
                                </ul>

                            </div>
                        </div>
                    </main>
                );




            case 'module10':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="module10" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                                Services of Power Bi
                            </h1>
                            <div className='max-w-6xl mx-auto'>
                                <h2 className='text-4xl font-bold text-slate-900 mb-6'> Publishing and Sharing Reports via Power BI Service</h2>

                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Understanding Power BI Service</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-4'>
                                    Power BI Service is the cloud-based <strong>Software-as-a-Service (SaaS)</strong> component of the Power BI platform. It is the central hub for <strong>report distribution, collaboration, governance, and consumption</strong>. While Power BI Desktop is the development environment, the Service is where published content is hosted, scheduled data refreshes occur, and enterprise-wide access is managed.
                                    <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li className='text-xl font-bold'>Core Capabilities:</li>
                                        <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Report Hosting & Consumption:</strong> View and interact with published reports via a web browser or mobile apps.</li>
                                            <li><strong>Dashboard Creation:</strong> Pin visuals from multiple reports to create consolidated, single-view dashboards.</li>
                                            <li><strong>Data Refresh Management:</strong> Schedule and monitor automated data refreshes from cloud and on-premises sources (via the Power BI Gateway).</li>
                                            <li><strong>Collaboration & Sharing:</strong> Securely share content with internal and external users.</li>
                                            <li><strong>Content Management:</strong> Organize reports, datasets, and dashboards within workspaces.</li>
                                            <li><strong>App Publishing:</strong> Bundle related content (reports, dashboards) into apps for streamlined distribution to large audiences.</li>
                                        </ul>
                                        <li><strong>Access:</strong> Primary interface is app.powerbi.com.</li>
                                    </ul>
                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3'>Authentication and Sign-In</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                                    Power BI Service uses Microsoft Entra ID (formerly Azure Active Directory) for identity and access management.
                                </p>
                                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Account Requirement:</strong> A work or school account (associated with Microsoft 365/Entra ID) is required for full functionality. Personal Microsoft accounts have very limited capabilities.</li>
                                    <li><strong>Sign-In Process:</strong> Navigate to app.powerbi.com and enter your organizational credentials. Authentication is managed by your IT department's Entra ID tenant.</li>
                                    <li><strong>Licensing:</strong> Access requires either a Power BI Pro or Premium Per User (PPU) license assigned to your account, or for the workspace to be hosted on a Premium capacity (P-SKU/EM/A SKU). A Free license allows consumption only within a Premium capacity.</li>
                                </ol>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3'>Publishing a Report from Power BI Desktop</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                                    Publishing transfers the .pbix file's semantic model and report definition to the cloud service.


                                </p>
                                <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li className='text-xl font-bold'>Procedure:</li>
                                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Finalize the Report:</strong> Ensure all data transformations, modeling, and report design in Power BI Desktop are complete.</li>
                                        <li><strong>Initiate Publish:</strong> Click Publish in the Home ribbon of Power BI Desktop, or select File → Publish → Publish to Power BI.</li>
                                        <li><strong>Authentication:</strong> If not already signed in, a prompt will appear to authenticate with your Entra ID account.</li>
                                        <li><strong>Select Destination Workspace:</strong> A dialog appears listing all workspaces you have access to. Select the target workspace (e.g., "My Workspace" for personal testing, or a specific team workspace).</li>
                                        <li><strong>Upload & Processing:</strong> The .pbix file is uploaded, validated, and processed. The report and its underlying dataset are created as separate items in the Service. A success message appears upon completion.</li>
                                        <li><strong>Quick Access:</strong> Click "Open 'your-report.pbix' in Power BI" in the success dialog to launch the report immediately in your browser.</li>
                                    </ol>
                                    <li className='text-xl font-bold'>Important Notes Post-Publish:</li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>The published dataset is the semantic model. Multiple reports can be built on top of the same published dataset.</li>
                                        <li>Scheduled Refresh must be configured separately in the Service for imported data. DirectQuery/Live Connection datasets connect on-demand.</li>
                                        <li>Gateway configuration is required to refresh data from on-premises sources.</li>
                                    </ul>
                                </ul>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3 '>Understanding Workspace Architecture and Strategy</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-4'>Workspaces are the fundamental containers for organizing, securing, and collaborating on Power BI content.</p>
                                <div className="table-container shadow-sm border border-slate-400">
                                    <table className="w-full border-collapse">
                                        <thead className="bg-slate-100">
                                            <tr>
                                                <th className="border border-slate-400 p-3 text-left">Workspace Type</th>
                                                <th className="border border-slate-400 p-3 text-left">Purpose & Audience</th>
                                                <th className="border border-slate-400 p-3 text-left">Key Characteristics</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            <tr>
                                                <td className="border border-slate-400 p-3 text-gray-900">My Workspace</td>
                                                <td className="border border-slate-400 p-3 text-gray-900">Personal sandbox for individual development and testing.</td>
                                                <td className="border border-slate-400 p-3 text-gray-900">
                                                    <ul className='list-disc pl-6 space-y-1 text-gray-700 mb-4'>
                                                        <li>Content is private by default.</li>
                                                        <li>Cannot be shared with others directly.</li>
                                                        <li> Not suitable for production content.</li>
                                                    </ul></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-400 p-3 text-gray-900">Workspaces</td>
                                                <td className="border border-slate-400 p-3 text-gray-900">Collaborative containers for team-based development and production content.</td>
                                                <td className="border border-slate-400 p-3 text-gray-900">
                                                    <ul className='list-disc pl-6 space-y-1 text-gray-700 mb-4'>
                                                        <li>Requires Power BI Pro/PPU licenses for members to collaborate.</li>
                                                        <li>Members have defined roles (Admin, Member, Contributor, Viewer).</li>
                                                        <li>The standard unit for developing and deploying shared content.</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-400 p-3 text-gray-900">Premium Workspaces</td>
                                                <td className="border border-slate-400 p-3 text-gray-900">Enterprise-grade workspaces with advanced capabilities, dedicated capacity, and broad distribution.</td>
                                                <td className="border border-slate-400 p-3 text-gray-900">
                                                    <ul className='list-disc pl-6 space-y-1 text-gray-700 mb-4'>
                                                        <li>Hosted on Premium capacity (dedicated cloud resources).</li>
                                                        <li>Enables free user consumption (users without Pro licenses can view content).</li>
                                                        <li>Supports larger datasets, higher refresh rates, and advanced AI features.</li>
                                                        <li>Essential for organization-wide reporting applications.</li>
                                                    </ul>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li className='text-xl font-bold'>Workspace Roles:</li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Admin:</strong> Full control; can add members, manage roles, and configure workspace settings.</li>
                                        <li><strong>Member:</strong> Can add, modify, and delete content within the workspace.</li>
                                        <li><strong>Contributor:</strong> Can modify existing content but cannot add new members or delete certain items.</li>
                                        <li><strong>Viewer:</strong> Can only view and interact with published content (requires the underlying workspace to be on Premium capacity for free users).</li>
                                    </ul>
                                    <li><strong>Best Practice:</strong> Adopt a development lifecycle using separate workspaces for Development, Test/UAT, and Production. Content is promoted between them via deployment pipelines.</li>
                                </ul>
                            </div>
                        </div>
                    </main>
                );





            case 'module9':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="module9" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                                Designing Effective Reports
                            </h1>
                            <div className='max-w-6xl mx-auto'>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6"> Report Layout Best Practices</h2>
                                {/* <h2 className='text-2xl font-bold text-slate-900 mb-4'></h2> */}
                                <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    Effective layout directs attention, communicates hierarchy, and enhances usability.
                                    < ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li className='text-xl font-bold'>Strategic Visual Placement (F-Pattern & Z-Pattern):</li>
                                        <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Primary Metric Zone (Top-Left):</strong> Place the most critical KPI or summary card here, as Western reading patterns start top-left.</li>
                                            <li><strong>Hierarchy Flow:</strong> Arrange visuals in order of importance, guiding the user's eye naturally down and across the page.</li>
                                            <li><strong>Action-Oriented Placement:</strong> Position slicers and interactive elements at the top or in a consistent sidebar for easy access.</li>
                                        </ul>
                                        <li className='text-xl font-bold'>Logical Grouping and Containment:</li>
                                        <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li>Use subtle shapes (rectangles with light borders or fill) or consistent background colors to visually group related metrics (e.g., all Financial KPIs, all Operational metrics).</li>
                                            <li>Maintain consistent margins and padding within and between groups.</li>
                                            {/* <li></li> */}
                                        </ul>
                                        <li className='text-xl font-bold'>Alignment and Grid Structure:</li>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li>Strictly use the alignment tools (Format ribbon: Align Left, Distribute Vertically, etc.) and snap-to-grid feature.</li>
                                            <li>Ensure visual edges align across the canvas. Misalignment is the primary marker of an unprofessional report.</li>
                                            {/* <li></li> */}
                                        </ul>
                                        <li className='text-xl font-bold'>Strategic Use of White Space:</li>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li>White space (negative space) is not empty space; it's a design element that reduces cognitive load, prevents visual crowding, and improves readability.</li>
                                            <li>Provide ample padding between visuals (a minimum of 10-15 pixels is recommended).</li>
                                            {/* <li></li> */}
                                        </ul>
                                        <li className='text-xl font-bold'>Responsive Design for Mobile Consumption:</li>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li>Always check the Mobile Layout view (View → Mobile Layout).</li>
                                            <li>In this view, you can reorder, resize, and specifically arrange visuals for the mobile canvas, which is independent of the desktop layout.</li>
                                            {/* <li></li> */}
                                        </ul>
                                    </ol>
                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Selecting the Appropriate Visual Type</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    The choice of visualization is driven by the analytical question and the data relationship you intend to communicate.


                                </p>
                                <h2 className='text-xl font-bold text-slate-900 mb-4'>Guiding Decision Framework:</h2>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Objective:</strong> What is the precise business question?</li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Compare values? → Bar/Column chart.</li>
                                        <li>Show trend over time? → Line chart.</li>
                                        <li>See part of a whole? → Stacked bar or Waterfall (avoid Pie charts for comparison).</li>
                                        <li>Analyze distribution? → Histogram or Box and whisker.</li>
                                        <li>Show relationship? → Scatter chart.</li>
                                        <li>Display exact numbers? → Table or Matrix.</li>
                                    </ul>
                                    <li><strong>Audience:</strong> Executive, analyst, or operational staff? Executives need high-level KPIs and trends (Cards, Line charts). Analysts need detail and drill-through capability (Matrices, Tables).</li>
                                    <li><strong>Desired Action:</strong> Should the user monitor a status, investigate a variance, or compare performance? Design the visual to facilitate that action.</li>
                                </ul>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    <strong>Cardinal Rule:</strong> Prioritize clarity and accuracy over decorative complexity. A well-formatted basic chart is superior to a complex, poorly understood custom visual.

                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Strategic Use of Color and Themes</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    Color is a powerful tool for encoding information and guiding interpretation.

                                </div>
                                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li className='text-xl font-bold'>Establish a Cohesive Palette:</li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Import corporate brand colors via a JSON theme file (View → Themes → Browse for themes).</li>
                                        <li>Define a Data Colors sequence in the theme that is used consistently across all reports.</li>
                                    </ul>
                                    <li className='text-xl font-bold'>Apply Color Semantically:</li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Use color to encode meaning. For example, establish and consistently use: Red for Negative/Variance/Bad, Green/Yellow for Positive/On-Target/Good, Blue for Neutral/Informational.</li>
                                        <li>Avoid using color purely for decoration.</li>
                                    </ul>
                                    <li className='text-xl font-bold'>Maintain Accessibility:</li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Approximately 8% of men have color vision deficiency (CVD). Avoid problematic color combinations like Red/Green or Blue/Purple as the sole differentiators.</li>
                                        <li>Use tools to simulate CVD views. Add textures, patterns, or data labels to convey meaning redundantly.</li>
                                    </ul>
                                    <li className='text-xl font-bold'>Implement Report Themes:</li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>A Power BI Theme (.json) controls default colors, fonts, visual styles, and page background. Applying a global theme ensures visual consistency across an organization's entire report portfolio.</li>
                                        {/* <li></li> */}
                                    </ul>
                                </ol>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Effective Use of Titles, Labels, and Annotations</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    Textual elements provide the necessary context for users to interpret visuals autonomously.

                                </p>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Descriptive Titles:</strong> Every visual must have a clear, concise title that answers "What am I looking at?" Replace default titles like "Column chart" with "Monthly Sales by Region".</li>
                                    <li><strong>Fully Labeled Axes:</strong> Axis titles should include units (e.g., "Revenue (USD Millions)", "Quantity (Units)"). Ensure date axes are formatted clearly (e.g., "Jan 2024").</li>
                                    <li><strong>Judicious Use of Data Labels:</strong> Enable data labels when precise values are crucial, but disable them if they cause clutter (e.g., on dense line charts). Control their format and position.</li>
                                    <li><strong>Enriched Tooltips:</strong> Use the Tooltips field well to add contextual fields that appear on hover. For complex insights, create dedicated Tooltip Pages that serve as detailed, pop-up drill-throughs.</li>
                                </ul>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>
                                    Principles for Maximizing Readability

                                </h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    Readability ensures information is absorbed quickly and accurately.
                                </p>
                                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li className='text-lg font-bold'>Typography Hierarchy:</li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Use a maximum of two complementary fonts (e.g., one sans-serif for titles, one sans-serif for body).</li>
                                        <li>Establish a clear hierarchy: <strong>Page Title &lt; Visual Group Header &lt; Visual Title &lt; Axis Label &lt; Data Label</strong>.</li>
                                        {/* <li></li> */}
                                    </ul>
                                    <li className='text-lg font-bold'>Optimal Contrast:</li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Ensure high contrast between text and its background. Dark gray text on a white background is standard and reduces eye strain compared to pure black.</li>
                                        <li>Test contrast ratios for accessibility compliance.</li>
                                        {/* <li></li> */}
                                    </ul>
                                    <li className='text-lg font-bold'>Consistent Iconography:</li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Use simple, universally understood icons from the Insert tab sparingly to denote actions (filter, drill, navigate) or categories.</li>
                                        <li>Maintain consistency in icon style (filled vs. outline) across the report.</li>
                                        {/* <li></li> */}
                                    </ul>
                                    <li className='text-lg font-bold'>Intuitive Navigation for Multi-Page Reports:</li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Use Buttons with clear icons/text (e.g., "Next Page: Financial Details") linked to Bookmarks or page navigation.</li>
                                        <li>Consider a Summary/Dashboard page that links to detailed Analysis pages via drill-through actions or buttons.</li>
                                        <li>Always provide a clear way to return to the main dashboard.</li>
                                    </ul>
                                </ol>
                                <p className='text-lg text-gray-700 font-bold leading-relaxed mb-6'>
                                    The ultimate goal of report design is to minimize the time and effort required for the user to find the insight and maximize the clarity of the message conveyed.

                                </p>

                            </div>
                        </div>
                    </main>
                );




            case 'introduction':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="introduction" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                                Power BI Tutorial
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 text-center">
                                Learn how to transform data into interactive insights with Power BI
                            </p>

                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-4xl font-bold text-slate-900 mb-6">Introduction to Business Intelligence & Power BI</h2>
                                <br />
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is Business Intelligence (BI)?</h2>
                                <div className="text-lg text-gray-700 leading-relaxed">
                                    <p className="mb-4"><strong>Formal Definition:</strong> Business Intelligence (BI) is a technology-driven process for analyzing data and presenting actionable information to support executive, managerial, and operational decision-making. The objective is to interpret vast volumes of data to identify strategic opportunities.</p>
                                    <p className="mb-4"><strong>Core Concept:</strong> BI transforms raw, unstructured data into meaningful insights through data aggregation, analysis, and visualization. It answers critical business questions regarding performance, market trends, and operational efficiency.</p>
                                    <p className="mb-2"><strong>The BI Workflow: </strong>It is a cyclical process involving:</p>
                                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
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
                                {/* <video
                                    width="800"
                                    controls
                                    preload="metadata"
                                    playsInline
                                >
                                    <source
                                        src="https://res.cloudinary.com/dyuounp0c/video/upload/f_auto,q_auto/v1772204476/Introduction_to_Full_Stack_Development-20260227_154813-Meeting_Recording_rjmiuu.mp4"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video> */}
                            </div>
                        </div>
                    </main>
                );

            case 'module2':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="module2" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                                Overview and comparision.
                            </h1>
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-4xl font-bold text-slate-900 mb-6"> Power BI Competitive Landscape and Tool Selection</h2>
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
                                <div className="table-container shadow-sm border border-slate-400">
                                    <table className="w-full border-collapse">
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
                                </div>

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



            case 'module3':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="module3" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                                Installation of Power BI.
                            </h1>
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-4xl font-bold text-slate-900 mb-6">Understanding Power BI Desktop: The Primary Authoring Environment</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">Power BI Desktop is the comprehensive, free desktop application that serves as the core development environment for Power BI solutions. It consolidates three critical functionalities into a single interface:
                                </p>
                                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Data Connectivity & Transformation (Power Query):</strong> The <strong>"Get Data"</strong> experience, powered by the Power Query engine, provides access to hundreds of data connectors and an intuitive interface for data shaping (ETL/ELT).</li>
                                    <li><strong>Data Modeling & Analytics:</strong> The <strong>Model view</strong> enables the creation of a structured semantic layer by defining table relationships, hierarchies, and sophisticated business logic through the DAX (Data Analysis Expressions) formula language.</li>
                                    <li><strong>Interactive Report Authoring:</strong> The <strong>Report view</strong> is a drag-and-drop canvas for building interactive, multi-page visualizations using a library of built-in and custom visuals.</li>
                                </ol>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    <strong>Architectural Role:</strong> Desktop is where the <strong>semantic model</strong> is built. This model, once published to the Power BI Service, becomes the single source of truth for reports, dashboards, and "Analyze in Excel" functionality.
                                </p>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">System Requirements and Prerequisites</h2>
                                <div className='lext-lg text-gray-700 leading-relaxed mb-6'>
                                    To ensure optimal performance, particularly with moderate to large datasets, the following system specifications are recommended:

                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Operating System:</strong> Windows 10/11 (64-bit). Windows 8.1 is the minimum supported version. Not natively available for macOS or Linux.</li>
                                        <li><strong>Processor:</strong> 64-bit (x64) processor. A modern multi-core CPU (Intel i5/i7 or AMD Ryzen 5/7 equivalent or better) is recommended for complex data models.</li>
                                        <li><strong>Memory (RAM):</strong>Minimum 4 GB. 8 GB is the practical minimum for business use. 16 GB or more is strongly recommended for working with datasets exceeding several hundred megabytes or using multiple applications concurrently.</li>
                                        <li><strong>Display:</strong> A minimum resolution of 1440 x 900 or 1600 x 900 (16:9) is required. Higher resolutions (Full HD/4K) provide better canvas real estate.</li>
                                        <li><strong>.NET Framework:</strong> Version 4.6.2 or later is required and is typically included with modern Windows installations.</li>
                                        <li><strong>Additional Considerations:</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Storage:</strong> Solid State Drive (SSD) storage is highly recommended to improve model loading and save/refresh performance.</li>
                                                <li><strong>Internet Access:</strong> Required for initial installation, updates, and using cloud-based data connectors.</li>
                                            </ul>
                                        </li>
                                    </ul></div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Installation Methods</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    There are two primary distribution channels for Power BI Desktop, each with implications for update management.

                                </p>
                                <ol className=' pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Method 1: Microsoft Store (Recommended for Most Individual Users)</strong></li>
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Process:</strong> Access the Microsoft Store application on Windows, search for "Power BI Desktop," and select Get.</li>
                                        <li><strong>Advantages:</strong></li>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Automatic Updates:</strong> The application updates silently in the background, ensuring you always have the latest monthly version with new features and security patches.</li>
                                            <li><strong>Simplified Management:</strong> No manual downloads or installations for future versions.</li>
                                        </ul>
                                    </ul>
                                    <li><strong>Consideration:</strong> Some organizational Group Policies may restrict access to the Microsoft Store.</li>
                                    <li><strong>Method 2: Direct Download (MSI Package) from Official Website</strong></li>
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Process:</strong> Download the executable (.msi) installer from powerbi.microsoft.com/desktop.</li>
                                        <li><strong>Advantages:</strong></li>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Controlled Deployment:</strong> Ideal for IT administrators who need to deploy and standardize a specific version across an organization via software distribution tools (SCCM, Intune).</li>
                                            <li><strong>Bypasses Store Restrictions:</strong> Can be installed on systems where the Microsoft Store is unavailable or disabled.</li>
                                        </ul>
                                        <li><strong>Disadvantage:</strong> Requires manual download and installation of new versions to receive updates.</li>
                                    </ul>


                                </ol>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    <strong>Enterprise Note:</strong> For large-scale deployments, consider Power BI Report Server, which includes a dedicated version of Power BI Desktop optimized for on-premises report publishing.

                                </p>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'> Initial Configuration and Exploration</h2>
                                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Upon first launch, you are presented with the start dialog.

                                    <h3 className='text-xl font-bold text-slate-900 mb-4'>Key Interface Areas to Note:</h3>
                                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Start Page:</strong> Provides quick access to:</li>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li>Recent reports</li>
                                            <li>Links to open other reports</li>
                                            <li>"Get data" button to begin a new project.</li>
                                        </ul>
                                        <li><strong>Sample Datasets:</strong> Highly recommended for new users. Select "Learn more about Power BI with sample data" to load pre-built models (e.g., Retail Analysis, Financial Sample). These demonstrate data modeling, DAX, and report design best practices.</li>
                                        <li><strong>Ribbon Interface:</strong> Familiar Microsoft-style ribbon (Home, Insert, Modeling, View, Help) containing core functionalities.</li>
                                        <li><strong>Views Toggle:</strong> Icons on the left sidebar to switch between:</li>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Report View:</strong> (Canvas icon) For building visualizations.</li>
                                            <li><strong>Data View:</strong> (Table icon) For inspecting raw data tables.</li>
                                            <li><strong>Model View:</strong> (Relationship icon) For viewing and managing table relationships.</li>
                                        </ul>
                                    </ol>
                                    <h3 className='text-xl font-bold text-slate-900 mb-4'>Recommended First Steps:</h3>
                                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Explore the Sample Reports:</strong></li>
                                        <li><strong>Tour the Panes:</strong></li>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Fields Pane:</strong> Lists all tables and columns from your data model.</li>
                                            <li><strong>Visualizations Pane:</strong> Contains visual types and formatting options.</li>
                                            <li><strong>Filters Pane:</strong> For applying report, page, and visual-level filters.</li>
                                        </ul>
                                        <li><strong>Set Global Options (Optional but Recommended):</strong><br /> Navigate to <strong>File → Options and Settings → Options</strong>. Under Current File → Data Load, consider setting the <strong>"Time Intelligence"</strong> option. This ensures proper date table handling for time-based analysis.</li>
                                    </ol>
                                    Power BI Desktop is now ready for development. The subsequent phase involves connecting to a data source, which initiates the analytics workflow.


                                </div>
                                {/* <h2 className='text-2xl font-bold text-slate-900 mb-4'>POWER BI DESKTOP WELCOME SCREEN</h2> */}
                                {/* <div>
                                    <image></image>
                                </div> */}


                            </div>
                        </div>
                    </main>

                );



            case 'module4':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="module4" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                                Interface of Power BI.
                            </h1>
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-4xl font-bold text-slate-900 mb-6">Ribbon Overview: The Command Center</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    The ribbon follows the standard Microsoft Office Fluent UI pattern, organizing functionality into context-sensitive tabs. Understanding each tab’s purpose is fundamental to efficient workflow.
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                        <li><strong>Home Tab:</strong> Core operations for the report lifecycle.
                                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                                <li><strong>Clipboard:</strong> Standard copy/paste/cut.</li>
                                                <li><strong>Data: "Get Data"</strong>(launches connector selection), <strong>"Refresh"</strong> (updates data in the current session), <strong>"Enter Data"</strong> (create an ad-hoc table).</li>
                                                <li><strong>Queries:</strong>Opens the <strong>Power Query Editor</strong> for advanced data transformation.</li>
                                                <li><strong>Share: "Publish"</strong> sends the report to the Power BI Service.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Insert Tab:</strong> Adds objects to the report canvas.
                                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                                <li><strong>Visuals:</strong> Inserts specific chart types (e.g., Stacked Bar Chart, Scatter Chart) directly.</li>
                                                <li><strong>Elements:</strong> Adds <strong>Text Boxes, Images, Shapes, and Buttons</strong> for annotation and navigation.</li>
                                                <li><strong>Q&A:</strong> Inserts a <strong>Q&A visual</strong>, allowing report consumers to ask natural language questions.</li>
                                                {/* <li><strong></strong></li> */}
                                            </ul>
                                        </li>
                                        <li><strong>Modeling Tab:</strong> Tools for building the analytical semantic layer.
                                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                                <li><strong>Calculations:</strong> Creates New Measures, New Columns, and manages Quick Measures.</li>
                                                <li><strong>Relationships:</strong> Manages relationships and creates new ones via the "Manage Relationships" dialog.</li>
                                                <li><strong>Properties:</strong> Sets Data Category (e.g., Geography, URL), Format (currency, percentage), and Sort By Column (critical for custom sorting).</li>
                                                <li><strong>Security:</strong> Manages Row-Level Security (RLS) roles for the local model.</li>
                                            </ul>
                                        </li>
                                        <li><strong>View Tab:</strong> Controls the development environment.
                                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                                <li><strong>Report Views:</strong> Toggles between Report, Data, and Model views.</li>
                                                <li><strong>Panes:</strong> Shows/hides essential panes (Bookmarks, Selection, Performance Analyzer).</li>
                                                <li><strong>Themes:</strong> Applies or customizes color and formatting themes across the entire report.</li>
                                                <li><strong>Layout:</strong> Adjusts canvas zoom and fit-to-page settings.</li>
                                            </ul>
                                        </li>
                                    </ul>

                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4"> Report View: The Visualization Workspace</h2>
                                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                                    The primary view for designing the end-user experience. Its layout is optimized for building interactive dashboards.

                                    <ul>
                                        <li><strong>Central Canvas:</strong> A resizable, grid-snapped workspace. This is where visuals are placed, arranged, and formatted.</li>
                                        <li><strong>Right-Side Panes (Docked by Default):</strong></li>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Visualizations Pane (Top):</strong> For building and formatting visuals.</li>
                                            <li><strong>Fields Pane (Middle):</strong> The data model explorer.</li>
                                            <li><strong>Filters Pane (Bottom):</strong> For applying slicers and filters.</li>
                                        </ul>
                                        <li><strong>Bottom Navigation Bar:</strong> Lists all report pages. Allows for adding (+), renaming, reordering, and deleting pages.</li>
                                    </ul>
                                    <strong>Key Interaction:</strong> Selecting a visual on the canvas activates context-specific formatting options in the Visualizations pane and highlights the fields used in the Fields pane.

                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data View: The Tabular Data Inspector</h2>
                                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Accessed via the left navigation bar (table icon). This view provides a spreadsheet-like interface for inspecting the underlying data after it has been loaded into the model.

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                        <li><strong>Table Selection:</strong> A dropdown or list on the left allows you to select which table from the model to inspect.</li>
                                        <li><strong>Data Grid:</strong> Displays the rows and columns of the selected table.
                                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                                <li>Column headers show data type icons (e.g., 123 for whole number, ABC for text, ∑ for numeric columns aggregated by default).</li>
                                                <li>Allows for basic sorting and filtering directly within the grid.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Purpose:</strong> Used to verify data quality, check values of calculated columns/measures, and confirm data types post-transformation. It shows the data as stored in the in-memory model, not the raw source data.</li>
                                    </ul>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Model View: The Relationship Diagram</h2>
                                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Accessed via the left navigation bar (relationship icon). This is a critical view for data modelers, showing the schema of the semantic model.
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                        <li><strong>Table Representations:</strong> Each table is displayed as a box listing its columns. Key columns (used in relationships) are often bolded. Measures appear at the top of their respective table, indicated by a calculator icon (∑).</li>
                                        <li><strong>Relationship Lines:</strong> Connect related tables. Key properties are visible:
                                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                                <li><strong>Cardinality:</strong> Displayed as 1 (one side) or * (many side) on the line ends (e.g., 1 → * indicates a one-to-many relationship).</li>
                                                <li><strong>Filter Direction:</strong> A single or double-headed arrow indicates "Single" (filter flows from one side to many side) or "Both" (bi-directional cross-filtering, use with caution).</li>
                                                <li><strong>Active Status:</strong> A solid line indicates an active relationship (the default filter path); a dashed line indicates an inactive relationship.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Layout:</strong> Tables can be dragged and arranged manually to create a logical, star-schema-like diagram for clarity.</li>
                                    </ul>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4"> Fields Pane: The Data Model Explorer</h2>
                                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                                    This pane is the primary bridge between the data model and the report canvas. It presents a hierarchical view of the model's metadata.


                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                        <li><strong>Structure:</strong> Lists all tables in the model. Clicking the expand/collapse arrow next to a table reveals its columns and measures.</li>
                                        <li><strong>Field Icons:</strong>
                                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                                <li><strong>Column:</strong> Blue checkbox (e.g., Product[Category]).</li>
                                                <li><strong>Measure:</strong></li>
                                                <li><strong>Hierarchy:</strong> Calculator icon ((∑) (e.g., Sales[Total Revenue])).</li>
                                                <li><strong>Key Column:</strong> Stacked column icon (appears when a hierarchy is defined).</li>
                                            </ul>
                                        </li>
                                        <li><strong>Interaction:</strong> Fields are dragged from this pane into the Visualizations pane's field wells or directly onto the canvas to create visuals.</li>
                                    </ul>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4"> Visualizations Pane: The Visual Builder</h2>
                                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                                    This pane is context-sensitive and changes based on the selected visual on the canvas.

                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Visualization Gallery (Icons):</strong> A palette of available visual types. Built-in visuals include standard charts, matrices, cards, and maps. Custom visuals are added via the ellipsis (...).</li>
                                        <li><strong>Field Wells/Areas:</strong> The area below the icons where fields are placed to build the visual. Common wells include:
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Axis (Category), Legend (Series), Values:</strong> For most charts.</li>
                                                <li><strong>Rows, Columns, Values:</strong> For table/matrix visuals.</li>
                                                <li><strong>Location, Latitude, Longitude:</strong> For map visuals.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Formatting Section (Paint Roller Icon):</strong> Expands to reveal comprehensive formatting controls for the selected visual, organized into sections (General, Title, Data colors, etc.). This is where you customize the visual's appearance.</li>
                                    </ul>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Filters Pane: The Contextual Filter Manager</h2>
                                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Provides multi-tiered filtering capabilities, essential for creating focused reports.

                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Filter Levels:</strong></li>
                                        <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Visual-Level Filter:</strong> Applies only to a single selected visual.</li>
                                            <li><strong>Page-Level Filter:</strong> Applies to all visuals on the current report page.</li>
                                            <li><strong>Report-Level Filter:</strong> Applies to all visuals across all pages in the report.</li>
                                            <li><strong>Drillthrough Filter:</strong> A special context for Drillthrough pages.</li>
                                        </ol>
                                        <li><strong>Filter Types:</strong> For each field added to a filter level, you can apply:</li>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Basic Filtering:</strong> Simple include/exclude lists for categorical data, or ranges for numeric/dates.</li>
                                            <li><strong>Advanced Filtering:</strong> Use operators (e.g., "contains", "begins with", "is not blank") to build logic.</li>
                                        </ul>
                                        <li><strong>Slicer Visuals:</strong> While slicers are created from the Visualizations pane, they functionally interact with the Filters pane logic, providing an interactive filter experience on the canvas.</li>
                                    </ul>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Report Canvas and Page Navigation: The Design Surface</h2>
                                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                                    The canvas is the primary design space where the user experience is crafted.
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Canvas Manipulation:</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Selection:</strong> Click to select individual visuals. Use Ctrl+Click or drag a selection box to select multiple.</li>
                                                <li><strong>Alignment & Distribution:</strong> Use the Format ribbon or right-click options to align, distribute, and size visuals consistently.</li>
                                                <li><strong>Grouping:</strong> Right-click selected visuals and choose Group to lock their relative positions.</li>
                                                <li><strong>Grid & Snapping:</strong> A background grid and snap-to-grid functionality aid in precise placement.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Page Navigation Bar:</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Thumbnails:</strong> Displays a small thumbnail of each page.</li>
                                                <li><strong>Management:</strong> Right-click a page thumbnail to Duplicate, Rename, Delete, Hide (from user view), or set as Tooltip Page.</li>
                                                <li><strong>Page Order:</strong> Pages can be reordered by dragging the thumbnails left or right. This order is preserved when published to the service.</li>
                                            </ul>
                                        </li>
                                        {/* <li><strong></strong></li> */}
                                    </ul>
                                    This interface provides a logical, tiered workspace separating data preparation, modeling, and presentation, enabling a clear and efficient report development process.
                                </div>










                            </div>

                        </div>
                    </main>
                );
            //                 function VideoPlayer() {
            // //   return (
            // //     <div>
            // //       <h2>My Video</h2>
            // //       <video width="720" controls>
            // //         <source 
            // //           src="https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/sample.mp4" 
            // //           type="video/mp4" 
            // //         />
            // //         Your browser does not support the video tag.
            // //       </video>
            // //     </div>
            // //   );
            // }

            // export default VideoPlayer;






            case 'module5':
                return (
                    <main>

                        <div className="animate-fade-in-up">

                            <h1 id="module5" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                                Connecting to Data Sources
                            </h1>
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-4xl font-bold text-slate-900 mb-6">Data Connectivity Framework</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    Power BI provides a comprehensive connectivity framework supporting over 500 native and certified connectors, organized into major categories:

                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>File-based Sources:</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Local Files:</strong> Excel (.xlsx, .xls), CSV/TXT, XML, JSON, PDF (requires Premium), Folder.</li>
                                                <li><strong>Cloud Files:</strong> SharePoint folder, OneDrive/OneDrive for Business, Azure Blob Storage.</li>

                                            </ul>
                                        </li>
                                        <li><strong>Relational & Non-Relational Databases:</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Microsoft Ecosystem:</strong> SQL Server, Azure SQL Database, Azure Synapse Analytics, Microsoft Access.</li>
                                                <li><strong>Cloud Platforms:</strong> Snowflake, Google BigQuery, Amazon Redshift, Databricks.</li>
                                                <li><strong>Other RDBMS:</strong> Oracle, MySQL, PostgreSQL, IBM Db2.</li>
                                                <li><strong>NoSQL:</strong> MongoDB, Cassandra.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Cloud Services & SaaS Applications:</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Microsoft:</strong> SharePoint Online Lists, Dynamics 365, Microsoft Exchange.</li>
                                                <li><strong>CRM & Marketing:</strong> Salesforce, HubSpot, Marketo.</li>
                                                <li><strong>Analytics:</strong> Google Analytics 4, Adobe Analytics.</li>
                                                <li><strong>ERP:</strong> SAP Business Warehouse, SAP HANA, Oracle Netsuite.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Other Protocols & Feeds:</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Web:</strong> Direct connection to web pages/APIs.</li>
                                                <li><strong>ODBC/OLE DB:</strong> Generic interface for legacy or proprietary systems.</li>
                                                <li><strong>OData:</strong> Standardized protocol for RESTful APIs.</li>
                                                {/* <li><strong></strong></li> */}
                                            </ul>
                                        </li>
                                    </ul>
                                    <strong>Connector Types:</strong> Connectors can use Import (in-memory), DirectQuery (live query), or Dual Mode (supports both), which is a critical architectural decision.

                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Importing Data from Microsoft Excel</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    Excel remains the most common initial data source. The import process establishes a structured connection.
                                </p>
                                <h2 className='text-xl font-bold text-slate-900 mb-4'>Procedure</h2>
                                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6 '>
                                    <li>Navigate to<strong>Home → Get Data → Excel workbook.</strong></li>
                                    <li>Browse and select the target .xlsx file.</li>
                                    <li>The <strong>Navigator</strong> dialog appears, presenting two primary views:</li>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                        <li><strong>Database View:</strong> Lists any defined Excel Tables (created via Ctrl+T) by name.</li>
                                        <li><strong>Worksheet View:</strong> Lists all worksheets containing data.</li>
                                    </ul>
                                    <li>Select one or more tables/worksheets. A preview is displayed.</li>
                                    <li>Choose the action:
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Load:</strong> Imports the selected data directly into the Power BI model.</li>
                                            <li><strong>Transform Data:</strong> Opens the selected data in the Power Query Editor for cleansing and shaping before loading.</li>
                                        </ul>
                                    </li>
                                </ol>

                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Selecting Data Objects: Tables, Sheets, and Ranges</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    The choice of object affects data structure and refresh reliability.
                                    <ul className='list-decimal pl-6 space-y-2 text-gray-700 mb-6 '>
                                        <li><strong>Named Excel Tables (Recommended):</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Advantages:</strong> Inherently structured with defined column headers, dynamic ranges, and often cleaner metadata. They represent a defined entity.</li>
                                                <li><strong>Behavior:</strong> Imports the table's range only. New rows added to the table are captured on refresh.</li>
                                            </ul>
                                        </li>
                                        {/* <li><strong></strong></li> */}
                                        <li><strong>Worksheets:</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Consideration:</strong> Imports all used cells in the worksheet, which may include unintended headers, footnotes, or stray data.</li>
                                                <li><strong>Risk:</strong> Layout changes (inserted/deleted rows/columns) can break the import or cause data misalignment.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Defined Ranges:</strong> The Navigator may also list specific named ranges defined in the Excel workbook.</li>

                                    </ul>
                                    <strong>Best practice:</strong> Structure source data in Excel using Formatted Tables. This ensures a robust, self-documenting connection point.

                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'> "Load" vs. "Transform Data": A Strategic Decision</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    This is not merely a procedural choice but a decision about where data transformation logic should reside.

                                    <ul className='list-decimal pl-6 space-y-2 text-gray-700 mb-6 '>
                                        <li><strong>"Load":</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Use Case:</strong> The source data is already perfectly structured and cleaned ("analyst-ready"). All required modeling will be done using DAX in the Power BI model view.</li>
                                                <li><strong>Implication:</strong> The connection is simple. Data is imported directly into the Vertipaq in-memory engine.</li>
                                            </ul>
                                        </li>
                                        {/* <li><strong></strong></li> */}
                                        <li><strong>"Transform Data" (Highly Recommended):</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Use Case:</strong> The source data requires cleansing (e.g., removing blanks, splitting columns, pivoting), normalization, or combination with other sources.</li>
                                                <li><strong>Implication:</strong> Opens the Power Query Editor, where you build a repeatable ETL (Extract, Transform, Load) sequence. This M-language query is stored and re-executes on every refresh, guaranteeing consistency.</li>
                                                <li><strong>Principle:</strong> "Transform early." It is more efficient and performant to filter, clean, and structure data in the Power Query layer than to handle it later with DAX in the model.</li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>

                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Data Transformation Using Power Query</h2>
                                <h2 className='text-xl font-bold text-slate-900 mb-4'>Introduction to Power Query Editor</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    Power Query is the data preparation and transformation engine embedded within Power BI. It employs a <strong>functional, non-destructive</strong> transformation paradigm. Every operation is recorded as a sequential step in a query, creating a reproducible data pipeline. This is superior to manual, one-time cleaning.


                                </p>
                                <h2 className='text-xl font-bold text-slate-900 mb-4'> Power Query Editor Interface</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    The editor is a dedicated window with a workflow-oriented layout.
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>6.2.1 Ribbon:</strong> Contextual tabs organize transformation commands.
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Home:</strong> Common operations like managing columns, reducing rows, and closing.</li>
                                                <li><strong>Transform:</strong> Column-specific operations (data type, group, pivot, parse).</li>
                                                <li><strong>Add Column:</strong> Operations that create new columns (custom, conditional, index).</li>
                                                <li><strong>View:</strong> Controls for viewing query dependencies, formula bar, and column distribution.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Queries Pane (Left Navigation):</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li>Lists all queries in the current Power BI file.</li>
                                                <li>Allows organization into Groups.</li>
                                                <li>Right-click on a query to Duplicate, Reference, or Delete. Referencing creates a new query based on the output of an existing one, promoting modular transformation.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Data Preview Window (Center):</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li>Displays a sample of the data for the selected query.</li>
                                                <li>Column headers show data type icons and allow for selection.</li>
                                                <li>Right-clicking a column or cell provides context-sensitive transformation options.</li>

                                            </ul>
                                        </li>
                                        <li><strong> Query Settings Pane (Right):</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Properties:</strong> Displays and allows editing of the Query Name.</li>
                                                <li><strong>Applied Steps:</strong> The most critical component. Lists every transformation in the order applied. Each step corresponds to a piece of M code. You can:
                                                    <ul className='list-[square] pl-6 space-y-2 text-gray-700 mb-6'>
                                                        <li><strong>Click any step</strong> to see the data state at that point.</li>
                                                        <li><strong>Delete a step</strong> to revert changes from that point onward.</li>
                                                        <li><strong>Edit a step </strong> by clicking the gear icon to modify its parameters.</li>
                                                        <li><strong>Re-order steps</strong> by dragging (where logically possible).</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <h2 className='text-xl font-bold text-slate-900 mb-4'> Foundational Data Cleaning Techniques</h2>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong> Managing Rows and Columns:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Remove Columns:</strong> Eliminate unnecessary data to improve model size and clarity.</li>
                                        <li><strong>Remove Rows:</strong> Options include Remove Top/Bottom Rows (for headers/footers), Remove Duplicates, and Remove Blank Rows.</li>

                                    </ul>
                                    <li><strong>Correcting Data Types:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Essential for correct aggregation, sorting, and relationships.</li>
                                        <li>Change via the data type icon in the column header or <strong>Transform → Data Type.</strong></li>
                                        <li><strong>Error Handling:</strong> Use <strong>Replace Errors</strong>(Transform tab) or <strong>Replace Values</strong> to handle conversion failures gracefully.</li>
                                    </ul>
                                    <li><strong>Renaming Columns:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Double-click the column header or use <strong>Transform → Rename.</strong></li>
                                        <li>Adopt a consistent naming convention <br />(e.g., CamelCase or Underscore_Separated).</li>

                                    </ul>
                                    <li><strong>Addressing Missing Values:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Replace Values:</strong> Substitute nulls with a default (0, "N/A").</li>
                                        <li><strong>Fill Down/Up:</strong> Propagates the last non-null value in a column, useful for grouped data.</li>

                                    </ul>
                                    <li><strong>Splitting and Merging Columns:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Split Column:</strong> By delimiter (comma, space), by number of characters, or by positions (lower/upper case transitions).</li>
                                        <li><strong>Merge Columns:</strong> Combines two or more columns with a specified separator.</li>

                                    </ul>
                                </ul>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Advanced Data Shaping Operations</h2>

                                {/* <h2 className='text-xl font-bold text-slate-900 mb-4'></h2> */}
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Merge Queries (Performing Joins):</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Combines rows from two queries based on matching key columns.</li>
                                        <li><strong>Join Kinds: Left Outer</strong> (keep all from first),<strong>Right Outer</strong>,<strong>Full Outer</strong>,<strong>Inner</strong> (keep matches only),<strong>Left Anti</strong> (keep non-matching from first).</li>
                                        <li>After merging, expand the new column to select which columns to bring from the second table.</li>
                                    </ul>
                                    <li><strong>Append Queries (Performing Unions):</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Vertically stacks rows from two or more queries with similar schemas.</li>
                                        <li>Crucial for consolidating periodic data (e.g., monthly files).</li>

                                    </ul>
                                    <li><strong>Pivot Column:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Transforms unique values from one column into new column headers.</li>
                                        <li>Requires choosing a <strong>Values Column</strong> and an <strong>Aggregation Function</strong> (Sum, Count, etc.).</li>

                                    </ul>
                                    <li><strong>Unpivot Columns:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>The inverse of pivot. Transforms multiple columns into an <strong>Attribute-Value</strong> pair (two new columns).</li>
                                        <li>Fundamental for normalizing "wide" data formats into an analysis-friendly "long" format.</li>

                                    </ul>
                                    <li><strong>Add Conditional Column:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2  text-gray-700 mb-6'>
                                        <li>Creates a new column based on logical if-then-else rules.</li>
                                        <li>Provides a user-friendly interface for building multi-branch conditions.</li>

                                    </ul>
                                </ul>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Finalizing the Transformation: Close & Apply</h2>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Process:</strong> Click Home → Close & Apply.</li>
                                    <li><strong>Action:</strong></li>
                                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Saves and compiles all M-code from every query.</li>
                                        <li>Executes the transformation sequence.</li>
                                        <li>Loads the final, transformed data into the Power BI data model (Vertipaq engine).</li>
                                        <li>Closes the Power Query Editor and returns focus to the main Power BI Desktop report view.</li>
                                    </ol>
                                    <li><strong>Refresh Behavior:</strong> The entire defined transformation sequence is re-executed upon any subsequent data refresh, ensuring data consistency.</li>
                                </ul>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>POWER QUERY EDITOR INTERFACE</h2>





                            </div>
                        </div>

                    </main>
                );



            case 'module6':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="module6" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                                Data Modeling in Power BI
                            </h1>
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-4xl font-bold text-slate-900 mb-6">The Foundation: What is Data Modeling?</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    Data modeling is the architectural process of designing the structure and semantics of your data within Power BI. It involves defining tables, establishing logical relationships between them, and enriching them with business logic (measures, hierarchies). The resulting semantic model acts as a translation layer between raw data sources and business user reporting, enabling consistent, accurate, and performant analytics.<br />
                                    <strong>Analogy:</strong> If raw data is an unorganized warehouse, the data model is the meticulously designed cataloging and shelving system that allows anyone to find and combine items efficiently.
                                </p>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Role of Relationships</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>Relationships are the fundamental linkages that allow a column in one table to be associated with a column in another table. They enable context propagation (filtering), which is the engine behind all cross-table analysis in Power BI.

                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Purpose:</strong> Without relationships, each table exists in isolation. Relationships allow you to, for example, slice Sales figures by Product Category or filter Customers by their Region, even though these attributes reside in different tables.</li>
                                        <li><strong>Key Principle:</strong> Relationships are based on single columns in each table and define how filters are transmitted across the model.</li>
                                    </ul>
                                </div>
                                <h2 className='text-lg font-bold text-gray-700 leading-relaxed mb-4'>Creating and Managing Relationships</h2>
                                <ul className=' pl-4 space-y-2 text-gray-700 text-lg mb-6'>
                                    <li className='text-xl'><strong>Methods:</strong>
                                        <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Autodetect:</strong> Power BI may automatically detect relationships if column names and data types match across tables.</li>
                                            <li><strong>Manual Creation in Model View:</strong> Drag a column from one table and drop it onto the related column in another table.</li>
                                            <li><strong>Manage Relationships Dialog:</strong> Use Modeling → Manage relationships for a comprehensive view to create, edit, or delete relationships.</li>
                                        </ol>
                                    </li>
                                    <li className='text-xl'><strong>Relationship Properties (Accessed by double-clicking the line):</strong>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Selected Tables and Columns:</strong> Confirms which columns are linked.</li>
                                            <li><strong>Cardinality:</strong> Defines the relationship type (see 7.4).</li>
                                            <li><strong>Cross filter direction:</strong> Defines filter flow (see 7.5).</li>
                                            <li><strong>Active/Inactive:</strong> Only one relationship between two tables can be active and serve as the default filter path. Inactive relationships can be invoked using the USERELATIONSHIP() function in DAX.</li>
                                        </ul>
                                    </li>

                                </ul>
                                <h2 className='text-xl font-bold text-gray-700 leading-relaxed mb-6'>Cardinality: Defining Table Relationship Types</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>Cardinality describes the uniqueness of values in the key columns being linked.</p>
                                <table className="w-full border-collapse border border-slate-400 mt-4 rounded-lg overflow-hidden shadow-sm">
                                    <thead className='bg-slate-100'>
                                        <tr className=''>
                                            <th className="border border-slate-400 p-3 text-left">Cardinality</th>
                                            <th className="border border-slate-400 p-3 text-left">Symbol</th>
                                            <th className="border border-slate-400 p-3 text-left">Description</th>
                                            <th className="border border-slate-400 p-3 text-left">Example</th>
                                            <th className="border border-slate-400 p-3 text-left">Key Consideration</th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white'>
                                        <tr>
                                            <td className="border border-slate-400 p-3 text-gray-900 font-bold">One-to-Many (1:*)</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">**1 → ***</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">A single row in one table relates to many rows in another.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">1 Product → Many Sales Transactions.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Most common. The "one" side table is a dimension (Product). The "many" side is a fact table (Sales).</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-400 p-3 font-bold text-gray-900">Many-to-One (*:1)</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">*** → 1**</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">The inverse of one-to-many. Viewpoint depends on which table you start from.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Many Sales Transactions → 1 Product.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Functionally identical to one-to-many.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-400 p-3 text-gray-900 font-bold">One-to-One (1:1)</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">1 → 1</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">A single row in one table relates to only one row in another.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">1 Employee → 1 Employee Tax Details.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Often indicates the tables could be merged without data duplication.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-400 p-3 text-gray-900 font-bold">Many-to-Many (:)</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">*** → ***</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Many rows in one table relate to many rows in another.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Many Students ↔ Many Courses.</td>
                                            <td className="border border-slate-400 p-3 text-gray-900">Use with extreme caution. Can lead to ambiguity and performance issues. Requires careful configuration of filter direction and may need a bridge table for correct logic.</td>
                                        </tr>
                                    </tbody>
                                </table><br />
                                <h2 className='text-xl font-bold text-gray-700 leading-relaxed mb-4'>Cross Filter Direction: Controlling Filter Flow</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>This property dictates how a filter selected in one table affects another table in the relationship.</p>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li className='text-xl'><strong>Single Direction (Most Common):</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Filters propagate from the "one" side to the "many" side.</li>
                                        <li>Example: Selecting a Product[Category] filters the Sales fact table. Selecting a Sales transaction does not filter the Product table.</li>
                                        <li>This aligns with dimensional modeling principles and ensures predictable behavior.</li>
                                    </ul>
                                    <li className='text-xl'><strong>Both Directions (Use Sparingly):</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Filters propagate in both directions</li>
                                        <li><strong>Risk:</strong> Can create ambiguous filter contexts, circular logic, and significant performance degradation, especially in complex models.</li>
                                        <li><strong>Appropriate Use Case:</strong> Typically reserved for specific many-to-many relationships or small, tightly coupled dimension tables where bidirectional filtering is a strict business requirement.</li>
                                    </ul>
                                </ul>
                                <h2 className='text-2xl font-bold text-gray-700 leading-relaxed mb-4'>Data Modeling Best Practices</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>Adhering to these principles is critical for building scalable, maintainable, and performant models.

                                </p>
                                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li className='text-xl'><strong>Adopt a Star Schema:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Fact Tables:</strong> Central tables containing transactional or measurable data (e.g., Sales, Inventory). Typically have many rows and foreign keys.</li>
                                        <li><strong>Dimension Tables:</strong> Surrounding tables describing the entities in the fact table (e.g., Product, Customer, Date). Typically have fewer rows and primary keys.</li>
                                        <li><strong>Benefit:</strong> Simplifies the model, improves performance, and makes it intuitive for report builders.</li>

                                    </ul>
                                    <li className='text-xl'><strong>Create a Dedicated Date Table:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>A must for any time-based analysis. It should have one row per day, covering all dates in your fact data.</li>
                                        <li>Include columns for all needed hierarchies: Year, Quarter, Month, Week, Day, etc.</li>
                                        <li>Mark it as a date table (Modeling → Mark as date table) to enable reliable time intelligence functions.</li>

                                    </ul>
                                    <li className='text-xl'><strong>Avoid Circular Relationships and Bi-Directional Filtering:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Circular paths confuse the filter engine and lead to incorrect results or errors. Design your star schema to prevent them.</li>
                                        <li>Default to single-direction filtering.</li>
                                    </ul>
                                    <li className='text-xl'><strong>Optimize Column Properties:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Use Integer Keys:</strong> Relationships on integer columns are more performant than text.</li>
                                        <li><strong>Reduce Cardinality:</strong> Use numeric codes instead of long text descriptions for keys where possible.</li>
                                        <li><strong>Hide Unnecessary Columns:</strong> Right-click columns used only for modeling/relationships and select Hide in report view. This declutters the Fields pane for report authors.</li>
                                        <li><strong>Set Data Categories & Sort Columns:</strong> For columns like "Month Name," set the Data Category (e.g., January) and specify a Sort by Column (e.g., Month Number) to ensure logical sorting in visuals.</li>
                                    </ul>
                                    <li className='text-xl'><strong>Keep the Model Lean:</strong></li>
                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>Remove unused columns and rows during the Power Query phase.</li>
                                        <li>Use summarization (e.g., pre-aggregate detailed facts) where appropriate to reduce model size.</li>
                                    </ul>
                                </ol>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    A well-designed data model is the single most important factor determining the success, performance, and usability of a Power BI solution.

                                </p>
                                <h2 className='text-xl font-bold text-gray-700 leading-relaxed mb-4'>STAR SCHEMA DATA MODEL</h2>



                            </div>
                        </div>
                    </main>
                );





            case 'module7':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="module7" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                                Data Analysis Expressions
                            </h1>
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-4xl font-bold text-slate-900 mb-6"> What is DAX?</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>DAX (Data Analysis Expressions) is a functional, formula-based language designed specifically for analytical calculations on relational data. While syntactically similar to Excel formulas, it operates on a fundamentally different principle: <strong>context evaluation.</strong>
                                    <strong>Core Philosophy:</strong> DAX is not merely a calculation engine; it is a context-aware language. Every measure is computed dynamically based on the filter context provided by visuals, slicers, report/page filters, and relationships. This enables a single measure definition (e.g., Total Sales) to yield different, correct results when placed in a matrix by Year, a card visual for a selected Region, or a chart by Product Category.
                                </p>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Types of DAX Calculations</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>Choosing the correct calculation type is critical for performance and accuracy.
                                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Calculated Columns:</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Nature:</strong> Adds a new, <strong>static column</strong> to an existing table. The calculation is performed <strong>row-by-row</strong> during data refresh and the result is physically stored in the model.</li>
                                                <li><strong>Use Case:</strong>
                                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                                        <li>Creating row-level flags or categories (e.g., [Product Type] = IF([Weight] &gt; 10, "Heavy", "Light")).</li>
                                                        <li>Performing calculations needed for relationships or filters.</li>
                                                    </ul>
                                                </li>
                                                <li><strong>Performance Impact:</strong> Increases the size of the data model, as values are pre-calculated and stored. Overuse can lead to bloated, slower models.</li>
                                                <li><strong>Syntax:</strong> Created in Data or Model view. Evaluates in the context of the <strong>current row</strong> only.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Measures</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Nature: Dynamic</strong>, aggregated calculations that are not stored in a column. They are computed on-the-fly in response to the filter context of the report.</li>
                                                <li><strong>Use Case:</strong>
                                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                                        <li>Virtually all KPIs and analytical summaries (e.g., Total Revenue, Average Sale Value, Year-over-Year Growth %).</li>
                                                        <li>Ratios and complex business logic.</li>
                                                    </ul>
                                                </li>
                                                <li><strong>Performance Impact:</strong> Minimal storage overhead. Performance depends on the complexity of the DAX and the efficiency of the model.</li>
                                                <li><strong>Syntax:</strong> Created via the Modeling ribbon. Defined using aggregation functions and are designed to interact with changing report filters.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Calculated Tables</strong>
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>Nature:</strong> Creates a new, separate table in the model defined by a DAX expression that returns a table.</li>
                                                <li><strong>Use Case:</strong>
                                                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                                        <li>Generating a standalone <strong>Date table</strong> (e.g., DateTable = CALENDAR(DATE(2023,1,1), DATE(2024,12,31))).</li>
                                                        <li>Creating aggregated summary tables or role-playing dimensions.</li>
                                                    </ul>
                                                </li>
                                                <li><strong>Performance Impact:</strong> The entire table is materialized and stored in memory. Use judiciously.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                    <strong>Decision Matrix: When in doubt, create a Measure.</strong> Use Calculated Columns only for attributes needed for filtering, grouping, or as arguments to relationship keys.

                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Foundational DAX Function Categories</h2>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Aggregation Functions:</strong> Operate over a column in a filter context.</li>
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>SUM(column), AVERAGE(column), MIN/MAX(column)</li>
                                        <li>COUNTROWS(table), DISTINCTCOUNT(column)</li>
                                    </ul>
                                    <li><strong>Text Functions:</strong> Manipulate string data.</li>
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>CONCATENATE(text1, text2), LEFT(text, num_chars), RIGHT(text, num_chars)</li>
                                        <li>UPPER(text), LOWER(text), TRIM(text)</li>
                                    </ul>
                                    <li><strong>Date & Time Functions:</strong> Extract parts or create dates.</li>
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>YEAR(date), MONTH(date), DAY(date)</li>
                                        <li>DATE(year, month, day), TODAY(), NOW()</li>
                                        <li>DATEDIFF(start_date, end_date, interval) (Premium)</li>

                                    </ul>
                                    <li><strong>Logical Functions:</strong> Implement conditional logic.</li>
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>IF(logical_test, value_if_true, value_if_false)</li>
                                        <li>AND(condition1, condition2, ...), OR(condition1, condition2, ...)</li>
                                        <li>SWITCH(expression, value1, result1, value2, result2, ..., else_result)</li>

                                    </ul>
                                    <li><strong>Filter & Context Functions:</strong> The most powerful and important category.</li>
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>CALCULATE(expression, filter1, filter2, ...): The cornerstone function. Modifies filter context.</li>
                                        <li>FILTER(table, condition): Returns a filtered table.</li>
                                        <li>ALL(table/column): Removes filters.</li>
                                        <li>VALUES(column): Returns a one-column table of unique values in the current filter context.</li>

                                    </ul>
                                </ul>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Creating Your First Measure: A Step-by-Step Guide</h2>
                                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Select a Home Table:</strong> In the Fields pane, click on the table where you want the measure to be logically stored (e.g., the Sales table).</li>
                                    <li><strong>Initiate Creation:</strong> Go to the Modeling ribbon and click New Measure. Alternatively, right-click the table in the Fields pane and select New measure.</li>
                                    <li><strong>Formula Bar:</strong> A formula bar appears. The default text is Measure =.</li>
                                    <li><strong>Enter the Formula:</strong> Type the measure definition.</li>
                                    <blockquote className='border-l-4 border-r-4 border-blue-500 pl-4 py-2 my-4 bg-green-50'>
                                        <p className='text-blue-900'>DAX<br />
                                            Total Revenue = SUM(Sales[Revenue])
                                        </p>
                                    </blockquote>
                                    <li><strong>Commit:</strong> Press Enter or click the checkmark (✔) in the formula bar.</li>
                                    <li><strong>Result:</strong> The new measure Total Revenue appears in the Fields pane under the selected table, indicated by the calculator icon (∑). You can now drag it into any visual.</li>
                                </ol>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Understanding Aggregations in the Model</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    Power BI's model distinguishes between columns suitable for aggregation and those that are not.

                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Aggregatable Columns:</strong> Numeric columns (Integer, Decimal, Currency) have a default summarization property (often Sum or Do Not Summarize). When dragged into a visual's <strong>Values</strong> area, Power BI applies the default aggregation.</li>
                                        <li><strong>Non-Aggregatable Columns:</strong> Text, Date, and Boolean columns are typically placed in<strong>Axis, Legend, Slicer</strong> areas.</li>
                                        <li><strong>Controlling Aggregation:</strong> Right-click any field in the<strong>Fields</strong> pane, select Summarize by, and choose the desired aggregation (Sum, Average, Count, Count (Distinct), Min, Max). For measures, this option is fixed by the DAX formula.</li>
                                    </ul>
                                    <strong>Best Practice:</strong> For all key business metrics, <strong>create explicit measures</strong>. Relying on Power BI's implicit aggregation of columns leads to inconsistent definitions and makes complex logic impossible.


                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-4'> Real-World DAX Examples for Common Business Logic</h2>

                                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong className='text-xl'>Year-to-Date (YTD) Calculation:</strong><br />Utilizes specialized time intelligence functions which require a properly marked Date table.</li>
                                    <blockquote className='border-l-4 border-r-4 border-blue-500 pl-4 py-2 my-4 bg-green-50'>
                                        <p className='text-blue-900'>
                                            DAX
                                            Sales YTD = <br />
                                            TOTALYTD( <br />
                                            &nbsp;&nbsp;SUM(Sales[Revenue]), &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // Expression to accumulate<br />
                                            &nbsp;&nbsp; 'Date'[Date],         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Date column from the Date table<br />
                                            &nbsp;&nbsp;"12/31"              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // Optional: Year-end date (for fiscal years)<br />
                                            )

                                        </p>
                                    </blockquote>
                                    <li><strong className='text-xl'>Previous Period Comparison</strong><br />A pattern using CALCULATE to shift the time context.</li>
                                    <blockquote className='border-l-4 border-r-4 border-blue-500 pl-4 py-2 my-4 bg-green-50'>
                                        <p className='text-blue-900'>DAX
                                            Sales Previous Month = <br />
                                            CALCULATE(<br />
                                            &nbsp;&nbsp;SUM(Sales[Revenue]),<br />
                                            &nbsp;&nbsp;PREVIOUSMONTH('Date'[Date]) &nbsp;&nbsp;// Shifts the date filter back one &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; month<br />
                                            )
                                        </p>
                                    </blockquote>
                                    <li><strong className='text-xl'>Ratio or Percentage Calculation</strong><br />Always use DIVIDE instead of the / operator for safe handling of division by zero.</li>
                                    <blockquote className='border-l-4 border-r-4 border-blue-500 pl-4 py-2 my-4 bg-green-50'>
                                        <p className='text-blue-900'>DAX
                                            Profit Margin % = <br />
                                            DIVIDE(<br />
                                            &nbsp;&nbsp;SUM(Sales[Profit]),&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Numerator<br />
                                            &nbsp;&nbsp;SUM(Sales[Revenue]),&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Denominator<br />
                                            &nbsp;&nbsp;0,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Optional: Value to return in case of divide-by-zero (e.g., 0, BLANK())<br />
                                            &nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Optional: Alternate result for other errors
                                            )
                                        </p>
                                    </blockquote>
                                </ol>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>

                                    <strong>Key Takeaway:</strong> Mastering DAX begins with understanding the difference between <strong> row context</strong> (for calculated columns) and <strong>filter context</strong> (for measures). The CALCULATE function is the gateway to advanced DAX, as it intentionally and precisely modifies filter context.
                                </p>


                            </div>
                        </div>
                    </main>
                );


            case 'module8':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="module8" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                                Creating Visualizations in Power BI
                            </h1>
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-4xl font-bold mb-6 text-slate-900">Overview of Visualization Types</h2>
                                <div className="text-lg text-gray-700 leading-relaxed mb-6">Power BI provides a comprehensive library of data visual representations, each suited to specific analytical purposes. These can be categorized functionally:
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Comparison & Ranking: Bar/Column charts</strong> (clustered, stacked, 100% stacked). Best for comparing discrete categories.</li>
                                        <li><strong>Trend Analysis: Line charts, Area charts.</strong> Ideal for displaying changes in continuous data over time (e.g., months, quarters).</li>
                                        <li><strong>Composition & Part-to-Whole: Pie charts, Donut charts, Stacked bar/column charts, Waterfall charts, Funnel charts.</strong> Show how individual parts contribute to a total.</li>
                                        <li><strong>Distribution Analysis: Histograms, Scatter charts, Box and whisker plots.</strong> Reveal the spread, central tendency, and outliers within a dataset.</li>
                                        <li><strong>Relationship & Correlation: Scatter charts, Bubble charts.</strong> Examine the relationship between two or three quantitative measures.</li>
                                        <li><strong>Geospatial Analysis: Map, Filled Map, ArcGIS Maps.</strong> Visualize data across geographic boundaries using shapes or bubbles.</li>
                                        <li><strong>Tabular & Detail Reporting: Table, Matrix.</strong> Display precise values. The Matrix functions as a pivot table with drill-down capabilities.</li>
                                        <li><strong>Key Metric Display: Card, Multi-row card, Gauge, KPI visual</strong>. Highlight single or multiple critical numbers and progress against targets.</li>
                                        <li><strong>Interactivity & Navigation: Slicer</strong> (various styles), Buttons, Bookmarks. Enable user-driven filtering and report navigation.</li>
                                    </ul>

                                </div>
                                <h2 className='text-2xl font-bold mb-4 text-slate-900'>Adding and Constructing a Visual</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    The process is a direct, drag-and-drop experience:
                                </p>
                                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Selection:</strong> Click on the icon of the desired visual type in the Visualizations pane.</li>
                                    <li><strong>Placement:</strong> An empty visual container appears on the report canvas. It can be moved and resized.</li>
                                    <li><strong>Data Binding:</strong> Drag fields from the Fields pane and drop them into the specific field wells of the Visualizations pane (e.g., Axis, Legend, Values).</li>
                                    <li><strong>Formatting:</strong> Use the Format pane (paint roller icon) to modify the visual's aesthetics and behavior.</li>
                                </ol>
                                <h2 className='text-2xl font-bold mb-4 text-slate-900'>Core Visual Field Wells Explained</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    Understanding the role of each field well is key to building correct visuals.

                                </p>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Axis (Typically X-axis):</strong> Holds categorical or date/time data that defines the groups or intervals for analysis (e.g., Product Category, Year-Month).</li>
                                    <li><strong>Values (Typically Y-axis):</strong> Holds numeric data (measures or columns) to be aggregated and displayed (e.g., Total Sales, Average Price). The aggregation function (Sum, Average) is defined by the measure or the column's default property.</li>
                                    <li><strong>Legend:</strong> Holds a categorical field that splits the data series by color within the visual (e.g., Region on a line chart creates multiple colored lines).</li>
                                    <li><strong>Small Multiples:</strong> Creates a grid of repeated visuals, each filtered to a value from the field placed here (e.g., a separate line chart for each Region).</li>
                                    <li><strong>Tooltips:</strong> Fields placed here appear in a detailed hover-over tooltip, providing additional context without cluttering the primary visual.</li>
                                </ul>
                                <h2 className='text-2xl font-bold mb-4 text-slate-900'>Detailed Guide to Common Visuals</h2>
                                <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong className='text-xl'>Bar and Column Charts</strong>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Clustered:</strong> Compares values across categories side-by-side.</li>
                                            <li><strong>Stacked:</strong> Shows total magnitude and the contribution of sub-categories.</li>
                                            <li><strong>100% Stacked:</strong> Compares the percentage contribution of sub-categories across the total.</li>
                                            <li><strong>Design Principle:</strong> Use bar charts for longer category names or many categories. Use column charts for time-based categories.</li>
                                        </ul>
                                    </li>
                                    <li><strong className='text-xl'>Line Charts</strong>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Primary Use:</strong> Visualizing trends over a continuous axis, almost always time.</li>
                                            <li><strong>Best Practice:</strong> Limit the number of lines to maintain readability (typically &lt;8). Use the Legend field to create multiple lines.</li>
                                            {/* <li><strong></strong></li> */}
                                        </ul>
                                    </li>
                                    <li><strong className='text-xl'>Pie and Donut Charts</strong>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Use Sparingly:</strong> Effective only for showing a few (≤5) categories that make up a whole. Poor for precise comparison between segments.</li>
                                            <li><strong>Alternative:</strong> Consider a 100% stacked bar chart for easier comparison between parts.</li>
                                            {/* <li><strong></strong></li> */}
                                        </ul>
                                    </li>
                                    <li><strong className='text-xl'>Tables and Matrices</strong>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Table:</strong> Fixed list of rows and columns. Good for detail.</li>
                                            <li><strong>Matrix:</strong> A pivot table. Supports hierarchies on Rows/Columns. Users can drill down/up. Essential for multi-level summary reporting (e.g., Year &gt; Quarter &gt; Month).</li>
                                            <li><strong>Conditional Formatting:</strong> Highly effective in tables/matrices to color-code cells based on values (data bars, color scales, icons).</li>
                                        </ul>
                                    </li>
                                    <li><strong className='text-xl'> Card Visuals and KPIs</strong>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Card:</strong> Displays a single aggregated value. The primary visual for dashboard KPIs.</li>
                                            <li><strong>Multi-row Card:</strong> Displays multiple measures as a clean list.</li>
                                            <li><strong>KPI Visual:</strong> Displays a value, a trend indicator, and a target. Requires a Target measure.</li>
                                        </ul>
                                    </li>
                                    <li><strong className='text-xl'>Slicers</strong>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Interactive Filters:</strong> Provide the end-user direct control over the report's filter context.</li>
                                            <li><strong>Types:</strong> List, Dropdown, Between (slider for numeric/date ranges). Dropdown is space-efficient.</li>
                                            <li><strong>Sync Slicers Pane:</strong> Configure a slicer to affect multiple report pages simultaneously.</li>
                                        </ul>
                                    </li>
                                    <li><strong className='text-xl'>Geographic Maps</strong>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Requirement:</strong> Data must have a recognized location field. Set the Data Category (e.g., Country, State, City) on the column via the Modeling tab.</li>
                                            <li><strong>Filled Map (Choropleth):</strong> Shades geographic areas based on value.</li>
                                            <li><strong>Bubble Map:</strong> Places sized bubbles at latitude/longitude coordinates or location centroids.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <h2 className='text-xl  font-bold text-slate-900 mb-4'>Formatting for Clarity and Impact</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    The Format pane is organized into expandable sections:

                                </p>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>General:</strong> Size, position, layer order, and interactions.</li>
                                    <li><strong>Title:</strong> Text, font, and alignment of the visual title.</li>
                                    <li><strong>Background, Border:</strong> Visual container styling.</li>
                                    <li><strong>Data Colors:</strong> Control the palette for categorical data or set a constant color.</li>
                                    <li><strong>Axis:</strong> Format labels, titles, scale (linear/log), and range (min/max). Crucial for accurate representation.</li>
                                    <li><strong>Data Labels:</strong> Show values on the visual. Enable and format for clarity.</li>
                                    <li><strong>Tooltips:</strong> Configure default tooltip behavior.</li>
                                </ul>
                                <h2 className='text-xl font-bold text-slate-900 mb-4'>Applying Conditional Formatting</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    Conditional formatting dynamically alters the appearance of data points based on rules.<br />
                                    <strong>Application Points:</strong> Primarily on <strong>Tables, Matrices</strong>,  and the data colors of <strong>Chart visuals.</strong><br />
                                    <strong className='text-xl'>Types:</strong>
                                </p>
                                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Color Scales (Gradient):</strong> Applies a color gradient (e.g., red-yellow-green) based on cell value.</li>
                                    <li><strong>Rules-Based:</strong> Format cells based on logical rules (e.g., if Profit &gt; 0, font color = Red).</li>
                                    <li><strong>Field Value:</strong> Use the values from a separate measure/column to drive the formatting (e.g., color a Sales column based on a Variance % measure).</li>
                                    <li><strong>Data Bars/Icon Sets:</strong> Adds in-cell bars or icons (flags, ratings) to tables/matrices.</li>
                                </ol>
                                <h2 className='text-xl font-bold text-slate-900 mb-4'>Using Custom Visuals from AppSource</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-4'>The Power BI marketplace (AppSource) contains thousands of community and third-party visuals.</p>
                                <ul className='pl-6 space-y-2 text-gray-700 mb-6'>

                                    <li className='text-xl'><strong>Process:</strong>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li>In the Visualizations pane, select ... → Get more visuals.</li>
                                            <li>This opens the AppSource marketplace in a dialog.</li>
                                            <li>Browse, search, and select a visual. Review its documentation.</li>
                                            <li>Click Add. The visual is imported into your report's Visualizations pane.</li>
                                        </ul>
                                    </li>
                                    <li className='text-xl'><strong>Critical Considerations:</strong>
                                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li><strong>Performance:</strong> Custom visuals are JavaScript-based and can significantly impact report load and render times. Test with your data volume.</li>
                                            <li><strong>Security & Certification:</strong> Prefer Microsoft Certified visuals. These undergo security and performance review. Non-certified visuals may be blocked by tenant administrators.</li>
                                            <li><strong>Maintenance:</strong> Custom visuals may not update automatically and could break with new Power BI releases.</li>
                                            <li><strong>Distribution:</strong> Reports containing custom visuals require users to have the visual installed or enabled in the service for them to render.</li>
                                        </ul>
                                    </li>
                                </ul>

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
                className="min-h-screen rounded-none p-8 text-slate-900 border transition-all duration-300"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderColor: 'black',

                }}
            >
                {renderContent()}
            </div>
        </TechLayout>
    );
}

