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
                  Think of data types like labels on boxes 📦 each box accepts only a certain type of item.<br />
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








        // case 'data-types':
        //   return (
        //     <main>
        //       <div className="animate-fade-in-up">
        //         <h1 id="data-types" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
        //           Data Types & Constraints
        //         </h1>
        //         <p className="text-lg text-gray-600 mb-8 text-center">Learn about SQL data types and constraints for proper database design
        //         </p>

        //         <div className="max-w-6xl mx-auto">
        //           {/* SQL Data Types */}
        //           <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl mb-8">
        //             <h2 className="text-3xl font-bold text-slate-900 mb-6"> SQL Data Types & Database Design</h2>

        //             <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg mb-6">
        //               <h4 className="text-xl font-bold text-blue-300 mb-4"> Understanding Data Types in Database Design</h4>
        //               <p className="text-lg text-gray-700 leading-relaxed mb-4">
        //                 Data types are the foundation of database schema design. They define what kind of data can be stored in each column,
        //                 how much space it will occupy, and what operations can be performed on it. Choosing appropriate data types is crucial
        //                 for data integrity, performance optimization, and storage efficiency.
        //               </p>
        //               <div className="bg-gray-700/50 p-4 rounded-lg">
        //                 <h5 className="font-bold text-slate-900 mb-2">Data Type Selection Principles:</h5>
        //                 <ul className="text-gray-700 text-sm space-y-2">
        //                   <li>• <strong className="text-slate-900">Storage Efficiency:</strong> Choose the smallest type that accommodates your data</li>
        //                   <li>• <strong className="text-slate-900">Data Integrity:</strong> Prevent invalid data through type constraints</li>
        //                   <li>• <strong className="text-slate-900">Performance:</strong> Optimize for query speed and indexing</li>
        //                   <li>• <strong className="text-slate-900">Future-Proofing:</strong> Consider scalability and data growth</li>
        //                   <li>• <strong className="text-slate-900">Consistency:</strong> Use consistent types across related tables</li>
        //                 </ul>
        //               </div>
        //             </div>

        //             <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-lg mb-6">
        //               <h4 className="text-xl font-bold text-purple-300 mb-4"> Data Type Categories & Characteristics</h4>
        //               <div className="grid md:grid-cols-2 gap-4">
        //                 <div className="bg-gray-700/50 p-4 rounded-lg">
        //                   <h5 className="font-bold text-slate-900 mb-2">Storage Characteristics:</h5>
        //                   <ul className="text-gray-700 text-sm space-y-2">
        //                     <li>• <strong className="text-slate-900">Fixed vs Variable:</strong> CHAR vs VARCHAR storage differences</li>
        //                     <li>• <strong className="text-slate-900">Precision vs Scale:</strong> DECIMAL precision for financial data</li>
        //                     <li>• <strong className="text-slate-900">Memory Usage:</strong> How data types affect memory consumption</li>
        //                     <li>• <strong className="text-slate-900">Index Efficiency:</strong> Impact on index performance</li>
        //                   </ul>
        //                 </div>
        //                 <div className="bg-gray-700/50 p-4 rounded-lg">
        //                   <h5 className="font-bold text-slate-900 mb-2">Operational Considerations:</h5>
        //                   <ul className="text-gray-700 text-sm space-y-2">
        //                     <li>• <strong className="text-slate-900">Sorting & Comparison:</strong> How types affect ORDER BY operations</li>
        //                     <li>• <strong className="text-slate-900">Mathematical Operations:</strong> Numeric type calculations</li>
        //                     <li>• <strong className="text-slate-900">String Operations:</strong> Text manipulation capabilities</li>
        //                     <li>• <strong className="text-slate-900">Date Arithmetic:</strong> Temporal calculations and functions</li>
        //                   </ul>
        //                 </div>
        //               </div>
        //             </div>

        //             <div className="grid md:grid-cols-2 gap-6 mb-6">
        //               <div className="bg-gray-800 p-6 rounded-xl">
        //                 <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg mb-4">
        //                   <h3 className="text-xl font-bold text-green-300 mb-3"> Numeric Data Types</h3>
        //                   <p className="text-gray-700 text-sm mb-3">
        //                     Numeric types are fundamental for mathematical operations, financial calculations, and data analysis.
        //                     Understanding precision, scale, and storage requirements is crucial for accurate data representation.
        //                   </p>
        //                   <div className="bg-gray-700/50 p-3 rounded-lg">
        //                     <h5 className="font-bold text-slate-900 mb-2 text-xs">Key Considerations:</h5>
        //                     <ul className="text-gray-700 text-xs space-y-1">
        //                       <li>• <strong className="text-slate-900">Integer Types:</strong> Whole numbers with different ranges</li>
        //                       <li>• <strong className="text-slate-900">Decimal Types:</strong> Fixed-point for financial precision</li>
        //                       <li>• <strong className="text-slate-900">Floating Types:</strong> Approximate values for scientific data</li>
        //                       <li>• <strong className="text-slate-900">Precision Loss:</strong> Understanding floating-point limitations</li>
        //                     </ul>
        //                   </div>
        //                 </div>
        //                 <ul className="text-gray-700 space-y-2">
        //                   <li>• <code className="text-slate-900">INT</code> - Integer numbers (-2,147,483,648 to 2,147,483,647)</li>
        //                   <li>• <code className="text-slate-900">BIGINT</code> - Large integer numbers</li>
        //                   <li>• <code className="text-slate-900">DECIMAL(p,s)</code> - Fixed-point decimal (precision, scale)</li>
        //                   <li>• <code className="text-slate-900">FLOAT</code> - Floating-point numbers</li>
        //                   <li>• <code className="text-slate-900">DOUBLE</code> - Double-precision floating-point</li>
        //                 </ul>
        //               </div>
        //               <div className="bg-gray-800 p-6 rounded-xl">
        //                 <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg mb-4">
        //                   <h3 className="text-xl font-bold text-blue-300 mb-3"> String Data Types</h3>
        //                   <p className="text-gray-700 text-sm mb-3">
        //                     String types handle textual data with different storage and performance characteristics.
        //                     Choosing between fixed and variable length affects storage efficiency and query performance.
        //                   </p>
        //                   <div className="bg-gray-700/50 p-3 rounded-lg">
        //                     <h5 className="font-bold text-slate-900 mb-2 text-xs">Storage Optimization:</h5>
        //                     <ul className="text-gray-700 text-xs space-y-1">
        //                       <li>• <strong className="text-slate-900">Fixed Length:</strong> CHAR for consistent data lengths</li>
        //                       <li>• <strong className="text-slate-900">Variable Length:</strong> VARCHAR for space efficiency</li>
        //                       <li>• <strong className="text-slate-900">Large Text:</strong> TEXT for documents and content</li>
        //                       <li>• <strong className="text-slate-900">Binary Data:</strong> BLOB for files and media</li>
        //                     </ul>
        //                   </div>
        //                 </div>
        //                 <ul className="text-gray-700 space-y-2">
        //                   <li>• <code className="text-slate-900">VARCHAR(n)</code> - Variable-length string (max n characters)</li>
        //                   <li>• <code className="text-slate-900">CHAR(n)</code> - Fixed-length string (n characters)</li>
        //                   <li>• <code className="text-slate-900">TEXT</code> - Large text data</li>
        //                   <li>• <code className="text-slate-900">BLOB</code> - Binary large objects</li>
        //                 </ul>
        //               </div>
        //             </div>

        //             <div className="grid md:grid-cols-2 gap-6 mb-6">
        //               <div className="bg-gray-800 p-6 rounded-xl">
        //                 <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg mb-4">
        //                   <h3 className="text-xl font-bold text-purple-300 mb-3"> Date & Time Types</h3>
        //                   <p className="text-gray-700 text-sm mb-3">
        //                     Temporal data types handle dates, times, and timestamps with different precision levels.
        //                     Understanding timezone handling and temporal calculations is essential for business applications.
        //                   </p>
        //                   <div className="bg-gray-700/50 p-3 rounded-lg">
        //                     <h5 className="font-bold text-slate-900 mb-2 text-xs">Temporal Considerations:</h5>
        //                     <ul className="text-gray-700 text-xs space-y-1">
        //                       <li>• <strong className="text-slate-900">Timezone Awareness:</strong> Handling global applications</li>
        //                       <li>• <strong className="text-slate-900">Precision Levels:</strong> Seconds, milliseconds, microseconds</li>
        //                       <li>• <strong className="text-slate-900">Auto-Updating:</strong> TIMESTAMP for audit trails</li>
        //                       <li>• <strong className="text-slate-900">Date Arithmetic:</strong> Calculations and comparisons</li>
        //                     </ul>
        //                   </div>
        //                 </div>
        //                 <ul className="text-gray-700 space-y-2">
        //                   <li>• <code className="text-slate-900">DATE</code> - Date (YYYY-MM-DD)</li>
        //                   <li>• <code className="text-slate-900">TIME</code> - Time (HH:MM:SS)</li>
        //                   <li>• <code className="text-slate-900">DATETIME</code> - Date and time</li>
        //                   <li>• <code className="text-slate-900">TIMESTAMP</code> - Auto-updating timestamp</li>
        //                 </ul>
        //               </div>
        //               <div className="bg-gray-800 p-6 rounded-xl">
        //                 <div className="bg-orange-900/20 border border-orange-500/30 p-4 rounded-lg mb-4">
        //                   <h3 className="text-xl font-bold text-orange-300 mb-3"> Boolean & Specialized Types</h3>
        //                   <p className="text-gray-700 text-sm mb-3">
        //                     Specialized data types handle boolean logic, structured data, and unique identifiers.
        //                     These types provide semantic meaning and validation for specific use cases.
        //                   </p>
        //                   <div className="bg-gray-700/50 p-3 rounded-lg">
        //                     <h5 className="font-bold text-slate-900 mb-2 text-xs">Specialized Features:</h5>
        //                     <ul className="text-gray-700 text-xs space-y-1">
        //                       <li>• <strong className="text-slate-900">Boolean Logic:</strong> TRUE/FALSE operations</li>
        //                       <li>• <strong className="text-slate-900">Structured Data:</strong> JSON for flexible schemas</li>
        //                       <li>• <strong className="text-slate-900">Enumeration:</strong> Predefined value lists</li>
        //                       <li>• <strong className="text-slate-900">Unique IDs:</strong> UUID for distributed systems</li>
        //                     </ul>
        //                   </div>
        //                 </div>
        //                 <ul className="text-gray-700 space-y-2">
        //                   <li>• <code className="text-slate-900">BOOLEAN</code> - TRUE/FALSE values</li>
        //                   <li>• <code className="text-slate-900">JSON</code> - JSON formatted data</li>
        //                   <li>• <code className="text-slate-900">ENUM</code> - List of predefined values</li>
        //                   <li>• <code className="text-slate-900">UUID</code> - Universally unique identifier</li>
        //                 </ul>
        //               </div>
        //             </div>
        //           </div>

        //           {/* Constraints */}
        //                 <div className="bg-gray-800 p-8 rounded-2xl mb-8">
        //                   <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg mb-6">
        //                     <h2 className="text-3xl font-bold text-red-300 mb-4"> SQL Constraints - Data Integrity Guardians</h2>
        //                     <p className="text-lg text-gray-700 leading-relaxed mb-4">
        //                       Constraints are rules that enforce data integrity and business logic at the database level. They act as guardians
        //                       ensuring that data remains consistent, valid, and follows the intended design patterns throughout the database lifecycle.
        //                     </p>
        //                     <div className="bg-gray-700/50 p-4 rounded-lg">
        //                       <h5 className="font-bold text-slate-900 mb-2">Constraint Benefits:</h5>
        //                       <ul className="text-gray-700 text-sm space-y-2">
        //                         <li>• <strong className="text-slate-900">Data Integrity:</strong> Prevent invalid or inconsistent data</li>
        //                         <li>• <strong className="text-slate-900">Business Rules:</strong> Enforce organizational policies at database level</li>
        //                         <li>• <strong className="text-slate-900">Referential Integrity:</strong> Maintain relationships between tables</li>
        //                         <li>• <strong className="text-slate-900">Performance:</strong> Enable query optimization through constraint indexes</li>
        //                         <li>• <strong className="text-slate-900">Documentation:</strong> Self-documenting database design</li>
        //                       </ul>
        //                     </div>
        //                   </div>
        //                   <p className="text-lg text-gray-700 mb-6">
        //                     Constraints are rules applied to columns that ensure data integrity and consistency.
        //                   </p>

        //                   <div className="bg-gray-900 p-6 rounded-xl mb-6">
        //                     <h3 className="text-xl font-bold text-slate-900 mb-4">Common Constraints</h3>
        //                     <div className="space-y-4">
        //                       <div className="bg-gray-700 p-4 rounded-lg">
        //                         <h4 className="text-lg font-bold text-yellow-400 mb-2">PRIMARY KEY</h4>
        //                         <p className="text-gray-700 mb-2">Uniquely identifies each row in a table.</p>
        //                         <pre className="text-slate-900 font-mono text-sm">
        //                           {`CREATE TABLE Students (
        //     StudentID INT PRIMARY KEY,
        //     Name VARCHAR(50),
        //     Age INT
        // );`}
        //                         </pre>
        //                       </div>

        //                       <div className="bg-gray-700 p-4 rounded-lg">
        //                         <h4 className="text-lg font-bold text-yellow-400 mb-2">FOREIGN KEY</h4>
        //                         <p className="text-gray-700 mb-2">Links tables and maintains referential integrity.</p>
        //                         <pre className="text-slate-900 font-mono text-sm">
        //                           {`CREATE TABLE Orders (
        //     OrderID INT PRIMARY KEY,
        //     CustomerID INT,
        //     OrderDate DATE,
        //     FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
        // );`}
        //                         </pre>
        //                       </div>

        //                       <div className="bg-gray-700 p-4 rounded-lg">
        //                         <h4 className="text-lg font-bold text-yellow-400 mb-2">NOT NULL</h4>
        //                         <p className="text-gray-700 mb-2">Ensures a column cannot have NULL values.</p>
        //                         <pre className="text-slate-900 font-mono text-sm">
        //                           {`CREATE TABLE Employees (
        //     EmployeeID INT PRIMARY KEY,
        //     FirstName VARCHAR(50) NOT NULL,
        //     LastName VARCHAR(50) NOT NULL,
        //     Email VARCHAR(100)
        // );`}
        //                         </pre>
        //                       </div>

        //                       <div className="bg-gray-700 p-4 rounded-lg">
        //                         <h4 className="text-lg font-bold text-yellow-400 mb-2">UNIQUE</h4>
        //                         <p className="text-gray-700 mb-2">Ensures all values in a column are unique.</p>
        //                         <pre className="text-slate-900 font-mono text-sm">
        //                           {`CREATE TABLE Users (
        //     UserID INT PRIMARY KEY,
        //     Username VARCHAR(50) UNIQUE,
        //     Email VARCHAR(100) UNIQUE
        // );`}
        //                         </pre>
        //                       </div>

        //                       <div className="bg-gray-700 p-4 rounded-lg">
        //                         <h4 className="text-lg font-bold text-yellow-400 mb-2">CHECK</h4>
        //                         <p className="text-gray-700 mb-2">Ensures values meet specific conditions.</p>
        //                         <pre className="text-slate-900 font-mono text-sm">
        //                           {`CREATE TABLE Products (
        //     ProductID INT PRIMARY KEY,
        //     ProductName VARCHAR(100),
        //     Price DECIMAL(10,2) CHECK (Price > 0),
        //     Category VARCHAR(50) CHECK (Category IN ('Electronics', 'Books', 'Clothing'))
        // );`}
        //                         </pre>
        //                       </div>

        //                       <div className="bg-gray-700 p-4 rounded-lg">
        //                         <h4 className="text-lg font-bold text-yellow-400 mb-2">DEFAULT</h4>
        //                         <p className="text-gray-700 mb-2">Sets a default value for a column.</p>
        //                         <pre className="text-slate-900 font-mono text-sm">
        //                           {`CREATE TABLE Orders (
        //     OrderID INT PRIMARY KEY,
        //     OrderDate DATE DEFAULT CURRENT_DATE,
        //     Status VARCHAR(20) DEFAULT 'Pending'
        // );`}
        //                         </pre>
        //                       </div>
        //                     </div>
        //                   </div>
        //                 </div>

        //                 {/* Best Practices */}
        //         <div className="bg-gray-800 p-8 rounded-2xl">
        //           <h2 className="text-3xl font-bold text-slate-900 mb-6"> Best Practices</h2>

        //           <div className="grid md:grid-cols-2 gap-6">
        //             <div className="bg-green-900/20 border border-green-500 p-6 rounded-xl">
        //               <h3 className="text-xl font-bold text-green-400 mb-4"> Data Type Selection</h3>
        //               <ul className="text-gray-700 space-y-2">
        //                 <li>• Choose smallest appropriate data type</li>
        //                 <li>• Use INT for IDs, DECIMAL for money</li>
        //                 <li>• VARCHAR for variable text, CHAR for fixed</li>
        //                 <li>• Consider storage and performance</li>
        //                 <li>• Plan for future data growth</li>
        //               </ul>
        //             </div>

        //             <div className="bg-blue-900/20 border border-blue-500 p-6 rounded-xl">
        //               <h3 className="text-xl font-bold text-blue-400 mb-4"> Constraint Design</h3>
        //               <ul className="text-gray-700 space-y-2">
        //                 <li>• Always define PRIMARY KEY</li>
        //                 <li>• Use FOREIGN KEY for relationships</li>
        //                 <li>• Add NOT NULL for required fields</li>
        //                 <li>• Use CHECK for business rules</li>
        //                 <li>• Consider UNIQUE for identifiers</li>
        //               </ul>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </main >
        // );

        //       case 'creating-tables':
        //         return (
        //           <main>
        //             <div className="animate-fade-in-up">
        //               <h1 id="creating-tables" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
        //                 Creating Tables
        //               </h1>
        //               <p className="text-lg text-gray-600 mb-8 text-center">
        //                 Learn how to create and manage database tables using DDL commands
        //               </p>

        //               <div className="max-w-6xl mx-auto">
        //                 {/* CREATE TABLE */}
        //                 <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl mb-8">
        //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> CREATE TABLE Statement</h2>
        //                   <p className="text-lg text-gray-700 mb-6">
        //                     The CREATE TABLE statement is used to create new tables in the database.
        //                     You must specify column names, data types, and constraints.
        //                   </p>

        //                   <div className="bg-gray-800 p-6 rounded-xl mb-6">
        //                     <h3 className="text-xl font-bold text-yellow-400 mb-4">Basic Syntax</h3>
        //                     <pre className="text-slate-900 font-mono text-sm">
        //                       {`CREATE TABLE table_name (
        //     column1 datatype constraints,
        //     column2 datatype constraints,
        //     column3 datatype constraints,
        //     ...
        // );`}
        //                     </pre>
        //                   </div>

        //                   <div className="grid md:grid-cols-2 gap-6 mb-6">
        //                     <div className="bg-gray-800 p-6 rounded-xl">
        //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Example: Students Table</h3>
        //                       <pre className="text-slate-900 font-mono text-sm">
        //                         {`CREATE TABLE Students (
        //     StudentID INT PRIMARY KEY,
        //     FirstName VARCHAR(50) NOT NULL,
        //     LastName VARCHAR(50) NOT NULL,
        //     Email VARCHAR(100) UNIQUE,
        //     Age INT CHECK (Age >= 16),
        //     EnrollmentDate DATE DEFAULT CURRENT_DATE
        // );`}
        //                       </pre>
        //                     </div>
        //                     <div className="bg-gray-800 p-6 rounded-xl">
        //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Example: Courses Table</h3>
        //                       <pre className="text-slate-900 font-mono text-sm">
        //                         {`CREATE TABLE Courses (
        //     CourseID INT PRIMARY KEY,
        //     CourseName VARCHAR(100) NOT NULL,
        //     Credits INT CHECK (Credits BETWEEN 1 AND 6),
        //     Instructor VARCHAR(100),
        //     Department VARCHAR(50)
        // );`}
        //                       </pre>
        //                     </div>
        //                   </div>
        //                 </div>

        {/* ALTER TABLE */ }
      //                 <div className="bg-gray-800 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> ALTER TABLE Statement</h2>
      //                   <p className="text-lg text-gray-700 mb-6">
      //                     The ALTER TABLE statement is used to modify the structure of existing tables.
      //                     You can add, modify, or drop columns and constraints.
      //                   </p>

      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Adding Columns</h3>
      //                       <pre className="text-slate-900 font-mono text-sm mb-4">
      //                         {`-- Add a single column
      // ALTER TABLE Students 
      // ADD Phone VARCHAR(15);

      // -- Add multiple columns
      // ALTER TABLE Students 
      // ADD Phone VARCHAR(15),
      // ADD Address VARCHAR(200);`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Modifying Columns</h3>
      //                       <pre className="text-slate-900 font-mono text-sm mb-4">
      //                         {`-- Change column data type
      // ALTER TABLE Students 
      // ALTER COLUMN Age INT;

      // -- Change column size
      // ALTER TABLE Students 
      // ALTER COLUMN FirstName VARCHAR(100);

      // -- Add constraint to existing column
      // ALTER TABLE Students 
      // ADD CONSTRAINT CHK_Age CHECK (Age >= 16);`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Dropping Columns</h3>
      //                       <pre className="text-slate-900 font-mono text-sm mb-4">
      //                         {`-- Drop a single column
      // ALTER TABLE Students 
      // DROP COLUMN Phone;

      // -- Drop multiple columns
      // ALTER TABLE Students 
      // DROP COLUMN Phone,
      // DROP COLUMN Address;`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Managing Constraints</h3>
      //                       <pre className="text-slate-900 font-mono text-sm mb-4">
      //                         {`-- Add foreign key constraint
      // ALTER TABLE Students 
      // ADD CONSTRAINT FK_Department 
      // FOREIGN KEY (DeptID) REFERENCES Departments(DeptID);

      // -- Drop constraint
      // ALTER TABLE Students 
      // DROP CONSTRAINT CHK_Age;

      // -- Rename table
      // ALTER TABLE Students 
      // RENAME TO StudentRecords;`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* DROP TABLE */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> DROP TABLE Statement</h2>
      //                   <p className="text-lg text-gray-700 mb-6">
      //                     The DROP TABLE statement is used to completely remove a table and all its data from the database.
      //                     This action cannot be undone!
      //                   </p>

      //                   <div className="bg-gray-900 p-6 rounded-xl mb-6">
      //                     <h3 className="text-xl font-bold text-slate-900 mb-4">Syntax</h3>
      //                     <pre className="text-slate-900 font-mono text-sm">
      //                       {`-- Drop a single table
      // DROP TABLE table_name;

      // -- Drop multiple tables
      // DROP TABLE table1, table2, table3;

      // -- Drop with CASCADE (if foreign key references exist)
      // DROP TABLE table_name CASCADE;`}
      //                     </pre>
      //                   </div>

      //                   <div className="bg-red-900/20 border border-red-500 p-6 rounded-xl">
      //                     <h3 className="text-xl font-bold text-red-400 mb-4"> Warning</h3>
      //                     <ul className="text-gray-700 space-y-2">
      //                       <li>• DROP TABLE permanently deletes the table and all its data</li>
      //                       <li>• This action cannot be undone</li>
      //                       <li>• Make sure to backup important data before dropping tables</li>
      //                       <li>• Check for foreign key dependencies before dropping</li>
      //                     </ul>
      //                   </div>
      //                 </div>

      //                 {/* TRUNCATE TABLE */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> TRUNCATE TABLE Statement</h2>
      //                   <p className="text-lg text-gray-700 mb-6">
      //                     The TRUNCATE TABLE statement removes all rows from a table but keeps the table structure intact.
      //                     It's faster than DELETE for removing all rows.
      //                   </p>

      //                   <div className="bg-gray-900 p-6 rounded-xl mb-6">
      //                     <h3 className="text-xl font-bold text-slate-900 mb-4">Syntax</h3>
      //                     <pre className="text-slate-900 font-mono text-sm">
      //                       {`-- Remove all rows from a table
      // TRUNCATE TABLE table_name;

      // -- Example
      // TRUNCATE TABLE Students;`}
      //                     </pre>
      //                   </div>

      //                   <div className="grid md:grid-cols-2 gap-6">
      //                     <div className="bg-blue-900/20 border border-blue-500 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-blue-400 mb-4">TRUNCATE vs DELETE</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• <strong>TRUNCATE:</strong> Faster, resets auto-increment</li>
      //                         <li>• <strong>DELETE:</strong> Slower, can use WHERE clause</li>
      //                         <li>• <strong>TRUNCATE:</strong> Cannot be rolled back</li>
      //                         <li>• <strong>DELETE:</strong> Can be rolled back</li>
      //                       </ul>
      //                     </div>

      //                     <div className="bg-green-900/20 border border-green-500 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-green-400 mb-4">When to Use TRUNCATE</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Removing all rows from a table</li>
      //                         <li>• Resetting table for fresh data</li>
      //                         <li>• Performance is critical</li>
      //                         <li>• No need to rollback</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Best Practices */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> Best Practices</h2>

      //                   <div className="grid md:grid-cols-2 gap-6">
      //                     <div className="bg-green-900/20 border border-green-500 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-green-400 mb-4"> Table Design</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Use meaningful table and column names</li>
      //                         <li>• Always define PRIMARY KEY</li>
      //                         <li>• Use appropriate data types</li>
      //                         <li>• Add constraints for data integrity</li>
      //                         <li>• Plan for future modifications</li>
      //                       </ul>
      //                     </div>

      //                     <div className="bg-blue-900/20 border border-blue-500 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-blue-400 mb-4"> Maintenance</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Always backup before major changes</li>
      //                         <li>• Test ALTER statements on copies first</li>
      //                         <li>• Use transactions for multiple changes</li>
      //                         <li>• Document schema changes</li>
      //                         <li>• Consider impact on applications</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </main>
      //         );

      //       case 'data-manipulation':
      //         return (
      //           <main>
      //             <div className="animate-fade-in-up">
      //               <h1 id="data-manipulation" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      //                 Data Manipulation
      //               </h1>
      //               <p className="text-lg text-gray-600 mb-8 text-center">
      //                 Learn how to insert, update, and delete data using DML commands
      //               </p>

      //               <div className="max-w-6xl mx-auto">
      //                 {/* INSERT Statement */}
      //                 <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> INSERT Statement</h2>
      //                   <p className="text-lg text-gray-700 mb-6">
      //                     The INSERT statement is used to add new rows of data to a table.
      //                     You can insert single rows or multiple rows at once.
      //                   </p>

      //                   <div className="grid md:grid-cols-2 gap-6 mb-6">
      //                     <div className="bg-gray-800 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Insert Single Row</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Insert with all columns
      // INSERT INTO Students 
      // VALUES (1, 'John', 'Doe', 'john@email.com', 20, '2024-01-15');

      // -- Insert with specific columns
      // INSERT INTO Students (StudentID, FirstName, LastName, Age)
      // VALUES (2, 'Jane', 'Smith', 19);`}
      //                       </pre>
      //                     </div>
      //                     <div className="bg-gray-800 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Insert Multiple Rows</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`INSERT INTO Students (StudentID, FirstName, LastName, Age)
      // VALUES 
      //     (3, 'Alice', 'Johnson', 21),
      //     (4, 'Bob', 'Brown', 22),
      //     (5, 'Carol', 'Davis', 20);`}
      //                       </pre>
      //                     </div>
      //                   </div>

      //                   <div className="bg-gray-900 p-6 rounded-xl">
      //                     <h3 className="text-xl font-bold text-slate-900 mb-4">Insert from Another Table</h3>
      //                     <pre className="text-slate-900 font-mono text-sm">
      //                       {`-- Copy data from one table to another
      // INSERT INTO GraduatedStudents (StudentID, FirstName, LastName)
      // SELECT StudentID, FirstName, LastName
      // FROM Students
      // WHERE GraduationDate IS NOT NULL;

      // -- Insert with calculated values
      // INSERT INTO StudentStats (StudentID, TotalCourses, AverageGrade)
      // SELECT 
      //     StudentID,
      //     COUNT(CourseID),
      //     AVG(Grade)
      // FROM Enrollments
      // GROUP BY StudentID;`}
      //                     </pre>
      //                   </div>
      //                 </div>

      //                 {/* UPDATE Statement */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> UPDATE Statement</h2>
      //                   <p className="text-lg text-gray-700 mb-6">
      //                     The UPDATE statement is used to modify existing data in a table.
      //                     Always use WHERE clause to avoid updating all rows accidentally.
      //                   </p>

      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Update Single Column</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Update specific student's email
      // UPDATE Students 
      // SET Email = 'newemail@example.com'
      // WHERE StudentID = 1;

      // -- Update with condition
      // UPDATE Students 
      // SET Age = Age + 1
      // WHERE EnrollmentDate < '2023-01-01';`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Update Multiple Columns</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Update multiple columns for specific student
      // UPDATE Students 
      // SET FirstName = 'Johnny',
      //     LastName = 'Smith',
      //     Email = 'johnny.smith@email.com'
      // WHERE StudentID = 1;

      // -- Update with calculated values
      // UPDATE Orders 
      // SET TotalAmount = Quantity * UnitPrice,
      //     UpdatedDate = CURRENT_TIMESTAMP
      // WHERE OrderStatus = 'Pending';`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Update with Subquery</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Update based on data from another table
      // UPDATE Students 
      // SET Department = 'Computer Science'
      // WHERE StudentID IN (
      //     SELECT StudentID 
      //     FROM Enrollments 
      //     WHERE CourseID = 'CS101'
      // );

      // -- Update with aggregate function
      // UPDATE Departments 
      // SET StudentCount = (
      //     SELECT COUNT(*) 
      //     FROM Students 
      //     WHERE Students.DeptID = Departments.DeptID
      // );`}
      //                       </pre>
      //                     </div>
      //                   </div>

      //                   <div className="bg-red-900/20 border border-red-500 p-6 rounded-xl mt-6">
      //                     <h3 className="text-xl font-bold text-red-400 mb-4"> Warning</h3>
      //                     <ul className="text-gray-700 space-y-2">
      //                       <li>• Always use WHERE clause to specify which rows to update</li>
      //                       <li>• Without WHERE clause, ALL rows will be updated</li>
      //                       <li>• Test UPDATE statements on copies of data first</li>
      //                       <li>• Use transactions for multiple related updates</li>
      //                     </ul>
      //                   </div>
      //                 </div>

      //                 {/* DELETE Statement */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> DELETE Statement</h2>
      //                   <p className="text-lg text-gray-700 mb-6">
      //                     The DELETE statement is used to remove rows from a table.
      //                     Always use WHERE clause to avoid deleting all data accidentally.
      //                   </p>

      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Delete Specific Rows</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Delete specific student
      // DELETE FROM Students 
      // WHERE StudentID = 1;

      // -- Delete with condition
      // DELETE FROM Students 
      // WHERE Age < 18;

      // -- Delete with multiple conditions
      // DELETE FROM Orders 
      // WHERE OrderDate < '2023-01-01' 
      //   AND OrderStatus = 'Cancelled';`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Delete with Subquery</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Delete students who haven't enrolled in any courses
      // DELETE FROM Students 
      // WHERE StudentID NOT IN (
      //     SELECT DISTINCT StudentID 
      //     FROM Enrollments
      // );

      // -- Delete orders from inactive customers
      // DELETE FROM Orders 
      // WHERE CustomerID IN (
      //     SELECT CustomerID 
      //     FROM Customers 
      //     WHERE LastLoginDate < DATE_SUB(CURRENT_DATE, INTERVAL 1 YEAR)
      // );`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Delete All Rows</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Delete all rows from table (DANGEROUS!)
      // DELETE FROM Students;

      // -- Safer alternative: TRUNCATE TABLE
      // TRUNCATE TABLE Students;`}
      //                       </pre>
      //                     </div>
      //                   </div>

      //                   <div className="bg-red-900/20 border border-red-500 p-6 rounded-xl mt-6">
      //                     <h3 className="text-xl font-bold text-red-400 mb-4"> Critical Warning</h3>
      //                     <ul className="text-gray-700 space-y-2">
      //                       <li>• DELETE operations cannot be undone easily</li>
      //                       <li>• Always backup data before major deletions</li>
      //                       <li>• Use WHERE clause to specify which rows to delete</li>
      //                       <li>• Consider foreign key constraints before deleting</li>
      //                       <li>• Use transactions for multiple related deletions</li>
      //                     </ul>
      //                   </div>
      //                 </div>

      //                 {/* Best Practices */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> Best Practices</h2>

      //                   <div className="grid md:grid-cols-2 gap-6">
      //                     <div className="bg-green-900/20 border border-green-500 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-green-400 mb-4"> Safe Operations</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Always use WHERE clauses with UPDATE/DELETE</li>
      //                         <li>• Test queries on sample data first</li>
      //                         <li>• Use transactions for related operations</li>
      //                         <li>• Backup data before major changes</li>
      //                         <li>• Validate data before inserting</li>
      //                       </ul>
      //                     </div>

      //                     <div className="bg-blue-900/20 border border-blue-500 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-blue-400 mb-4"> Performance Tips</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Use bulk INSERT for multiple rows</li>
      //                         <li>• Index columns used in WHERE clauses</li>
      //                         <li>• Use LIMIT with UPDATE/DELETE for large datasets</li>
      //                         <li>• Consider using TRUNCATE instead of DELETE ALL</li>
      //                         <li>• Monitor query performance</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </main>
      //         );

      //       case 'filtering-sorting':
      //         return (
      //           <main>
      //             <div className="animate-fade-in-up">
      //               <h1 id="filtering-sorting" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      //                 Filtering & Sorting
      //               </h1>
      //               <p className="text-lg text-gray-600 mb-8 text-center">
      //                 Master WHERE clause filtering and ORDER BY sorting in SQL queries
      //               </p>

      //               <div className="max-w-6xl mx-auto">
      //                 {/* WHERE Clause */}
      //                 <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> WHERE Clause</h2>
      //                   <p className="text-lg text-gray-700 mb-6">
      //                     The WHERE clause is used to filter rows based on specified conditions.
      //                     It allows you to retrieve only the data that meets your criteria.
      //                   </p>

      //                   <div className="bg-gray-800 p-6 rounded-xl mb-6">
      //                     <h3 className="text-xl font-bold text-yellow-400 mb-4">Basic Syntax</h3>
      //                     <pre className="text-slate-900 font-mono text-sm">
      //                       {`SELECT column1, column2, ...
      // FROM table_name
      // WHERE condition;`}
      //                     </pre>
      //                   </div>

      //                   <div className="grid md:grid-cols-2 gap-6 mb-6">
      //                     <div className="bg-gray-800 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Comparison Operators</h3>
      //                       <div className="space-y-3">
      //                         <div className="flex justify-between">
      //                           <code className="text-slate-900">=</code>
      //                           <span className="text-gray-700">Equal to</span>
      //                         </div>
      //                         <div className="flex justify-between">
      //                           <code className="text-slate-900">!= or &lt;&gt;</code>
      //                           <span className="text-gray-700">Not equal to</span>
      //                         </div>
      //                         <div className="flex justify-between">
      //                           <code className="text-slate-900">&gt;</code>
      //                           <span className="text-gray-700">Greater than</span>
      //                         </div>
      //                         <div className="flex justify-between">
      //                           <code className="text-slate-900">&lt;</code>
      //                           <span className="text-gray-700">Less than</span>
      //                         </div>
      //                         <div className="flex justify-between">
      //                           <code className="text-slate-900">&gt;=</code>
      //                           <span className="text-gray-700">Greater or equal</span>
      //                         </div>
      //                         <div className="flex justify-between">
      //                           <code className="text-slate-900">&lt;=</code>
      //                           <span className="text-gray-700">Less or equal</span>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="bg-gray-800 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Logical Operators</h3>
      //                       <div className="space-y-3">
      //                         <div className="flex justify-between">
      //                           <code className="text-slate-900">AND</code>
      //                           <span className="text-gray-700">Both conditions true</span>
      //                         </div>
      //                         <div className="flex justify-between">
      //                           <code className="text-slate-900">OR</code>
      //                           <span className="text-gray-700">Either condition true</span>
      //                         </div>
      //                         <div className="flex justify-between">
      //                           <code className="text-slate-900">NOT</code>
      //                           <span className="text-gray-700">Condition is false</span>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>

      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Basic Filtering Examples</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Find students older than 20
      // SELECT * FROM Students WHERE Age > 20;

      // -- Find students in specific age range
      // SELECT * FROM Students WHERE Age BETWEEN 18 AND 25;

      // -- Find students with specific names
      // SELECT * FROM Students WHERE FirstName = 'John';

      // -- Find students with multiple conditions
      // SELECT * FROM Students 
      // WHERE Age > 18 AND Department = 'Computer Science';`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Advanced Filtering</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- IN operator - multiple values
      // SELECT * FROM Students 
      // WHERE Department IN ('Computer Science', 'Mathematics', 'Physics');

      // -- LIKE operator - pattern matching
      // SELECT * FROM Students 
      // WHERE FirstName LIKE 'J%';  -- Names starting with 'J'

      // -- IS NULL / IS NOT NULL
      // SELECT * FROM Students 
      // WHERE Email IS NOT NULL;

      // -- Complex conditions
      // SELECT * FROM Students 
      // WHERE (Age > 20 AND Department = 'CS') 
      //    OR (Age <= 20 AND Department = 'Math');`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* ORDER BY Clause */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> ORDER BY Clause</h2>
      //                   <p className="text-lg text-gray-700 mb-6">
      //                     The ORDER BY clause is used to sort the result set in ascending or descending order.
      //                     You can sort by one or more columns.
      //                   </p>

      //                   <div className="bg-gray-900 p-6 rounded-xl mb-6">
      //                     <h3 className="text-xl font-bold text-slate-900 mb-4">Basic Syntax</h3>
      //                     <pre className="text-slate-900 font-mono text-sm">
      //                       {`SELECT column1, column2, ...
      // FROM table_name
      // WHERE condition
      // ORDER BY column1 ASC|DESC, column2 ASC|DESC;`}
      //                     </pre>
      //                   </div>

      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Single Column Sorting</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Sort by age ascending (default)
      // SELECT * FROM Students ORDER BY Age;

      // -- Sort by age descending
      // SELECT * FROM Students ORDER BY Age DESC;

      // -- Sort by name alphabetically
      // SELECT * FROM Students ORDER BY FirstName ASC;`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Multiple Column Sorting</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Sort by department first, then by age
      // SELECT * FROM Students 
      // ORDER BY Department ASC, Age DESC;

      // -- Sort by multiple criteria
      // SELECT FirstName, LastName, Age, Department
      // FROM Students 
      // ORDER BY Department, LastName, FirstName;`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Sorting with Functions</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Sort by calculated values
      // SELECT FirstName, LastName, Age, 
      //        (Age * 12) AS AgeInMonths
      // FROM Students 
      // ORDER BY AgeInMonths DESC;

      // -- Sort by string length
      // SELECT FirstName, LastName
      // FROM Students 
      // ORDER BY LENGTH(FirstName), LENGTH(LastName);`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* LIMIT / TOP */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> LIMIT / TOP Clause</h2>
      //                   <p className="text-lg text-gray-700 mb-6">
      //                     LIMIT (MySQL/PostgreSQL) or TOP (SQL Server) is used to restrict the number of rows returned.
      //                     Very useful for pagination and getting top results.
      //                   </p>

      //                   <div className="grid md:grid-cols-2 gap-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">MySQL/PostgreSQL - LIMIT</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Get top 5 students by age
      // SELECT * FROM Students 
      // ORDER BY Age DESC 
      // LIMIT 5;

      // -- Get students 6-10 (pagination)
      // SELECT * FROM Students 
      // ORDER BY Age DESC 
      // LIMIT 5 OFFSET 5;

      // -- Alternative syntax
      // SELECT * FROM Students 
      // ORDER BY Age DESC 
      // LIMIT 5, 5;  -- Skip 5, take 5`}
      //                       </pre>
      //                     </div>
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">SQL Server - TOP</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Get top 5 students by age
      // SELECT TOP 5 * FROM Students 
      // ORDER BY Age DESC;

      // -- Get top 10% of students
      // SELECT TOP 10 PERCENT * FROM Students 
      // ORDER BY Age DESC;

      // -- With ties (include tied values)
      // SELECT TOP 5 WITH TIES * FROM Students 
      // ORDER BY Age DESC;`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Best Practices */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> Best Practices</h2>

      //                   <div className="grid md:grid-cols-2 gap-6">
      //                     <div className="bg-green-900/20 border border-green-500 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-green-400 mb-4"> WHERE Clause Tips</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Use indexed columns in WHERE conditions</li>
      //                         <li>• Avoid functions on columns in WHERE</li>
      //                         <li>• Use appropriate data types in comparisons</li>
      //                         <li>• Combine conditions with AND/OR logically</li>
      //                         <li>• Use IN instead of multiple OR conditions</li>
      //                       </ul>
      //                     </div>

      //                     <div className="bg-blue-900/20 border border-blue-500 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-blue-400 mb-4"> ORDER BY Tips</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Sort by indexed columns when possible</li>
      //                         <li>• Use DESC for most recent/highest values</li>
      //                         <li>• Combine with LIMIT for pagination</li>
      //                         <li>• Consider NULL values in sorting</li>
      //                         <li>• Use multiple columns for stable sorting</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </main>
      //         );

      //       case 'aggregate-functions':
      //         return (
      //           <main>
      //             <div className="animate-fade-in-up">
      //               <h1 id="aggregate-functions" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      //                 Aggregate Functions
      //               </h1>
      //               <p className="text-lg text-gray-600 mb-8 text-center">
      //                 Master SQL aggregate functions, GROUP BY, and HAVING clause for data analysis
      //               </p>

      //               <div className="max-w-6xl mx-auto">
      //                 {/* Aggregate Functions */}
      //                 <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> Aggregate Functions</h2>
      //                   <p className="text-lg text-gray-700 mb-6">
      //                     Aggregate functions perform calculations on multiple rows and return a single result.
      //                     They are essential for data analysis and reporting.
      //                   </p>

      //                   <div className="grid md:grid-cols-2 gap-6 mb-6">
      //                     <div className="bg-gray-800 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">COUNT() Function</h3>
      //                       <p className="text-gray-700 mb-4">Returns the number of rows in a table or group.</p>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Count all rows
      // SELECT COUNT(*) FROM Students;

      // -- Count non-NULL values
      // SELECT COUNT(Email) FROM Students;

      // -- Count distinct values
      // SELECT COUNT(DISTINCT Department) FROM Students;`}
      //                       </pre>
      //                     </div>
      //                     <div className="bg-gray-800 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">SUM() Function</h3>
      //                       <p className="text-gray-700 mb-4">Returns the total of a numeric column.</p>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Sum all salaries
      // SELECT SUM(Salary) FROM Employees;

      // -- Sum with condition
      // SELECT SUM(Salary) FROM Employees 
      // WHERE Department = 'IT';

      // -- Sum distinct values
      // SELECT SUM(DISTINCT Salary) FROM Employees;`}
      //                       </pre>
      //                     </div>
      //                   </div>

      //                   <div className="grid md:grid-cols-2 gap-6 mb-6">
      //                     <div className="bg-gray-800 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">AVG() Function</h3>
      //                       <p className="text-gray-700 mb-4">Returns the average value of a numeric column.</p>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Average age of students
      // SELECT AVG(Age) FROM Students;

      // -- Average with rounding
      // SELECT ROUND(AVG(Salary), 2) FROM Employees;

      // -- Average excluding NULLs
      // SELECT AVG(Salary) FROM Employees 
      // WHERE Salary IS NOT NULL;`}
      //                       </pre>
      //                     </div>
      //                     <div className="bg-gray-800 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">MIN() & MAX() Functions</h3>
      //                       <p className="text-gray-700 mb-4">Return the smallest and largest values.</p>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Find youngest and oldest
      // SELECT MIN(Age), MAX(Age) FROM Students;

      // -- Highest and lowest salaries
      // SELECT MIN(Salary), MAX(Salary) 
      // FROM Employees;

      // -- Earliest and latest dates
      // SELECT MIN(EnrollmentDate), 
      //        MAX(EnrollmentDate) 
      // FROM Students;`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* GROUP BY Clause */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> GROUP BY Clause</h2>
      //                   <p className="text-lg text-gray-700 mb-6">
      //                     The GROUP BY clause groups rows that have the same values in specified columns.
      //                     It allows you to apply aggregate functions to each group separately.
      //                   </p>

      //                   <div className="bg-gray-900 p-6 rounded-xl mb-6">
      //                     <h3 className="text-xl font-bold text-slate-900 mb-4">Basic Syntax</h3>
      //                     <pre className="text-slate-900 font-mono text-sm">
      //                       {`SELECT column1, AGGREGATE_FUNCTION(column2)
      // FROM table_name
      // WHERE condition
      // GROUP BY column1
      // ORDER BY column1;`}
      //                     </pre>
      //                   </div>

      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Group by Single Column</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Count students by department
      // SELECT Department, COUNT(*) AS StudentCount
      // FROM Students
      // GROUP BY Department;

      // -- Average salary by department
      // SELECT Department, AVG(Salary) AS AvgSalary
      // FROM Employees
      // GROUP BY Department;`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Group by Multiple Columns</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Count by department and year
      // SELECT Department, 
      //        YEAR(EnrollmentDate) AS Year,
      //        COUNT(*) AS StudentCount
      // FROM Students
      // GROUP BY Department, YEAR(EnrollmentDate);

      // -- Sales by product and region
      // SELECT ProductID, Region, 
      //        SUM(Quantity) AS TotalSold,
      //        AVG(Price) AS AvgPrice
      // FROM Sales
      // GROUP BY ProductID, Region;`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Multiple Aggregate Functions</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Comprehensive department stats
      // SELECT Department,
      //        COUNT(*) AS EmployeeCount,
      //        AVG(Salary) AS AvgSalary,
      //        MIN(Salary) AS MinSalary,
      //        MAX(Salary) AS MaxSalary,
      //        SUM(Salary) AS TotalSalary
      // FROM Employees
      // GROUP BY Department;`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* HAVING Clause */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> HAVING Clause</h2>
      //                   <p className="text-lg text-gray-700 mb-6">
      //                     The HAVING clause is used to filter groups after aggregation.
      //                     It's like WHERE clause but for grouped results.
      //                   </p>

      //                   <div className="bg-gray-900 p-6 rounded-xl mb-6">
      //                     <h3 className="text-xl font-bold text-slate-900 mb-4">Key Differences</h3>
      //                     <div className="grid md:grid-cols-2 gap-6">
      //                       <div className="bg-blue-900/20 border border-blue-500 p-4 rounded-lg">
      //                         <h4 className="text-lg font-bold text-blue-400 mb-2">WHERE Clause</h4>
      //                         <ul className="text-gray-700 space-y-1 text-sm">
      //                           <li>• Filters individual rows</li>
      //                           <li>• Applied before grouping</li>
      //                           <li>• Cannot use aggregate functions</li>
      //                           <li>• Example: WHERE Age &gt; 25</li>
      //                         </ul>
      //                       </div>
      //                       <div className="bg-green-900/20 border border-green-500 p-4 rounded-lg">
      //                         <h4 className="text-lg font-bold text-green-400 mb-2">HAVING Clause</h4>
      //                         <ul className="text-gray-700 space-y-1 text-sm">
      //                           <li>• Filters grouped results</li>
      //                           <li>• Applied after grouping</li>
      //                           <li>• Can use aggregate functions</li>
      //                           <li>• Example: HAVING COUNT(*) &gt; 5</li>
      //                         </ul>
      //                       </div>
      //                     </div>
      //                   </div>

      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Basic HAVING Examples</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Departments with more than 10 employees
      // SELECT Department, COUNT(*) AS EmployeeCount
      // FROM Employees
      // GROUP BY Department
      // HAVING COUNT(*) > 10;

      // -- Departments with average salary > 50000
      // SELECT Department, AVG(Salary) AS AvgSalary
      // FROM Employees
      // GROUP BY Department
      // HAVING AVG(Salary) > 50000;`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Complex HAVING Conditions</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Multiple conditions with HAVING
      // SELECT Department, 
      //        COUNT(*) AS EmployeeCount,
      //        AVG(Salary) AS AvgSalary
      // FROM Employees
      // GROUP BY Department
      // HAVING COUNT(*) > 5 AND AVG(Salary) > 45000;

      // -- Using different aggregate functions
      // SELECT ProductID,
      //        SUM(Quantity) AS TotalSold,
      //        COUNT(DISTINCT CustomerID) AS UniqueCustomers
      // FROM Orders
      // GROUP BY ProductID
      // HAVING SUM(Quantity) > 100 
      //    AND COUNT(DISTINCT CustomerID) > 10;`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Complete Examples */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl mb-8">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> Complete Examples</h2>

      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Business Analysis Query</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Top performing departments
      // SELECT d.DepartmentName,
      //        COUNT(e.EmployeeID) AS EmployeeCount,
      //        AVG(e.Salary) AS AvgSalary,
      //        SUM(s.SalesAmount) AS TotalSales
      // FROM Departments d
      // JOIN Employees e ON d.DeptID = e.DeptID
      // LEFT JOIN Sales s ON e.EmployeeID = s.EmployeeID
      // WHERE e.HireDate >= '2020-01-01'
      // GROUP BY d.DepartmentName
      // HAVING COUNT(e.EmployeeID) >= 5 
      //    AND AVG(e.Salary) > 40000
      // ORDER BY TotalSales DESC;`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-slate-900 mb-4">Student Performance Analysis</h3>
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Course performance summary
      // SELECT c.CourseName,
      //        COUNT(DISTINCT e.StudentID) AS StudentCount,
      //        AVG(e.Grade) AS AvgGrade,
      //        MIN(e.Grade) AS MinGrade,
      //        MAX(e.Grade) AS MaxGrade,
      //        COUNT(CASE WHEN e.Grade >= 80 THEN 1 END) AS PassCount
      // FROM Courses c
      // JOIN Enrollments e ON c.CourseID = e.CourseID
      // GROUP BY c.CourseName
      // HAVING COUNT(DISTINCT e.StudentID) >= 10
      // ORDER BY AvgGrade DESC;`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Best Practices */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> Best Practices</h2>

      //                   <div className="grid md:grid-cols-2 gap-6">
      //                     <div className="bg-green-900/20 border border-green-500 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-green-400 mb-4"> Performance Tips</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Index columns used in GROUP BY</li>
      //                         <li>• Use WHERE to filter before grouping</li>
      //                         <li>• Use HAVING to filter after grouping</li>
      //                         <li>• Consider data types for aggregations</li>
      //                         <li>• Use appropriate aggregate functions</li>
      //                       </ul>
      //                     </div>

      //                     <div className="bg-blue-900/20 border border-blue-500 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-blue-400 mb-4"> Query Design</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Always include non-aggregated columns in GROUP BY</li>
      //                         <li>• Use meaningful column aliases</li>
      //                         <li>• Test with small datasets first</li>
      //                         <li>• Consider NULL handling in aggregates</li>
      //                         <li>• Use ORDER BY for consistent results</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </main>
      //         );

      //       case 'subqueries':
      //         return (
      //           <main>
      //             <div className="animate-fade-in-up">
      //               <h1 id="subqueries" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      //                 Subqueries in SQL
      //               </h1>
      //               <p className="text-lg text-gray-600 mb-8 text-center">
      //                 Understanding nested queries and their powerful applications in data retrieval
      //               </p>

      //               <div className="max-w-6xl mx-auto space-y-8">
      //                 {/* Introduction */}
      //                 <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/30">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> What is a Subquery?</h2>
      //                   <div className="space-y-4 text-gray-700">
      //                     <p className="text-lg leading-relaxed">
      //                       A <strong className="text-slate-900">subquery</strong> (also called an <strong className="text-slate-900">inner query</strong> or <strong className="text-slate-900">nested query</strong>) is a query that is embedded within another SQL query. The subquery is executed first, and its result is used by the outer query to complete its operation.
      //                     </p>
      //                     <p className="text-lg leading-relaxed">
      //                       Think of it as asking a question within a question. For example, "Show me all employees who earn more than the average salary" requires two steps: first calculate the average salary, then find employees earning more than that average.
      //                     </p>
      //                     <div className="bg-gray-800 p-6 rounded-xl mt-4">
      //                       <h4 className="text-lg font-bold text-yellow-400 mb-3">Key Characteristics:</h4>
      //                       <ul className="space-y-2">
      //                         <li>• Subqueries are enclosed in parentheses ()</li>
      //                         <li>• The inner query executes first, followed by the outer query</li>
      //                         <li>• Can be used in SELECT, FROM, WHERE, and HAVING clauses</li>
      //                         <li>• Can return single values, multiple values, or entire tables</li>
      //                         <li>• Helps break down complex problems into simpler steps</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Subquery in WHERE */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Subquery in WHERE Clause</h2>
      //                   <p className="text-gray-700 mb-6 text-lg">
      //                     The most common use of subqueries is in the WHERE clause to filter rows based on values computed from other queries. This allows you to make comparisons with aggregated data or data from related tables.
      //                   </p>

      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Single Value Subquery</h3>
      //                       <p className="text-gray-700 mb-4">
      //                         A single value subquery returns exactly one value (one row, one column). This is typically used with comparison operators like =, &gt;, &lt;, &gt;=, &lt;=, !=
      //                       </p>
      //                       <div className="bg-gray-950 p-4 rounded mb-3">
      //                         <p className="text-sm text-gray-600 mb-2">Example: Find all employees who earn more than the average salary</p>
      //                         <pre className="text-slate-900 font-mono text-sm">
      //                           {`SELECT name, salary
      // FROM employees
      // WHERE salary > (SELECT AVG(salary) FROM employees);`}
      //                         </pre>
      //                       </div>
      //                       <div className="bg-green-900/20 border border-green-500/30 p-4 rounded">
      //                         <p className="text-sm text-green-300 font-bold mb-2"> Output:</p>
      //                         <pre className="text-green-200 font-mono text-sm">
      //                           {`name          | salary
      // --------------+---------
      // Alice         | 85000
      // Bob           | 92000
      // Charlie       | 78000

      // (3 rows returned)

      // Explanation: The subquery first calculates AVG(salary) = 65000
      // Then outer query finds all employees with salary > 65000`}
      //                         </pre>
      //                       </div>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Multiple Value Subquery (IN)</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- Find employees in Sales department
      // SELECT name, salary
      // FROM employees
      // WHERE dept_id IN (SELECT dept_id FROM departments WHERE dept_name = 'Sales');

      // -- Find students enrolled in CS courses
      // SELECT name
      // FROM students
      // WHERE student_id IN (SELECT student_id FROM enrollments WHERE course_name = 'CS');`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">EXISTS Operator</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- Find customers who placed orders
      // SELECT customer_name
      // FROM customers c
      // WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);

      // -- Find products never ordered
      // SELECT product_name
      // FROM products p
      // WHERE NOT EXISTS (SELECT 1 FROM order_items oi WHERE oi.product_id = p.product_id);`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Subquery in SELECT */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Subquery in SELECT Clause</h2>
      //                   <div className="bg-gray-900 p-6 rounded-xl">
      //                     <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                       {`-- Calculate columns using subqueries
      // SELECT 
      //     name,
      //     salary,
      //     (SELECT AVG(salary) FROM employees) AS avg_salary,
      //     salary - (SELECT AVG(salary) FROM employees) AS difference
      // FROM employees;

      // -- Count related records
      // SELECT 
      //     c.customer_name,
      //     (SELECT COUNT(*) FROM orders o WHERE o.customer_id = c.customer_id) AS order_count
      // FROM customers c;`}
      //                     </pre>
      //                   </div>
      //                 </div>

      //                 {/* Subquery in FROM */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Subquery in FROM Clause (Derived Table)</h2>
      //                   <div className="bg-gray-900 p-6 rounded-xl">
      //                     <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                       {`-- Use subquery result as temporary table
      // SELECT dept, avg_sal
      // FROM (
      //     SELECT department AS dept, AVG(salary) AS avg_sal
      //     FROM employees
      //     GROUP BY department
      // ) AS dept_stats
      // WHERE avg_sal > 50000;

      // -- Complex calculations
      // SELECT *
      // FROM (
      //     SELECT 
      //         product_name,
      //         price,
      //         quantity,
      //         price * quantity AS total_value
      //     FROM products
      // ) AS product_values
      // WHERE total_value > 1000;`}
      //                     </pre>
      //                   </div>
      //                 </div>

      //                 {/* Correlated Subquery */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Correlated Subquery</h2>
      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <p className="text-gray-700 mb-4">References outer query in inner query - executes for each row</p>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- Find employees earning more than their department average
      // SELECT e1.name, e1.salary, e1.department
      // FROM employees e1
      // WHERE e1.salary > (
      //     SELECT AVG(e2.salary)
      //     FROM employees e2
      //     WHERE e2.department = e1.department
      // );

      // -- Find top 3 earners per department
      // SELECT name, salary, department
      // FROM employees e1
      // WHERE (
      //     SELECT COUNT(*)
      //     FROM employees e2
      //     WHERE e2.department = e1.department AND e2.salary > e1.salary
      // ) < 3;`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Nested Subqueries */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Nested Subqueries</h2>
      //                   <div className="bg-gray-900 p-6 rounded-xl">
      //                     <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                       {`-- Multiple levels of nesting
      // SELECT name
      // FROM employees
      // WHERE salary > (
      //     SELECT AVG(salary)
      //     FROM employees
      //     WHERE dept_id IN (
      //         SELECT dept_id
      //         FROM departments
      //         WHERE location = 'New York'
      //     )
      // );

      // -- Complex filtering
      // SELECT product_name
      // FROM products
      // WHERE category_id IN (
      //     SELECT category_id
      //     FROM categories
      //     WHERE category_name IN (
      //         SELECT DISTINCT category
      //         FROM top_selling
      //         WHERE year = 2024
      //     )
      // );`}
      //                     </pre>
      //                   </div>
      //                 </div>

      //                 {/* Common Use Cases */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Use Cases</h2>
      //                   <div className="grid md:grid-cols-2 gap-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-lg font-bold text-green-400 mb-3">When to Use</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Complex filtering logic</li>
      //                         <li>• Calculate aggregates inline</li>
      //                         <li>• Check for existence of data</li>
      //                         <li>• Compare with aggregated values</li>
      //                         <li>• Create derived tables</li>
      //                       </ul>
      //                     </div>
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-lg font-bold text-blue-400 mb-3">Performance Tips</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Use EXISTS instead of IN for large datasets</li>
      //                         <li>• Avoid correlated subqueries when possible</li>
      //                         <li>• Consider JOINs as alternative</li>
      //                         <li>• Use EXPLAIN to check query plan</li>
      //                         <li>• Index columns used in subqueries</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </main>
      //         );

      //       // case 'joins':
      //       //   return (
      //       //     <main>
      //       //       <div className="animate-fade-in-up">
      //       //         <h1 id="joins" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      //       //           Joins & Relationships
      //       //         </h1>

      //       //         <div className="max-w-6xl mx-auto space-y-8">
      //       //           <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/30">
      //       //             <h2 className="text-3xl font-bold text-slate-900 mb-6"> Master SQL JOINs</h2>
      //       //             <p className='text-lg text-gray-700 leading-relaxed mb-4'>
      //       //               In a relational database, data is distributed across multiple tables. JOINs are the mechanisms used to combine related data from these tables based on common columns (usually Primary and Foreign Keys).
      //       //             </p>
      //       //             <div className="bg-gray-700/50 p-6 rounded-xl">
      //       //               <h3 className="text-xl font-bold text-slate-900 mb-4">Common JOIN Types:</h3>
      //       //               <ul className="list-disc pl-6 space-y-4 text-gray-700">
      //       //                 <li><strong className="text-slate-900">INNER JOIN:</strong> Returns rows when there is a match in both tables. Perfect for finding records that have direct relationships.</li>
      //       //                 <li><strong className="text-slate-900">LEFT JOIN:</strong> Returns all rows from the left table, and matched rows from the right. If there is no match, the result-set will contain NULL for every column from the right table.</li>
      //       //                 <li><strong className="text-slate-900">RIGHT JOIN:</strong> Returns all rows from the right table, and matched rows from the left. Mirror opposite of LEFT JOIN.</li>
      //       //                 <li><strong className="text-slate-900">FULL OUTER JOIN:</strong> Returns all records when there is a match in either left or right table records.</li>
      //       //                 <li><strong className="text-slate-900">CROSS JOIN:</strong> Returns the Cartesian product of both tables (every possible pair).</li>
      //       //               </ul>
      //       //             </div>
      //       //           </div>

      //       //           <div className="bg-gray-800 p-8 rounded-2xl">
      //       //             <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">JOIN Visual Representation</h2>
      //       //             <div className="grid md:grid-cols-3 gap-6">
      //       //               <div className="bg-gray-700 p-4 rounded-lg text-center">
      //       //                 <h4 className="font-bold text-blue-300 mb-2">INNER JOIN</h4>
      //       //                 <p className="text-xs text-gray-400">The Intersection (A ∩ B)</p>
      //       //               </div>
      //       //               <div className="bg-gray-700 p-4 rounded-lg text-center">
      //       //                 <h4 className="font-bold text-blue-300 mb-2">LEFT JOIN</h4>
      //       //                 <p className="text-xs text-gray-400">All of Left + Match (A ∪ (A ∩ B))</p>
      //       //               </div>
      //       //               <div className="bg-gray-700 p-4 rounded-lg text-center">
      //       //                 <h4 className="font-bold text-blue-300 mb-2">FULL JOIN</h4>
      //       //                 <p className="text-xs text-gray-400">The Union (A ∪ B)</p>
      //       //               </div>
      //       //             </div>
      //       //           </div>
      //       //         </div>
      //       //       </div>
      //       //     </main>
      //       //   );

      //       case 'database-design':
      //         return (
      //           <main>
      //             <div className="animate-fade-in-up">
      //               <h1 id="database-design" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      //                 Database Design - The Foundation of Data
      //               </h1>
      //               <p className="text-lg text-gray-600 mb-8 text-center">
      //                 Master the art of designing efficient, scalable, and maintainable database schemas
      //               </p>

      //               <div className="max-w-6xl mx-auto space-y-8">
      //                 {/* Introduction */}
      //                 <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-purple-500/30">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> Advanced Database Design & Architecture</h2>

      //                   <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg mb-6">
      //                     <h4 className="text-xl font-bold text-blue-300 mb-4"> Database Design Theory & Principles</h4>
      //                     <p className="text-lg text-gray-700 leading-relaxed mb-4">
      //                       Database design is both an art and a science, combining theoretical foundations with practical implementation considerations.
      //                       It requires understanding of data modeling, normalization theory, performance optimization, and scalability patterns.
      //                     </p>
      //                     <div className="bg-gray-700/50 p-4 rounded-lg">
      //                       <h5 className="font-bold text-slate-900 mb-2">Design Principles:</h5>
      //                       <ul className="text-gray-700 text-sm space-y-2">
      //                         <li>• <strong className="text-slate-900">Normalization:</strong> Eliminating redundancy and dependency</li>
      //                         <li>• <strong className="text-slate-900">Denormalization:</strong> Strategic redundancy for performance</li>
      //                         <li>• <strong className="text-slate-900">Scalability:</strong> Designing for growth and load</li>
      //                         <li>• <strong className="text-slate-900">Flexibility:</strong> Accommodating changing requirements</li>
      //                         <li>• <strong className="text-slate-900">Maintainability:</strong> Clear structure and documentation</li>
      //                       </ul>
      //                     </div>
      //                   </div>

      //                   <div className="space-y-4 text-gray-700">
      //                     <p className="text-lg leading-relaxed">
      //                       <strong className="text-slate-900">Database design</strong> is the process of creating a detailed data model of a database.
      //                       It involves deciding how data will be organized, what tables will exist, how they&apos;ll be related, and what constraints will ensure data integrity.
      //                       Think of it as the architectural blueprint for your data - get it right, and everything else becomes easier.
      //                     </p>
      //                     <p className="text-lg leading-relaxed">
      //                       Good database design follows the principle of <strong className="text-slate-900">normalization</strong> - organizing data to minimize redundancy and dependency,
      //                       while ensuring data integrity and eliminating anomalies. It&apos;s about creating a structure that supports both current needs and future growth.
      //                     </p>
      //                     <div className="bg-gray-800 p-6 rounded-xl mt-4">
      //                       <h4 className="text-lg font-bold text-yellow-400 mb-3"> Why Database Design Matters</h4>
      //                       <ul className="space-y-2">
      //                         <li>• <strong className="text-slate-900">Performance:</strong> Well-designed databases query faster and scale better</li>
      //                         <li>• <strong className="text-slate-900">Data Integrity:</strong> Prevents invalid or inconsistent data</li>
      //                         <li>• <strong className="text-slate-900">Maintainability:</strong> Easy to understand, modify, and extend</li>
      //                         <li>• <strong className="text-slate-900">Cost Efficiency:</strong> Reduces storage needs and development time</li>
      //                         <li>• <strong className="text-slate-900">User Experience:</strong> Faster applications with reliable data</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Entity-Relationship Model */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Entity-Relationship Model</h2>
      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">One-to-One Relationship</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- Each person has one passport
      // CREATE TABLE persons (
      //     person_id INT PRIMARY KEY,
      //     name VARCHAR(100),
      //     email VARCHAR(100)
      // );

      // CREATE TABLE passports (
      //     passport_id INT PRIMARY KEY,
      //     person_id INT UNIQUE,
      //     passport_number VARCHAR(20),
      //     FOREIGN KEY (person_id) REFERENCES persons(person_id)
      // );`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">One-to-Many Relationship</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- One author writes many books
      // CREATE TABLE authors (
      //     author_id INT PRIMARY KEY,
      //     name VARCHAR(100)
      // );

      // CREATE TABLE books (
      //     book_id INT PRIMARY KEY,
      //     title VARCHAR(200),
      //     author_id INT,
      //     FOREIGN KEY (author_id) REFERENCES authors(author_id)
      // );`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Many-to-Many Relationship</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- Students enroll in many courses, courses have many students
      // CREATE TABLE students (
      //     student_id INT PRIMARY KEY,
      //     name VARCHAR(100)
      // );

      // CREATE TABLE courses (
      //     course_id INT PRIMARY KEY,
      //     course_name VARCHAR(100)
      // );

      // CREATE TABLE enrollments (
      //     enrollment_id INT PRIMARY KEY,
      //     student_id INT,
      //     course_id INT,
      //     enrollment_date DATE,
      //     FOREIGN KEY (student_id) REFERENCES students(student_id),
      //     FOREIGN KEY (course_id) REFERENCES courses(course_id)
      // );`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Normalization */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Normalization Forms</h2>
      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">1NF (First Normal Form)</h3>
      //                       <p className="text-gray-700 mb-3">Each column contains atomic values, no repeating groups</p>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- BAD (Not 1NF)
      // CREATE TABLE orders (
      //     order_id INT,
      //     products VARCHAR(500)  -- 'Apple,Banana,Orange'
      // );

      // -- GOOD (1NF)
      // CREATE TABLE orders (
      //     order_id INT,
      //     order_date DATE
      // );
      // CREATE TABLE order_items (
      //     order_id INT,
      //     product_name VARCHAR(100)
      // );`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">2NF (Second Normal Form)</h3>
      //                       <p className="text-gray-700 mb-3">1NF + No partial dependencies (all non-key columns depend on entire primary key)</p>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- BAD (Not 2NF)
      // CREATE TABLE order_items (
      //     order_id INT,
      //     product_id INT,
      //     product_name VARCHAR(100),  -- Depends only on product_id
      //     quantity INT,
      //     PRIMARY KEY (order_id, product_id)
      // );

      // -- GOOD (2NF)
      // CREATE TABLE products (
      //     product_id INT PRIMARY KEY,
      //     product_name VARCHAR(100)
      // );
      // CREATE TABLE order_items (
      //     order_id INT,
      //     product_id INT,
      //     quantity INT,
      //     PRIMARY KEY (order_id, product_id),
      //     FOREIGN KEY (product_id) REFERENCES products(product_id)
      // );`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">3NF (Third Normal Form)</h3>
      //                       <p className="text-gray-700 mb-3">2NF + No transitive dependencies</p>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- BAD (Not 3NF)
      // CREATE TABLE employees (
      //     emp_id INT PRIMARY KEY,
      //     name VARCHAR(100),
      //     dept_name VARCHAR(100),
      //     dept_location VARCHAR(100)  -- Depends on dept_name, not emp_id
      // );

      // -- GOOD (3NF)
      // CREATE TABLE departments (
      //     dept_id INT PRIMARY KEY,
      //     dept_name VARCHAR(100),
      //     dept_location VARCHAR(100)
      // );
      // CREATE TABLE employees (
      //     emp_id INT PRIMARY KEY,
      //     name VARCHAR(100),
      //     dept_id INT,
      //     FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
      // );`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Best Practices */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Design Best Practices</h2>
      //                   <div className="grid md:grid-cols-2 gap-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-lg font-bold text-green-400 mb-3"> Do</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Use meaningful table/column names</li>
      //                         <li>• Define primary keys for all tables</li>
      //                         <li>• Use foreign keys to enforce relationships</li>
      //                         <li>• Normalize to reduce redundancy</li>
      //                         <li>• Use appropriate data types</li>
      //                         <li>• Add NOT NULL where appropriate</li>
      //                         <li>• Use indexes on frequently queried columns</li>
      //                         <li>• Document your schema</li>
      //                       </ul>
      //                     </div>
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-lg font-bold text-red-400 mb-3"> Don&apos;t</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Store redundant data</li>
      //                         <li>• Use generic column names (id, name)</li>
      //                         <li>• Over-normalize (too many joins)</li>
      //                         <li>• Forget to add constraints</li>
      //                         <li>• Use VARCHAR for everything</li>
      //                         <li>• Ignore data integrity</li>
      //                         <li>• Skip planning phase</li>
      //                         <li>• Mix data types inconsistently</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Common Patterns */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Design Patterns</h2>
      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Audit Trail Pattern</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`CREATE TABLE users (
      //     user_id INT PRIMARY KEY,
      //     username VARCHAR(50),
      //     email VARCHAR(100),
      //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      //     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      //     created_by INT,
      //     updated_by INT
      // );`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Soft Delete Pattern</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`CREATE TABLE products (
      //     product_id INT PRIMARY KEY,
      //     product_name VARCHAR(100),
      //     price DECIMAL(10,2),
      //     is_deleted BOOLEAN DEFAULT FALSE,
      //     deleted_at TIMESTAMP NULL
      // );

      // -- Instead of DELETE, update is_deleted
      // UPDATE products SET is_deleted = TRUE, deleted_at = NOW() WHERE product_id = 1;

      // -- Query active records
      // SELECT * FROM products WHERE is_deleted = FALSE;`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Versioning Pattern</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`CREATE TABLE document_versions (
      //     version_id INT PRIMARY KEY,
      //     document_id INT,
      //     version_number INT,
      //     content TEXT,
      //     created_at TIMESTAMP,
      //     created_by INT,
      //     FOREIGN KEY (document_id) REFERENCES documents(document_id)
      // );`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </main>
      //         );

      //       case 'indexes-performance':
      //         return (
      //           <main>
      //             <div className="animate-fade-in-up">
      //               <h1 id="indexes-performance" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      //                 Indexes & Performance - Database Speed Optimization
      //               </h1>
      //               <p className="text-lg text-gray-600 mb-8 text-center">
      //                 Master database indexing strategies and query optimization techniques for lightning-fast performance
      //               </p>

      //               <div className="max-w-6xl mx-auto space-y-8">
      //                 {/* Introduction */}
      //                 <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-500/30">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> Database Performance & Indexing Mastery</h2>

      //                   <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg mb-6">
      //                     <h4 className="text-xl font-bold text-blue-300 mb-4"> Understanding Database Performance</h4>
      //                     <p className="text-lg text-gray-700 leading-relaxed mb-4">
      //                       Database performance optimization is crucial for applications handling large amounts of data. Understanding indexing, query optimization, and performance monitoring is essential for building scalable systems.
      //                     </p>
      //                     <div className="bg-gray-700/50 p-4 rounded-lg">
      //                       <h5 className="font-bold text-slate-900 mb-2">Performance Factors:</h5>
      //                       <ul className="text-gray-700 text-sm space-y-2">
      //                         <li>• <strong className="text-slate-900">Query Execution Time:</strong> How long queries take to complete</li>
      //                         <li>• <strong className="text-slate-900">Resource Utilization:</strong> CPU, memory, and I/O usage</li>
      //                         <li>• <strong className="text-slate-900">Scalability:</strong> Performance under increasing data loads</li>
      //                         <li>• <strong className="text-slate-900">Concurrency:</strong> Handling multiple simultaneous users</li>
      //                         <li>• <strong className="text-slate-900">Data Access Patterns:</strong> Read vs write operation ratios</li>
      //                       </ul>
      //                     </div>
      //                   </div>

      //                   <div className="space-y-4 text-gray-700">
      //                     <p className="text-lg leading-relaxed">
      //                       A <strong className="text-slate-900">database index</strong> is a data structure that improves the speed of data retrieval operations on a database table.
      //                       Think of it like an index in a book - instead of reading every page to find information about "SQL",
      //                       you can look it up in the index and jump directly to the relevant pages.
      //                     </p>
      //                     <p className="text-lg leading-relaxed">
      //                       Without indexes, the database must perform a <strong className="text-slate-900">full table scan</strong> - examining every single row to find matching data.
      //                       With proper indexes, the database can quickly locate the exact rows that match your query conditions, dramatically improving performance.
      //                     </p>
      //                     <div className="bg-gray-800 p-6 rounded-xl mt-4">
      //                       <h4 className="text-lg font-bold text-yellow-400 mb-3"> Performance Impact</h4>
      //                       <ul className="space-y-2">
      //                         <li>• <strong className="text-slate-900">Without Index:</strong> Query might take 10+ seconds on large tables</li>
      //                         <li>• <strong className="text-slate-900">With Index:</strong> Same query completes in milliseconds</li>
      //                         <li>• <strong className="text-slate-900">Real Example:</strong> Finding a user by email in 1M records: 10 seconds → 0.001 seconds</li>
      //                         <li>• <strong className="text-slate-900">Trade-off:</strong> Indexes use additional storage space and slow down INSERT/UPDATE/DELETE operations</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Query Optimization */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> Query Optimization Techniques</h2>

      //                   <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-lg mb-6">
      //                     <h4 className="text-xl font-bold text-purple-300 mb-4"> Understanding Query Optimization</h4>
      //                     <p className="text-lg text-gray-700 leading-relaxed mb-4">
      //                       Query optimization is the process of improving the performance of SQL queries by analyzing execution plans,
      //                       identifying bottlenecks, and applying various optimization techniques.
      //                     </p>
      //                     <div className="bg-gray-700/50 p-4 rounded-lg">
      //                       <h5 className="font-bold text-slate-900 mb-2">Optimization Strategies:</h5>
      //                       <ul className="text-gray-700 text-sm space-y-2">
      //                         <li>• <strong className="text-slate-900">Execution Plan Analysis:</strong> Understanding how the database executes queries</li>
      //                         <li>• <strong className="text-slate-900">Index Strategy:</strong> Choosing the right indexes for query patterns</li>
      //                         <li>• <strong className="text-slate-900">Query Rewriting:</strong> Restructuring queries for better performance</li>
      //                         <li>• <strong className="text-slate-900">Statistics & Cardinality:</strong> Keeping database statistics updated</li>
      //                         <li>• <strong className="text-slate-900">Hardware Considerations:</strong> CPU, memory, and storage optimization</li>
      //                       </ul>
      //                     </div>
      //                   </div>

      //                   <div className="grid md:grid-cols-2 gap-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Query Performance Analysis</h3>
      //                       <div className="space-y-4">
      //                         <div className="bg-gray-800 p-4 rounded-lg">
      //                           <h4 className="font-bold text-slate-900 mb-2">EXPLAIN Statement</h4>
      //                           <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-3 rounded">
      //                             {`-- Analyze query execution plan
      // EXPLAIN SELECT * FROM employees 
      // WHERE department = 'IT' AND salary > 50000;

      // -- Detailed execution plan
      // EXPLAIN ANALYZE SELECT * FROM employees 
      // WHERE department = 'IT';`}
      //                           </pre>
      //                         </div>
      //                         <div className="bg-gray-800 p-4 rounded-lg">
      //                           <h4 className="font-bold text-slate-900 mb-2">Performance Monitoring</h4>
      //                           <ul className="text-gray-700 text-sm space-y-2">
      //                             <li>• <strong className="text-slate-900">Execution Time:</strong> Monitor query duration</li>
      //                             <li>• <strong className="text-slate-900">Rows Examined:</strong> Check if full table scans occur</li>
      //                             <li>• <strong className="text-slate-900">Index Usage:</strong> Verify indexes are being used</li>
      //                             <li>• <strong className="text-slate-900">Memory Usage:</strong> Monitor temporary table usage</li>
      //                           </ul>
      //                         </div>
      //                       </div>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Common Optimization Techniques</h3>
      //                       <div className="space-y-4">
      //                         <div className="bg-gray-800 p-4 rounded-lg">
      //                           <h4 className="font-bold text-slate-900 mb-2">Index Optimization</h4>
      //                           <ul className="text-gray-700 text-sm space-y-2">
      //                             <li>• <strong className="text-slate-900">Covering Indexes:</strong> Include all needed columns</li>
      //                             <li>• <strong className="text-slate-900">Selective Indexes:</strong> High cardinality columns</li>
      //                             <li>• <strong className="text-slate-900">Composite Indexes:</strong> Multi-column indexes for complex queries</li>
      //                             <li>• <strong className="text-slate-900">Partial Indexes:</strong> Indexes on filtered data subsets</li>
      //                           </ul>
      //                         </div>
      //                         <div className="bg-gray-800 p-4 rounded-lg">
      //                           <h4 className="font-bold text-slate-900 mb-2">Query Structure</h4>
      //                           <ul className="text-gray-700 text-sm space-y-2">
      //                             <li>• <strong className="text-slate-900">Avoid SELECT *:</strong> Select only needed columns</li>
      //                             <li>• <strong className="text-slate-900">Use LIMIT:</strong> Restrict result sets when possible</li>
      //                             <li>• <strong className="text-slate-900">Optimize JOINs:</strong> Join on indexed columns</li>
      //                             <li>• <strong className="text-slate-900">Subquery vs JOIN:</strong> Choose appropriate approach</li>
      //                           </ul>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Index Types */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Index Types</h2>
      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">1. Single Column Index</h3>
      //                       <p className="text-gray-700 mb-4">
      //                         The most common type of index, created on a single column. Perfect for WHERE clauses that filter on one column,
      //                         ORDER BY operations, and JOIN conditions. The database creates a sorted structure that allows fast lookups.
      //                       </p>
      //                       <div className="bg-gray-950 p-4 rounded mb-3">
      //                         <pre className="text-slate-900 font-mono text-sm">
      //                           {`-- Create index on single column
      // CREATE INDEX idx_lastname ON employees(last_name);

      // -- Query that benefits from this index
      // SELECT * FROM employees WHERE last_name = 'Smith';

      // -- Show all indexes on table
      // SHOW INDEX FROM employees;`}
      //                         </pre>
      //                       </div>
      //                       <div className="bg-green-900/20 border border-green-500/30 p-4 rounded">
      //                         <p className="text-sm text-green-300 font-bold mb-2"> Performance Impact:</p>
      //                         <pre className="text-green-200 font-mono text-xs">
      //                           {`Without Index:
      // - Full table scan: 1,000,000 rows examined
      // - Query time: 2.5 seconds
      // - I/O operations: 10,000 disk reads

      // With Index:
      // - Index lookup: 1 row found directly
      // - Query time: 0.003 seconds (833x faster!)
      // - I/O operations: 3 disk reads

      // Explanation:
      // - Index creates sorted structure: Adams, Brown, Johnson, Smith, Wilson...
      // - Database uses binary search to find 'Smith' instantly
      // - Only reads the specific data pages containing matching rows`}
      //                         </pre>
      //                       </div>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">2. Composite Index (Multi-Column)</h3>
      //                       <p className="text-gray-700 mb-4">
      //                         A composite index is created on multiple columns. The order of columns is crucial - it follows the <strong className="text-slate-900">leftmost prefix rule</strong>.
      //                         The index is sorted first by the first column, then by the second column within each group of the first column, and so on.
      //                       </p>
      //                       <div className="bg-gray-950 p-4 rounded mb-3">
      //                         <pre className="text-slate-900 font-mono text-sm">
      //                           {`-- Index on multiple columns (order matters!)
      // CREATE INDEX idx_name ON employees(last_name, first_name);

      // -- This query uses index efficiently (both columns)
      // SELECT * FROM employees WHERE last_name = 'Smith' AND first_name = 'John';

      // -- This query also uses index (left prefix rule)
      // SELECT * FROM employees WHERE last_name = 'Smith';

      // -- This query does NOT use index (skips first column)
      // SELECT * FROM employees WHERE first_name = 'John';`}
      //                         </pre>
      //                       </div>
      //                       <div className="bg-green-900/20 border border-green-500/30 p-4 rounded">
      //                         <p className="text-sm text-green-300 font-bold mb-2"> Composite Index Structure:</p>
      //                         <pre className="text-green-200 font-mono text-xs">
      //                           {`Index: idx_name (last_name, first_name)

      // Sorted Structure:
      // Adams    | Alice
      // Adams    | Bob  
      // Brown    | Carol
      // Smith    | John    ← Found instantly!
      // Smith    | Jane
      // Wilson   | Mike

      // Leftmost Prefix Rule:
      //  WHERE last_name = 'Smith'                    (uses index)
      //  WHERE last_name = 'Smith' AND first_name = 'John' (uses index)
      //  WHERE first_name = 'John'                   (cannot use index)

      // Real-world analogy: Like a phone book sorted by Last Name, then First Name.
      // You can find "Smith, John" quickly, but not "John" without "Smith".`}
      //                         </pre>
      //                       </div>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Unique Index</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- Ensures column values are unique
      // CREATE UNIQUE INDEX idx_email ON users(email);

      // -- Automatically created with UNIQUE constraint
      // ALTER TABLE users ADD CONSTRAINT uq_email UNIQUE (email);`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Full-Text Index</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- For text searching
      // CREATE FULLTEXT INDEX idx_content ON articles(title, content);

      // -- Use with MATCH AGAINST
      // SELECT * FROM articles
      // WHERE MATCH(title, content) AGAINST('database optimization');`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Query Optimization */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Query Optimization</h2>
      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Use EXPLAIN</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- Analyze query execution plan
      // EXPLAIN SELECT * FROM employees WHERE last_name = 'Smith';

      // -- Detailed analysis
      // EXPLAIN ANALYZE SELECT * FROM employees WHERE salary > 50000;`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Select Only Needed Columns</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- BAD - Fetches all columns
      // SELECT * FROM employees WHERE dept_id = 5;

      // -- GOOD - Only needed columns
      // SELECT id, first_name, last_name FROM employees WHERE dept_id = 5;`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Avoid Functions on Indexed Columns</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- BAD - Index not used
      // SELECT * FROM employees WHERE YEAR(hire_date) = 2024;

      // -- GOOD - Index used
      // SELECT * FROM employees 
      // WHERE hire_date BETWEEN '2024-01-01' AND '2024-12-31';`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Use LIMIT for Large Result Sets</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- Without LIMIT - returns all rows
      // SELECT * FROM orders ORDER BY order_date DESC;

      // -- With LIMIT - returns only needed rows
      // SELECT * FROM orders ORDER BY order_date DESC LIMIT 20;

      // -- Pagination
      // SELECT * FROM orders ORDER BY order_date DESC LIMIT 20 OFFSET 40;`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Performance Tips */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Performance Best Practices</h2>
      //                   <div className="grid md:grid-cols-2 gap-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-lg font-bold text-green-400 mb-3"> Do</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Index frequently queried columns</li>
      //                         <li>• Use appropriate index types</li>
      //                         <li>• Select only needed columns</li>
      //                         <li>• Use LIMIT when appropriate</li>
      //                         <li>• Use EXPLAIN to analyze queries</li>
      //                         <li>• Use JOIN instead of subqueries when faster</li>
      //                         <li>• Avoid SELECT * in production</li>
      //                         <li>• Use prepared statements</li>
      //                       </ul>
      //                     </div>
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-lg font-bold text-red-400 mb-3"> Don&apos;t</h3>
      //                       <ul className="text-gray-700 space-y-2">
      //                         <li>• Over-index (slows INSERT/UPDATE)</li>
      //                         <li>• Use functions on indexed columns</li>
      //                         <li>• Use LIKE with leading wildcard (%abc)</li>
      //                         <li>• Fetch all rows without LIMIT</li>
      //                         <li>• Use SELECT DISTINCT unnecessarily</li>
      //                         <li>• Use OR when IN is better</li>
      //                         <li>• Ignore query execution plans</li>
      //                         <li>• Leave unused indexes</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Common Issues */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Performance Issues</h2>
      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">N+1 Query Problem</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- BAD - N+1 queries (1 + N where N = number of authors)
      // SELECT * FROM books; -- 1 query
      // -- Then for each book:
      // SELECT * FROM authors WHERE id = book.author_id; -- N queries

      // -- GOOD - Single JOIN query
      // SELECT b.*, a.name as author_name
      // FROM books b
      // JOIN authors a ON b.author_id = a.id;`}
      //                       </pre>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">Missing Index</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`-- Check slow query log
      // SHOW VARIABLES LIKE 'slow_query_log';

      // -- Identify missing indexes with EXPLAIN
      // EXPLAIN SELECT * FROM orders WHERE customer_id = 100;

      // -- Add index if needed
      // CREATE INDEX idx_customer ON orders(customer_id);`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </main>
      //         );

      //       case 'transactions':
      //         return (
      //           <main>
      //             <div className="animate-fade-in-up">
      //               <h1 id="transactions" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      //                 Transactions & ACID - Data Integrity Guarantees
      //               </h1>
      //               <p className="text-lg text-gray-600 mb-8 text-center">
      //                 Master transaction management and ACID properties to ensure data consistency and reliability
      //               </p>

      //               <div className="max-w-6xl mx-auto space-y-8">
      //                 {/* Introduction */}
      //                 <div className="bg-gradient-to-r from-red-900/20 to-purple-900/20 p-8 rounded-2xl border border-red-500/30">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> Database Transactions & ACID Properties</h2>

      //                   <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg mb-6">
      //                     <h4 className="text-xl font-bold text-blue-300 mb-4"> Transaction Theory & Database Reliability</h4>
      //                     <p className="text-lg text-gray-700 leading-relaxed mb-4">
      //                       Transactions are the fundamental mechanism ensuring database reliability and consistency. They provide the theoretical foundation
      //                       for building robust, fault-tolerant database systems that can handle concurrent access and system failures gracefully.
      //                     </p>
      //                     <div className="bg-gray-700/50 p-4 rounded-lg">
      //                       <h5 className="font-bold text-slate-900 mb-2">Transaction Theory Foundations:</h5>
      //                       <ul className="text-gray-700 text-sm space-y-2">
      //                         <li>• <strong className="text-slate-900">Atomicity:</strong> All-or-nothing execution guarantee</li>
      //                         <li>• <strong className="text-slate-900">Consistency:</strong> Database remains in valid state</li>
      //                         <li>• <strong className="text-slate-900">Isolation:</strong> Concurrent transaction independence</li>
      //                         <li>• <strong className="text-slate-900">Durability:</strong> Permanent data persistence</li>
      //                         <li>• <strong className="text-slate-900">Concurrency Control:</strong> Managing simultaneous access</li>
      //                       </ul>
      //                     </div>
      //                   </div>

      //                   <div className="space-y-4 text-gray-700">
      //                     <p className="text-lg leading-relaxed">
      //                       A <strong className="text-slate-900">transaction</strong> is a sequence of database operations that are treated as a single unit of work.
      //                       Either all operations succeed (commit), or if any operation fails, all operations are rolled back to maintain data consistency.
      //                     </p>
      //                     <p className="text-lg leading-relaxed">
      //                       Think of a transaction like a bank transfer: you want to deduct money from Account A and add it to Account B.
      //                       If the deduction succeeds but the addition fails, you&apos;re in trouble! Transactions ensure both operations happen together or neither happens.
      //                     </p>
      //                     <div className="bg-gray-800 p-6 rounded-xl mt-4">
      //                       <h4 className="text-lg font-bold text-yellow-400 mb-3"> Real-World Examples</h4>
      //                       <ul className="space-y-2">
      //                         <li>• <strong className="text-slate-900">Bank Transfer:</strong> Deduct from sender + Add to receiver (both or neither)</li>
      //                         <li>• <strong className="text-slate-900">Online Shopping:</strong> Create order + Reduce inventory + Process payment</li>
      //                         <li>• <strong className="text-slate-900">User Registration:</strong> Create user + Send welcome email + Set default preferences</li>
      //                         <li>• <strong className="text-slate-900">Data Migration:</strong> Copy data + Update references + Clean old data</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Transaction Lifecycle */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> Transaction Lifecycle & States</h2>
      //                   <div className="space-y-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4"> Understanding Transaction States</h3>
      //                       <p className="text-gray-700 mb-4">
      //                         Every transaction goes through a well-defined lifecycle with distinct states. Understanding these states is crucial for database design and troubleshooting.
      //                       </p>
      //                       <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl mb-4">
      //                         <h4 className="text-lg font-bold text-blue-300 mb-3"> Transaction State Machine</h4>
      //                         <div className="space-y-3 text-gray-700">
      //                           <div className="flex items-start">
      //                             <span className="text-green-400 mr-3 text-xl">1.</span>
      //                             <div>
      //                               <strong className="text-slate-900">Active State:</strong> Transaction is executing operations. All changes are temporary and can be rolled back.
      //                             </div>
      //                           </div>
      //                           <div className="flex items-start">
      //                             <span className="text-yellow-400 mr-3 text-xl">2.</span>
      //                             <div>
      //                               <strong className="text-slate-900">Partially Committed:</strong> All operations completed successfully, but changes not yet made permanent.
      //                             </div>
      //                           </div>
      //                           <div className="flex items-start">
      //                             <span className="text-green-400 mr-3 text-xl">3.</span>
      //                             <div>
      //                               <strong className="text-slate-900">Committed:</strong> All changes permanently saved to database. Transaction is complete.
      //                             </div>
      //                           </div>
      //                           <div className="flex items-start">
      //                             <span className="text-red-400 mr-3 text-xl">4.</span>
      //                             <div>
      //                               <strong className="text-slate-900">Failed:</strong> Transaction encountered an error and cannot proceed.
      //                             </div>
      //                           </div>
      //                           <div className="flex items-start">
      //                             <span className="text-gray-600 mr-3 text-xl">5.</span>
      //                             <div>
      //                               <strong className="text-slate-900">Aborted:</strong> Transaction rolled back to initial state. No changes made to database.
      //                             </div>
      //                           </div>
      //                         </div>
      //                       </div>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4"> Why Transactions Matter in Real Applications</h3>
      //                       <p className="text-gray-700 mb-4">
      //                         Transactions are not just database concepts - they&apos;re fundamental to building reliable applications. Here&apos;s why they&apos;re essential:
      //                       </p>
      //                       <div className="grid md:grid-cols-2 gap-6">
      //                         <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-xl">
      //                           <h4 className="text-lg font-bold text-purple-300 mb-3"> Financial Systems</h4>
      //                           <ul className="text-gray-700 space-y-2 text-sm">
      //                             <li>• <strong>Bank Transfers:</strong> Money must move atomically between accounts</li>
      //                             <li>• <strong>Stock Trading:</strong> Buy/sell orders must execute completely or not at all</li>
      //                             <li>• <strong>Payment Processing:</strong> Charge customer + update inventory + send confirmation</li>
      //                             <li>• <strong>Currency Exchange:</strong> Convert between currencies maintaining total value</li>
      //                           </ul>
      //                         </div>
      //                         <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-xl">
      //                           <h4 className="text-lg font-bold text-green-300 mb-3"> E-Commerce</h4>
      //                           <ul className="text-gray-700 space-y-2 text-sm">
      //                             <li>• <strong>Order Processing:</strong> Create order + reduce stock + process payment</li>
      //                             <li>• <strong>Inventory Management:</strong> Reserve items + update quantities + handle returns</li>
      //                             <li>• <strong>User Accounts:</strong> Register user + send email + set preferences</li>
      //                             <li>• <strong>Recommendations:</strong> Track views + update algorithms + store preferences</li>
      //                           </ul>
      //                         </div>
      //                         <div className="bg-orange-900/20 border border-orange-500/30 p-4 rounded-xl">
      //                           <h4 className="text-lg font-bold text-orange-300 mb-3"> Healthcare</h4>
      //                           <ul className="text-gray-700 space-y-2 text-sm">
      //                             <li>• <strong>Patient Records:</strong> Update medical history + schedule appointments + bill insurance</li>
      //                             <li>• <strong>Prescriptions:</strong> Doctor approval + pharmacy dispensing + insurance billing</li>
      //                             <li>• <strong>Lab Results:</strong> Process tests + update patient records + notify doctors</li>
      //                             <li>• <strong>Emergency Care:</strong> Admit patient + assign bed + update status + notify family</li>
      //                           </ul>
      //                         </div>
      //                         <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl">
      //                           <h4 className="text-lg font-bold text-blue-300 mb-3"> Educational Systems</h4>
      //                           <ul className="text-gray-700 space-y-2 text-sm">
      //                             <li>• <strong>Course Registration:</strong> Enroll student + check prerequisites + update capacity</li>
      //                             <li>• <strong>Grade Processing:</strong> Calculate GPA + update transcripts + send notifications</li>
      //                             <li>• <strong>Graduation:</strong> Verify requirements + award degree + update alumni records</li>
      //                             <li>• <strong>Financial Aid:</strong> Process application + calculate award + disburse funds</li>
      //                           </ul>
      //                         </div>
      //                       </div>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4"> Transaction Performance Considerations</h3>
      //                       <p className="text-gray-700 mb-4">
      //                         While transactions provide data integrity, they also introduce performance implications that developers must understand:
      //                       </p>
      //                       <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
      //                         <h4 className="text-lg font-bold text-red-300 mb-3"> Performance Trade-offs</h4>
      //                         <div className="space-y-4 text-gray-700">
      //                           <div>
      //                             <strong className="text-slate-900">Locking Overhead:</strong> Transactions acquire locks on data, preventing other transactions from accessing the same data simultaneously. This can create bottlenecks in high-concurrency systems.
      //                           </div>
      //                           <div>
      //                             <strong className="text-slate-900">Logging Requirements:</strong> Every transaction operation must be logged to ensure durability. This creates I/O overhead and can slow down write operations.
      //                           </div>
      //                           <div>
      //                             <strong className="text-slate-900">Rollback Complexity:</strong> If a transaction needs to rollback, the database must undo all changes, which can be expensive for large transactions.
      //                           </div>
      //                           <div>
      //                             <strong className="text-slate-900">Deadlock Risk:</strong> Multiple transactions can create deadlocks when they wait for each other&apos;s resources, requiring detection and resolution mechanisms.
      //                           </div>
      //                         </div>
      //                       </div>
      //                     </div>

      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4"> Simple Transaction Example</h3>
      //                       <p className="text-gray-700 mb-4">
      //                         Here&apos;s a basic bank transfer example demonstrating transaction principles:
      //                       </p>
      //                       <div className="bg-gray-950 p-4 rounded mb-3">
      //                         <pre className="text-slate-900 font-mono text-sm">
      //                           {`-- Bank Transfer Transaction
      // BEGIN;
      // UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
      // UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
      // COMMIT;`}
      //                         </pre>
      //                       </div>
      //                       <div className="bg-green-900/20 border border-green-500/30 p-4 rounded">
      //                         <p className="text-sm text-green-300 font-bold mb-2"> What Happens:</p>
      //                         <div className="text-green-200 text-xs space-y-1">
      //                           <div>• Both UPDATE operations execute atomically</div>
      //                           <div>• If either fails, both are rolled back</div>
      //                           <div>• COMMIT makes changes permanent</div>
      //                           <div>• No partial transfers possible</div>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 <div className="bg-gray-900 p-6 rounded-xl">
      //                   <h3 className="text-xl font-bold text-yellow-400 mb-4">Bank Transfer Example</h3>
      //                   <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                     {`-- Money transfer between accounts
      // BEGIN;

      // -- Deduct from sender
      // UPDATE accounts 
      // SET balance = balance - 500 
      // WHERE account_id = 101;

      // -- Check if sender has sufficient funds
      // SELECT balance FROM accounts WHERE account_id = 101;

      // -- Add to receiver
      // UPDATE accounts 
      // SET balance = balance + 500 
      // WHERE account_id = 202;

      // -- Log transaction
      // INSERT INTO transactions (from_account, to_account, amount, date)
      // VALUES (101, 202, 500, NOW());

      // COMMIT;  -- Save all changes`}
      //                   </pre>
      //                 </div>

      //                 <div className="bg-gray-900 p-6 rounded-xl">
      //                   <h3 className="text-xl font-bold text-yellow-400 mb-4">SAVEPOINT</h3>
      //                   <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                     {`BEGIN;

      // UPDATE products SET stock = stock - 1 WHERE product_id = 1;
      // SAVEPOINT sp1;

      // UPDATE products SET stock = stock - 1 WHERE product_id = 2;
      // SAVEPOINT sp2;

      // UPDATE products SET stock = stock - 1 WHERE product_id = 3;

      // -- Rollback to savepoint (keeps changes before sp2)
      // ROLLBACK TO sp2;

      // -- Or commit all
      // COMMIT;`}
      //                   </pre>
      //                 </div>
      //               </div>
      //             </div>

      //             {/* ACID Properties Deep Dive */}
      //             <div className="bg-gray-800 p-8 rounded-2xl">
      //               <h2 className="text-3xl font-bold text-slate-900 mb-6"> ACID Properties - The Foundation of Reliability</h2>

      //               <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-6 rounded-xl border border-green-500/30 mb-6">
      //                 <h3 className="text-2xl font-bold text-slate-900 mb-4"> What Makes ACID Special?</h3>
      //                 <p className="text-gray-700 mb-4">
      //                   ACID is not just an acronym - it&apos;s a set of guarantees that make databases reliable and trustworthy.
      //                   These properties ensure that your data remains consistent and accurate, even when multiple users are
      //                   accessing and modifying it simultaneously, or when system failures occur.
      //                 </p>
      //                 <p className="text-gray-700">
      //                   Think of ACID as the "quality assurance" for database operations - it guarantees that your data
      //                   will never be in an inconsistent or corrupted state, no matter what happens.
      //                 </p>
      //               </div>

      //               <div className="space-y-6">
      //                 <div className="bg-gray-900 p-6 rounded-xl">
      //                   <h3 className="text-xl font-bold text-yellow-400 mb-4"> Atomicity - The "All or Nothing" Guarantee</h3>
      //                   <p className="text-gray-700 mb-4">
      //                     <strong className="text-slate-900">Atomicity</strong> ensures that a transaction is treated as a single, indivisible unit of work.
      //                     Either all operations within the transaction succeed, or none of them do. There&apos;s no middle ground.
      //                   </p>
      //                   <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl mb-4">
      //                     <h4 className="text-lg font-bold text-blue-300 mb-3"> Deep Dive: How Atomicity Works</h4>
      //                     <div className="space-y-3 text-gray-700">
      //                       <div>
      //                         <strong className="text-slate-900">Transaction Logging:</strong> Every operation is logged before execution. If any operation fails,
      //                         the database uses these logs to undo (rollback) all previous operations in the transaction.
      //                       </div>
      //                       <div>
      //                         <strong className="text-slate-900">Write-Ahead Logging (WAL):</strong> Changes are written to a transaction log before being applied
      //                         to the actual data files. This ensures that rollback is always possible.
      //                       </div>
      //                       <div>
      //                         <strong className="text-slate-900">Two-Phase Commit:</strong> In distributed systems, atomicity ensures that all participating
      //                         databases either commit or rollback together.
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div className="bg-gray-950 p-4 rounded mb-3">
      //                     <pre className="text-slate-900 font-mono text-sm">
      //                       {`-- Example: Bank Transfer (Atomic)
      // BEGIN;
      // UPDATE accounts SET balance = balance - 100 WHERE id = 1;
      // UPDATE accounts SET balance = balance + 100 WHERE id = 2;
      // COMMIT;`}
      //                     </pre>
      //                   </div>
      //                   <div className="bg-green-900/20 border border-green-500/30 p-4 rounded">
      //                     <p className="text-sm text-green-300 font-bold mb-2"> Atomicity in Action:</p>
      //                     <div className="text-green-200 text-xs space-y-1">
      //                       <div> Success: Both accounts updated, money transferred</div>
      //                       <div> Failure: Neither account changed, no money lost</div>
      //                       <div> Never: One account updated, other unchanged</div>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 <div className="bg-gray-900 p-6 rounded-xl">
      //                   <h3 className="text-xl font-bold text-blue-400 mb-4"> Consistency - The Rule Keeper</h3>
      //                   <p className="text-gray-700 mb-4">
      //                     <strong className="text-slate-900">Consistency</strong> ensures that a database transitions from one valid state to another.
      //                     The database will never be left in an inconsistent state where business rules or constraints are violated.
      //                   </p>
      //                   <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl mb-4">
      //                     <h4 className="text-lg font-bold text-purple-300 mb-3"> How Consistency is Maintained</h4>
      //                     <div className="space-y-3 text-gray-700">
      //                       <div>
      //                         <strong className="text-slate-900">Constraint Enforcement:</strong> Database constraints (CHECK, FOREIGN KEY, NOT NULL)
      //                         prevent invalid data from being stored, ensuring data integrity.
      //                       </div>
      //                       <div>
      //                         <strong className="text-slate-900">Business Rule Validation:</strong> Complex business logic can be enforced through
      //                         triggers, stored procedures, and application-level validation.
      //                       </div>
      //                       <div>
      //                         <strong className="text-slate-900">Referential Integrity:</strong> Foreign key relationships ensure that related data
      //                         remains consistent across tables.
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div className="bg-gray-950 p-4 rounded mb-3">
      //                     <pre className="text-slate-900 font-mono text-sm">
      //                       {`-- Example: Balance Constraint
      // ALTER TABLE accounts ADD CONSTRAINT chk_balance CHECK (balance >= 0);
      // -- This transaction will be rejected if it violates constraints
      // UPDATE accounts SET balance = balance - 1000 WHERE id = 1;`}
      //                     </pre>
      //                   </div>
      //                   <div className="bg-green-900/20 border border-green-500/30 p-4 rounded">
      //                     <p className="text-sm text-green-300 font-bold mb-2"> Consistency in Action:</p>
      //                     <div className="text-green-200 text-xs space-y-1">
      //                       <div> Valid: Balance remains ≥ 0, transaction commits</div>
      //                       <div> Invalid: Balance would go negative, transaction rejected</div>
      //                       <div> Protection: Database never allows invalid states</div>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 <div className="bg-gray-900 p-6 rounded-xl">
      //                   <h3 className="text-xl font-bold text-purple-400 mb-4">Isolation</h3>
      //                   <p className="text-gray-700 mb-3">Concurrent transactions don&apos;t interfere with each other</p>
      //                   <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                     {`-- Set isolation level
      // SET TRANSACTION ISOLATION LEVEL 
      // READ COMMITTED;

      // BEGIN;
      // SELECT * FROM products WHERE id = 1;
      // -- Other transactions can't modify this row
      // COMMIT;`}
      //                   </pre>
      //                 </div>

      //                 <div className="bg-gray-900 p-6 rounded-xl">
      //                   <h3 className="text-xl font-bold text-yellow-400 mb-4">Durability</h3>
      //                   <p className="text-gray-700 mb-3">Committed transactions are permanently saved</p>
      //                   <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                     {`BEGIN;
      // INSERT INTO orders VALUES (1, 'Product A', 100);
      // COMMIT;
      // -- Even if server crashes,
      // -- this data is preserved`}
      //                   </pre>
      //                 </div>
      //               </div>
      //             </div>

      //             {/* Isolation Levels */}
      //             <div className="bg-gray-800 p-8 rounded-2xl">
      //               <h2 className="text-3xl font-bold text-slate-900 mb-6">Isolation Levels</h2>
      //               <div className="space-y-6">
      //                 <div className="bg-gray-900 p-6 rounded-xl">
      //                   <h3 className="text-xl font-bold text-yellow-400 mb-4">READ UNCOMMITTED</h3>
      //                   <p className="text-gray-700 mb-3">Lowest isolation - can read uncommitted changes (dirty reads)</p>
      //                   <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                     {`SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
      // BEGIN;
      // SELECT * FROM products;  -- May see uncommitted changes
      // COMMIT;`}
      //                   </pre>
      //                 </div>

      //                 <div className="bg-gray-900 p-6 rounded-xl">
      //                   <h3 className="text-xl font-bold text-yellow-400 mb-4">READ COMMITTED (Default)</h3>
      //                   <p className="text-gray-700 mb-3">Only reads committed data - prevents dirty reads</p>
      //                   <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                     {`SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
      // BEGIN;
      // SELECT * FROM products;  -- Only sees committed data
      // COMMIT;`}
      //                   </pre>
      //                 </div>

      //                 <div className="bg-gray-900 p-6 rounded-xl">
      //                   <h3 className="text-xl font-bold text-yellow-400 mb-4">REPEATABLE READ</h3>
      //                   <p className="text-gray-700 mb-3">Same query returns same results - prevents non-repeatable reads</p>
      //                   <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                     {`SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
      // BEGIN;
      // SELECT * FROM products WHERE id = 1;
      // -- Even if others UPDATE, same SELECT returns same result
      // SELECT * FROM products WHERE id = 1;
      // COMMIT;`}
      //                   </pre>
      //                 </div>

      //                 <div className="bg-gray-900 p-6 rounded-xl">
      //                   <h3 className="text-xl font-bold text-yellow-400 mb-4">SERIALIZABLE</h3>
      //                   <p className="text-gray-700 mb-3">Highest isolation - full isolation like serial execution</p>
      //                   <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                     {`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
      // BEGIN;
      // SELECT * FROM products;  -- Locks rows, prevents all anomalies
      // COMMIT;`}
      //                   </pre>
      //                 </div>
      //               </div>
      //             </div>

      //             {/* Best Practices */}
      //             <div className="bg-gray-800 p-8 rounded-2xl">
      //               <h2 className="text-3xl font-bold text-slate-900 mb-6">Transaction Best Practices</h2>
      //               <div className="grid md:grid-cols-2 gap-6">
      //                 <div className="bg-gray-900 p-6 rounded-xl">
      //                   <h3 className="text-lg font-bold text-green-400 mb-3"> Do</h3>
      //                   <ul className="text-gray-700 space-y-2">
      //                     <li>• Keep transactions short</li>
      //                     <li>• Use appropriate isolation level</li>
      //                     <li>• Always handle errors (try-catch)</li>
      //                     <li>• Use COMMIT/ROLLBACK explicitly</li>
      //                     <li>• Test transaction logic thoroughly</li>
      //                     <li>• Use SAVEPOINT for partial rollback</li>
      //                     <li>• Monitor deadlocks</li>
      //                   </ul>
      //                 </div>
      //                 <div className="bg-gray-900 p-6 rounded-xl">
      //                   <h3 className="text-lg font-bold text-red-400 mb-3"> Don&apos;t</h3>
      //                   <ul className="text-gray-700 space-y-2">
      //                     <li>• Keep transactions open too long</li>
      //                     <li>• Use highest isolation always (performance cost)</li>
      //                     <li>• Forget to handle errors</li>
      //                     <li>• Mix DDL and DML in transactions</li>
      //                     <li>• Lock more rows than needed</li>
      //                     <li>• Perform slow operations in transactions</li>
      //                     <li>• Ignore transaction timeouts</li>
      //                   </ul>
      //                 </div>
      //               </div>
      //             </div>
      //           </main>
      //         );

      // case 'practice-projects':
      //   return (
      //     <main>
      //       <div className="animate-fade-in-up">
      //         <h1 id="practice-projects" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      //           Practice Projects
      //         </h1>
      //         <p className="text-lg text-gray-600 mb-8 text-center">
      //           Build real-world database applications
      //         </p>

      //         <div className="max-w-6xl mx-auto">
      //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      //             <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-600 shadow-xl">
      //               <h3 className="text-xl font-bold text-white mb-4">E-commerce Database</h3>
      //               <p className="text-gray-300 mb-4">Design and implement a complete e-commerce database with products, orders, customers, and inventory management.</p>
      //               <ul className="text-sm text-gray-400 space-y-2">
      //                 <li>• Database schema design</li>
      //                 <li>• Complex relationships</li>
      //                 <li>• Data integrity constraints</li>
      //                 <li>• Performance optimization</li>
      //               </ul>
      //             </div>

      //             <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-600 shadow-xl">
      //               <h3 className="text-xl font-bold text-white mb-4">Analytics Dashboard</h3>
      //               <p className="text-gray-300 mb-4">Create analytical queries for business intelligence and reporting using advanced SQL features.</p>
      //               <ul className="text-sm text-gray-400 space-y-2">
      //                 <li>• Window functions</li>
      //                 <li>• Time series analysis</li>
      //                 <li>• Customer segmentation</li>
      //                 <li>• Performance metrics</li>
      //               </ul>
      //             </div>

      //             <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-600 shadow-xl">
      //               <h3 className="text-xl font-bold text-white mb-4">Data Warehouse</h3>
      //               <p className="text-gray-300 mb-4">Build a data warehouse with ETL processes and dimensional modeling.</p>
      //               <ul className="text-sm text-gray-400 space-y-2">
      //                 <li>• Star schema design</li>
      //                 <li>• ETL processes</li>
      //                 <li>• Data quality checks</li>
      //                 <li>• Reporting queries</li>
      //               </ul>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </main>
      //   );

      //       case 'summary':
      //         return (
      //           <main>
      //             <div className="animate-fade-in-up">
      //               <h1 id="summary" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      //                 SQL Quick Reference
      //               </h1>
      //               <p className="text-lg text-gray-600 mb-8 text-center">
      //                 Essential SQL commands and best practices at a glance
      //               </p>

      //               <div className="max-w-6xl mx-auto space-y-8">
      //                 {/* Command Categories */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">SQL Command Categories</h2>
      //                   <div className="grid md:grid-cols-2 gap-6">
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-green-400 mb-4">DDL (Data Definition)</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`CREATE TABLE, ALTER TABLE
      // DROP TABLE, TRUNCATE TABLE
      // CREATE INDEX, DROP INDEX`}
      //                       </pre>
      //                     </div>
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-blue-400 mb-4">DML (Data Manipulation)</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`INSERT INTO
      // UPDATE SET WHERE
      // DELETE FROM WHERE`}
      //                       </pre>
      //                     </div>
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-yellow-400 mb-4">DQL (Data Query)</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`SELECT FROM WHERE
      // ORDER BY, GROUP BY
      // HAVING, LIMIT`}
      //                       </pre>
      //                     </div>
      //                     <div className="bg-gray-900 p-6 rounded-xl">
      //                       <h3 className="text-xl font-bold text-purple-400 mb-4">TCL (Transaction Control)</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-4 rounded">
      //                         {`BEGIN, COMMIT
      // ROLLBACK, SAVEPOINT`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Essential Commands */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Essential Commands Cheat Sheet</h2>
      //                   <div className="space-y-4">
      //                     <div className="bg-gray-900 p-4 rounded-xl">
      //                       <pre className="text-slate-900 font-mono text-sm">
      //                         {`-- Query data
      // SELECT column1, column2 FROM table WHERE condition ORDER BY column DESC LIMIT 10;

      // -- Insert data
      // INSERT INTO table (col1, col2) VALUES (val1, val2);

      // -- Update data
      // UPDATE table SET column = value WHERE condition;

      // -- Delete data
      // DELETE FROM table WHERE condition;

      // -- Join tables
      // SELECT * FROM table1 JOIN table2 ON table1.id = table2.fk_id;

      // -- Aggregate
      // SELECT category, COUNT(*), AVG(price) FROM products GROUP BY category HAVING COUNT(*) > 5;

      // -- Subquery
      // SELECT * FROM table WHERE id IN (SELECT id FROM other_table WHERE condition);

      // -- Transaction
      // BEGIN; UPDATE...; INSERT...; COMMIT;`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Best Practices */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Best Practices Summary</h2>
      //                   <div className="grid md:grid-cols-3 gap-6">
      //                     <div className="bg-green-900/20 border border-green-500 p-6 rounded-xl">
      //                       <h3 className="text-lg font-bold text-green-400 mb-3"> Performance</h3>
      //                       <ul className="text-gray-700 space-y-2 text-sm">
      //                         <li>• Use indexes on frequently queried columns</li>
      //                         <li>• Select only needed columns</li>
      //                         <li>• Use EXPLAIN to analyze queries</li>
      //                         <li>• Use LIMIT for large datasets</li>
      //                         <li>• Avoid functions on indexed columns</li>
      //                       </ul>
      //                     </div>
      //                     <div className="bg-blue-900/20 border border-blue-500 p-6 rounded-xl">
      //                       <h3 className="text-lg font-bold text-blue-400 mb-3"> Security</h3>
      //                       <ul className="text-gray-700 space-y-2 text-sm">
      //                         <li>• Use prepared statements</li>
      //                         <li>• Validate user input</li>
      //                         <li>• Implement proper authentication</li>
      //                         <li>• Use least privilege principle</li>
      //                         <li>• Encrypt sensitive data</li>
      //                       </ul>
      //                     </div>
      //                     <div className="bg-purple-900/20 border border-purple-500 p-6 rounded-xl">
      //                       <h3 className="text-lg font-bold text-purple-400 mb-3"> Design</h3>
      //                       <ul className="text-gray-700 space-y-2 text-sm">
      //                         <li>• Normalize to 3NF minimum</li>
      //                         <li>• Use meaningful names</li>
      //                         <li>• Define proper constraints</li>
      //                         <li>• Use foreign keys</li>
      //                         <li>• Plan for scalability</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Common Patterns */}
      //                 <div className="bg-gray-800 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Common SQL Patterns</h2>
      //                   <div className="space-y-4">
      //                     <div className="bg-gray-900 p-4 rounded-xl">
      //                       <h3 className="text-lg font-bold text-yellow-400 mb-2">Pagination</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-3 rounded">
      //                         {`SELECT * FROM products ORDER BY id LIMIT 20 OFFSET 40;`}
      //                       </pre>
      //                     </div>
      //                     <div className="bg-gray-900 p-4 rounded-xl">
      //                       <h3 className="text-lg font-bold text-yellow-400 mb-2">Top N per Group</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-3 rounded">
      //                         {`SELECT * FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY category ORDER BY sales DESC) as rn FROM products) WHERE rn <= 3;`}
      //                       </pre>
      //                     </div>
      //                     <div className="bg-gray-900 p-4 rounded-xl">
      //                       <h3 className="text-lg font-bold text-yellow-400 mb-2">Running Total</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-3 rounded">
      //                         {`SELECT date, amount, SUM(amount) OVER (ORDER BY date) as running_total FROM transactions;`}
      //                       </pre>
      //                     </div>
      //                     <div className="bg-gray-900 p-4 rounded-xl">
      //                       <h3 className="text-lg font-bold text-yellow-400 mb-2">Find Duplicates</h3>
      //                       <pre className="text-slate-900 font-mono text-sm bg-gray-950 p-3 rounded">
      //                         {`SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;`}
      //                       </pre>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 {/* Key Takeaways */}
      //                 <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 p-8 rounded-2xl">
      //                   <h2 className="text-3xl font-bold text-slate-900 mb-6"> Key Takeaways</h2>
      //                   <div className="grid md:grid-cols-2 gap-6">
      //                     <div className="space-y-3">
      //                       <div className="flex items-start">
      //                         <span className="text-gray-700"><strong className="text-slate-900">Master SELECT:</strong> Foundation of SQL</span>
      //                       </div>
      //                       <div className="flex items-start">
      //                         <span className="text-gray-700"><strong className="text-slate-900">Use JOINs:</strong> Combine related data</span>
      //                       </div>
      //                       <div className="flex items-start">
      //                         <span className="text-gray-700"><strong className="text-slate-900">Index Wisely:</strong> Balance query speed</span>
      //                       </div>
      //                       <div className="flex items-start">
      //                         <span className="text-gray-700"><strong className="text-slate-900">Normalize Data:</strong> Reduce redundancy</span>
      //                       </div>
      //                     </div>
      //                     <div className="space-y-3">
      //                       <div className="flex items-start">
      //                         <span className="text-green-400 mr-3 text-xl"></span>
      //                         <span className="text-gray-700"><strong className="text-slate-900">Use Transactions:</strong> Ensure data integrity</span>
      //                       </div>
      //                       <div className="flex items-start">
      //                         <span className="text-green-400 mr-3 text-xl"></span>
      //                         <span className="text-gray-700"><strong className="text-slate-900">Optimize Queries:</strong> Analyze with EXPLAIN</span>
      //                       </div>
      //                       <div className="flex items-start">
      //                         <span className="text-green-400 mr-3 text-xl"></span>
      //                         <span className="text-gray-700"><strong className="text-slate-900">Practice Regularly:</strong> Build real projects</span>
      //                       </div>
      //                       <div className="flex items-start">
      //                         <span className="text-green-400 mr-3 text-xl"></span>
      //                         <span className="text-gray-700"><strong className="text-slate-900">Stay Updated:</strong> Learn new SQL features</span>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </main>
      //         );

      //     case 'video-tutorials':
      //       return (
      //         <main>
      //           <div className="animate-fade-in-up">
      //             <h1 id="video-tutorials" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      //               SQL Video Tutorials
      //             </h1>
      //             <p className="text-lg text-gray-600 mb-8 text-center">
      //               Learn SQL through comprehensive video tutorials
      //             </p>

      //             <div className="max-w-6xl mx-auto">
      //               <VideoSection videos={getVideosForTopic('sql')} title="SQL Video Tutorials" />
      //             </div>
      //           </div>
      //         </main>
      //       );

      //     default:
      //       return (
      //         <main>
      //           <div className="animate-fade-in-up">
      //             <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      //               SQL Learning Hub
      //             </h1>
      //             <p className="text-lg text-gray-600 mb-8 text-center">
      //               Select a topic from the sidebar to start learning
      //             </p>
      //           </div>
      //         </main>
      //       );
    }
  };

  return (
    <TechLayout onThisPage={pageHeadings} technology="sql" activeSection={activeSection} setActiveSection={setActiveSection} background="white">
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