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
