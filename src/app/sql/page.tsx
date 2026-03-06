'use client';

// src/app/sql/page.tsx
import Link from 'next/link';
import TechLayout from '@/components/layout/tech-layout';
import VideoSection from '@/components/video/VideoSection';
import { videoTutorialsData, getVideosForTopic } from '@/data/videoTutorials';
import { useState, useEffect } from 'react';
import { AUTH_SYSTEM_AVAILABLE } from '@/config/authStatus';

export default function SQLPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  const pageHeadings = [
    { id: 'introduction', title: 'SQL Introduction' },
    { id: 'dbms-vs-rdbms', title: 'DBMS VS RDBMS' },
    { id: 'acidprinciples', title: 'ACID Principles' },
    { id: 'basic-commands', title: 'Basic Commands' },
    { id: 'datatypes', title: "Data Types" },
    { id: 'operators', title: 'SQL Operators' },
    { id: 'database', title: 'Database ' },
    { id: 'table', title: 'SQl table' },
    { id: 'altertable', title: 'ALTER-table' },
    { id: 'insert', title: 'INSERT-table' },
    { id: 'drop', title: 'DROP-table' }
  ];

  // Handle URL hash changes to set active section
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the #
      if (hash && pageHeadings.some(heading => heading.id === hash)) {
        setActiveSection(hash);
      }
    };

    // Set initial section from URL hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  // Get navigation for current section
  const getNavigation = () => {
    const currentIndex = pageHeadings.findIndex(h => h.id === activeSection);
    const previousSection = currentIndex > 0 ? pageHeadings[currentIndex - 1] : null;
    const nextSection = currentIndex < pageHeadings.length - 1 ? pageHeadings[currentIndex + 1] : null;

    return {
      previous: previousSection ? {
        href: `/sql/#${previousSection.id}`,
        title: previousSection.title,
        isSection: true
      } : {
        href: '/python',
        title: 'Python Programming',
        isSection: false
      },
      next: nextSection ? {
        href: `/sql/#${nextSection.id}`,
        title: nextSection.title,
        isSection: true
      } : {
        href: '/web-dev',
        title: 'Web Development',
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
              <h1 id="introduction" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                SQL Tutorial
              </h1>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Master SQL for database management and data analysis
              </p>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Introduction to SQL</h2>
                <br />
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is SQL?</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Structured Query Language <strong>(SQL)</strong> is a standard language used to work with relational databases, which store data in tables made up of rows and columns.<br /><br />
                  SQL allows users to store new data, retrieve existing data, update records, and delete data from a database. It also helps manage databases by creating tables, setting rules, and controlling access to data.<br /><br />
                  One of the main reasons SQL is so popular is its simple and readable syntax, which looks almost like everyday English. For example, commands like <strong>SELECT, INSERT, UPDATE,</strong> and <strong>DELETE</strong> clearly describe what action is being performed.<br /><br />
                  SQL is widely used in many industries such as technology, banking, healthcare, education, and e-commerce. It works with popular database systems like MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.<br /><br />
                  Because of its power, flexibility, and ease of learning, SQL is an essential skill for students, developers, data analysts, and anyone who works with data.
                </p><br />
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Little History of SQL</h2>
                <p className="text-lg text-gray-700 leading-relaxed">SQL was developed in the early 1970s at IBM by researchers Donald D. Chamberlin and Raymond F. Boyce. It was originally called <strong>SEQUEL</strong> (Structured English Query Language) because it was designed to read like plain English and be easy to use.<br /><br />
                  Later, the name was changed to SQL due to trademark issues. SQL was created to manage and retrieve data from relational databases, a concept introduced by Edgar F. Codd.<br /><br />
                  In 1986, SQL became an official standard by the <strong>American National Standards Institute</strong> (ANSI), and in 1987, it was also approved by the <strong>International Organization for Standardization</strong> (ISO). This helped SQL become widely accepted around the world.<br /><br />
                  Over time, many database systems adopted SQL, such as MySQL, Oracle, PostgreSQL, and Microsoft SQL Server. Today, SQL remains one of the most important and widely used languages for working with data.
                </p><br />
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Do We Use SQL in Real Life?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We use SQL because it helps us <strong>store, find, and manage large amounts of data easily and quickly</strong>. In real life, many systems generate data every second, and SQL helps organize that data in a meaningful way.<br /><br />
                  <b>SQL allows us to:</b>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Find specific information quickly (for example, searching a customer record)</li>
                  <li>Update data when things change (like updating an address or phone number)</li>
                  <li>Remove unwanted data</li>
                  <li>Keep data accurate and secure</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Because SQL uses <strong>simple English-like commands</strong>, it is easy to learn and understand, even for beginners.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">How Are Companies Using SQL?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Companies use SQL every day to run their business smoothly. Some real-life examples are:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><strong>Banks</strong> use SQL to manage customer accounts, transactions, and balance records.</li>
                  <li><strong>Hospitals</strong> use SQL to store patient details, medical history, and appointment records.</li>
                  <li><strong>Online shopping companies (Amazon, Flipkart, etc.)</strong> use SQL to manage products, orders, payments, and customer data.</li>
                  <li><strong>Schools</strong> and <strong>colleges</strong> use SQL to maintain student records, marks, attendance, and fees.</li>
                  <li><b>Social media platforms</b> use SQL to store user profiles, posts, comments, and messages.</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In companies, SQL is used by <strong>software developers, data analysts, database administrators, and managers</strong> to make decisions, generate reports, and improve services.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Kind of Applications Use SQL?</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SQL is used in many applications that need to <strong>store information, organize it properly, and get it back quickly</strong>. In simple words, if an application works with data, it most likely uses SQL somewhere in the background.
                </p>
                <br />
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><strong className='text-slate-900'>Web applications</strong> use SQL to save things like user accounts, posts, orders, and messages. For example, online shopping websites store product details and customer orders, social media platforms store user profiles and posts, and booking websites store ticket and reservation details.</li>
                  <li><strong className='text-slate-900'>Mobile applications</strong> also depend on SQL to manage user data and app content. Apps like food delivery services store restaurant menus and orders, banking apps keep track of user accounts, and fitness or learning apps save progress and activity data.</li>
                  <li>In <strong className='text-slate-900'>banking and financial applications</strong>, SQL plays a very important role. It helps banks store customer details, manage transactions, and keep records secure. ATM machines, online banking websites, and payment apps all rely on SQL databases.</li>
                  <li><strong className='text-slate-900'>Healthcare applications</strong> use SQL to handle sensitive information like patient records, doctor appointments, and medicine details. Hospital management systems and pharmacy systems use SQL to keep this data organized and easy to access.</li>
                  <li>In <strong className='text-slate-900'>education applications</strong>, SQL is used to manage student information such as attendance, marks, courses, and fees. Schools, colleges, and online learning platforms all depend on SQL-based systems.</li>
                  <li><strong className='text-slate-900'>Business and enterprise applications</strong> use SQL to track employees, sales, inventory, and customer information. Systems like payroll software, inventory management tools, and customer relationship management (CRM) software all use SQL to run smoothly.</li>
                  <li> Even <strong className='text-slate-900'>gaming applications</strong> use SQL to save player profiles, scores, achievements, and game progress.</li>
                </ul>
              </div>
            </div>
          </main>
        );



      case 'datatypes':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="datatypes" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                Data Types
              </h1>

              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">What are Data Types?</h2>
                <div className='text-lg text-gray-700 leading-relaxed mb-6'> Data types tell the database what kind of data can be stored in a column.
                  Think of data types like labels on boxes each box accepts only a certain type of item.<br />
                  <strong>For example:</strong>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>A box for numbers</li>
                    <li>A box for text</li>
                    <li>A box for dates</li>
                  </ul>
                  The database needs this so it knows how to store, calculate, and protect your data correctly.

                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Do We Use Data Types?</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>We use data types to:</p>
                <ol className='list-decimal-bold pl-6 space-y-2 text-gray-700 mb-6 text-lg'>

                  <li><strong>Store data correctly</strong>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6' >
                      <li>Numbers as numbers</li>
                      <li>Text as text</li>
                      <li>Dates as dates</li>
                    </ul>
                  </li>
                  <li><strong>Prevent wrong data</strong>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>You can’t put text like "abc" into a number column</li>
                      <li>You can’t put "hello" into a date column</li>
                    </ul>
                  </li>
                  <li><strong>Save memory & improve performance</strong>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Using the right data type uses less space</li>
                      <li>Queries run faster</li>
                    </ul>
                  </li>
                  <li><strong>Perform correct operations</strong>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Math on numbers</li>
                      <li>Date calculations</li>
                      <li>Text searching</li>
                    </ul>
                  </li>
                </ol>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Different Types of Data Types:</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>In SQL, data types are grouped into categories based on what kind of data they store.</p><br />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Numeric Data Types (Numbers)</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>Used to store <strong>numbers</strong> for counting or calculations.</p>


                <table className="w-full border-collapse border border-slate-400 mt-4 rounded-lg overflow-hidden shadow-sm">
                  <thead className='bg-slate-100'>
                    <tr>
                      <th className="border border-slate-400 p-3 text-left">Data Type</th>
                      <th className="border border-slate-400 p-3 text-left">Meaning</th>
                      <th className="border border-slate-400 p-3 text-left">Example</th>


                    </tr>
                  </thead>
                  <tbody className='bg-white'>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">INT</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Whole number</td>
                      <td className="border border-slate-400 p-3 text-gray-900">10,500</td>
                    </tr>

                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">SMALLINT</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Small Whole number</td>
                      <td className="border border-slate-400 p-3 text-gray-900">5</td>


                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">BIGINT</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Very large numbers</td>
                      <td className="border border-slate-400 p-3 text-gray-900">123456789</td>

                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">DECIMAL/NUMERIC</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Exact decimal values</td>
                      <td className="border border-slate-400 p-3 text-gray-900">99.99</td>

                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">FLOAT</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Approximate decimal</td>
                      <td className="border border-slate-400 p-3 text-gray-900">3.14</td>

                    </tr>
                  </tbody>
                </table>
                <p className='text-lg text-gray-700 leading-relaxed'><strong>Used for:</strong> age, salary, quantity, marks</p><br />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Character / String Data Types (Text)</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>Used to store <strong> text or characters.</strong></p>
                <table className="w-full border-collapse border border-slate-400 mt-4 rounded-lg overflow-hidden shadow-sm">
                  <thead className='bg-slate-100'>
                    <tr>
                      <th className="border border-slate-400 p-3 text-left">Data Type</th>
                      <th className="border border-slate-400 p-3 text-left">Meaning</th>
                      <th className="border border-slate-400 p-3 text-left">Example</th>


                    </tr>
                  </thead>
                  <tbody className='bg-white'>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">CHAR(n)</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Fixed-length text</td>
                      <td className="border border-slate-400 p-3 text-gray-900">'US'</td>
                    </tr>

                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">VARCHAR(n)</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Variable-length text</td>
                      <td className="border border-slate-400 p-3 text-gray-900">'john'</td>


                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">TEXT</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Long text</td>
                      <td className="border border-slate-400 p-3 text-gray-900">'This is a description'</td>

                    </tr>

                  </tbody>
                </table>
                <p className='text-lg text-gray-700 leading-relaxed'> <strong>USed for:</strong> names, email, address, comments</p><br />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Date & Time Data Types</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>Used to store <strong>dates and times.</strong></p>
                <table className="w-full border-collapse border border-slate-400 mt-4 rounded-lg overflow-hidden shadow-sm">
                  <thead className='bg-slate-100'>
                    <tr>
                      <th className="border border-slate-400 p-3 text-left">Data Type</th>
                      <th className="border border-slate-400 p-3 text-left">Meaning</th>
                      <th className="border border-slate-400 p-3 text-left">Example</th>


                    </tr>
                  </thead>
                  <tbody className='bg-white'>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">DATE</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Date only</td>
                      <td className="border border-slate-400 p-3 text-gray-900">25-02-2026</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">TIME</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Time only</td>
                      <td className="border border-slate-400 p-3 text-gray-900">10:30:00</td>


                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">DATETIME</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Date+Time</td>
                      <td className="border border-slate-400 p-3 text-gray-900">2026-01-07 10:30</td>

                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">TIMESTAMP</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Auto date/current time</td>
                      <td className="border border-slate-400 p-3 text-gray-900">current time</td>

                    </tr>

                  </tbody>
                </table>
                <p className='text-lg text-gray-700 leading-relaxed'><strong>Used for:</strong>birth date, order date, login time</p><br />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Boolean Data Type (True / False)</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>Used to store<strong>Yes/No values</strong>.</p>
                <table className="w-full border-collapse border border-slate-400 mt-4 rounded-lg overflow-hidden shadow-sm">
                  <thead className='bg-slate-100'>
                    <tr>
                      <th className="border border-slate-400 p-3 text-left">Data Type</th>
                      <th className="border border-slate-400 p-3 text-left">Meaning</th>
                      <th className="border border-slate-400 p-3 text-left">Example</th>


                    </tr>
                  </thead>
                  <tbody className='bg-white'>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">BOOLEAN</td>
                      <td className="border border-slate-400 p-3 text-gray-900">True or False</td>
                      <td className="border border-slate-400 p-3 text-gray-900">TRUE,FALSE</td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-lg text-gray-700 leading-relaxed'><strong>Used for:</strong> active/inactive,yes/no status.</p><br />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Binary Data Types (Files)</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>Used to store <strong>files and media</strong>.</p>
                <table className="w-full border-collapse border border-slate-400 mt-4 rounded-lg overflow-hidden shadow-sm">
                  <thead className='bg-slate-100'>
                    <tr>
                      <th className="border border-slate-400 p-3 text-left">Data Type</th>
                      <th className="border border-slate-400 p-3 text-left">Meaning</th>



                    </tr>
                  </thead>
                  <tbody className='bg-white'>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">BLOB</td>
                      <td className="border border-slate-400 p-3 text-gray-900">images,videos,files</td>

                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">BINARY</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Binary data</td>

                    </tr>
                  </tbody>
                </table>
                <p className='text-lg text-gray-700 leading-relaxed'><strong>Used for:</strong> photos,documents.</p><br />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Special/Advanced Data Types</h3>
                <p className='text-lg text-gray-700 leading-relaxed'><strong>Used for:</strong> special purpose.</p>
                <table className="w-full border-collapse border border-slate-400 mt-4 rounded-lg overflow-hidden shadow-sm">
                  <thead className='bg-slate-100'>
                    <tr>
                      <th className="border border-slate-400 p-3 text-left">Data Type</th>
                      <th className="border border-slate-400 p-3 text-left">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className='bg-white'>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">JSON</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Structured data</td>

                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">ENUM</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Fixed set of values</td>

                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3 text-gray-900">UUID</td>
                      <td className="border border-slate-400 p-3 text-gray-900">Unique ID</td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>

        );









      //  page2 DBMS VS RDBMS
      case 'dbms-vs-rdbms':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="dbms-vs-rdbms" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                DBMS vs RDBMS
              </h1>

              <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-slate-900 mb-6">What is DBMS?</h2>
                <p className='text-lg text-gray-700 leading-relaxed'> DBMS stands for <strong>Database Management System</strong>. It is software that helps us store, organize, manage, and retrieve data easily and safely.<br /><br />
                  Instead of saving data in files or notebooks, a DBMS allows us to store data in a database, where information is kept in an organized way using tables, rows, and columns.<br /><br />
                  A DBMS acts as a bridge between the user and the database. Users and applications do not directly access the data; they use the DBMS, which makes sure the data is correct, secure, and easy to access.<br /><br />
                </p>


                <h2 className='text-2xl font-bold text-slate-900 mb-4'>Why Do We Use DBMS?</h2>
                <div className='text-lg text-gray-700 leading-relaxed mb-4'><b>We use DBMS because it:</b></div>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6 ">
                  <li className="text-gray-700">Stores large amounts of data efficiently.</li>
                  <li className="text-gray-700">Makes data easy to search and update.</li>
                  <li className="text-gray-700">Keeps data secure.</li>
                  <li className="text-gray-700">Reduces data duplication.</li>
                  <li className="text-gray-700">Allows multiple users to access data at the same time.</li>
                </ul>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Real-Time Examples of DBMS:</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li className="text-gray-700">School systems to store student records.</li>
                  <li className="text-gray-700">Banking systems to manage customer accounts.</li>
                  <li className="text-gray-700">Hospital systems to store patient information.</li>
                  <li className="text-gray-700">Online shopping websites to manage products and orders.</li>
                </ul>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  Common DBMS software includes <strong>MySQL, Oracle, SQL Server, and PostgreSQL</strong>.
                </p>
                <br />

                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is RDBMS?</h2>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  <strong>RDBMS</strong> stands for <strong>Relational Database Management System</strong>. It is a type of DBMS that stores data in the form of <strong>tables</strong>. These tables are made up of <strong>rows</strong> (records) and <strong>columns</strong> (fields).<br /><br />
                  In an RDBMS, data in one table can be <strong>linked (related)</strong> to data in another table using keys, such as a <strong>primary key</strong> and a <strong>foreign key</strong>. This relationship helps keep data organized and avoids duplication.
                </p><br />
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Do We Use RDBMS?</h2>
                <b>We use RDBMS because it:</b><br />
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Organizes data in a structured way.</li>
                  <li>Reduces data duplication.</li>
                  <li>Maintains data accuracy and consistency.</li>
                  <li>Allows easy searching and updating of data.</li>
                  <li>Supports multiple users at the same time.</li>
                </ul>


                <h2 className="text-2xl font-bold text-slate-900 mb-4">Real-Life Examples of RDBMS:</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Banks use RDBMS to manage customer and transaction data.</li>
                  <li>Schools use it to store student and course details.</li>
                  <li>Hospitals use it for patient records.</li>
                  <li>Online shopping websites use it for products and orders.</li>
                </ul>
                <p className='text-lg text-gray-700 leading-relaxed'>Popular RDBMS software includes <strong>MySQL, Oracle, PostgreSQL, and Microsoft SQL Server</strong>.</p>

                <br /><br />

                <table className="w-full border-collapse border border-slate-400 bg-white text-slate-900">
                  <caption className="caption-top mb-4">
                    <h2 className="text-2xl font-bold text-slate-900">Difference Between DBMS and RDBMS</h2>
                  </caption>
                  <thead>
                    <tr className="bg-slate-200">
                      <th className="border border-slate-400 p-3 text-left"><b>DBMS</b></th>
                      <th className="border border-slate-400 p-3 text-left"><b>RDBMS</b></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-400 p-3">DBMS stands for <b>Database Management System</b>.</td>
                      <td className="border border-slate-400 p-3">RDBMS stands for <b>Relational Database Management System</b>.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3">Stores data as <b>files or tables</b>.</td>
                      <td className="border border-slate-400 p-3">Stores data only in <b>tables (rows and columns)</b>.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3">Does <b>not support relationships</b> between tables.</td>
                      <td className="border border-slate-400 p-3"><b>Supports relationships</b> using keys.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3">Data redundancy (duplication) is <b>higher</b>.</td>
                      <td className="border border-slate-400 p-3">Data redundancy is <b>low</b>.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3">Data integrity and accuracy are <b>not strictly maintained</b>.</td>
                      <td className="border border-slate-400 p-3">Ensures <b>data integrity and consistency</b>.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3">Suitable for <b>small applications</b>.</td>
                      <td className="border border-slate-400 p-3">Suitable for <b>large and complex applications</b>.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3">Security features are <b>limited</b>.</td>
                      <td className="border border-slate-400 p-3">Provides <b>better security and access control</b>.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-400 p-3"><b>Examples:</b><br /> File system, XML-based systems</td>
                      <td className="border border-slate-400 p-3"><b>Examples:</b><br /> MySQL, Oracle, SQL Server</td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </main>
        );






      case 'acidprinciples':
        return (
          <main>
            <div className='animated-fade-in-up'>
              <h1 id='acidprinciples' className='text-4xl md:text-5xl font-extra-bold mb-8 text-center'>ACID Principles</h1>
            </div>
            <div className='max-w-6xl mx-auto'>
              <div className='p-8 rounded-2xl mb-8'>
                <h2 className='text-4xl font-bold text-slate-900 mb-6'>ACID Principles:</h2>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  ACID is a set of <strong>four important rules</strong> that make sure databases work correctly and data stays <strong>safe, accurate, and consistent</strong>. These rules are used in <strong>RDBMS</strong> like MySQL, Oracle, and SQL Server.<br />
                </p><br />
                <h3 className='text-xl font-bold text-slate-900 mb-6'>A – Atomicity (All or Nothing):</h3>
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>A transaction (like transferring money) must either complete fully or not happen at all.</li>
                  <li>If something goes wrong, the database goes back to its previous state</li>
                  <li>Example: If you send $100 from your account, it should be deducted from your account and added to the receiver’s account. If one part fails, the transaction is canceled.</li>
                </ul>
                <h3 className='text-xl font-bold text-slate-900 mb-6'>C – Consistency (Data Must Be Correct):</h3>
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>

                  <li>Data must always follow the rules of the database.</li>
                  <li>The database moves from one valid state to another.</li>
                  <li>Example: If a bank account cannot have a negative balance, a transaction that causes a negative balance will be rejected.</li>
                </ul>
                <h3 className='text-xl font-bold text-slate-900 mb-6'>I – Isolation (Transactions Don’t Interfere):</h3>
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>

                  <li>Each transaction should run independently without affecting others at the same time.</li>
                  <li>Example: Two people booking tickets at the same time should not mess up the available seats.</li>
                </ul>
                <h3 className='text-xl font-bold text-slate-900 mb-6'>D – Durability (Changes Are Permanent):</h3>
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>

                  <li>Once a transaction is completed, the changes are permanent, even if the system crashes.</li>
                  <li>Example: After you deposit money, the new balance remains saved in the database even if the computer shuts down.</li>
                </ul>
                <h2 className='text-2xl font-bold text-slate-900 mb-6'>When and Where We Use ACID Principles?</h2>
                <p className='text-lg text-gray-700 leading-relaxed'>ACID principles are used <strong>whenever we work with databases</strong> in applications that need <strong>reliable and accurate data</strong>. They are especially important in places where <strong>data mistakes can cause big problems</strong>.</p><br />
                <h3 className='text-xl font-bold text-text-slate-900 mb-6'>Examples of where ACID is used:</h3>
                <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                  <li><strong>Banking & Finance –</strong> Transferring money between accounts, online payments, ATM transactions.</li>
                  <li><strong>E-commerce Websites –</strong> Updating stock and orders when someone buys a product.</li>
                  <li><strong>Healthcare Systems –</strong> Storing patient records, prescriptions, or test results.</li>
                  <li><strong>Booking Systems –</strong> Flight, hotel, or ticket booking where seats and availability must be accurate.</li>
                  <li><strong>Enterprise Applications –</strong> Managing employee data, payroll, inventory, or sales reports.</li>
                </ol>
                <h3 className='text-xl font-bold text-slate-900 mb-6'>How ACID Helps Us:</h3>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
                  <li><strong>Prevents Data Loss –</strong> Transactions are safe, so you won’t lose important data.</li>
                  <li><strong>Keeps Data Accurate –</strong> Only valid transactions are applied, avoiding mistakes.</li>
                  <li><strong>Avoids Conflicts –</strong> Multiple users can use the database at the same time without messing things up.</li>
                  <li><strong>Makes Applications Reliable –</strong> Users can trust the system to always behave correctly.</li>
                </ol>
                <h2 className='text-2xl font-bold text-slate-900 mb-6'>Scenario</h2>
                <p className='text-lg text-gray-700 leading-relaxed'>Think of <strong>you transferring money</strong> from your account to your friend’s account. This is something we do every day using a banking app. Behind the scenes, <strong>ACID principles</strong> make sure this transaction happens <strong>correctly and safely</strong>.
                </p><br />
                <h3 className='text-xl font-bold text-slate-900 mb-6'>A – Atomicity (All or Nothing)</h3>
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>Either the whole transfer happens, or nothing happens.</li>
                  <li><strong>Example:</strong> You want to send $100. The $100 is <strong>debited from your account AND credited to your friend’s account</strong>.</li>
                  <li>If something goes wrong, the money stays in your account. Nothing is lost.</li>
                </ul>
                <h3 className='text-xl font-bold text-slate-900 mb-6'>C – Consistency (Data Rules Are Followed)</h3>
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>The database always follows its rules.</li>
                  <li><strong>Example:</strong> Your account can’t go negative. If sending $100 would break this rule, the transfer won’t happen.</li>
                  {/* <li></li>  */}
                </ul>
                <h3 className='text-xl font-bold text-slate-900 mb-6'>I – Isolation (No Interference)</h3>
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>Every transaction runs independently.</li>
                  <li><strong>Example:</strong> You and your friend are both sending money at the same time. Your transactions don’t mix up each other’s money.</li>
                  {/* <li></li>  */}
                </ul>
                <h3 className='text-xl font-bold text-slate-900 mb-6'>D – Durability (Changes Are Permanent)</h3>
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>Once the transfer is done, it’s <strong>permanent</strong>.</li>
                  <li><strong>Example:</strong> After $100 is sent, it will still be there even if the bank’s system crashes immediately after.</li>
                  {/* <li></li>  */}
                </ul>
                <h3 className='text-2xl font-bold text-slate-900 mb-6'>Why This Matters in Real Life</h3>
                <h4 className='text-l font-bold text-slate-900'>Without ACID:</h4>
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>Your money could disappear or appear twice.</li>
                  <li>Stocks on e-commerce sites could go negative.</li>
                  <li>Flights or tickets could get double-booked.</li>
                </ul>
                <h4 className='text-l font-bold text-slate-900'>With ACID:</h4>
                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                  <li>Everything stays <strong>safe, correct, and reliable</strong>.</li>
                  <li>Users (you, me, everyone) can <strong>trust the system</strong>.</li>
                  {/* <li></li> */}
                </ul>





              </div>
            </div>
          </main>
        )

      case 'basic-commands':
        return (
          <main>

            <div className="animate-fade-in-up">
              <h1 id="basic-commands" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                SQL Commands
              </h1>
              {/* <p className="text-lg text-gray-700 mb-8 text-center">
                Master advanced SQL concepts including Window Functions, CTEs, Set Operations, and more
              </p> */}

              <div className="max-w-6xl mx-auto">
                <div className=" p-8 rounded-2xl mb-8">
                  <h2 className="text-4xl font-bold text-slate-900 mb-6"> Categories of SQL Commands</h2>
                  <p className='text-lg text-gray-700 leading-relaxed'>SQL commands are commonly divided into <b>five main categories</b> based on what they do in a database. Each category focuses on a different part of database management.</p>

                  <h3 className='text-2xl font-bold text-slate-900 mt-6'>DDL – Data Definition Language</h3>
                  <p className='text-lg text-gray-700 leading-relaxed'>DDL commands are used to <b>create, change, or remove database structures</b> such as tables, views, indexes, and schemas. These commands define how the database is built.</p>
                  <b>Key Features:</b>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Affect the structure of the database.</li>
                    <li>Often automatically committed.</li>
                  </ul>
                  <b>Common Commands:</b>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><b>CREATE –</b> Creates database objects (tables, views, databases).</li>
                    <li><b>ALTER –</b> Modifies existing objects.</li>
                    <li><b>DROP –</b> Deletes database objects.</li>
                    <li><b>TRUNCATE –</b> Removes all records from a table but keeps its structure.</li>
                    <li><b>RENAME –</b> Renames a database object.</li>
                  </ul>

                  <h3 className='text-2xl font-bold text-slate-900 mb-6'>DQL – Data Query Language</h3>
                  <p className='text-lg text-gray-700 leading-relaxed'>Used to retrieve data from the database without changing it.</p>
                  <b>Key Points:</b>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Read-only operations.</li>
                    <li>Most commonly used in applications.</li>
                  </ul>
                  <b>Common Commands:</b>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><b>SELECT –</b> Retrieves data from tables.</li>
                  </ul>

                  <h3 className='text-2xl font-bold text-slate-900 mt-6'>DML – Data Manipulation Language</h3>
                  <p className='text-lg text-gray-700 leading-relaxed'>DML commands are used to <b>work with the actual data</b> stored in the database. They allow you to add, modify, remove, and retrieve records.</p>
                  <b>Key Features:</b>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Operate on data inside tables.</li>
                    <li>Can be rolled back (before commit).</li>
                    <li>Most frequently used commands.</li>
                  </ul>
                  <b>Common Commands:</b>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><b>SELECT –</b> Retrieves data from tables.</li>
                    <li><b>INSERT –</b> Adds new records.</li>
                    <li><b>UPDATE –</b> Modifies existing records.</li>
                    <li><b>DELETE –</b> Removes records.</li>
                    <li><b>MERGE –</b> Combines insert and update operations.</li>
                  </ul>

                  <h3 className='text-2xl font-bold text-slate-900 mt-6'>DCL – Data Control Language</h3>
                  <p className='text-lg text-gray-700 leading-relaxed'>DCL commands manage <b>user permissions and access control</b>. They decide who can do what in the database.</p>
                  <b>Key Features:</b>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Used by database administrators.</li>
                    <li>Improves data security.</li>
                  </ul>
                  <b>Common Commands:</b>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><b>GRANT –</b> Gives permissions to users.</li>
                    <li><b>REVOKE –</b> Removes permissions from users.</li>
                  </ul>

                  <h3 className='text-2xl font-bold text-slate-900 mt-6'>TCL – Transaction Control Language</h3>
                  <p className='text-lg text-gray-700 leading-relaxed'>TCL commands handle <b>transactions</b>, ensuring data consistency and reliability when multiple operations are performed together.</p>
                  <b>Key Features:</b>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>Used with DML commands.</li>
                    <li>Helps maintain data integrity.</li>
                    <li>Supports rollback in case of errors.</li>
                  </ul>
                  <b>Common Commands:</b>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><b>BEGIN or START TRANSACTION –</b> Starts a transaction.</li>
                    <li><b>COMMIT –</b> Saves changes permanently.</li>
                    <li><b>ROLLBACK –</b> Undoes changes.</li>
                    <li><b>SAVEPOINT –</b> Sets a point to roll back to.</li>
                  </ul>
                </div>
              </div>
            </div>

          </main>
        );
      case 'operators':
        return (
          <main>
            <div className='animate-fade-in-up'>
              <h1 id='operators' className='text-4xl md:text-5xl font-extra-bold mb-8 text-center'>SQL Operators</h1>
              <div className='max-w-6xl mx-auto'>
                <div className='p-8 rounded-2xl mb-8'>
                  <h2 className='text-4xl font-bold text-slate-900 mb-6'>Operators</h2><br />
                  <p className='text-lg text-gray-700 leading-relaxed'><b>Operators in SQL</b> are <b>symbols</b> or <b>keywords</b> used to <b>perform actions</b> on data. like comparing, calculating, or combining values.<br />
                    Think of SQL operators <b>like decision-makers and calculators</b>.
                  </p>
                  <h3 className='text-2xl font-bold text-slate-900'>Types Of Operators:</h3><br />
                  <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>
                      <h3 className='text-2xl font-bold text-slate-900'>Arithmetic Operations:</h3>
                      <p className='text-lg text-gray-700 leading-relaxed'>
                        Used to perform <b>mathematical calculations</b>.
                      </p>
                      <table>
                        <thead>
                          <tr>
                            <th className='border border-slate-400 p-3 text-left'>Operator</th>
                            <th className='border border-slate-400 p-3 text-left'>Meaning</th>
                            <th className='border border-slate-400 p-3 text-left'>Example</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='border border-slate-400 p-3'>+</td>
                            <td className='border border-slate-400 p-3'>Addition</td>
                            <td className='border border-slate-400 p-3'>salary+bonus</td>

                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>-</td>
                            <td className='border border-slate-400 p-3'>Subtraction</td>
                            <td className='border border-slate-400 p-3'>price-discount</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>*</td>
                            <td className='border border-slate-400 p-3'>Multiplication</td>
                            <td className='border border-slate-400 p-3'>quantity*price</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>/</td>
                            <td className='border border-slate-400 p-3'>Division</td>
                            <td className='border border-slate-400 p-3'>total/count</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>%</td>
                            <td className='border border-slate-400 p-3'>Modulus(remainder)</td>
                            <td className='border border-slate-400 p-3'>marks%2</td>
                          </tr>
                        </tbody>
                      </table>
                    </li><br />
                    <li>
                      <h3 className='text-2xl font-bold text-slate-900'>Comparison(Relational) Operators:</h3>
                      <p className='text-lg text-gray-700 leading-relaxed'>
                        Used to <b>compare two values</b>

                      </p>
                      <table>
                        <thead>
                          <tr>
                            <th className='border border-slate-400 p-3 text-left'>Operator</th>
                            <th className='border border-slate-400 p-3 text-left'>Meaning</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='border border-slate-400 p-3'>=</td>
                            <td className='border border-slate-400 p-3'>Equal to</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>!= (or) &lt;&gt;</td>
                            <td className='border border-slate-400 p-3'>Not equal</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>&gt;</td>
                            <td className='border border-slate-400 p-3'>Greater than</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>&lt;</td>
                            <td className='border border-slate-400 p-3'>Less than</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>&gt;=</td>
                            <td className='border border-slate-400 p-3'>Greater than or equal</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>&lt;=</td>
                            <td className='border border-slate-400 p-3'>Less than or equal</td>
                          </tr>
                        </tbody>
                      </table>
                    </li><br />
                    <li>
                      <h3 className='text-2xl font-bold text-slate-900'>Logical Operators:</h3>
                      <p className='text-lg text-gray-700 leading-relaxed'>
                        Used to <b>combine multiple conditions</b>.
                      </p>
                      <table>
                        <thead>
                          <tr>
                            <th className='border border-slate-400 p-3 text-left'>Operator</th>
                            <th className='border border-slate-400 p-3 text-left'>Meaning</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='border border-slate-400 p-3'>AND</td>
                            <td className='border border-slate-400 p-3'>All conditions must be true</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>OR</td>
                            <td className='border border-slate-400 p-3'>Any one condition true</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>NOT</td>
                            <td className='border border-slate-400 p-3'>Reverse condition</td>
                          </tr>
                        </tbody>
                      </table>
                    </li><br />
                    <li>
                      <h3 className='text-2xl font-bold text-slate-900'>Assignment Operator:</h3>
                      <p className='text-lg text-gray-700 leading-relaxed'>
                        Used to <b>assign a value to a column</b> (mostly in UPDATE).

                      </p>
                      <table>
                        <thead>
                          <tr>
                            <th className='border border-slate-400 p-3 text-left'>Operator</th>
                            <th className='border border-slate-400 p-3 text-left'>Meaning</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='border border-slate-400 p-3'>=</td>
                            <td className='border border-slate-400 p-3'>Assign value</td>
                          </tr>
                        </tbody>
                      </table>
                    </li><br />
                    <li>
                      <h3 className='text-2xl font-bold text-slate-900'>Bitwise Operators (Advanced/Rare)</h3>
                      <p className='text-lg text-gray-700 leading-relaxed'>
                        Used to <b>compare binary values</b>.
                      </p>
                      <table>
                        <thead>
                          <tr>
                            <th className='border border-slate-400 p-3 text-left'>Operator</th>
                            <th className='border border-slate-400 p-3 text-left'>Meaning</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='border border-slate-400 p-3'>&</td>
                            <td className='border border-slate-400 p-3'>Bitwise AND</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>^</td>
                            <td className='border border-slate-400 p-3'>Bitwise XOR</td>
                          </tr>
                        </tbody>
                      </table>
                    </li><br />
                    <li>
                      <h3 className='text-2xl font-bold text-slate-900'>set operators:</h3>
                      <p className='text-lg text-gray-700 leading-relaxed'>
                        Used to <b>combine results of two queries</b>.
                      </p>
                      <table>
                        <thead>
                          <tr>
                            <th className='border border-slate-400 p-3 text-left'>Operator</th>
                            <th className='border border-slate-400 p-3 text-left'>Meaning</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='border border-slate-400 p-3'>UNION</td>
                            <td className='border border-slate-400 p-3'>Combines results (no duplicates)</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>UNION ALL</td>
                            <td className='border border-slate-400 p-3'>Combines all results</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>INTERSECT</td>
                            <td className='border border-slate-400 p-3'>Common records</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>EXCEPT/MINUS</td>
                            <td className='border border-slate-400 p-3'>Records from first not in second</td>
                          </tr>
                        </tbody>
                      </table>
                    </li><br />
                    <li>
                      <h3 className='text-2xl font-bold text-slate-900'>Special Operators:</h3>
                      <p className='text-lg text-gray-700 leading-relaxed'>
                        Used for <b>specific conditions</b>.

                      </p>
                      <table>
                        <thead>
                          <tr>
                            <th className='border border-slate-400 p-3 text-left'>Operator</th>
                            <th className='border border-slate-400 p-3 text-left'>Use</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='border border-slate-400 p-3'>IN</td>
                            <td className='border border-slate-400 p-3'>Match any value in list</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>BETWEEN</td>
                            <td className='border border-slate-400 p-3'>Range check</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>LIKE</td>
                            <td className='border border-slate-400 p-3'>Pattern matching</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>IS NULL</td>
                            <td className='border border-slate-400 p-3'>Check null values</td>
                          </tr>
                          <tr>
                            <td className='border border-slate-400 p-3'>EXISTS</td>
                            <td className='border border-slate-400 p-3'>Check the subquery result</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                  </ol>


                </div>
              </div>

            </div>
          </main>
        );










      case 'database':
        return (
          <main>
            <div className='animate-fade-in-up'>
              <h1 id='Database' className='text-4xl md:text-5xl font-extra-bold mb-8 text-center'>SQL-Database</h1>
              <div className='max-w-6xl mx-auto'>
                <div className='p-8 rounded-2xl mb-8'>
                  <h2 className='text-4xl font-bold text-slate-900 mb-6'>Database</h2><br />
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    A <strong>database</strong> is an organized collection of data stored electronically.
                    <strong>SQL (Structured Query Language)</strong> is used to <strong>create, store, read, update, and delete data</strong> inside a database.<br />
                    Think of a database like a <strong>digital cupboard</strong><br />
                    <strong>Tables</strong> are <strong>drawers</strong><br />
                    <strong>Rows</strong> are <strong>records</strong><br />
                    <strong>Columns</strong> are <strong>fields</strong><br />


                  </p><br />
                  <h2 className='text-2xl font-bold text-slate-900'>Why Do We Use Databases?</h2><br />
                  {/* <p className='text-lg text-gray-700 leading-relaxed'> */}
                  <h3 className='text-2xl font-bold text-slate-900'>Databases are used to:</h3>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    {/* <strong>Databases are used to:</strong> */}
                    <li>Store large amounts of data</li>
                    <li>Retrieve data quickly</li>
                    <li>Maintain data accuracy</li>
                    <li>Secure data</li>
                    <li>Allow multiple users at the same time</li>
                  </ul><br />
                  {/* </p> */}
                  {/* <h3 className='text-2xl font-bold text-slate-900'>Types Of Operators</h3> */}
                  <h3 className='text-2xl font-bold text-slate-900'>Create Database:</h3>
                  <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 italic text-lg text-gray-800 leading-relaxed shadow-sm'>
                    <strong className='not-italic'>Syntax:</strong> CREATE DATABASE database_name;<br />
                    <strong className='not-italic'>Example:</strong> CREATE DATABASE ohg_db;
                  </blockquote>
                  <h3 className='text-2xl font-bold text-slate-900'>Create Database with IF NOT EXISTS:</h3>
                  <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 italic text-lg text-gray-800 leading-relaxed shadow-sm'>

                    <strong className='not-italic'>Syntax:</strong> CREATE DATABASE IF NOT EXISTS database_name;<br />
                    <strong className='not-italic'>Example:</strong> CREATE DATABASE IF NOT EXISTS ohg_db;<br /><br />
                  </blockquote>
                  <h3 className='text-xl font-bold text-slate-900'> RENAME Database:</h3>
                  <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 italic text-lg text-gray-800 leading-relaxed shadow-sm'>

                    <strong className='not-italic'>Syntax:</strong> ALTER DATABASE old_db MODIFY NAME = new_db;<br />
                    <strong className='not-italic'>Example:</strong>  ALTER DATABASE ohg_db MODIFY NAME = ohg_new_db;
                  </blockquote>
                  <h3 className='text-xl font-bold text-slate-900'>SELECT Database:</h3>
                  <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 italic text-lg text-gray-800 leading-relaxed shadow-sm'>
                    <strong className='not-italic'>Syntax:</strong> USE database_name;<br />
                    <strong className='not-italic'>Example:</strong> USE ohg_new_db;
                  </blockquote>
                  <h3 className='text-xl font-bold text-slate-900'>Check Databases:</h3>
                  <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 italic text-lg text-gray-800 leading-relaxed shadow-sm'>
                    {/* Syntax: */}
                    <strong className='not-italic'>Example:</strong> SELECT name FROM sys.databases;

                  </blockquote>
                  <h3 className='text-xl font-bold text-slate-900'>DROP Databases:</h3>
                  <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 italic text-lg text-gray-800 leading-relaxed shadow-sm'>
                    <strong className='not-italic'>Syntax:</strong> DROP DATABASE database_name;<br />
                    <strong className='not-italic '>Example:</strong> DROP DATABASE ohg_new_db;
                  </blockquote>
                </div>
              </div>
            </div>
          </main>
        );







      case 'table':
        return (
          <main>
            <div className='animated-fade-in-up'>
              <h1 id="table" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">SQL-Tables</h1>
              <div className='max-w-6xl mx-auto'>
                <div className='p-8 rounded-2xl mb-8'>
                  <h2 className='text-4xl font-bold text-slate-900 mb-6'>Table</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-6'>A <strong>table in SQL</strong> is basically like a <strong>grid or spreadsheet</strong> where you store data in an organized way. Think of it as a collection of rows and columns:
                    <ul className='list-disc pl-6 mt-4 space-y-2 text-gray-700'>
                      <li><strong>Columns</strong> define <strong>what kind of information</strong> you store (like name, age, email).</li>
                      <li><strong>Rows</strong> are <strong>individual records</strong> (like each person’s data).</li>
                    </ul>
                  </div>
                  <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                    <strong>Syntax:</strong><br />
                    CREATE TABLE table_name (<br />
                    column1 datatype [constraints],<br />
                    column2 datatype [constraints],<br />
                    column3 datatype [constraints],<br />
                    ...<br />
                    columnN datatype [constraints],<br />
                    );


                  </blockquote>
                  <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                    <strong>Example:</strong><br />
                    CREATE TABLE Employees (<br />
                    ID INT,<br />
                    Name VARCHAR(100) NOT NULL,<br />
                    Age INT NULL,<br />
                    City VARCHAR(50),<br />
                    JoiningDate DATE<br />
                    );

                    <blockquote className='bg-[#fcfcfc] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                      Output:<br />
                      <table className="w-full border-collapse border border-slate-400 mt-4 rounded-lg overflow-hidden shadow-sm">
                        <thead className="bg-slate-100">
                          <tr>
                            <th className="border border-slate-400 p-3 text-left">ID</th>
                            <th className="border border-slate-400 p-3 text-left">Name</th>
                            <th className="border border-slate-400 p-3 text-left">Age</th>
                            <th className="border border-slate-400 p-3 text-left">City</th>
                            <th className="border border-slate-400 p-3 text-left">JoiningDate</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr >
                            <td className="border border-slate-400 p-3 text-gray-400">NULL</td>
                            <td className="border border-slate-400 p-3 text-gray-400">NULL</td>
                            <td className="border border-slate-400 p-3 text-gray-400">NULL</td>
                            <td className="border border-slate-400 p-3 text-gray-400">NULL</td>
                            <td className="border border-slate-400 p-3 text-gray-400">NULL</td>
                          </tr>
                        </tbody>
                      </table>
                    </blockquote>
                  </blockquote>
                  <h3 className='text-xl font-bold text-slate-900'>NOTE:</h3>
                  <div className='text-lg text-gray-700 leading-relaxed'>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>If a column is marked NOT NULL (like Name), it <strong>cannot be left empty</strong>. you must provide a value.</li>
                      <li>If a column is marked NULL or if nothing is mentioned (like Age, City, JoiningDate), it <strong>can be left empty</strong>. t’s optional.</li>
                    </ul>
                  </div>


                </div>
              </div>
            </div>
          </main>
        );







      case 'altertable':
        return (
          <main>
            <div className='animated-fade-in-up'>
              <h1 id="altertable" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">ALTER-Tables</h1>
              <div className='max-w-6xl mx-auto'>
                <h2 className='text-4xl font-bold text-slate-900 mb-6'>ALTER Table</h2>
                <div className='p-8 rounded-2xl mb-8'>
                  <div className='text-lg text-gray-700 leading-relaxed mb-6'>ALTER TABLE is used to <strong>modify an existing table</strong> without deleting it. You can:
                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>Add columns</strong></li>
                      <li><strong>Modify columns </strong>(data type, size, nullability)</li>
                      <li><strong>Drop columns</strong> (delete a column)</li>
                      <li><strong>Rename columns or the table</strong></li>
                      <li><strong>Add or drop constraints</strong> (like PRIMARY KEY, UNIQUE, FOREIGN KEY)</li>
                    </ol>
                    <h3 className='text-xl font-bold text-slate-900 mb-6'>Add a New Column</h3>
                    <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                      <strong>Syntax:</strong><br />
                      ALTER TABLE table_name ADD column_name datatype [constraints];<br />


                      <strong>Example:</strong><br />
                      ALTER TABLE Employees ADD Salary DECIMAL(10,2);


                    </blockquote>
                    <h3 className='text-xl font-bold text-slate-900 mb-6'>Modify Column</h3>
                    <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                      <strong>Syntax:</strong><br />
                      ALTER TABLE table_name MODIFY column_name new_datatype [constraints];<br />


                      <strong>Example:</strong><br />
                      ALTER TABLE Employees MODIFY Age INT NOT NULL;

                    </blockquote>
                    <h3 className='text-xl font-bold text-slate-900 mb-6'>Drop a Column</h3>
                    <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                      <strong>Syntax:</strong><br />
                      ALTER TABLE table_name DROP COLUMN column_name;<br />


                      <strong>Example:</strong><br />
                      ALTER TABLE Employees DROP COLUMN City;

                    </blockquote>
                    <h3 className='text-xl font-bold text-slate-900 mb-6'>Rename the Table</h3>
                    <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                      <strong>Syntax:</strong><br />
                      ALTER TABLE old_table_name RENAME TO new_table_name;<br />


                      <strong>Example:</strong><br />
                      ALTER TABLE Employees RENAME TO EMP;


                    </blockquote>
                    <h3 className='text-xl font-bold text-slate-900 mb-6'>Add a Constraint</h3>
                    <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                      <strong>Syntax:</strong><br />
                      ALTER TABLE table_name<br />
                      ADD CONSTRAINT constraint_name PRIMARY KEY (column_name); <br />


                      <strong>Example:</strong><br />
                      ALTER TABLE Employees <br />
                      ADD CONSTRAINT PK_ID PRIMARY KEY (ID);



                    </blockquote>
                    <h3 className='text-xl font-bold text-slate-900 mb-6'>Drop a Constraint</h3>
                    <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                      <strong>Syntax:</strong><br />
                      ALTER TABLE table_name<br />
                      DROP PRIMARY KEY;<br />

                      <strong>Example:</strong><br />
                      ALTER TABLE Employees<br />
                      DROP PRIMARY KEY;


                    </blockquote>
                  </div>


                </div>

              </div>
            </div>
          </main>
        );






      case 'insert':
        return (
          <main>
            <div className='animated-fade-in-up'>
              <h1 id="insert" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">SQL-INSERT</h1>
              <div className='max-w-6xl mx-auto'>
                <div className='p-8 rounded-2xl mb-8'>
                  <h2 className='text-3xl font-bold text-slate-900 mb-6'>INSERT INTO</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-6'>INSERT INTO is an SQL command used to <strong>add new data (rows) to a table</strong>.
                    <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                      <strong>Syntax:</strong><br />
                      INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);

                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>table_name → the table where you want to add the data</li>
                        <li>column1, column2, ... → the specific columns you want to fill</li>
                        <li>value1, value2, ... → the actual data for those columns</li>
                        <li>INSERT INTO Employees (...) → “I want to add a new row (employee) to the Employees table.”</li>
                        <li>VALUES (...) → “Here is the information for this employee.”</li>
                      </ul>


                      <strong>Example:</strong><br />
                      INSERT INTO Employees (ID, Name, Age, City, JoiningDate)<br />
                      VALUES (1, 'Alice', 28, 'New York', '2023-05-01');<br />

                      INSERT INTO Employees (ID, Name, Age, City, JoiningDate)<br />
                      VALUES (2, 'Smith', 35, 'Los Angeles', '2022-11-15');<br />



                    </blockquote>
                    <h3 className='text-xl font-bold text-slate-900 mb-6'>NOTE:</h3>
                    <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Each INSERT adds one employee’s information as a new row.<br />
                      Columns not mentioned can be left blank (NULL), unless marked NOT NULL.<br />

                    </p>
                    <h3 className='text-xl font-bold text-slate-900 mb-6'>Insert Without Specifying Columns</h3>
                    <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                      INSERT INTO Employees <br />
                      VALUES (3, 'Brown', 42, 'Chicago', '2021-07-20');<br />

                      INSERT INTO Employees<br />
                      VALUES (4, 'Prince', 30, 'Boston', '2023-01-10');<br />







                    </blockquote>
                    <h3 className='text-xl font-bold text-slate-900 mb-6'>NOTE:</h3>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>Adds Prince as a new employee with all the info.</li>
                      <li>Make sure the order of values matches the table columns exactly.</li>
                    </ul>
                    <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                      <strong>Output:</strong><br />
                      <table className="w-full border-collapse border border-slate-400 mt-4 rounded-lg overflow-hidden shadow-sm">
                        <thead className='bg-slate-100'>
                          <tr>
                            <th className="border border-slate-400 p-3 text-left">ID</th>
                            <th className="border border-slate-400 p-3 text-left">Name</th>
                            <th className="border border-slate-400 p-3 text-left">Age</th>
                            <th className="border border-slate-400 p-3 text-left">City</th>
                            <th className="border border-slate-400 p-3 text-left">JoiningDate</th>

                          </tr>
                        </thead>
                        <tbody className='bg-white'>
                          <tr>
                            <td className="border border-slate-400 p-3 text-gray-900">1</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Alice</td>
                            <td className="border border-slate-400 p-3 text-gray-900">28</td>
                            <td className="border border-slate-400 p-3 text-gray-900">New York</td>
                            <td className="border border-slate-400 p-3 text-gray-900">2023-05-01</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-400 p-3 text-gray-900">2</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Smith</td>
                            <td className="border border-slate-400 p-3 text-gray-900">35</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Los Angeles</td>
                            <td className="border border-slate-400 p-3 text-gray-900">2022-11-15</td>

                          </tr>
                          <tr>
                            <td className="border border-slate-400 p-3 text-gray-900">3</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Brown</td>
                            <td className="border border-slate-400 p-3 text-gray-900">42</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Chicago</td>
                            <td className="border border-slate-400 p-3 text-gray-900">2021-07-20</td>

                          </tr>
                          <tr>
                            <td className="border border-slate-400 p-3 text-gray-900">4</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Prince</td>
                            <td className="border border-slate-400 p-3 text-gray-900">30</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Boston</td>
                            <td className="border border-slate-400 p-3 text-gray-900">2023-01-10</td>

                          </tr>
                        </tbody>
                      </table>


                    </blockquote>



                  </div>
                </div>
              </div>
            </div>
          </main>
        );




      case 'drop':
        return (

          <main>
            <div className='animated-fade-in-up'>
              <h1 id="drop" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">DROP-Table</h1>
              <div className='max-w-6xl mx-auto'>
                <h2 className='text-4xl font-bold text-slate-900 mb-6'>DROP Table</h2>
                <div className='p-8 rounded-2xl mb-8'>
                  <div className='text-lg text-gray-700 leading-relaxed mb-6'>DROP TABLE is an SQL command used to <strong>completely remove a table from the database</strong>.
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>This includes <strong>all the rows (data) and the table structure (columns, constraints, etc.)</strong>.</li>
                      <li>Once you run it, the table <strong>cannot be recovered</strong> unless you have a backup.</li>
                    </ul>
                    <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                      <strong>Syntax:</strong><br />DROP TABLE table_name;<br />
                      <strong>Example:</strong><br />DROP TABLE Employees;<br />
                      <strong>Syntax:</strong><br />DROP TABLE IF EXISTS table_name;<br />
                      <strong>Example:</strong><br />DROP TABLE IF EXISTS Employees;<br />
                    </blockquote>
                    <h3 className='text-xl font-bold text-slate-900 mb-6'>NOTE:</h3>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>Removing an old table</strong> that is no longer needed.</li>
                      <li><strong>Resetting a database</strong> by clearing tables completely.</li>
                      <li><strong>Cleaning up temporary tables</strong> created for testing or analysis.</li>
                    </ul>
                    <h3 className='text-xl font-bold text-slate-900 mb-6'>TRUNCATE TABLE</h3>
                    <p className='text-lg text-gray-700 leading-relaxed mb-6'>TRUNCATE TABLE is an SQL command used to <strong>delete all the data (rows) in a table, but keep the table itself</strong> with its structure (columns, constraints, etc.) intact.</p>
                    <blockquote className='bg-[#cacccb] border-l-8 border-r-8 border-yellow-400 p-6 my-8 text-lg text-gray-800 leading-relaxed shadow-sm'>
                      <strong>Syntax:</strong><br />TRUNCATE TABLE table_name;<br />
                      <strong>Example:</strong><br />TRUNCATE TABLE Employees;<br /><br />
                      <strong>Before Truncate:</strong><br />
                      <table className="w-full border-collapse border border-slate-400 mt-4 rounded-lg overflow-hidden shadow-sm">
                        <thead className='bg-slate-100'>
                          <tr>
                            <th className="border border-slate-400 p-3 text-left">ID</th>
                            <th className="border border-slate-400 p-3 text-left">Name</th>
                            <th className="border border-slate-400 p-3 text-left">Age</th>
                            <th className="border border-slate-400 p-3 text-left">City</th>
                            <th className="border border-slate-400 p-3 text-left">JoiningDate</th>

                          </tr>
                        </thead>
                        <tbody className='bg-white'>
                          <tr>
                            <td className="border border-slate-400 p-3 text-gray-900">1</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Alice</td>
                            <td className="border border-slate-400 p-3 text-gray-900">28</td>
                            <td className="border border-slate-400 p-3 text-gray-900">New York</td>
                            <td className="border border-slate-400 p-3 text-gray-900">2023-05-01</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-400 p-3 text-gray-900">2</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Smith</td>
                            <td className="border border-slate-400 p-3 text-gray-900">35</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Los Angeles</td>
                            <td className="border border-slate-400 p-3 text-gray-900">2022-11-15</td>

                          </tr>
                          <tr>
                            <td className="border border-slate-400 p-3 text-gray-900">3</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Brown</td>
                            <td className="border border-slate-400 p-3 text-gray-900">42</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Chicago</td>
                            <td className="border border-slate-400 p-3 text-gray-900">2021-07-20</td>

                          </tr>
                          <tr>
                            <td className="border border-slate-400 p-3 text-gray-900">4</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Prince</td>
                            <td className="border border-slate-400 p-3 text-gray-900">30</td>
                            <td className="border border-slate-400 p-3 text-gray-900">Boston</td>
                            <td className="border border-slate-400 p-3 text-gray-900">2023-01-10</td>

                          </tr>
                        </tbody>
                      </table><br />


                      <strong>After TRUNCATE TABLE:</strong>
                      <table className="w-full border-collapse border border-slate-400 mt-4 rounded-lg overflow-hidden shadow-sm">
                        <thead className="bg-slate-100">
                          <tr>
                            <th className="border border-slate-400 p-3 text-left">ID</th>
                            <th className="border border-slate-400 p-3 text-left">Name</th>
                            <th className="border border-slate-400 p-3 text-left">Age</th>
                            <th className="border border-slate-400 p-3 text-left">City</th>
                            <th className="border border-slate-400 p-3 text-left">JoiningDate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white">
                            <td className="border border-slate-400 p-3 text-gray-400">NULL</td>
                            <td className="border border-slate-400 p-3 text-gray-400">NULL</td>
                            <td className="border border-slate-400 p-3 text-gray-400">NULL</td>
                            <td className="border border-slate-400 p-3 text-gray-400">NULL</td>
                            <td className="border border-slate-400 p-3 text-gray-400">NULL</td>
                          </tr>
                        </tbody>
                      </table>

                    </blockquote>
                    <h3 className='text-xl font-bold text-slate-900 mb-6'>NOTE:</h3>
                    <p className='text-lg text-gray-700 leading-relaxed mb-6 '>
                      The table is empty, but the columns are still there.<br />
                      You can immediately start inserting new data.

                    </p>
                    <h3 className='text-xl font-bold text-slate-900 mb-6 text-center'>Key Differences Between DROP TABLE and TRUNCATE TABLE.</h3>
                    <table className='w-full border-collapse border border-slate-400 mt-4 rounded-lg overflow-hidden shadow-sm'>
                      <thead className='bg-slate-100'>
                        <tr>
                          <th className="border border-slate-400 p-3 text-center">Feature</th>
                          <th className="border border-slate-400 p-3 text-center">DROP TABLE</th>
                          <th className="border border-slate-400 p-3 text-center">TRUNCATE TABLE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-400 p-3 text-gray-900">Deletes table structure</td>
                          <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                          <td className="border border-slate-400 p-3 text-gray-900"> No</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-400 p-3 text-gray-900">Deletes table data</td>
                          <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                          <td className="border border-slate-400 p-3 text-gray-900"> Yes</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-400 p-3 text-gray-900">Can insert new data after</td>
                          <td className="border border-slate-400 p-3 text-gray-900">No (table gone)</td>
                          <td className="border border-slate-400 p-3 text-gray-900">Yes (table exists)</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-400 p-3 text-gray-900">Faster for large tables</td>
                          <td className="border border-slate-400 p-3 text-gray-900">Deletes structure too</td>
                          <td className="border border-slate-400 p-3 text-gray-900">Fast, just clears data</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-400 p-3 text-gray-900">Can be rolled back</td>
                          <td className="border border-slate-400 p-3 text-gray-900">Depends on DB (usually no)</td>
                          <td className="border border-slate-400 p-3 text-gray-900">Depends on DB (sometimes yes)</td>
                        </tr>
                      </tbody>
                    </table>




                  </div>
                </div>
              </div>
            </div>
          </main>
        );








    
    }
  };

  return (
    <TechLayout onThisPage={pageHeadings} technology="sql" activeSection={activeSection} setActiveSection={setActiveSection} background="white">
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
