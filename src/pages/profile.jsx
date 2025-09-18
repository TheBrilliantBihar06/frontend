import React, { useState } from 'react';
import { User, Mail, Camera } from 'lucide-react';

export default function ProfileSection({ user }) {
  // `user` prop contains firstName, lastName, email, profileImage
  const [profileImage, setProfileImage] = useState(user.profileImage);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: '#111827' }}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">Profile</h1>
            <p className="text-blue-100 mt-2">Your account details</p>
          </div>

          <div className="p-8 space-y-8">
            {/* Profile Picture */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-blue-200"
                />
                <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-colors shadow-lg">
                  <Camera className="w-4 h-4" />
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>

            {/* Details */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
              <div className="flex items-center mb-4">
                <User className="w-5 h-5 mr-2 text-gray-500" />
                <span className="text-gray-700 font-medium">Full Name:</span>
                <span className="ml-2 text-gray-900">{user.firstName} {user.lastName}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-500" />
                <span className="text-gray-700 font-medium">Email:</span>
                <span className="ml-2 text-gray-900">{user.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
