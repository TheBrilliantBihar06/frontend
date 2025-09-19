import React, { useState, useEffect } from 'react';
import {
  User,
  Upload,
  Edit,
  FileText,
  GraduationCap,
  Phone,
  CreditCard,
  CheckCircle,
  XCircle,
  Users,
  Calendar,
  Shield,
  Save
} from 'lucide-react';

const ProfessionalForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    universityName: '',
    graduationYear: '',
    aadharNumber: '',
    panNumber: '',
    contactNumber: '',
    class10Certificate: null,
    class12Certificate: null,
    graduationCertificate: null
  });

  const [showProfile, setShowProfile] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [errors, setErrors] = useState({});

  // Generate graduation years
  const currentYear = new Date().getFullYear();
  const graduationYears = Array.from({ length: 40 }, (_, i) => currentYear - i);

  // Calculate completion percentage
  useEffect(() => {
    const requiredFields = ['fullName', 'fatherName', 'motherName', 'aadharNumber', 'panNumber', 'contactNumber'];
    const optionalFields = ['universityName', 'graduationYear'];
    const requiredDocuments = ['class10Certificate', 'class12Certificate'];
    const optionalDocuments = ['graduationCertificate'];
    
    let score = 0;
    const totalPoints = 100;

    // Required fields (50 points total)
    requiredFields.forEach(field => {
      if (formData[field]?.toString().trim()) {
        score += 50 / requiredFields.length;
      }
    });

    // Required documents (30 points total)
    requiredDocuments.forEach(field => {
      if (formData[field]) {
        score += 30 / requiredDocuments.length;
      }
    });

    // Optional fields (20 points total)
    const allOptional = [...optionalFields, ...optionalDocuments];
    allOptional.forEach(field => {
      if (formData[field]) {
        score += 20 / allOptional.length;
      }
    });
    
    setCompletionPercentage(Math.round(score));
  }, [formData]);

  const validateField = (field, value) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'aadharNumber':
        if (value && !/^\d{12}$/.test(value)) {
          newErrors[field] = 'Aadhar number must be 12 digits';
        } else {
          delete newErrors[field];
        }
        break;
      case 'panNumber':
        if (value && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
          newErrors[field] = 'Invalid PAN format (e.g., ABCDE1234F)';
        } else {
          delete newErrors[field];
        }
        break;
      case 'contactNumber':
        if (value && !/^\d{10}$/.test(value)) {
          newErrors[field] = 'Contact number must be 10 digits';
        } else {
          delete newErrors[field];
        }
        break;
      default:
        if (value.trim()) {
          delete newErrors[field];
        }
    }

    setErrors(newErrors);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const handleFileUpload = (field, event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'application/pdf') {
        if (file.size <= 5 * 1024 * 1024) { // 5MB limit
          setFormData(prev => ({ ...prev, [field]: file }));
        } else {
          alert('File size should be less than 5MB');
        }
      } else {
        alert('Please upload a PDF file only');
      }
    }
  };

  const handleSaveChanges = () => {
    const requiredFields = ['fullName', 'fatherName', 'motherName', 'aadharNumber', 'panNumber', 'contactNumber'];
    const missingFields = requiredFields.filter(field => !formData[field]?.toString().trim());
    
    if (missingFields.length > 0 || Object.keys(errors).length > 0) {
      alert('Please fill all required fields correctly');
      return;
    }
    
    setShowProfile(true);
  };

  const getProgressColor = () => {
    if (completionPercentage >= 80) return { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200' };
    if (completionPercentage >= 50) return { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200' };
    return { bg: 'bg-red-500', text: 'text-red-600', border: 'border-red-200' };
  };

  const colors = getProgressColor();

  if (showProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Profile Dashboard</h1>
                  <p className="text-blue-100">Your professional information at a glance</p>
                </div>
                <button
                  onClick={() => setShowProfile(false)}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20"
                >
                  <Edit size={20} />
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="p-8">
              {/* Profile Header */}
              <div className="flex items-center mb-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <User size={48} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {formData.fullName || 'Full Name'}
                  </h2>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                    completionPercentage >= 80 ? 'bg-emerald-100 text-emerald-800' : 
                    completionPercentage >= 50 ? 'bg-amber-100 text-amber-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    <div className={`w-3 h-3 rounded-full mr-2 ${colors.bg}`}></div>
                    Profile {completionPercentage}% Complete
                  </div>
                </div>
              </div>

              {/* Information Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Users className="text-blue-600" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Full Name</span>
                      <span className="text-gray-800">{formData.fullName || '—'}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Father's Name</span>
                      <span className="text-gray-800">{formData.fatherName || '—'}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium text-gray-600">Mother's Name</span>
                      <span className="text-gray-800">{formData.motherName || '—'}</span>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <GraduationCap className="text-green-600" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Education</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">University</span>
                      <span className="text-gray-800">{formData.universityName || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium text-gray-600">Graduation Year</span>
                      <span className="text-gray-800">{formData.graduationYear || 'Not provided'}</span>
                    </div>
                  </div>
                </div>

                {/* Identity & Contact */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <Shield className="text-purple-600" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Identity & Contact</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Aadhar Number</span>
                      <span className="text-gray-800 font-mono">{formData.aadharNumber || '—'}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">PAN Number</span>
                      <span className="text-gray-800 font-mono">{formData.panNumber || '—'}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium text-gray-600">Contact Number</span>
                      <span className="text-gray-800">{formData.contactNumber || '—'}</span>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <FileText className="text-orange-600" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Documents</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Class 10th Certificate</span>
                      <div className="flex items-center">
                        {formData.class10Certificate ? 
                          <><CheckCircle className="text-emerald-500 mr-1" size={16} /><span className="text-emerald-600 text-sm">Uploaded</span></> : 
                          <><XCircle className="text-red-500 mr-1" size={16} /><span className="text-red-600 text-sm">Missing</span></>
                        }
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Class 12th Certificate</span>
                      <div className="flex items-center">
                        {formData.class12Certificate ? 
                          <><CheckCircle className="text-emerald-500 mr-1" size={16} /><span className="text-emerald-600 text-sm">Uploaded</span></> : 
                          <><XCircle className="text-red-500 mr-1" size={16} /><span className="text-red-600 text-sm">Missing</span></>
                        }
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-medium text-gray-600">Graduation Certificate</span>
                      <div className="flex items-center">
                        {formData.graduationCertificate ? 
                          <><CheckCircle className="text-emerald-500 mr-1" size={16} /><span className="text-emerald-600 text-sm">Uploaded</span></> : 
                          <><XCircle className="text-gray-400 mr-1" size={16} /><span className="text-gray-500 text-sm">Optional</span></>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white mb-2">Professional Profile Form</h1>
            <p className="text-blue-100">Complete your profile to get started</p>
          </div>

          <div className="p-8">
            {/* Progress Bar */}
            <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold text-gray-700">Profile Completion</span>
                <span className={`text-lg font-bold ${colors.text}`}>
                  {completionPercentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                <div 
                  className={`h-3 rounded-full transition-all duration-500 ease-out ${colors.bg} shadow-sm`}
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {completionPercentage < 50 ? 'Just getting started!' : 
                  completionPercentage < 80 ? 'Great progress!' : 
                  'Almost there!'}
              </p>
            </div>

            <div className="space-y-8">
              {/* Personal Information */}
              <section>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder:text-black text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Father's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter father's name"
                      value={formData.fatherName}
                      onChange={(e) => handleInputChange('fatherName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder:text-black text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mother's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter mother's name"
                      value={formData.motherName}
                      onChange={(e) => handleInputChange('motherName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder:text-black text-gray-900"
                    />
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <GraduationCap className="text-green-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Education</h2>
                  <span className="ml-3 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Optional</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      University Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter university name"
                      value={formData.universityName}
                      onChange={(e) => handleInputChange('universityName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder:text-black text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Graduation Year
                    </label>
                    <select
                      value={formData.graduationYear}
                      onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                    >
                      <option value="">Select graduation year</option>
                      {graduationYears.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>

              {/* Identity & Contact */}
              <section>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="text-purple-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Identity & Contact</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Aadhar Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter 12-digit Aadhar number"
                      value={formData.aadharNumber}
                      onChange={(e) => handleInputChange('aadharNumber', e.target.value.replace(/\D/g, '').slice(0, 12))}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors placeholder:text-black text-gray-900 ${
                        errors.aadharNumber ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                    />
                    {errors.aadharNumber && <p className="text-red-500 text-sm mt-1">{errors.aadharNumber}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      PAN Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter PAN number (e.g., ABCDE1234F)"
                      value={formData.panNumber}
                      onChange={(e) => handleInputChange('panNumber', e.target.value.toUpperCase().slice(0, 10))}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors font-mono placeholder:text-black text-gray-900 ${
                        errors.panNumber ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                    />
                    {errors.panNumber && <p className="text-red-500 text-sm mt-1">{errors.panNumber}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit contact number"
                      value={formData.contactNumber}
                      onChange={(e) => handleInputChange('contactNumber', e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors placeholder:text-black text-gray-900 ${
                        errors.contactNumber ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                    />
                    {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
                  </div>
                </div>
              </section>

              {/* Document Upload */}
              <section>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <FileText className="text-orange-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Document Upload</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { field: 'class10Certificate', label: 'Class 10th Certificate', required: true },
                    { field: 'class12Certificate', label: 'Class 12th Certificate', required: true },
                    { field: 'graduationCertificate', label: 'Graduation Certificate', required: false }
                  ].map(({ field, label, required }) => (
                    <div key={field} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => handleFileUpload(field, e)}
                        className="hidden"
                        id={field}
                      />
                      <label htmlFor={field} className="cursor-pointer block">
                        <Upload className="mx-auto mb-3 text-gray-400" size={32} />
                        <h3 className="font-semibold text-gray-700 mb-1">
                          {label} {required && <span className="text-red-500">*</span>}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3">PDF files only (max 5MB)</p>
                        <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg inline-flex items-center text-sm font-medium hover:bg-blue-100 transition-colors">
                          <Upload size={16} className="mr-2" />
                          Choose File
                        </div>
                        {formData[field] && (
                          <div className="mt-3 p-2 bg-green-50 rounded-lg">
                            <CheckCircle className="inline text-green-500 mr-1" size={16} />
                            <span className="text-green-700 text-sm">{formData[field].name}</span>
                          </div>
                        )}
                      </label>
                    </div>
                  ))}
                </div>
              </section>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  <Save size={24} />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalForm;

