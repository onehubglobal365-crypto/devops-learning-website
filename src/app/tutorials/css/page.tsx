'use client';

import { Suspense, useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import TechLayout from '@/components/layout/tech-layout';

function CSSContent() {
  const [activeSection, setActiveSection] = useState('m11');

  const allHeadings = useMemo(() => [
    { id: 'm11', title: 'CSS - Introduction' },
    { id: 'm12', title: 'CSS - Flexbox' },
    { id: 'm13', title: 'CSS - Flex Container Properties' },
    { id: 'm14', title: 'CSS - Flex Item Properties' },
    { id: 'm15', title: 'CSS - Classic Flexbox Patterns' },
    { id: 'm16', title: 'CSS - GRID' },
    { id: 'm17', title: 'CSS - Grid Structure' },
    { id: 'm18', title: 'CSS - Placing Items on the Grid' },
    { id: 'm19', title: 'CSS - Grid Alignment' },
    { id: 'm20', title: 'CSS - Grid Patterns' },
    { id: 'm21', title: 'CSS - Flexbox vs Grid' },
    { id: 'm22', title: 'CSS - Quick Reference' },
    { id: 'm23', title: 'CSS - Colors' },
    { id: 'm24', title: 'CSS - Background Colors' },
    { id: 'm25', title: 'CSS - Opacity' },
    { id: 'm26', title: 'CSS - Transparency' },
    { id: 'm27', title: 'CSS - Summary' },
    { id: 'm28', title: 'CSS - Box Model' },
    { id: 'm29', title: 'CSS - Padding' },
    { id: 'm30', title: 'CSS - Margins' },
    { id: 'm31', title: 'CSS - Width' },
    { id: 'm32', title: 'CSS - Height' },
    { id: 'm33', title: 'CSS - Handling Overflow' },
    { id: 'm34', title: 'CSS - box-sizing' },
    { id: 'm35', title: 'CSS - Quick Reference' },
    { id: 'm36', title: 'CSS - Background' },
    { id: 'm37', title: 'CSS - Background-Repeat' },
    { id: 'm38', title: 'CSS - background-position' },
    { id: 'm39', title: 'CSS - background-size' },
    { id: 'm40', title: 'CSS - background-origin' },
    { id: 'm41', title: 'CSS - background-clip' },
    { id: 'm42', title: 'CSS - background-attachment' },
    { id: 'm43', title: 'CSS - background-blend-mode' },
    { id: 'm44', title: 'CSS - background Shorthand' },
    { id: 'm45', title: 'CSS - Multiple Backgrounds' },
    { id: 'm46', title: 'CSS - Transitions' },
    { id: 'm47', title: 'CSS - Animations' },
    { id: 'm48', title: 'CSS - Quick Reference' },
    
  ], []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && allHeadings.some(h => h.id === hash)) {
        setActiveSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [allHeadings]);

  const renderContent = () => {
    switch (activeSection) {
                case 'm11':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m11" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    CSS - Introduction
                 </h1>
                  <div className="max-w-6xl mx-auto">
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>What is CSS?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-3'> 
                      CSS (Cascading Style Sheets) is what makes a website look good. While HTML builds the structure of a webpage, CSS is used to design and style it. <br />
                      With CSS, you can: <br />
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 mb-6">
                        <li>Change text colors </li>
                        <li>Choose different fonts</li>
                        <li>Add spacing between elements</li>
                        <li>Set background colors or images</li>
                        <li>Design layouts (like columns and sections)</li>
                      </ul>
                      In short, CSS controls how your website looks and feels.
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Why Use CSS?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-3'> 
                      CSS makes web development easier and more efficient:
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 mb-6">
                        <li><strong className='text-xl'>Saves Time:</strong> Write your styles once and use them across multiple pages.</li>
                        <li><strong className='text-xl'>Faster Loading:</strong> Less repeated code means your pages load quicker.</li>
                        <li><strong className='text-xl'>Easy Maintenance:</strong> Change one style, and it updates everywhere.</li>
                        <li><strong className='text-xl'>Better Design Options:</strong> CSS offers more styling features than HTML alone.</li>
                        <li><strong className='text-xl'>Works on All Devices: </strong> You can design for mobiles, tablets, and desktops.</li>
                        <li><strong className='text-xl'>Follows Standards:</strong> Modern web design relies on CSS instead of old HTML styling.</li>
                      </ul>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>CSS Syntax (How It Works)</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-3'> 
                      CSS follows a simple structure: <br />
                      <pre className='bg-slate-100 text-red-700 p-4 rounded-lg'>
                        selector {'{'}
                        property: value;
                        {'}'}
                      </pre>
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 mb-6">
                        <li><strong className="text-xl">Selector:</strong><br /> Targets the HTML element you want to style</li>
                        <li><strong className="text-xl">Property:</strong><br /> What you want to change (like color, font-size)</li>
                        <li><strong className="text-xl">Value:</strong><br /> The style you want to apply</li>
                        <li><strong className="text-xl">Example:</strong><br />
                        <pre className='bg-slate-100 text-red-700 p-4 rounded-lg'>
                          p {'{'} <br />
                          color: blue; <br />
                          {'}'} <br /><span className="text-green-700">This makes all paragraph text blue.</span>

                        </pre>
                        </li>
                      </ul>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Types of Selectors</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-3'> 
                      Some commonly used selectors are:                     
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 mb-6">
                        <li><strong className='text-xl'>Tag selector &rarr;</strong> p, h1, div</li>
                        <li><strong className='text-xl'>Class selector &rarr;</strong> .className</li>
                        <li><strong className='text-xl'>ID selector &rarr;</strong> #idName</li>
                      </ul>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>CSS History & Versions</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-3'> 
                      CSS has evolved over time:
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 mb-6">
                        <li><strong className='text-xl'>CSS1 (1996):</strong> Basic styling like fonts, colors, and spacing</li>
                        <li><strong className='text-xl'>CSS2 (1998):</strong> Added layouts, positioning, and support for different devices (like printers)</li>
                        <li><strong className='text-xl'>CSS3:</strong> Modern CSS with advanced features and divided into modules</li>
                      </ul>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>CSS3 Modules (Modern Features)</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-3'> 
                      CSS3 introduced powerful features like:
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 mb-6">
                        <li><strong className='text-xl'>Selectors –</strong> More precise element targeting</li>
                        <li><strong className='text-xl'>Box Model –</strong> Control spacing and layout</li>
                        <li><strong className='text-xl'>Backgrounds & Borders –</strong> Advanced styling options</li>
                        <li><strong className='text-xl'>Text Effects –</strong> Shadows, styling, etc.</li>
                        <li><strong className='text-xl'>2D & 3D Transforms –</strong> Rotate, scale, move elements</li>
                        <li><strong className='text-xl'>Animations –</strong> Add motion to elements</li>
                        <li><strong className='text-xl'> Multi-column Layouts –</strong> Like newspaper layouts</li>
                        <li><strong className='text-xl'>User Interface –</strong> Improve user interaction</li>
                      </ul>
                    </div>







                  </div>
                </div>
              </main>
            );

          case 'm12':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m12" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    CSS - Flexbox
                 </h1>
                  <div className="max-w-6xl mx-auto">
                    <h2 className='text-3xl font-bold text-slate-900 mb-3'>Flexbox Fundamentals</h2> 
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Is Flexbox?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                      Flexbox — short for Flexible Box Layout — is a one-dimensional layout system. You set up a flex container and its direct children (flex items) arrange themselves along a main axis (either a row or a column). Flexbox handles spacing, alignment, and sizing automatically. <br />
                      The golden rule: you style the container to control the children. Most flexbox properties go on the parent element, not the items themselves.
                      {/* <div className='text-lg text-gray-700 leading-relaxed mb-6'> */}
                      <div className='bg-slate-100 rounded-lg p-3 text-lg text-gray-700 leading-relaxed mb-6'>
                        <code className='text-red-700'>
                          .container {'{'} <br />
                            display: flex; <br /> /* That's it — children are now flex items */
                          {'}'}

                        </code>
                      </div>
              {/* </div> */}
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>The Flex Container vs. Flex Items</h3> 
                    

                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Understanding which element is the container and which are the items is essential. Properties split into two groups:
                  <div className=" text-lg table-container mt-3 border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Container Properties (on the parent)</th>
                        <th className="border border-slate-400 p-3 text-left">Item Properties (on the children)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">display: flex / inline-flex</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-grow</code></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex-direction</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-shrink</code></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex-wrap</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-basis</code></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">justify-content</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex (shorthand)</code></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">align-items</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-self</code></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">align-content</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>order</code></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">gap</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>min-width / max-width</code></td>
                      </tr>

                      
                    </tbody>
                  </table>
                </div>
              </div>

                  </div>
                </div>
              </main>
            );


          case 'm13':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m13" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    Flex Container Properties
                 </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Flexbox Fundamentals</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>flex-direction — Which Way Does It Flow?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      flex-direction sets the main axis — the direction in which flex items are laid out.
                       <div className=" text-lg table-container mt-3 border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">row</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-direction: row;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Left to right (default in LTR languages)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">row-reverse</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-direction: <br /> row-reverse;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Right to left</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">column</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-direction: <br /> column;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Top to bottom</td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">column-reverse</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-direction: <br /> column-reverse;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Bottom to top</td>
                      </tr>  
                    </tbody>
                  </table>
                </div>
                <strong className='text-xl'>Note:</strong> When flex-direction is row, the main axis is horizontal and the cross axis is vertical. When it is column, they swap. This matters for justify-content and align-items.

                    </div>

                     <h3 className='text-2xl font-bold text-slate-900 mb-3'>flex-wrap — Should Items Wrap?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      By default, flex items all squeeze into one line, even if they overflow. flex-wrap controls whether they can wrap onto multiple lines.
                       <div className=" text-lg table-container mt-3 border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">nowrap</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-wrap: <br /> nowrap;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">All items stay on one line — may overflow (default)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">wrap</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-wrap: <br /> wrap;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Items wrap onto new lines when they don't fit</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">wrap-reverse</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-wrap: <br /> wrap-reverse;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Items wrap, but new lines appear above, not below</td>
                      </tr>
                       
                    </tbody>
                  </table>
                </div>
                <strong className='text-xl'>Tip:</strong> Use flex-wrap: wrap with flex-basis on items to create a responsive grid without any media queries! Items naturally wrap when the screen gets too small.

                    </div>
                       <h3 className='text-2xl font-bold text-slate-900 mb-3'>flex-wrap — Should Items Wrap?</h3> 
                       <div className='bg-slate-100 p-3 rounded-lg'>
                        <code className='text-lg text-red-700'>
                          flex-flow: row wrap;       <span className='text-green-700'>/* = flex-direction: row + flex-wrap: wrap */ </span><br />
                          flex-flow: column nowrap;  <span className='text-green-700'>/* = flex-direction: column + flex-wrap: nowrap */</span>

                        </code>

                       </div>







                       <h3 className='text-2xl font-bold text-slate-900 mb-3'>justify-content — Alignment Along the Main Axis</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      This is one of the most-used flexbox properties. It controls how items are spaced and aligned along the main axis (horizontal by default).
                       <div className=" text-lg table-container mt-3 border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex-start</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>justify-content: <br /> flex-start;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Pack items to the end of the axis</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex-end</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>justify-content: <br /> flex-end;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Items wrap onto new lines when they don't fit</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">center</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>justify-content: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Center items along the axis</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">space-between</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>justify-content: <br /> space-between;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Equal gaps between items — no gap on edges</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">space-around</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>justify-content: <br /> space-around;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Equal space around each item — half gaps on edges</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">space-evenly</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>justify-content: <br /> space-evenly;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Perfectly equal space everywhere, including edges</td>
                      </tr>
                       
                    </tbody>
                  </table>
                </div>
                <strong className='text-xl'>Tip:</strong> space-between is ideal for navbars (logo on left, links on right). space-evenly is great for icon rows and card grids where equal spacing looks cleaner.

                    </div>


                 <h3 className='text-2xl font-bold text-slate-900 mb-3'>align-items — Alignment Along the Cross Axis</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                        While justify-content controls the main axis, align-items controls alignment on the perpendicular (cross) axis. For row direction, this means vertical alignment.
                       <div className=" text-lg table-container mt-3 border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">stretch</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-items: stretch;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Items stretch to fill the container height (default)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex-start</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-items: <br /> flex-start;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Items align to the top of the container</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex-end</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-items: <br /> flex-end;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Items align to the bottom of the container</td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">center</td>
                        <td className="border border-slate-400 p-3 text-gray-900 "><code className='text-red-700'>align-items: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Items are vertically centered</td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">baseline</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-items: <br /> baseline;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Items align by their text baseline</td>
                      </tr>
                       
                    </tbody>
                  </table>
                </div>
                The most famous two-liner for centering anything, ever:
                <div className='bg-slate-100 mt-2 rounded-lg p-3'>
                  <code className='text-lg text-red-700'>
                    .center-everything {'{'} <br />
                      &nbsp;&nbsp;display: flex; <br />
                      &nbsp;&nbsp;justify-content: center;  <span className='text-green-700'>/* Horizontal center */</span> <br />
                     &nbsp; align-items: center;      <span className='text-green-700'>/* Vertical center */</span> <br />
                     &nbsp;{'}'}

                  </code>
                </div>

                    </div>


                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>align-content — When There Are Multiple Lines</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      align-content works like justify-content, but for multiple lines of wrapped items. It only has an effect when flex-wrap: wrap is set and items have wrapped onto more than one line.
                       <div className=" text-lg table-container mt-3 border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex-start</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-content: <br /> flex-start;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lines packed to the top</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex-end</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-content: flex-end;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lines packed to the bottom</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">center</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-content: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lines centered vertically</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">space-between</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-content: space-between;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Equal space between lines</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">space-around</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-content: space-around;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Equal space around lines</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">stretch</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-content: stretch;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lines stretch to fill the container (default)</td>
                      </tr>
                       
                    </tbody>
                  </table>
                </div>
                

                    </div>


                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>gap — Space Between Items</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      The gap property (also called grid-gap originally) adds space between flex items — but not on the outer edges. It is far cleaner than using margins on every item.
                      <div className='bg-slate-100 mt-3 p-3 mb-4 rounded-lg'>
                        <code className='text-red-700'>
                          .nav  {'{'} gap: 16px; {'}'}         <span className='text-green-700'> /* 16px between all items */</span> <br />
                          .grid {'{'} gap: 24px 16px; {'}'}    <span className='text-green-700'>/* 24px row gap, 16px column gap */</span> <br />
                          .list {'{'} row-gap: 12px; {'}'}      <span className='text-green-700'>/* Only between rows */</span> <br />
                          .list {'{'} column-gap: 20px; {'}'}   <span className='text-green-700'>/* Only between columns */</span> <br />

                        </code>

                      </div>
                 
                    </div>
                   
                  </div>
                </div>
              </main>
            );



          case 'm14':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m14" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    Flex Item Properties
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Flexbox Fundamentals</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>flex-grow — Taking Up Extra Space</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      flex-grow controls how much of the remaining free space an item claims. A value of 0 means the item does not grow. A value of 1 means it takes a proportional share of available space.
                      <div className='bg-slate-100 mt-3 mb-3 p-3 rounded-lg'>
                        <code className='text-red-700 p-3'>
                          <span className='text-green-700'>/* Item 1 takes up twice as much space as Item 2 */</span> <br />
                          .item-1 {'{'} flex-grow: 2; {'}'} <br />
                          .item-2 {'{'} flex-grow: 1; {'}'}

                        </code>

                      </div>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>flex-shrink — Giving Up Space</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                       flex-shrink controls how much an item shrinks when there is not enough space. A value of 1 (default) means it shrinks proportionally. A value of 0 means it refuses to shrink — it will overflow instead.
                      <div className='bg-slate-100 mt-3 mb-3 p-3 rounded-lg'>
                        <code className='text-red-700 p-3'>
                          .logo {'{'}  flex-shrink: 0; {'}'}   <span className='text-green-700'>/* Logo never shrinks — always full size */</span> <br />
                          .nav  {'{'}  flex-shrink: 1; {'}'}    <span className='text-green-700'>/* Nav links can shrink if needed */</span>


                        </code>

                      </div>
                    </div>
                       <h3 className='text-2xl font-bold text-slate-900 mb-3'>flex-basis — The Starting Size</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      flex-basis sets the ideal starting size of an item before any growing or shrinking happens. Think of it as the item's preferred size before flex does its magic.
                       <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">auto</td>
                        <td className="border border-slate-400 p-3 text-gray-900 "><code className='text-red-700'>flex-basis: auto;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Use the item's width or height property as basis (default)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">0</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-basis: 0;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Item has no natural size — grows purely based on flex-grow ratio</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">200px</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-basis: 200px;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Start at 200px, then grow or shrink from there</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">30%</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex-basis: 30%;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Start at 30% of the container's main axis</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

                 <h3 className='text-2xl font-bold text-slate-900 mb-3'>flex — The Shorthand (Use This!)</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                     flex is the shorthand for flex-grow, flex-shrink, and flex-basis together. There are several convenient single-keyword values:
                <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex: 1</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex: 1;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Grow to fill space, shrink as needed, basis 0 — most common</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex: auto</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex: auto;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Grow and shrink based on natural size (1 1 auto)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex: none</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex: none;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Don't grow, don't shrink — stay at natural size (0 0 auto)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex: 0 1 auto</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex: 0 1 auto;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Can shrink but won't grow — the default</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">flex: 2 1 200px</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>flex: 2 1 200px;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Start at 200px, grow twice as fast, can shrink</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='bg-slate-100 mt-2 mb-3 p-3 rounded-lg'>
                  <code className='text-red-700 p-3'>
                    <span className='text-green-700'>/* Three equal-width columns */</span> <br />
                    .col {'{'} flex: 1; {'}'} <br />
                    
                    <span className='text-green-700'>/* Sidebar stays fixed, main content grows */</span> <br />
                    .sidebar {'{'} flex: 0 0 250px; {'}'}  <span className='text-green-700'>/* Don't grow, don't shrink, always 250px */</span> <br />
                    .main    {'{'} flex: 1; {'}'}           <span className='text-green-700'>/* Take all remaining space */</span>

                  </code>
                </div>
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-3'>align-self — Override Alignment for One Item</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      align-self lets a single flex item override the container's align-items value. All other values match align-items: stretch, flex-start, flex-end, center, baseline.
              <div className='bg-slate-100 mt-2 p-3 mb-3 rounded-lg'>
                  <code className='text-red-700'>
                    .container {'{'} align-items: center; {'}'}   <span className='text-green-700'> /* All items centered */</span> <br />
                    .special   {'{'} align-self: flex-end; {'}'}    <span className='text-green-700'>/* This one goes to the bottom */</span> <br />

                  </code>
                </div>
              </div>
                <h3 className='text-2xl font-bold text-slate-900 mb-3'>order — Reorder Without Changing HTML</h3> 
                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                  The order property changes the visual order of flex items without touching the HTML. Items with lower order values appear first. Default is 0 for all items.
                <div className='bg-slate-100 mt-2 mb-3 p-3 rounded-lg'>
                  <code className='text-red-700'>
                   &nbsp;.item-a {'{'} order: 2; {'}'}   <span className='text-green-700'>/* Appears last visually */</span> <br />
                  &nbsp;.item-b {'{'} order: 1; {'}'}   <span className='text-green-700'>/* Appears in the middle */</span> <br />
                   &nbsp;.item-c {'{'} order: 0; {'}'}   <span className='text-green-700'>/* Appears first (default) */</span> <br />

                  </code>
                </div>
                    </div>


                  </div>
                </div>
              </main>
            );



          case 'm15':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m15" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    Classic Flexbox Patterns
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Flexbox Fundamentals</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Sticky Footer</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className='bg-slate-100 mt-3 mb-3 p-3 rounded-lg'>
                        <code className='text-red-700 p-3'>
                          body {'{'} <br />
                            display: flex; <br />
                            flex-direction: column; <br />
                            min-height: 100vh; <br />
                          {'}'} <br />
                          main  {'{'} flex: 1; {'}'} <span className='text-green-700'>/* Main content grows — pushes footer down */</span>

                        </code>

                      </div>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Holy Grail Layout (Header, Sidebar, Main, Footer)</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className='bg-slate-100 mt-3 mb-3 p-3 rounded-lg'>
                        <code className='text-red-700 '>
                          .page   {'{'} display:flex; flex-direction:column; min-height:100vh; {'}'} <br />
                          .body   {'{'} display:flex; flex:1; {'}'} <br />
                          .sidebar-left  {'{'} flex: 0 0 220px; {'}'} <br />
                          .content       {'{'} flex: 1; {'}'} <br />
                          .sidebar-right {'{'} flex: 0 0 200px; {'}'} <br />
                        </code>

                      </div>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Responsive Card Row (Wrap to Stack)</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className='bg-slate-100 mt-3 mb-3 p-3 rounded-lg'>
                        <code className='text-red-700 p-3'>
                          .cards {'{'} <br />
                            display: flex; <br />
                            flex-wrap: wrap; <br />
                            gap: 24px; <br />
                          {'}'} <br />
                          .card {'{'} <br />
                            flex: 1 1 300px;  <span className='text-green-700'>/* Grow freely, min preferred size 300px */</span> <br />
                          {'}'}
                        </code>

                      </div>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Navigation Bar</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className='bg-slate-100 mt-3 mb-3 p-3 rounded-lg'>
                        <code className='text-red-700 '>
                          .navbar {'{'} <br />
                            display: flex; <br />
                            justify-content: space-between; <br />
                            align-items: center; <br />
                            padding: 0 24px; <br />
                            height: 64px; <br />
                          {'}'}
                        </code>

                      </div>
                    </div>
                  </div>
                </div>
              </main>
            );



          case 'm16':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m16" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    CSS GRID
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    <h2 className='text-3xl font-bold text-slate-900 mb-3'>CSS Grid Fundamentals</h2> 
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Is CSS Grid?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      CSS Grid is a two-dimensional layout system. Unlike Flexbox (which handles one direction at a time), Grid lets you place elements precisely in both rows and columns simultaneously. It is the most powerful layout tool in CSS. <br />
                      The mental model: think of a spreadsheet. You define how many rows and columns exist, and then you place items into specific cells — or even across multiple cells.
                      <div className='bg-slate-100 p-3 rounded-lg mt-3 mb-3'>
                        <code className='text-red-700'>
                          .container {'{'} <br />
                            display: grid; <br />
                            grid-template-columns: 1fr 1fr 1fr; <span className='text-green-700'>/* Three equal columns */</span> <br />
                            grid-template-rows: 100px 100px; <span className='text-green-700'>/* Two rows */</span> <br />
                            gap: 16px; <span className='text-green-700'>/* Space between cells */</span> <br />
                          {'}'}
                        </code>
                      </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Grid Terminology</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Grid has its own vocabulary. Understanding these terms makes everything else make sense:
                     <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Term</th>
                        <th className="border border-slate-400 p-3 text-left">What It Means</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Grid Container</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The parent element with display: grid</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Grid Item</td>
                        <td className="border border-slate-400 p-3 text-gray-900">A direct child of the grid container</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Grid Line</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The dividing lines that form the grid structure (numbered from 1)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Grid Track</td>
                        <td className="border border-slate-400 p-3 text-gray-900">A single row or column between two adjacent grid lines</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Grid Cell</td>
                        <td className="border border-slate-400 p-3 text-gray-900">A single intersection of one row track and one column track</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Grid Area</td>
                        <td className="border border-slate-400 p-3 text-gray-900">One or more cells combined — items can span multiple cells</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Explicit Grid</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The grid you define with grid-template-columns and grid-template-rows</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Implicit Grid</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Extra rows/columns auto-created when items overflow the explicit grid</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    </div>




                  </div>
                </div>
              </main>
            ); 



          case 'm17':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m17" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    Defining the Grid Structure
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'></h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>grid-template-columns and grid-template-rows</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      These two properties define the explicit grid — how many tracks exist and how wide/tall each one is.
                      <div className='bg-slate-100 p-3 mt-3 mb-3 rounded-lg'>
                        <code className='text-red-700 text-lg'>
                          
                          <span className='text-green-700'>/* Three equal columns */</span><br />
                          grid-template-columns: 1fr 1fr 1fr; <br />

                          <span className='text-green-700'>/* Sidebar + main + sidebar */</span><br />
                          grid-template-columns: 200px 1fr 200px; <br />

                          <span className='text-green-700'>/* Four rows: header auto, main fills space, footer fixed */</span> <br />
                          grid-template-rows: auto 1fr 60px;

                        </code>
                      </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>The repeat() Function</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Typing 1fr 1fr 1fr 1fr 1fr is tedious. The repeat() function makes this clean:
                      <div className='bg-slate-100 p-3 mt-3 mb-3 rounded-lg'>
                        <code className='text-red-700 text-lg'>
                          grid-template-columns: repeat(4, 1fr);     <span className='text-green-700'> /* 4 equal columns */</span> <br />
                          grid-template-columns: repeat(3, 200px);   <span className='text-green-700'> /* 3 fixed 200px columns */</span><br />
                          grid-template-columns: repeat(2, 1fr 2fr);  <span className='text-green-700'>/* Repeating 1fr 2fr pattern */</span>
                        </code>
                      </div>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>The fr Unit — Fractional Space</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                     The fr (fractional unit) divides the available space after fixed-size and auto-size tracks are accounted for.
                      <div className='bg-slate-100 p-3 mt-3 mb-3 rounded-lg'>
                        <code className='text-red-700 text-lg'> 
                          grid-template-columns: 250px 1fr 2fr;<br />
                          <span className='text-green-700'>/* 250px sidebar | remaining space split: 1/3 and 2/3 */</span><br />
                        </code>
                      </div>
                  <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">1fr</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>grid-template-columns: 1fr;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Takes one share of available space</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">1fr 2fr</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>grid-template-columns: 1fr 2fr;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Second column is twice as wide as first</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">repeat(3,1fr)</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>grid-template-columns: repeat(3,1fr);</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Three perfectly equal columns</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>minmax() — Flexible Sizing with Limits</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      minmax() lets you define a minimum and maximum size for a track. It is the key to truly responsive grids.
                      <div className='bg-slate-100 p-3 mt-3 mb-3 rounded-lg'>
                        <code className='text-red-700 text-lg'> 
                          grid-template-columns: repeat(3, minmax(200px, 1fr));<br />
                          <span className='text-green-700'>/* Each column is at least 200px wide, but grows equally */</span><br />
                          grid-template-rows: minmax(100px, auto); <br />
                          <span className='text-green-700'>/* Row is at least 100px tall, grows to fit content */</span><br />
                        </code>
                      </div>
                    </div>

                      <h3 className='text-2xl font-bold text-slate-900 mb-3'>auto-fill and auto-fit — Responsive Without Media Queries</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      These two keywords work inside repeat() to automatically create as many tracks as possible to fill the container — the cornerstone of truly responsive grids.
                      <div className='bg-slate-100 p-3 mt-3 mb-3 rounded-lg'>
                        <code className='text-red-700 text-lg'> 
                          <span className='text-green-700'>/* Auto-fill: creates as many 200px columns as will fit */</span><br />
                          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));<br />
                          <span className='text-green-700'>/* Auto-fit: like auto-fill, but collapses empty tracks */</span><br />
                          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        </code>
                      </div>
                    <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">auto-fill</th>
                        <th className="border border-slate-400 p-3 text-left">auto-fit</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Creates tracks even if they are empty</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Collapses empty tracks to zero width</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Items don't stretch if fewer than possible</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Items stretch to fill the row if fewer exist</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Better when you always expect many items</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Better for unknown/dynamic item counts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>



                    </div>

                       <h3 className='text-2xl font-bold text-slate-900 mb-3'>gap in Grid</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Just like in Flexbox, gap sets the space between grid tracks (rows and columns), not on the outer edges:
                      <div className='bg-slate-100 p-3 mt-3 mb-3 rounded-lg'>
                        <code className='text-red-700 text-lg'> 
                          <span className='text-green-700'>/* Same gap for rows and columns */</span><br />
                          gap: 24px; <br />
                          <span className='text-green-700'>/* 32px row gap, 16px column gap */</span><br />
                          gap: 32px 16px; <br />
                          <span className='text-green-700'>/* Only row gaps */</span><br />
                          row-gap: 20px; <br />
                          <span className='text-green-700'>/* Only column gaps */</span><br />
                          column-gap: 12px;
                          
                        </code>
                      </div>
                    </div>





                  </div>
                </div>
              </main>
            );





          case 'm18':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m18" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    Placing Items on the Grid
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'></h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>grid-column and grid-row — Span Specific Lines</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Every grid line is numbered, starting at 1 from the left (and top). You can place items by specifying which lines they start and end at using a start / end slash notation.
                      <div className='bg-slate-100 p-3 mt-3 mb-3 rounded-lg'>
                        <code className='text-red-700 text-lg'>
                          
                          <span className='text-green-700'>/* Item spans columns 1 through 3 */</span><br />
                          .item {'{'} grid-column: 1 / 3; {'}'} <br />

                          <span className='text-green-700'>/* Item starts at column 2, spans 2 columns */</span><br />
                          .item {'{'} grid-column: 2 / span 2; {'}'} <br />

                          <span className='text-green-700'>/* Item takes up the full width (all columns) */</span> <br />
                          .hero {'{'} grid-column: 1 / -1; {'}'}   <span className="text-green-700">/* -1 = last line */</span> <br />
                          <span className='text-green-700'>/* Place in both dimensions */</span> <br />
                          .featured {'{'} <br />
                            grid-column: 2 / 4;  <span className="text-green-700">/* Columns 2–4 */</span> <br />
                            grid-row:    1 / 3;  <span className="text-green-700">/* Rows 1–3 */</span> <br />
                          {'}'}
                        </code>
                      </div>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>grid-template-areas — The Readable Way</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      grid-template-areas is one of CSS Grid's most beautiful features. It lets you name regions of your grid using strings, making the layout immediately readable to any developer.
                      <div className='bg-slate-100 p-3 mt-3 mb-3 rounded-lg'>
                        <code className='text-red-700 text-lg'>
                        .page {'{'} <br />
                          display: grid; <br />
                          grid-template-columns: 220px 1fr; <br />
                          grid-template-rows: 70px 1fr 60px; <br />
                          grid-template-areas: <br />
                            "header  header" <br />
                            "sidebar main  " <br />
                            "footer  footer"; <br />
                        {'}'} <br />
                        .header  {'{'} grid-area: header;  {'}'} <br />
                        .sidebar {'{'} grid-area: sidebar; {'}'} <br />
                        .main    {'{'} grid-area: main;    {'}'} <br />
                        .footer  {'{'} grid-area: footer;  {'}'} <br />
                        </code>
                      </div>
                      <strong>Note:</strong> Each string in grid-template-areas represents one row. Each word represents one cell. A period (.) marks an empty cell. All rows must have the same number of cells.
                    </div>



                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Implicit Grid — Auto-Placed Items</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      When you add more items than your explicit grid can hold, CSS Grid automatically creates extra rows (or columns). You control the size of these auto-generated tracks with grid-auto-rows and grid-auto-columns.
                      <div className='bg-slate-100 p-3 mt-3 mb-3 rounded-lg'>
                        <code className='text-red-700 text-lg'>
                          
                          .grid {'{'} <br />
                            grid-template-columns: repeat(3, 1fr); <br />
                            grid-auto-rows: minmax(150px, auto); <span className='text-green-700'>/* Implicit rows are min 150px */</span> <br />
                          {'}'}
                        </code>
                      </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>grid-auto-flow — How Auto-Placement Works</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      grid-auto-flow controls the direction in which auto-placed items are inserted:
                       <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">row</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>grid-auto-flow: row;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Fill rows first, then create new rows (default)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">column</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>grid-auto-flow: column;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Fill columns first, then create new columns</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">row dense</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>grid-auto-flow: row dense;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Row-first but backfill gaps with smaller items</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">column dense</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>grid-auto-flow: column dense;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Column-first with gap-filling</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                   <strong>Tip:</strong> grid-auto-flow: row dense is the secret to masonry-style layouts where items fill in any available holes. Great for image galleries with items of varying sizes.
                   </div>

         
                  </div>
                </div>
              </main>
            );



          case 'm19':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m19" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    Grid Alignment
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'></h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Aligning the Entire Grid Content</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      These properties align all the grid tracks within the container when the grid is smaller than the container itself:
                    <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">justify-content</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>justify-content: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Aligns tracks horizontally (column axis)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">column</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>grid-auto-flow: column;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Fill columns first, then create new columns</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">align-content</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-content: space-between;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Aligns tracks vertically (row axis)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">place-content</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>place-content: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shorthand: align-content + justify-content</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'> Aligning Items Within Their Cells</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      These properties control how individual items sit within their grid cell:
                    <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">justify-items</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>justify-items: stretch;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Horizontal alignment of ALL items in their cells</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">align-items</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-items: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Vertical alignment of ALL items in their cells</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">place-items</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>place-items: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shorthand: align-items + justify-items</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">justify-self</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>justify-self: end;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Horizontal alignment for ONE specific item</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">align-self</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>align-self: start;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Vertical alignment for ONE specific item</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">place-self</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-red-700'>place-self: center end;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shorthand: align-self + justify-self for one item</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                   <div className='bg-slate-100 p-3 mt-3 mb-3 rounded-lg'>
                    <code className='text-red-700 text-lg'>
                      <span className="text-green-700">/* Center a single item perfectly in its cell */</span> <br />
                      .item {'{'} place-self: center; {'}'} <br />
                      <span className="text-green-700">/* Center ALL items in ALL cells */</span> <br />
                      .grid {'{'} place-items: center; {'}'}

                    </code>

                   </div>
                    </div>




                  </div>
                </div>
              </main>
            );



          case 'm20':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m20" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    Classic Grid Patterns
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'></h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'> Responsive Card Grid</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className="bg-slate-100 mt-3 mb-3 p-3 rounded-lg">
                        <code className="text-red-700">
                          .grid {'{'} <br />
                            display: grid; <br />
                            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); <br />
                            gap: 24px; <br />
                          {'}'} <br />
                        </code>
                      </div>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Magazine / Editorial Layout</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className="bg-slate-100 mt-3 mb-3 p-3 rounded-lg">
                        <code className="text-red-700">
                          .layout {'{'} <br />
                            display: grid; <br />
                            grid-template-columns: repeat(4, 1fr); <br />
                            grid-auto-rows: 200px; <br />
                            gap: 16px; <br />
                          {'}'} <br />
                          .featured {'{'} grid-column: span 2; grid-row: span 2; {'}'}
                        </code>
                      </div>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>12-Column Bootstrap-Style Grid</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className="bg-slate-100 mt-3 mb-3 p-3 rounded-lg">
                        <code className="text-red-700">
                          .container {'{'} <br />
                            display: grid; <br />
                            grid-template-columns: repeat(12, 1fr); <br />
                            gap: 16px; <br />
                          {'}'} <br />
                          .col-6  {'{'} grid-column: span 6;  {'}'} <span className="text-grenn-700">/* Half width */</span> <br />
                          .col-4  {'{'} grid-column: span 4;  {'}'} <span className="text-grenn-700">/* One third */</span> <br />
                          .col-12 {'{'} grid-column: span 12; {'}'} <span className="text-grenn-700">/* Full width */</span> <br />
                        </code>
                      </div>
                    </div>


                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Full Page App Layout</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className="bg-slate-100 mt-3 mb-3 p-3 rounded-lg">
                        <code className="text-red-700">
                          .app {'{'} <br />
                             display: grid; <br />
                            grid-template-areas: <br />
                              &nbsp;"topbar topbar" <br />
                             &nbsp;"sidebar content"; <br />
                            grid-template-columns: 260px 1fr; <br />
                            grid-template-rows: 60px 1fr; <br />
                            height: 100vh; <br />
                          {'}'} <br />
                        </code>
                      </div>
                    </div>


                    
                  </div>
                </div>
              </main>
            );

          case 'm21':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m21" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    Flexbox vs Grid — When to Use Which
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'></h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Flexbox vs Grid</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      The most common question: should I use Flexbox or Grid? The simple answer: use Flexbox for one-dimensional layouts (a row or a column), use Grid for two-dimensional layouts (rows AND columns together). But there is more nuance:
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Use FLEXBOX when...</th>
                        <th className="border border-slate-400 p-3 text-left">Use GRID when...</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Items flow in one direction (row or column)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">You need control over both rows and columns</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Content drives size (items shrink/grow freely)</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Layout drives size (you define the grid structure)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Building navbars, toolbars, button groups</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Building page layouts, dashboards, card grids</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Vertical centering a single element</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Creating complex multi-area layouts</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Distributing remaining space among items</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Placing items precisely by line numbers or area names</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Wrapping items into multiple lines loosely</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Controlling exact cell sizes and positions</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                   The real-world answer: use both! A Grid page layout can contain Flex navbars. A Flex card row can use Grid inside each card. They complement each other perfectly.
                    </div>
                  </div>
                </div>
              </main>
            );




          case 'm22':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m22" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    Full Quick Reference
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'></h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Flexbox — Container Properties</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">display</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">display: flex;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Enables flexbox on the container</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">flex-direction</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">flex-direction: row;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Sets main axis direction</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">flex-wrap</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">flex-wrap: wrap;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Allows items to wrap to new lines</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">flex-flow</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">flex-flow: row wrap;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shorthand for direction + wrap</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">justify-content</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">justify-content: space-between;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Alignment along main axis</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">align-items</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">align-items: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Alignment along cross axis</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">align-content</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">align-content: stretch;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Multi-line alignment along cross axis</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">gap</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">gap: 16px;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Space between items</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                    </div>


                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Flexbox — Item Properties</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">flex-grow</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">flex-grow: 1;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">How much free space the item claims</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">flex-shrink</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">flex-shrink: 0;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">How much the item shrinks when space is tight</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">flex-basis</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">flex-basis: 200px;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Ideal starting size before flex math</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">flex</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">flex: 1;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shorthand: grow shrink basis</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">align-self</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">align-self: flex-end;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Override container alignment for this item</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">order</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">order: -1;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Change visual order without editing HTML</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                    </div>


                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Grid — Container Properties</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">display</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">display: grid;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Enables grid on the container</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">grid-template-columns</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">grid-template-columns: repeat(3,1fr);</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Defines column tracks</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">grid-template-rows</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">grid-template-rows: auto 1fr 60px;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Defines row tracks</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">grid-template-areas</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">grid-template-areas: 'h h' 's m';</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Named layout regions</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">grid-auto-columns</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">grid-auto-columns: 1fr;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Size of implicit columns</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">grid-auto-rows</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">grid-auto-rows: minmax(100px,auto);</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Size of implicit rows</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">grid-auto-flow</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">grid-auto-flow: row dense;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Auto-placement direction</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">gap</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">gap: 24px 16px;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Row and column gaps</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">justify-items</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">justify-items: stretch;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Horizontal alignment of all items</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">align-items</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">align-items: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Vertical alignment of all items</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">place-items</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">place-items: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shorthand for both alignments</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">justify-content</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">justify-content: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Aligns grid tracks horizontally</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">align-content</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">align-content: <br /> space-between;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Aligns grid tracks vertically</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                    </div>



                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Grid — Item Properties</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                  <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">grid-column</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">grid-column: 1 / 3;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Start and end column lines</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">grid-row</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">grid-row: 2 / span 2;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Start and end row lines</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">grid-area</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">grid-area: header;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Assign to a named area</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">justify-self</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">justify-self: end;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Horizontal alignment in cell</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">align-self</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">align-self: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Vertical alignment in cell</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">place-self</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">place-self: center;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Shorthand for both self-alignments</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                    </div>
                  </div>
                </div>
              </main>
            );





          case 'm23':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m23" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    CSS Colors
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'></h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Introduction — Why Colors Matter in CSS</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Think of CSS as the makeup artist for your website. Without color, every webpage would look like a plain text document from the 90s. With color, you can set moods, highlight important information, and make your site feel alive and professional. <br />
                      In this guide, we will walk through everything you need to know about CSS colors, background colors, opacity, and transparency — explained in plain, human terms with real examples. Whether you are a complete beginner or brushing up your skills, this guide has you covered.
                    </div>


                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>What is a CSS Color?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      A CSS color is a value you assign to a property that tells the browser what color to paint something — text, borders, backgrounds, shadows, and more. CSS supports several formats for writing colors, and understanding each one will give you a lot of flexibility.
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Color Formats at a Glance</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      CSS gives you multiple ways to express the same color. Here is a quick comparison:
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Named Color</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">color: red;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Use a plain English name</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">HEX Code</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">color: #FF5733;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">6-digit code (Red, Green, Blue)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">RGB</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">color: rgb(255, 87, 51);</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Red, Green, Blue values (0–255)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">RGBA</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">color: rgba(255, 87, 51, 0.5);</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">RGB + Alpha (transparency)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">HSL</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">color: hsl(11, 100%, 60%);</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Hue, Saturation, Lightness</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">HSLA</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">color: hsla(11, 100%, 60%, 0.5);</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">HSL + Alpha (transparency)</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                    </div>


                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Named Colors — Keep It Simple</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      CSS comes with 140+ named colors. These are great when you just want something quick and readable. You can use names like red, blue, coral, tomato, gold, lavender, and many more.
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          p {'{'} color: tomato; {'}'} <br />
                          h1 {'{'} color: steelblue; {'}'}
                        </code>
                      </div>
                      <strong>Tip:</strong> Named colors are easy to read in code, but they give you limited choices. For real projects, HEX or RGB are more commonly used.
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>HEX Colors — The Web Standard</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      HEX (hexadecimal) colors are the most popular format on the web. They look like this: #FF5733. Each pair of characters represents the Red, Green, and Blue channel from 00 (none) to FF (full).
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          h1 {'{'} color: #FF5733; {'}'} <span className="text-green-700">/* A warm orange-red */</span> <br />
                          p  {'{'} color: #2E86AB; {'}'} <span className="text-green-700">/* A nice teal-blue */</span>
                        </code>
                      </div>
                      <strong>Note:</strong> You can also use shorthand HEX when both digits in each pair are the same. For example, #FFFFFF becomes #FFF and #000000 becomes #000.
                    </div>


                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>RGB Colors — Think Like a Monitor</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      RGB stands for Red, Green, Blue. Each channel is a number from 0 to 255. Mix them like paint — more red + more green = yellow. All values at 255 gives white. All at 0 gives black.
                      <div className='bg-slate-100 text-lg mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          color: rgb(255, 0, 0);   <span className="text-green-700"> /* Pure Red */</span> <br />
                          color: rgb(0, 128, 0);<span className="text-green-700">/* Green */</span> <br />
                          color: rgb(255, 255, 0);<span className="text-green-700">/* Yellow */</span>
                        </code>
                      </div>
                    </div>


                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>RGBA Colors — RGB with Transparency</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      RGBA adds a fourth value — the alpha channel — which controls transparency. It ranges from 0 (fully transparent) to 1 (fully opaque). This is extremely useful for overlays, tooltips, and subtle design effects.
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          color: rgba(255, 0, 0, 1);    <span className="text-green-700">/* Solid red */</span><br />  
                          color: rgba(255, 0, 0, 0.5);  <span className="text-green-700">/* Semi-transparent red */</span><br />
                          color: rgba(255, 0, 0, 0);  <span className="text-green-700">/* Invisible! */</span><br />
                        </code>
                      </div>
                    </div>


                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>HSL and HSLA — Colors for Humans</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      HSL stands for Hue, Saturation, and Lightness. This format is often easier for humans to understand because it maps to how we naturally describe color.
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong>Hue:</strong> The color itself, expressed as a degree on a color wheel (0–360). Red is 0, Green is 120, Blue is 240.</li>
                        <li><strong>Saturation:</strong> How vivid or washed-out the color is (0% = grey, 100% = full color).</li>
                        <li><strong>Lightness:</strong> How bright or dark (0% = black, 50% = normal, 100% = white).</li>
                      </ul>
                      <div className='bg-slate-100 mb-3 mt-3 p-3'>
                        <code className='text-red-700'>
                          color: hsl(0, 100%, 50%);  <span className="text-green-700">/* Bright red */</span> <br />
                          color: hsl(120, 60%, 40%); <span className="text-green-700">/* Forest green */</span> <br />
                          color: hsla(240, 100%, 50%, 0.3); <span className="text-green-700">/* Transparent blue */</span> <br />
                        </code>

                      </div>
                      <strong>Tip:</strong> HSL is great for generating color palettes. You can keep the hue the same and change lightness to get darker or lighter shades easily.
                    </div>




                  </div>
                </div>
              </main>
            );



          case 'm24':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m24" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    CSS Background Colors
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'></h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>What is a Background Color?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      The background-color property sets the color behind an element's content. It fills the area covered by the element, including its padding, but not its margin.
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          div {'{'} background-color: #f0f8ff; {'}'} <span className="text-green-700">/* A light blue background */</span> <br />
                          body {'{'} background-color: #1a1a2e; {'}'} <span className="text-green-700">/* A dark background for the whole page */</span>

                        </code>
                      </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Background Color vs. Color</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      It is easy to mix these up when starting out. Here is the key difference:
                       <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Color</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">color: red;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Changes the TEXT color</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Background-color</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-color: lightblue;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Changes the BACKGROUND color</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                  </div>


                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>Using background-color with RGBA</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      One of the most powerful techniques is using an RGBA background color to create semi-transparent panels or overlays. This lets you layer content beautifully.
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                         .overlay {'{'} <br />
                           background-color: rgba(0, 0, 0, 0.5); <span className="text-green-700">/* Semi-transparent black */</span> <br />
                           color: white; <br />
                         {'}'}
                        </code>
                      </div>
                      This creates a dark overlay effect, commonly used on hero images or modal dialogs.
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Background Shorthand</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      The background property is a shorthand that can set many things at once — color, image, position, and more.
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                         div {'{'} background: #3498db url('hero.jpg') no-repeat center/cover; {'}'}
                        </code>
                      </div>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Transparent Background</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      You can use the keyword transparent to make a background see-through. This is the default for most elements.
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          button {'{'} background-color: transparent; {'}'}
                        </code>
                      </div>
                    </div>




                  </div>
                </div>
              </main>
            );



          case 'm25':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m25" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    Opacity in CSS
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'></h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>What is Opacity?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Opacity controls how see-through an entire element is — including its content, text, borders, and background all together. It accepts values from 0 (completely invisible) to 1 (completely solid).
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          img {'{'} opacity: 0.5; {'}'}  <span className="text-green-700">/* 50% transparent image */</span> <br />
                          div {'{'} opacity: 0;   {'}'}  <span className="text-green-700">/* Hidden completely */</span> <br />
                          div {'{'} opacity: 1;   {'}'}  <span className="text-green-700">/* Fully visible */</span> <br />
                        </code>
                      </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Opacity vs. RGBA — What is the Difference?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      This is one of the most commonly misunderstood areas in CSS. Both can create transparency, but they work differently:
                       <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">opacity: 0.5</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">Affects the ENTIRE element (content, text, children too)</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Everything fades together</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">rgba(0,0,0,0.5)</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">Affects only the BACKGROUND color</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Text stays fully visible</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">transparent</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">Makes background fully see-through</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Children unaffected</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                   Rule of thumb: use opacity when you want everything to fade (like a loading screen). Use RGBA when you only want the background to be transparent.
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Opacity and Child Elements</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Here is a gotcha that trips up many developers: when you set opacity on a parent element, all its children inherit that transparency. You cannot un-inherit it in CSS.
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          .card {'{'} opacity: 0.5; {'}'} <br />
                          .card h2 {'{'} opacity: 1; {'}'} <span className="text-green-700">/* This does NOT fully restore the heading! */</span> <br />
                        </code>
                      </div>
                       <strong>Note:</strong> The child's opacity is multiplied with the parent's. So even with opacity: 1 on the child, it will still appear 50% transparent inside a 0.5 parent. <br />
                       <strong>Tip:</strong> If you want a transparent background but solid text, use background-color: rgba(...) instead of opacity on the container.
                    </div>

                      <h3 className='text-2xl font-bold text-slate-900 mb-3'>Animating Opacity — Fade Effects</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Opacity is perfect for creating smooth fade-in and fade-out animations using CSS transitions.
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          .box {'{'} opacity: 0; transition: opacity 0.4s ease-in-out; {'}'} <br />
                          .box:hover {'{'} opacity: 1; {'}'} <br />
                        </code>
                      </div>
                      This gives a smooth fade-in when the user hovers over the element — a very polished effect with just three extra lines of CSS.
                    </div>





                  </div>
                </div>
              </main>
            );



          case 'm26':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m26" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    Transparency in CSS
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'></h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Ways to Achieve Transparency</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      CSS gives you multiple tools to create transparency effects. Each has a specific use case:
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">opacity property</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">opacity: 0.5;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Entire element becomes see-through</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">RGBA color</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">rgba(255,0,0,0.3)</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Only that specific color is transparent</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">HSLA color</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">hsla(200, 80%, 50%, 0.4)</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Same as RGBA but in HSL format</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">transparent keyword</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background: transparent;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Full transparency, no color at all</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">HEX 8-digit</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">#FF573380</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">HEX with alpha channel (80 = 50%)</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>8-Digit HEX Colors</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Modern CSS supports 8-digit HEX colors where the last two digits control transparency, just like the alpha channel in RGBA.
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          background-color: #FF573380;  <span className='text-green-700'>/* Last 80 = ~50% opacity */</span><br />
                          background-color: #FF5733FF;  <span className='text-green-700'>/* FF = fully opaque */</span><br />
                          background-color: #FF573300;  <span className='text-green-700'>/* 00 = fully transparent */</span><br />
                        </code>
                      </div>
                      <strong>Note:</strong> The alpha hex ranges from 00 (transparent) to FF (fully opaque). This format is supported in all modern browsers.
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Creating a Frosted Glass Effect</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      A modern trend is the frosted glass (glassmorphism) effect. It combines transparency with a backdrop blur:
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          .glass-card {'{'}<br />
                            background-color: rgba(255, 255, 255, 0.15);<br />
                            backdrop-filter: blur(10px);<br />
                            border: 1px solid rgba(255, 255, 255, 0.3);<br />
                            border-radius: 12px;<br />
                          {'}'}<br />
                        </code>
                      </div>
                      <strong>Tip:</strong> backdrop-filter only works when there is something behind the element to blur. Make sure your card is on top of an image or colorful background.
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Transparent Text</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      You can even make text transparent and fill it with a background gradient — a popular heading effect:
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          .gradient-text {'{'}<br />
                            background: linear-gradient(90deg, #FF5733, #3498DB);<br />
                            -webkit-background-clip: text;<br />
                            -webkit-text-fill-color: transparent;<br />
                          {'}'}<br />
                        </code>
                      </div>
                      This paints the gradient directly onto the text characters, creating a stunning multi-color text effect with pure CSS.
                    </div>




                  </div>
                </div>
              </main>
            );



          case 'm27':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m27" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    Quick Reference Summary
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'></h2>  */}
                    {/* <h3 className='text-2xl font-bold text-slate-900 mb-3'>Ways to Achieve Transparency</h3>  */}
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">color</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">color: #333;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Sets text color</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">background-color</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-color: rgba(0,0,0,0.4);</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Sets background fill</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">opacity</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">opacity: 0.7;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Transparency for entire element</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">rgba()</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">rgba(255,100,0,0.5)</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Color with built-in alpha</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">hsla()</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">hsla(200,60%,50%,0.4)</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">HSL color with alpha</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">transparent</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background: transparent;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Fully see-through color</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">#RRGGBBAA</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">#3498DB88</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">8-digit HEX with alpha</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">backdrop-filter</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">backdrop-filter: blur(8px);</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Blur content behind element</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                    </div>
                  </div>
                </div>
              </main>
            );



          case 'm28':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m28" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                    CSS Box Model
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2> 
                    {/* <h3 className='text-2xl font-bold text-slate-900 mb-3'>Ways to Achieve Transparency</h3>  */}
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Every single element on a webpage — a paragraph, a button, an image, a div — is a rectangular box. CSS uses what is called the Box Model to describe how these boxes are sized, spaced, and bordered. br
                      Think of it like a framed picture hanging on a wall:
                      <ul className='list-disc pl-6 text-gray-700 mb-6 mt-3'>
                        <li><strong>The Picture (Content):</strong> The actual picture — the text or image inside the element.</li>
                        <li><strong>The Mat (Padding):</strong> The white mat around the picture inside the frame — adds space between content and border.</li>
                        <li><strong>The Frame (Border):</strong> The picture frame itself — a visible (or invisible) edge around the element.</li>
                        <li><strong>The Wall Space (Margin):</strong> The gap between one frame and the next — space outside the element separating it from neighbors.</li>
                      </ul>
                      Understanding the box model is the single most important concept in CSS layout. Once it clicks, everything else — positioning, flexbox, grid — becomes much easier.
                    </div>
                    <h2 className='text-3xl font-bold text-slate-900 mb-3'>CSS Borders</h2> 
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Is a Border?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      A border is a line drawn around an element, sitting between its padding and its margin. Borders can be decorative, structural, or invisible. You have full control over their thickness, style, and color.
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>The Three Core Border Properties</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Every border has three components. You must set all three for a border to appear:
                     <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                        <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                        <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">border-width</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-width: 2px;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Thickness of the border</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">border-style</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-style: solid;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The line style (solid, dashed, dotted, etc.)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">border-color</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-color: #333;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The color of the border</td>
                      </tr>
                    </tbody>
                   </table>
                   </div>
                   <strong>Note:</strong> If you omit border-style, no border will appear — even if you set a width and color. The style is the minimum required property.
                    </div>
                    <h3 className='text-2xl text-slate-900 font-bold mb-3'>Border Shorthand</h3>
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      The most common way to set a border is with the shorthand property, which combines all three:
                      <div className='bg-slate-100 pl-3 mt-3 mb-3 rounded-lg'>
                        <code className="text-red-700">
                          <span className="text-green-700">/* width | style | color */</span> <br />
                          border: 2px solid #333; <br />
                          border: 4px dashed tomato; <br />
                          border: 1px dotted rgba(0, 0, 0, 0.3); <br />
                        </code>
                      </div>
                       <strong>Tip:</strong> The shorthand order is width, style, color. You can omit color (defaults to the element's text color) or width (defaults to medium), but always include style.
                    </div>

                    <h3 className='text-2xl text-slate-900 font-bold mb-3'>All Border Styles</h3>
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                        <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">none</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-style: none;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">No border — default for most elements</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">solid</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-style: solid;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">A single, continuous solid line</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">dashed</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-style: dashed;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">A line made of dashes</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">dotted</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-style: dotted;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">A line made of dots</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">double</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-style: double;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Two parallel solid lines</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">groove</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-style: groove;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">3D effect — looks carved in</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">ridge</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-style: ridge;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">3D effect — looks raised</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">inset</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-style: inset;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Makes the element look sunken</td>
                             </tr>

                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">outset</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-style: outset;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Makes the element look raised</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">hidden</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-style: hidden;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Same as none but used in table border conflicts</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                     </div>

                     <h3 className='text-2xl text-slate-900 font-bold mb-3'>Setting Individual Sides</h3>
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      You don't have to set all four sides the same way. CSS lets you target each side independently:
                      <div className='bg-slate-100 pl-3 mt-3 mb-3 rounded-lg'>
                        <code className="text-red-700">
                          border-top:    3px solid blue; <br />
                          border-right:  2px dashed red; <br />
                          border-bottom: 4px double green; <br />
                          border-left:   1px dotted orange; <br />
                        </code>
                      </div>
                      You can also split up the sub-properties per side:
                      <div className='bg-slate-100 pl-3 mt-3 mb-3 rounded-lg'>
                        <code className="text-red-700">
                         border-top-width:  4px; <br />
                         border-top-style:  solid; <br />
                         border-top-color:  navy; <br />
                        </code>
                      </div>
                      <strong>Tip:</strong> A very popular trick is to only show a bottom border on headings or inputs for a clean underline effect: border: none; border-bottom: 2px solid #2E6DA4;
                    </div>

                    <h3 className='text-2xl text-slate-900 font-bold mb-3'>border-radius — Rounded Corners</h3>
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      border-radius curves the corners of an element's border box. It is one of the most used CSS properties for modern UI design.
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">4px</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-radius: 4px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Slightly rounded corners — great for buttons</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">12px</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-radius: 12px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Noticeably rounded — card components</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">50%</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-radius: 50%;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Perfect circle (on equal width/height elements)</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">999px</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-radius: 999px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Pill / capsule shape — fully rounded ends</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">10px 30px</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-radius: 10px 30px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Top-left & bottom-right vs top-right & bottom-left</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">0 0 12px 12px</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-radius: 0 0 12px 12px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Only bottom corners rounded</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                      <div className='bg-slate-100 pl-3 mt-3 mb-3 rounded-lg'>
                        <code className="text-red-700">
                          <span className="text-green-700">/* Perfect circle avatar */</span>  <br />
                          .avatar {'{'} width: 60px; height: 60px; border-radius: 50%; {'}'} <br />
                          <span className="text-green-700">/* Pill button */</span> <br />
                          .btn {'{'} border-radius: 999px; padding: 10px 28px; {'}'} <br />
                        </code>
                      </div>
                    </div>

                     <h3 className='text-2xl text-slate-900 font-bold mb-3'>border-image — Image as Border</h3>
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      For truly creative designs, you can use an image or gradient as the border itself using border-image.
                      <div className='bg-slate-100 pl-3 mt-3 mb-3 rounded-lg'>
                        <code className="text-red-700">
                          .fancy-box {"{"} <br />
                            border: 8px solid transparent; <br />
                            border-image: linear-gradient(45deg, #FF5733, #3498DB) 1; <br />
                          {"}"} <br />
                        </code>
                      </div>
                      <strong>Note:</strong> The 1 at the end is the border-image-slice value — it tells CSS how to slice the image for use on the corners and edges.
                    </div>

                    <h3 className='text-2xl text-slate-900 font-bold mb-3'> outline vs. border</h3>
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      The outline property looks similar to border but works very differently:
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">border</th>
                               <th className="border border-slate-400 p-3 text-left">outline</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Takes up space in the layout</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Does NOT take up space — no layout shift</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Can be set per side</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Must be the same on all 4 sides</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Part of the box model</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Drawn outside the border, outside the box model</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Can have border-radius</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Cannot be rounded (in most browsers)</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Used for design / structure</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Used mainly for accessibility (focus indicators)</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                          <strong>Watch out:</strong> Never remove outline: none on interactive elements (buttons, links, inputs) without providing a visible alternative focus style. This is critical for keyboard accessibility.
                      </div>
                    

                  </div>
                </div>
              </main>
            );


          case 'm29':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m29" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     CSS Padding
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Is Padding?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Padding is the space between an element's content and its border. It lives inside the border. If you give an element a background color, the padding area also gets that background color — padding is part of the element visually.
                      <div className='bg-slate-100 p-3 mb-3 mt-3'>
                        <code className='text-red-700'>
                          .card {"{"} <br />
                            padding: 24px; <br />
                            background: #f0f6ff; <br />
                            <span className='text-green-700'>/* The blue background extends into the padding area */</span> <br />
                          {"}"}
                        </code>
                      </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Setting Padding — All the Ways</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Padding can be set with one, two, three, or four values. The values go clockwise from the top:
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">1 Value</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">padding: 20px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">All four sides are 20px</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">2 Values</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">padding: 10px 20px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Top & bottom 10px, left & right 20px</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">3 Values</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">padding: 10px 20px 30px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Top 10px, sides 20px, bottom 30px</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">4 Values</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">padding: 10px 20px 30px 5px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Top, right, bottom, left (clockwise)</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                      You can also target individual sides:
                      <div className='bg-slate-100 p-3 mb-3 mt-4'>
                        <code className='text-red-700'>
                          padding-top:    16px; <br />
                          padding-right:  24px; <br />
                          padding-bottom: 16px; <br />
                          padding-left:   24px; <br />
                        </code>
                      </div>
                      <strong>Tip:</strong> A helpful mnemonic for 4-value shorthand: TRouBLe — Top, Right, Bottom, Left — going clockwise like a clock.
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Padding Units</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Padding accepts any CSS length unit. Here are the most commonly used ones:
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">px</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">padding: 16px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Fixed pixels — predictable, not responsive</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">em</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">padding: 1em;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Relative to the element's font size</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">rem</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">padding: 1.5rem;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Relative to the root font size — best for consistency</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">%</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">padding: 5%;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Percentage of the parent's WIDTH (both horizontal and vertical)</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                         <strong>Watch out:</strong> Percentage padding is calculated from the parent's width — even for padding-top and padding-bottom. This surprises many developers. It is used to create aspect ratios (e.g., padding-top: 56.25% for 16:9 video boxes).
                      </div>

                      <h3 className='text-2xl font-bold text-slate-900 mb-3'>Padding and box-sizing</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      By default, padding adds to the total size of an element. So a 200px-wide box with 20px padding is actually 240px wide. This is called content-box sizing.
                      <div className='bg-slate-100 p-3 mb-3 mt-4'>
                        <code className='text-red-700'>
                         <span className="text-green-700">/* DEFAULT behavior */</span> <br />
                         .box {"{"} width: 200px; padding: 20px; {"}"} <br />
                         <span className="text-green-700">/* Actual rendered width = 200 + 20 + 20 = 240px */</span>
                        </code>
                      </div>
                      Most developers fix this globally with box-sizing: border-box, which includes padding and border inside the stated width:
                      <div className='bg-slate-100 p-3 mb-3 mt-4'>
                        <code className='text-red-700'>
                         *, *::before, *::after {"{"} <br />
                           box-sizing: border-box; <span className="text-green-700">/* Padding is absorbed — no size surprises */</span> <br />
                         {"}"}
                        </code>
                      </div>
                      <strong>Tip:</strong> Always add box-sizing: border-box as a global reset at the top of your CSS. It is used in virtually every modern project and framework.
                    </div>
                    
                  </div>
                </div>
              </main>
            );






          case 'm30':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m30" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     CSS Margins
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Is Margin?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Margin is the space outside the border — the gap between one element and its neighbors. Unlike padding, margin is transparent and never takes on the element's background color. It pushes other elements away.
                      <div className='bg-slate-100 p-3 mb-3 mt-4'>
                        <code className='text-red-700'>
                         .card {"{"} margin: 24px; {"}"}  <span className="text-green-700">/* 24px gap on all sides, outside the border */</span>
                        </code>
                      </div>
             
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Setting Margin — Same Syntax as Padding</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Margin uses the exact same one-to-four value shorthand as padding:
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">1 Value</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">margin: 20px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">All four sides are 20px</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">2 Values</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">margin: 10px 20px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Top & bottom 10px, left & right 20px</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">3 Values</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">margin: 10px 20px 30px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Top 10px, sides 20px, bottom 30px</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">4 Values</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">margin: 10px 20px 30px 5px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Top, right, bottom, left (clockwise)</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                      
                      <div className='bg-slate-100 p-3 mb-3 mt-4'>
                        <code className='text-red-700'>
                          margin-top:    32px; <br />
                          margin-right:  16px; <br />
                          margin-bottom: 32px; <br />
                          margin-left:   16px;
                        </code>
                      </div>
             
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>margin: auto — The Centering Trick</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Setting horizontal margins to auto on a block element with a defined width is the classic way to center it horizontally:
                     <div className='bg-slate-100 p-3 mb-3 mt-4'>
                        <code className='text-red-700'>
                          .container {"{"} <br />
                            width: 800px; <br />
                            margin: 0 auto; <span className="text-green-700">/* 0 top/bottom, auto left/right = centered */</span> <br />
                          {"}"}
                        </code>
                      </div>
                      <strong>Tip:</strong> margin: auto only works for horizontal centering of block elements with a specified width. For vertical centering, use Flexbox or Grid instead.
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Negative Margins</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Unlike padding, margins can be negative. Negative margins pull an element toward its neighbors, allowing elements to overlap. This is a powerful (and sometimes tricky) technique.
                     <div className='bg-slate-100 p-3 mb-3 mt-4'>
                        <code className='text-red-700'>
                          .pulled-up {"{"} <br />
                            margin-top: -20px; <span className="text-green-700">/* Pull this element 20px upward into the one above it */</span> <br />
                          {"}"}
                        </code>
                      </div>
                      <strong>Watch out:</strong> Negative margins can cause elements to overlap and create layout bugs that are hard to debug. Use them intentionally and document why you're using them in a comment.
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Margin Collapse — The Quirky CSS Behavior</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      This is one of the most surprising behaviors in CSS: when two vertical margins meet, they do not add up. Instead, they collapse into a single margin equal to the larger of the two. This only happens vertically (top and bottom), never horizontally.
                     <div className='bg-slate-100 p-3 mb-3 mt-4'>
                        <code className='text-red-700'>
                          <span className="text-green-700">/* Both paragraphs have margin-bottom: 20px and margin-top: 30px */</span> <br />
                          <span className="text-green-700">/* You might expect 50px gap between them... */</span><br />
                          <span className="text-green-700">/* But the actual gap is only 30px (the larger value) */</span>
                        </code>
                      </div>
                      Margin collapse happens in three specific situations:
                      <ul className='list-disc pl-6 txt-gray-700 mb-6 mt-3'>
                        <li><strong>Adjacent siblings:</strong> The bottom margin of one element and the top margin of the next sibling collapse.</li>
                        <li><strong>Parent and first/last child:</strong> If there's no border or padding separating parent and child margins, they collapse together.</li>
                        <li><strong>Empty elements:</strong> An element with no content, border, or padding collapses its own top and bottom margins.</li>
                      </ul>
                       <strong>Tip:</strong> To prevent margin collapse between a parent and its first child, add padding-top: 1px or a border to the parent, or use overflow: hidden on the parent.
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>margin vs. padding — When to Use Which</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Use MARGIN when...</th>
                               <th className="border border-slate-400 p-3 text-left">Use PADDING when...</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">You want space OUTSIDE the element</td>
                               <td className="border border-slate-400 p-3 text-gray-900">You want space INSIDE the element</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">You want to push neighboring elements away</td>
                               <td className="border border-slate-400 p-3 text-gray-900">You want to push content away from the border</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">The background should NOT fill the space</td>
                               <td className="border border-slate-400 p-3 text-gray-900">The background SHOULD fill the space</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Centering a block element (margin: auto)</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Making a clickable area larger (e.g., buttons)</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Adding space between cards or sections</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Adding breathing room inside a card or box</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                    </div>

                  </div>
                </div>
              </main>
            );



          case 'm31':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m31" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     CSS Width
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Setting Width</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      The width property sets the horizontal size of an element's content area (or border box, if box-sizing: border-box is used). Block-level elements stretch to fill their parent by default. Inline elements shrink to fit their content.
                      <div className='bg-slate-100 p-3 mb-3 mt-3 rounded-lg'>
                        <code className='text-red-700'>
                          .box {"{"} width: 400px;      {"}"}   <span className="text-green-700">/* Fixed pixel width */</span> <br />
                          .box {"{"} width: 50%;        {"}"}   <span className="text-green-700">/* 50% of the parent's width */</span> <br />
                          .box {"{"} width: 80ch;      {"}"}    <span className="text-green-700">/* 80 character widths — great for text columns */</span> <br />
                          .box {"{"} width: fit-content; {"}"}  <span className="text-green-700">/* Shrinks to content size */</span> <br />
                        </code>
                      </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Width Values</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">auto</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">width: auto;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Default — block fills parent, inline shrinks to content</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">px / rem</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">width: 320px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Fixed, absolute width</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">%</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">width: 75%;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Percentage of parent element's width</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">vw</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">width: 100vw;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Percentage of the viewport (browser window) width</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">min-content</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">width: min-content;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Shrinks to the smallest possible width without overflow</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">max-content</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">width: max-content;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Expands to fit all content on one line</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">fit-content</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">width: fit-content;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Fits the content but respects available space</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">ch</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">width: 60ch;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Based on the width of the '0' character — ideal for prose</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>min-width and max-width</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      These two properties set boundaries on how narrow or wide an element can get, regardless of what the width property says. They are essential for responsive design.
                      <div className='bg-slate-100 p-3 mb-3 mt-3 rounded-lg'>
                        <code className='text-red-700'>
                          .container {"{"}
                            width: 80%;        <span className="text-green-700"> /* Flexible — scales with viewport */</span><br />
                            min-width: 320px;  <span className="text-green-700"> /* Never gets narrower than 320px */</span><br />
                            max-width: 1200px; <span className="text-green-700"> /* Never gets wider than 1200px */</span><br />
                          {"}"}
                        </code>
                      </div>
                      <strong>Tip:</strong> max-width: 100% on images is a must-have for responsiveness. It prevents images from overflowing their container on small screens. Add it to your global CSS.
                      <div className='bg-slate-100 p-3 mb-3 mt-3 rounded-lg'>
                        <code className='text-red-700'>
                          img {"{"} max-width: 100%; height: auto; {"}"} <span className="text-green-700"> /* Responsive images */</span>
                        </code>
                      </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>100% vs 100vw — A Common Confusion</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">width: 100%</th>
                               <th className="border border-slate-400 p-3 text-left">width: 100vw</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">100% of the parent element's width</td>
                               <td className="border border-slate-400 p-3 text-gray-900">100% of the viewport (browser window) width</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Does not include vertical scrollbar width</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Includes scrollbar width — can cause horizontal scroll</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Safe for containers inside a layout</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Use for full-bleed sections that span edge to edge</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">width: 100%;</td>
                               <td className="border border-slate-400 p-3 text-gray-900">width: 100vw;</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        <strong>Watch out:</strong> Using width: 100vw on elements inside a scrollable page can cause a horizontal scrollbar because 100vw includes the scrollbar width. Use width: 100% for most containers.
                    </div>




                  </div>
                </div>
              </main>
            );




          case 'm32':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m32" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     CSS Height
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Setting Height</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      The height property sets the vertical size of an element. Unlike width, block elements do NOT automatically expand to fill the parent's height — they shrink to fit their content by default. This is why height often needs to be set explicitly.
                      <div className='bg-slate-100 mt-3 mb-3 p-3'>
                        <code className='text-red-700'>
                          .hero {"{"} height: 500px; {"}"}     <span className="text-green-700"> /* Fixed pixel height */</span><br />
                          .section {"{"} height: 100vh; {"}"}  <span className="text-green-700"> /* Full viewport height */</span><br />
                          .card {"{"} height: auto; {"}"}      <span className="text-green-700"> /* Grows to fit content (default) */</span><br />
                        </code>
                      </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Height Values</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">auto</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">height: auto;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Default — element grows to fit its content</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">px/rem</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">height: 300px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Fixed height — content may overflow if too much</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">%</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">height: 50%;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Percentage of parent height — parent must have explicit height!</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">vh</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">height: 100vh;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Percentage of viewport height — 100vh = full screen</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">dvh</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">height: 100dvh;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Dynamic viewport height — adjusts for mobile browser chrome</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">vmin</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">height: 50vmin;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">50% of the smaller viewport dimension (width or height)</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        </div>
                        <h3 className='text-2xl font-bold text-slate-900 mb-3'>The % Height Trap</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Setting height: 50% on an element only works if its parent has an explicit height. If the parent's height is auto (the default), the percentage has nothing to calculate from and is ignored.
                      <div className='bg-slate-100 mt-3 mb-3 p-3 rounded-lg'>
                        <code className="text-red-700">
                          <span className="text-green-700">/* THIS DOES NOT WORK — parent has no explicit height */</span> <br />
                          .parent {"{}"}   <span className="text-green-700">/* height: auto */</span><br />
                          .child  {"{"} height: 50%; {"}"}  <span className="text-green-700">/* 50% of auto = nothing */</span><br />

                          <span className="text-green-700">/* THIS WORKS */</span> <br />
                          .parent {"{"} height: 400px; {"}"} <br />
                          .child  {"{"} height: 50%; {"}"}  <span className="text-green-700">/* 50% of 400px = 200px */</span>
                        </code>
                      </div>
                      <strong>Tip:</strong> Instead of fighting with percentage heights, use Flexbox or Grid to size children proportionally. Set the parent to display: flex and children to flex: 1 for equal height distribution.
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>min-height and max-height</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Just like width, height has min and max variants for setting boundaries:
                      <div className='bg-slate-100 mt-3 mb-3 p-3 rounded-lg'>
                        <code className="text-red-700">
                          .card {"{"} <br />
                            min-height: 200px; <span className="text-green-700"> /* At least 200px tall, grows if content needs it */</span> <br />
                            max-height: 500px;  <span className="text-green-700">/* Never taller than 500px — content may overflow */</span><br />
                          {"}"} <br />
                        </code>
                      </div>
                      min-height: 100vh on the body element ensures the page is always at least as tall as the screen — even when there's very little content:
                      <div className='bg-slate-100 mt-3 mb-3 p-3 rounded-lg'>
                        <code className="text-red-700">
                          body {"{"} min-height: 100vh; {"}"}
                        </code>
                      </div>
                    </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>100vh on Mobile — The dvh Fix</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      A famous issue: on mobile browsers, 100vh includes the browser's address bar, which causes the page to scroll slightly. The newer dvh unit (dynamic viewport height) fixes this by adjusting as the browser chrome appears and disappears.
                      <div className='bg-slate-100 mt-3 mb-3 p-3 rounded-lg'>
                        <code className="text-red-700">
                          .hero {"{"} <br />
                            height: 100dvh; <span className="text-green-700">/* Modern browsers */</span> <br />
                            height: 100vh;  <span className="text-green-700">/* Fallback for older browsers */</span><br />
                          {"}"}
                        </code>
                      </div>
                    </div>

                  </div>
                </div>
              </main>
            );




          case 'm33':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m33" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     Handling Overflow
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Happens When Content Is Too Big?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      When you set a fixed width or height, content can overflow outside the element's boundary. The overflow property controls what happens in that case.
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">visible</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">overflow: visible;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Content spills outside the box — default behavior</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">hidden</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">overflow: hidden;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Content is clipped — anything outside the box disappears</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">scroll</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">overflow: scroll;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Always shows scrollbars, even if not needed</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">auto</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">overflow: auto;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Shows scrollbars only when content actually overflows</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">clip</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">overflow: clip;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Similar to hidden but prevents programmatic scrolling</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            .scrollable-box {"{"} <br />
                              height: 300px; <br />
                              overflow-y: auto;  <span className="text-green-700">/* Vertical scrollbar when needed */</span> <br />
                              overflow-x: hidden; <span className="text-green-700">/* Never scroll horizontally */</span> <br />
                            {"}"}
                          </code>
                        </div>
                        <strong>Tip:</strong> overflow: auto is almost always the better choice over overflow: scroll, because scroll always renders scrollbars — even when they're not needed — which looks awkward on Windows.
                    </div>


                  </div>
                </div>
              </main>
            );






          case 'm34':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m34" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     box-sizing
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Content-Box vs Border-Box</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      box-sizing fundamentally changes how width and height are calculated. This is arguably the most important CSS property to understand for consistent layouts.
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">content-box (default)</th>
                               <th className="border border-slate-400 p-3 text-left">border-box (recommended)</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">width = content only</td>
                               <td className="border border-slate-400 p-3 text-gray-900">width = content + padding + border</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Padding and border ADD to the total size</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Padding and border are INCLUDED in the stated size</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">200px wide + 20px padding = 240px total</td>
                               <td className="border border-slate-400 p-3 text-gray-900">200px wide + 20px padding = 200px total</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Harder to predict layout sizes</td>
                               <td className="border border-slate-400 p-3 text-gray-900">What you set is what you get</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">box-sizing: content-box;</td>
                               <td className="border border-slate-400 p-3 text-gray-900">box-sizing: border-box;</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            <span className="text-green-700">/* Apply to ALL elements — add this at the top of every stylesheet */</span> <br />
                            *, *::before, *::after {"{"} <br />
                              box-sizing: border-box; <br />
                            {"}"} <br />
                          </code>
                        </div>
                        This single reset eliminates an enormous class of layout headaches. It's included by default in Bootstrap, Tailwind, and virtually every CSS framework.
                    </div>


                  </div>
                </div>
              </main>
            );






          case 'm35':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m35" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     Full Quick Reference
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Border Properties</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">border</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border: 2px solid #333;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Shorthand — width, style, color</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">border-width</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-width: 4px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Thickness of all four borders</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">border-style</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-style: dashed;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Line style (solid, dashed, dotted…)</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">border-color</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-color: tomato;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Color of the border</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">border-radius</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-radius: 8px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Rounds corners</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">border-[side]</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-top: 2px solid blue;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Targets one side only</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">border-image</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">border-image: linear-gradient() 1;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Uses gradient/image as border</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">outline</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">outline: 3px solid blue;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Draws outside the border, no layout impact</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        </div>

                        <h3 className='text-2xl font-bold text-slate-900 mb-3'>Padding Properties</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">padding</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">padding: 16px 24px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Shorthand — inner spacing</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">padding-top/right/bottom/left</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">padding-top: 20px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Individual side padding</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        </div>

                        <h3 className='text-2xl font-bold text-slate-900 mb-3'>Margin Properties</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">margin</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">margin: 0 auto;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Shorthand — outer spacing / centering</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">margin-top/right/bottom/left</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">margin-bottom: 32px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Individual side margin</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        </div>

                        <h3 className='text-2xl font-bold text-slate-900 mb-3'>Width Properties</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">width</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">width: 100%;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Element width</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">min-width</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">min-width: 320px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Minimum allowed width</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">max-width</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">max-width: 1200px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Maximum allowed width</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        </div>

                        <h3 className='text-2xl font-bold text-slate-900 mb-3'>Height Properties</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">height</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">height: 100vh;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Element height</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">min-height</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">min-height: 100vh;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Minimum allowed height</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">max-height</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">max-height: 600px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Maximum allowed height</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        </div>

                        <h3 className='text-2xl font-bold text-slate-900 mb-3'>Related Properties</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">box-sizing</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">box-sizing: border-box;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Changes how width/height is calculated</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">overflow</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">overflow: auto;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Thickness of all four borders</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">overflow-x / overflow-y</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">overflow-y: scroll;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Controls overflow per axis</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        </div>

                       
                  </div>
                </div>
              </main>
            );





          case 'm36':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m36" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     CSS Background
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Introduction</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Backgrounds are everywhere on the web — literally. A great background can make a design feel professional, exciting, calm, or playful. But most beginners only know background-color and stop there. <br />
                      This guide dives deep into all the other background properties CSS offers: how to add images, control their position and size, prevent or allow repetition, control layering and clipping, and much more. Each property is explained in plain human language with real examples. <br /> 
                    </div>
                    <h2 className='text-3xl font-bold text-slate-900 mb-3'>background-image</h2> 
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Is background-image?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      The background-image property lets you place an image (or gradient) behind an element's content. Think of it like laying wallpaper inside a box — the wallpaper sits behind everything else inside that box.
                      <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            .hero {"{"} background-image: url('hero.jpg'); {"}"}
                          </code>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Using Gradients as background-image</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Here is a surprise — CSS gradients are technically background images! This means you can use them with background-image just like a photo.
                      <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            <span className="text-green-700">/* Linear gradient (left to right) */</span> <br />
                            .banner {"{"} background-image: linear-gradient(to right, #FF5733, #3498DB); {"}"} <br />

                            <span className="text-green-700">/* Radial gradient (circular burst from center) */</span> <br />
                            .card {"{"} background-image: radial-gradient(circle, #FFD700, #FF6347); {"}"} <br />

                            <span className="text-green-700">/* Conic gradient (sweeping around a center point) */</span> <br />
                            .pie {"{"} background-image: conic-gradient(red 0deg, blue 180deg, green 360deg); {"}"}
                          </code>
                        </div>
                        <strong>Tip:</strong> Gradients are great because they load instantly — no image file needed. Use them for hero sections, buttons, and cards.
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Multiple Background Images</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      CSS supports layering multiple background images on a single element! Just separate them with commas. The first image listed is on top, the last is at the bottom.
                      <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            .layered {"{"} <br />
                              background-image: <br />
                                url('overlay.png'), <br />
                                url('texture.png'), <br />
                                linear-gradient(to bottom, #fff, #ccc); <br />
                            {"}"}
                          </code>
                        </div>
                      Think of each layer like a transparency sheet — they stack on top of each other. Anything transparent in the top layer reveals what is below it.
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>none — Remove a Background Image</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Use background-image: none; to explicitly remove any background image. This is particularly useful in responsive design when you want to remove a decorative image on smaller screens.
                      <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            @media (max-width: 600px) {"{"} <br />
                              .hero {"{"} background-image: none; {"}"} <br />
                            {"}"}
                          </code>
                        </div>
                    </div>
                    
                  </div>
                </div>
              </main>
            );


          case 'm37':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m37" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     background-repeat
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Why Does Repetition Happen?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      By default, a background image tiles itself — repeating horizontally and vertically to fill the entire element. This is great for small textures and patterns, but terrible for photos and large decorative images. background-repeat gives you full control.
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">repeat</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-repeat: repeat;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Tiles in both directions (default)</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">repeat-x</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-repeat: repeat-x;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Tiles only left-to-right</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">repeat-y</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-repeat: repeat-y;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Tiles only top-to-bottom</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">no-repeat</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-repeat: no-repeat;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Shows image exactly once, no tiling</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">space</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-repeat: space;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Tiles without clipping, adds space between</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">round</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-repeat: round;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Tiles and stretches to avoid clipping</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        <strong>Tip:</strong> For photographs and hero images, always use no-repeat. For seamless patterns and textures, repeat is perfect.
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Two-Value Syntax</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      background-repeat also accepts two separate values — one for the horizontal axis and one for the vertical axis.
                      <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                           <span className="text-green-700">/* Repeat horizontally only (same as repeat-x) */</span> <br />
                           background-repeat: repeat no-repeat; <br />
                                       
                           <span className="text-green-700">/* Tile vertically but space horizontally */</span> <br />
                           background-repeat: space repeat;
                          </code>
                        </div>
                    </div>
                    
                  </div>
                </div>
              </main>
            );




          case 'm38':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m38" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     background-position
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Placing Your Background Image</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      background-position controls where the background image is anchored inside its element. By default, images start at the top-left corner. You can move them with keywords, percentages, or exact pixel values.
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">top left</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-position: top left;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Image anchors to top-left corner</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">center center</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-position: center center;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Image is perfectly centered</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">bottom right</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-position: bottom right;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Image anchors to bottom-right</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">50% 50%</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-position: 50% 50%;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Same as center center</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">20px 40px</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-position: 20px 40px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">20px from left, 40px from top</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">right 10px bottom 20px</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-position: right 10px bottom 20px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Edge-relative offset</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Percentage Positioning Explained</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Percentage values in background-position work in a unique way. 0% 0% means top-left. 50% 50% means center. 100% 100% means bottom-right. The percentage is calculated relative to the difference between the element size and the image size, not the element size alone.
                      <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                           .card {"{"} background-position: 75% 25%; {"}"}  <span className='text-green-700'>/* 3/4 across, 1/4 down */</span>
                          </code>
                        </div>
                    </div>
                    
                  </div>
                </div>
              </main>
            );




          case 'm39':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m39" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     background-size
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Controlling How Big the Image Is</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                        background-size controls the dimensions of the background image inside its container. This is one of the most important properties for responsive and polished designs.
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">auto</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-size: auto;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Image renders at its natural size (default)</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">cover</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-size: cover;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Scales image to cover entire element — may crop</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">contain</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-size: contain;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Scales image to fit fully inside — may leave gaps</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">100% 100%</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-size: 100% 100%;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Stretches image to exactly fill the element</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">300px 200px</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-size: 300px 200px;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Sets exact width and height in pixels</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">50% auto</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-size: 50% auto;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Half the container width, height scales proportionally</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>cover vs. contain — The Key Difference</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      These two values are used constantly and are often confused. Here is a simple mental model:
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">cover</th>
                               <th className="border border-slate-400 p-3 text-left">contain</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Image fills 100% of the element — no empty space</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Image fits fully inside — may show empty space</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Image may be cropped on edges</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Image is never cropped</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Use for hero sections, full-screen backgrounds</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Use for logos, icons, product images</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">background-size: cover;</td>
                               <td className="border border-slate-400 p-3 text-gray-900">background-size: contain;</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                    
                      <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            <span className="text-green-700">/* Classic full-screen hero */</span> <br />
                            .hero {"{"} <br />
                              background-image: url('hero.jpg'); <br />
                              background-size: cover; <br />
                              background-position: center; <br />
                              background-repeat: no-repeat; <br />
                            {"}"}
                          </code>
                        </div>
                    </div>
                    
                  </div>
                </div>
              </main>
            );




          case 'm40':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m40" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     background-origin
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Where Does the Background Start?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      background-origin controls which box the background image is positioned relative to. Every HTML element has three invisible boxes around it — the content box, the padding box, and the border box. background-origin decides which of these is used as the reference point.
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">padding-box</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-origin: padding-box;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Background starts from the padding edge (default)</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">border-box</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-origin: border-box;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Background extends under the border</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">content-box</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-origin: content-box;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Background starts from the content edge only</td>
                             </tr>
                             
                           </tbody>
                          </table>
                        </div>
                        Think of it this way: imagine your element is a picture frame. The content-box is the picture itself, the padding-box includes the mat inside the frame, and the border-box includes the frame itself.
                    </div>
                    {/* <h3 className='text-2xl font-bold text-slate-900 mb-3'>cover vs. contain — The Key Difference</h3>  */}
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                     
                      <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            .box {"{"}
                              border: 10px dashed black; <br />
                              padding: 20px; <br />
                              background-image: url('pattern.png'); <br />
                              background-origin: content-box; <span className="text-green-700">/* pattern only behind text */</span> <br />
                            {"}"}
                          </code>
                        </div>
                    </div>
                    
                  </div>
                </div>
              </main>
            );





          case 'm41':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m41" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     background-clip
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Where Does the Background Stop?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      While background-origin controls where the background starts, background-clip controls where it is cut off — where it stops being visible. Same three boxes apply, plus a special text option.
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">border-box</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-clip: border-box;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Background visible behind the border (default)</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">padding-box</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-clip: padding-box;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Background stops at the padding edge — border area is clear</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">content-box</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-clip: content-box;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Background only visible behind actual content — no padding</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">text</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-clip: text;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Background only visible through the text characters!</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        Think of it this way: imagine your element is a picture frame. The content-box is the picture itself, the padding-box includes the mat inside the frame, and the border-box includes the frame itself.
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>The Magical text Clip — Gradient Text</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                     background-clip: text is one of the coolest CSS tricks. It clips the background so only the text characters reveal the background image or gradient. This creates stunning gradient text effects with no images.
                      <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            .gradient-heading {"{"}
                              background-image: linear-gradient(135deg, #FF5733, #3498DB, #2ECC71); <br />
                              background-clip: text; <br />
                              -webkit-background-clip: text;       <span className="text-green-700">/* Required for Chrome/Safari */</span> <br />
                              -webkit-text-fill-color: transparent; <span className="text-green-700">/* Makes text see-through */</span> <br />
                              color: transparent;                   <span className="text-green-700">/* Fallback */</span> <br />
                            {"}"}
                          </code>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>origin vs. clip — Working Together</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      background-origin and background-clip are often used together for fine-grained control. A common pattern is to have the background start from the content-box but also clip to the content-box, ensuring the background never touches the padding or border.
                      <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            .tight-bg {"{"} <br />
                              background-origin: content-box; <br />
                              background-clip: content-box; <br />
                            {"}"}
                          </code>
                        </div>
                    </div>
                    
                    
                  </div>
                </div>
              </main>
            );






          case 'm42':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m42" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     background-attachment
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Does the Background Scroll with the Page?</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      background-attachment controls whether the background image moves when the user scrolls, or stays fixed in place like a window looking out at scenery. This is what creates the famous parallax scrolling effect.
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">scroll</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-attachment: scroll;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Background scrolls with the element (default behavior)</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">fixed</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-attachment: fixed;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Background is fixed to the viewport — does not scroll</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">local</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-attachment: local;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Background scrolls with the element's own content</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        Think of it this way: imagine your element is a picture frame. The content-box is the picture itself, the padding-box includes the mat inside the frame, and the border-box includes the frame itself.
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>scroll vs. fixed vs. local — Explained Simply</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Imagine your background is a painting on the wall of a train car (your element):
                      <ul className='list-disc pl-6 space-y-2 txt-gray-700 mb-6'>
                        <li><strong>Scroll:</strong> The painting is glued to the wall of the train car. When the whole train moves, the painting moves with it. This is the default.</li>
                        <li><strong>Fixed:</strong> The painting is actually painted on the outside of the tunnel. No matter where the train goes, you always see the same tunnel painting through the window. This creates a parallax effect.</li>
                        <li><strong>Local:</strong> The painting is glued to the seat cushion. If you slide the cushion around inside the car, the painting slides too.</li>
                      </ul>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Creating a Parallax Effect</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      The fixed value is used to create a simple parallax scrolling effect. As the page scrolls, the background stays still while the content moves — giving a 3D depth impression.
                      <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            .parallax-section {"{"} <br />
                              background-image: url('mountains.jpg'); <br />
                              background-attachment: fixed; <br />
                              background-size: cover; <br />
                              background-position: center; <br />
                              height: 400px; <br />
                            {"}"}
                          </code>
                        </div>
                    </div>
                    
                    
                  </div>
                </div>
              </main>
            );



          case 'm43':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m43" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     background-blend-mode
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Blending Backgrounds Like a Photo Editor</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      background-blend-mode lets you blend background layers (image + color, or multiple images) together using Photoshop-style blending modes. The result is applied to each background layer against what is behind it.
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">normal</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-blend-mode: normal;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">No blending — default stacking</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">multiply</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-blend-mode: multiply;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Darkens — white disappears, black stays</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">screen</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-blend-mode: screen;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Lightens — black disappears, white stays</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">overlay</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-blend-mode: overlay;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Dark areas darker, light areas lighter</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">darken</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-blend-mode: darken;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Shows the darker of two pixels</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">lighten</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-blend-mode: lighten;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Shows the lighter of two pixels</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">color-dodge</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-blend-mode: color-dodge;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Brightens the image to reveal the blend layer</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">color-burn</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-blend-mode: color-burn;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Darkens by increasing contrast</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">difference</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-blend-mode: difference;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Inverts based on difference between layers</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">luminosity</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-blend-mode: luminosity;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Applies brightness of top, hue/saturation of bottom</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>A Practical Example — Color Tint on Photo</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      One of the most common uses is adding a color tint over a background photo without an overlay div. Combine a background-image with a background-color, then blend them:
                      <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            .tinted-hero {"{"} <br />
                              background-image: url('photo.jpg'); <br />
                              background-color: rgba(52, 152, 219, 0.6); <span className="text-green-700">/* blue tint */</span> <br />
                              background-blend-mode: multiply; <br />
                              background-size: cover; <br />
                              background-position: center; <br />
                            {"}"}
                         </code>
                        </div>
                    </div>
                    
                    
                    
                  </div>
                </div>
              </main>
            );





          case 'm44':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m44" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     The background Shorthand
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Writing It All in One Line</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Rather than writing 6–8 separate background properties, CSS lets you combine them all in one shorthand property called simply background. This makes your code more compact and readable. <br />
                      The formal order for the shorthand is:
                        <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            background: [color] [image] [position] / [size] [repeat] [origin] [clip] [attachment];
                          </code>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Real-World Examples</h3> 
                    <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                            <span className="text-green-700">/* Simple photo hero */</span>
                            .hero {"{"} <br />
                              background: url('hero.jpg') center / cover no-repeat; <br />
                            {"}"} <br />

                            <span className="text-green-700">/* Tinted gradient over image */</span> <br />
                            .section {"}"} <br />
                              background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), <br />
                                          url('city.jpg') center / cover no-repeat fixed; <br />
                            {"}"} <br />

                            <span className="text-green-700">/* Pattern tile with fallback color */</span> <br />
                            .pattern-box {"{"} <br />
                              background: #f0f0f0 url('dots.svg') repeat top left; <br />
                            {"}"}
                          </code>
                        </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Shorthand Quick Reference</h3> 
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           {/* <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead> */}
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">Shorthand Part</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Equivalent Property</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">color</td>
                               <td className="border border-slate-400 p-3 text-gray-900">background-color</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">url('...')</td>
                               <td className="border border-slate-400 p-3 text-gray-900">background-image</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">center / cover</td>
                               <td className="border border-slate-400 p-3 text-gray-900">background-position / background-size</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">no-repeat</td>
                               <td className="border border-slate-400 p-3 text-gray-900">background-repeat</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">border-box (first value)</td>
                               <td className="border border-slate-400 p-3 text-gray-900">background-origin</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">border-box (second value)</td>
                               <td className="border border-slate-400 p-3 text-gray-900">background-clip</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900">scroll</td>
                               <td className="border border-slate-400 p-3 text-gray-900">background-attachment</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                    
                    
                    
                  </div>
                </div>
              </main>
            );




          case 'm45':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m45" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     Multiple Backgrounds
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    {/* <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — The CSS Box Model</h2>  */}
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Stacking Multiple Backgrounds</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      CSS allows you to apply multiple backgrounds to a single element. You simply list the backgrounds separated by commas. The first one in the list is on top (closest to the viewer), and each subsequent one is behind it.
                        <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg'>
                          <code className="text-red-700">
                            .multi-bg {"{"} <br />
                              background: <br />
                                url('sparkles.png') top right no-repeat,   <span className="text-green-700">/* Layer 1 - top */</span> <br />
                                url('texture.png') repeat,                 <span className="text-green-700">/* Layer 2 - middle */</span> <br />
                                linear-gradient(to bottom, #1a1a2e, #16213e); <span className="text-green-700">/* Layer 3 - bottom */</span> <br />
                            {"}"}
                          </code>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Controlling Each Layer</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Every background sub-property can also accept a comma-separated list to style each background layer individually.
                    <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                            .layered {"{"} <br />
                              background-image: url('top.png'), url('bottom.png'); <br />
                              background-size: contain, cover; <br />
                              background-position: top center, center; <br />
                              background-repeat: no-repeat, no-repeat; <br />
                            {"}"}
                          </code>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Full Quick Reference</h3> 
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Value / Keyword</th>
                               <th className="border border-slate-400 p-3 text-left">CSS Example</th>
                               <th className="border border-slate-400 p-3 text-left">Effect / Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">background-image</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-image: url('img.jpg');</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Sets the background image or gradient</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">background-repeat</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-repeat: no-repeat;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Controls how (or if) the image tiles</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">background-position</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-position: center;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Sets where the image is placed</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">background-size</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-size: cover;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Controls the size of the image</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">background-origin</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-origin: content-box;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Sets the reference box for positioning</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">background-clip</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-clip: text;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Sets where the background is visible</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">background-attachment</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-attachment: fixed;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Controls scrolling behavior</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">background-blend-mode</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background-blend-mode: multiply;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Blends background layers together</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">background (shorthand)</td>
                               <td className="border border-slate-400 p-3 text-gray-900"><code className="text-red-700">background: url() center/cover no-repeat;</code></td>
                               <td className="border border-slate-400 p-3 text-gray-900">Combines all properties in one line</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                    
                    
                    
                  </div>
                </div>
              </main>
            );





          case 'm46':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m46" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     CSS Transitions
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — Why Motion Matters</h2> 
                    {/* <h3 className='text-2xl font-bold text-slate-900 mb-3'>Stacking Multiple Backgrounds</h3>  */}
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Think about the last time you visited a website that just felt right. The buttons responded smoothly, elements slid into view gracefully, and nothing felt jarring or abrupt. That feeling? It comes from well-crafted CSS animations and transitions. <br />
                      Motion isn't just decoration — it's a communication tool. It tells users that something happened, guides their attention, and makes your interface feel alive. CSS gives us two powerful tools for this: Transitions and Animations.
                        <div className="bg-gray-100 border-l-4 border-blue-500 p-4 text-gray-700 text-lg leading-relaxed">
                          <span className="text-blue-600 font-semibold">Transitions</span>{" "}
                          are for simple A-to-B changes triggered by events (hover, focus, class changes).{" "} <br />
                          <span className="text-purple-600 font-semibold">Animations</span>{" "}
                          are for complex, multi-step sequences that can loop and run independently.
                        </div>
                    </div>
                    <h2 className='text-3xl font-bold text-slate-900 mb-3'>CSS Transitions</h2> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      A CSS transition is like putting your element on a gentle speed limit. Instead of snapping instantly from one style to another, it eases into the change over time. You trigger it, and the browser smoothly animates between the two states.
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>The Core Syntax</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      The shorthand property packs everything into one line:
                       <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-gray-700">
                            transition: property duration timing-function delay;
                          </code>
                        </div>
                        Or use individual longhand properties for clarity:
                        <div className='bg-slate-100 mb-3 mt-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-gray-700">
                            transition-property:        color; <br />
                            transition-duration:        0.3s; <br />
                            transition-timing-function: ease-in-out; <br />
                            transition-delay:           0.1s; <br />
                          </code>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Transition Properties Reference</h3> 
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Property</th>
                               <th className="border border-slate-400 p-3 text-left">Values</th>
                               <th className="border border-slate-400 p-3 text-left">What It Does</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">transition-property</td>
                               <td className="border border-slate-400 p-3 text-gray-900">all | none | color | opacity | transform …</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Which CSS property to animate. Use specific names for better performance.</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">transition-duration</td>
                               <td className="border border-slate-400 p-3 text-gray-900">0.3s | 300ms | 1s</td>
                               <td className="border border-slate-400 p-3 text-gray-900">How long the transition takes. Keep UI feedback under 300ms for snappiness.</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">transition-timing-function</td>
                               <td className="border border-slate-400 p-3 text-gray-900">ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier()</td>
                               <td className="border border-slate-400 p-3 text-gray-900">The speed curve — how acceleration changes over the duration.</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">transition-delay</td>
                               <td className="border border-slate-400 p-3 text-gray-900">0s | 0.1s | 500ms</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Wait before starting. Useful for staggered effects when multiple elements animate.</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                        <h3 className='text-2xl font-bold text-slate-900 mb-3'>Timing Functions Explained</h3> 
                        <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                          The timing function is where transitions get their personality. Here's how to think about each one:
                          <ul className='list-disc pl-6 space-y-2 text-gray-700 mt-3 mb-6'>
                            <li><strong>ease (default):</strong> A natural feeling curve — starts slow, peaks in the middle, eases off at the end. Great for most UI interactions.</li>
                            <li><strong>linear:</strong> Constant speed from start to finish. Best for looping animations or progress bars — but can feel mechanical.</li>
                            <li><strong>ease-in:</strong> Starts slowly then accelerates. Good for elements that are 'leaving' the screen (exits, dismissals).</li>
                            <li><strong>ease-out:</strong> Starts fast then decelerates into the final state. Perfect for elements entering the screen.</li>
                            <li><strong>ease-in-out:</strong> Slow start and slow end with a fast middle. Great for things that are moving across the screen.</li>
                            <li><strong>cubic-bezier():</strong> Full creative control over the speed curve with four control points. Use cubic-bezier.com to preview.</li>
                          </ul>
                        </div>

                        <h3 className='text-2xl font-bold text-slate-900 mb-3'>Real-World Transition Examples</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <strong className="text-2xl">Button Hover Effect</strong>
                     <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                           .btn {"{"} <br />
                              background-color: #2563EB; <br />
                              color: white; <br />
                              transform: scale(1); <br />
                              transition: background-color 0.2s ease-out, <br />
                                          transform 0.15s ease-out, <br />
                                          box-shadow 0.2s ease-out; <br />
                            {"}"} <br />
                            .btn:hover {"{"} <br />
                              background-color: #1D4ED8; <br />
                              transform: scale(1.03); <br />
                              box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4); <br />
                            {"}"}
                          </code>
                        </div>
                        <strong className="text-2xl">Card Reveal on Hover</strong>
                     <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                           .card-overlay {"{"} <br />
                             opacity: 0; <br />
                             transform: translateY(10px); <br />
                             transition: opacity 0.3s ease-out, <br />
                                         transform 0.3s ease-out; <br />
                           {"}"} <br />
                           .card:hover .card-overlay {"{"} <br />
                             opacity: 1; <br />
                             transform: translateY(0); <br />
                           {"}"}
                          </code>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Transitioning Multiple Properties</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      You can transition multiple properties at once — just separate them with commas. This is much better than using 'all', which is a performance trap:
                     <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                           <span className="text-green-700">/* AVOID: Triggers layout recalculation on all changes */</span> <br />
                          transition: all 0.3s ease; <br />
                          <span className="text-green-700">/* PREFER: Only what you actually need */</span> <br />
                          transition: opacity 0.3s ease-out, <br />
                          transform 0.3s ease-out; <br />
                          </code>
                        </div>
                      </div>
                    
                    
                    
                    
                  </div>
                </div>
              </main>
            );




          case 'm47':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m47" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     CSS Animations
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction — CSS Animations</h2> 
                    {/* <h3 className='text-2xl font-bold text-slate-900 mb-3'>Stacking Multiple Backgrounds</h3>  */}
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      While transitions need an external trigger (a hover, a click, a class change), animations can start on their own, loop forever, and follow a complex multi-step choreography. They're defined in two parts: the @keyframes rule and the animation properties.
                    </div>
                    
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>The @keyframes Rule</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Think of @keyframes as a screenplay for your element. You define what it looks like at specific moments in time:
                       <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                            @keyframes slideInFromLeft {"{"} <br />
                             &nbsp; 0%   {"{"} transform: translateX(-100%); opacity: 0; {"}"} <br />
                              &nbsp; 60%  {"{"} transform: translateX(10px);  opacity: 1; {"}"} <br />
                              &nbsp; 100% {"{"} transform: translateX(0);     opacity: 1; {"}"} <br />
                            {"}"}
                          </code>
                        </div>
                        You can also use the 'from' and 'to' keywords as shorthand for 0% and 100%:
                        <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                            @keyframes fadeIn {"{"} <br />
                             &nbsp; from {"{"} opacity: 0; {"}"} <br />
                              &nbsp; to   {"{"} opacity: 1; {"}"} <br />
                            {"}"}
                          </code>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Animation Properties Reference</h3> 
                      <div className=" text-lg table-container mt-3 border border-slate-400 mb-6">
                          <table className="w-full border-collapse">
                           <thead className="bg-slate-100">
                             <tr>
                               <th className="border border-slate-400 p-3 text-left">Property</th>
                               <th className="border border-slate-400 p-3 text-left">Values</th>
                               <th className="border border-slate-400 p-3 text-left">What It Does</th>
                             </tr>
                           </thead>
                           <tbody className="bg-white">
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">animation-name</td>
                               <td className="border border-slate-400 p-3 text-gray-900">fadeIn | slideUp | myAnim</td>
                               <td className="border border-slate-400 p-3 text-gray-900">The name of your @keyframes rule to apply.</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">animation-duration</td>
                               <td className="border border-slate-400 p-3 text-gray-900">1s | 500ms | 0.8s</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Total time for one full cycle of the animation.</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">animation-timing-function</td>
                               <td className="border border-slate-400 p-3 text-gray-900">ease | linear | steps(4)</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Speed curve (same options as transition timing). Also supports steps() for frame-by-frame.</td>
                             </tr>
                              <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">animation-delay</td>
                               <td className="border border-slate-400 p-3 text-gray-900">0s | 0.5s | -0.2s</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Pause before starting. Negative values start mid-animation.</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">animation-iteration-count</td>
                               <td className="border border-slate-400 p-3 text-gray-900">1 | 3 | infinite</td>
                               <td className="border border-slate-400 p-3 text-gray-900">How many times it plays. 'infinite' for looping animations.</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">animation-direction</td>
                               <td className="border border-slate-400 p-3 text-gray-900">normal | reverse | alternate | alternate-reverse</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Which direction each cycle plays. 'alternate' bounces back and forth.</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">animation-fill-mode</td>
                               <td className="border border-slate-400 p-3 text-gray-900">none | forwards | backwards | both</td>
                               <td className="border border-slate-400 p-3 text-gray-900">What styles apply before/after the animation runs.</td>
                             </tr>
                             <tr>
                               <td className="border border-slate-400 p-3 text-gray-900 font-bold">animation-play-state</td>
                               <td className="border border-slate-400 p-3 text-gray-900">running | paused</td>
                               <td className="border border-slate-400 p-3 text-gray-900">Pause or resume an animation — great for hover-to-pause interactions.</td>
                             </tr>
                           </tbody>
                          </table>
                        </div>
                         <h3 className='text-2xl font-bold text-slate-900 mb-3'>Real-World Transition Examples</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      All animation properties can be combined in the shorthand. The order is:
                     <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                           animation: name duration timing-function delay
                           &nbsp;&nbsp;&nbsp;&nbsp;iteration-count direction fill-mode play-state;
                          </code>
                        </div>
                        <strong className="text-2xl">Real-world example:</strong>
                     <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                           .hero-title {"{"} <br />
                             animation: slideInFromLeft 0.8s ease-out 0.2s both; <br />
                           {"}"} <br />
                          <span className="text-green-700"> /* name: slideInFromLeft  |  duration: 0.8s      */</span><br />
                          <span className="text-green-700"> /* timing: ease-out       |  delay: 0.2s         */</span><br />
                          <span className="text-green-700"> /* fill-mode: both (keeps end state after)       */</span><br />
                          </code>
                        </div>
                    </div>
                        <h3 className='text-2xl font-bold text-slate-900 mb-3'>animation-fill-mode — The Often Misunderstood One</h3> 
                        <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                          Fill mode controls what happens to an element before and after its animation. This is one of the most important properties to understand:
                          <ul className='list-disc pl-6 space-y-2 text-gray-700 my-3'>
                            <li><strong>none:</strong> Element shows default styles before and after. Animation only applies during playback.</li>
                            <li><strong>forwards:</strong> After the animation ends, the element keeps the styles from the final keyframe (100%). This is what you want most of the time.</li>
                            <li><strong>backwards:</strong> Before the animation starts (during delay), the element shows styles from the first keyframe (0%).</li>
                            <li><strong>both:</strong> Applies both forwards and backwards. Almost always what you want when using fill-mode.</li>
                          </ul>
                        </div>
                        <h3 className='text-2xl font-bold text-slate-900 mb-3'>animation-direction Options</h3> 
                        <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                          Direction controls the playback order for each iteration:
                          <ul className='list-disc pl-6 space-y-2 text-gray-700 my-3'>
                            <li><strong>normal:</strong> The default — plays from 0% to 100% every time.</li>
                            <li><strong>reverse:</strong> Plays from 100% to 0% every time.</li>
                            <li><strong>alternate:</strong> Odd iterations go 0% to 100%, even iterations go 100% to 0%. Creates a smooth bouncing effect.</li>
                            <li><strong>alternate-reverse:</strong> Like alternate but starts with the reverse.</li>
                          </ul>
                        </div>

                        <h3 className='text-2xl font-bold text-slate-900 mb-3'>Practical Animation Examples</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <strong className="text-2xl">Page Load Fade-In Sequence</strong>
                     <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                            @keyframes fadeUp {"{"} <br />
                            &nbsp; from {"{"} opacity: 0; transform: translateY(20px); {"}"} <br />
                             &nbsp; to   {"{"} opacity: 1; transform: translateY(0);    {"}"} <br />
                            {"}"} <br />
                            .nav     {"{"} animation: fadeUp 0.5s ease-out both; {"}"} <br />
                            .hero    {"{"} animation: fadeUp 0.5s ease-out 0.1s both; {"}"} <br />
                            .section {"{"} animation: fadeUp 0.5s ease-out 0.2s both; {"}"}
                          </code>
                        </div>
                        <strong className="text-2xl">Infinite Pulse / Loading Spinner</strong>
                     <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                           @keyframes pulse {"{"} <br />
                           &nbsp; 0%, 100% {"{"} transform: scale(1);    opacity: 1;   {"}"} <br />
                           &nbsp; 50%      {"{"} transform: scale(1.05); opacity: 0.7; {"}"} <br />
                          {"}"} <br />
                          .badge {"{"} <br />
                           &nbsp; animation: pulse 2s ease-in-out infinite; <br />
                          {"}"}
                          </code>
                        </div>
                        <strong className="text-2xl">Pause on Hover</strong>
                     <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                           .card:hover .icon {"{"} <br />
                            &nbsp; animation-play-state: paused; <br />
                           {"}"}
                          </code>
                        </div>
                    </div>

                        
                    
                    
                    
                    
                  </div>
                </div>
              </main>
            );




          case 'm48':
            return(
              <main>
                <div className='animate-fade-in-up'>
                  <h1 id="m48" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                     
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    <h2 className='text-3xl font-bold text-slate-900 mb-3'>Quick Reference Cheat Sheet</h2> 
                    {/* <h3 className='text-2xl font-bold text-slate-900 mb-3'>Stacking Multiple Backgrounds</h3>  */}
                    
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Transition Shorthand</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                       <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                           transition: &lt;property&gt; &lt;duration&gt; &lt;timing&gt; &lt;delay&gt;; <br />
                           <span className="text-green-700">/* Example: */</span> <br />
                           transition: transform 0.3s ease-out 0s;
                          </code>
                        </div>
                      </div>

                      <h3 className='text-2xl font-bold text-slate-900 mb-3'>Animation Shorthand</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                       <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                           animation: &lt;name&gt; &lt;duration&gt; &lt;timing&gt; &lt;delay&gt;
                            &lt;count&gt; &lt;direction&gt; &lt;fill-mode&gt;;
                           <span className='text-green-700'>/* Example: */</span> <br />
                           animation: fadeUp 0.6s ease-out 0.1s 1 normal both;
                          </code>
                        </div>
                      </div>

                      <h3 className='text-2xl font-bold text-slate-900 mb-3'>Complete @keyframes Template</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                       <div className='bg-slate-100 my-3 p-3 rounded-lg text-lg leading-relaxed'>
                          <code className="text-red-700">
                           @keyframes myAnimation {"{"} <br />
                             &nbsp; 0%   {"{"} /* starting state  */ {"}"} <br />
                             &nbsp; 50%  {"{"} /* midpoint state  */ {"}"} <br />
                             &nbsp; 100% {"{"} /* ending state    */ {"}"} <br />
                            {"}"} <br />
                            .element {"{"} <br />
                             &nbsp; animation: myAnimation 1s ease-in-out infinite alternate both; <br />
                            {"}"}
                          </code>
                        </div>
                      </div>

                      <h3 className='text-2xl font-bold text-slate-900 mb-3'>The Performance Checklist</h3> 
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Animate only transform and opacity when possible</li>
                        <li>Use will-change: transform on elements that will animate</li>
                        <li>Include @media (prefers-reduced-motion) support</li>
                        <li>Keep durations under 300ms for interactive elements</li>
                        <li>Avoid animating layout-triggering properties</li>
                        <li>Test on real mobile devices — they're slower than your laptop</li>
                      </ul>
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
      technology="css" 
      onThisPage={allHeadings}
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

export default function CSSTutorialPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <CSSContent />
    </Suspense>
  );
}
