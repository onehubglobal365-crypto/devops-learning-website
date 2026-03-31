"use client";

import React, { useState, useEffect } from "react";
import { 
    Users, 
    UserPlus, 
    Search, 
    MapPin, 
    Phone, 
    Calendar, 
    CreditCard, 
    BarChart3, 
    X, 
    CheckCircle2, 
    AlertCircle,
    ChevronRight,
    Loader2,
    Save,
    Map,
    Pencil,
    Trash2
} from "lucide-react";

interface OfflineStudent {
    id: string;
    name: string;
    address: string;
    contact: string;
    attendance: number; // Percentage
    paidDate: string;
    dueDate: string;
    interviewsAttended: number;
}

export default function OfflineStudentsPage() {
    const [students, setStudents] = useState<OfflineStudent[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        contact: "",
        attendance: "" as any,
        paidDate: "",
        dueDate: "",
        interviewsAttended: "" as any
    });

    // Persistence logic using LocalStorage
    useEffect(() => {
        const stored = localStorage.getItem("ohg_offline_students");
        if (stored) {
            try {
                setStudents(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse local students:", e);
                setStudents([]);
            }
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem("ohg_offline_students", JSON.stringify(students));
        }
    }, [students, isLoading]);

    const filteredStudents = students.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (editingId) {
            // Update existing student
            setStudents(students.map(s => s.id === editingId ? { ...formData, id: editingId } : s));
        } else {
            // Create new student
            const newStudent: OfflineStudent = {
                ...formData,
                id: Date.now().toString()
            };
            setStudents([...students, newStudent]);
        }
        
        closeModal();
    };

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to remove this student record? This action cannot be undone.")) {
            setStudents(students.filter(s => s.id !== id));
        }
    };

    const openEditModal = (student: OfflineStudent) => {
        setEditingId(student.id);
        setFormData({
            name: student.name,
            address: student.address,
            contact: student.contact,
            attendance: student.attendance,
            paidDate: student.paidDate,
            dueDate: student.dueDate,
            interviewsAttended: student.interviewsAttended
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingId(null);
        setFormData({ 
            name: "", 
            address: "", 
            contact: "", 
            attendance: "" as any, 
            paidDate: "", 
            dueDate: "", 
            interviewsAttended: "" as any 
        });
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-20">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-4xl font-bold text-[#083D77] flex items-center gap-3 tracking-tight">
                        {/* <Users className="w-10 h-10 text-orange-500" /> */}
                        Offline Enrollment Hub
                    </h1>
                    <p className="text-gray-500 font-medium">Physical class management and fee tracking system.</p>
                </div>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-3 px-5 py-4 bg-[#083D77] text-white font-bold text-lg uppercase tracking-widest rounded-2xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
                >
                    <UserPlus className="w-5 h-5 text-orange-400" />
                    Register Student
                </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Strength", value: students.length, icon: <Users />, color: "blue" },
                    // { label: "Avg. Attendance", value: students.length ? Math.round(students.reduce((a,b)=>a+b.attendance,0)/students.length) + "%" : "0%", icon: <CheckCircle2 />, color: "green" },
                    // { label: "Payment Overdue", value: students.filter(s => new Date(s.dueDate) < new Date()).length, icon: <AlertCircle />, color: "orange" },
                    // { label: "Total Mocks", value: students.reduce((a,b)=>a+b.interviewsAttended,0), icon: <BarChart3 />, color: "purple" },
                ].map((stat, i) => (
                    <div key={stat.label} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                        <div className={`absolute top-0 right-0 w-20 h-20 -mr-6 -mt-6 rounded-full opacity-[0.03] group-hover:scale-150 transition-transform duration-700 bg-${stat.color}-500`} />
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-4 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 [&>svg]:w-6 [&>svg]:h-6`}>
                                {stat.icon}
                            </div>
                            {/* <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded-full">{stat.trend}</span> */}
                        </div>
                        <div className="text-3xl font-black text-[#083D77] mb-1">{stat.value}</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Main Content Table */}
            <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden min-h-[500px]">
                {/* Search Bar */}
                <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row gap-4 items-center bg-gray-50/20">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search by student name or location..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-sm"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-100 text-lg text-gray-700 border-b border-gray-200">
                                <th className="px-8 py-6">Name</th>
                                <th className="px-8 py-6">Contact</th>
                                <th className="px-8 py-6">Address</th>
                                <th className="px-8 py-6">Attendance (%)</th>
                                <th className="px-8 py-6 text-green-600">Paid Date</th>
                                <th className="px-8 py-6 text-orange-500">Due Date</th>
                                <th className="px-8 py-6">Mocks</th>
                                <th className="px-8 py-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [1, 2, 3].map(n => (
                                    <tr key={n} className="animate-pulse">
                                        <td colSpan={6} className="px-8 py-6 h-20 bg-gray-50/30"></td>
                                    </tr>
                                ))
                            ) : filteredStudents.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-6 border border-gray-200">
                                        <div className="text-lg group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                                            {student.name}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 border border-gray-200">
                                        <div className="text-lg text-gray-600 flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-blue-400" />
                                            {student.contact}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 border border-gray-200">
                                        <div className="text-lg text-gray-700 flex items-center gap-2 max-w-[200px] leading-relaxed">
                                            <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                                            {student.address}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 border border-gray-200">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full rounded-full ${student.attendance > 75 ? 'bg-green-500' : 'bg-orange-500'}`} 
                                                    style={{ width: `${student.attendance}%` }} 
                                                />
                                            </div>
                                            <span className="text-lg">{student.attendance}%</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 border border-gray-200">
                                        <div className="text-lg uppercase text-green-600 flex items-center gap-1 whitespace-nowrap">
                                            <CheckCircle2 className="w-4 h-4" /> {student.paidDate}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 border border-gray-200">
                                        <div className="text-lg uppercase text-orange-500 flex items-center gap-1 whitespace-nowrap">
                                            <AlertCircle className="w-4 h-4" /> {student.dueDate}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 border border-gray-200">
                                        <div className="px-4 py-2 text-slate-900 rounded-xl text-lg inline-flex items-center">
                                            <BarChart3 className="w-4 h-4 mr-2" />
                                            {student.interviewsAttended}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right border border-gray-200">
                                        <div className="flex items-center justify-end gap-2">
                                            <button 
                                                onClick={() => openEditModal(student)}
                                                className="p-2.5 bg-white border border-gray-100 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                                title="Edit Record"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(student.id)}
                                                className="p-2.5 bg-white border border-gray-100 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                                title="Delete Record"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Registration/Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-[40px] w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
                        <div className={`p-8 border-b border-gray-50 flex items-center justify-between bg-gradient-to-r text-white ${editingId ? 'from-orange-600 to-orange-400' : 'from-blue-700 to-blue-500'}`}>
                            <div>
                                <h2 className="text-2xl font-black flex items-center gap-3">
                                    {editingId ? <Pencil className="w-8 h-8" /> : <UserPlus className="w-8 h-8 text-orange-300" />}
                                    {editingId ? 'Modify Student Record' : 'Register Local Student'}
                                </h2>
                                <p className="text-blue-100 text-sm font-medium mt-1">
                                    {editingId ? `Updating information for ${formData.name}` : 'Physical enrollment & physical asset tracking.'}
                                </p>
                            </div>
                            <button onClick={closeModal} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white overflow-y-auto max-h-[70vh]">
                            <div className="space-y-4 col-span-1 md:col-span-2">
                                <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest border-b pb-2">Primary Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-gray-500 uppercase ml-1">Full Student Name</label>
                                        <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none text-sm font-black" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-gray-500 uppercase ml-1">Mobile Contact</label>
                                        <input required type="text" placeholder="+91 XXXX XXXX XX" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none text-sm font-black" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-gray-500 uppercase ml-1">Physical Address</label>
                                    <textarea required rows={2} placeholder="Complete local address for documentation..." className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none text-sm font-black" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest border-b pb-2">Academic Metrics</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-gray-500 uppercase ml-1">Attendance (%)</label>
                                        <input type="number" max={100} className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none text-sm font-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" value={formData.attendance} onChange={(e) => setFormData({ ...formData, attendance: e.target.value })} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-gray-500 uppercase ml-1">Mocks Attended</label>
                                        <input type="number" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none text-sm font-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" value={formData.interviewsAttended} onChange={(e) => setFormData({ ...formData, interviewsAttended: e.target.value })} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest border-b pb-2">Fee Ledger</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-gray-500 uppercase ml-1">Last Paid Date</label>
                                        <input type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none text-sm font-black" value={formData.paidDate} onChange={(e) => setFormData({ ...formData, paidDate: e.target.value })} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-gray-500 uppercase ml-1">Due Date</label>
                                        <input type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none text-sm font-black text-orange-600" value={formData.dueDate} onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 md:col-span-2 pt-6 flex gap-4">
                                <button type="button" onClick={closeModal} className="flex-1 px-8 py-5 border border-gray-100 text-gray-400 font-black text-xs uppercase rounded-3xl hover:bg-gray-50 transition-all">Cancel</button>
                                <button type="submit" className={`flex-1 px-8 py-5 text-white font-black text-xs uppercase rounded-3xl transition-all shadow-2xl flex items-center justify-center gap-2 ${editingId ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-900/20' : 'bg-[#083D77] hover:bg-blue-800 shadow-blue-900/20'}`}>
                                    {editingId ? <Save className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                                    {editingId ? 'Update Information' : 'Complete Entry'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
