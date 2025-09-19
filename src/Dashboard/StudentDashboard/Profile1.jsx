import React, { useState, useEffect } from 'react';

// Custom Icons with enhanced styling
const PhotoIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="9" cy="9" r="2"/>
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
  </svg>
);

const PenIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
    <path d="m15 5 4 4"/>
  </svg>
);

const UploadIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" x2="12" y1="3" y2="15"/>
  </svg>
);

const FileUpIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L15 2z"/>
    <path d="M14 2v6h6"/>
    <path d="M12 11v6"/>
    <path d="M9 14l3-3 3 3"/>
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const XIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const SparkleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L14.09 8.26L22 9L14.09 9.74L12 16L9.91 9.74L2 9L9.91 8.26L12 2Z"/>
  </svg>
);

const GradientButton = ({ onClick, children, className = "" }) => (
  <button 
    onClick={onClick}
    className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 p-[2px] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 ${className}`}
  >
    <div className="relative rounded-2xl bg-black px-8 py-3 text-white transition-all duration-300 hover:bg-transparent">
      {children}
    </div>
  </button>
);

// Enhanced File Upload Component
const FileUpload = ({ label, isMissing, uploadState, handleFileDrop }) => {
  const { isUploading, progress, isUploaded, previewUrl, fileName } = uploadState;
  const [isHovered, setIsHovered] = useState(false);

  const renderIcon = () => {
    if (isUploaded) {
      return <CheckIcon className="h-8 w-8 text-emerald-500 drop-shadow-lg" />;
    } else if (isUploading) {
      return <FileUpIcon className="h-8 w-8 text-blue-500 animate-pulse drop-shadow-lg" />;
    }
    return <UploadIcon className="h-8 w-8 text-gray-400 drop-shadow-lg" />;
  };

  return (
    <div className="group">
      <div
        className={`relative overflow-hidden rounded-3xl p-[2px] transition-all duration-500 cursor-pointer
          ${isUploaded 
            ? 'bg-gradient-to-r from-emerald-400 to-cyan-400' 
            : isMissing 
              ? 'bg-gradient-to-r from-red-400 to-pink-400' 
              : 'bg-gradient-to-r from-violet-400 to-purple-400'
          }
          ${isHovered ? 'scale-105 shadow-2xl shadow-purple-500/25' : ''}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onDrop={(e) => handleFileDrop(e, label)}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => e.preventDefault()}
      >
        <input 
          type="file" 
          className="hidden" 
          id={`upload-${label}`} 
          onChange={(e) => handleFileDrop(e, label, true)} 
        />
        <label htmlFor={`upload-${label}`} className="absolute inset-0 cursor-pointer z-20" />
        
        <div className={`relative rounded-3xl p-8 transition-all duration-500
          ${isUploaded 
            ? 'bg-gradient-to-br from-emerald-50 to-cyan-50' 
            : 'bg-white/90 backdrop-blur-xl'
          }
        `}>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className={`p-4 rounded-2xl transition-all duration-300
              ${isUploaded 
                ? 'bg-emerald-100 shadow-lg shadow-emerald-200/50' 
                : 'bg-gray-100 group-hover:bg-violet-100 shadow-lg shadow-gray-200/50'
              }
            `}>
              {renderIcon()}
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {label}
              </h3>
              
              {!isUploaded && !isUploading && (
                <p className={`text-sm transition-all duration-300
                  ${isMissing ? 'text-red-600 font-semibold' : 'text-gray-500'}
                `}>
                  Drag & drop or click to upload
                </p>
              )}
              
              {isUploading && (
                <div className="w-full">
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300 shadow-sm"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-blue-600 font-medium">Uploading... {progress}%</p>
                </div>
              )}
              
              {isUploaded && (
                <div className="space-y-3">
                  {previewUrl && (
                    <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="h-16 w-auto mx-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      />
                    </a>
                  )}
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700 font-medium truncate max-w-[150px] mx-auto">
                      {fileName}
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckIcon className="h-4 w-4 text-emerald-500" />
                      <span className="text-emerald-600 text-sm font-bold">Uploaded!</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const StudentProfile = () => {
  // Simplified state for demo purposes
  const [profilePic, setProfilePic] = useState('https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face');
  const [name, setName] = useState('Alexandra Chen');
  const [documents, setDocuments] = useState({
    '10th Marksheet': { file: null, previewUrl: null, isUploading: false, progress: 0, isUploaded: false, fileName: '' },
    '12th Marksheet': { file: null, previewUrl: null, isUploading: false, progress: 0, isUploaded: true, fileName: 'Grade12_Certificate.pdf' },
    'Graduation Marksheet': { file: null, previewUrl: null, isUploading: false, progress: 0, isUploaded: false, fileName: '' },
  });

  const isDocumentMissing = Object.values(documents).some(doc => !doc.isUploaded);
  const uploadedCount = Object.values(documents).filter(doc => doc.isUploaded).length;
  const totalCount = Object.keys(documents).length;

  const handleFileDrop = (e, label, isClick = false) => {
    e.preventDefault();
    e.stopPropagation();

    const file = isClick ? e.target.files[0] : e.dataTransfer.files[0];
    if (!file) return;

    setDocuments(prev => ({
      ...prev,
      [label]: { ...prev[label], isUploading: true, progress: 0, fileName: file.name }
    }));

    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 15 + 5;
      if (currentProgress > 100) currentProgress = 100;
      
      setDocuments(prev => ({
        ...prev,
        [label]: { ...prev[label], progress: Math.floor(currentProgress) }
      }));

      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        const previewUrl = URL.createObjectURL(file);
        
        setDocuments(prev => ({
          ...prev,
          [label]: { 
            ...prev[label], 
            isUploading: false, 
            isUploaded: true, 
            progress: 100, 
            previewUrl, 
            fileName: file.name 
          }
        }));
      }
    }, 150);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfilePic(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-cyan-100 p-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-violet-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <SparkleIcon className="h-8 w-8 text-violet-600 animate-pulse" />
            <h1 className="text-6xl font-black bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Student Portal
            </h1>
            <SparkleIcon className="h-8 w-8 text-cyan-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 font-medium">
            Manage your academic profile with style
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="relative overflow-hidden rounded-3xl p-[2px] bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">
              <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl p-8">
                {/* Profile Picture */}
                <div className="flex flex-col items-center space-y-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-32 h-32">
                      <img
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl"
                        src={profilePic}
                        alt="Profile"
                      />
                      <input
                        type="file"
                        id="profile-pic-upload"
                        className="hidden"
                        onChange={handleProfilePicChange}
                        accept="image/*"
                      />
                      <label
                        htmlFor="profile-pic-upload"
                        className="absolute bottom-2 right-2 p-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full text-white cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                      >
                        <PenIcon className="w-5 h-5" />
                      </label>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {name}
                    </h2>
                    <p className="text-gray-500 font-medium">Computer Science Student</p>
                    <div className="px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full">
                      <p className="text-sm text-violet-700 font-medium">
                        ID: CS2024-{Math.random().toString(36).substr(2, 6).toUpperCase()}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="w-full grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                    <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50">
                      <div className="text-2xl font-bold text-violet-600">{uploadedCount}</div>
                      <div className="text-sm text-gray-600">Uploaded</div>
                    </div>
                    <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50">
                      <div className="text-2xl font-bold text-cyan-600">{totalCount - uploadedCount}</div>
                      <div className="text-sm text-gray-600">Pending</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl p-[2px] bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">
              <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <PhotoIcon className="h-8 w-8 text-violet-600" />
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        Academic Documents
                      </h3>
                    </div>
                    <p className="text-gray-600">Upload your certificates and marksheets</p>
                  </div>
                  
                  {isDocumentMissing && (
                    <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 rounded-full border border-red-200">
                      <XIcon className="h-5 w-5 text-red-500" />
                      <span className="text-red-700 font-semibold text-sm">Documents Missing</span>
                    </div>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Upload Progress</span>
                    <span className="text-sm font-medium text-violet-600">{uploadedCount}/{totalCount} Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-violet-500 to-purple-500 h-4 rounded-full transition-all duration-500 shadow-sm"
                      style={{ width: `${(uploadedCount / totalCount) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Upload Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {Object.keys(documents).map(key => (
                    <FileUpload
                      key={key}
                      label={key}
                      uploadState={documents[key]}
                      isMissing={!documents[key].isUploaded}
                      handleFileDrop={handleFileDrop}
                    />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center space-x-4 mt-8 pt-8 border-t border-gray-200">
                  <GradientButton onClick={() => console.log('Save Profile')}>
                    Save Profile
                  </GradientButton>
                  <GradientButton onClick={() => console.log('Download Report')}>
                    Download Report
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-500">
            Powered by next-generation student management system
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <span>Secure</span>
            <span>•</span>
            <span>Fast</span>
            <span>•</span>
            <span>Reliable</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default StudentProfile;