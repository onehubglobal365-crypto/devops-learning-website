"use client";

import React, { useState, useEffect } from "react";
import {
    Users,
    UserPlus,
    Search,
    MoreVertical,
    Mail,
    Calendar,
    Crown,
    CheckCircle2,
    X,
    Clipboard,
    Eye,
    EyeOff,
    Loader2,
    ArrowLeft,
    Phone,
    GraduationCap,
    Lock,
    Save,
    User as UserIcon,
    ArrowUpRight,
    RefreshCw
} from "lucide-react";

interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    nickname?: string;
    mobile?: string;
    preferredCourse?: string;
    password?: string; // This will show the hashed password from DB
    createdAt: string;
}

export default function StudentsPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [newlyCreatedUser, setNewlyCreatedUser] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState("");

    // Form state for creation
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
        nickname: "",
        mobile: "",
        preferredCourse: ""
    });
    const [isCreating, setIsCreating] = useState(false);

    // Form state for editing (admin only assigning course)
    const [editMode, setEditMode] = useState(false);
    const [editData, setEditData] = useState({
        preferredCourse: "",
        nickname: "",
        mobile: "",
        role: ""
    });
    const [isUpdating, setIsUpdating] = useState(false);

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/api/users");
            const data = await response.json();
            if (Array.isArray(data)) {
                setUsers(data);
            }
        } catch (err) {
            console.error("Failed to fetch users:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        setError("");

        try {
            const response = await fetch("http://localhost:5000/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setNewlyCreatedUser({
                    ...data.user,
                    plainPassword: formData.password // Keep plain password for immediate display
                });
                setIsCreateModalOpen(false);
                setFormData({ name: "", email: "", password: "", role: "user", nickname: "", mobile: "", preferredCourse: "" });
                fetchUsers();
            } else {
                setError(data.error || "Failed to create user");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsCreating(false);
        }
    };

    const handleUpdateUser = async () => {
        if (!selectedUser) return;
        setIsUpdating(true);
        setError("");

        try {
            const response = await fetch(`http://localhost:5000/api/users/${selectedUser._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editData)
            });

            const data = await response.json();

            if (response.ok) {
                setEditMode(false);
                // Update local state for the selected user
                const updatedUser = { ...selectedUser, ...editData };
                setSelectedUser(updatedUser);
                fetchUsers();
            } else {
                setError(data.error || "Failed to update user");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsUpdating(false);
        }
    };

    const filteredUsers = users.filter(user =>
        user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.nickname?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Initialize edit data when a user is selected
    useEffect(() => {
        if (selectedUser) {
            setEditData({
                preferredCourse: selectedUser.preferredCourse || "",
                nickname: selectedUser.nickname || "",
                mobile: selectedUser.mobile || "",
                role: selectedUser.role || "user"
            });
            setEditMode(false);
        }
    }, [selectedUser]);

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <Users className="w-8 h-8 text-blue-600" />
                        Student Management
                    </h1>
                    <p className="text-gray-500">Admin-only course assignment and profile management.</p>
                </div>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-200"
                >
                    <UserPlus className="w-5 h-5" />
                    Add New Student
                </button>
            </div>

            {/* Success View for Newly Created User */}
            {newlyCreatedUser && (
                <div className="bg-green-50 border border-green-200 rounded-3xl p-8 relative overflow-hidden animate-in slide-in-from-top duration-500">
                    <div className="absolute top-0 right-0 p-4">
                        <button
                            onClick={() => setNewlyCreatedUser(null)}
                            className="p-2 hover:bg-green-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-green-600" />
                        </button>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                            <CheckCircle2 className="w-7 h-7" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-green-900">User Account Initialized!</h2>
                            <p className="text-green-700">Account matches user dashboard profiles precisely.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-green-100">
                            <div className="text-xs text-gray-500 uppercase font-bold mb-1">Full Name / Nickname</div>
                            <div className="text-gray-900 font-bold">{newlyCreatedUser.name} {newlyCreatedUser.nickname ? `(${newlyCreatedUser.nickname})` : ''}</div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-green-100">
                            <div className="text-xs text-gray-500 uppercase font-bold mb-1">Email Address</div>
                            <div className="text-gray-900 font-bold">{newlyCreatedUser.email}</div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-green-100">
                            <div className="text-xs text-gray-500 uppercase font-bold mb-1">Plain Password</div>
                            <div className="flex items-center justify-between gap-2">
                                <div className="text-gray-900 font-bold truncate">{newlyCreatedUser.plainPassword}</div>
                                <button onClick={() => navigator.clipboard.writeText(newlyCreatedUser.plainPassword)} className="p-1 hover:bg-gray-100 rounded text-blue-600"><Clipboard className="w-4 h-4" /></button>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-green-100">
                            <div className="text-xs text-gray-500 uppercase font-bold mb-1">Course & Role</div>
                            <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-blue-100 text-blue-700`}>{newlyCreatedUser.preferredCourse || 'No Course'}</span>
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${newlyCreatedUser.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'}`}>{newlyCreatedUser.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* List and Filters */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
                <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search name, email, or nickname..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 font-medium tracking-tight">Viewing {filteredUsers.length} total profiles</span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                                <th className="px-6 py-4">Student Profile</th>
                                <th className="px-6 py-4">Contact Information</th>
                                <th className="px-6 py-4">Course Assignment</th>
                                <th className="px-6 py-4">Security</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-sm font-medium">
                            {isLoading ? (
                                [1, 2, 3].map((i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="px-6 py-4"><div className="h-10 bg-gray-100 rounded w-40"></div></td>
                                        <td className="px-6 py-4"><div className="h-10 bg-gray-100 rounded w-40"></div></td>
                                        <td className="px-6 py-4"><div className="h-10 bg-gray-100 rounded w-32"></div></td>
                                        <td className="px-6 py-4"><div className="h-6 bg-gray-100 rounded w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-8 bg-gray-100 rounded w-8 ml-auto"></div></td>
                                    </tr>
                                ))
                            ) : filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => (
                                    <tr key={user._id} className="hover:bg-gray-50/20 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-11 h-11 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black text-xs shadow-sm shadow-blue-100">
                                                    {user.nickname ? user.nickname[0].toUpperCase() : user.name[0].toUpperCase()}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                                        {user.name}
                                                        {user.role === 'admin' && <Crown className="w-3 h-3 text-orange-500" />}
                                                    </div>
                                                    <div className="text-xs text-gray-400 flex items-center gap-1 font-bold italic opacity-70">
                                                        @{user.nickname || user.name.toLowerCase().replace(' ', '')}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-1">
                                                <div className="text-gray-900 font-bold flex items-center gap-1.5 line-clamp-1">
                                                    <Mail className="w-3 h-3 text-gray-400" /> {user.email}
                                                </div>
                                                {user.mobile && (
                                                    <div className="text-[10px] text-gray-500 font-bold flex items-center gap-1">
                                                        <Phone className="w-2.5 h-2.5" /> {user.mobile}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="relative group/sel">
                                                <select
                                                    value={user.preferredCourse || ""}
                                                    onChange={async (e) => {
                                                        const newCourse = e.target.value;
                                                        // Immediate optimistic UI update
                                                        setUsers(users.map(u => u._id === user._id ? { ...u, preferredCourse: newCourse } : u));

                                                        try {
                                                            await fetch(`http://localhost:5000/api/users/${user._id}`, {
                                                                method: "PUT",
                                                                headers: { "Content-Type": "application/json" },
                                                                body: JSON.stringify({ preferredCourse: newCourse })
                                                            });
                                                        } catch (err) {
                                                            console.error("Failed to update course:", err);
                                                            fetchUsers(); // Revert on failure
                                                        }
                                                    }}
                                                    className="appearance-none w-full bg-gray-50 border border-gray-100 text-[10px] font-black uppercase tracking-wider py-2 px-3 pr-8 rounded-lg cursor-pointer hover:bg-white hover:border-blue-200 transition-all focus:ring-2 focus:ring-blue-100 outline-none text-blue-700"
                                                >
                                                    <option value="">No Course Assigned</option>
                                                    <option value="java-fullstack">Java Full Stack</option>
                                                    <option value="python-fullstack">Python Full Stack</option>
                                                    <option value="web-dev">Web Development</option>
                                                    <option value="devops">DevOps Engineering</option>
                                                    <option value="data-science">Data Science</option>
                                                    <option value="sql">SQL & Databases</option>
                                                    <option value="linux">Linux Mastery</option>
                                                    <option value="medical-coding">Medical Coding</option>
                                                </select>
                                                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                                                    <RefreshCw className="w-3 h-3 animate-pulse opacity-0 group-hover/sel:opacity-100" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-[10px] font-mono bg-gray-50 px-2 py-1.5 rounded-lg border border-gray-100 max-w-[120px]">
                                                <Lock className="w-3 h-3 text-gray-400 shrink-0" />
                                                <span className="truncate opacity-50">{user.password?.slice(0, 10)}...</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => setSelectedUser(user)}
                                                className="px-4 py-2 bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-600 text-xs font-black rounded-xl transition-all border border-gray-100 flex items-center gap-2 ml-auto shadow-sm"
                                            >
                                                DETAILS
                                                <ArrowUpRight className="w-3 h-3" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr><td colSpan={4} className="px-6 py-20 text-center text-gray-500 font-bold italic">No specialized student profiles found. Try another search.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Create Modal - Enhanced with more fields */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-[40px] w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
                        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gradient-to-r from-blue-700 to-blue-500 text-white relative h-32">
                            <div className="relative z-10">
                                <h2 className="text-2xl font-black flex items-center gap-3">
                                    <UserPlus className="w-8 h-8" />
                                    Initialize Member Profile
                                </h2>
                                <p className="text-blue-100 text-sm font-medium mt-1">This will populate the user's dashboard automatically.</p>
                            </div>
                            <button onClick={() => setIsCreateModalOpen(false)} className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors z-20">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleCreateUser} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white overflow-y-auto max-h-[70vh]">
                            <div className="col-span-1 md:col-span-2">
                                {error && <div className="p-4 bg-red-50 text-red-600 text-xs font-black rounded-2xl border border-red-100 flex items-center gap-3 animate-bounce"><div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div> {error}</div>}
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest border-b pb-2">Core Identity</h3>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1.5 ml-1">Full Name</label>
                                    <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500/10 outline-none text-sm font-bold" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1.5 ml-1">Nickname (Dashboard Display)</label>
                                    <input type="text" placeholder="e.g. CodingGuru" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500/10 outline-none text-sm font-bold" value={formData.nickname} onChange={(e) => setFormData({ ...formData, nickname: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1.5 ml-1">Email Address</label>
                                    <input required type="email" placeholder="rahul@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500/10 outline-none text-sm font-bold" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest border-b pb-2">Profile & Security</h3>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1.5 ml-1">Mobile Contact</label>
                                    <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500/10 outline-none text-sm font-bold" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1.5 ml-1">Assigned Course</label>
                                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500/10 outline-none text-sm font-bold" value={formData.preferredCourse} onChange={(e) => setFormData({ ...formData, preferredCourse: e.target.value })}>
                                        <option value="">Individual Access</option>
                                        <option value="java-fullstack">Java Full Stack</option>
                                        <option value="python-fullstack">Python Full Stack</option>
                                        <option value="web-dev">Web Development</option>
                                        <option value="devops">DevOps Engineering</option>
                                        <option value="data-science">Data Science</option>
                                        <option value="sql">SQL & Databases</option>
                                        <option value="linux">Linux Mastery</option>
                                        <option value="medical-coding">Medical Coding</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1.5 ml-1">Credential Password</label>
                                    <div className="relative">
                                        <input required type={showPassword ? "text" : "password"} placeholder="Min. 8 characters" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500/10 outline-none text-sm font-bold" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 p-1">{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 md:col-span-2 pt-6 flex gap-4">
                                <button type="button" onClick={() => setIsCreateModalOpen(false)} className="flex-1 px-8 py-4 border border-gray-200 text-gray-500 font-black text-xs uppercase rounded-2xl hover:bg-gray-50 transition-all">Cancel</button>
                                <button disabled={isCreating} type="submit" className="flex-1 px-8 py-4 bg-blue-600 text-white font-black text-xs uppercase rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2">
                                    {isCreating ? <Loader2 className="w-5 h-5 animate-spin" /> : "Deploy Security & Profile"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* User Details Modal - MIRRORS USER DASHBOARD + ADMIN EDITING CAPACITY */}
            {selectedUser && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#F8FAFC]/95 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
                    <div className="bg-white rounded-[40px] w-full max-w-3xl overflow-hidden shadow-[0_32px_128px_-16px_rgba(0,0,0,0.12)] border border-gray-100 relative my-8">
                        {/* THE USER DASHBOARD HEADER MIRROR */}
                        <div className="bg-gradient-to-r from-[#083D77] to-[#1E4D8C] p-10 md:p-14 text-white relative h-64">
                            <button onClick={() => setSelectedUser(null)} className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-30" title="Return to List">
                                <X className="w-6 h-6" />
                            </button>
                            <div className="z-10 relative">
                                <h1 className="text-4xl font-black mb-2 flex items-center gap-3">
                                    <UserIcon className="w-10 h-10 text-blue-300" />
                                    User Profile Dashboard
                                </h1>
                                <p className="opacity-80 text-lg font-medium">Administrator view with assignment controls.</p>
                            </div>
                            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
                                <Users className="w-80 h-80" />
                            </div>
                            {/* Avatar */}
                            <div className="absolute -bottom-16 left-12 group z-20">
                                <div className="w-36 h-36 rounded-[32px] border-[6px] border-white shadow-2xl overflow-hidden bg-white flex items-center justify-center text-4xl font-black text-[#083D77]">
                                    {selectedUser.nickname ? selectedUser.nickname[0].toUpperCase() : selectedUser.name[0].toUpperCase()}
                                </div>
                            </div>

                            {/* Edit Toggle */}
                            <button
                                onClick={() => setEditMode(!editMode)}
                                className={`absolute bottom-6 right-10 px-6 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 shadow-lg ${editMode ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-white text-[#083D77] hover:bg-blue-50"
                                    }`}
                            >
                                {editMode ? <X className="w-4 h-4" /> : <RefreshCw className="w-4 h-4" />}
                                {editMode ? "CANCEL EDITING" : "ASSIGN NEW COURSE"}
                            </button>
                        </div>

                        {/* CONTENT AREA */}
                        <div className="pt-24 px-12 pb-16 space-y-12">
                            <div>
                                <h2 className="text-3xl font-black text-gray-900">{selectedUser.name}</h2>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full">{selectedUser.role} Member</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full">Active Status</span>
                                </div>
                            </div>

                            {error && <div className="p-4 bg-red-50 text-red-600 text-xs font-black rounded-2xl border border-red-100 mb-4">{error}</div>}

                            {/* TABS SIMULATION */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Profile Column (Mirroring Details Tab) */}
                                <div className="space-y-6">
                                    <h3 className="text-xs font-black uppercase text-gray-400 border-b pb-3 flex items-center gap-2">
                                        <UserIcon className="w-4 h-4" /> Identity & Contact
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 p-5 rounded-3xl border border-gray-100">
                                            <div className="text-[10px] uppercase font-black text-gray-400 mb-1">Nickname</div>
                                            {editMode ? (
                                                <input className="w-full bg-white border border-gray-200 mt-1 px-3 py-2 rounded-xl text-sm font-bold" value={editData.nickname} onChange={(e) => setEditData({ ...editData, nickname: e.target.value })} />
                                            ) : (
                                                <div className="text-gray-900 font-bold">{selectedUser.nickname || 'Not Set'}</div>
                                            )}
                                        </div>
                                        <div className="bg-gray-50 p-5 rounded-3xl border border-gray-100">
                                            <div className="text-[10px] uppercase font-black text-gray-400 mb-1">Email Connection</div>
                                            <div className="text-gray-900 font-bold">{selectedUser.email}</div>
                                        </div>
                                        <div className="bg-gray-50 p-5 rounded-3xl border border-gray-100">
                                            <div className="text-[10px] uppercase font-black text-gray-400 mb-1">Mobile Access</div>
                                            {editMode ? (
                                                <input className="w-full bg-white border border-gray-200 mt-1 px-3 py-2 rounded-xl text-sm font-bold" value={editData.mobile} onChange={(e) => setEditData({ ...editData, mobile: e.target.value })} />
                                            ) : (
                                                <div className="text-gray-900 font-bold">{selectedUser.mobile || '+91 --- --- ----'}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Security & Assignment Column */}
                                <div className="space-y-6">
                                    <h3 className="text-xs font-black uppercase text-gray-400 border-b pb-3 flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4" /> Course Assignment
                                    </h3>
                                    <div className="space-y-4">
                                        <div className={`p-5 rounded-3xl border transition-all ${editMode ? "bg-blue-50 border-blue-200 shadow-md" : "bg-gray-50 border-gray-100"}`}>
                                            <div className={`text-[10px] uppercase font-black mb-1 ${editMode ? "text-blue-600" : "text-gray-400"}`}>Currently Assigned Course</div>
                                            {editMode ? (
                                                <select className="w-full bg-white border border-gray-200 mt-2 px-3 py-2 rounded-xl text-sm font-bold" value={editData.preferredCourse} onChange={(e) => setEditData({ ...editData, preferredCourse: e.target.value })}>
                                                    <option value="">Individual Access</option>
                                                    <option value="java-fullstack">Java Full Stack</option>
                                                    <option value="python-fullstack">Python Full Stack</option>
                                                    <option value="web-dev">Web Development</option>
                                                    <option value="devops">DevOps Engineering</option>
                                                    <option value="data-science">Data Science</option>
                                                    <option value="sql">SQL & Databases</option>
                                                    <option value="linux">Linux Mastery</option>
                                                    <option value="medical-coding">Medical Coding</option>
                                                </select>
                                            ) : (
                                                <div className="text-gray-900 font-bold flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    {selectedUser.preferredCourse || 'No course assigned'}
                                                </div>
                                            )}
                                        </div>

                                        <div className="bg-orange-50 p-5 rounded-3xl border border-orange-100">
                                            <div className="text-[10px] uppercase font-black text-orange-600 mb-1">Security: Stored Hash</div>
                                            <div className="text-orange-950 font-mono text-[10px] break-all italic bg-white/50 p-2 rounded-xl mt-2 select-all">
                                                {selectedUser.password}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Action */}
                            <div className="pt-8 border-t border-gray-50 flex justify-between items-center">
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                                    Joined: {new Date(selectedUser.createdAt).toLocaleDateString()}
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setSelectedUser(null)}
                                        className="px-8 py-4 text-[#083D77] font-black text-xs uppercase rounded-2xl hover:bg-gray-50 transition-all"
                                    >
                                        Close Member View
                                    </button>
                                    {editMode && (
                                        <button
                                            disabled={isUpdating}
                                            onClick={handleUpdateUser}
                                            className="px-10 py-4 bg-green-600 text-white font-black text-xs uppercase rounded-2xl shadow-xl shadow-green-100 hover:bg-green-700 hover:shadow-2xl transition-all flex items-center gap-2"
                                        >
                                            {isUpdating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                                            {isUpdating ? "UPDATING..." : "SAVE ASSIGNMENT"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
