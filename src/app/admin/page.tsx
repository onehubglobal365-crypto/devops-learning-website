"use client";

import React from "react";
import {
    Users,
    UserCheck,
    GraduationCap,
    Briefcase,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Clock,
    Eye,
    CheckCircle2
} from "lucide-react";

export default function AdminDashboard() {
    const [users, setUsers] = React.useState<any[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/users");
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                console.error("Failed to fetch users:", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const stats = [
        { label: "Total Students", value: users.length.toString(), icon: <Users />, change: "+12.5%", isPositive: true },
        { label: "Recent Placements", value: "48", icon: <UserCheck />, change: "+18.2%", isPositive: true },
        { label: "Active Courses", value: "24", icon: <GraduationCap />, change: "Stable", isPositive: true },
        { label: "New Applications", value: "156", icon: <Briefcase />, change: "-2.4%", isPositive: false },
    ];

    const formatDateTime = (date: any) => {
        if (!date) return "Never";
        return new Date(date).toLocaleString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: 'short'
        });
    };

    const recentPlacements = [
        { name: "Rahul Sharma", company: "Amazon", package: "12 LPA", date: "2 hours ago" },
        { name: "Priya Patel", company: "Google", package: "15 LPA", date: "5 hours ago" },
        { name: "Ankit Kumar", company: "Microsoft", package: "14 LPA", date: "1 day ago" },
        { name: "Sneha Reddy", company: "TCS Digital", package: "7.5 LPA", date: "2 days ago" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">
            {/* Welcome Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back! Here's what's happening on OneHubGlobal today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                {stat.icon}
                            </div>
                            <div className={`flex items-center text-xs font-bold gap-1 ${stat.isPositive ? "text-green-500" : "text-red-500"}`}>
                                {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                {stat.change}
                            </div>
                        </div>
                        <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Session Tracking Table (NEW) */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="font-bold text-lg text-gray-900">User Session Tracking</h2>
                            <p className="text-xs text-gray-400">Live monitor of student login and logout activity</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            Live Updates
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                                <th className="px-6 py-4">Student</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Last Login</th>
                                <th className="px-6 py-4">Last Logout</th>
                                <th className="px-6 py-4">Preferred Course</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-sm">
                            {isLoading ? (
                                [1, 2, 3].map(i => (
                                    <tr key={i} className="animate-pulse">
                                        <td colSpan={5} className="px-6 py-4"><div className="h-8 bg-gray-100 rounded-xl w-full" /></td>
                                    </tr>
                                ))
                            ) : users.slice(0, 10).map((user, i) => (
                                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-500 text-xs text-uppercase">
                                                {user.name[0]}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{user.name}</div>
                                                <div className="text-[10px] text-gray-400">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.status === 'active' ? (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 font-black text-[10px] uppercase border border-green-100">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                                Active
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 text-gray-400 font-black text-[10px] uppercase border border-gray-100">
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                                                Inactive
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 font-medium">
                                        {formatDateTime(user.lastLogin)}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 font-medium">
                                        {formatDateTime(user.lastLogout)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[10px] font-bold uppercase">
                                            {user.preferredCourse || 'None'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Placements Table */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                        <h2 className="font-bold text-lg text-gray-900">Recent Success Stories</h2>
                        <button className="text-blue-600 text-sm font-bold hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                                    <th className="px-6 py-4">Student</th>
                                    <th className="px-6 py-4">Company</th>
                                    <th className="px-6 py-4">Package</th>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-sm">
                                {recentPlacements.map((p, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">{p.name}</td>
                                        <td className="px-6 py-4 text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600">
                                                    {p.company[0]}
                                                </div>
                                                {p.company}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-xs">
                                                {p.package}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {p.date}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-green-500">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                    <h2 className="font-bold text-lg text-gray-900 mb-6">Live Activity</h2>
                    <div className="space-y-6">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-800">
                                        {["Course Purchase", "New Signup", "Quiz Completed", "New Application", "Feedback Received"][i]}
                                    </div>
                                    <div className="text-xs text-gray-500">User #842{i} completed Python Fundamentals.</div>
                                    <div className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tight">3 mins ago</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 bg-gray-50 text-gray-600 text-sm font-bold rounded-xl hover:bg-gray-100 transition-all border border-gray-100">
                        View Analytics
                    </button>
                </div>
            </div>
        </div>
    );
}
