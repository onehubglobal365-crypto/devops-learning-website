"use client";

import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Upload, User, Image as ImageIcon } from 'lucide-react';
import { AlumniProfile, alumniData } from '@/data/alumni';
import Image from 'next/image';

interface AlumniAdminProps {
  isDark?: boolean;
}

export default function AlumniAdmin({ isDark = false }: AlumniAdminProps) {
  const [alumni, setAlumni] = useState<AlumniProfile[]>(alumniData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<Partial<AlumniProfile> | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAlumni, setNewAlumni] = useState<Partial<AlumniProfile>>({
    name: '',
    initials: '',
    position: '',
    company: '',
    package: '',
    batch: '',
    testimonial: '',
    course: '',
    placementDate: '',
    profileImage: '',
    isActive: true
  });

  const handleEdit = (profile: AlumniProfile) => {
    setEditingId(profile.id);
    setEditFormData({ ...profile });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditFormData(null);
  };

  const handleSave = (id: string, updatedData: Partial<AlumniProfile>) => {
    setAlumni(prev => prev.map(item =>
      item.id === id ? { ...item, ...updatedData } as AlumniProfile : item
    ));
    setEditingId(null);
    setEditFormData(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this alumni profile?')) {
      setAlumni(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleAdd = () => {
    if (newAlumni.name && newAlumni.initials && newAlumni.position && newAlumni.company) {
      const id = (Math.max(0, ...alumni.map(a => parseInt(a.id))) + 1).toString();
      const alumniToAdd: AlumniProfile = {
        id,
        name: newAlumni.name || '',
        initials: newAlumni.initials || '',
        position: newAlumni.position || '',
        company: newAlumni.company || '',
        package: newAlumni.package || 'Not disclosed',
        batch: newAlumni.batch || '2024 Batch',
        testimonial: newAlumni.testimonial || 'Great experience with OneHubGlobal!',
        course: newAlumni.course || 'DevOps',
        placementDate: newAlumni.placementDate || new Date().toISOString().split('T')[0],
        profileImage: newAlumni.profileImage || '',
        isActive: newAlumni.isActive ?? true
      };

      setAlumni(prev => [...prev, alumniToAdd]);
      setNewAlumni({
        name: '',
        initials: '',
        position: '',
        company: '',
        package: '',
        batch: '',
        testimonial: '',
        course: '',
        placementDate: '',
        profileImage: '',
        isActive: true
      });
      setShowAddForm(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} p-6`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Alumni Management</h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Manage success stories and placed student profiles
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Alumni
          </button>
        </div>

        {/* Add New Alumni Form */}
        {showAddForm && (
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-[2rem] p-8 mb-8 border ${isDark ? 'border-gray-700' : 'border-gray-100'} shadow-xl animate-in fade-in slide-in-from-top-4 duration-300`}>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Add New Alumni Profile</h3>
              <button onClick={() => setShowAddForm(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 space-y-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-3xl overflow-hidden flex items-center justify-center relative group">
                  {newAlumni.profileImage ? (
                    <Image src={newAlumni.profileImage} alt="Preview" fill className="object-cover" />
                  ) : (
                    <div className="text-center p-4">
                      <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">Image Preview</p>
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Image URL (e.g. /alumni/name.png)"
                  value={newAlumni.profileImage}
                  onChange={(e) => setNewAlumni({ ...newAlumni, profileImage: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none`}
                />
              </div>

              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Full Name *</label>
                  <input
                    type="text"
                    value={newAlumni.name}
                    onChange={(e) => setNewAlumni({ ...newAlumni, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none`}
                    placeholder="Enter full name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Initials *</label>
                  <input
                    type="text"
                    value={newAlumni.initials}
                    onChange={(e) => setNewAlumni({ ...newAlumni, initials: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none`}
                    placeholder="e.g. RK"
                    maxLength={3}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Position *</label>
                  <input
                    type="text"
                    value={newAlumni.position}
                    onChange={(e) => setNewAlumni({ ...newAlumni, position: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none`}
                    placeholder="e.g. DevOps Engineer"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Company *</label>
                  <input
                    type="text"
                    value={newAlumni.company}
                    onChange={(e) => setNewAlumni({ ...newAlumni, company: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none`}
                    placeholder="e.g. Amazon"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Package</label>
                  <input
                    type="text"
                    value={newAlumni.package}
                    onChange={(e) => setNewAlumni({ ...newAlumni, package: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none`}
                    placeholder="e.g. ₹12 LPA"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Batch</label>
                  <input
                    type="text"
                    value={newAlumni.batch}
                    onChange={(e) => setNewAlumni({ ...newAlumni, batch: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none`}
                    placeholder="e.g. 2024 Batch"
                  />
                </div>
                <div className="md:col-span-2 space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Testimonial</label>
                  <textarea
                    value={newAlumni.testimonial}
                    onChange={(e) => setNewAlumni({ ...newAlumni, testimonial: e.target.value })}
                    rows={2}
                    className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none resize-none`}
                    placeholder="Enter testimonial..."
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
              <button
                onClick={() => setShowAddForm(false)}
                className={`px-6 py-3 rounded-xl font-bold ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-500/20 active:scale-95 flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Profile
              </button>
            </div>
          </div>
        )}

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-6">
          {alumni.map((alumniProfile) => (
            <div key={alumniProfile.id} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-[1.5rem] overflow-hidden border ${isDark ? 'border-gray-700' : 'border-gray-100'} shadow-xl transition-all duration-500 hover:shadow-blue-500/5`}>
              {/* STATIC CARD VIEW (More Compact) */}
              <div className="relative h-full flex flex-col p-5 items-center justify-center text-center">
                {/* Status Toggle */}
                <div className="absolute top-3 right-3 z-10">
                  <button
                    onClick={() => handleSave(alumniProfile.id, { isActive: !alumniProfile.isActive })}
                    className={`px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest ${alumniProfile.isActive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                  >
                    {alumniProfile.isActive ? 'On' : 'Off'}
                  </button>
                </div>

                <div className="w-20 h-20 rounded-2xl overflow-hidden mb-3 shadow-lg relative bg-gray-100 dark:bg-gray-700">
                  {alumniProfile.profileImage ? (
                    <Image src={alumniProfile.profileImage} alt={alumniProfile.name} fill className="object-cover" unoptimized />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <span className="text-xl font-black text-white">{alumniProfile.initials}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-sm font-black tracking-tight mb-4 line-clamp-1">{alumniProfile.name}</h3>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(alumniProfile)}
                    className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"
                    title="Edit Full Profile"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(alumniProfile.id)}
                    className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Alumni Popup Modal */}
        {editingId && editFormData && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCancelEdit}></div>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} relative w-full max-w-4xl rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh] animate-in zoom-in-95 duration-200 border ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">Edit Candidate Profile</h3>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">Full Information Overlap</p>
                </div>
                <button
                  onClick={handleCancelEdit}
                  className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Profile Image Column */}
                <div className="md:col-span-1 space-y-6">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative group bg-gray-100 dark:bg-gray-700">
                    {editFormData.profileImage ? (
                      <Image src={editFormData.profileImage} alt="Preview" fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                        <ImageIcon className="w-12 h-12 mb-2" />
                        <span className="text-[10px] font-bold uppercase">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 px-1">Image URL Path</label>
                    <input
                      type="text"
                      value={editFormData.profileImage || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, profileImage: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="/alumni/name.png"
                    />
                  </div>
                  <div className="pt-4">
                    <div className={`p-4 rounded-2xl border ${isDark ? 'bg-blue-900/10 border-blue-800/20' : 'bg-blue-50 border-blue-100'}`}>
                      <h4 className="text-[10px] font-black uppercase text-blue-600 mb-2">Internal Note</h4>
                      <p className="text-[10px] leading-relaxed opacity-60 italic">Please ensures all paths are relative to the public directory for proper image rendering.</p>
                    </div>
                  </div>
                </div>

                {/* Information Column */}
                <div className="md:col-span-2 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-gray-400 px-1">Full Name</label>
                      <input
                        type="text"
                        value={editFormData.name || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-gray-400 px-1">Initials (RK, SK, etc)</label>
                      <input
                        type="text"
                        value={editFormData.initials || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, initials: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} outline-none focus:ring-2 focus:ring-blue-500`}
                        maxLength={3}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-gray-400 px-1">Job Position</label>
                      <input
                        type="text"
                        value={editFormData.position || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, position: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-gray-400 px-1">Corporate Entity</label>
                      <input
                        type="text"
                        value={editFormData.company || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, company: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-gray-400 px-1">CTC Package</label>
                      <input
                        type="text"
                        value={editFormData.package || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, package: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-gray-400 px-1">Batch Year</label>
                      <input
                        type="text"
                        value={editFormData.batch || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, batch: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-gray-400 px-1">Preferred Course</label>
                      <input
                        type="text"
                        value={editFormData.course || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, course: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-gray-400 px-1">Placement Date</label>
                      <input
                        type="date"
                        value={editFormData.placementDate || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, placementDate: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                  </div>
                  <div className="space-y-1 pt-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 px-1">Alumni Testimonial</label>
                    <textarea
                      value={editFormData.testimonial || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, testimonial: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-10 pt-8 border-t border-gray-100 dark:border-gray-700">
                <button
                  onClick={handleCancelEdit}
                  className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all`}
                >
                  Discard Changes
                </button>
                <button
                  onClick={() => handleSave(editingId, editFormData)}
                  className="px-10 py-3 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Apply Updates
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
