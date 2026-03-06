'use client';

import { useState, useEffect } from 'react';
import TechLayout from '@/components/layout/tech-layout';

export default function ExcelPage() {
    const [activeSection, setActiveSection] = useState('introduction');

    const pageHeadings = [
        { id: 'introduction', title: 'Excel Introduction' },
        { id: 'basics', title: 'Basic Concepts' },
        { id: 'formulas', title: 'Formulas & Functions' },
        { id: 'module4', title:'interface'},
        { id: 'module5', title:'import & export'},
    ];

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
            case 'introduction':
                return (
                    <main>
                        <div className='animate-fade-in-up'>
                            <h1 id='introduction' className='text-4xl md:text-5xl font-extra-bold mb-8 text-center'>
                                Excel Introduction
                            </h1>
                            <div className='max-w-6xl mx-auto'>
                                <h2 className='text-3xl font-bold text-slate-900 mb-3'>
                                    Introduction to Excel for Data Analysis
                                </h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    Let's be real for a second. Before we start talking about cells and formulas, we need to get one thing straight: Data analysis isn't about loving Excel. It's about loving answers. <br />
                                    Think of Excel not as a complicated math robot, but as a giant, digital whiteboard where you can dump a bunch of puzzle pieces (your data) and finally figure out what the big picture looks like.

                                </p>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3'>What is Data Analysis in Excel? (In Plain English)</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    Imagine you own a small lemonade stand. Every day, you scribble in a notebook: <em>"Sold 10 cups, it was rainy,"</em> or <em>"Sold 50 cups, it was hot!"</em> <br />
                                    At the end of the summer, you have a notebook full of messy scribbles (that's your raw data). Now, you need to figure out what happened. You open Excel and type all that information in. <br />
                                    Data analysis in Excel is just you asking that notebook questions and getting clear answers:

                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li>"What was my best month?" (That’s a comparison).</li>
                                        <li>"What was my best month?" (That’s a comparison).</li>
                                        <li>"Does selling more lemonade actually happen when it's hot?" (That’s looking for a trend or relationship).</li>
                                    </ul>
                                    Excel just helps you do that without having to count on your fingers or use a calculator for every single thing. It turns the scribbles in your notebook into a story about your summer.
                                    
                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3'>Why Excel Remains Essential (The "Swiss Army Knife")</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    You might hear people say, "Real analysts use Python or R or Power BI." And those are great, powerful tools! But they’re like a full kitchen with industrial ovens. <br />
                                    Excel is your trusty Swiss Army knife. Why is it still so popular?

                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>It’s Everywhere:</strong> Almost every computer in an office has Excel. You don't have to ask the IT department for permission to install a complicated new program.</li>
                                        <li><strong>You Can "Play" With It:</strong> You don't need to be a programmer. You can click a cell, type something, and immediately see the result. It’s instant. You can move a column, sort a list, or change a number and see the whole picture update right away. It’s perfect for just playing around with numbers to see what happens (that's "rapid exploration").</li>
                                        <li><strong>Everyone Speaks Excel:</strong> If you make a chart in Excel and email it to your boss, they can open it. If you send a complex Python script, they’ll just stare at it blankly. It’s the common language of business.</li>
                                       
                                    </ul>
                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3'>Common Business Use Cases (Where You See It Every Day)</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    You don't have to be a scientist to use Excel. It's used in everyday business situations like these:
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Sales Analysis:</strong> A sales manager wants to know, "Which of my salespeople sold the most of the new product in the Texas region?" They use Excel to find that answer in 30 seconds.</li>
                                        <li><strong>Budgeting & Forecasting:</strong> A small business owner is planning for next year. They put last year's income and expenses into Excel and ask, "If I grow by 10%, how much money will I have in the bank by December?"</li>
                                        <li><strong>Marketing Analytics:</strong> A marketing person ran ads on Facebook and Google. They put the cost and the number of new customers into Excel to figure out which website gave them the cheaper customer (that's "analyzing ROI").</li>
                                        <li><strong>Operations Reporting:</strong> A warehouse manager tracks how many boxes are shipped each day. They use Excel to spot if shipments are slowing down, which might mean a problem in the supply chain.</li>
                                        <li><strong>HR Metrics:</strong> An HR manager needs to know how many people work in each department and how long they've stayed with the company.</li>
                                    </ul>
                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3'>Roles That Rely on Excel (Spoiler: It's Probably You)</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    It’s not just the person with "Data Analyst" in their job title. It’s:
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>The Finance Person</strong> building the budget.</li>
                                        <li><strong>The Marketing Manager</strong> tracking campaign results.</li>
                                        <li><strong>The Operations Coordinator</strong> managing inventory.</li>
                                        <li><strong>The Teacher</strong> tracking student grades.</li>
                                        <li><strong>The Small Business Owner</strong> keeping the books.</li>
                                        
                                    </ul>
                                    If your job ever asks you to look at a list of information and make a decision, you are doing data analysis. And Excel is your tool.

                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3'>Limitations of Excel (When You Need to Move On)</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    Excel is amazing, but it's not a superhero. It has weaknesses. Knowing them keeps you from getting into trouble.
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>It Can’t Handle HUGE Data:</strong> If you have a list of 10 million website visitors, Excel will either crash or become so slow you could make a cup of coffee while waiting for a cell to update. It has a hard limit of just over 1 million rows.</li>
                                        <ul className='list-[circle] pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li>[Image Description: A person trying to pour an entire ocean into a small drinking glass. The glass is overflowing. The glass is labeled "Excel" and the ocean is labeled "Big Data."]</li>
                                        </ul>
                                        <li><strong>Real-Time Collaboration is Clunky:</strong> Yes, you can co-author now, but it’s not as smooth as Google Sheets. If two people are typing in the same file, things can get messy.</li>
                                        <li><strong>It's Hard to Automate:</strong> If you have to do the exact same report every single morning, doing it manually in Excel every day is a waste of time. You'd be better off with a tool that does it for you automatically.</li>
                                        <li><strong>Easy to Break:</strong> You can accidentally type a number over a formula and not realize it. That one mistake can "break" your entire report, and you might never notice.</li>
                                    </ul>
                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-3'>When should you consider other tools?</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                                    If your data is massive (millions of rows), if you need a live-updating dashboard for a whole company, or if you're doing super complex statistics, it's time to look at tools like Power BI (for dashboards) or Python/R (for heavy-duty statistics). But for 90% of everyday business problems, Excel is still the perfect tool for the job.

                                </p>
                            </div>
                        </div>
                    </main>
                );
            case 'basics':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="basics" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                                
                            </h1>
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Excel vs Other Data Analysis Tools (Where Does It Fit?)</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    You wouldn't use a sledgehammer to hang a picture, and you wouldn't use a tiny screwdriver to demolish a wall. The same goes for data tools. Excel is one tool in a big toolbox. Understanding what the others do helps you know when to stick with Excel and when to reach for something else. <br />
                                    Let's look at how Excel compares to the other big names you hear about.

                                </p>
                                <h2 className='text-2xl font-bold text-slate-900 mb-6'>Excel vs Power BI: Workshop vs. Showroom</h2>
                                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    People often think they have to pick one. You don't. They are best friends with different jobs.
                                    Think of <strong>Excel as your workshop</strong>. It's where you get your hands dirty. You're building prototypes, fixing things, gluing parts together, and crafting a detailed model. It's messy, but it's powerful and flexible. You have all your tools laid out on the bench. <br />
                                    Think of <strong>Power BI as your showroom</strong>. It's clean, polished, and interactive. Once you've built your amazing machine (your data model) in the workshop, you wheel it out into the showroom so everyone can see it. In Power BI, people can click buttons, ask "what if," and see live data, but they can't accidentally break the engine.

                                </p>
                                <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                    <li><strong>Excel:</strong> Great for building the model and exploring data.</li>
                                    <li><strong>Power BI:</strong> Great for sharing the results and creating live dashboards for a whole company.</li>
                                </ul>
                                <h2 className='text-2xl font-bold text-slate-900 mb-6'>Excel vs Python/R: Driving a Car vs. Building One</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    This is probably the biggest mental leap. Python and R are not just different tools; they're a whole different way of working. They are programming languages.
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Excel is like driving a car.</strong> You get in, you turn the key, and you go. The steering wheel, gas pedal, and brakes are all right there (your menus and ribbons). You don't need to know how the engine works to drive to the grocery store. For 90% of business trips, this is perfect.</li>
                                        <li><strong>Python or R is like having a garage full of metal, tools, and an engine block.</strong> You have to build the car yourself, piece by piece, using code as your instructions. It takes a long time to learn and build, but once you're done, you can build any kind of vehicle. A monster truck? No problem. A spaceship? You can try. You can also build the exact same car a million times without ever making a mistake (that's "reproducibility").</li>
                                    </ul>
                                    So, when do you use which?
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Use Excel:</strong> when you need a quick answer today. You want to get in the car and drive.</li>
                                        <li><strong>Use Python/R:</strong> when you have a massive amount of data (millions of rows), you need to do very complex statistics, or you need to run the exact same analysis every single day automatically. You need to build a machine to do the work for you.</li>
                                    </ul>
                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-6'>Excel vs Google Sheets: The Best Friend Debate</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    This is the classic office argument. It mostly comes down to one thing: <strong>How do you like to work with others?</strong>
                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>Google Sheets is the ultimate team player.</strong> It lives in the cloud. You can send a link to five people, and you can all type in the same sheet at the exact same time. You can see their cursor moving, chatting in a comment, and watching the numbers update live. It’s magic for teamwork. However, if you give it a really big, complex file, it starts to sweat and slow down.</li>
                                        <li><strong>Excel is the powerful solo artist (that can now play in a band).</strong> For years, Excel was the king of horsepower. You could give it huge datasets, complex calculations, and it would chug along just fine. Its modern version is getting better at collaboration, but it's still not as smooth as Google Sheets. It's also an installed program, so you don't need the internet to use it (great for working on a plane!).</li>
                                        <strong className='text-xl'>The Simple Rule:</strong>
                                        <li>Need to collaborate with 5 people in real-time right now? <strong>Google Sheets.</strong></li>
                                        <li>Need to crunch a massive dataset or build a complex financial model? <strong>Excel.</strong></li>
                                    </ul>
                                    
                                </div>
                                <h2 className='text-2xl font-bold text-slate-900 mb-6'>When is Excel the Right Tool? (The Sweet Spot)</h2>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    So, with all these other options, when should you absolutely stick with Excel? Here’s the checklist:

                                    <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                        <li><strong>When your data isn't "Big Data":</strong> If you have less than a million rows (which is actually a ton for most businesses), Excel is perfect. It's only when you cross that line that you need to worry.</li>
                                        <li><strong>When you need the answer today:</strong> It's for "ad-hoc" analysis. Your boss walks over and says, "Can you quickly tell me how our sales in the North region compared to last year?" You can have the answer in Excel before someone else has even opened their Python editor.</li>
                                        <li><strong>When you're building a model:</strong> If you need to build a budget for next year that has 50 different assumptions and scenarios, Excel is unmatched. Its grid layout is perfect for this kind of "what-if" thinking.</li>
                                        <li><strong>When you have to share with "normal" people:</strong> Let's be honest. If you send a Power BI link to someone in accounting, they might not know how to use it. If you send Python code, they'll panic. If you send an Excel file, everyone can open it, look at the numbers, and understand it. It's the universal language of business. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </main>
                );
            case 'formulas':
                return (
                    <main>
                        <div className="animate-fade-in-up">
                            <h1 id="formulas" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                            
                            </h1>
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Excel Setup for Data Analysis (Setting Up Your Workspace)</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Imagine a carpenter. They don't just buy a hammer and start building a house. They sharpen their chisels, organize their screws, and make sure their saw is calibrated. If their workspace is a mess, the house will be a mess. <br />
                                    The same goes for Excel. Before we analyze a single number, let's "sharpen" Excel so it works for you, not against you.
                                </p>
                                <h3 className="text-2xl font-bold mb-4">Excel Versions: Desktop vs. Online (The Real Deal vs. The Lite Version)</h3>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    You might be used to opening Excel in your web browser because it's easy. That's fine for looking at a grocery list. But for serious data analysis? You need the real program installed on your computer.

                                    <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-6'>
                                        <li><strong>Excel Online (The Browser Version):</strong> Think of this as the "demo mode." It's great if you just need to view a file, scroll around, or type a few numbers. But it's missing the secret weapons we'll be using later. It can't run Power Query (a magic tool for cleaning data) and its PivotTables are basic. It's like having a toy car—fun to look at, but you can't drive it to work.</li>
                                        <li><strong>Excel Desktop (The Installed App):</strong> This is the real deal. It has all the horsepower, all the buttons, and all the hidden features. It can handle massive files and complex formulas without breaking a sweat. If you have a Microsoft 365 subscription, you already have access to download and install this on your computer. Use it.</li>
                                    </ul>
                                    <strong>The Rule:</strong> If you're doing real analysis, use the Desktop app. Only use the Online version for quick checks or showing someone else your finished work.

                                </div>
                                <h3 className='text-2xl font-bold text-slate-900 mb-6'>Installing the Data Analysis ToolPak (Your Statistics Kit)</h3>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    If you ever need to do anything even slightly scientific—like predicting future sales, understanding if two things are related, or creating a histogram (a fancy bar chart of frequencies)—you need this. <br />
                                    It's like Excel has this super-useful toolbox hidden in the basement. You just have to go get it and bring it upstairs. Here's how:

                                    <ol className='list-decimal pl-6 space-y-2 text-slate-900 mb-6'>
                                        <li>Click on <strong>File</strong> (top left corner).</li>
                                        <li>Click <strong>Options</strong> (all the way at the bottom of the left-hand menu). This opens a new window.</li>
                                        <li>In that new window, click on <strong>Add-ins</strong> on the left side.</li>
                                        <li>Look at the very bottom of this window. You'll see a dropdown menu next to the word "Manage:" that probably says "Excel Add-ins". Click the <strong>Go...</strong> button next to it.</li>
                                        <li>A small box will pop up. Check the box next to <strong>Analysis ToolPak</strong>.</li>
                                        <li>Click <strong>OK</strong>.</li>
                                    </ol>
                                    Now, if you go to the top ribbon of Excel and click the Data tab, you'll see a new button way over on the far right called Data Analysis. That's your new statistics toolkit.

                                </div>
                                <h3 className='text-2xl font-bold text-slate-900 mb-6'>Essential Add-ins for Analysts (The Power-Ups)</h3>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    The ToolPak is great, but there are two other power-ups you should know about. Think of them like buying extra gear for your favorite video game character.
                                    <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-6'>
                                        <li><strong>Power Pivot:</strong> This is Excel on steroids. Normally, Excel works with one spreadsheet at a time. Power Pivot lets you act like a database administrator. You can suck in millions of rows of data from different tables (like one table with customer info and another with sales info) and build relationships between them, just like in Power BI. It's for when your data gets big and complicated. You enable it the exact same way as the ToolPak (File &gt; Options &gt; Add-ins &gt; Go), but you check the box for "Microsoft Power Pivot for Excel".</li>
                                        <li><strong>Solver:</strong> This is for "what-if" problems with a goal. For example: "I have a budget of $10,000 to spend on Facebook, Google, and TV ads. I know roughly how many customers each dollar brings in. How should I spend the money to get the most customers?" Solver will crunch the numbers and find the perfect combination for you. You can also find this in the Add-ins menu.</li>
                                    </ul>
                                </div>
                                <h3 className='text-2xl font-bold text-slate-900 mb-6'>Configuring Excel Options for Efficiency (Small Tweaks, Big Wins)</h3>
                                <div className='text-lg text-gray-700 leading-relaxed mb-6'>
                                    These are just two small settings that I change on every single computer I use. They drive me crazy if they're not set this way.

                                    <ol className='list-decimal pl-6 space-y-2 text-slate-900 mb-6'>
                                        <li><strong>Stop the Moving Cursor (The "Stay Put" Setting):</strong><br />By default, when you type something into a cell and hit Enter, Excel automatically jumps down to the next cell. This is annoying if you want to type data across a row, or if you're just checking a formula and want to stay where you are.</li>
                                        <ul className='list-[circle] pl-6 space-y-2 text-slate-900 mb-6'>
                                            <li>Go to <strong>File &gt; Options &gt; Advanced.</strong></li>
                                            <li>Under the "Editing options" section, find the checkbox that says <strong>"After pressing Enter, move selection."</strong></li>
                                            <li><strong>Uncheck it.</strong></li>
                                            <li>Now, you can type in a cell, hit Enter, and your cursor stays right there. It's a small thing, but it gives you so much more control.</li>
                                        </ul>
                                        <li><strong>Keep Your Paste Options Handy:</strong><br />In that same "Advanced" menu, scroll down a little to the "Cut, copy, and paste" section.</li>
                                        <ul className='list-[circle] pl-6 space-y-2 text-slate-900 mb-6'>
                                            <li>Make sure <strong>"Show Paste Options button when content is pasted"</strong> is checked.</li>
                                            <li>This puts a little control (Ctrl) menu at the bottom right of your screen every time you paste something. It lets you instantly change formatting (like "Match Destination Formatting" or "Keep Source Column Widths") without having to dig through menus. It's a huge time-saver.</li>
                                        </ul>
                                    </ol>
                                    [Image Description: A screenshot of the Excel Options window, specifically the "Advanced" tab. A red arrow points to the checkbox for "After pressing Enter, move selection," showing it being unchecked. Another arrow points to the "Show Paste Options button" checkbox, showing it being checked.]

                                </div>




                                {/* <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 mb-8">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">=SUM()</span>
                                            <span className="text-gray-700">Adds all the numbers in a range of cells.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">=AVERAGE()</span>
                                            <span className="text-gray-700">Calculates the mean of a group of numbers.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">=IF()</span>
                                            <span className="text-gray-700">Checks whether a condition is met and returns one value if TRUE, and another if FALSE.</span>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </main>
                    
                );

                case 'module4':
                    return(
                        <main>
                            <div className="animate-fade-in-up">
                                <h1 id="module4" className="text-4xl md:text-5xl font-extra-bold mb-8 text-center">
                                    
                                </h1>
                                <div className="max-w-6xl mx-auto">
                                    <h2 className="text-3xl font-bold text-slate-900 mb-3">
                                        The Excel Interface for Analysts (A Guided Tour)
                                    </h2>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                                        Okay, you've opened Excel. You see the grid. You see the little tabs at the top. You probably know how to make a cell bold. <br />
                                        But if you want to be an analyst, you need to look at Excel differently. You need to stop seeing just a grid and start seeing a cockpit. <br />
                                        Up in the front, you have your steering wheel, your altimeter, and your fuel gauge. Down in the corner, you have your speedometer. The person who just knows how to start the car looks at the speedometer. The pilot looks at all the instruments to understand if the flight is on course. <br />
                                        Let's go through the cockpit, piece by piece.
                                    </p>
                                    <h3 className='text-2xl font-bold text-slate-900 mb-6'>The Ribbon Tabs: Your Analyst's Toolkit</h3>
                                    <div className="text-lg text-gray-700 leading-relaxed mb-3">
                                        You've probably spent most of your time on the "Home" tab, making things bold or changing font sizes. Forget that for a minute. As an analyst, you live on these tabs instead.
                                        <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-6'>
                                            <li><strong>The "Data" Tab (Your Mission Control):</strong><br />This is the most important tab in your entire life. It's where you tell Excel to manipulate the data itself.</li>
                                            <ul className='list-[circle] pl-6 space-y-2 text-slate-900 mb-6'>
                                                <li><strong>Sort & Filter:</strong> The basics, but so powerful. Need to see your top 10 customers? Filter out everyone else. Need to put your sales reps in order from best to worst? Sort them.</li>
                                                <li><strong>Data Validation:</strong> This is your bouncer. It controls what people can type into a cell. Let's say you're building a budget template for your team. You want them to only pick a department from a list (like "Sales," "Marketing," "IT"), not type random things. Data Validation lets you create that dropdown list, preventing messy data before it even happens.</li>
                                                <li><strong>What-If Analysis:</strong> This is where the magic happens for forecasting. It contains the "Goal Seek" tool. Example: <em>"I need my business to make $100,000 in profit. I know my costs. What does my sales number have to be?"</em> Excel will churn through possibilities and tell you the exact sales target you need to hit.</li>
                                                <li><strong>Get & Transform Data (Power Query):</strong> This is the gateway to the most powerful data-cleaning tool in Excel. We'll spend a whole section on this later. It's how you import messy data from text files, databases, or websites and clean it up.</li>
                                            </ul>
                                            <li><strong>The "Formulas" Tab (Your Function Library):</strong><br />This is your reference desk. You don't need to memorize every formula. You just need to know where to find them.</li>
                                            <ul className='list-[circle] pl-6 space-y-2 text-slate-900 mb-6'>
                                                <li><strong>Insert Function (fx):</strong> If you're ever stuck, click this button. It opens a wizard that helps you find the right formula by searching for what you want to do (like "find something in a list").</li>
                                                <li><strong>Formula Auditing:</strong> This is your detective kit. If a formula is giving you a wrong answer or an error, you can use "Trace Precedents" to draw arrows to all the cells that feed into it. It's like following the wires to see where the short circuit is.</li>
                                            </ul>
                                            <li><strong>The "Insert" Tab (Your Art Studio):</strong><br />This is where you build the things other people will see.</li>
                                            <ul className='list-[circle] pl-6 space-y-2 text-slate-900 mb-6'>
                                                <li><strong>PivotTable:</strong> The king of analysis tools. This button is your ticket to summarizing thousands of rows of sales data into a neat table in seconds.</li>
                                                <li><strong>Recommended Charts:</strong> If you're not sure what chart to use, select your data and click this. Excel will show you a gallery of previews. "Oh, that line chart looks good for my sales over time. I'll pick that one."</li>
                                            </ul>
                                            <li><strong>The "Power Query" Tab (Your Workshop):</strong><br />This tab is special. It doesn't even show up all the time. It only appears when you are inside the Power Query editor, cleaning data. Think of it as a separate room in your house. When you step into that room, a new set of tools appears on the wall. This tab has buttons for splitting columns, removing duplicates, and changing data types. It only appears when you need it.</li>
                                        </ul>
                                    </div>
                                    <h3 className='text-2xl font-bold text-slate-900 mb-6'>The Quick Access Toolbar: Your "Frequently Used" Shelf</h3>
                                    <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                        Look at the very, very top of the Excel window. It's that tiny little bar above the ribbon, usually with a few small icons like Save and Undo. <br />
                                        This is your most valuable real estate. It's like the shelf right next to your desk where you keep the tools you grab every five minutes. Don't let it go to waste. <br />
                                        You can put any button here, and it will always be visible, no matter which tab you're on.

                                        <ul className='pl-6 space-y-2 text-slate-900 mb-6'>
                                            <li><strong className='text-xl'>How to use it:</strong><br />Right-click on any button on the ribbon (say, the "Filter" button on the Data tab). Choose "Add to Quick Access Toolbar." Boom. Now that little filter funnel icon lives at the top of your screen forever.</li>
                                            <li><strong className='text-xl'>What I add to mine:</strong></li>
                                            <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-6'>
                                                <li><strong>Quick Print:</strong> (I still print reports for meetings).</li>
                                                <li><strong>Spelling:</strong> (Sending a report with a typo is embarrassing).</li>
                                                <li><strong>Sort Ascending / Sort Descending:</strong> (A and Z with a little arrow).</li>
                                                <li><strong>Filter:</strong> (The funnel).</li>
                                            </ul>
                                        </ul>
                                    </div>
                                    <h3 className='text-2xl font-bold text-slate-900 mb-6'>The Formula Bar and Name Box: Your GPS and Map</h3>
                                    <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                        Just above the grid, you have two crucial items.
                                        <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-6'>
                                            <li><strong>The Name Box (Your GPS):</strong><br />It's that little white box all the way on the left that says "A1" when you click on cell A1.</li>
                                            <ul className='list-[circle] pl-6 space-y-2 text-slate-900 mb-6'>
                                                <li><strong>The Basic Use:</strong> It just tells you where you are.</li>
                                                <li><strong>The Superpower (Named Ranges):</strong> This is a game-changer for understanding your own work.</li>
                                                <ul className='list-[square] pl-6 space-y-2 text-slate-900 mb-6'>
                                                    <li><strong>The Problem:</strong> Imagine you have a formula like =SUM(B2:B100). What does that mean? Is that the total sales? Total costs? You have to go look at column B to figure it out.</li>
                                                    <li><strong>The Solution:</strong> Select all your sales numbers (B2:B100). Click inside the Name Box, type a name like Sales_2023, and press Enter.</li>
                                                    <li><strong>The Result:</strong> Now you can write a formula that says =SUM(Sales_2023). It reads like plain English! It's not just a formula anymore; it's a sentence. This is incredibly helpful when you come back to a spreadsheet six months later and have no idea what you were doing.</li>
                                                </ul>
                                            </ul>
                                            <li><strong>The Formula Bar (Your Map):</strong><br />This is the long white bar next to the Name Box where you see the contents of a cell.</li>
                                            <ul className='list-[circle] pl-6 space-y-2 text-slate-900 mb-6'>
                                                <li><strong>Don't Hide It:</strong> Some people hide this to save space. Don't. You need to see your formulas.</li>
                                                <li><strong>Expand It:</strong> If you have a long, complicated formula, it gets cut off. See that little down arrow on the far right of the Formula Bar? Click it (or press Ctrl+Shift+U). It expands, giving you a multi-line text box to write and read complex formulas. It's like unfolding a map so you can see the whole route.</li>
                                            </ul>
                                        </ul>
                                    </div>
                                    <h3 className='text-2xl font-bold text-slate-900 mb-6'>The Status Bar: Your Instant Dashboard</h3>
                                    <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                        Look at the very, very bottom of the screen. That's the Status Bar. It usually just says "Ready" or "Average: ..." on the right side. <br />
                                        Here's a secret: you can customize this, and it becomes your fastest analysis tool.

                                        <ul className='pl-6 space-y-2 text-slate-900 mb-6'>
                                            <li><strong>The Setup:</strong><br />Right-click anywhere on that gray Status Bar. A huge list of options pops up. This is your menu of instant insights.</li>

                                            <li><strong>What you MUST check (enable):</strong></li>
                                            <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-6'>
                                                <li><strong>Average</strong></li>
                                                <li><strong>Count</strong> (Counts cells with numbers)</li>
                                                <li><strong>Numerical Count</strong> (Counts cells with anything in them)</li>
                                                <li><strong>Minimum</strong></li>
                                                <li><strong>Maximum</strong></li>
                                                <li><strong>Sum</strong></li>
                                            </ul>
                                            <li><strong>The Magic:</strong><br />Now, go to your spreadsheet. Select a column of sales numbers. Without writing a single formula, just by highlighting them, look at the bottom right corner of your Status Bar. <br />
                                                It will instantly tell you: <br />
                                                Average: $1,250 | Count: 45 | Sum: $56,250 <br />
                                                This is the best "sanity check" in the world. Your boss asks, "Hey, what were our total sales last month?" You can highlight the column and give them the answer in two seconds. If the Sum looks way too low, you know immediately something is wrong with your data. <br />
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className='text-2xl font-bold text-slate-900 mb-6'>Sheet Navigation and Organization: The "You'll Thank Me Later" Habits</h3>
                                    <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                        When you first start a project, you have one sheet. By the end of the week, you have "Sheet1," "Sheet2," "Sheet1 (2)," "Final," "Final_REAL," and "Final_FINAL_2." It's a mess. <br />
                                        Professional analysts organize their workbook like a well-structured file cabinet. Here's how.
                                        <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-6'>
                                            <li><strong>Color-Code Your Tabs:</strong><br />Right-click on a sheet tab (at the bottom), go to Tab Color, and pick a color. Create a system and stick to it.</li>
                                            <ul className='list-[circle] pl-6 space-y-2 text-slate-900 mb-6'>
                                                <li><strong>Blue Tabs:</strong> Raw data. Never touch this sheet. This is your source of truth.</li>
                                                <li><strong>Green Tabs:</strong> Calculations and analysis. This is where you build your PivotTables and write your formulas.</li>
                                                <li><strong>Orange Tabs:</strong> The final reports. These are the clean, pretty sheets you will print or present to your boss.</li>
                                            </ul>
                                            <li><strong>Use Meaningful Names:</strong><br />Double-click that sheet tab and rename it.</li>
                                            <ul className='list-[circle] pl-6 space-y-2 text-slate-900 mb-6'>
                                                <li>Don't name it: Sheet1</li>
                                                <li>Do name it: Raw_Data_2023 or Sales_Summary_Report</li>
                                            </ul>
                                        </ul>
                                        Imagine opening a workbook a year from now. You see a blue tab called MasterData and an orange tab called Q4_Presentation. You will instantly know where to look for the raw numbers and which sheet to open for the meeting. It takes 10 seconds to set up and saves you 10 minutes of frustration later.

                                        
                                    </div>
                                </div>
                            </div>
                        </main>
                    );


                    case 'module5':
                        return (
                            <main>
                                <div className='animate-fade-in-up'>
                                    <h1 id='module5' className='text-4xl md:text-5xl font-extra-bold mb-8 text-center'>
                                     
                                    </h1>
                                    <div className='max-w-6xl mx-auto'>
                                        <h2 className='text-3xl font-bold text-slate-900 mb-3'>
                                            Data Import and Preparation
                                            
                                        </h2>
                                        <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                                            Here's a secret they don't tell you in fancy data science courses: Cleaning up the mess is the real job. <br />
                                            Anyone can look at a nice, clean spreadsheet and make a chart. The skill is taking the ugly, messy, badly formatted chaos that comes out of a real business system and turning it into something usable. In fact, experts say that 80% of your time as an analyst will be spent on this step alone. <br />
                                            Excel has a secret weapon for this. It's called Power Query, and it will change your life.
                                        </p>
                                        <h2 className='text-2xl font-bold text-slate-900 mb-3'>
                                            Importing Data from Various Sources (Stop Copy-Pasting!)
                                        </h2>
                                        <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                                           Let me tell you about the biggest mistake beginners make. They get a report from their boss, a CSV file from some system. They open it, press Ctrl+A, Ctrl+C, go to their Excel workbook, and press Ctrl+V. Done, right? <br />
                                           Wrong. This is a trap. <br />
                                           What happens when you get next month's report? You have to do it all over again. And if the source file changes format? Your paste breaks. <br />
                                           The professional way is to import the data. This creates a live link between your Excel file and the source. When the source updates, you just click "Refresh," and your analysis updates with it.


                                        </p>
                                        <h2 className='text-2xl font-bold text-slate-900 mb-3'>
                                             From Text/CSV Files (The Everyday Workhorse)
                                        </h2>
                                        <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                            This is the most common task you'll do. Your accounting system, your website analytics, your CRM—they all love to spit out CSV files.

                                        <ul className='pl-6 space-y-2 text-slate-900 mb-6'>
                                            <li><strong>Here's how to do it the right way:</strong></li>
                                        <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                            <li>Go to the <strong>Data</strong> tab on the ribbon.</li>
                                            <li>Look for the group called <strong>"Get & Transform Data."</strong></li>
                                            <li>Click the button that says <strong>"From Text/CSV."</strong></li>
                                            <li>Find your file on your computer and click Import.</li>
                                        </ol>
                                        <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                            At this point, Excel shows you a preview window. You'll see a little table of your data. At the bottom, you have two important buttons:


                                        </div>
                                            <li><strong>Load:</strong> This just dumps the data into a new sheet. It's quick, but it's dumb. It loads the data exactly as-is, even if it's messy.</li>
                                            <li><strong>Transform Data:</strong> This opens the Power Query editor. This is the smart choice. Click this one.</li>
                                        </ul>
                                        </div>
                                        <h2 className='text-2xl font-bold text-slate-900 mb-3'>
                                            From Databases (Connecting to the Big Leagues)
                                        </h2>
                                        <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                            If you work in a larger company, your data probably lives in a database like SQL Server. This is the "source of truth" for the entire company.

                                            <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li>Go to Data &gt; Get Data &gt; From Database &gt; From SQL Server Database.</li>
                                                <li>A box pops up asking for a Server Name. This is like the address of the company's data warehouse. Your IT department can give you this. (e.g., COMPANY-SERVER-01 or sql.company.com).</li>
                                                <li>It might ask for a username and password.</li>
                                                <li>Once connected, you'll see a list of all the tables in that database. You can pick one, just like picking a sheet in Excel, or if you're fancy, you can write a SQL query to ask for exactly the data you need.</li>
                                            </ol>
                                            The magic here? This is a live connection. If you set this up right, your Excel report can always show the absolute latest numbers from the company database.

                                        </div>
                                        <h2 className='text-2xl font-bold text-slate-900 mb-6'>From Web Sources (Grabbing Data from the Internet)</h2>
                                        <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                            Let's say you need a list of the largest companies in the world, or the current exchange rate, or a table of sports statistics from a website. Don't retype it. Pull it directly.

                                            <ol className='list-decimal pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li>Go to Data &gt; Get & Transform Data &gt; From Web.</li>
                                                <li>Paste the URL of the webpage. <br /> (e.g., https://en.wikipedia.org/wiki/List_of_countries_by_GDP).</li>
                                                <li>Click OK. Excel will take a second to "read" the page.</li>
                                                <li>A navigator window will appear, showing you a list of all the tables it found on that page. You might see "Table 0," "Table 1," etc. Click on each one to see a preview.</li>
                                                <li>Find the table you want, and click either Load or Transform Data.</li>
                                            </ol>

                                        </div>
                                        <h2 className='text-2xl font-bold text-slate-900 mb-3'>From Other Applications (The Long Tail)</h2>
                                        <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                            Excel is surprisingly good at talking to other software. Under the Data &gt; Get Data &gt; From Other Sources menu, you'll find connectors for:

                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li><strong>SharePoint Lists:</strong> If your team uses SharePoint to track projects, you can pull that list directly into Excel.</li>
                                                <li><strong>Microsoft Exchange:</strong> You could theoretically pull your calendar or emails.</li>
                                                <li><strong>OData Feed:</strong> A common way for modern web applications to share data.</li>
                                                <li><strong>Blank Query:</strong> For when you want to write your own custom connection instructions.</li>
                                            </ul>
                                        </div>
                                        <h2 className='text-2xl font-bold text-slate-900 mb-3'>Power Query in Excel (The "Get & Transform" Superpower)</h2>
                                        <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                            Okay, we've mentioned it a few times. What is this thing? <br />
                                            <strong>Power Query</strong> (officially called "Get & Transform") is a separate program living inside Excel. Think of it as your own personal data kitchen. When you click "Transform Data," you leave your Excel spreadsheet behind and walk into this kitchen.
                                            <h2 className='text-xl font-bold text-slate-900 mb-3'>Why is it so powerful?</h2>
                                            Because in this kitchen, everything you do is recorded.


                                            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
                                                <li>You chop a carrot (Remove a column). It's recorded.</li>
                                                <li>You peel a potato (Change text to lowercase). It's recorded.</li>
                                                <li>You boil some water (Filter out rows with errors). It's recorded.</li>
                                            </ul>
                                            On the right side of the Power Query window, there's a panel called "Applied Steps." It's a list of everything you just did. Every single click. <br />
                                            [Image Description: A screenshot of the Power Query Editor window. The main area shows a grid of data. On the right-hand side, a panel titled "QUERY SETTINGS" is highlighted. Under "APPLIED STEPS," there is a list: "Source," "Promoted Headers," "Changed Type," "Removed Columns," "Filtered Rows." Each step has a little settings icon next to it.] <br /><br />

                                            <h2 className='text-2xl font-bold text-slate-900 mb-3'>Now, here's the million-dollar magic:</h2>
                                            Next month, you get a new CSV file with the same name. You put it in the same folder. You go back to your Excel file, right-click anywhere in the table, and choose Refresh. <br />
                                            Excel will replay that entire list of steps—Source, Promoted Headers, Changed Type, Removed Columns, Filtered Rows—on your new file. You get a perfectly cleaned dataset in 5 seconds, without doing any work. That is the power of Power Query.

                                            
                                        </div>
                                        <h2 className='text-2xl font-bold text-slate-900 mb-3'>Data Cleaning Techniques (The "Messy to Tidy" Playbook)</h2>
                                        <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                            Let's get into the actual moves you'll use in Power Query (or sometimes on the sheet) to clean data.

                                            <ul className='pl-6 space-y-2 text-slate-900 mb-6'>
                                                <li><strong>Remove Duplicates</strong><br />This is the most common cleaning task. Real systems are buggy. Sometimes they record the same transaction twice.</li>
                                                <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-3'>
                                                    <li><strong>In Power Query:</strong> Right-click the column header of the column that should be unique (like "Order ID" or "Customer Email"), and select Remove Duplicates.</li>
                                                    
                                                    <li><strong>On the Worksheet:</strong> Select your entire data range, go to the Data tab, and click the Remove Duplicates button. A box will pop up asking you which columns to check.</li>
                                                </ul>
                                                <li><strong>A critical thinking point:</strong> What defines a duplicate?</li>
                                                <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-3'>
                                                    <li>If you check all columns, you're looking for exact duplicate rows. (Rare)</li>
                                                    <li>If you check only "Customer ID," you'll end up with one row per customer, which is useful for a customer list but terrible for sales analysis. <strong>Think carefully before you click</strong>.</li>
                                                </ul>
                                                <li><strong>Text to Columns (Splitting Things Up)</strong><br />You often get data where someone has crammed too much information into one column. Like a full name ("John Smith") or a full address ("123 Main St, Austin, TX, 78701"). <br />
                                                    You need to split these into separate columns.
                                                </li>
                                                <li><strong>On the Worksheet:</strong></li>
                                                <ol className='list-decimal pl-6 space-y-2 text-slate-900 mb-3'>
                                                    <li>Select the column with the combined data.</li>
                                                    <li>Go to Data &gt; Text to Columns.</li>
                                                    <li>Choose Delimited (if it's separated by commas or spaces) or Fixed Width (if the data is in evenly spaced columns).</li>
                                                    <li>Tell it what the delimiter is (e.g., a comma or a space). Click Finish. Boom, one column becomes two or three.</li>
                                                </ol>
                                                <li><strong>Flash Fill (The Pattern Recognizer)</strong><br />This is one of the coolest, most magical features in Excel. It's like teaching Excel a pattern by example.</li>
                                                <strong className='text-xl'>Scenario:</strong> You have a column with first and last names ("John Smith"). You want a column with just the first names. You could write a complicated formula. Or you could use Flash Fill.
                                                <ol className='list-decimal pl-6 space-y-2 text-slate-900 mb-3'>
                                                    <li>In the column next to your data, type the first name for the first row ("John").</li>
                                                    <li>In the second row, type the first name for the second row ("Jane"). You've given Excel two examples.</li>
                                                    <li>Now, select the cell below those two (or just press Ctrl+E).</li>
                                                </ol>
                                                <div className='text-lg text-gray-700 leading-relaxed mb-3'>
                                                    Excel will instantly fill down the entire column, guessing that you want to extract the first word from every cell. It's not perfect for everything, but for quick text extraction, it's unbeatable.

                                                </div>
                                                <li><strong>Find and Replace (The Quick Fix)</strong><br />
                                                Sometimes you just need to swap one thing for another. Maybe "N/A" should be blank, or "USA" should be "United States."</li>
                                                <ul className='list-disc pl-6 space-y-2 text-slate-900 mb-6'>
                                                    <li><strong>The Shortcut: Ctrl + H.</strong></li>
                                                    <li><strong>Pro Tip (Crucial!):</strong><br /> If you have a PivotTable report, and you see a typo in one of the row labels (e.g., "Mareting" instead of "Marketing"), your instinct might be to click in the PivotTable and change it. Don't do this. It will break things. Always go back to the source data sheet, find the cell with "Mareting," use Find and Replace there to fix it to "Marketing," and then refresh your PivotTable. Fix the root, not the branch.</li>
                                                </ul>
                                                <li><strong>Data Validation Rules (Stopping the Mess Before It Starts)</strong> <br />
                                                This is about being proactive. If you are building a spreadsheet that other people will type into, you need to protect them from themselves. <br />
                                                Let's say you're building an expense report template. You have a column for "Department." You know the only valid departments are Sales, Marketing, IT, and HR.
                                                </li>
                                                <ol className='list-decimal pl-6 space-y-2 text-slate-900 mb-6'>
                                                    <li>Select the cells in that column where people will type.</li>
                                                    <li>Go to Data&gt;Data Validation (in the Data Tools group).</li>
                                                    <li>In the dialog box, under "Allow:", choose List.</li>
                                                    <li>In the "Source:" box, type: Sales, Marketing, IT, HR (with commas).</li>
                                                    <li>Click OK.</li>
                                                </ol>

                                            </ul>
                                            <p className='text-lg text-gray-700 leading-relaxed mb-3'>
                                                Now, those cells have a little dropdown arrow. Users can only pick from your list. They can't type "Sales " with a space, or "salEs," or "Mareting." They are forced to give you clean data from the very beginning. <br />
                                                [Image Description: A screenshot of the Data Validation dialog box. The "Settings" tab is selected. Under "Validation criteria," "Allow:" is set to "List." The "Source:" box contains the text "Sales, Marketing, IT, HR". A red arrow points to the "Ignore blank" checkbox, which is checked.]


                                                
                                            </p>

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
            technology="excel"
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
