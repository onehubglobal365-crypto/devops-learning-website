"use client";

import React, { useState, useEffect } from "react";
import { 
    GraduationCap, 
    Users, 
    TrendingUp, 
    Clock, 
    BookOpen, 
    ChevronRight, 
    Search, 
    Filter,
    BarChart3,
    ArrowUpRight,
    Star,
    LayoutGrid,
    LayoutList
} from "lucide-react";

interface CourseStat {
    id: string;
    name: string;
    enrollment: number;
    activeStudents: number;
    completionRate: number;
    status: 'Active' | 'Beta' | 'New';
    category: string;
    lastUpdated: string;
}

export default function CoursesAdminPage() {
    const [courses, setCourses] = useState<CourseStat[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Dynamic data derived from actual users
    useEffect(() => {
        const fetchAndAggregateData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("http://localhost:5000/api/users");
                const users = await response.json();
                
                if (Array.isArray(users)) {
                    // Predefined course metadata
                    const courseMetadata: Record<string, { name: string, category: string, status: 'Active' | 'Beta' | 'New' }> = {
                        'java-fullstack': { name: 'Java Full Stack', category: 'Development', status: 'Active' },
                        'python-fullstack': { name: 'Python Full Stack', category: 'Development', status: 'Active' },
                        'web-dev': { name: 'Web Development', category: 'Development', status: 'Active' },
                        'devops': { name: 'DevOps Engineering', category: 'Infrastructure', status: 'Active' },
                        'data-science': { name: 'Data Science', category: 'Data', status: 'Beta' },
                        'sql': { name: 'SQL', category: 'Database', status: 'Active' },
                        'linux': { name: 'Linux Mastery', category: 'Infrastructure', status: 'Active' },
                        'medical-coding': { name: 'Medical Coding', category: 'Medical', status: 'Active' },
                        'azure-basics': { name: 'Azure Fundamentals', category: 'Cloud', status: 'New' }
                    };

                    // Aggregate counts
                    const counts: Record<string, number> = {};
                    users.forEach((user: any) => {
                        const course = user.preferredCourse || 'unassigned';
                        counts[course] = (counts[course] || 0) + 1;
                    });

                    // Map to CourseStat objects
                    const aggregated: CourseStat[] = Object.entries(courseMetadata).map(([slug, meta]) => {
                        const enrollment = counts[slug] || 0;
                        return {
                            id: slug,
                            name: meta.name,
                            category: meta.category,
                            status: meta.status,
                            enrollment: enrollment,
                            activeStudents: Math.floor(enrollment * 0.7), // Estimated active ratio
                            completionRate: Math.floor(Math.random() * 40) + 40, // Simulated completion for now
                            lastUpdated: 'Live Feed'
                        };
                    });

                    // Sort by enrollment
                    setCourses(aggregated.sort((a, b) => b.enrollment - a.enrollment));
                }
            } catch (err) {
                console.error("Failed to connect to tracker backend:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAndAggregateData();
    }, []);

    const filteredCourses = courses.filter(course => 
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalEnrollment = courses.reduce((acc, curr) => acc + curr.enrollment, 0);
    const avgCompletion = Math.round(courses.reduce((acc, curr) => acc + curr.completionRate, 0) / courses.length);

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black text-[#083D77] flex items-center gap-3 tracking-tight">
                        <GraduationCap className="w-10 h-10 text-orange-500" />
                        Course Performance Tracker
                    </h1>
                    <p className="text-gray-500 font-medium">Real-time analytics for your learning ecosystem.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-white p-1 rounded-2xl border border-gray-100 shadow-sm flex">
                        <button 
                            onClick={() => setViewMode('grid')}
                            className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-[#083D77] text-white shadow-lg' : 'text-gray-400 hover:text-[#083D77]'}`}
                        >
                            <LayoutGrid className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={() => setViewMode('list')}
                            className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-[#083D77] text-white shadow-lg' : 'text-gray-400 hover:text-[#083D77]'}`}
                        >
                            <LayoutList className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Students", value: totalEnrollment, icon: <Users />, color: "blue", trend: "+12%" },
                    { label: "Active Learners", value: courses.reduce((a, b) => a + b.activeStudents, 0), icon: <TrendingUp />, color: "orange", trend: "High" },
                    { label: "Avg. Completion", value: `${avgCompletion}%`, icon: <BarChart3 />, color: "green", trend: "Steady" },
                    { label: "Course Count", value: courses.length, icon: <BookOpen />, color: "purple", trend: "Growth" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group overflow-hidden relative">
                        <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-[0.03] group-hover:scale-150 transition-transform duration-700 bg-${stat.color}-500`} />
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-4 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 group-hover:scale-110 transition-transform [&>svg]:w-6 [&>svg]:h-6`}>
                                {stat.icon}
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded-full">{stat.trend}</span>
                        </div>
                        <div className="text-3xl font-black text-[#083D77] mb-1">{stat.value}</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search by course name or category..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-sm"
                    />
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-50 text-[#083D77] font-black text-xs uppercase rounded-2xl hover:bg-gray-100 transition-all border border-gray-100">
                    <Filter className="w-4 h-4" />
                    Filters
                </button>
            </div>

            {/* Rendering based on view mode */}
            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map(n => (
                        <div key={n} className="h-64 bg-gray-100 animate-pulse rounded-[40px]" />
                    ))}
                </div>
            ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all p-8 flex flex-col h-full group">
                            <div className="flex justify-between items-start mb-6">
                                {/* <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                    course.status === 'Active' ? 'bg-green-100 text-green-700' : 
                                    course.status === 'Beta' ? 'bg-orange-100 text-orange-700' : 
                                    'bg-blue-100 text-blue-700'
                                }`}>
                                    {course.status}
                                </span> */}
                                {/* <div className="text-gray-300 group-hover:text-orange-500 transition-colors">
                                    <Star className="w-5 h-5 fill-current" />
                                </div> */}
                            </div>

                            <h3 className="text-2xl font-semibold text-[#083D77] mb-2 leading-tight group-hover:text-blue-600 transition-colors">{course.name}</h3>
                            {/* <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-6">{course.category}</p> */}

                            <div className="space-y-4 mb-8 flex-1">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold text-gray-500">
                                        <span>Progress</span>
                                        <span>{course.completionRate}% Avg.</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-1000 ease-out" 
                                            style={{ width: `${course.completionRate}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-100 p-3 pl-1 rounded-2xl">
                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 -ml-0.5">Students</div>
                                        <div className="text-lg font-black pl-3 text-[#083D77]">{course.enrollment}</div>
                                    </div>
                                    <div className="bg-slate-100 p-3 pl-1 rounded-2xl">
                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 -ml-0.5">Active</div>
                                        <div className="text-lg font-black pl-3 text-orange-500">{course.activeStudents}</div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full flex items-center justify-between p-4 bg-[#083D77] text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/10">
                                Full Analytics
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100">
                                <th className="px-8 py-6">Course Path</th>
                                <th className="px-8 py-6">Category</th>
                                <th className="px-8 py-6">Enrollment</th>
                                <th className="px-8 py-6">Completion</th>
                                <th className="px-8 py-6">Status</th>
                                <th className="px-8 py-6 text-right">Analytics</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredCourses.map((course) => (
                                <tr key={course.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-6 font-black text-[#083D77]">{course.name}</td>
                                    <td className="px-8 py-6 text-xs text-gray-400 font-bold uppercase">{course.category}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <span className="font-black text-[#083D77]">{course.enrollment}</span>
                                            <span className="text-[10px] text-gray-400 font-bold">{course.activeStudents} Active</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-600" style={{ width: `${course.completionRate}%` }} />
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter ${
                                            course.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                        }`}>
                                            {course.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-xl transition-all">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
