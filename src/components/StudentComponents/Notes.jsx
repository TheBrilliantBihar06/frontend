// src/components/Notes.js
import React, { useState } from 'react';
import { PenTool, Search, Star, Edit, XCircle } from 'lucide-react';

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Calculus Derivatives",
      subject: "Mathematics",
      content: "Key formulas and concepts for derivatives...",
      date: "2025-09-18",
      tags: ["math", "calculus", "derivatives"],
      pinned: true
    },
    {
      id: 2,
      title: "Organic Reactions",
      subject: "Chemistry",
      content: "Important organic chemistry reactions and mechanisms...",
      date: "2025-09-17",
      tags: ["chemistry", "organic", "reactions"],
      pinned: false
    },
    {
      id: 3,
      title: "Newton's Laws",
      subject: "Physics",
      content: "Three fundamental laws of motion by Isaac Newton...",
      date: "2025-09-16",
      tags: ["physics", "mechanics", "laws"],
      pinned: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [showNewNote, setShowNewNote] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", subject: "", content: "", tags: "" });

  const subjects = ["All", "Mathematics", "Physics", "Chemistry", "Biology"];

  const filteredNotes = notes.filter(note => 
    (selectedSubject === "All" || note.subject === selectedSubject) &&
    (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
     note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const handleAddNote = () => {
    if (newNote.title && newNote.content) {
      const note = {
        id: Date.now(),
        ...newNote,
        date: new Date().toISOString().split('T')[0],
        tags: newNote.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        pinned: false
      };
      setNotes([...notes, note]);
      setNewNote({ title: "", subject: "", content: "", tags: "" });
      setShowNewNote(false);
    }
  };

  const togglePin = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, pinned: !note.pinned } : note
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Notes</h1>
            <p className="text-gray-600">Organize and access your study notes</p>
          </div>
          <button 
            onClick={() => setShowNewNote(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <PenTool className="w-4 h-4 mr-2" />
            New Note
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <select 
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes
            .sort((a, b) => b.pinned - a.pinned)
            .map((note) => (
            <div key={note.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
                <button
                  onClick={() => togglePin(note.id)}
                  className={`p-1 rounded ${note.pinned ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <Star className={`w-4 h-4 ${note.pinned ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <div className="mb-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {note.subject}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {note.content.substring(0, 150)}...
              </p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {note.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{note.date}</span>
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* New Note Modal */}
        {showNewNote && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">Create New Note</h2>
                  <button 
                    onClick={() => setShowNewNote(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={newNote.title}
                      onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter note title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select
                      value={newNote.subject}
                      onChange={(e) => setNewNote({...newNote, subject: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select subject</option>
                      {subjects.slice(1).map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <textarea
                      value={newNote.content}
                      onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                      rows={8}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Write your note content here..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma-separated)</label>
                    <input
                      type="text"
                      value={newNote.tags}
                      onChange={(e) => setNewNote({...newNote, tags: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="math, formulas, important"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end gap-3 mt-6">
                  <button 
                    onClick={() => setShowNewNote(false)}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleAddNote}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Save Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;