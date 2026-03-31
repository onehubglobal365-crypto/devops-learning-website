'use client';

import { Suspense, useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import TechLayout from '@/components/layout/tech-layout';

function HTMLContent() {
  const [activeSection, setActiveSection] = useState('m1');

  const allHeadings = useMemo(() => [
    { id: 'm1', title: 'intoduction to HTML' },
    { id: 'm2', title: 'HTML - Heading Tags' },
    { id: 'm3', title: 'HTML - Multimedia Tags' },
    { id: 'm4', title: 'HTML - List Tags' },
    { id: 'm5', title: 'HTML - Text Tags' },
    { id: 'm6', title: 'HTML - Table Tags' },
    { id: 'm7', title: 'HTML - Paragraph Tags' },
    { id: 'm8', title: 'Introduction to front-end' },
    { id: 'm9', title: 'HTML - Semantic tags' },
    { id: 'm10', title: 'HTML - div,section,nav,footer' },
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
           case 'm1':
        return (
          <main>
            <div className='animate-fade-in-up'>
              <h1 id="m1" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                Introduction to HTML.
              </h1>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">What is HTML?</h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  HTML stands for HyperText Markup Language. In plain English, it’s the set of instructions we use to organize content on a screen. Every time you see a bold heading, a clickable button, or an image on a blog, you’re looking at HTML in action. <br />
                  Breaking down the name
                  To understand the "human" side of HTML, it helps to split the name in two:
                  <ul className='list-none pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong className="text-xl">HyperText:</strong> This is just a fancy word for connectivity. It’s the "web" in World Wide Web. It refers to the links that allow you to jump from one page to another. Without HyperText, the internet would just be a pile of separate, lonely documents.</li>
                    <li><strong className="text-xl">Markup Language:</strong> Imagine you have a plain text document and you take a highlighter or a pen to mark where the "titles" go or where a "list" should start. That is exactly what HTML does. You use tags (like &lt;p&gt; for paragraph) to "mark up" the text so the browser knows, "Hey, this part is a quote," or "This part is a table."</li>
                  </ul>
                {/* <h2 className="text-3xl font-bold text-slate-900 mb-3"></h2> */}


                  <strong className='text-2xl'>Why it matters</strong><br />
                  HTML doesn't handle the "pretty" stuff (like colors or animations)—that’s a job for its friends, CSS and JavaScript. Instead, HTML focuses on the structure. It tells the browser: <br />
                  "This is a heading, this is a picture of a cat, and this is a link to my contact page." <br />
                  Without it, your browser wouldn't know how to turn a wall of text into a functional, readable website. <br />

                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">What is an HTML Element?</h3>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  An HTML element is a basic building block to create a webpage, and It is created by a start tag, content, and end tag. In an HTML element, the content is placed between a start and end tag. <br />
                  The basic syntax of an HTML element is − <br />
                  &lt;tag_name&gt;content&lt;/tag_name&gt; <br />
                  Consider the following example demonstrates an HTML element  <br />
                  &lt;h1&gt;It is top-level heading&lt;/h1&gt; <br />
                  Here,

                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li>&lt;h1&gt; is the start tag.</li>
                    <li>"It is top-level heading" is the content, which is placed inside the start and end tags.</li>
                    <li>&lt;/h1&gt; is the closing tag.</li>
                  </ul>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">HTML Page Structure.</h3>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  HTML page structure (or, HTML basic structure) consists of the essential elements that are required to create an HTML document that can be displayed on the browser. <br />
                  The following image shows the page structure of an HTML document −
                  <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong className="text-xl font-bold">The Proclamation (&lt;!DOCTYPE html&gt;)</strong><br />Before anything starts, you need to announce yourself. This is like a traveler handing over a passport at the border. It tells the browser, "Hey, I’m speaking modern HTML5, so please read my instructions correctly." It’s the handshake that sets the tone for the entire visit.</li>
                    <li><strong className="text-xl font-bold">The Universe (&lt;html&gt;)</strong><br />This is the "container of everything." If your webpage were a house, the &lt;html&gt; tag would be the foundation and the roof. Nothing exists outside of these walls. It’s the master wrapper that holds the soul of your site together.</li>
                    <li><strong className="text-xl font-bold">The Brain (&lt;head&gt;)</strong><br />The &lt;head&gt; is what the page is thinking, but not necessarily what it’s saying out loud.
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong className="text-xl font-bold">The Identity (&lt;title&gt;):</strong><br /> This is the name the page answers to in the browser tab.</li>
                        <li><strong className="text-xl font-bold">The Toolbox (&lt;meta&gt;):</strong><br /> This is where the page stores its rules—like what language it speaks, what "outfits" (CSS) it should wear, and any special logic (JavaScript) it needs to remember.</li>
                      </ul>
                    </li>
                    <li><strong className="text-xl font-bold">The Body (&lt;body&gt;)</strong><br />This is the physical presence. If the head is the thoughts, the body is the face, the hands, and the voice. Everything you see—the photos you scroll through, the buttons you click, and the articles you read—lives here.
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong className="text-xl font-bold">The Voice (&lt;h1&gt; to &lt;h6&gt;):</strong><br />  These are your vocal levels. An &lt;h1&gt; is a shout (the main headline), while an &lt;h3&gt; is a normal speaking voice (a sub-header).</li>
                      <li><strong className="text-xl font-bold">The Conversation (&lt;p&gt;):</strong><br />  These are your paragraphs. This is where the storytelling happens, broken down into digestible pieces so your visitors don't get overwhelmed.</li>
                    </ul>
                    </li>
                    <li><strong className="text-xl font-bold">The Web Browser:</strong> Your Digital Interpreter <br />Imagine you’ve written a complex musical score (your HTML file). The Web Browser (Chrome, Safari, Firefox) is the orchestra. Its entire job is to look at your sheet music, understand the notes, and perform the song so you can actually hear it.
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong className="text-xl font-bold">The Pickup:</strong> It grabs your file from a distant server (like a library) or from your own computer’s hard drive.</li>
                      <li><strong className="text-xl font-bold">The Translation:</strong> It reads the tags like &lt;h1&gt; or &lt;body&gt; and says, "Aha! This is a big title," or "This is a paragraph."</li>
                      <li><strong className="text-xl font-bold">The Display:</strong> It renders those instructions into the colors, fonts, and layouts you see on your screen.</li>
                    </ul>
                    Whether you’re using a Mac, a PC, or a phone, every browser is designed to speak the "language" of HTML, though some might have a slightly different "accent."
                    </li>
                  </ol>


                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">The &lt;!DOCTYPE&gt;: The Language Settings</h3>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  Before the browser starts reading your code, it needs to know which "dialect" you're speaking. This is what the DOCTYPE declaration does. <br />
                  Think of it as the Cover Page of a manual.
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong className="text-xl font-bold">The "Hey, Wait!" Tag:</strong> Even though it looks like HTML, &lt;!DOCTYPE html&gt; is actually a shout-out to the browser. It says, <em>"Heads up! I’m using the latest version of this language (HTML5). Don't try to read this like it’s 1995!"</em></li>
                    <li><strong className="text-xl font-bold">The Version Control:</strong> In the past, HTML had many different versions (like 4.01 or XHTML). Each had its own set of rules. Today, we almost exclusively use &lt;!DOCTYPE html&gt; because it’s the universal standard for the modern web.</li>
                  </ul>
                  Without this line, the browser might get confused and enter "Quirks Mode," where it tries to guess what you meant—often leading to your website looking like a broken jigsaw puzzle.
                  <ul className='list-none pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong className="text-xl font-bold">The Trio:</strong> Tags, Elements, and Attributes <br />
                    If building a webpage is like building a house, here is how the parts work together:
                    </li>
                    <li><strong className="text-xl font-bold">The Tags (&lt;p&gt;, &lt;/p&gt;):</strong> These are the bookends. They tell the browser where a specific feature starts and ends.</li>
                    <li><strong className="text-xl font-bold">The Element:</strong> This is the whole package. It’s the combination of the tags plus whatever is inside them (like a complete sentence).</li>
                    <li><strong className="text-xl font-bold">The Attribute:</strong> This is the description. If a tag is a "door," the attribute tells the browser what color the door is or if it’s locked.</li>
                    <li><strong className="text-xl font-bold">A Note on Style:</strong> HTML isn’t picky—it can read &lt;body&gt; or &lt;BODY&gt;. However, the web community treats lowercase as the professional standard. Think of it as "web etiquette."</li>
                  </ul>
                  
                  
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Why Does HTML Matter?</h3>
                <div className="text-lg text-gray-700 leading-relaxed mb-3">
                  HTML is the "skeleton" that holds the entire internet together. Without it, the web would just be a pile of unreadable data.
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong className="text-xl font-bold">The Foundation:</strong> It provides the structure. CSS adds the paint, and JavaScript adds the electricity, but HTML builds the walls.</li>
                    <li><strong className="text-xl font-bold">The Map (SEO):</strong>  It helps search engines like Google understand what your page is about so people can actually find you.</li>
                    <li><strong className="text-xl font-bold">The Connection:</strong> Those blue links you click? That’s HTML "teleporting" you from one corner of the globe to another.</li>
                    <li><strong className="text-xl font-bold">The Universal Language:</strong>  Because it follows open standards (W3C), your website will look and act the same whether someone is viewing it on an iPhone in Tokyo or a desktop in London.</li>
                  </ul>
                
                </div>

              </div>
            </div>
          </main>
        );

        case 'm2':
          return(
            <main>
              <div className='animate-fade-in-up'>
                <h1 id="m2" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                Introduction to the Heading Tags in HTML.
              </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className='text-3xl font-bold text-slate-900 mb-3'>HTML Headings:- </h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    The heading tags in HTML are used to describe the headings in the webpage or <br />
                    The HTML headings are the titles or subtitles used to display on the webpage  <br />
                    HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags <br />
                    &lt;h1&gt; defines the most important and &lt;h6&gt; defines least important. <br />
                    Example code :- 
                    
                    
                  </div>

                </div>
              </div>
            </main>
          );


        case 'm3':
          return(
            <main>
              <div className='animate-fade-in-up'>
                <h1 id="m3" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                  HTML multimedia tags.
               </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className='text-3xl font-bold text-slate-900 mb-3'>HTML Image tag :- </h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    The HTML &lt;img&gt; tag is used to embed an image into a web page. <br />
                    It is one of the most fundamental elements in web development, allowing you to display graphics, photographs, logos, and diagrams. <br />
                    Here is a breakdown of its usage, syntax, and best practices. <br /> <br />
                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>Basic Syntax:</strong><br />The &lt;img&gt; tag is a void element (also known as a self-closing tag). This means it does not have a closing tag (like &lt;/img&gt;). It relies entirely on attributes to function. <br />
                      <blockquote className='border-l-4 border-r-4 border-blue-500 pl-4 py-2 my-4 bg-green-50'>
                            <p className='text-blue-900'>
                              &lt;img src="image.jpg" alt="Description of the image"&gt;
                            </p>
                      </blockquote>
                      </li>
                      <li><strong> Key Attributes:</strong><br />To make the image tag work, you must define specific attributes inside the tag:
                       <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Attribute</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        <th className="border border-slate-400 p-3 text-left">Required?</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">src</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Stands for Source. This specifies the path (URL) to the image you want to display. It can be a relative path (file on your computer) or an absolute path (URL from the web).</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">alt</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Stands for Alternative Text. This text is displayed if the image fails to load. Crucially, it is read by screen readers for visually impaired users and helps search engines understand what the image is.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">width</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Specifies the width of the image (in pixels).</td>
                        <td className="border border-slate-400 p-3 text-gray-900">No (but recommended)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">height</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Specifies the height of the image (in pixels).</td>
                        <td className="border border-slate-400 p-3 text-gray-900">No (but recommended)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">title</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Provides additional information (usually shown as a tooltip when the mouse hovers over the image).</td>
                        <td className="border border-slate-400 p-3 text-gray-900">No</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">loading</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Controls how the browser loads the image (e.g., lazy for performance).</td>
                        <td className="border border-slate-400 p-3 text-gray-900">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
               </li>
                    </ol>
                    Example code:- <br />
                    Output:- <br />
                    

                  </div>

                  <h2 className='text-3xl font-bold text-slate-900 mb-3'>HTML Video Tag:-</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    The HTML &lt;video&gt; tag is used to embed media players directly into a web page. <br />
                    Unlike the &lt;img&gt; tag, which is a static void element, the &lt;video&gt; tag is a paired tag (it has an opening &lt;video&gt; and a closing &lt;/video&gt;). This allows you to nest multiple video sources and fallback text inside it. <br /><br />

                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>Basic Syntax:</strong><br />You can use a simple src attribute, but for better browser compatibility, it is best to use nested &lt;source&gt; elements. <br />
                      <blockquote className='border-l-4 border-r-4 border-blue-500 pl-4 py-2 my-4 bg-green-50'>
                            <p className='text-blue-900'>
                              &lt;video width="640" height="360" controls&gt; <br />
                                &lt;source src="movie.mp4" type="video/mp4"&gt; <br />
                                &lt;source src="movie.ogg" type="video/ogg"&gt; <br />
                                Your browser does not support the video tag. <br />
                              &lt;/video&gt;

                            </p>
                      </blockquote>
                      </li>
                      <li><strong> Key Attributes:</strong><br />These attributes control the behavior and appearance of the video player:
                       <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Attribute</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        <th className="border border-slate-400 p-3 text-left">Important Note</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">controls</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Adds video controls (play/pause, volume, seek bar, fullscreen).</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Highly Recommended. Without this, the user cannot play the video unless you write custom JavaScript.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">width / height</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Sets the dimensions of the video player in pixels.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Always set this to prevent page layout shifts.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">poster</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Specifies an image to show while the video is downloading or until the user hits play.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Acts like a thumbnail.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">autoplay</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Automatically starts playing the video when the page loads.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Note: Most modern browsers block autoplay unless muted is also present.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">loop</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The video will start over again, every time it finishes.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Useful for background videos.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">muted</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Specifies that the audio output of the video should be muted.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Required for autoplay to work in Chrome/Safari.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">preload</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Hints to the browser how the video should load (auto, metadata, or none).</td>
                        <td className="border border-slate-400 p-3 text-gray-900">metadata is good for saving bandwidth.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
               </li>
                    </ol>
                    Example code:- <br />
                    Output:- <br />
                    

                  </div>


                  <h2 className='text-3xl font-bold text-slate-900 mb-3'>HTML Audio Tag:-</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    The HTML &lt;audio&gt; tag is used to embed sound content (like music, podcasts, or sound effects) into a web page. <br />
                    It functions very similarly to the &lt;video&gt; tag but without the visual display area. It is a paired tag (&lt;audio&gt;...&lt;/audio&gt;), allowing you to place multiple file sources and fallback text inside. <br /> <br />
                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>Basic Syntax:</strong><br />Like the video tag, it is best practice to use nested &lt;source&gt; elements to ensure the audio plays on all browsers. 
                      <blockquote className='border-l-4 border-r-4 border-blue-500 pl-4 py-2 my-4 bg-green-50'>
                            <p className='text-blue-900'>
                              <em>&lt;audio&gt; src="fresh-457883.mp3" controls&lt;/audio&gt;</em>
                            </p>
                      </blockquote>
                      </li>
                      <li><strong> Key Attributes:</strong><br />These attributes control the audio player's behaviour:
                       <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Attribute</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        <th className="border border-slate-400 p-3 text-left">Important Note</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">controls</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Displays the browser's default audio player (play/pause, volume, seek bar).</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Essential. Without this, the audio is invisible and silent (unless you use JavaScript).</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">autoplay</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Starts playing the audio immediately when the page loads.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Avoid using this. Browsers block audio autoplay to prevent annoying users.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">loop</td>
                        <td className="border border-slate-400 p-3 text-gray-900">The audio file will start over again every time it finishes.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Good for background ambience.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">muted</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Specifies that the audio should be muted by default.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">preload</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Hints to the browser how to load the file (auto, metadata, none).</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Use metadata to load only the duration/info, saving bandwidth.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
               </li>
                    </ol>
                    Example code:- <br />
                    Output:- <br />
                    

                  </div>



                </div>
             </div>
            </main>
          );

        case 'm4':
          return(
            <main>
              <div className='animate-fade-in-up'>
                <h1 id="m4" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                  HTML LIST tags.
               </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className='text-3xl font-bold text-slate-900 mb-3'>HTML Lists tag:-</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    HTML offers three main types of lists to organise information: <b>Unordered</b>, <b>Ordered</b>, and <b>Description</b> lists. <br /><br />
                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong className="text-xl">Unordered List (&lt;ul&gt;)</strong>
                      Used for items where the order does not matter. These are typically displayed with bullet points. <br /> <br />
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>Parent Tag:</strong> &lt;ul&gt; (Unordered List) </li>
                      <li><strong>Child Tag:</strong> &lt;li&gt; (List Item) </li>
                      <li><strong>Example code:-</strong> <br /></li>
                      <li><strong>Output:-</strong> <br /></li>
                      </ul>
                      </li>
                      <li><strong className="text-xl">Ordered List (&lt;ol&gt;)</strong><br />
                      Used for items that must follow a specific sequence (like steps in a recipe). These are displayed with numbers or letters by default. <br /><br />
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>Parent Tag:</strong> &lt;ol&gt; (Ordered List) </li>
                      <li><strong>Child Tag:</strong> &lt;li&gt; (List Item) </li>
                      <li><strong>Key Attributes for &lt;ol&gt; tag:</strong> <br />You can customise the numbering using these attributes directly in the HTML tag: <br /><br /></li>
                  <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Attribute</th>
                        <th className="border border-slate-400 p-3 text-left">Value Example</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">type</td>
                        <td className="border border-slate-400 p-3 text-gray-900">"1"</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Default numbers (1, 2, 3...)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">type</td>
                        <td className="border border-slate-400 p-3 text-gray-900">"A"</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Uppercase letters (A, B, C...)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">type</td>
                        <td className="border border-slate-400 p-3 text-gray-900">"a"</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lowercase letters (a, b, c...)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">type</td>
                        <td className="border border-slate-400 p-3 text-gray-900">"I"</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Upper Roman numerals (I, II, III...)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">type</td>
                        <td className="border border-slate-400 p-3 text-gray-900">"i"</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Lower Roman numerals (i, ii, iii...)</td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">start</td>
                        <td className="border border-slate-400 p-3 text-gray-900">"5"</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Starts the counting at 5 (e.g., 5, 6, 7...).</td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">reversed</td>
                        <td className="border border-slate-400 p-3 text-gray-900">reversed</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Counts backwards (e.g., 3, 2, 1).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                      <li><strong>Example code:-</strong> <br /></li>
                      <li><strong>Output:-</strong> <br /></li>
                      </ul>
                      </li>
                      <li><strong className="text-xl">Description List (&lt;dl&gt;)</strong><br />
                      Less common but very useful for glossaries or metadata. It pairs a term with a description. <br />
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>

                      <li><strong>Parent Tag:</strong> &lt;dl&gt; (Description List) </li>
                      <li><strong>Term Tag:</strong> &lt;dt&gt; (Description Term) </li>
                      <li><strong>Description Tag:</strong> &lt;dd&gt; (Description Details) </li>
                      <li><strong>Example code:-</strong> <br /></li>
                      <li><strong>Output:-</strong> <br /></li>
                      </ul>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </main>
          );




        case 'm5':
          return(
            <main>
              <div className='animate-fade-in-up'>
                <h1 id="m5" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                  HTML Text formatting tags.
               </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className='text-3xl font-bold text-slate-900 mb-3'>HTML Text formatting tags:-</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                  <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                    <li><strong className='text-xl'>&lt;b&gt; tag:</strong><br />_bold tag is used to display the text in bold format</li>
                    <li><strong className='text-xl'>&lt;i&gt; tag:</strong><br />_italic tag is used to  display the text in italic style</li>
                    <li><strong className='text-xl'>&lt;strong&gt; tag:</strong><br />_strong tag is used to tell the importance of the text in a bold format</li>
                    <li><strong className='text-xl'>&lt;em&gt; tag:</strong><br />_emphasize tag is used to tell the importance of the text in a italic format</li>
                    <li><strong className='text-xl'>&lt;mark&gt; tag:</strong><br />_mark tag is used to highlight the text</li>
                    <li><strong className='text-xl'>&lt;u&gt; tag:</strong><br />_it is used to underline the text</li>
                    <li><strong className='text-xl'>&lt;del&gt; tag:</strong><br />_tag is used to display the deleted content</li>
                    <li><strong className='text-xl'>&lt;sub&gt; tag:</strong><br />_it is used to display the content below the line</li>
                    <li><strong className='text-xl'>&lt;sup&gt; tag:</strong><br />_it is used to display the content above the line</li>
                    <li><strong className='text-xl'>Example Code:-</strong><br /></li>
                    <li><strong className='text-xl'>Output:-</strong><br /></li>
                  </ul>
                  </div>
                </div>
              </div>
            </main>
          );


        case 'm6':
          return(
            <main>
              <div className='animate-fade-in-up'>
                <h1 id="m6" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                  HTML Table tags.
               </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction to Table tags</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong className='text-xl'>Basic Structure</strong><br />
                      A table is built row by row.
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong>&lt;table&gt; </strong> The container for the entire table.</li>
                        <li><strong>&lt;tr&gt; </strong> Stands for Table Row. Every row (header or data) starts with this.</li>
                        <li><strong>&lt;th&gt; </strong> Stands for Table Header. Used for titles; text is usually bold and centred.</li>
                        <li><strong>&lt;td&gt; </strong> Stands for Table Data. The standard cells containing the actual information.</li>
                        <li><strong>Example Code:-</strong></li>
                        <li><strong>Output:-</strong></li>
                      </ul>
                      </li>
                      <li><strong className='text-xl'>Merging Cells (colspan & rowspan)</strong><br />Sometimes a cell needs to stretch across multiple columns or rows. You use attributes inside the &lt;th&gt; or &lt;td&gt; tags to do this.
                <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Attribute</th>
                        <th className="border border-slate-400 p-3 text-left">Description</th>
                        <th className="border border-slate-400 p-3 text-left">Example</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">colspan</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Merges columns horizontally.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">&lt;td colspan="2"&gt; (Takes up 2 columns)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">rowspan</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Merges rows vertically.</td>
                        <td className="border border-slate-400 p-3 text-gray-900">&lt;td rowspan="3"&gt; (Takes up 3 rows)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                      </li>
                      <li><strong className='text-xl'>Important Notes for Developers</strong>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong>Borders:</strong> By default, HTML tables have no visible borders. In the past, we used &lt;table border="1"&gt; but modern development requires using CSS (e.g., table, th, td {"{border: 1px solid black;}"}).</li>
                        <li><strong>Don't use tables for layout:</strong> In the early 2000s, websites were built using tables to position images and text. Do not do this. Use CSS Grid or Flexbox for page layout. Tables are strictly for data.</li>
                        <li><strong>Accessibility:</strong> Use the &lt;caption&gt; tag immediately after the opening &lt;table&gt; tag to give the table a title for screen readers.</li>
                      </ul>
                      </li>
                    </ol>

                  </div>

                  <h2 className='text-2xl font-bold text-slate-900 mb-3'>Table Tags</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    HTML tables are for tabular data only — not for page layouts (that's what CSS Grid and Flexbox are for). Semantic table markup makes your data navigable by screen readers.
                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Tag</th>
                        <th className="border border-slate-400 p-3 text-left">What It Does</th>
                        <th className="border border-slate-400 p-3 text-left">Real-Life Analogy</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;table&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The root container for a data table.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The outer border of a spreadsheet</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;thead&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Groups header rows at the top of the table.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The column title row in a spreadsheet</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;tbody&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Groups the main body rows of the table.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The data rows in a spreadsheet</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;tfoot&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Groups footer rows at the bottom of a table. Useful for totals.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The totals row at the bottom of an invoice</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;tr&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A single table row.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>One horizontal line in a spreadsheet</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;th&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A header cell. Screen readers use these to label data cells.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A bolded column or row heading</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;td&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A standard data cell.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>One cell in a spreadsheet</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;caption&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A title or description for the table as a whole.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The title printed above a chart</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;colgroup&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Groups columns for styling or applying shared attributes.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>Highlighting a whole column in a spreadsheet</i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>


                </div>
              </div>
            </main>
          );




        case 'm7':
          return(
            <main>
              <div className='animate-fade-in-up'>
                <h1 id="m7" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                  HTML Text paragraph tags.
               </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className='text-3xl font-bold text-slate-900 mb-3'>HTML paragraph tags:-</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    The HTML &lt;p&gt; element defines a paragraph.
                    A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph. <br />
                    <strong className='text-xl'>Example :-</strong><br />
                    <strong className='text-xl'>Output :-</strong> <br />
                    HTML Display
                    You cannot be sure how HTML will be displayed.
                    Large or small screens, and resized windows, will create different results.
                    With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.
                    The browser will automatically remove any extra spaces and lines when the page is displayed: <br />
                    <strong className='text-xl'>Example :-</strong><br />
                    <strong className='text-xl'>Output :-</strong> <br />
                  </div>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>HTML Horizontal Rules :-</h3>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    The &lt;hr&gt; tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule. <br />
                    The &lt;hr&gt; element is used to separate content (or define a change) in an HTML page: <br />
                    <strong className='text-xl'>Example :-</strong><br />
                    <strong className='text-xl'>Output :-</strong> <br />
                  </div>

                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>HTML Line Breaks</h3>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    The HTML &lt;br&gt; element defines a line break. <br />
                    Use &lt;br&gt; if you want a line break (a new line) without starting a new paragraph: <br />
                    <strong className='text-xl'>Example :-</strong><br />
                    <strong className='text-xl'>Output :-</strong> <br />
                    The Poem Problem
                    This poem will display on a single line: <br />
                    <strong className='text-xl'>Example :-</strong><br />
                    <strong className='text-xl'>Output :-</strong> <br />
                    Solution - The HTML &lt;pre&gt; Element <br />
                    The HTML &lt;pre&gt; element defines preformatted text. <br />
                    The text inside a &lt;pre&gt; element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks: <br />
                    <strong className='text-xl'>Example :-</strong><br />
                    <strong className='text-xl'>Output :-</strong> <br />
                  </div>
                </div>
              </div>
            </main>
          );



        case 'm8':
          return(
            <main>
              <div className='animate-fade-in-up'>
                <h1 id="m8" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                  Introduction to Front-End
               </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className='text-3xl font-bold text-slate-900 mb-3'>Introduction to Front-End:-</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    Think of the front-end as the "face" of a website—it’s everything you see, click, and interact with when you open a browser. 
                    While the back-end acts like the hidden engine of a car, the front-end is the sleek dashboard, the steering wheel, and the comfortable seats that make the journey possible for the user. 
                    Front-end developers use a mix of design and code (primarily HTML, CSS, and JavaScript) to ensure a site looks great and functions smoothly on any device. 
                    Their goal is to create an intuitive experience where buttons react when pressed and layouts flow naturally, making the digital world feel accessible and human. <br />
                    <strong className='text-xl'>Installation of the vs code :- </strong><br />
                    <ul className='list-none pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>Step 1: Download the Installer</strong><br />First, you need to get the official setup file.
                      <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Go to the official <a href="https://code.visualstudio.com/" target='_blank' rel="noopener noreferrer"><em className='text-blue-700 underline'>VS Code website</em></a>.</li>
                        <li>Click the big blue button labeled <b>"Download for Windows"</b> (or select the version for macOS/Linux if you are on those systems).</li>
                      </ol>
                      </li>
                      <li><strong>Step 2: Accept the License Agreement</strong><br />
                      <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Once the file finishes downloading, open it (usually named something like VSCodeUserSetup.exe).</li>
                        <li>A window will pop up with the License Agreement.</li>
                        <li>Select "I accept the agreement" and click Next.</li>
                      </ol>
                      </li>
                      <li><strong>Step 3: Select Destination Location</strong><br />The installer will ask where you want to save the program.
                      <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>By default, it installs in your User folder. This is usually the best choice for most people.</li>
                        <li>Click Next.</li>
                      </ol>
                      </li>
                      <li><strong>Step 4: Select Additional Tasks (Important!)</strong><br />
                      This is the most "human" part of the setup—making sure the software works the way you want it to.
                      <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong>Create a desktop icon:</strong> Check this if you want a shortcut on your home screen.</li>
                        <li><strong>Add "Open with Code" to Windows Explorer:</strong> I highly recommend checking both boxes for this. It allows you to right-click any folder and open it instantly in VS Code.</li>
                        <li><strong>Add to PATH:</strong> Ensure this is checked so you can launch VS Code from the command line.</li>
                        <li>Click <strong>Next</strong>.</li>
                      </ol>
                      </li>
                      <li><strong>Step 5: Install and Finish</strong><br />
                      <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Review your choices and click <strong>Install</strong>.</li>
                        <li>Wait a few seconds for the green bar to complete.</li>
                        <li>Once finished, keep the <strong>"Launch Visual Studio Code"</strong> box checked and click <strong>Finish</strong>.</li>
                      </ol>
                      </li>
                      <li><strong>Step 6: Initial Personalization</strong><br />When VS Code opens for the first time, you’ll see a "Welcome" tab. This is where you make it your own.
                      <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                        <li><strong>Choose your Theme:</strong> Pick between Dark, Light, or High Contrast. (Most developers prefer Dark!)</li>
                        <li><strong>Install Language Support:</strong> If you know you're going to code in Python, JavaScript, or C++, you can click the "Extensions" icon on the left sidebar to install support for those languages.</li>
                      </ol>
                      </li>
                    </ul>
                  
                  </div>
                </div>
              </div>
            </main>
          );



        case 'm9':
          return(
            <main>
              <div className='animate-fade-in-up'>
                <h1 id="m9" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                  HTML Semantic tags.
               </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className='text-2xl font-bold text-slate-900 mb-3'>Introduction</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    If you've been writing HTML for a while, you've probably seen (or written) pages stuffed with &lt;div&gt; and &lt;span&gt; everywhere. It works — but it's like labeling every box in your house with just 'stuff'. Semantic HTML is about giving things their real names. <br />
                    Semantic tags are HTML elements that carry meaning. When you use &lt;article&gt; instead of &lt;div&gt;, you're not just organizing your code — you're communicating with browsers, screen readers, and search engines in a language they understand.
                    <blockquote className='border-l-4 border-r-4 border-blue-500 pl-4 py-2 my-4 bg-green-50'>
                      <p className='text-blue-900'>
                        Why it matters:<br />
                        Good semantic HTML improves accessibility for users with disabilities, helps search engines index your content correctly, and makes your codebase easier for teammates to understand and maintain.
                        
                      </p>
                    </blockquote>
                  </div>
                  <h2 className='text-2xl font-bold text-slate-900 mb-3'>What Makes a Tag 'Semantic'?</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    A semantic element clearly describes its meaning — both to the browser and to the developer reading the code. Compare these two:
                    <blockquote className='border-l-4 border-r-4 border-blue-500 pl-4 py-2 my-4 bg-green-50'>
                      <code className='text-blue-900'>
                      &lt;div&gt; class="navigation"&gt;...&lt;/div&gt;      &lt;!-- Non-semantic --&gt; <br />
                      &lt;nav&gt;...&lt;/nav&gt;                         &lt;!-- Semantic --&gt;
                        
                      </code>
                    </blockquote>
                    Both look the same in a browser. But the second one tells everyone involved — the browser, a screen reader, a search engine, or your future self at 2am — exactly what this section is for. <br />
                    Non-semantic tags like &lt;div&gt; and &lt;span&gt; are still useful! They're your go-to containers when there's no meaningful category. But when there is a semantic option available, use it.

                  </div>
                  <h2 className='text-2xl font-bold text-slate-900 mb-3'>Page Structure Tags</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    These tags form the skeleton of every web page. Think of them as rooms in a house — each one has a distinct purpose and helps visitors (and tools) navigate your content.

                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Tag</th>
                        <th className="border border-slate-400 p-3 text-left">What It Does</th>
                        <th className="border border-slate-400 p-3 text-left">Real-Life Analogy</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;header&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The top section of a page or section. Usually contains a logo, site title, or main navigation.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The front entrance of a building</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;nav&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A group of navigation links — menus, breadcrumbs, or table-of-contents links.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A signpost or directory map</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;main&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The primary content area of a page. There should only be one per page.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The main hall of a museum</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;footer&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The bottom section — typically copyright info, links, contact details.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The credits at the end of a film</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;aside&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Content that's related but not central to the main topic. Sidebars, pull-quotes, ads.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A sticky note on the margin of a book</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;section&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A thematic grouping of content, usually with its own heading.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A chapter in a book</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;article&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A self-contained piece of content that could stand alone (blog post, news item, product card).</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A newspaper article you could clip out</i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    <blockquote className='border-l-4 border-r-4 border-blue-500 pl-4 py-2 my-4 bg-green-50'>
                      <p className='text-blue-900'>
                      Quick tip: <br />
                      Ask yourself: 'Could this content be shared on its own and still make sense?' If yes, use &lt;article&gt;. If it only makes sense in the context of the page, use &lt;section&gt;.
                      </p>
                    </blockquote>
                    
                  </div>
                  <h2 className='text-2xl font-bold text-slate-900 mb-3'>Text Content Tags</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    These tags help structure the written content on your page. They're not just about visual formatting — they communicate hierarchy and meaning to assistive technologies.

                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Tag</th>
                        <th className="border border-slate-400 p-3 text-left">What It Does</th>
                        <th className="border border-slate-400 p-3 text-left">Real-Life Analogy</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;h1&gt; - &lt;h6&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Headings, from most important (h1) to least (h6). Only one &lt;h1&gt; per page is best practice.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>Chapter titles and subheadings in a book</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;p&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A paragraph of text. The bread-and-butter of written content.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>One paragraph in an essay</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;blockquote&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A long quotation from another source. Often styled with an indent.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A framed quote on a wall</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;figure&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Self-contained media — an image, diagram, chart — usually with a caption.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A photo with a caption in a magazine</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;figcaption&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The caption for a &lt;figure&gt; element.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The label under a museum exhibit</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;address&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Contact information for a person or organization.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A business card</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;time&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A specific time or date. Can include a machine-readable datetime attribute.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The date stamp on a letter</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;mark&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Highlighted text — like using a yellow marker. Useful for search result highlights.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A highlighted sentence in a textbook</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;abbr&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">An abbreviation or acronym. Use the title attribute to spell it out.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>An acronym with a footnote definition</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;cite&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The title of a work being referenced (book, film, song, etc.).</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>An italicized book title in a bibliography</i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>

                 <h2 className='text-2xl font-bold text-slate-900 mb-3'>Inline Semantic Tags</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    These tags work inside paragraphs and other text blocks. They add meaning to specific words or phrases without breaking the flow of your text.

                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Tag</th>
                        <th className="border border-slate-400 p-3 text-left">What It Does</th>
                        <th className="border border-slate-400 p-3 text-left">Real-Life Analogy</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;strong&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Text that's critically important or urgent. Browsers usually bold it, but the meaning goes deeper.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>Bold text in a legal warning</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;em&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Emphasized text — a change in stress or tone. Browsers italicize it by default.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The word you'd say louder in a sentence</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;code&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A snippet of computer code. Always renders in a monospace font.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>Text in a code block on Stack Overflow</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;kbd&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Keyboard input — the keys a user should press.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The key labels printed on a keyboard (<kbd>Ctrl</kbd> + <kbd>C</kbd>)</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;samp&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Sample output from a computer program.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>Text printed on a receipt (<samp>sample</samp>)</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;var&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A variable in code or a mathematical expression.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The 'x' in an algebra equation (<var>variable</var>)</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;sub&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Subscript text — slightly below the normal line.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The '2' in H<sub>2</sub>O</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;sup&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Superscript text — slightly above the normal line.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The footnote number in academic writing(<sup>superscript</sup>)</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;del&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Deleted or removed content. Often shown with a strikethrough.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A crossed-out price showing a discount(<del>deleted</del>)</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;ins&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Inserted or newly added content. Often shown underlined.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A handwritten addition to a printed document(<ins>inserted</ins>)</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;dfn&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The term being defined at that point in the text.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A word in bold at the start of a dictionary entry</i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>

                 <h2 className='text-2xl font-bold text-slate-900 mb-3'>Form & Interactive Tags</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    Forms are where users interact with your page — and semantic HTML makes them dramatically more accessible and usable. Screen readers depend on these tags to explain what each input is for.
                    <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Tag</th>
                        <th className="border border-slate-400 p-3 text-left">What It Does</th>
                        <th className="border border-slate-400 p-3 text-left">Real-Life Analogy</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;form&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The container for all form elements. Defines how data is sent.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>An application form in an office</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;fieldset&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Groups related form controls together. Creates a visual and semantic boundary.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A section divider in a long form</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;legend&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The caption for a &lt;fieldset&gt;. Tells users what the group is about.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The title printed above a form section</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;label&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Associates a text label with a form input. Critical for accessibility.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The text printed next to a checkbox</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;input&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A user-input field — text, checkbox, radio button, date, file upload, and more.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A blank line on a paper form</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;textarea&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A multi-line text input. Used for comments, descriptions, long answers.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The 'Additional Notes' box on a feedback form</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;select&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A dropdown list of options.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A spinning wheel picker on a mobile form</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;button&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A clickable button. Can trigger form submission or JavaScript actions.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A physical button on a machine</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;datalist&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A set of predefined suggestions for an input field. Like autocomplete.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>The suggestions that appear when typing in a search bar</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;output&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Displays the result of a calculation or user action.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A running total on a calculator receipt</i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>

                 <h2 className='text-2xl font-bold text-slate-900 mb-3'>Media & Embedded Content Tags</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    The web isn't just text anymore. These tags let you embed rich media directly into your HTML in a standards-compliant, accessible way.

                  <div className="table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Tag</th>
                        <th className="border border-slate-400 p-3 text-left">What It Does</th>
                        <th className="border border-slate-400 p-3 text-left">Real-Life Analogy</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;img&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">An image. Always use the alt attribute to describe it for screen readers.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A photo in a printed brochure</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;audio&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">An audio player. Supports MP3, OGG, WAV formats.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A radio built into a webpage</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;video&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A video player. Supports MP4, WebM, OGG formats.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A TV screen embedded in a page</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;source&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Specifies multiple media sources for &lt;audio&gt; or &lt;video&gt; with fallbacks.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A list of mirror download links</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;track&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Adds subtitles, captions, or chapters to &lt;video&gt; or &lt;audio&gt; elements.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>Closed captions on a TV show</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;picture&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Provides multiple image sources for different screen sizes or resolutions.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A photographer's different print sizes of the same photo</i></td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;canvas&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A drawing surface for JavaScript-rendered graphics.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A blank whiteboard you draw on programmatically</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;svg&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Inline scalable vector graphics — logos, icons, illustrations.</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A vector illustration embedded directly</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;iframe&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Embeds another HTML page inside your current page (use sparingly).</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>A window inside a window</i></td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;cite&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The title of a work being referenced (book, film, song, etc.).</td>
                        <td className="border border-slate-400 p-3 text-gray-900"><i>An italicized book title in a bibliography</i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>

                 
                  
                </div>
              </div>
            </main>
          );


        case 'm10':
          return(
            <main>
              <div className='animate-fade-in-up'>
                <h1 id="m10" className="text-5xl md:text-5xl font-extra-bold mb-8 text-center text-slate-900">
                div,section,nav,footer
               </h1>
                <div className="max-w-6xl mx-auto">
                  <h2 className='text-3xl font-bold text-slate-900 mb-3'>Overview</h2>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    These four tags are some of the most-used in HTML — but they're also some of the most misunderstood. Two of them (&lt;section&gt; and &lt;nav&gt; and &lt;footer&gt;) are semantic, meaning they carry meaning. One of them (&lt;div&gt;) is intentionally meaningless. Knowing when to use each one is a core skill. <br />
                    Here's a one-liner for each before we dive deep:

                    <div className="table-container border border-slate-400">
                   <table className="w-full border-collapse">
                    {/* <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Tag</th>
                        <th className="border border-slate-400 p-3 text-left">What It Does</th>
                        <th className="border border-slate-400 p-3 text-left">Real-Life Analogy</th>
                      </tr>
                    </thead> */}
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;div&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A generic container with zero meaning — use it when nothing else fits.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;section&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A thematic chunk of content that belongs together, usually with a heading.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;nav&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">A group of navigation links — menus, breadcrumbs, or in-page links.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;footer&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">The bottom area of a page or section — credits, links, legal info.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                  </div>
                  <h2 className='text-3xl font-bold text-slate-900 mb-3'>The &lt;div&gt; Tag</h2>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Is It?</h3>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    The &lt;div&gt; — short for division — is HTML's most generic container. It has no semantic meaning whatsoever. It's a blank box you can put anything in. Browsers don't assign any special role to it; screen readers don't describe it differently; search engines don't treat it as significant. <br /><br />
                    That might sound like a limitation, but it's actually its superpower. Because it means nothing on its own, you can use it as a hook for CSS and JavaScript without polluting your semantic structure.
                    
                  </div>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>Basic Syntax</h3>
                  <div className='bg-slate-100 p-3 text-lg rounded-lg'>
                    <code className='text-red-700'>
                      <pre>
                        &lt;div&gt; <br />
                        &lt;!-- anything goes here --&gt; <br />
                        &lt;p&gt;Some text&lt;/p&gt; <br />
                        &lt;img src="photo.jpg" alt="A photo"&gt; <br />
                        &lt;/div&gt;

                      </pre>

                    </code>

                  </div>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>Common Attributes</h3>

                  <div className="table-container text-lg border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Attribute</th>
                        <th className="border border-slate-400 p-3 text-left">Values / Example</th>
                        <th className="border border-slate-400 p-3 text-left">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>class</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-gray-700'>
                          class="card"  / <br /> class="grid-item"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Applies CSS styles or JS hooks</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>id</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-gray-700'>
                          id="sidebar"  / <br /> id="modal-root"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">
                          Unique identifier for one specific element</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>style</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-gray-700'>
                          style="color: red;"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">
                          Inline CSS (use sparingly — prefer classes)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>data-*</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-gray-700'>
                          data-user-id="42"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Custom data attributes for JavaScript</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>aria-label</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-gray-700'>aria-label="Profile card"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">
                          Adds accessible description when semantics are absent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>When to Use &lt;div&gt;</h3>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li>You need a wrapper purely for CSS layout (grid, flex, positioning).</li>
                      <li>You're creating a JavaScript-controlled component (modal, dropdown, tooltip).</li>
                      <li>You need a hook for animation or interaction with no semantic equivalent.</li>
                      <li>None of the semantic tags (&lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, etc.) are appropriate.</li>
                    </ul>
                    
                  </div>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>When NOT to Use &lt;div&gt;</h3>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                      <li><strong>Don't use &lt;div&gt; when a semantic tag fits:</strong><br />  If the content is a navigation group, use &lt;nav&gt;. A page footer? Use &lt;footer&gt;. A blog post? Use &lt;article&gt;. Each of these communicates structure that a &lt;div&gt; never can.</li>
                    </ul>
                    <div className='bg-slate-100 p-3 rounded-lg'>
                      <strong className='text-xl text-blue-400'>Watch out for 'div soup':</strong><br />
                        A page full of nested &lt;div&gt; elements is hard to read and hard to maintain. Whenever you find yourself writing &lt;div class="header"&gt; or &lt;div class="footer"&gt;, that's a sign you should be using the real tag instead.

                    </div>
                  </div>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>Real-World Example</h3>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    Using &lt;div&gt; correctly — as a layout wrapper, not a meaning-carrier:
                    
                    <div className='bg-slate-100 p-3 rounded-lg mb-3'>
                      <code className='text-red-700'>
                        <pre>

                        &lt;div class="card-grid"&gt; <br />
                       &nbsp;&lt;article class="card"&gt; <br />
                          &nbsp;&nbsp;&lt;img src="item.jpg" alt="Product photo"&gt; <br />
                          &nbsp;&nbsp;&lt;h3&gt;Product Name&lt;/h3&gt; <br />
                          &nbsp;&nbsp;&lt;p&gt;Description here.&lt;/p&gt; <br />
                        &lt;/article&gt; <br />
                        &nbsp;&lt;article class="card"&gt; <br />
                          &nbsp;&nbsp;&lt;!-- another card --&gt; <br />
                        &lt;/article&gt;
                      &lt;/div&gt; <br />
                        </pre>

                      </code>
                    </div>
                    Here, <code className='text-red-700'>&lt;div class="card-grid"&gt;</code> exists only for CSS layout. The actual content uses meaningful tags like <code className='text-red-700'>&lt;article&gt;</code> and <code className='text-red-700'>&lt;h3&gt;</code>. That's the right balance.
                  </div>
                  <h2 className='text-3xl font-bold text-slate-900 mb-3'>The &lt;section&gt; Tag</h2>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Is It?</h3>
                  <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                    The &lt;section&gt; tag represents a standalone thematic grouping of content. Think of it like a chapter — it groups related content together under a common theme, and it almost always has a heading. <br />
                    Unlike &lt;div&gt;, a &lt;section&gt; actually means something to browsers and assistive technologies. It signals: 'this block of content is a distinct unit with its own topic.'
                    
                  </div>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Is It?</h3>
                  <div className='bg-slate-100 p-4 rounded-lg mb-3 p-3 text-lg'>
                      <code className='text-red-700'>
                        &lt;section&gt; <br />
                          &lt;h2&gt;Our Services&lt;/h2&gt; <br />
                          &lt;p&gt;We offer three core services...&lt;/p&gt; <br />
                          &lt;!-- more content --&gt; <br />
                        &lt;/section&gt;

                        

                      </code>
                    </div>

                     <h3 className='text-2xl font-bold text-slate-900 mb-3'>Common Attributes</h3>

                  <div className="table-container text-lg leading-relaxed border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Attribute</th>
                        <th className="border border-slate-400 p-3 text-left">Values / Example</th>
                        <th className="border border-slate-400 p-3 text-left">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>aria-labelledby</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-gray-700'>aria-labelledby="services-heading"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Links section to its heading for screen readers</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>aria-label</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-gray-700'>aria-label="Testimonials"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Names the section when there's no visible heading</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>class</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-gray-700'>class="hero-section"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">CSS styling hook</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>id</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-gray-700'>id="about"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Anchor target for in-page navigation links</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>&lt;section&gt; vs &lt;div&gt; — The Key Difference</h3>

                  <div className="table-container text-lg leading-relaxed border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Use &lt;section&gt; when...</th>
                        <th className="border border-slate-400 p-3 text-left">Use &lt;div&gt; when...</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Content has a clear theme or topic</td>
                        <td className="border border-slate-400 p-3 text-gray-900">It's just a layout wrapper</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">It would make sense to list in a page outline</td>
                        <td className="border border-slate-400 p-3 text-gray-900">You need a CSS/JS hook only</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">It (typically) has its own heading</td>
                        <td className="border border-slate-400 p-3 text-gray-900">No meaningful grouping exists</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">You'd describe it in a table of contents</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Content doesn't form a distinct unit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>When to Use &lt;section&gt;</h3>
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Grouping thematically related content on a long page (Features, Pricing, FAQ).</li>
                        <li>Dividing a long article into named chapters or topics.</li>
                        <li>Organizing different tabs or panels of related content.</li>
                        <li>Any content block you'd want to appear in a page outline or table of contents.</li>
                      </ul>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Real-World Example</h3>
                    <div className='bg-slate-100 text-lg text-gray-700 leading-relaxed mb-6 rounded-lg p-3'>
                      <pre>
                        <code className='text-lg text-red-700'>
                          &nbsp;&nbsp;&lt;main&gt; <br />
                           &nbsp;&nbsp; &lt;section id="features"&gt; <br />
                             &nbsp;&nbsp;&nbsp;&nbsp; &lt;h2&gt;Features&lt;/h2&gt; <br />
                             &nbsp;&nbsp;&nbsp;&nbsp; &lt;p&gt;Everything you need in one place...&lt;/p&gt; <br />
                            &nbsp;&nbsp;&nbsp;&lt;/section&gt; <br />


                            &nbsp;&nbsp;&nbsp;&lt;section id="pricing"&gt; <br />
                             &nbsp;&nbsp;&nbsp;&nbsp; &lt;h2&gt;Pricing&lt;/h2&gt; <br />
                             &nbsp;&nbsp;&nbsp;&nbsp; &lt;p&gt;Simple, transparent pricing...&lt;/p&gt; <br />
                           &nbsp;&nbsp;&nbsp;&lt;/section&gt; <br />


                            &nbsp;&nbsp;&nbsp;&lt;section id="faq"&gt; <br />
                              &nbsp;&nbsp;&nbsp;&nbsp; &lt;h2&gt;FAQ&lt;/h2&gt; <br />
                             &nbsp;&nbsp;&nbsp;&nbsp; &lt;!-- questions here --&gt; <br />
                           &nbsp;&nbsp;&nbsp;&lt;/section&gt; <br />
                         &nbsp;&nbsp;&lt;/main&gt; <br />

                        </code>
                      </pre>

                    </div>
                    <h2 className='text-3xl font-bold text-slate-900 mb-3'>The &lt;nav&gt; Tag</h2>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Is It?</h3>
                    <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      The &lt;nav&gt; element marks a group of navigation links. It tells browsers and screen readers: 'this is how users move around.' Screen reader users can jump directly to nav regions, and browsers can offer shortcuts based on them. br
                      You don't need to wrap every set of links in a &lt;nav&gt; — just the major navigation blocks. A footer with a few links might not need it; a site-wide menu definitely does.
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 mb-3'>Basic Syntax</h3>
                    <div className='bg-slate-100 text-lg text-gray-700 leading-relaxed mb-6 rounded-lg p-3'>
                      <code className='text-lg text-red-700'>
                        &nbsp;&nbsp;&lt;nav&gt; <br />
                          &nbsp;&nbsp;&nbsp;&nbsp; &lt;ul&gt; <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt; <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt; <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li&gt;&lt;a href="/contact"&gt;Contact&lt;/a&gt;&lt;/li&gt; <br />
                        &nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br />
                      &nbsp;&nbsp;&lt;/nav&gt; <br />


                      </code>
                    </div>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>Common Attributes</h3>
                  <div className="table-container text-lg border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Attribute</th>
                        <th className="border border-slate-400 p-3 text-left">Value / Example</th>
                        <th className="border border-slate-400 p-3 text-left">What It Does</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>aria-label</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-slate-700'>aria-label="Main navigation"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Names the nav region — critical if you have multiple &lt;nav&gt; elements</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>aria-labelledby</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-slate-700'>aria-labelledby="nav-heading"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Links nav to a visible heading element</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>class</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-slate-700'>class="main-nav"  / <br /> class="breadcrumb"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">CSS hook for styling</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>id</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-slate-700'>id="main-menu"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Unique identifier for JS or anchor linking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-3'>Common Attributes</h3>
              <div className='text-lg text-gray-700 leading-relaxed mb-6'>
               <div className='bg-slate-100 text-lg text-gray-700 leading-relaxed mb-6 rounded-lg p-3'>
                <code className='text-red-700'>
                  &nbsp;&lt;!-- Primary site navigation --&gt; <br />
                  &nbsp;&lt;nav aria-label="Main navigation"&gt; <br />
                    &nbsp;&nbsp;&nbsp;&lt;ul&gt; <br />
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt; <br />
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="/blog"&gt;Blog&lt;/a&gt;&lt;/li&gt; <br />
                    &nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br />
                  &nbsp;&lt;/nav&gt; <br />
                                      
                                      
                  &nbsp;&lt;!-- Breadcrumb navigation --&gt; <br />
                  &nbsp;&lt;nav aria-label="Breadcrumb"&gt; <br />
                    &nbsp;&nbsp;&nbsp;&lt;ol&gt; <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt; <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="/blog"&gt;Blog&lt;/a&gt;&lt;/li&gt; <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li aria-current="page"&gt;This Article&lt;/li&gt; <br />
                    &nbsp;&nbsp;&nbsp;&lt;/ol&gt; <br />
                  &nbsp;&lt;/nav&gt;


                </code>
               </div>
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-3'>When to Use &lt;nav&gt;</h3>
              <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>The primary site-wide navigation menu.</li>
                        <li>A table of contents for a long document or article.</li>
                        <li>Breadcrumb trails showing where you are in a site hierarchy.</li>
                        <li>Pagination controls (Previous / Next page links).</li>
                        <li>A sidebar with section links or related-page links.</li>
                      </ul>
              </div>

              <h3 className='text-2xl font-bold text-slate-900 mb-3'>When NOT to Use &lt;nav&gt;</h3>
              <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>A single standalone link (just use &lt;a&gt;).</li>
                        <li>A small group of miscellaneous footer links that aren't part of a navigation system.</li>
                        <li>Social media icon links — these are usually better left as a plain list.</li>
                      </ul>
              </div>
              <h2 className='text-3xl font-bold text-slate-900 mb-3'>The &lt;footer&gt; Tag</h2>
              <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Is It?</h3>
              <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                 The &lt;footer&gt; element represents the footer of a page or section. It typically contains metadata about its parent — authorship, copyright, related links, contact info, or supplementary navigation. <br />    
                 Importantly, &lt;footer&gt; isn't just for the bottom of a page. Any sectioning element (&lt;article&gt;, &lt;section&gt;, &lt;aside&gt;) can have its own &lt;footer&gt; with information specific to that block.

              </div>

              <h3 className='text-2xl font-bold text-slate-900 mb-3'>Basic Syntax</h3>
              <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className='bg-slate-100 text-lg text-gray-700 leading-relaxed mb-6 rounded-lg p-3'>
                        <code className='text-red-700'>
                         &nbsp;&lt;footer&gt; <br />
                            &nbsp; &nbsp; &lt;p&gt;Copyright © 2026 Your Company. All rights reserved.&lt;/p&gt; <br />
                            &nbsp; &nbsp; &lt;nav aria-label="Footer navigation"&gt; <br />
                              &nbsp; &nbsp; &nbsp; &lt;a href="/privacy"&gt;Privacy Policy&lt;/a&gt; <br />
                              &nbsp; &nbsp; &nbsp; &lt;a href="/terms"&gt;Terms of Use&lt;/a&gt; <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/nav&gt; <br />
                         &nbsp;&lt;/footer&gt;

                          
                        </code>
                      </div>
              </div>

                <h3 className='text-2xl font-bold text-slate-900 mb-3'>Common Attributes</h3>
                  <div className="table-container text-lg border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Attribute</th>
                        <th className="border border-slate-400 p-3 text-left">Value / Example</th>
                        <th className="border border-slate-400 p-3 text-left">What It Does</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>class</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-slate-700'>class="site-footer"  / <br /> class="article-footer"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Styling hook — essential for scoped footers</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>aria-label</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-slate-700'>aria-label="Site footer"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Helpful when multiple footers exist on a page</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>id</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-slate-700'>id="main-footer"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Anchor or JavaScript target</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>role</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900"><code className='text-slate-700'>role="contentinfo"</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Implicit in &lt;footer&gt; at page level — explicit for older browsers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-3'>Page-Level vs. Section-Level Footer</h3>
              <div className='text-lg text-gray-700 leading-relaxed mb-3'>This is where &lt;footer&gt; gets interesting — and where most developers miss an opportunity:</div>
                  <div className=" table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Page-level &lt;footer&gt;</th>
                        <th className="border border-slate-400 p-3 text-left">Section-level &lt;footer&gt;</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Direct child of &lt;body&gt;</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Inside &lt;article&gt;, &lt;section&gt;, or &lt;aside&gt;</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Site-wide info: copyright, links</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Content-specific info: author, publish date</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Gets contentinfo landmark role</td>
                        <td className="border border-slate-400 p-3 text-gray-900">No landmark role — just scoped metadata</td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900">Usually one per page</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Can have many — one per section/article</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className='text-2xl font-bold text-slate-900 mb-3'>Section-Level Footer Example</h3>
              <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <div className='bg-slate-100 text-lg text-gray-700 leading-relaxed mb-6 p-3 rounded-lg'>
                        <code className='text-red-700'>
                          &nbsp;&lt;article&gt; <br />
                            &nbsp;&nbsp;&lt;header&gt; <br />
                              &nbsp;&nbsp;&nbsp;&lt;h2&gt;How to Bake Sourdough&lt;/h2&gt; <br />
                            &nbsp;&nbsp;&lt;/header&gt;<br />
                            &nbsp;&nbsp;&lt;p&gt;Sourdough starts with a starter...&lt;/p&gt; <br />                                  
                            &nbsp;&nbsp;&lt;footer&gt; <br />
                              &nbsp;&nbsp;&nbsp;&lt;p&gt;Written by &lt;a href="/authors/jane"&gt;Jane Smith&lt;/a&gt;&lt;/p&gt; <br />
                              &nbsp;&nbsp;&nbsp;&lt;time datetime="2026-02-14"&gt;February 14, 2026&lt;/time&gt; <br />
                              &nbsp;&nbsp;&nbsp;&lt;p&gt;Tags: baking, bread, fermentation&lt;/p&gt; <br />
                            &nbsp;&nbsp;&lt;/footer&gt; <br />
                          &lt;/article&gt;


                        </code>
                      </div>
              </div>
                <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Goes Inside a Footer</h3>
                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                      <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                        <li>Copyright notices and legal text.</li>
                        <li>Author bio or attribution links.</li>
                        <li>Publication or last-updated date (use &lt;time&gt;).</li>
                        <li>Secondary navigation (site map, legal links, social links).</li>
                        <li>Contact information wrapped in &lt;address&gt;.</li>
                        <li>Related links or 'read more' sections.</li>
                      </ul>
                      
              </div>
               <h3 className='text-2xl font-bold text-slate-900 mb-3'>What Goes Inside a Footer</h3>
                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                  <div className=" text-lg table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Question</th>
                        <th className="border border-slate-400 p-3 text-left">&lt;div&gt;</th>
                        <th className="border border-slate-400 p-3 text-left">&lt;section&gt;</th>
                        <th className="border border-slate-400 p-3 text-left">&lt;nav&gt;</th>
                        <th className="border border-slate-400 p-3 text-left">&lt;footer&gt;</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Does it hold navigation links?</td>
                        <td className="border border-slate-400 p-3 text-gray-900">no</td>
                        <td className="border border-slate-400 p-3 text-gray-900">no</td>
                        <td className="border border-slate-400 p-3 text-gray-900">yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Sometimes</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Does it carry semantic meaning?</td>
                        <td className="border border-slate-400 p-3 text-gray-900">no</td>
                        <td className="border border-slate-400 p-3 text-gray-900">yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">yes</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Should it have a heading?</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Optional</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Usually yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Optional</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Usually no</td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Can it appear multiple times?</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Does it help screen readers?</td>
                        <td className="border border-slate-400 p-3 text-gray-900">No</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold">Use for layout only?</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">No</td>
                        <td className="border border-slate-400 p-3 text-gray-900">No</td>
                        <td className="border border-slate-400 p-3 text-gray-900">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
               <h3 className='text-2xl font-bold text-slate-900 mb-3'>Putting It All Together</h3>
              <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                Here's a realistic page structure using all four tags in harmony:
                      <div className='bg-slate-100 text-lg text-gray-700 p-3 leading-relaxed mb-6 rounded-lg'>
                        <code className='text-red-700'>
                          &nbsp;&lt;!DOCTYPE html&gt; <br />
                            &nbsp;&lt;html lang="en"&gt; <br />
                            &nbsp;&lt;body&gt; <br />


                              &nbsp;&nbsp;&lt;!-- Site header with main navigation --&gt; <br />
                              &nbsp;&nbsp;&lt;header&gt; <br />
                                &nbsp;&nbsp;&nbsp;&lt;a href="/"&gt;My Blog&lt;/a&gt; <br />
                                &nbsp;&nbsp;&nbsp;&lt;nav aria-label="Main navigation"&gt; <br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt; <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="/posts"&gt;Posts&lt;/a&gt;&lt;/li&gt; <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt; <br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br />
                                &nbsp;&nbsp;&nbsp;&lt;/nav&gt; <br />
                              &nbsp;&nbsp;&lt;/header&gt; <br />


                              &nbsp;&lt;main&gt; <br />
                                &nbsp;&nbsp;&lt;!-- div for layout only — no semantic meaning needed --&gt; <br />
                                &nbsp;&nbsp;&lt;div class="two-column-layout"&gt; <br />


                                  &nbsp;&nbsp;&nbsp;&lt;article&gt; <br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;section&gt; <br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Chapter 1: Getting Started&lt;/h2&gt; <br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Content here...&lt;/p&gt; <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/section&gt; <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;section&gt; <br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Chapter 2: Going Deeper&lt;/h2&gt; <br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;More content...&lt;/p&gt; <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/section&gt; <br />
                                    &nbsp;&nbsp;&nbsp;&lt;!-- Article-level footer with authorship info --&gt; <br />
                                    &nbsp;&nbsp;&nbsp;&lt;footer&gt; <br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;By &lt;a href="/authors/alex"&gt;Alex&lt;/a&gt; on
                                      &lt;time datetime="2026-03-01"&gt;March 1, 2026&lt;/time&gt;&lt;/p&gt; <br />
                                    &nbsp;&nbsp;&nbsp;&lt;/footer&gt; <br />
                                  &nbsp;&nbsp;&nbsp;&lt;/article&gt; <br />


                                &nbsp;&nbsp;&lt;/div&gt; <br />
                              &nbsp;&lt;/main&gt; <br />


                              &nbsp;&lt;!-- Page-level footer --&gt; <br />
                              &nbsp;&lt;footer&gt; <br />
                                &nbsp;&nbsp;&nbsp;&lt;nav aria-label="Footer navigation"&gt; <br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/privacy"&gt;Privacy&lt;/a&gt; <br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/terms"&gt;Terms&lt;/a&gt; <br />
                                &nbsp;&nbsp;&nbsp;&lt;/nav&gt; <br />
                                &nbsp;&nbsp;&nbsp;&lt;p&gt;&copy; 2026 My Blog&lt;/p&gt; <br />
                              &nbsp;&lt;/footer&gt; <br />


                            &nbsp;&lt;/body&gt; <br />
                            &nbsp;&lt;/html&gt;

                          
                        </code>
                      </div>
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-3'>Quick Reference Card</h3>
                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                  <div className=" text-lg table-container border border-slate-400">
                  <table className="w-full border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-400 p-3 text-left">Tag</th>
                        <th className="border border-slate-400 p-3 text-left">Semantic?</th>
                        <th className="border border-slate-400 p-3 text-left">Best Used For</th>
                        <th className="border border-slate-400 p-3 text-left">Avoid When</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;div&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">No</td>
                        <td className="border border-slate-400 p-3 text-gray-900">CSS layout, JS hooks, generic containers</td>
                        <td className="border border-slate-400 p-3 text-gray-900">A semantic tag would fit better</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;section&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Thematic content groups with headings</td>
                        <td className="border border-slate-400 p-3 text-gray-900">No clear theme or heading exists</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;nav&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Site menus, breadcrumbs, TOC links</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Individual links or non-nav link groups</td>
                      </tr>
                       <tr>
                        <td className="border border-slate-400 p-3 text-gray-900 font-bold"><code className='text-red-700'>&lt;footer&gt;</code></td>
                        <td className="border border-slate-400 p-3 text-gray-900">Yes</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Page/section credits, links, dates, copyright</td>
                        <td className="border border-slate-400 p-3 text-gray-900">Content that belongs in the main body</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>



                </div>
              </div>
            </main>
          );
      // Case m3 to m8 can be added by the user manually or I can provide boilerplate for them too
      default:
        return null;
    }
  };

  return (
    <TechLayout
      technology="html" 
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

export default function HTMLTutorialPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <HTMLContent />
    </Suspense>
  );
}
