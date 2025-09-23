import React, { useState, useEffect } from 'react';
import { Search, Download, Eye, Filter, BookOpen, User, Calendar, FileText, Star, Heart, ArrowDown, Grid, List } from 'lucide-react';

const DownloadableNotes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Advanced Calculus - Derivatives and Applications",
      subject: "Mathematics",
      teacher: "Dr. Sarah Johnson",
      description: "Comprehensive guide covering derivative rules, chain rule, implicit differentiation, and real-world applications with solved examples.",
      uploadDate: "2025-09-20",
      fileSize: "2.4 MB",
      fileType: "PDF",
      downloads: 1234,
      rating: 4.8,
      tags: ["calculus", "derivatives", "mathematics", "applications"],
      difficulty: "Advanced",
      pages: 45,
      thumbnail: "📊",
      liked: false,
      preview: "This comprehensive guide covers all essential derivative concepts including power rule, product rule, quotient rule, and chain rule. Contains 50+ solved examples and practice problems."
    },
    {
      id: 2,
      title: "Organic Chemistry Reaction Mechanisms",
      subject: "Chemistry",
      teacher: "Prof. Michael Chen",
      description: "Detailed mechanisms for major organic reactions including substitution, elimination, and addition reactions with electron flow diagrams.",
      uploadDate: "2025-09-19",
      fileSize: "3.1 MB",
      fileType: "PDF",
      downloads: 892,
      rating: 4.9,
      tags: ["organic chemistry", "mechanisms", "reactions", "electron flow"],
      difficulty: "Intermediate",
      pages: 62,
      thumbnail: "🧪",
      liked: false,
      preview: "Master organic reaction mechanisms with detailed electron flow diagrams, step-by-step breakdowns, and practice problems for each major reaction type."
    },
    {
      id: 3,
      title: "Quantum Mechanics Fundamentals",
      subject: "Physics",
      teacher: "Dr. Emily Rodriguez",
      description: "Introduction to quantum mechanics principles, wave functions, Schrödinger equation, and quantum states with mathematical derivations.",
      uploadDate: "2025-09-18",
      fileSize: "4.2 MB",
      fileType: "PDF",
      downloads: 567,
      rating: 4.7,
      tags: ["quantum mechanics", "wave functions", "physics", "schrödinger"],
      difficulty: "Advanced",
      pages: 78,
      thumbnail: "⚛️",
      liked: false,
      preview: "Explore the fascinating world of quantum mechanics with clear explanations of fundamental principles, mathematical foundations, and practical applications."
    },
    {
      id: 4,
      title: "Cell Biology and Genetics",
      subject: "Biology",
      teacher: "Dr. Lisa Park",
      description: "Comprehensive study of cell structure, function, and genetic processes including DNA replication, transcription, and translation.",
      uploadDate: "2025-09-17",
      fileSize: "5.8 MB",
      fileType: "PDF",
      downloads: 1456,
      rating: 4.6,
      tags: ["cell biology", "genetics", "dna", "transcription"],
      difficulty: "Intermediate",
      pages: 94,
      thumbnail: "🧬",
      liked: false,
      preview: "Deep dive into cellular processes and genetic mechanisms with detailed diagrams, molecular interactions, and current research findings."
    },
    {
      id: 5,
      title: "Linear Algebra Matrix Operations",
      subject: "Mathematics",
      teacher: "Prof. David Kim",
      description: "Complete guide to matrix operations, eigenvalues, eigenvectors, and applications in data science and engineering.",
      uploadDate: "2025-09-16",
      fileSize: "2.9 MB",
      fileType: "PDF",
      downloads: 734,
      rating: 4.5,
      tags: ["linear algebra", "matrices", "eigenvalues", "data science"],
      difficulty: "Intermediate",
      pages: 56,
      thumbnail: "📐",
      liked: false,
      preview: "Master matrix operations and linear transformations with practical applications in machine learning, computer graphics, and engineering."
    },
    {
      id: 6,
      title: "Thermodynamics Laws and Applications",
      subject: "Physics",
      teacher: "Dr. Robert Wilson",
      description: "Fundamental laws of thermodynamics with real-world applications in engines, refrigerators, and heat pumps.",
      uploadDate: "2025-09-15",
      fileSize: "3.7 MB",
      fileType: "PDF",
      downloads: 423,
      rating: 4.4,
      tags: ["thermodynamics", "heat", "energy", "applications"],
      difficulty: "Intermediate",
      pages: 67,
      thumbnail: "🌡️",
      liked: false,
      preview: "Understanding energy, heat, and work relationships through the four laws of thermodynamics with engineering applications and problem-solving techniques."
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  const subjects = ["All", "Mathematics", "Physics", "Chemistry", "Biology"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredNotes = notes
    .filter(note => 
      (selectedSubject === "All" || note.subject === selectedSubject) &&
      (selectedDifficulty === "All" || note.difficulty === selectedDifficulty) &&
      (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       note.teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
       note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      switch(sortBy) {
        case "newest": return new Date(b.uploadDate) - new Date(a.uploadDate);
        case "oldest": return new Date(a.uploadDate) - new Date(b.uploadDate);
        case "popular": return b.downloads - a.downloads;
        case "rating": return b.rating - a.rating;
        default: return 0;
      }
    });

  const handleDownload = (noteId) => {
    setNotes(notes.map(note => 
      note.id === noteId ? { ...note, downloads: note.downloads + 1 } : note
    ));
    // Simulate download
    console.log(`Downloading note ${noteId}`);
  };

  const toggleLike = (noteId) => {
    setNotes(notes.map(note => 
      note.id === noteId ? { ...note, liked: !note.liked } : note
    ));
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Study Notes Library</h1>
          <p className="text-gray-600 text-lg">Download high-quality notes from expert teachers</p>
          <div className="flex justify-center items-center space-x-6 mt-4 text-sm text-gray-500">
            <span className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              {notes.length} Notes Available
            </span>
            <span className="flex items-center">
              <Download className="w-4 h-4 mr-1" />
              {notes.reduce((acc, note) => acc + note.downloads, 0)} Downloads
            </span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search notes, topics, or teachers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <select 
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              <select 
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Downloaded</option>
                <option value="rating">Highest Rated</option>
              </select>
              <div className="flex bg-white/80 rounded-lg border border-gray-200">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 ${viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-500 hover:text-gray-700"} rounded-l-lg transition-colors`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 ${viewMode === "list" ? "bg-blue-500 text-white" : "text-gray-500 hover:text-gray-700"} rounded-r-lg transition-colors`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <div className="text-2xl font-bold">{filteredNotes.length}</div>
            <div className="text-blue-100">Available Notes</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="text-2xl font-bold">{subjects.length - 1}</div>
            <div className="text-green-100">Subjects</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="text-2xl font-bold">{new Set(notes.map(n => n.teacher)).size}</div>
            <div className="text-purple-100">Teachers</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white">
            <div className="text-2xl font-bold">{notes.reduce((acc, note) => acc + note.downloads, 0).toLocaleString()}</div>
            <div className="text-orange-100">Total Downloads</div>
          </div>
        </div>

        {/* Notes Grid/List */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredNotes.map((note) => (
            <div key={note.id} className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group ${viewMode === "list" ? "flex p-4" : "overflow-hidden"}`}>
              {viewMode === "grid" ? (
                <>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{note.thumbnail}</div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => toggleLike(note.id)}
                          className={`p-2 rounded-full transition-colors ${note.liked ? "text-red-500 bg-red-50" : "text-gray-400 hover:text-red-500 hover:bg-red-50"}`}
                        >
                          <Heart className={`w-4 h-4 ${note.liked ? "fill-current" : ""}`} />
                        </button>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{note.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{note.title}</h3>
                    
                    <div className="flex items-center mb-3">
                      <User className="w-4 h-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600">{note.teacher}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{note.preview}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(note.difficulty)}`}>
                        {note.difficulty}
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {note.subject}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {note.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(note.uploadDate)}
                      </div>
                      <div className="flex items-center space-x-3">
                        <span>{note.fileSize}</span>
                        <span>{note.pages} pages</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <ArrowDown className="w-4 h-4 mr-1" />
                        {note.downloads.toLocaleString()} downloads
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDownload(note.id)}
                          className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-3xl mr-4">{note.thumbnail}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-800">{note.title}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{note.rating}</span>
                        </div>
                        <button
                          onClick={() => toggleLike(note.id)}
                          className={`p-1 rounded-full ${note.liked ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
                        >
                          <Heart className={`w-4 h-4 ${note.liked ? "fill-current" : ""}`} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <User className="w-4 h-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600 mr-4">{note.teacher}</span>
                      <span className={`text-xs px-2 py-1 rounded-full mr-2 ${getDifficultyColor(note.difficulty)}`}>
                        {note.difficulty}
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {note.subject}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-2">{note.preview}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(note.uploadDate)}
                        </div>
                        <span>{note.fileSize}</span>
                        <span>{note.pages} pages</span>
                        <div className="flex items-center">
                          <ArrowDown className="w-3 h-3 mr-1" />
                          {note.downloads.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-blue-500 rounded-lg">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDownload(note.id)}
                          className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all text-sm"
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No notes found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadableNotes;