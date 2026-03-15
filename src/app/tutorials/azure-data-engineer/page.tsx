'use client';

import { useState, useEffect } from 'react';
import TechLayout from '@/components/layout/tech-layout';
import VideoSection from '@/components/video/VideoSection';
import { videoTutorialsData, getVideosForTopic } from '@/data/videoTutorials';

export default function AzureDataEngineerPage() {
  const [activeSection, setActiveSection] = useState('module1');

  const pageHeadings = [
    { id: 'module1', title: 'module 1' },
    { id: 'module2', title: 'Module 2' },
    { id: 'module3', title: 'Module 3' },
    { id: 'module4', title: 'Module 4' },
    { id: 'module5', title: 'Module 5' },
    { id: 'module6', title: 'module 6' },
    { id: 'module7', title: 'module 7' },
    { id: 'module8', title: 'module 8' },
    { id: 'module9', title: 'module 9' },
    { id: 'module10', title: 'module 10' },
    { id: 'module11', title: 'module 11' },
    { id: 'module12', title: 'module 12' },
    { id: 'module13', title: 'module 13' },
    { id: 'module14', title: 'module 14' },
    { id: 'module15', title: 'module 15' },
    { id: 'module16', title: 'module 16' },
    { id: 'module17', title: 'module 17' },
    { id: 'module18', title: 'module 18' },
    { id: 'module19', title: 'module 19' },
    { id: 'module20', title: 'module 20' },
    { id: 'module21', title: 'module 21' },
    { id: 'module22', title: 'module 22' },
    { id: 'module23', title: 'module 23' },
    { id: 'module24', title: 'module 24' },
    { id: 'module25', title: 'module 25' },
    { id: 'module26', title: 'module 26' },
    // { id: 'module27', title: 'module 27' },
    // { id: 'module28', title: 'module 28' },
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

  const renderContent = () => {
    switch (activeSection) {
      case 'module1':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="module1" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                Azure resource hierarchy
              </h1>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Management Groups (The Top-Level)
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong className='text-2xl'>What it is:</strong><br /> This is the <strong>highest level</strong> of Azure’s structure. It's like a <strong>parent folder</strong> that helps organize your entire Azure environment.</li>
                    <li><strong className='text-2xl'>Purpose:</strong><br /> It helps you <strong>manage and organize multiple subscriptions</strong> across your organization. You can group subscriptions based on departments, teams, or projects.</li>
                    <li><strong className='text-2xl'>Example:</strong><br /> Imagine a company with multiple divisions, like Finance, IT, and Marketing. You could have separate management groups for each of these divisions.</li>
                  </ul>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Subscriptions (Middle Layer)
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong className='text-2xl'>What it is:</strong><br /> Underneath management groups, you have <strong>subscriptions</strong>. A <strong>subscription</strong> is like a <strong>container</strong> for Azure resources, where you’ll define <strong>limits on resources</strong> and <strong>billing</strong>.</li>
                    <li><strong className='text-2xl'>Purpose:</strong><br /> It helps with organizing resources, managing access, and billing. You can have multiple subscriptions for different projects or teams. Each subscription has its own <strong>resource limits</strong> and <strong>billing</strong>.</li>
                    <li><strong className='text-2xl'>Example:</strong><br /> If your company has different projects, like a website and an app, you could create separate subscriptions for them. One for the website, one for the app.</li>
                  </ul>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Resource Groups (Sub-Containers)
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong className='text-2xl'>What it is:</strong><br /> Inside each subscription, you can have <strong>resource groups</strong>. These are containers that hold related resources.</li>
                    <li><strong className='text-2xl'>Purpose:</strong><br /> They help organize resources based on their lifecycle and permissions. All the resources in a group are usually related to the same project or service.</li>
                    <li><strong className='text-2xl'>Example:</strong><br />If you're building a web app, you might have a resource group called "rg-ohg365-dev" where you store everything related to the app, such as databases, storage accounts, and virtual machines.</li>
                  </ul>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Resources (The Actual Items)
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong className='text-2xl'>What it is:</strong><br /> These are the <strong>individual services</strong> or <strong>products</strong> that you create in Azure, like <strong>virtual machines (VMs)</strong>, <strong>storage accounts</strong>, <strong>databases</strong>, or <strong>networks</strong>.</li>
                    <li><strong className='text-2xl'>Purpose:</strong><br /> This is where the actual work happens! Resources are the <strong>building blocks</strong> of your cloud environment.</li>
                    <li><strong className='text-2xl'>Example:</strong><br /> In your "rg-ohg365-dev" resource group, you could have resources like a VM to run your website, a database to store your data, and a storage account for storing files.</li>
                  </ul>
                </div>
                <ul>
                  <li><strong className='text-slate-900 font-bold text-2xl' >Management Groups:</strong><br />High-level containers for organizing multiple subscriptions.</li>
                  <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                    Go to the Azure portal and search for Management Groups.
                    After clicking the management group, all subscriptions under that group are displayed, and the corresponding subscription is automatically highlighted.

                  </p>
                  <li><strong className='text-slate-900 font-bold text-2xl' >Subscriptions:</strong><br /> They hold resources and manage access to resources.</li>
                  <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                    Go to the Azure portal and search for Subscriptions.
                    After that, click on the subscription to view the list of subscriptions
                  </p>
                  <li><strong className='text-slate-900 font-bold text-2xl' >Resource Groups:</strong><br /> Containers inside subscriptions to organize and manage resources by project or lifecycle.</li>
                  <p className='text-lg text-gray-700 leading-relaxed mb-3'>Go to the Azure portal and search for Resource Groups.
                    After that, click on the resource group to view the list of Resource Groups.
                  </p>
                  <li><strong className='text-slate-900 font-bold text-2xl' >Resources:</strong><br /> The actual services you use in Azure.</li>
                  <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                    After clicking on the resource group, we can see all the resources inside it. All resources are automatically contained within the resource group.


                  </p>
                </ul>
                {/* Add your manual content here */}
              </div>
            </div>
          </main>
        );
      case 'module2':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="module2" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                Resource Group
              </h1>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  What is a Resource Group
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  A Resource Group in Azure is like a folder that holds all the resources (services) related to a project or app. <br />
                  For example: <br />
                  If you build a website, you might have: <br />

                  <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-3'>
                    <li>A <strong>Virtual Machine (VM)</strong> for the web server</li>
                    <li>A <strong>Storage Account</strong> for images</li>
                    <li>A <strong>Database</strong> for user data</li>
                  </ul>
                  You can put all of these inside <strong>one Resource Group</strong> — making it easier to manage, monitor, and delete them together.

                  <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-3'>
                    <li className='text-2xl font-bold text-slate-900 mb-3'>Create a Resource Group</li>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Sign in to the Azure Portal</li>
                      <li>In the search menu, search for Resource groups.</li>
                      <li>Click on the resource group and click on the create button.</li>
                      <li>After clicking the Create button, we can see the Resource group section. We should provide the resource group name and then click the Next button.</li>
                      <li>After clicking the Next button, we can view the Resource groups. In the Resource groups section, there is a Tags option. Click on the Tags option and select the required options. Then click the Review + Create button.</li>
                      <li>After clicking the Review & Create button, we will be taken to the Review + Create page. Verify the details, and then click the Create button.</li>
                      <li>After clicking the Create button, we can see the resource group. In that resource group, we are able to view the list of resource groups in the Resource Manager.</li>
                    </ul>
                    {/* <Image src="/images/azure-data-engineer/resource-group-1.png" alt="Resource Group 1" width={500} height={500} /> */}
                    <li className='text-2xl font-bold text-slate-900 mb-3'>Overview of resource group:</li>
                    <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong className='text-2xl'>Name:</strong> rg-ohg365-dev → This is your Resource Group’s name.Usually,  names include clues about the project or environment:</li>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>rg = Resource Group</li>
                        <li>ohg365 = Project or team name</li>
                        <li>dev = Environment (like dev, test, or prod)</li>
                      </ul>
                      <li><strong className='text-2xl'>Buttons:</strong></li>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong className='text-xl'>Create:</strong> Add new Azure resources (like VMs, storage, databases).</li>
                        <li><strong className='text-xl'>Manage view:</strong> Customize how your resources list looks.</li>
                        <li><strong className='text-xl'>Delete resource group:</strong> Deletes the entire group and all its resources (be careful!).</li>
                        <li><strong className='text-xl'>Refresh:</strong> Updates the view if new resources were added.</li>
                        <li><strong className='text-xl'>Export to CSV:</strong> Export your resource details (helpful for reports).</li>
                        <li><strong className='text-xl'>Open query:</strong> Create or run custom filters using Azure Resource Graph.</li>
                      </ul>
                    </ul>
                  </ul>

                </div>

              </div>
            </div>
          </main>
        );



      case 'module3':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="module3" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">

              </h1>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Types of Azure Storage Services
                </h2>
                <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                  Azure Storage provides <strong>four main types of services</strong> under one <strong>Storage Account</strong>.
                  <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong className='text-slate-900 font-bold text-2xl'>Blob Service</strong></li>
                    <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                      <em>Used to store unstructured or semi-structured data like files, images, videos, logs, and backups.</em>
                      <ul className='list-[square] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong className='text-xl'>Description:</strong></li>
                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                          <li>Stores data as Blobs (Binary Large Objects) inside containers.</li>
                          <li>Best for storing flat files and large objects that don’t fit in a database.</li>
                          <li>Data can be text, binary, documents, media, or backups.</li>
                        </ul>
                        <li><strong className='text-xl'>Example Uses:</strong></li>
                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                          <li>Storing images or videos for websites</li>
                          <li>Backups and archives</li>
                          <li>Data lake for analytics</li>
                          <li>Hosting static websites</li>
                        </ul>
                        <li><strong className='text-xl'>Example File Types:</strong><br />.txt, .csv, .json, .xml, .jpg, .mp4, .zip, .bak</li>
                      </ul>

                    </div>
                    <li><strong className='text-slate-900 font-bold text-2xl'>File Service</strong></li>
                    <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                      <em>Used for shared file storage that behaves like a traditional file server.</em>
                      <ul className='list-[square] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong className='text-xl'>Description:</strong></li>
                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                          <li>Provides Azure Files, a fully managed file share in the cloud.</li>
                          <li>Uses the SMB (Server Message Block) or NFS (Network File System) protocols the same used by on-premises file servers.</li>
                          <li>Can be mounted to Windows, Linux, or macOS systems.</li>
                          {/* <li></li> */}
                        </ul>
                        <li><strong className='text-xl'>Example Uses:</strong></li>
                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                          <li>Shared network drives for teams</li>
                          <li>“Lift and shift” of on-premises file servers</li>
                          <li>Application configurations shared across multiple VMs</li>
                          {/* <li></li> */}
                        </ul>
                        <li><strong className='text-xl'>Example Scenario:</strong><br />You have multiple virtual machines needing access to the same configuration files. You can store those files in Azure Files and mount them just like a shared folder.</li>
                      </ul>

                    </div>
                    <li><strong className='text-slate-900 font-bold text-2xl'>Queue Service</strong></li>
                    <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                      <em>Used for reliable messaging between application components.</em>
                      <ul className='list-[square] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong className='text-xl'>Description:</strong></li>
                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                          <li>Provides asynchronous communication between services using message queues.</li>
                          <li>Stores messages in a queue, which can be processed later by background services or workers.</li>
                          <li>Ensures messages are delivered at least once and processed in FIFO (First-In, First-Out) order.</li>
                          {/* <li></li> */}
                        </ul>
                        <li><strong className='text-xl'>Example Uses:</strong></li>
                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                          <li>Sending background jobs (like image processing or email sending)</li>
                          <li>Decoupling app components for scalability</li>
                          <li>Event-driven architecture</li>
                          {/* <li></li> */}
                        </ul>
                        <li><strong className='text-xl'>Example Scenario:</strong><br />A web app uploads an image → sends a message to a queue → a background process picks it up and resizes the image.</li>
                      </ul>

                    </div>
                    <li><strong className='text-slate-900 font-bold text-2xl mb-3'>Table Service</strong></li>
                    <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                      <em>Used to store large amounts of structured, non-relational data.</em>
                      <ul className='list-[square] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong className='text-xl'>Description:</strong></li>
                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                          <li>Provides NoSQL key-value storage.</li>
                          <li>Stores data in tables with entities (rows) and properties (columns).</li>
                          <li>Flexible schema you can add or remove columns anytime.</li>
                          {/* <li></li> */}
                        </ul>
                        <li><strong className='text-xl'>Example Uses:</strong></li>
                        <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                          <li>Storing user profiles, IoT data, or metadata</li>
                          <li>Fast lookups by key</li>
                          <li>Lightweight applications needing scalable, cheap storage</li>
                          {/* <li></li> */}
                        </ul>
                        <li><strong className='text-xl'>Example Scenario:</strong><br />You have millions of IoT sensors sending temperature data you can store this efficiently in Azure Table Storage.</li>
                      </ul>

                    </div>
                  </ol>
                </div>

                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Storage Service</th>
                        <th className="border border-slate-400 p-3 text-left">Type of Data</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        <th className="border border-slate-400 p-3 text-left">Example Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Blob Service</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Unstructured / Semi-structured</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Stores large objects such as files and media</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Images, videos, logs</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">File Service</td>
                        <td className="border border-slate-400 p-3 text-gray-900">File-based</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Provides shared file storage using SMB/NFS protocols</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shared drives, application configurations</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Queue Service</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Messaging</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Enables message-based communication between application components</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Background tasks, event processing</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Table Service</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Structured (NoSQL)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Schema-less key-value table storage</td>
                        <td className="border border-slate-400 p-3 text-gray-900">User profiles, IoT data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 className='text-3xl font-bold text-slate-900 mb-3'>Explore Blob Service</h2>
                <p className='text-lg text-gray-700 leading-relaxed mb-3'>Once your storage account is created:</p>
                <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-6'>
                  <li>Go to your Storage Account</li>
                  <li>Under Data storage, click Containers → This is where your blobs live.</li>
                  <li>Click <strong className='font-bold text-xl'>+</strong> Container to create one:  </li>
                  <ul className='list-[square] pl-6 space-y-2 text-slate-900 mb-6'>
                    <li><strong>Name:</strong> images, videos, or backups (any name)</li>
                    <li><strong>Public access level:</strong></li>
                    <ol className='list-decimal pl-6 space-y-2 text-slate-900 mb-6'>
                      <li><em>Private (default)</em> – Only you can access</li>
                      <li><em>Blob (anonymous read)</em> – Anyone with the link can read blobs</li>
                      <li><em>Container (public)</em> – Everyone can see contents</li>
                    </ol>
                  </ul>
                  <li>Click on Add container. A new container panel will appear on the right side. Enter the container name and then click the Create button.</li>
                  <li>After clicking the Create button, the container section will display the list of container names.</li>
                  <li><strong className='text-2xl text-slate-900'>Upload & Manage Blobs</strong></li>
                  <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Click your new container (e.g., images)</li>
                    <li>Click <strong>Upload</strong></li>
                    <li>Choose a file from your computer (like a .jpg, .txt, or .mp4)</li>
                    <li>Once uploaded, you can:</li>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>View <strong>Properties</strong> (size, type, last modified)</li>
                      <li>Get the <strong>URL</strong> to access the file</li>
                      <li>Change the <strong>access tier</strong></li>
                    </ul>
                  </ol>
                  <li>Click on the Add Directory option here. To create a folder.</li>
                  <li>After clicking Add Directory, the Add Virtual Directory panel will appear. Enter the directory name and then click the OK button.</li>
                  <li>Click on the Upload option here.</li>
                  <li>After clicking the Upload option, the Upload Blob panel will appear at the top-right corner. Then click the Browse for files button.</li>
                  <li>Choose the file here, and then click the Open button.</li>
                  <li>Finally, click on the Upload option here.</li>
                  <li>After clicking the Upload option, the file will appear in the list in the Overview page.</li>
                </ul>




              </div>
            </div>
          </main>
        );



      case 'module4':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id='module4' className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">

              </h1>
              <div className="max-w-6xl mx-auto">
                <h2 className='text-3xl font-bold text-slate-900 mb-3'>
                  Types of Blobs
                </h2>
                <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>click on the upload option</li>
                  <li>After clicking the Upload option, the Browse for Files panel will appear. Below that, the Advanced dropdown option will be visible. Click on Advanced.</li>
                  <li>After clicking the Advanced option, the Blob Types will be displayed. Here, select the blob type you want.</li>
                  <li>After selecting the blob type, all items in the folder will be displayed in the Overview page.</li>
                </ul>


                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Blob Type</th>
                        <th className="border border-slate-400 p-3 text-left">Best For</th>
                        <th className="border border-slate-400 p-3 text-left">Example Use</th>

                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Block Blob</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Storing text or binary data</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Images, videos, documents, CSVs</td>

                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Append Blob</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Data that is constantly appended (append-only)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Logs, telemetry, audit data</td>

                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Page Blob</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Random read/write access</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Virtual machine disks (VHD files)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                  <li><strong className='text2xl'>Block Blob</strong></li>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    Most common blob type used in Azure.
                    <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>What it is:</strong></li>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Stores text and binary data (files like .txt, .jpg, .mp4, .csv, etc.)</li>
                        <li>Data is split into blocks, and each block is identified by a block ID.</li>
                        <li>You can upload or update blocks individually and commit them together.</li>
                      </ul>

                      <li><strong>Use Cases:</strong></li>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Storing images, videos, PDFs, and backups.</li>
                        <li>Data files for analytics (CSV, JSON, Parquet).</li>
                        <li>Large files uploaded in chunks.</li>
                      </ul>
                      <li><strong>Example:</strong><br />You upload a 500 MB video file — Azure divides it into smaller blocks and uploads each part separately for speed and reliability.</li>
                    </ul>

                  </div>
                  <li><strong className='text-2xl'>Append Blob</strong></li>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    Special type of blob for data that grows over time.
                    <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>What it is:</strong></li>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Optimized for append operations — you can only add new data to the end, not modify or delete existing data.</li>
                        <li>Each time you add new information, it’s appended to the blob.</li>

                      </ul>

                      <li><strong>Use Cases:</strong></li>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Storing log files.</li>
                        <li>Application telemetry or diagnostics data.</li>
                        <li>Streaming data that’s constantly being added.</li>
                      </ul>
                      <li><strong>Example:</strong><br />You’re logging website visits. Each time a new visitor arrives, their data (timestamp, IP, etc.) is appended to the existing log file.</li>
                    </ul>

                  </div>
                  <li><strong className='text-2xl'>Page Blob</strong></li>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    Designed for random read/write operations.
                    <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>What it is:</strong></li>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Data is stored in fixed-size 512-byte pages.</li>
                        <li>Allows fast read and write access to specific parts of the blob.</li>
                        <li>Commonly used for storing Virtual Hard Disk (VHD) files that power Azure Virtual Machines.</li>
                      </ul>

                      <li><strong>Use Cases:</strong></li>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Storing Azure VM disks (OS and data disks).</li>
                        <li>Large databases that require random access.</li>
                        <li>Any workload that reads/writes frequently to specific sections of a file.</li>
                      </ul>
                      <li><strong>Example:</strong><br />When you start an Azure Virtual Machine, its disk (a .vhd file) is stored as a Page Blob, allowing the VM to quickly read or write data anywhere on the disk.</li>
                    </ul>

                  </div>
                </ol>


                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Blob Type</th>
                        <th className="border border-slate-400 p-3 text-left">Structure</th>
                        <th className="border border-slate-400 p-3 text-left">Read/Write Behavior</th>
                        <th className="border border-slate-400 p-3 text-left">Common Use</th>

                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Block Blob</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Data stored as blocks</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Upload or replace blocks</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Files, media, documents</td>

                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Append Blob</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Sequentially added blocks</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Append-only</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Logs, telemetry, streaming data</td>

                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Page Blob</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Fixed 512-byte pages</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Random read/write</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Virtual machine disks, large databases</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </main>
        );




      case 'module5':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id='module5' className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">

              </h1>
              <div className="max-w-6xl mx-auto">
                <h2 className='text-3xl font-bold text-slate-900 mb-3'>
                  Types of Access Tiers
                </h2>
                <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                  Azure lets you store data in <b>different tiers</b> based on how often you need it. This helps <strong>save money</strong> by matching storage cost to usage.


                </p>
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Tier</th>
                        <th className="border border-slate-400 p-3 text-left">Cost</th>
                        <th className="border border-slate-400 p-3 text-left">Availability</th>
                        <th className="border border-slate-400 p-3 text-left">Best For</th>

                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Hot</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Highest cost</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Always available</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td>

                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Cool</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Cheaper</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td>

                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Cold</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Cheaper than Cool</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Slower access</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Archive</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Cheapest</td>
                        <td className="border border-slate-400 p-3 text-gray-900"> Retrieval takes hours</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Long-term backups, compliance storage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>Click on the upload option for access tiers </li>
                  <li>After clicking the Upload option, the Browse for Files panel will appear below. The Advanced dropdown option will also be visible click on it.</li>
                  <li>After clicking the Advanced option, the Access Tiers section will appear. Click on it to view all access tier types, and then select one.</li>
                  <li>After selecting the access tier, the file will be uploaded to the Overview page.</li>
                </ul>
              </div>
            </div>
          </main>
        );



      case 'module6':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id='module6' className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">

              </h1>
              <div className="max-w-6xl mx-auto">
                <h2 className='text-3xl font-bold text-slate-900 mb-3'>
                  Azure Blob Storage
                </h2>
                <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                  Azure Blob Storage is Microsoft’s cloud-based service designed to store large amounts of data of various types — including structured, semi-structured, and unstructured data. <br /><br />
                  It is ideal for storing files such as CSV, text, Excel, JSON, Parquet, Avro, XML, images, videos, backups, and logs. <br /><br />
                  The term “Blob” stands for Binary Large Object, meaning it can store any type of binary data. Blob Storage provides a flat namespace, meaning all files (blobs) are stored in containers within a storage account, rather than in a traditional hierarchical folder system. <br /><br />
                  Azure Blob Storage is highly scalable, secure, and cost-efficient, making it suitable for:

                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Storing and serving large files (media, documents, etc.)</li>
                    <li>Data lakes and analytics workloads</li>
                    <li>Backup and disaster recovery</li>
                    <li>Archiving and compliance storage</li>
                  </ul>

                </div>
                <h2 className='text-3xl font-bold text-slate-900 mb-3'>
                  Create an Azure Blob Storage

                </h2>
                <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>Go to Azure Portal</li>
                  <li>In the search bar, type “Storage Accounts” or “blob”</li>
                  <li>Click on storage accounts and click on create button</li>
                  <li>After clicking the Create option, we will see the Basic details section. Fill in all the required details and then click the Review + Create button.</li>
                </ul>
                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                  <li className='text-2xl font-bold'>Subscription</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>This is where you choose which Azure Subscription will own this storage account.</li>
                    <li>A subscription is linked to your billing and access control.</li>
                    <li><strong>Example:</strong> You might have separate subscriptions for development, testing, or production environments. <br />
                      <strong>You selected:</strong> <em>Azure subscription 1</em></li>
                  </ul>
                  <li className='text-2xl font-bold'>Resource Group</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Choose or create a Resource Group to organize related Azure resources.</li>
                    <li>Resource Groups act like folders — all your related resources (VMs, storage, databases) are stored here for easy management.</li>
                    <li>In your case, you selected rg-ohg365-dev, which is perfect for development resources.</li>
                    <li>Tip: Keeping related resources in the same group helps you track cost, permissions, and manage everything easily.</li>
                  </ul>
                  <li className='text-2xl font-bold'>Storage Account Name</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>This is the unique name for your storage account (like a domain name).</li>
                    <li>It must be globally unique, lowercase, and 3–24 characters long.</li>
                    <li>This name will form part of the URL to access your data.</li>
                    <li><strong>Example:</strong> <br />
                      If your name is blobohg365dev
                    </li>
                  </ul>
                  <li className='text-2xl font-bold'>Preferred Storage Type</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Select what kind of storage service you want to enable.</li>
                    <li>The default (and most common) option is: <br />
                      Azure Blob Storage or Azure Data Lake Storage Gen2
                    </li>
                    <li>Blob storage (for files, media, etc.)</li>
                    <li>Data Lake capabilities (for analytics and big data processing)</li>
                    <li><strong>Tip:</strong> Keep this as default unless you have a specific need for file shares or queue services.</li>
                  </ul>
                  <li className='text-2xl font-bold'>Performance & Redundancy Settings</li>
                  <strong>Performance:</strong>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Standard: Uses HDD-based storage — cheaper, good for general use.</li>
                    <li>Premium: Uses SSD-based storage — faster, ideal for workloads needing low latency (like databases or VMs).</li>
                    <li><strong>You selected:</strong> <em>Standard (recommended)</em></li>
                  </ul>
                  <strong>Redundancy</strong><br />Defines how Azure replicates your data to keep it safe.
                </ol>


                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Option</th>
                        <th className="border border-slate-400 p-3 text-left">Meaning</th>
                        <th className="border border-slate-400 p-3 text-left">Copies of Data</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">LRS (Locally-redundant storage)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Stores 3 copies of your data within a single data center</td>
                        <td className="border border-slate-400 p-3 text-gray-900">3</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">ZRS (Zone-redundant storage)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Stores copies across 3 availability zones within the same region</td>
                        <td className="border border-slate-400 p-3 text-gray-900">3</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">GRS (Geo-redundant storage)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Replicates your data to a secondary region for disaster recovery</td>
                        <td className="border border-slate-400 p-3 text-gray-900">6</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">RA-GRS (Read-access Geo-redundant storage)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Same as GRS, but also provides read access to the secondary region</td>
                        <td className="border border-slate-400 p-3 text-gray-900">6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                  <li className='text-2xl font-bold'>You selected: LRS (best for development and testing).</li>
                  <ul className=' list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>After clicking Review + Create, the Blob Storage section will appear. Review all the details you have provided, and then click the Create button.</li>
                    <li>After clicking the Create button, we will be taken to the Overview page. Then click Go to resource.</li>
                  </ul>
                  <li className='text-2xl font-bold'>Navigate to Your Resource Group</li>
                  <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>In the left-hand menu, click on Resource groups</li>
                    <li>Find and click your resource group — in your case: <br />
                      <strong>rg-ohg365-dev</strong>
                    </li>
                    <li>Check for the Storage Account</li>
                    <li>Inside the Overview tab of your resource group, you’ll see a list of all resources.</li>
                    <li>Look for an item that looks like this: <br />
                      <strong>Type:</strong> Storage account <br />
                      <strong>Name:</strong> blobohg365dev (or whatever name you used)
                    </li>
                  </ul>
                  <li>If it appears there, 🎉 congratulations — your Blob Storage account has been successfully created</li>
                </ul>



              </div>
            </div>
          </main>
        );


      case 'module7':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="module7" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">

              </h1>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Types of Azure Storage Services
                </h2>
                <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                  Azure Storage provides four main types of services under one Storage Account.
                  <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                    <li className='text-2xl font-bold'>Data Lake Storage</li>
                    <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong className='text-xl'>Purpose:</strong> Designed to store large volumes of unstructured or semi-structured data such as files, images, videos, logs, and backups.</li>
                      <li className='text-xl font-bold'>Key Features:</li>
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Data is stored as Blobs (Binary Large Objects) within containers.</li>
                        <li>Ideal for storing large, raw data that doesn’t fit into traditional databases.</li>
                        <li>Supports various formats: text, binary, documents, media, and backups.</li>
                      </ul>
                      <li className='text-xl font-bold'>Common Use Cases:</li>
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Hosting media content like images and videos for websites.</li>
                        <li>Long-term storage for backups and archival data.</li>
                        <li>Centralized data lake for analytics and big data processing.</li>
                        <li>Hosting static websites.</li>
                      </ul>
                      <li><strong className='text-xl'>Supported File Types:</strong><br /> .txt, .csv, .json, .xml, .jpg, .mp4, .zip, .bak, and more.</li>
                    </ul>
                    <li className='text-2xl font-bold'>File Service</li>
                    <em>Used for shared file storage that behaves like a traditional file server.</em>
                    <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong className='text-xl'>Description:</strong></li>
                      {/* <li className='text-xl font-bold'></li> */}
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Provides Azure Files, a fully managed file share in the cloud.</li>
                        <li>Uses the SMB (Server Message Block) or NFS (Network File System) protocols the same used by on-premises file servers.</li>
                        <li>Can be mounted to Windows, Linux, or macOS systems.</li>
                      </ul>
                      <li className='text-xl font-bold'>Example Uses:</li>
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Shared network drives for teams</li>
                        <li>“Lift and shift” of on-premises file servers</li>
                        <li>Application configurations shared across multiple VMs</li>
                        {/* <li></li> */}
                      </ul>
                      <li><strong className='text-xl'>Example Scenario:</strong><br />You have multiple virtual machines needing access to the same configuration files. You can store those files in Azure Files and mount them just like a shared folder.</li>
                    </ul>
                    <li className='text-2xl font-bold'>Queue Service</li>
                    <em>Used for reliable messaging between application components.</em>
                    <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong className='text-xl'>Description:</strong></li>
                      {/* <li className='text-xl font-bold'></li> */}
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Provides asynchronous communication between services using message queues.</li>
                        <li>Stores messages in a queue, which can be processed later by background services or workers.</li>
                        <li>Ensures messages are delivered at least once and processed in FIFO (First-In, First-Out) order.</li>
                      </ul>
                      <li className='text-xl font-bold'>Example Uses:</li>
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Sending background jobs (like image processing or email sending)</li>
                        <li>Decoupling app components for scalability</li>
                        <li>Event-driven architecture</li>
                        {/* <li></li> */}
                      </ul>
                      <li><strong className='text-xl'>Example Scenario:</strong><br />A web app uploads an image → sends a message to a queue → a background process picks it up and resizes the image.</li>
                    </ul>
                    <li className='text-2xl font-bold'>Table Service</li>
                    <em>Used to store large amounts of structured, non-relational data.</em>
                    <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong className='text-xl'>Description:</strong></li>
                      {/* <li className='text-xl font-bold'></li> */}
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Provides NoSQL key-value storage.</li>
                        <li>Stores data in tables with entities (rows) and properties (columns).</li>
                        <li>Flexible schema you can add or remove columns anytime.</li>
                      </ul>
                      <li className='text-xl font-bold'>Example Uses:</li>
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Storing user profiles, IoT data, or metadata</li>
                        <li>Fast lookups by key</li>
                        <li>Lightweight applications needing scalable, cheap storage</li>
                        {/* <li></li> */}
                      </ul>
                      <li><strong className='text-xl'>Example Scenario:</strong><br />You have millions of IoT sensors sending temperature data you can store this efficiently in Azure Table Storage.</li>
                    </ul>
                  </ol>
                </div>


                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Service</th>
                        <th className="border border-slate-400 p-3 text-left">Type of Data</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        <th className="border border-slate-400 p-3 text-left">Example Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Blob Service</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Unstructured / Semi-structured</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Stores large objects such as files, media, and backups</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Images, videos, logs</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">File Service</td>
                        <td className="border border-slate-400 p-3 text-gray-900">File-based</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Provides shared file storage via SMB/NFS</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shared drives, application configurations</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Queue Service</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Messaging</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Enables message-based communication between application components</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Background tasks, event processing</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Table Service</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Structured (NoSQL)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Key-value, schema-less table storage</td>
                        <td className="border border-slate-400 p-3 text-gray-900">User profiles, IoT data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div className='text-lg text-gray-700 leading-relaxed mb-3 '> */}


                <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                  <li className='text-xl font-bold'>Explore Datalake Service <br />Once your storage account is created:</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Go to your Storage Account</li>
                    <li>Under Data storage, click Containers → This is where your blobs live.</li>
                    <li>Click + Container to create one:</li>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>Name:</strong> images, videos, or backups (any name)</li>
                      <li><strong>Public access level:</strong></li>
                      <ul className='list-[square] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><em>Private (default)</em> – Only you can access</li>
                        <li><em>Blob (anonymous read)</em> – Anyone with the link can read blobs</li>
                        <li><em>Container (public)</em> – Everyone can see contents</li>
                      </ul>
                    </ul>
                    <li>Click on the Add Container button. A new container will open, where you need to enter the container name and then click Create.</li>
                    <li>After clicking the Create button, it will be created and added to the items. </li>
                  </ul>
                  <li className='text-xl font-bold'>Upload & Manage Blobs</li>
                  <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Click your new container (e.g., images)</li>
                    <li>Click Upload</li>
                    <li>Choose a file from your computer (like a .jpg, .txt, or .mp4)</li>
                    <li>Once uploaded, you can:</li>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>View Properties (size, type, last modified)</li>
                      <li>Get the URL to access the file</li>
                      <li>Change the access tier</li>
                    </ul>
                  </ol>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Click on the add directory button </li>
                    <li>After clicking Add Directory, the directory name will appear at the bottom right. Enter the folder name and then click the Save button.</li>
                    <li>After clicking the Save button, the page you created will appear on the overview page.</li>
                    <li><strong className='text-2xl'>Subfolder:</strong><br />Click on the Add Directory, the directory name will appear at the bottom right. Enter the folder name and then click the Save button.</li>
                    <li>After clicking the Save button, the page you created will appear on the overview page.</li>
                    <li><strong className='text-2xl'>Upload file:</strong><br />Click on the Upload option here.</li>
                    <li>After clicking the Upload option, the Upload panel will appear at the top-right corner. Then click the Browse for files button, Choose the file here, and then click the Open button.</li>
                    <li>Finally, click on the Upload option here.</li>
                    <li>After clicking the Upload option, the file will appear in the list in the Overview page.</li>
                    {/* <li></li> */}
                  </ul>

                  {/* <li className='text-xl font-bold'></li> */}
                </ul>

                {/* </div> */}




              </div>
            </div>
          </main>
        );



      case 'module8':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="module8" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">

              </h1>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Types of Blob Types
                </h2>
                {/* <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  
                </p> */}
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li> Click on the upload option</li>
                  <li>Once you click the Upload option, the Browse for Files page will appear. At the bottom of that page, select the Advanced dropdown option.</li>
                  <li>After clicking the Advanced dropdown option, the Blob Types will appear. Select the blob type you want from the list.</li>
                  <li>After selecting the blob type, all items will be displayed on the Overview page.</li>
                  {/* <li></li> */}
                </ul>

                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Blob Type</th>
                        <th className="border border-slate-400 p-3 text-left">Best For</th>
                        <th className="border border-slate-400 p-3 text-left">Example Use</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Block Blob</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Storing text or binary data</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Images, videos, documents, CSV files</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Append Blob</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Data that is constantly appended (append-only)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Logs, telemetry, audit data</td>
                      </tr>
                      
                     
                    </tbody>
                  </table>
                </div>
                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                  <li className='text-xl font-bold'>Block Blob</li>
                  <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Most common blob type used in Azure.</li>
                    <li className='text-xl font-bold'>What it is:</li>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Stores text and binary data (files like .txt, .jpg, .mp4, .csv, etc.)</li>
                      <li>Data is split into blocks, and each block is identified by a block ID.</li>
                      <li>You can upload or update blocks individually and commit them together.</li>
                    </ul>
                    <li className='text-xl font-bold'>Use Cases:</li>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Storing images, videos, PDFs, and backups.</li>
                      <li>Data files for analytics (CSV, JSON, Parquet).</li>
                      <li>Large files uploaded in chunks.</li>
                    </ul>
                    <li><strong className='text-xl'>Example:</strong><br />You upload a 500 MB video file — Azure divides it into smaller blocks and uploads each part separately for speed and reliability.</li>
                  </ul>
                  <li className='text-xl font-bold'>Append Blob</li>
                  <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Special type of blob for data that grows over time.</li>
                    <li className='text-xl font-bold'>What it is:</li>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Optimized for append operations — you can only add new data to the end, not modify or delete existing data.</li>
                      <li>Each time you add new information, it’s appended to the blob.</li>
                      {/* <li></li> */}
                    </ul>
                    <li className='text-xl font-bold'>Use Cases:</li>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Storing log files.</li>
                      <li>Application telemetry or diagnostics data.</li>
                      <li>Streaming data that’s constantly being added.</li>
                    </ul>
                    <li><strong className='text-xl'>Example:</strong><br />You’re logging website visits. Each time a new visitor arrives, their data (timestamp, IP, etc.) is appended to the existing log file.</li>
                  </ul>
                </ol>

                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Blob Type</th>
                        <th className="border border-slate-400 p-3 text-left">Structure</th>
                        <th className="border border-slate-400 p-3 text-left">Read/Write Behavior</th>
                        <th className="border border-slate-400 p-3 text-left">Common Use</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Block Blob</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Data stored as blocks</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Upload or replace blocks</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Files, media, documents</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Append Blob</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Sequentially added blocks</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Append-only</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Logs, telemetry, streaming data</td>
                      </tr>
                      
                     
                    </tbody>
                  </table>
                </div>
                
              </div>
            </div>
          </main>
        );



        case "module9":
          return(
            <main>
              <div className="animate-fade-in-up">
                <h1 id="module9" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">

              </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Types of Access Tiers
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Azure lets you store data in <b>different tiers</b> based on how often you need it. This helps <b>save money</b> by matching storage cost to usage.

                </p>
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Tier</th>
                        <th className="border border-slate-400 p-3 text-left">Cost</th>
                        <th className="border border-slate-400 p-3 text-left">Availability</th>
                        <th className="border border-slate-400 p-3 text-left">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Hot</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Highest cost</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Always available</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Cool</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Cheaper</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Cold</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Cheaper than Cool</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Slower access</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Archive</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Cheapest</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Retrieval takes hours</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Long-term backups, compliance storage</td>
                      </tr>
                      
                     
                    </tbody>
                  </table>
                </div>
                <ul className='pl-6 space-y-2 text-grat-700 mb-6'>
                  <li>Click on the upload option for <b>access tiers</b>.</li>
                  <li>After clicking the Upload option, the Browse for Files panel will appear below. The <b>Advanced dropdown</b> option will also be visible click on it.</li>
                  <li>After clicking the Advanced option, the <b>Access Tiers</b> section will appear. Click on it to view all access tier types, and then select one.</li>
                  <li>After selecting the access tier, the file will be uploaded to the Overview page.</li>
                </ul>
                
              </div>
            </div>
          </main>
          );



          case "module10":
          return(
            <main>
              <div className="animate-fade-in-up">
                <h1 id="module10" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">

                </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Azure Data Lake Storage Gen2 (ADLS Gen2)
                 </h2>
                 <div className="text-lg text-gray-700 mb-6">
                 Azure Data Lake Storage Gen2 is a highly scalable and secure <b>cloud storage service optimized for big data analytics</b> and data lakes. It builds on Azure Blob Storage capabilities but adds <b>file system semantics, hierarchical namespaces, and enhanced performance</b> for analytics workloads. <br/>
                 ADLS Gen2 is designed to store massive volumes of <b>structured</b>, <b>semi-structured</b> and <b>unstructured data</b>, making it ideal for big data and machine learning scenarios. 
                 </div>
                 <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                  <li className='text-xl font-bold'></li>
                  <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong>Hierarchical Namespace:</strong> Unlike traditional Blob Storage, ADLS Gen2 supports folders and directories, enabling efficient organization and faster file operations at scale.</li>
                    <li><strong>Optimized for Analytics:</strong> Supports Hadoop Distributed File System (HDFS) and integrates seamlessly with analytics frameworks like Azure Databricks, HDInsight, and Azure Synapse Analytics.</li>
                    <li><strong>Supports Multiple Data Types:</strong> You can store CSV, JSON, Parquet, Avro, ORC, images, videos, logs, backups, and more.</li>
                    <li><strong>Security and Compliance:</strong> Provides enterprise-grade security with Azure Active Directory integration, role-based access control (RBAC), and encryption at rest and in transit.</li>
                    <li><strong>Cost-effective and Scalable:</strong> Automatically scales to handle petabytes of data and millions of files with optimized storage tiers and pricing options.</li>
                  </ul>
                  <li className='text-xl font-bold'>Common Uses of ADLS Gen2:</li>
                  <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Building <b>data lakes</b> for big data analytics and machine learning.</li>
                    <li>Storing large datasets for <b>ETL (Extract, Transform, Load)</b> processes.</li>
                    <li>Integrating with analytics tools to perform complex queries and transformations.</li>
                    <li>Secure and compliant <b>storage for sensitive data</b> and audit logs.</li>
                    <li>Archiving and long-term data retention with tiered storage options.</li>
                  </ul>
                 </ul>
                 <h2 className='text-2xl font-bold text-slate-900 mb-3'>Create an Azure Data Lake Storage</h2>
                 <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                  <li><strong>Go to Azure Portal <br />
                  In the search bar, type “Storage Accounts” or “ADLS Gen2”
                  </strong></li>
                  <li>Click on storage accounts and click on create button</li>
                  <li>After clicking the Create button, the Basic Details page will appear. Fill in all the required details, and then click the <b><em>Next button</em></b>.</li>
                  <li>After clicking the Next button, the Advanced field will appear. <b><em>Select the required checkbox</em></b>, and then click the Review + Create button.</li>
                  <li>After clicking the <b><em>Review + Create</em></b> button, the Basic and Advanced fields will be displayed. Verify all the details, and then click the Create button.</li>
                  <li>After clicking the Create button, you will be taken to the Overview page. Here, click <b><em>Go to resource.</em></b></li>
                  <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                    <li className='text-xl font-bold'>Navigate to Your Resource Group</li>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>In the left-hand menu, click on <strong>Resource groups</strong></li>
                      <li>Find and click your resource group in your case:
                      <strong>rg-ohg365-de</strong>
                      </li>
                      <li><strong>Check for the Storage Account</strong></li>
                      <li>Inside the <strong>Overview</strong> tab of your resource group, you’ll see a list of all resources.</li>
                    </ul>
                    <li className='text-xl font-bold'>Look for an item that looks like this:</li>
                    <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>Type:</strong><em>Storage account</em></li>
                      <li><strong>Name:</strong><em className='text-blue-700 underline'>adlsohg365dev</em> (or whatever name you used)</li>
                    </ul>
                  </ul>
                  <li>If it appears there,congratulations your <strong>ADLS Gen2 Storage account</strong> has been successfully created</li>
                  <li>After clicking the Go to resource option, all resource names within the resource group will be displayed in the Overview page.</li>
                 </ul>
                 
                </div>
              </div>
            </main>
          );


          case "module11":
          return(
            <main>
              <div className="animate-fade-in-up">
                <h1 id="module11" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                  Introduction to Azure Databricks
                </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  What is Azure Databricks?
                 </h2>
                 <div className='text-lg text-gray-700 mb-6'>
                  Azure Databricks is a cloud platform that helps people work with data and artificial intelligence in one place. It brings together tools for data engineering, data science, and machine learning, so teams can easily collect, clean, and analyze data. <br />
                  It uses a “lakehouse” design, a mix of a data lake and a data warehouse, which makes it easier to store large amounts of data and use it quickly for insights or AI projects. Databricks is built on open-source tools like Apache Spark and Delta Lake, and it can run on major cloud platforms such as Azure, AWS, and Google Cloud. <br />
                  Azure Databricks is a cloud-based platform that helps you work with data, analytics, and AI in one place. It combines tools for storing, processing, and analyzing data so that teams can easily build and share data projects. <br />
                  It connects directly with your cloud storage and takes care of setting up and managing the required infrastructure for you. <br />
                  Using Generative AI, Azure Databricks can understand your data and automatically improve performance to meet your needs. It also uses natural language processing (NLP), which means you can find data or get help just by typing questions in plain English. It can even help you write code, fix issues, and explore documentation easily. <br />

                  <h2 className='text-2xl font-bold text-slate-900 mb-3'>Key Features of Azure Databricks</h2>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong>Unified Workspace:</strong><br />A single place where data engineers, data scientists, and analysts can work together on data and AI projects.</li>
                    <li><strong>Lakehouse Architecture:</strong><br />Combines the best parts of data lakes and data warehouses, making it easier to store and use data efficiently.</li>
                    <li><strong>Scalability:</strong><br />Automatically adjusts resources based on your workload, so you can handle small or large amounts of data easily.</li>
                    <li><strong>Built on Apache Spark:</strong><br />Uses Spark, a fast and powerful open-source engine, to process large data quickly.</li>
                    <li><strong>Delta Lake Integration:</strong><br />Ensures your data is reliable and consistent by handling updates and corrections efficiently.</li>
                    <li><strong>Collaborative Notebooks:</strong><br />Let's teams write code, visualize data, and share work in real time using notebooks that support Python, SQL, R, and Scala.</li>
                    <li><strong>Seamless Cloud Integration:</strong><br />Works smoothly with Azure services like Data Lake Storage, Synapse, Machine Learning, and Power BI.</li>
                    <li><strong>AI and Machine Learning Support:</strong><br />Provides built-in tools to train, test, and deploy machine learning and AI models easily.</li>
                    <li><strong>Security and Compliance:</strong><br />Protects your data using Azure’s enterprise-grade security, including encryption, role-based access, and compliance certifications.</li>
                    <li><strong>Natural Language Assistance (Generative AI):</strong><br />Let's users find data, write code, and fix errors just by asking questions in plain English.</li>
                  </ul>
                 </div>
                  <h2 className='text-2xl font-bold text-slate-900 mb-3'>Databricks Architecture</h2>
                  <p className='text-lg text-gray-700 mb-6'>
                    Azure Databricks follows a multi-layer architecture built on top of Apache Spark and Delta Lake, integrated deeply with Azure cloud services. It unifies data engineering, analytics, and AI within a single environment.

                  </p>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong>Storage Layer (Data and Delta Lake):</strong><br />
                      Connects directly to cloud storage such as Azure Data Lake Storage (ADLS Gen2) or Blob Storage. <br />
                      Delta Lake acts as the transactional storage layer, providing:
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>ACID compliance</li>
                        <li>Schema enforcement and evolution</li>
                        <li>Data versioning (time travel)</li>
                        <li>Scalable metadata handling</li>
                      </ul>
                      </li>
                    <li><strong>Compute Layer (Clusters and Runtime):</strong><br />Uses Databricks Clusters — groups of VMs — for distributed data processing. <br />
                     Powered by Databricks Runtime (DBR), an optimized engine based on Apache Spark. <br />
                     Supports autoscaling, auto-termination, and GPU/CPU clusters for different workloads. <br />
                     </li>
                    <li><strong>Control Plane:</strong><br />Managed by Databricks (in Azure). <br />
                      Handles user authentication, workspace management, notebook storage, job scheduling, and cluster configuration. <br />
                      Stores metadata and notebook information securely.
                      </li>
                    <li><strong>Data Plane:</strong><br />Runs inside your Azure subscription. <br />
                      Responsible for actual data processing and storage. <br />
                      All data remains in your cloud environment — ensuring compliance and security. <br />
                      </li>
                    <li><strong>Workspace / User Interface Layer:</strong><br />A collaborative web-based environment for developers, data engineers, and scientists. <br />
                      Supports multiple languages — Python, SQL, R, Scala, Java. <br />
                      Includes features like notebooks, repos, dashboards, and job orchestration.
                      </li>
                    <li><strong>Machine Learning and AI Layer:</strong><br />Integrates MLflow for experiment tracking, model registry, and deployment. <br />
                      Supports integration with Azure Machine Learning for end-to-end MLOps.
                      </li>
                    <li><strong>Security and Governance Layer:</strong><br />Managed through Unity Catalog for centralized access control, data lineage, and auditing. <br />
                    Uses Azure Active Directory (AAD) for authentication and RBAC for authorization.
                    </li>
                    {/* <li><strong></strong><br /></li> */}
                    {/* <li><strong></strong><br /></li> */}
                    {/* <li><strong></strong><br /></li> */}
                    {/* <li><strong></strong><br /></li>   */}
                  </ul>

                  <h2 className='text-2xl font-bold text-slate-900 mb-3'>Common Use Cases of Azure Databricks</h2>
                  {/* <p className='text-lg text-gray-700 mb-6'>
                    Azure Databricks follows a multi-layer architecture built on top of Apache Spark and Delta Lake, integrated deeply with Azure cloud services. It unifies data engineering, analytics, and AI within a single environment.

                  </p> */}
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong>Data Engineering:</strong><br />Used to collect, clean, and prepare large amounts of data from different sources before analysis or reporting.</li>
                    <li><strong>Data Analytics:</strong><br />Helps analyze and visualize data to find useful patterns and trends for better decision-making.</li>
                    <li><strong>Machine Learning and AI:</strong><br />Allows users to train, test, and deploy machine learning and AI models directly within the platform.</li>
                    <li><strong>Real-Time Data Processing:</strong><br />Can handle streaming data — for example, analyzing live sensor data or real-time transactions.</li>
                    <li><strong>Data Warehousing and BI:</strong><br />Works with tools like Power BI to create reports and dashboards from stored data.</li>
                    <li><strong>ETL (Extract, Transform, Load) Pipelines:</strong><br />Automates the process of moving and transforming data from one system to another for analysis.</li>
                    <li><strong>Data Lakehouse Management:</strong><br />Combines data lake storage with data warehouse features, making it easier to manage both structured and unstructured data.</li>
                    <li><strong>Collaborative Data Projects:</strong><br />Let’s teams of data engineers and data scientists work together in shared notebooks and environments.</li>
                    <li><strong>Predictive Analytics:</strong><br />Used to forecast trends or outcomes — for example, predicting customer behaviour, sales, or equipment failure.</li>
                  </ul>

                  <h2 className='text-2xl font-bold text-slate-900 mb-3'>Core Components of Azure Databricks</h2>
                  {/* <p className='text-lg text-gray-700 mb-6'>
                    Azure Databricks follows a multi-layer architecture built on top of Apache Spark and Delta Lake, integrated deeply with Azure cloud services. It unifies data engineering, analytics, and AI within a single environment.

                  </p> */}
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong>Workspace:</strong><br />This is the main area where you and your team can create notebooks, manage data, and work together on data and AI projects.</li>
                    <li><strong>Notebooks:</strong><br />Interactive notebooks where you can write and run code in languages like Python, SQL, R, or Scala to explore and visualize data.</li>
                    <li><strong>Clusters:</strong><br />Groups of virtual machines that run your data processing tasks. They automatically scale up or down based on the workload.</li>
                    <li><strong>Jobs:</strong><br />Used to schedule and automate tasks like data processing, transformations, or machine learning model training.</li>
                    <li><strong>Data Lake and Delta Lake:</strong><br />Delta Lake stores and manages your data in a reliable way, adding features like version control, updates, and rollbacks on top of your data lake.</li>
                    <li><strong>Databricks Runtime:</strong><br />The engine that runs your Spark jobs — it’s optimized for faster performance and lower costs.</li>
                    <li><strong>Repos (Version Control):</strong><br />Lets you connect GitHub or Azure DevOps for source control, so you can manage and track changes to your code easily.</li>
                    <li><strong>MLflow:</strong><br />A built-in tool for managing the complete machine learning lifecycle — from model training and tracking to deployment.</li>
                    <li><strong>Unity Catalog:</strong><br />A centralized data governance and access management system that helps control who can access which data across the platform.</li>
                    <li><strong>Dashboarding and Visualization:</strong><br />Allows you to create charts, graphs, and dashboards to share insights and monitor your data pipelines.</li>
                  </ul>


                  <h2 className='text-2xl font-bold text-slate-900 mb-3'>Advantages of Azure Databricks</h2>
                  {/* <p className='text-lg text-gray-700 mb-6'>
                    Azure Databricks follows a multi-layer architecture built on top of Apache Spark and Delta Lake, integrated deeply with Azure cloud services. It unifies data engineering, analytics, and AI within a single environment.

                  </p> */}
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong>Unified Analytics and AI Platform:</strong><br />Combines data engineering, data science, and analytics into a single, collaborative workspace for end-to-end data workflows.</li>
                    <li><strong>High Performance and Scalability:</strong><br />Optimized Apache Spark runtime ensures faster execution, while autoscaling dynamically adjusts cluster size to handle any workload efficiently.</li>
                    <li><strong>Delta Lake Reliability:</strong><br />Provides ACID transactions, schema enforcement, and time travel features for consistent and reliable data pipelines.</li>
                    <li><strong>Deep Azure Ecosystem Integration:</strong><br />Natively connects with Azure Data Lake Storage, Synapse Analytics, Power BI, Azure ML, and Active Directory for seamless interoperability.</li>
                    <li><strong>Multi-Language and Multi-User Collaboration:</strong><br />Supports Python, SQL, R, Scala, and Java within shared notebooks for cross-functional team collaboration.</li>
                    <li><strong>Automated Cluster and Job Management:</strong><br />Simplifies operational overhead with autoscaling, auto-termination, and job scheduling capabilities.</li>
                    <li><strong>Advanced Security and Governance:</strong><br />Offers enterprise-grade security through RBAC, encryption at rest/in transit, and governance via Unity Catalog.</li>
                    <li><strong>Integrated ML and MLOps:</strong><br />Built-in MLflow enables experiment tracking, model versioning, and deployment supporting the full ML lifecycle.</li>
                    <li><strong>Cost Optimization:</strong><br />Pay-as-you-go model with efficient resource utilization and intelligent scaling reduces infrastructure costs.</li>
                    <li><strong>AI-Powered Assistance:</strong><br />Integrates generative AI and natural language capabilities for faster code generation, data discovery, and troubleshooting.</li>
                  </ul>
                </div>
              </div>
            </main>
          );



          case "module12":
          return(
            <main>
              <div className="animate-fade-in-up">
                <h1 id="module12" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                  
                </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  How to Create Azure Databricks
                 </h2>
                 <div className='text-lg text-gray-700 mb-6'>
                 <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>Go to the Azure portal and search for Databricks</li>
                  <li>Click on create</li>
                  <li>Create databricks</li>
                  <li><strong>Subscription</strong><br />Choose the Azure subscription under which the Databricks workspace will be created. <br />
                    Example: Azure subscription 1
                    </li>
                  <li><strong>Resource Group</strong><br />Select an existing Resource Group or create a new one. <br />
                    Resource groups act like folders to organize and manage related resources. <br />
                    Example: rg-ohg365-dev
                    </li>
                  <li><strong>Workspace Name</strong><br />Enter a unique workspace name for your Databricks instance. <br />
                    Example: ohg365-db-dev
                    </li>
                  <li><strong>Region</strong><br />Choose the Azure region where your workspace will be hosted. <br />
                    Example: Central US
                    </li>
                  <li><strong>Pricing Tier</strong><br />Select the pricing tier — typically Premium (+ Role-based access controls) for better management and security features.</li>
                  <li><strong>Managed Resource Group Name</strong><br />Azure automatically creates a Managed Resource Group to hold internal resources required by Databricks.
Example: mg-ohg365-db-dev
</li>
                  <li><strong>Final Step – Review + Create</strong><br />Click Review + create to validate your settings and proceed with workspace creation.
</li>
<li>While creating an Azure Databricks workspace, Azure automatically creates a separate resource group called a Managed Resource Group. This group contains and manages all the supporting resources required for the Databricks workspace, as shown in the screenshot below.
</li>
                 </ul>

                 </div>
                 </div>
                 </div>
                 </main>
                 );



                 case 'module13':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module13" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                       Databricks Workspace Overview
                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          Databricks Workspace Overview
                          </h2>
                          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                            <li>Click on Databricks Workspace</li>
                            <li>Click on the lunch workspace button</li>
                            <li><strong>Left Sidebar (Navigation Menu):</strong><br />The left-hand menu provides quick access to all major Databricks features and tools:</li>
                            <li><strong>Workspace:</strong><br />Where you can create and organize notebooks, folders, and projects.</li>
                            <li><strong>Recents:</strong><br />Shows recently opened notebooks or files.</li>
                            <li><strong>Catalog:</strong><br /> Central place to access and manage data using Unity Catalog. It is delta lake.</li>
                            <li><strong>Jobs & Pipelines:</strong><br />For automating workflows, scheduling data processing, or running ETL pipelines.</li>
                            <li><strong>Compute:</strong><br />Manage clusters and compute resources used for data processing.</li>
                            <li><strong>Marketplace:</strong><br /> Discover and use prebuilt datasets, notebooks, and solutions.</li>
                            <li><strong>SQL Section:</strong><br /></li>
                            <li><strong>SQL Editor:</strong><br />Write and run SQL queries.</li>
                            <li><strong>Queries / Dashboards:</strong><br />Create and view reports and dashboards.</li>
                            <li><strong>Genie & Alerts:</strong><br /> Access AI-powered query tools and set up notifications.</li>
                            <li><strong>SQL Warehouses:</strong><br />Manage dedicated SQL compute environments.</li>
                            <li><strong>Data Engineering Section:</strong><br /></li>
                            <li><strong>Job Runs / Data Ingestion:</strong><br />Monitor job executions and load data into Databricks.</li>
                            <li><strong>AI/ML Section:</strong><br /></li>
                            <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                              <li><strong> Playground (Mosaic AI Playground)</strong></li>
                              <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                <li>The Playground is an interactive environment that allows you to experiment with generative AI models (like LLMs).</li>
                                <li>You can test prompts, analyze responses, and refine model behavior — all in a no-code or low-code interface.</li>
                                <li>It’s designed to help you quickly prototype AI use cases such as:</li>
                                <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                <li>Chatbots</li>
                                <li>Text summarization</li>
                                <li>Sentiment analysis</li>
                                <li>Document Q&A systems</li>
                              </ul>
                                <li>Uses Mosaic AI technology to connect your own business data with foundation models securely.</li>
                              </ul>
                              <li><strong> Experiments</strong></li>
                              <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                <li>The Experiments feature helps you track, compare, and manage machine learning runs.</li>
                                <li>It integrates with MLflow Tracking, allowing you to:</li>
                                {/* <li></li> */}
                                <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                <li>Record parameters, metrics, and model versions.</li>
                                <li>Compare results of multiple training runs.</li>
                                <li>Identify which model performed best.</li>
                                {/* <li></li> */}
                              </ul>
                                {/* <li></li> */}
                              </ul>
                              <li><strong>Features (Feature Store)</strong></li>
                              <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                <li>The Feature Store is a central repository for machine learning features.</li>
                                <li>It allows teams to create, share, and reuse features across multiple models and projects.</li>
                                <li>Key benefits:</li>
                                <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                <li>Avoid duplication of feature engineering work.</li>
                                <li>Maintain consistency between training and serving data.</li>
                                <li>Improve model accuracy and governance.</li>
                                {/* <li></li> */}
                              </ul>
                                {/* <li></li> */}
                              </ul>
                              <li><strong>Models (Model Registry)</strong></li>
                              <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                <li>The Model Registry is where you store, version, and manage ML models created during experiments.</li>
                                <li>You can:</li>
                                {/* <li></li> */}
                                <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                <li>Track model versions and metadata.</li>
                                <li>Approve or reject models for production.</li>
                                <li>Manage model lifecycle stages: Staging → Production → Archived.</li>
                                {/* <li></li> */}
                              </ul>
                                <li>Fully integrated with MLflow, ensuring seamless collaboration between teams.</li>
                              </ul>
                              <li><strong>Serving (Model Serving)</strong></li>
                              <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                <li>Model Serving lets you deploy ML models as REST API endpoints directly from Databricks.</li>
                                <li>Supports real-time and batch predictions.</li>
                                <li>Automatically scales based on usage and integrates with your data pipelines.</li>
                                {/* <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                              </ul> */}
                                <li>Allows secure access to deployed models with minimal setup.</li>
                              </ul>
                              <li><strong>Main Panel (Welcome Screen):</strong></li>
                              <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                <li>Displays a welcome message and a quick setup option — “Set up your workspace.”</li>
                                <li>Provides a search bar to quickly find data, notebooks, or past work.</li>
                                <li>Contains quick links like Recents, Favorites, Popular, and Mosaic AI to navigate faster.</li>
                                {/* <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                              </ul> */}
                                <li>The “+ New” button lets you start creating a new notebook, job, or dashboard immediately.</li>
                              </ul>
                              <li><strong>Top Navigation Bar:</strong></li>
                              <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                <li>Shows your workspace name (e.g., ohg365-db-dev).</li>
                                <li>Allows switching between workspaces or accessing your account settings.</li>
                                <li>Contains shortcuts to Microsoft Azure and Databricks home.</li>
                                {/* <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                              </ul>
                                <li></li> */}
                              </ul>
                            </ol>
                          </ul>

                        </div>
                      </div>
                    </main>
                  );



                  case 'module14':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module14" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                       Databricks Features
                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          Databricks Features
                          </h2>
                          <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                            The Workspace in Databricks is a collaborative environment where data engineers, data scientists, and analysts can create, share, and manage all Databricks-related resources such as notebooks, libraries, dashboards, and folders.

                          </p>
                          <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                            <li><strong> Key Components in the Workspace</strong></li>
                            <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Component</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Repos</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Used for Git integration. It allows you to link your Databricks workspace to repositories in GitHub, Azure DevOps, or Bitbucket to manage version control for notebooks and projects.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Shared</td>
                        <td className="border border-slate-400 p-3 text-gray-900">A shared folder accessible to multiple team members in your workspace. It’s commonly used for collaboration on notebooks, models, and scripts.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Users</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Contains individual user folders. Each user has a personal workspace where they can create and manage private notebooks and experiments.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Home / Shared with me</td>
                        <td className="border border-slate-400 p-3 text-gray-900">“Home” is your personal starting directory, while “Shared with me” lists notebooks or folders shared by other users.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Favorites / Trash</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><strong>Favorites:</strong> Quickly access important or frequently used notebooks. <br />
                        <strong>Trash:</strong> Contains deleted notebooks or folders which can be restored or permanently removed.
                        </td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      
                      
                     
                    </tbody>
                  </table>
                </div>

                           
                            <li><strong>Shared:</strong> Shared with me lists notebooks or folders shared by other users.</li>
                            <li><strong>Users:</strong> Contains individual user folders. Each user has a personal workspace where they can create and manage private notebooks and experiments.</li>
                            <li><strong>Other Creation Options in the Dropdown</strong></li>
                             <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Option</th>
                        <th className="border border-slate-400 p-3 text-left">Purpose</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Folder</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Create a new folder to organize notebooks or scripts.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Git Folder</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Connect to a Git repository for version control.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Notebook</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Create a new Databricks notebook for code, visualization, or data analysis (Python, SQL, R, or Scala).</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">File</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Upload or create a script or configuration file.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Query</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Write SQL queries directly against your datasets.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Dashboard</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Build visual dashboards from your queries.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Genie Space</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Access AI-powered analytics assistant.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">ETL Pipeline</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Design and automate data pipelines.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Alert</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Set up notifications for query results or data changes.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr><tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">MLflow Experiment</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Track machine learning experiments, metrics, and models.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      
                      
                     
                    </tbody>
                  </table>
                </div>
                         
                            <li><strong>Notebook:</strong><br />Azure Databricks notebooks serve as a collaborative development environment for building data science, engineering, and machine learning workflows. <br />
                            They support multi-language scripting within a single document, real-time coauthoring, version control, and integrated data visualization. <br />
                            These features help streamline code development, data exploration, and result presentation in a unified platform.
                            </li>
                            <li><strong>Create First Notebook:</strong></li>
                            <li><strong>Recent’s:</strong> Shows recently opened notebooks or files.</li>
                            <li><strong>Catalog and Features (Unity Catalog)</strong>The Catalog in Azure Databricks is a central place to organize, manage, and secure all your data assets such as databases, tables, views, and files — across your entire Databricks environment. <br />It provides data governance, access control, and data discovery in one interface.</li>
                            <li><strong>Key Components in the Screenshot:</strong></li>
                            <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Section</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">My Organization</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lists catalogs created within your workspace — for example, ohg365_db_dev, system, and others. These hold schemas (databases) and tables.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Delta Shares Received</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Displays data shared with you from other Databricks workspaces using Delta Sharing, a secure open protocol for data sharing.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Legacy (hive_metastore)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The old default data catalog (used before Unity Catalog). It contains older Hive-based tables and schemas.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Search Bar</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lets you quickly find data assets (catalogs, schemas, tables).</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Quick Access (Right Panel)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Displays recently viewed or favorite datasets, making it easier to return to frequently used data.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      
                      
                     
                    </tbody>
                  </table>
                </div>
                <li><strong>Top Menu options:</strong></li>
                  <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Section</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Delta Sharing</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Manage secure data sharing between organizations.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Clean Rooms</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Enable collaboration on shared data without moving or copying it.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">External Data</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Connect to external sources like Azure Data Lake or Blob Storage.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Governance</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Manage access permissions, auditing, and compliance.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Add Data</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Option to import or register new datasets into the catalog.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      
                      
                     
                    </tbody>
                  </table>
                </div>
                          </ul>
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">Jobs & Pipelines</h2>
                          <p className='text-lg text-gray-700 mb-6'>
                            The Jobs & Pipelines interface in Azure Databricks provides a unified orchestration layer for data engineering and machine learning workflows.
                            It supports job scheduling, dependency management, pipeline orchestration, and execution monitoring.
                          </p>
                          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                            <li><strong>Key Features</strong></li>
                            <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                              <li><strong>Ingestion Pipelines:</strong> Automate ingestion from external data sources (databases, APIs, or files).</li>
                              <li><strong>ETL Pipelines:</strong> Design scalable, production-grade ETL processes using SQL, PySpark, or Python.</li>
                              <li><strong>Jobs:</strong> Orchestrate notebooks, workflows, pipelines, and queries; configure parameters, cluster settings, and triggers.</li>
                              <li><strong>Job Runs Dashboard:</strong> Monitor run history, logs, and metrics for troubleshooting and optimization.</li>
                              <li><strong>Access Control:</strong> Manage visibility (“Owned by me,” “Accessible by me”) to enforce workspace-level governance.</li>
                            </ul>
                            <li><strong>Use Case</strong><br />Used by data engineers and ML teams to build end-to-end pipelines from data ingestion to transformation, feature generation, and model retraining all under one environment. <br />
                            The Job Runs dashboard in Databricks provides an operational view of scheduled or triggered workflows. <br />
                            It allows engineers and ML teams to monitor, debug, and analyze job executions across environments.
                            </li>
                            <li><strong>Key Functionalities</strong></li>
                            <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                              <li><strong>Run Filtering:</strong> Filter runs by job, user, time range, run status, or error code.</li>
                              <li><strong>Run Visualization:</strong> Graph at the top visualizes the number of successful, failed, or skipped runs over time.</li>
                              <li><strong>Detailed Metadata:</strong> For each run, Databricks records the execution context — start/end time, duration, compute used, and run parameters.</li>
                              <li><strong>Error Handling:</strong> Provides error codes and logs to diagnose failure causes (e.g., cluster issues, data errors, script exceptions).</li>
                              <li><strong>Audit & Compliance:</strong> Maintains a complete audit trail for all pipeline executions — critical for production governance.</li>
                            </ul>
                            <li><strong>What Yoy See:</strong></li>
                            <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                              <li><strong>Start time -</strong> When the job started.</li>
                              <li><strong>Job name -</strong> Which job ran (for example, “ETL Pipeline”).</li>
                              <li><strong>Run as -</strong> Which user or role ran it.</li>
                              <li><strong>Duration -</strong> How long it took.</li>
                              <li><strong>Status -</strong> Shows if it succeeded, failed, or skipped.</li>
                              <li><strong>Error code -</strong> Displays the error message if something failed.</li>
                              <li><strong>Run parameters -</strong> Lists any input values (like parameters) used in that run.</li>
                            </ul>
                            {/* <li><strong></strong></li> */}
                            {/* <li><strong></strong></li> */}
                            {/* <li><strong></strong></li> */}
                          </ul>
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">Compute (Clusters)</h2>
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">Compute Categories</h3>
                          <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                            <li className='text-xl font-bold'>All-Purpose Compute (Interactive Clusters):</li>
                            <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                              <li>Designed for notebook-driven, collaborative data exploration.</li>
                              <li>Supports multi-user access, auto-scaling, and auto-termination.</li>
                              <li>Ideal for data science, ad-hoc analysis, and ML development.</li>
                            </ul>
                            <li className='text-xl font-bold'>Job Compute (Automated Clusters):</li>
                            <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                              <li>Spawned by the Jobs API or Databricks Workflows for pipeline orchestration.</li>
                              <li>Clusters are automatically created, executed, and terminated per job run.</li>
                              <li>Ideal for CI/CD, ETL, and production pipelines.</li>
                            </ul>
                            <li className='text-xl font-bold'>SQL Warehouses (Serverless and Classic):</li>
                            <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                              <li>Purpose-built compute for data analysts and BI tools.</li>
                              <li>Integrates with Power BI, Tableau, and Databricks SQL Dashboards.</li>
                              <li>Serverless option scales automatically and charges only for query duration.</li>
                            </ul>
                            <li className='text-xl font-bold'>Vector Search & Lakehouse AI (new additions):</li>
                            <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                              <li>Supports AI/ML model deployment, feature lookups, and semantic search.</li>
                              <li>Works with Unity Catalog and Model Serving endpoints for production AI systems.</li>
                              {/* <li></li> */}
                            </ul>
                          </ol>
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">Marketplace</h2>
                          <div className='text-lg text-gray-700 mb-6'>
                            Databricks Marketplace is a data and AI exchange platform that allows users to discover, share, and monetize datasets, AI models, and notebooks within the Databricks Lakehouse ecosystem — all powered by Delta Sharing (the open standard for secure data sharing). <br/>
                            It’s designed to make it easy for organizations to:
                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                              <li>Access third-party datasets (financial, marketing, healthcare, etc.)</li>
                              <li>Share their own data products securely</li>
                              <li>Speed up analytics and AI innovation without complex data integrations</li>
                            </ul>
                            <strong className='text-xl '>Key Components</strong>
                          </div>
                          <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Component</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Marketplace Listings</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Published datasets, ML models, or notebooks.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Providers</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Organizations offering data or AI content (e.g., FactSet, Salesforce).</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Consumers</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Databricks users or organizations that subscribe to listings.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Delta Sharing Protocol</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Enables secure, open-standard data exchange between different platforms.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Unity Catalog Integration</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ensures governance, lineage, and access control for shared assets.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      
                      
                     
                    </tbody>
                  </table>
                </div>
                          </div>
                          </div>
                          </main>
                          );


                case 'module15':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module15" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                       Databricks SQL

                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          SQL Editor

                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                            The SQL Editor in Databricks allows users to write, run, and visualize SQL queries directly on data stored in Unity Catalog, Delta tables, or external databases — all without needing to create a separate notebook. <br />
                            It’s designed for:

                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                              <li>Data Analysts</li>
                              <li>BI Developers</li>
                              <li>Data Engineers</li>
                              <li>Business users who prefer SQL-based analytics</li>
                            </ul>
                            Think of the SQL Editor as a notepad for data inside Databricks — <br />
                            where you can write and run SQL commands (like SELECT, JOIN, GROUP BY, etc.) on your company’s data tables. <br />
                            It’s like working in:


                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                              <li>SQL Server Management Studio (SSMS)</li>
                              <li>MySQL Workbench — <br />
                                but directly connected to your Databricks Lakehouse.
                                </li>
                            
                            </ul>
                            
                          </div>
                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>

                              <li className='text-xl font-bold'>Key Options </li>
                  <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Option</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Run all (1000)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Executes your SQL query. The “1000” indicates the max number of rows returned.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Database Selector (default)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lets you choose which catalog, schema, or database to query from.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Generate (AI)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Databricks Assistant can auto-generate SQL queries using AI (Ctrl + I).</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Connect</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Allows you to choose which SQL warehouse (compute cluster) to run the query on.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Schedule</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lets you set up automated query runs (for reports or alerts).</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Share</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Share your query or results with other Databricks users.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Save</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Save your query as a draft, dashboard widget, or SQL alert.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Add Parameter</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Add variables like dates or IDs dynamically to queries.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      
                      
                     
                    </tbody>
                  </table>
                </div>
                              <li className='text-xl font-bold'>Advanced SQL Editor Features</li>
                              <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Feature</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">AI Assistant (Generate)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Use AI (Ctrl + I) to create SQL automatically from a prompt (e.g., “show top 10 products by revenue”).</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Visual Output</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Query results can be visualized as tables, bar charts, line graphs, etc.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Saved Queries</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Queries can be stored and reused from the “Queries” tab.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Query Parameters</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Dynamic filters can be used for dashboards and alerts.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Scheduling & Alerts</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Run queries hourly/daily and send alerts when thresholds are reached.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Integration with SQL Warehouses</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Choose a compute cluster optimized for BI workloads.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Export Options</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Export results as CSV or share within a dashboard.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
                              <li className='text-xl font-bold'>Professional Use Cases</li>
                              <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Role</th>
                        <th className="border border-slate-400 p-3 text-left">Example Use Case</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Data Analyst</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ad-hoc query and visualization for business reports</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Data Engineer</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Validate Delta table transformations</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">BI Developer</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Build dashboards directly from SQL Editor</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Data Scientist</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Fetch clean subsets of data for ML notebooks</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Manager / Stakeholder</td>
                        <td className="border border-slate-400 p-3 text-gray-900">View high-level KPIs in SQL dashboards</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ul>
              <h2 className='text-3xl font-bold text-slate-900 mb-3'>Queries</h2>
              <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                The Queries interface lets you develop and manage SQL statements that interact directly with data in Databricks SQL Warehouses. You can track query execution history, collaborate with team members, tag queries for organization, and use scheduling for automated reporting.

              </p>
              <h3 className='text-2xl font-bold text-slate-900 mb-3'>Available Options in the Queries Section</h3>
              <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                <li><strong>Create Query –</strong> Opens a new SQL editor window where you can start writing SQL statements.</li>
                <li><strong>Open Editor –</strong> Quickly navigate back to the SQL editor to modify existing queries.</li>
                <li><strong>Filter Queries –</strong> Search for queries by name or tag.</li>
                <li><strong>Tabs:</strong>
                <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                  <li><strong>My Queries –</strong> Shows only your saved queries.</li>
                  <li><strong>Favorites –</strong> Displays queries you’ve marked as important.</li>
                  <li><strong>All Queries –</strong> Lists all available queries within the workspace.</li>
                </ul>
                </li>
                <li><strong>Created By / Created At –</strong> Helps you identify who created the query and when.</li>
                <li><strong>Query History –</strong> Access past runs, view execution times, and troubleshoot failed queries.</li>
                <li><strong>Dashboards Integration –</strong> Save query results and directly add them to dashboards for visualization.</li>
              </ol>
              <h2 className='text-3xl font-bold text-slate-900 mb-3'>Dashboards</h2>
              <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                Databricks Dashboards provide a powerful visualization layer built directly on top of Databricks SQL. They support real-time data refresh, query scheduling, and access control for collaboration. <br />
                You can embed dashboards in other apps or share them securely within your workspace. It’s great for operational monitoring, BI reporting, and executive summaries.
                <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                  <li className='text-xl font-bold'>Options and Features in the Dashboard Section</li>
                  <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong className='text-xl'>Create Dashboard –</strong> Start building your own dashboard from scratch using your saved queries or visualizations.</li>
                    <li><strong className='text-xl'>View Samples Gallery –</strong> Explore prebuilt sample dashboards such as NYC Taxi Trip Analysis and Retail Revenue & Supply Chain to understand layout and visualization options.</li>
                    <li><strong className='text-xl'>Filter Dashboards –</strong> Quickly search for dashboards by name or owner.</li>
                    <li><strong className='text-xl'>Tabs:</strong>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>All –</strong> Displays every dashboard you have access to.</li>
                      <li><strong>Favorites –</strong> Your bookmarked dashboards.</li>
                      <li><strong>Popular –</strong> Dashboards frequently viewed by others.</li>
                      <li><strong>Last Modified / Owner Filters –</strong> Sort and manage dashboards based on activity or ownership.</li>
                    </ul></li>
                    <li><strong className='text-xl'>Legacy Dashboards –</strong> View or migrate older dashboards built using the classic interface.</li>
                    <li><strong className='text-xl'>Visualization Types Supported:</strong>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Bar, Line, Area, and Pie charts</li>
                      <li>Scatter plots and maps</li>
                      <li>Summary tables and KPI cards</li>
                    </ul></li>
                    <li><strong className='text-xl'>Integration:</strong>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Link dashboards directly to Queries or Notebooks</li>
                      <li>Automate data refresh schedules</li>
                      <li>Share via workspace or URL</li>
                    </ul></li>
                  </ol>
                  <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                    Legacy Dashboards in Databricks are maintained mainly for backward compatibility. They support dashboards created with the classic Databricks SQL editor. <br />
                    While functional, they lack newer visualization features, layout flexibility, and integration capabilities present in the modern dashboards. <br />
                    It’s recommended to migrate older dashboards to the new dashboarding experience for improved performance, interactivity, and long-term support.
                  </p>
                  <li><strong className='text-lg'>Key Options and Features (Legacy Dashboards Section)</strong>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li className='text-xl font-bold'>Tabs and Filters:</li>
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong>My Dashboards –</strong> Dashboards you’ve created.</li>
                        <li><strong>Favorites –</strong> Frequently used dashboards you’ve bookmarked.</li>
                        <li><strong>All Dashboards –</strong> View dashboards shared across your workspace.</li>
                        <li><strong>Filter Dashboards –</strong> Quickly locate dashboards by name, creator, or tag.</li>
                      </ul>
                      <li className='text-xl font-bold'>Actions Available:</li>
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong>View Samples Gallery –</strong> Explore sample dashboards with built-in charts and data models.</li>
                        <li><strong>Create Dashboard –</strong> Create a new dashboard (though it’s best to use the new dashboard UI).</li>
                      </ul>
                      <li className='text-xl font-bold'>Legacy Dashboard Use Cases:</li>
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Maintaining compatibility with older workflows</li>
                        <li>Referencing historical SQL visualizations</li>
                        <li>Supporting BI users during migration to new dashboards</li>
                        {/* <li></li> */}
                      </ul>
                      <li className='text-xl font-bold'>Migration Note:</li>
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Databricks encourages using the new “Dashboards” tab for creating interactive and shareable reports.</li>
                        <li>The new version offers drag-and-drop editing, better visuals, and integrations with Databricks SQL queries and alerts.</li>
                        {/* <li></li> */}
                        {/* <li></li> */}
                      </ul>
                    </ul>
                  </li>
                </ul>
              </div>
              <h2 className='text-3xl font-bold text-slate-900 mb-3'>Genie</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    Databricks Genie is a Generative AI-powered assistant built into the Databricks SQL workspace. <br />
                    It allows users to ask questions about data using natural language (like English sentences) — and Genie automatically generates SQL queries, runs them, and visualizes the results.

                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Genie uses natural language understanding (NLU) to parse questions and generate optimized SQL queries based on data catalog metadata.</li>
                    <li>It can work across Unity Catalog, SQL Warehouses, and Delta Tables.</li>
                    <li>Ideal for:
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong>Data analysts</strong> exploring ad hoc questions</li>
                        <li><strong>Business users</strong> performing self-service analytics</li>
                        <li><strong>Teams</strong> collaborating in Genie “Spaces” to share question-answer results</li>
                      </ul>
                    </li>
                    <li><strong>Key Options in the Genie Interface (from the screenshot)</strong></li>
                    <li><strong>Filter spaces –</strong> Search for an existing “Genie Space.”</li>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>A space is like a shared workspace for Genie conversations.</li>
                    </ul>
                    <li><strong>Tabs:</strong>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>All –</strong> View all Genie spaces accessible to you.</li>
                      <li><strong>Favorites –</strong> Quickly access frequently used spaces.</li>
                      <li><strong>Popular –</strong> See trending Genie spaces used by your team.</li>
                      <li><strong>Last Modified –</strong> Sort by recent updates.</li>
                      <li><strong>Owner –</strong> Filter by creator or data owner.</li>
                    </ul></li>
                    <li><strong>New –</strong> Create a new Genie space to start a natural language query session.
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Add datasets or tables.</li>
                      <li>Ask AI questions about those datasets.</li>
                      <li>Save and share results or charts.</li>
                    </ul></li>
                    <li><strong>Genie Spaces</strong><br />A Genie Space is a shared area where you can:
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Add datasets or views</li>
                      <li>Ask natural language questions</li>
                      <li>Save queries and visualizations</li>
                      <li>Collaborate with team members</li>
                    </ul></li>
                  </ul>
                  </div>
              <h3 className='text-2xl font-bold text-slate-900 text-center mb-3'>Advantages of Databricks Genie</h3>
                           <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Feature</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">AI-driven</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Converts natural language to accurate SQL</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Fast Insights</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Quick data exploration without manual queries</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Visualization</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Auto-generates charts and dashboards</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Secure</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Works with Unity Catalog permissions</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Collaborative</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Supports multi-user spaces and shared queries</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Integrated</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Works with SQL Warehouses and Delta tables</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-3'>Alerts</h3>
              <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                Alerts in Azure Databricks help you automatically monitor data conditions or metrics in your SQL queries and get notified when something important changes. <br />
                They make it easy to track trends, catch issues early, and stay updated without checking dashboards manually. <br />
                Alerts can be connected to SQL queries, dashboards, or KPIs across Unity Catalog datasets.
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                  <li className='font-bold text-lg'>You can:</li>
                  <ul className='list-[circle] pl-6 space-y-2 text-gray-700'>
                    <li>Automate anomaly detection for production data.</li>
                    <li>Trigger alerts for pipeline monitoring, threshold breaches, or data quality checks.</li>
                    <li>Integrate alerts into workflow tools like Azure Monitor or Slack using webhooks.</li>
                  </ul>
                  <li className='font-bold text-lg'> Advanced configurations let you:</li>
                  <ul className='list-[circle] pl-6 space-y-2 text-gray-700'>
                    <li>Adjust the schedule frequency.</li>
                    <li>Add multiple recipients.</li>
                    <li>Manage alerts programmatically via the Databricks REST API.</li>
                  </ul>
                </ul>


              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-3'>Key Elements in the Alerts UI</h3>
                        <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Element</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Filter alerts</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Search existing alerts by name or keyword.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">My alerts / All alerts</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Switch between alerts you created and those shared by your team.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">List section</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Displays alert name, status, last updated time, creator, and creation date.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Create alert</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Start setting up a new data alert (SQL query-based).</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Previous / Next</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Navigate between pages if you have multiple alerts.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-3'>Benefits of Using Databricks Alerts</h3>
                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Feature</th>
                        <th className="border border-slate-400 p-3 text-left">Benefit</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Automated Monitoring</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Tracks metrics and thresholds continuously</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Notifications</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Sends alerts via email or webhooks</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Collaboration</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Share alerts across teams or workspaces</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Secure</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Follows Unity Catalog access controls</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Integrated</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Works with queries, dashboards, and pipelines</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-3'>Benefits of Using Databricks Alerts</h3>
              <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                The Query History page in Databricks provides a complete log of all SQL queries executed in your workspace. <br />
                It helps users monitor performance, debug issues, track usage, and ensure compliance — all in one place. <br />
                The Query History view is essential for monitoring performance, auditing, and optimizing workloads:
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>You can track resource utilization across multiple SQL warehouses.</li>
                  <li>It’s useful for troubleshooting slow-running queries.</li>
                  <li>The Source column identifies where the query originated:
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                    <li className='font-bold'>SQL Editor</li>
                    <li className='font-bold'>Dashboard</li>
                    <li className='font-bold'>Alert</li>
                    <li className='font-bold'>API or Notebook</li>
                  </ul></li>
                  <li>You can also export query metrics via REST API for deeper analytics.</li>
                  <li>Integration with Unity Catalog ensures secure tracking of all user-level activity across workspaces.</li>
                </ul>


              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-3'>Key Options and Columns</h3>
                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Element</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">User</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shows who ran the query (e.g., your email ID). Helps identify the query owner.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Date Range</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Filters query history by time period (e.g., last day, week, month, or custom range).</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Compute</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Filters queries based on the SQL Warehouse or cluster used.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Duration</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lets you filter by how long queries took to run.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Status</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shows whether a query succeeded, failed, or was canceled.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Statement / Statement ID</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Displays SQL text and a unique identifier for each run. Useful for debugging or tracking jobs.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Refresh / Reset filters</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Reloads or clears filters to show all results again.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Columns in the table</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Includes Query, Started at, Duration, Source, Compute, User — all helping in tracking query performance.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
                <h3 className='text-2xl font-bold text-slate-900 mb-3'>Common Use Cases</h3>
                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Use Case</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Audit Log</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Track which users are querying what data for compliance or governance.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Performance Analysis</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Identify long-running queries and optimize them.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Troubleshooting</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Debug query failures using statement IDs.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Collaboration</td>
                        <td className="border border-slate-400 p-3 text-gray-900">See who ran what and when for shared datasets.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Alert Review</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Review the queries triggered by scheduled alerts or dashboards. </td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                     
                    </tbody>
                  </table>
                </div>






                          </div>
                          </div>
                          </main>
                          );


              case 'module16':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module16" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                      

                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          SQL Data Warehouse
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                            A SQL Warehouse (formerly called SQL Endpoint) is the compute resource in Databricks used to run SQL queries, dashboards, and alerts. <br />
                            It is designed for data analysts, BI developers, and engineers who work with SQL-based data processing — similar to how a cluster runs notebooks, but optimized for SQL workloads.
                          </div>

                          <h3 className='text-2xl font-bold text-slate-900 mb-3'>Key Components (from Screenshot)</h3>
                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Section</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Compute Tab</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Displays different compute options: All-purpose compute, Job compute, SQL warehouses, etc.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">SQL Warehouses Tab</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Dedicated area to view, start, stop, and manage all SQL Warehouses.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Filter SQL warehouses</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Search and filter warehouses by name.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Only my SQL warehouses</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Show only the warehouses created by you.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Created by / Size / Status / Type</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shows details about the warehouse (who made it, its size, whether it’s active, and its type).</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Create SQL warehouse button</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Used to create a new warehouse. Disabled if permissions are limited.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                     
                    </tbody>
                  </table>
                </div>

                <h3 className='text-2xl font-bold text-slate-900 mb-3'>Warehouse Properties (Visible Example)</h3>
                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Property</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Name</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Serverless Starter Warehouse — this is a default pre-configured warehouse.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Created by</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The user who created it (e.g., manoj vemula).</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Size</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Defines compute power (Small, Medium, Large, etc.). Determines speed and cost.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Active / Max</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shows how many users or queries are currently running on the warehouse.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Type</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Serverless — means Databricks automatically manages compute resources.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                     
                    </tbody>
                  </table>
                </div>

                <h3 className='text-2xl font-bold text-slate-900 mb-3'>Types of SQL Warehouses</h3>
                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Type</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        <th className="border border-slate-400 p-3 text-left">Use Case</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Serverless SQL Warehouse</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Fully managed by Databricks. Scales automatically and starts instantly.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Great for quick analysis and dashboards.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Classic(Pro) SQL Warehouse</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Requires manual scaling and management. You control cluster size and scaling.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Used for enterprise workloads needing more control and predictable cost.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className='text-2xl font-bold text-slate-900 mb-3'>Common Use Cases</h3>
                <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>You can define:</li>
                  <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong>Name</strong> of warehouse</li>
                    <li><strong>Cluster size</strong> (e.g., Small, Medium, 2X-Large)</li>
                    <li><strong>Auto-stop</strong> timeout to save costs</li>
                    <li><strong>Max concurrency</strong> (how many queries run at once)</li>
                    <li><strong>Permissions</strong> (who can access or run queries)</li>
                    <li><strong>Channel</strong> (stable, preview, etc.)</li>
                  </ul>
                </ul>


                <h3 className='text-2xl font-bold text-slate-900 mb-3'>Technical Features</h3>
                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Feature</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Elastic scaling</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Automatically adjusts resources to handle varying workloads.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Pay-per-use</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Charged per DBU (Databricks Unit) based on compute time.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Optimized for BI Tools</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Integrates with Power BI, Tableau, and Looker for live queries.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Serverless Architecture</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Starts instantly; no need to wait for cluster startup.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Unity Catalog Integration</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Enforces data access control and audit policies.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
                        </div>
                      </div>
                    </main>
                  );


                  case 'module17':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module17" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                      Data Engineering

                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          Jobs run’s
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                            he Jobs & Pipelines interface in Azure Databricks provides a unified orchestration layer for data engineering and machine learning workflows. <br />
                            It supports job scheduling, dependency management, pipeline orchestration, and execution monitoring.

                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                              <li className='text-xl font-bold'>Key Features</li>
                              <ul>
                                <li><strong>Ingestion Pipelines:</strong> Automate ingestion from external data sources (databases, APIs, or files).</li>
                                <li><strong>ETL Pipelines:</strong> Design scalable, production-grade ETL processes using SQL, PySpark, or Python.</li>
                                <li><strong>Jobs:</strong> Orchestrate notebooks, workflows, pipelines, and queries; configure parameters, cluster settings, and triggers.</li>
                                <li><strong>Job Runs Dashboard:</strong> Monitor run history, logs, and metrics for troubleshooting and optimization.</li>
                                <li><strong>Access Control:</strong> Manage visibility (“Owned by me,” “Accessible by me”) to enforce workspace-level governance.</li>
                                {/* <li><strong></strong></li> */}
                              </ul>
                              <li className='text-xl font-bold'>Use Case 
                                <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                                  Used by data engineers and ML teams to build end-to-end pipelines — from data ingestion to transformation, feature generation, and model retraining — all under one environment. <br />
                                  The Job Runs dashboard in Databricks provides an operational view of scheduled or triggered workflows. <br />
                                  It allows engineers and ML teams to monitor, debug, and analyze job executions across environments.

                                </p></li>
                              <li className='text-xl font-bold'>Key Functionalities</li>
                              <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                <li><strong>Run Filtering:</strong> Filter runs by job, user, time range, run status, or error code.</li>
                                <li><strong>Run Visualization:</strong> Graph at the top visualizes the number of successful, failed, or skipped runs over time.</li>
                                <li><strong>Detailed Metadata:</strong> For each run, Databricks records the execution context — start/end time, duration, compute used, and run parameters.</li>
                                <li><strong>Error Handling:</strong> Provides error codes and logs to diagnose failure causes (e.g., cluster issues, data errors, script exceptions).</li>
                                <li><strong>Audit & Compliance:</strong> Maintains a complete audit trail for all pipeline executions — critical for production governance.</li>
                              </ul>
                              <li className='text-xl font-bold'>What You See:
                              </li>
                                <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                  <li><strong>Start time -</strong> When the job started.</li>
                                  <li><strong>Job name -</strong> Which job ran (for example, “ETL Pipeline”).</li>
                                  <li><strong>Run as -</strong> Which user or role ran it.</li>
                                  <li><strong>Duration -</strong> How long it took.</li>
                                  <li><strong>Status -</strong> Shows if it succeeded, failed, or skipped.</li>
                                  <li><strong>Error code -</strong> Displays the error message if something failed.</li>
                                  <li><strong>Run parameters -</strong> Lists any input values (like parameters) used in that run.</li>
                                </ul>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </main>
                  );


                  case 'module18':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module18" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                        Data Ingestion
                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                            Data ingestion means bringing data into Databricks from different sources — databases, APIs, files, or cloud storage — so that you can analyze or transform it later. <br />
                            It’s the first step in any data pipeline or analytics workflow. <br />
                            The Data Ingestion tab acts as a centralized data onboarding interface.It supports:
                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                              <li><strong>Direct connectors</strong> for enterprise systems</li>
                              <li><strong>File-based uploads</strong> into Unity Catalog-managed storage</li>
                              <li><strong>Automation tools</strong> like Fivetran and Partner Connect</li>
                              <li><strong>Delta Lake</strong> and <strong>ADLS integrations</strong> for scalable storage</li>
                            </ul>
                            It ensures schema consistency, metadata registration, and secure data governance under Unity Catalog.
                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                              <li><strong className='text-xl'>Header:</strong><br />Add data</li>
                              <li><strong className='text-xl'>Purpose:</strong><br />Guides you to connect data sources, upload files, or create tables for analysis.</li>
                            </ul>


                          </div>
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">Main Sections and Options</h2>
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">Databricks Connectors</h2>
                          <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                            These are pre-built connectors to quickly connect to popular data platforms:
                          </p>
                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Connector</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        <th className="border border-slate-400 p-3 text-left">Typical Use Case</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Salesforce</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Connect to CRM data (leads, opportunities, accounts).</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Analyze customer and sales performance.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">SAP Business Data Cloud</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Access enterprise resource data from SAP.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Supply chain or financial reporting.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Workday Reports</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Retrieve HR, payroll, and workforce data.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Workforce analytics and reporting.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">ServiceNow</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Connect IT service management data.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Incident and change management insights.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Google Analytics Raw Data</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Import website and marketing analytics data.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Digital marketing and campaign performance.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">SQL Server</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Connect on-prem or cloud-hosted SQL databases.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Bring structured transactional data into Databricks.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                     
                    </tbody>
                  </table>
                </div>

                <h3 className='text-2xl font-bold text-slate-900 mb-3'>Files Section</h3>
                          <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                            For manual uploads or storage-based ingestion.
                          </p>

                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Option</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        <th className="border border-slate-400 p-3 text-left">When to Use</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"> Create or modify table</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Upload files like CSV, JSON, or Parquet to create or replace tables.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ideal for one-time imports or small datasets.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Upload files to a volume</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Upload non-tabular files (images, logs, etc.) managed under Unity Catalog Volumes.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">For non-structured data like logs, models, or raw files.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Create table from Azure Data Lake Storage (ADLS)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Load data directly from Azure Data Lake into a Delta table.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"></td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className='text-2xl font-bold text-slate-900 mb-3'>Fivetran Connectors (via Partner Connect)</h3>
                 <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                   At the bottom, you’ll find: <br />
                   <em>“See all available ingest partners in Partner Connect.”</em> <br />
                   Partner Connect lets you integrate tools like:
                   <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Fivetran, Informatica, Qlik, etc. <br />
                    to automate ingestion from hundreds of data sources into Databricks.
                    </li>
                   </ul>

                 </div>


                        </div>
                      </div>
                    </main>
                  );




                  case 'module19':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module19" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                        AI/ML Playground

                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                            The Playground in Databricks is an interactive environment where you can experiment with AI models, build and test prompts, and prototype intelligent agents before deploying them into production.
                          <ul className='pl-6 space-y-2 text-gray-700 mb-6'>
                            <li>It’s like a sandbox for Generative AI within your Databricks workspace.</li>
                            <li>Chat with or test AI models (like GPT, MPT, or Llama).</li>
                            <li>Ask questions, summarize documents, or generate code.</li>
                            <li>Try out small AI tasks (like question answering or summarization) before building real applications.</li>
                            <li>A low-code interface for LLM prompt engineering and evaluation.</li>
                            <li>Integration with Unity Catalog tools for secure, governed model use.</li>
                            <li>The ability to prototype AI agents with custom tools, such as function calling, retrieval-augmented generation (RAG), and data-aware AI.</li>
                            <li>Seamless connection to Databricks’ MLflow, Feature Store, and Model Serving for deployment.</li>
                          </ul>
                          </div>


                          <h2 className="text-2xl font-bold text-slate-900 mb-3">
                            Main Components on the Page
                          </h2>
                    
                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Section</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        <th className="border border-slate-400 p-3 text-left">Purpose</th>
                        {/* <th className="border border-slate-400 p-3 text-left">Availability</th> */}
                        {/* <th className="border border-slate-400 p-3 text-left">Best For</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Model Selector (Top Bar)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shows the current model (e.g., GPT OSS 120B). You can switch between models here.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Choose which AI model to test or fine-tune.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Always available</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Frequently accessed data (e.g., active apps, websites)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Tools Menu</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Access to tools or APIs integrated with the model (like function calling, RAG, or evaluation tools).</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Extend the model’s capabilities using custom or pre-built tools.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slight delay in access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Infrequently accessed data (e.g., monthly reports)</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Prototype an Agent</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lets you add your own tool and connect it to a model to create AI agents.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Build task-oriented AI agents (e.g., summarizer, SQL generator, chatbot).</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Start with an Example</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Offers quick test templates: <br /> Function Calling, Summarization, Document Q&A.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Try example scenarios to understand model behavior.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Evaluation Section</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Helps evaluate model responses.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Assess accuracy, relevance, and quality of model outputs.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Prompt Input Area</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Text box at the bottom ("Start typing...").</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Enter prompts, run queries, and see model responses interactively.</td>
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Slower access</td> */}
                        {/* <td className="border border-slate-400 p-3 text-gray-900">Rarely accessed data but still retrievable</td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>


                <h2 className="text-2xl font-bold text-slate-900 mb-3">For AI Developers</h2>
                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                  The Playground supports:
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong>Unity Catalog AI Tools —</strong> governed access to enterprise data.</li>
                    <li><strong>Databricks Foundation Models —</strong> like MPT, Llama 2, GPT OSS, etc.</li>
                    <li><strong>Custom Tool Integration —</strong> connect APIs or databases to your AI agent.</li>
                    <li><strong>Prompt Evaluation —</strong> test, compare, and optimize prompts before production use.</li>
                  </ul>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Advanced Features</h2>
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Feature</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Agent Prototyping</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Create and test agents that can use APIs, databases, or documents.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Function Calling</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Extend the model’s capabilities by allowing it to call your defined Python or SQL functions.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Prompt Testing</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Evaluate how prompts perform across models.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Evaluation Tools</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Use built-in metrics to test model quality (accuracy, bias, hallucination rate).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Unity Catalog Integration</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ensure data governance and secure access during AI experiments.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Benefits</h2>
                
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Benefit</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Hands-on AI Development</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Experiment freely without deployment setup.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Prompt Optimization</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Refine and evaluate prompts before production.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Custom Tool Integration</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Combine AI reasoning with data or APIs.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Governance</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Integrated with Unity Catalog for secure and auditable AI testing.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Multiple Model Access</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Test open-source and Databricks-hosted LLMs.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                        </div>
                      </div>
                    </main>
                  );




                case 'module20':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module20" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                        Experiments

                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                            In Databricks, Experiments represent the core of model development and tracking. <br />
                            An experiment records each run of your machine learning or AI workflow — including:

                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                              <li>Model parameters (like learning rate, epochs)</li>
                              <li>Metrics (like accuracy, loss)</li>
                              <li>Code version</li>
                              <li>Data version</li>
                              <li>Model artifacts (like trained models) <br />
                              Experiments help track, compare, and reproduce model performance over time using MLflow. <br />
                              The <strong>Experiments</strong> module integrates tightly with MLflow 3, providing:
                              </li>
                              <li><strong>Unified tracking</strong> for ML, DL, and GenAI experiments.</li>
                              <li><strong>Versioning</strong> for both data and models.</li>
                              <li><strong>Prompt tracking</strong> for LLM fine-tuning and evaluation.</li>
                              <li><strong>Advanced observability —</strong> including lineage and traceability for GenAI agents.</li>
                            </ul>
                          </div>
                          <h2 className="text-2xl font-bold text-slate-900 mb-3">Visible Sections:</h2>
                
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Section</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">GenAI apps & agents</td>
                        <td className="border border-slate-400 p-3 text-gray-900">For building and tracking Generative AI apps or AI agents.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Regression</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Create regression models automatically using AutoML.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Forecasting (Preview)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Build time-series forecasting models.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Classification</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Train classification models (binary or multi-class).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Custom model training</td>
                        <td className="border border-slate-400 p-3 text-gray-900">For custom classical ML or deep learning experiments.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>


                <h2 className="text-2xl font-bold text-slate-900 mb-3">Experiment Management Options</h2>
                
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Option</th>
                        <th className="border border-slate-400 p-3 text-left">Purpose</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Filter experiments</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Search for experiments by name, tag, or creator.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Only my experiments</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shows experiments created by the current user.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Reset filters</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Clears search and shows all experiments.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Experiment List Table</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Displays Name, Created by, Last modified, Location, and Description.</td>
                        
                      </tr>
                      
                    </tbody>
                  </table>
                </div>


                <h2 className="text-2xl font-bold text-slate-900 mb-3">Core Functionalities</h2>
                
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Function</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">AutoML Experiments</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Automatically builds and tunes models for regression, classification, or forecasting tasks.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Custom Model Training</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Allows full control of model code — supports PyTorch, TensorFlow, Scikit-learn, etc.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">GenAI & LLM Tracking</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Records prompt configurations, LLM outputs, and tool usage for AI agents.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Experiment Comparison</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lets you visually compare multiple runs — metrics, parameters, and outputs.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Integration with Feature Store & Models</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Once the best model is found, link it to the Model Registry for deployment.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>


                <h2 className="text-2xl font-bold text-slate-900 mb-3">Advanced Capabilities (MLflow 3 + Databricks)</h2>
                
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Capability</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Prompt Versioning</td>
                        <td className="border border-slate-400 p-3 text-gray-900">For LLM-based experiments — tracks prompt templates and versions.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">LLM Judges</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Evaluate AI outputs automatically (quality, relevance, hallucinations).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Agent Tracing</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Trace multi-step reasoning of AI agents end-to-end.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Enhanced Model Logging</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Log not just metrics, but embeddings, prompts, and responses.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>



                <h2 className="text-2xl font-bold text-slate-900 mb-3">Benefits</h2>
                
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Benefit</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Full visibility</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Every model training run is recorded with detailed logs.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Reproducibility</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Easily re-run any experiment exactly as before.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Comparative analysis</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Identify best-performing models visually.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Integration with Models & Serving</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Move successful experiments straight to production.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Governance & Version Control</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Integrated with Unity Catalog for compliance and traceability.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                        </div>
                      </div>
                    </main>
                  );




                   case 'module21':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module21" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                        Features

                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                            In Machine Learning, features are the input variables (columns) used by a model to make predictions. <br />
                            For example:

                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                              <li>In a credit scoring model → income, age, loan_amount are features.</li>
                              <li>In a product recommender → user_history, click_rate, category_interest are features.</li>
                              <li>The Features tab in Databricks allows you to manage, share, and reuse these features across models and teams.</li>
                            </ul>

                          </div>
                          <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                            The Feature Store in Databricks (integrated with Unity Catalog) provides:
                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                              <li><strong>Centralized feature management</strong></li>
                              <li><strong>Governed access</strong> using Unity Catalog</li>
                              <li><strong>Feature lineage tracking</strong></li>
                              <li><strong>Online/offline store integration</strong> for model training and real-time inference</li>
                              <li>It enables <strong>feature discovery, reuse, versioning, and monitoring</strong> at enterprise scale.</li>
                            </ul>

                          </div>

                          <h2 className="text-2xl font-bold text-slate-900 mb-3">Table Columns (once features exist):</h2>
                
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Column</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Table name</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Name of the feature table.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Owner</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Who created or owns the feature table.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Online stores</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Indicates if the feature is deployed for real-time access.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Last written</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Timestamp of the latest update to the feature table.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Tags</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Custom tags for searching/grouping features.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Comment</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Description or notes about the feature table.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Permissions & Governance</h2>
                <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                  You can assign permissions at different levels:
                </p>
                
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Level</th>
                        <th className="border border-slate-400 p-3 text-left">Example</th>
                        <th className="border border-slate-400 p-3 text-left">Purpose</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Catalog</td>
                        <td className="border border-slate-400 p-3 text-gray-900">main</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Manage data organization</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Schema</td>
                        <td className="border border-slate-400 p-3 text-gray-900">retail</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Group related feature tables</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Table</td>
                        <td className="border border-slate-400 p-3 text-gray-900">customer_features</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Control access to specific features</td>
                        
                      </tr>
                    </tbody>
                  </table>

                </div>
                <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                  This governance ensures <strong>compliance</strong>, <strong>security</strong>, and <strong>collaboration</strong>.
                </p>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Feature Store Components</h2>
                
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Component</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Feature Table</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Delta table registered as a feature set.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Feature Lookup</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Mapping between input data and feature tables during training or inference.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Training Set</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Merged dataset (features + labels) used for model training.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Online Store</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Low-latency feature storage for serving models in production.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Feature Lineage</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Tracks which data sources and transformations produced each feature.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Key Benefits</h2>
                
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Benefit</th>
                        <th className="border border-slate-400 p-3 text-left">Explanation</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Feature Reusability</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Build once, use everywhere — across teams and projects.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Consistency</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Same feature logic is applied in training and serving.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Discoverability</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Easily search and explore existing features.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Governance</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Controlled via Unity Catalog with fine-grained access control.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Lineage & Audit</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Full visibility from raw data → feature → model → prediction.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Advanced Options (for Professionals)</h2>
                
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Capability</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Batch & Streaming Features</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Supports both static and streaming feature tables.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Real-time Inference</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Integrates with Redis, Cosmos DB, or custom online stores.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Feature Monitoring</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Detects drift in feature distributions over time.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Feature Versioning</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Track and manage changes in feature definitions.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Integration with MLflow</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Features used in experiments are automatically logged for reproducibility.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Benefits</h2>
                
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Benefit</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Full visibility</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Every model training run is recorded with detailed logs.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Reproducibility</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Easily re-run any experiment exactly as before.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Comparative analysis</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Identify best-performing models visually.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Integration with Models & Serving</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Move successful experiments straight to production.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Governance & Version Control</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Integrated with Unity Catalog for compliance and traceability.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                        </div>
                      </div>
                    </main>
                  );




                case 'module22':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module22" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                        Models

                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                            This section is part of Databricks Machine Learning.  it helps you register, version, manage, and serve ML models built using MLflow or other frameworks. <br />
                            Currently, no models are registered yet. But once you create or import models, the table will display:
                  <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">column</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Name</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The model’s registered name.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Catalog</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The Unity Catalog that stores the model (e.g., main, sandbox, etc.).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Schema</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The schema inside the catalog that holds the model.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Last Modified</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Timestamp of the latest model version update.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Owner</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The Databricks user or service principal who owns the model.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                  <li><strong className='text-xl'>Unity Catalog / Workspace Model Registry</strong></li>
                  <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><em>Unity Catalog -</em> For governance and access control across workspaces.</li>
                    <li><em>Workspace Model Registry -</em> Local registry (older style, per workspace).</li>
                  </ul>
                  <li><strong>Owned by Me / Owner Filter -</strong> Filter to show only models you own or specific users’ models.</li>
                  <li><strong>Search Bar -</strong> Search registered models by name.</li>
                  <li><strong>Once Models Exist — More Options Appear</strong><br />When you have registered models, you get these additional actions:</li>
                  <ol className='list-[decimal] pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong>Model Versioning</strong><br />Each model can have multiple versions (v1, v2, …) for tracking updates or retraining cycles.</li>
                    <li><strong>Model Staging</strong><br />Models can have lifecycle stages:</li>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><em>None -</em> Just registered</li>
                      <li><em>Staging -</em> For testing and validation</li>
                      <li><em>Production -</em> For deployment</li>
                      <li><em>Archived -</em> Old or deprecated versions</li>
                    </ul>
                    <li><strong>Model Lineage & Metadata</strong></li>
                     <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Tracks which experiment/run created the model.</li>
                      <li>Shows training dataset lineage (via Unity Catalog).</li>
                      <li>Metadata like tags, parameters, and metrics appear automatically from MLflow.</li>
                      {/* <li></li> */}
                    </ul>
                    <li><strong>Permissions</strong><br />You can manage who can:</li>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Read or use the model</li>
                      <li>Transition model stages</li>
                      <li>Delete or update versions</li>
                      {/* <li></li> */}
                    </ul>
                    <li><strong>Serving Integration</strong><br />Once a model is registered and approved, you can:</li>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Deploy it to <strong>Databricks Model Serving</strong></li>
                      <li>Expose it via REST API endpoint for predictions</li>
                      <li>Integrate with <strong>Feature Store</strong> for consistent feature usage</li>
                      {/* <li></li> */}
                    </ul>
                  </ol>
                </ul>

                          </div>
                        </div>
                      </div>
                    </main>
                  );




                   case 'module23':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module23" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                         Model Serving

                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                            Model Serving in Databricks allows you to:
                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                              <li>Deploy ML models (including LLMs) for <strong>real-time predictions</strong></li>
                              <li>Expose them via <strong>REST APIs</strong></li>
                              <li>Serve <strong>open-source</strong> or <strong>external models</strong>(like GPT, Llama)</li>
                              <li>Automatically scale endpoints based on demand</li>
                              <li>Secure access with <strong>Unity Catalog</strong> and <strong>IAM policies</strong></li>
                            </ul>
                          </div>

                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                            Details from the Screenshot
                          </h2>
                          
                  <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">column</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Name</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The name of the deployed serving endpoint.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">State</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The current deployment status (e.g., Ready, Deploying, Failed).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Served entities</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The specific model or model version being served (e.g., GPT OSS 120B, Llama 4 Maverick).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Tags</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Metadata tags (e.g., Chat, Embeddings).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Task</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The model type or function — Chat (LLMs), Embeddings (vectorization), etc.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Created by</td>
                        <td className="border border-slate-400 p-3 text-gray-900">User or system who deployed the endpoint.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Last modified</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Timestamp of the latest deployment change.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          Top Models You See Here
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                            These are <strong>Databricks-hosted and external foundation models</strong> for chat and embeddings tasks:

                          </div>
                  <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Model</th>
                        <th className="border border-slate-400 p-3 text-left">Type</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">GPT OSS 120B / 20B</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Databricks-hosted</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Large open-source GPT-style models for conversational AI.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">OpenAI GPT-5</td>
                        <td className="border border-slate-400 p-3 text-gray-900">External</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Connects to OpenAI endpoint for inference (external integration).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Llama 4 Maverick / Meta Llama Series</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Databricks-hosted</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Meta Llama models for chat/instruction tasks.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Gemma 3 12B</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Databricks-hosted</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Google’s lightweight open LLMs.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">BGE / GTE Large (En)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Embedding models</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Used for text embedding, retrieval, and similarity tasks.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>


                    <h2 className="text-3xl font-bold text-slate-900 mb-3">
                      Actions Available per Model
                          
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                           Each model endpoint (like GPT, Llama, etc.) gives you options such as:
                          </div>
                  <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Action</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Use</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Opens an interface to test the model directly within Databricks.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Copy</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Copies the REST API URL and authentication token.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Configure</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Modify endpoint settings — scale, model version, environment variables.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Create Serving Endpoint</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Deploy your own trained model or clone an existing one.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>


                    <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          Part of Full AI/ML Lifecycle
                    </h2>
                          
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Stage</th>
                        <th className="border border-slate-400 p-3 text-left">Databricks Feature</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Data Preparation</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Delta Live Tables / Notebooks / Unity Catalog</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Feature Engineering</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Features (Feature Store)</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Experiment Tracking</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Experiments (MLflow)</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Model Management</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Models (Model Registry)</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Model Deployment</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Serving (Real-time endpoints)</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Testing & Interaction</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Playground (Chat/LLM interaction UI)</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>


                        </div>
                      </div>
                    </main>
                  );




                case 'module24':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module24" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                         Model Serving

                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          Notebook-level features
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                            A <strong>Databricks notebook</strong> is an interactive environment for:
                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                              <li>Writing and running code (Python, SQL, Scala, R)</li>
                              <li>Visualizing data</li>
                              <li>Managing ML workflows</li>
                              <li>Collaborating and sharing results</li>
                            </ul>
                            It supports <strong>multi-language notebooks</strong> meaning you can run Python, SQL, Scala, R, or Markdown in the same file using magic commands (like %python, %sql, %scala, %md).

                          </div>
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                           Key Notebook UI Features
                          </h2>
                          
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Feature</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Notebook Title ("my notebook")</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Editable notebook name. You can rename it anytime.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Toolbar</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Provides actions like Run, Connect, Schedule, Share, File options, etc.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Run / Run all / Schedule</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Run current cell or all cells; schedule notebooks as automated jobs.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Language Selector (Python, SQL, etc.)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Set default language for the notebook.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Connect</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Connects the notebook to a cluster (compute resource). Required before execution.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Share</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Share the notebook with team members or grant access via permissions.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Settings / Comments / Command Palette</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Quick access to environment settings and collaborative comments.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Code Cell Features
                </h2>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  Each code cell (like the one in your screenshot) has:
                </p>
                          
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Option</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Run Cell</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Executes the code within the selected cell.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Drag Handle</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Allows you to reorder or move cells.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Language Indicator (Python)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shows the language mode of the current cell.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Add Cell Above/Below</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Insert new code or markdown cells.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Clear Output</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Removes output from the cell without deleting code.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Delete Cell</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Deletes the current cell.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                        </div>
                      </div>
                    </main>
                  );


                case 'module25':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module25" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                         File-level Features

                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          File-level features
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                            File menu contains all options related to creating, managing, importing, exporting, and sharing notebooks in Databricks.
                          </div>


                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                           Databricks Notebook – File Menu
                          </h2>          
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Menu Option</th>
                        <th className="border border-slate-400 p-3 text-left">Description & Usage</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">New notebook</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Opens a brand-new notebook. You can choose the language (Python, SQL, Scala, or R) and cluster later.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Import…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Allows you to import existing notebooks (from .dbc, .html, .ipynb, or Git repositories).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">New notebook dashboard</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Creates a dashboard view — ideal for visualizations and results presentation, often used in reporting.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Share…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Opens the sharing dialog where you can grant permissions to other users or groups (View, Run, Edit, Manage).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Schedule…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lets you schedule notebook runs at set intervals (daily, hourly, etc.) — useful for data pipelines or automation.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Change default cell language…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Sets the default language (Python, SQL, Scala, or R) for new cells in this notebook.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Commit to Git…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Integrates with Git (GitHub, GitLab, Azure Repos) — allows version control, branching, and pushing changes.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Clone…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Makes an identical copy of the current notebook within the workspace.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Rename…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Rename the notebook file name.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Export…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Export notebook in multiple formats:
                          <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                            <li><strong>HTML</strong> (read-only view)</li>
                            <li><strong>SOURCE</strong> (plain text)</li>
                            <li><strong>DBC archive</strong></li>
                            <li><strong>IPYNB</strong> (Jupyter notebook format).</li>
                          </ul>
                        </td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Move…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Move notebook to a different folder or workspace location.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Move to trash</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Deletes (moves) notebook to Trash; can be restored later if needed.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Notebook format</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Sub-menu to choose export format or convert to different type (e.g., source code, HTML, IPYNB).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Upload files to volume…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Uploads files (datasets, scripts, etc.) directly into a mounted volume or workspace for use in your notebook.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Create or modify table…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Opens Databricks Data UI to create or edit tables (either Delta or other supported file formats).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Add data</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Opens data ingestion options to connect to data sources (Azure Blob, ADLS, Delta tables, CSVs, etc.).</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                  <li className="font-bold text-xl">New Notebook</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Creates a <strong>new Databricks notebook</strong>.</li>
                    <li>You can choose the <strong>language</strong> (Python,SQL, scala,R).</li>
                    <li>Optionally select a <strong>cluster</strong> to attach before running code.</li>
                  </ul>
                  <li className="font-bold text-xl">Import</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Used to <strong>import existing notebooks or code files</strong>.</li>
                    <li>Supported formats:
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>.dbc (Databricks archive)</li>
                        <li>.py, .ipynb, .r, .scala</li>
                      </ul>
                    </li>
                    <li>You can import from:
                       <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Local machine</li>
                        <li>URL</li>
                        <li>Git repository</li>
                      </ul>
                    </li>
                    
                  </ul>
                  <li className="font-bold text-xl">New Notebook Dashboard</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Creates a <strong>Dashboard view</strong> for notebook outputs.</li>
                    <li>Dashboards allow you to <strong>pin visualizations</strong> and <strong>results</strong> from one or more notebooks to share with others (useful for reporting).</li>
                  </ul>
                  <li className="font-bold text-xl">Share</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Opens the sharing dialog to <strong>control notebook access</strong>.</li>
                    <li>You can: 
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Add collaborators (with View / Edit / Run permissions)</li>
                        <li>Share via workspace, link, or group</li>
                        <li>Control access to comments and output visibility</li>
                      </ul>
                    </li>
                  
                  </ul>
                  <li className="font-bold text-xl">Schedule</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Allows you to <strong>automate notebook runs</strong>.</li>
                    <li>You can:
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Set time-based schedules (daily, weekly, etc.)</li>
                        <li>Configure cluster and parameters for each run</li>
                        <li>Send email notifications or webhook alerts upon completion/failure</li>
                      </ul>
                    </li>
                    
                  </ul>
                  <li className="font-bold text-xl">Change Default Cell Language</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Lets you choose the default programming language for all new cells in the notebook.</li>
                    <li>Supported languages:
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>Scala</li>
                        <li>R</li>
                      </ul>
                    </li>
                    <li>(You can still mix languages using cell magic commands like %python, %sql, etc.)</li>
                    
                  </ul>
                  <li className="font-bold text-xl">Commit to Git</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Connects the notebook to a Git repository (GitHub, Azure DevOps, GitLab, Bitbucket, etc.).</li>
                    <li>Allows you to:
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Commit changes</li>
                        <li>View revision history</li>
                        <li>Revert or pull updates</li>
                      </ul>
                    </li>
                   
                  </ul>
                  <li className="font-bold text-xl">Clone</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Creates a copy of the notebook in the same or another workspace folder.</li>
                    <li>Useful for creating backup or template versions.</li>
                    
                  </ul>
                  <li className="font-bold text-xl">Rename</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Renames the current notebook file.</li>
                  
                  </ul>
                  <li className="font-bold text-xl">Export</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Exports the current notebook in one of several formats:
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>.dbc (Databricks archive)</li>
                        <li>.html (for static sharing)</li>
                        <li>.ipynb (Jupyter-compatible)</li>
                        <li>.source (plain code export)</li>
                      </ul>
                    </li>
                    
                  </ul>
                  <li className="font-bold text-xl">Move</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Moves the notebook to a different workspace folder or directory.</li>
                    
                  </ul>
                  <li className="font-bold text-xl">Move to Trash</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Sends the notebook to the Trash folder in Databricks.</li>
                    <li>You can later restore or permanently delete it.</li>
                    
                  </ul>
                  <li className="font-bold text-xl">Notebook Format</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Selects how notebook content is saved and versioned.</li>
                    <li>Two options:
                      <ul>
                        <li><strong>Source file format:</strong> saves as plain text (easier for Git versioning).</li>
                        <li><strong>DBC archive format:</strong> compressed binary (used for backups).</li>
                      </ul>
                    </li>
                   
                  </ul>
                  <li className="font-bold text-xl">Upload Files to Volume</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Uploads local files (like CSVs, JSONs, etc.) directly to:
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6 '>
                        <li>DBFS (Databricks File System)</li>
                        <li>Mounted Azure Storage / AWS S3 / GCP bucket.</li>
                      </ul>
                    </li>
                    
                  </ul>
                  <li className="font-bold text-xl">Create or Modify Table</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Opens the Data Import Wizard.</li>
                    <li>You can load data files (CSV, Parquet, JSON, etc.) into a table in:
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6 ' >
                        <li>Delta Lake</li>
                        <li>Hive Metastore</li>
                        <li>Unity Catalog</li>
                      </ul>
                    </li>
                   
                  </ul>
                  <li className="font-bold text-xl">Add Data</li>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Shortcut to Databricks Add Data interface, which lets you:
                      <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6 '>
                        <li>Browse uploaded files</li>
                        <li>Connect to external data sources (SQL DBs, cloud storage)</li>
                        <li>Automatically create tables from uploaded data</li>
                      </ul>
                    </li>
                    
                  </ul>
                </ol>
                
                        </div>
                      </div>
                    </main>
                  );



                  case 'module26':
                  return(
                    <main>
                      <div  className="animate-fade-in-up">
                        <h1 id="module26" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                         Edit level Features

                       </h1>
                        <div className="max-w-6xl mx-auto">
                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                          Edit level features
                          </h2>
                          <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                            Edit menu provides tools for:
                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                              <li>Managing and rearranging cells</li>
                              <li>Editing and formatting code</li>
                              <li>Controlling execution flow (skip/unskip)</li>
                              <li>Performing notebook-wide formatting and search</li>
                              <li>Setting parameters for automated or reusable notebooks</li>
                            </ul>
                          </div>

                          <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Databricks Notebook – Edit Menu
                </h2>
                   
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Menu Option</th>
                        <th className="border border-slate-400 p-3 text-left">Shortcut (Windows/Linux)</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Undo</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ctrl + Z</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Reverses the most recent cell edit or deletion.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Cut cell(s)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ctrl + X</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Removes the selected cell(s) and copies them to the clipboard.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Copy cell(s)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ctrl + C</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Copies selected cell(s) to the clipboard.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Paste cell(s)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ctrl + V</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Pastes the copied or cut cell(s) below the current one.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Delete cell(s)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">D, D</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Deletes the currently active cell(s). Press D twice quickly.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Skip/Unskip cell(s)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ctrl + /</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Marks a cell to be skipped during “Run All” execution, or unskips it. Useful for temporarily disabling code.</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Cell Insertion and Arrangement
                </h2>          
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Menu Option</th>
                        <th className="border border-slate-400 p-3 text-left">Shortcut</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Insert cell above</td>
                        <td className="border border-slate-400 p-3 text-gray-900">A</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Adds a new blank cell above the current one.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Insert cell below</td>
                        <td className="border border-slate-400 p-3 text-gray-900">B</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Adds a new blank cell below the current one.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Move cell up</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ctrl + Alt + &uarr;</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Moves the selected cell upward in the notebook.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Move cell down</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ctrl + Alt + &darr;</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Moves the selected cell downward in the notebook.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Select all cells</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ctrl + A</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Selects every cell in the notebook for bulk operations.</td>
                        
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                

                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Formatting and Structure
                </h2>
                
                          
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Menu Option</th>
                        <th className="border border-slate-400 p-3 text-left">Shortcut</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Format cell(s)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ctrl + Shift + F</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Auto-formats code in the current cell (indentation, spacing).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Format notebook</td>
                        <td className="border border-slate-400 p-3 text-gray-900">—</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Automatically formats all cells for consistent code style.</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Notebook Python indentation…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">—</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Opens indentation settings for Python cells (tabs vs spaces, size).</td>
                        
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                

                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Additional Utilities
                </h2>
               
                          
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Menu Option</th>
                        <th className="border border-slate-400 p-3 text-left">Shortcut</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Add parameter…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">—</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Allows you to define notebook parameters (for parameterized runs using widgets).</td>
                        
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Find…</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ctrl + F</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Opens a search bar to find specific words, code, or text within the notebook.</td>
                        
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
                  <li className="font-bold text-xl">Undo / Redo</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li><strong>Undo (Ctrl + Z):</strong> Reverts your last action (e.g., deleting a cell, changing code).</li>
                    <li><strong>Redo (Ctrl + Shift + Z):</strong> Re-applies an undone action. <br /><em>Useful for quickly fixing mistakes during editing.</em></li>
                    
                  </ul>
                  <li className="font-bold text-xl">Cut / Copy / Paste Cells</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li><strong>Cut Cell:</strong> Removes the selected cell and stores it in clipboard.</li>
                    <li><strong>Copy Cell:</strong> Copies the selected cell’s content to clipboard.</li>
                    <li><strong>Paste Cell Below / Above:</strong> Inserts the copied/cut cell at a specific position. <br /><em>Helps in reorganizing notebook structure efficiently.</em></li>
                  </ul>
                  <li className="font-bold text-xl">Move Cell Up / Down</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Moves the selected cell vertically within the notebook.</li>
                    <li>Maintains execution order when rearranging your logic.</li>
                    
                  </ul>
                  <li className="font-bold text-xl">Delete Cell</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Permanently deletes the selected cell from the notebook.</li>
                    <li>Shortcut: Ctrl + D or Click Trash icon on cell toolbar.</li>
                    
                  </ul>
                  <li className="font-bold text-xl">Add Cell Above / Below</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Quickly inserts a new empty cell above or below the selected one.</li>
                    <li>The new cell defaults to the notebook’s primary language (e.g., Python). <br />Shortcut:
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>A -</strong>Add Above</li>
                      <li><strong>B -</strong>Add Below</li>
                    </ul></li>
                    
                  </ul>
                  <li className="font-bold text-xl">Merge with Cell Above / Below</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Combines the current cell with an adjacent one (above or below).</li>
                    <li>Helps when you split code accidentally or want cleaner cell grouping.</li>
                    
                  </ul>
                  <li className="font-bold text-xl">Split Cell</li>
                  <ul className="list-discpl-6space-y-2text-gray-700mb-6">
                    <li>Splits the current cell at the cursor position into two new cells.</li>
                    <li>Keeps the same language type for both new cells.</li>
                    <li><strong>Shortcut:</strong> Ctrl + Shift + –</li>
                  </ul>
                  <li className="font-bold text-xl">Find and Replace</li>
                  <ul className="list-discpl-6space-y-2text-gray-700mb-6">
                    <li>Opens a search bar to find text or code patterns in the notebook.</li>
                    <li>You can also replace text directly.</li>
                    <li><strong>Supports:</strong>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Match Case</li>
                      <li>Regex search</li>
                      <li>Replace All</li>
                    </ul></li>
                    <li><strong>Shortcut:</strong> Ctrl + F / Ctrl + H</li>
                  </ul>
                  <li className="font-bold text-xl">Clear Output</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Removes all generated outputs (plots, tables, logs) from the notebook cells.</li>
                    <li><strong>Options:</strong>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Clear Output for Current Cell</li>
                      <li>Clear Output for All Cells</li>
                    </ul></li>
                    <li><em>Good practice before sharing or committing notebooks to Git.</em></li>
                  </ul>
                  <li className="font-bold text-xl">Clear State</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Resets the Python/Scala/R session (similar to restarting the kernel).</li>
                    <li>Clears all variables, imports, and cached data.</li>
                    <li><em>Use when memory is full or to rerun from a clean state.</em></li>
                  </ul>
                  <li className="font-bold text-xl">Run Selected Cell / All Cells</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li><strong>Executes:</strong>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Current Cell</li>
                      <li>All Cells Above / Below</li>
                      <li>All Cells in Notebook</li>
                    </ul></li>
                    <li><strong>Shortcut:</strong>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>Shift + Enter -</strong> Run and move to next cell</li>
                      <li><strong>Ctrl + Enter -</strong> Run cell only</li>
                      <li><strong>Alt + Enter -</strong>Run and insert new cell below</li>
                    </ul></li>
                    
                  </ul>
                  <li className="font-bold text-xl">Convert Cell Type</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li><strong>Converts between:</strong>
                    <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Code Cell</li>
                      <li>Markdown Cell</li>
                    </ul></li>
                    <li>Useful for adding formatted text, documentation, or section titles. <br />
                     Shortcut:
                     <ul>
                      <li>Ctrl + M M (convert to markdown)</li>
                      <li>Ctrl + M Y (convert to code)</li>
                     </ul>
                    </li>
                    
                  </ul>
                  <li className="font-bold text-xl">Comment / Uncomment</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Toggles comment lines in a code cell.</li>
                    <li>Automatically detects language syntax (Python #, SQL --, etc.). <br />
                    Shortcut: Ctrl + /
                    </li>
                    
                  </ul>
                  <li className="font-bold text-xl">Format Cell Code</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Auto-formats code indentation and spacing.</li>
                    <li>Improves readability (especially in long notebooks). <br />
                    Shortcut: Ctrl + Shift + F
                    </li>
                    
                  </ul>
                  <li className="font-bold text-xl">Toggle Line Numbers</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Shows or hides line numbers in code cells.</li>
                    <li>Helpful for debugging or referencing code during collaboration.</li>
                    
                  </ul>
                  <li className="font-bold text-xl">Toggle Output Visibility</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Hides or shows the output section of a cell (results, plots, etc.).</li>
                    <li>Useful for compact viewing when outputs are large.</li>
                    
                  </ul>
                  <li className="font-bold text-xl">Toggle Comments Panel</li>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Shows the collaboration comment sidebar.</li>
                    <li>Lets you add inline comments, tag teammates, or resolve feedback.</li>
                    
                  </ul>
                </ol>
                
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
      technology="azure-data-engineer"
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
