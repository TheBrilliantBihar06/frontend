import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-3xl opacity-10 blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
              <h1 className="text-5xl font-bold text-black mb-3">
                Brilliant Bihar
              </h1>
              <p className="text-xl text-black font-medium">Online Application Form</p>
              <div className="flex justify-center mt-4">
                <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </header>
        <Form />
      </div>
      <Footer />
    </div>
  );
}

const Form = () => {
  const [applicationId, setApplicationId] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    category: '',
    gender: '',
    phone: '',
    email: '',
    aadhaar: '',
    address: '',
    // Education checkboxes
    ssc: false,
    matric: false,
    graduate: false,
    examinationCenter: '',
    photo: null,
    transactionId: '',
    paymentMobile: ''
  });

  // NEW: State variables for OTP verification
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpMessage, setOtpMessage] = useState({ text: '', type: '' });
  const [otpLoading, setOtpLoading] = useState(false);

  const [paymentRequired, setPaymentRequired] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [errors, setErrors] = useState({});

  const examinationCenters = [
    { id: 'PAT001', name: 'Patna Center 1', city: 'Patna' }
  ];

  const isOnlyLetters = (str) => /^[A-Za-z\s]*$/.test(str);
  const isOnlyNumbers = (str) => /^[0-9]*$/.test(str);

  useEffect(() => {
    const generateApplicationId = async () => {
      try {
        const timestamp = Date.now().toString();
        const random = Math.random().toString(36).substring(2, 8).toUpperCase();
        setApplicationId(`BRB${timestamp.slice(-6)}${random}`);
      } catch (error) {
        console.error('Error generating application ID:', error);
        const timestamp = Date.now().toString();
        const random = Math.random().toString(36).substring(2, 8).toUpperCase();
        setApplicationId(`BRB${timestamp.slice(-6)}${random}`);
      }
    };
    generateApplicationId();
  }, []);

  useEffect(() => {
    if (formData.category) {
      if (formData.category === 'sc_st') {
        setPaymentRequired(true);
        setPaymentAmount(2);
      } else if (['obc', 'general', 'other'].includes(formData.category)) {
        setPaymentRequired(true);
        setPaymentAmount(3);
      } else {
        setPaymentRequired(false);
        setPaymentAmount(0);
      }
    }
  }, [formData.category]);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    // NEW: Reset email verification status if email is changed
    if (name === 'email' && isEmailVerified) {
        setIsEmailVerified(false);
        setIsOtpSent(false);
        setOtp('');
        setOtpMessage({ text: '', type: '' });
    }
    
    if (type === 'checkbox' && ['ssc', 'matric', 'graduate'].includes(name)) {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      if (name === 'fullName') {
        if (isOnlyLetters(value)) {
          setFormData(prev => ({
            ...prev,
            [name]: value
          }));
        }
      } else if (['phone', 'aadhaar'].includes(name)) {
        if (isOnlyNumbers(value)) {
          setFormData(prev => ({
            ...prev,
            [name]: value
          }));
        }
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Personal Details validation
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';

    // Contact Details validation
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Enter valid 10-digit phone number';
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter valid email address';

    // NEW: Check if email is verified
    if (!isEmailVerified) newErrors.email = 'Please verify your email address';
    
    if (!formData.aadhaar.trim()) newErrors.aadhaar = 'Aadhaar number is required';
    else if (!/^[0-9]{12}$/.test(formData.aadhaar)) newErrors.aadhaar = 'Enter valid 12-digit Aadhaar number';
    
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    // Education validation (at least one checkbox should be selected)
    if (!formData.ssc && !formData.matric && !formData.graduate) {
      newErrors.education = 'Please select at least one education level';
    }

    // Examination center validation
    if (!formData.examinationCenter) newErrors.examinationCenter = 'Examination center is required';

    // Photo validation
    if (!formData.photo) newErrors.photo = 'Photo is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // NEW: Function to handle sending OTP
  const handleSendOtp = async () => {
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address first.' }));
      return;
    }

    setOtpLoading(true);
    setOtpMessage({ text: '', type: '' });
    try {
      await axios.post('http://localhost:5000/api/otp/send', { email: formData.email });
      setIsOtpSent(true);
      setOtpMessage({ text: 'An OTP has been sent to your email.', type: 'success' });
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to send OTP.';
      setOtpMessage({ text: message, type: 'error' });
    } finally {
      setOtpLoading(false);
    }
  };

  // NEW: Function to handle OTP verification
  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      setOtpMessage({ text: 'Please enter a valid 6-digit OTP.', type: 'error' });
      return;
    }

    setOtpLoading(true);
    setOtpMessage({ text: '', type: '' });
    try {
      await axios.post('http://localhost:5000/api/otp/verify', { email: formData.email, otp });
      setIsEmailVerified(true);
      setOtpMessage({ text: 'Email verified successfully! 🎉', type: 'success' });
      // Clear email error if it was set by validation before
      if (errors.email) {
        setErrors(prev => ({...prev, email: ''}));
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Verification failed.';
      setOtpMessage({ text: message, type: 'error' });
    } finally {
      setOtpLoading(false);
    }
  };

  const handlePayment = async () => {
    if (!paymentAmount) return;

    setLoading(true);
    try {
      const { data } = await axios.post('http://localhost:5000/api/payment/create-order', {
        amount: paymentAmount * 100
      });

      const options = {
        key: 'rzp_test_RHQkYFfppEJks4',
        amount: data.amount,
        currency: 'INR',
        name: 'Brilliant Bihar',
        description: 'Application Fee',
        order_id: data.id,
        handler: async function (response) {
          setFormData(prev => ({
            ...prev,
            transactionId: response.razorpay_payment_id,
            paymentMobile: formData.phone
          }));
          setPaymentCompleted(true);
          setLoading(false);
          alert('Payment successful!');
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#059669'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment initiation error:', error);
      alert('Payment failed. Try again.');
      setLoading(false);
    }
  };

  const submitForm = async () => {
    if (!validateForm()) return;

    if (paymentRequired && !paymentCompleted) {
      alert("Please complete the payment first.");
      return;
    }

    setLoading(true);

    try {
      const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL || "https://api.cloudinary.com/v1_1/dyvr0r02e/upload";
      const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET || "Registration";

      const uploadToCloudinary = async (file, fileType) => {
        if (!file) {
          console.error(`${fileType} is null`);
          return "";
        }
        const maxSize = 2 * 1024 * 1024; // 2MB for photo
        if (file.size > maxSize) {
          throw new Error(`Photo exceeds size limit of 2MB`);
        }
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", UPLOAD_PRESET);
        data.append("resource_type", "auto");
        data.append("folder", "brilliant_bihar/registration/photos");

        try {
          const res = await axios.post(CLOUDINARY_URL, data, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          return res.data.secure_url;
        } catch (error) {
          console.error(`Error uploading ${fileType}:`, error.response?.data || error.message);
          throw error;
        }
      };

      const photoUrl = await uploadToCloudinary(formData.photo, "photo").catch((error) => {
        throw new Error(`Photo upload failed: ${error.message}`);
      });

      const formDataToSend = {
        ...formData,
        photo: photoUrl,
        applicationId,
        paymentAmount: paymentRequired ? paymentAmount : 0,
      };

      const response = await axios.post("http://localhost:5000/api/application/submit", formDataToSend);
      setLoading(false);
      alert(response.data.message);
      setSubmitted(true);
    } catch (error) {
      setLoading(false);
      console.error("Submission error:", error.response?.data || error.message);
      alert(error.message || "Failed to submit application. Try again.");
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-10 text-center border border-green-100">
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <svg width="48" height="48" className="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>
        <h2 className="text-4xl font-bold text-black mb-4">Application Submitted Successfully! 🎉</h2>
        <div className="bg-gray-50 rounded-xl p-4 mb-6 border-l-4 border-green-500">
          <p className="text-lg text-black mb-2">Your Application ID:</p>
          <p className="font-mono text-2xl font-bold text-green-600 bg-white px-4 py-2 rounded-lg shadow-inner">
            {applicationId}
          </p>
        </div>
        <p className="text-black text-lg leading-relaxed">
          We have sent a confirmation email to your registered email address. 
          <br />
          Please save your application ID for future reference and tracking.
        </p>
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-black font-medium">📧 Check your email for further instructions and updates.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl relative overflow-hidden border border-gray-200">
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-green-500 border-t-transparent mb-4"></div>
            <p className="text-lg font-semibold text-black">Processing your application...</p>
          </div>
        </div>
      )}
      
      {/* Application ID Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">🏛️ Application Portal</h2>
        <div className="bg-white bg-opacity-20 rounded-full px-6 py-2 inline-block">
          <p className="text-white">
            Application ID: <span className="font-mono font-bold text-green-300">{applicationId}</span>
          </p>
        </div>
      </div>

      <div className="p-8 space-y-10">
        {/* Personal Details Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
            <div>
              <h3 className="text-2xl font-bold text-black">Personal Details</h3>
              <p className="text-black">Enter your basic information</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Rakesh Kumar Singh"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm text-black placeholder-gray-500 ${
                    errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-200'
                  }`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.fullName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm text-black ${
                    errors.dateOfBirth ? 'border-red-500 focus:ring-red-200' : 'border-gray-200'
                  }`}
                />
                {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.dateOfBirth}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm text-black ${
                    errors.category ? 'border-red-500 focus:ring-red-200' : 'border-gray-200'
                  }`}
                >
                  <option value="">Select your category</option>
                  <option value="general">General</option>
                  <option value="obc">OBC (Other Backward Classes)</option>
                  <option value="sc_st">SC/ST (Scheduled Caste/Tribe)</option>
                  <option value="other">Other</option>
                </select>
                {errors.category && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.category}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-6 mt-3">
                  {[
                    { value: 'male', label: 'Male', icon: '👨' },
                    { value: 'female', label: 'Female', icon: '👩' },
                    { value: 'other', label: 'Other', icon: '👤' }
                  ].map(gender => (
                    <label key={gender.value} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="gender"
                        value={gender.value}
                        checked={formData.gender === gender.value}
                        onChange={handleInputChange}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-black group-hover:text-blue-600 transition-colors">
                        <span className="mr-1">{gender.icon}</span>{gender.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.gender && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.gender}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">2</div>
            <div>
              <h3 className="text-2xl font-bold text-black">Contact Details</h3>
              <p className="text-black">Provide your contact information</p>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  📱 Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="9876543210"
                  maxLength="10"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-200 bg-white shadow-sm text-black placeholder-gray-500 ${
                    errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.phone}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  📧 Email ID <span className="text-red-500">*</span>
                  {/* NEW: Show checkmark if verified */}
                  {isEmailVerified && <span className="text-green-500 font-bold ml-2">✓ Verified</span>}
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="rakesh.singh@example.com"
                    // NEW: Disable input after verification
                    disabled={isEmailVerified}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-200 bg-white shadow-sm text-black placeholder-gray-500 ${
                      errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200'
                    } ${isEmailVerified ? 'bg-green-50 cursor-not-allowed' : ''}`}
                  />
                  {/* NEW: Conditionally show "Send OTP" button */}
                  {!isEmailVerified && (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={otpLoading || !formData.email}
                      className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:bg-gray-400 whitespace-nowrap transition-all duration-200"
                    >
                      {otpLoading ? 'Sending...' : (isOtpSent ? 'Resend OTP' : 'Send OTP')}
                    </button>
                  )}
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.email}</p>}
                
                {/* NEW: OTP Input Section (positioned directly below email) */}
                {isOtpSent && !isEmailVerified && (
                  <div className="mt-4 bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                    <label className="block text-sm font-semibold text-black mb-3">
                      🔐 Enter OTP sent to {formData.email}
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        placeholder="6-digit OTP"
                        maxLength="6"
                        className="w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 bg-white text-black placeholder-gray-500 font-mono text-lg text-center tracking-widest"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={otpLoading || otp.length !== 6}
                        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 disabled:bg-gray-400 transition-all duration-200 whitespace-nowrap"
                      >
                        {otpLoading ? 'Verifying...' : 'Verify OTP'}
                      </button>
                    </div>
                  </div>
                )}

                {/* NEW: OTP Message Display (positioned below OTP input) */}
                {otpMessage.text && (
                  <div className={`mt-3 p-3 rounded-xl font-medium flex items-center ${
                    otpMessage.type === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    <span className="mr-2">
                      {otpMessage.type === 'success' ? '✅' : '❌'}
                    </span>
                    {otpMessage.text}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  🆔 Aadhaar Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="aadhaar"
                  value={formData.aadhaar}
                  onChange={handleInputChange}
                  placeholder="123456789012"
                  maxLength="12"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-200 bg-white shadow-sm text-black placeholder-gray-500 ${
                    errors.aadhaar ? 'border-red-500 focus:ring-red-200' : 'border-gray-200'
                  }`}
                />
                {errors.aadhaar && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.aadhaar}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  🏠 Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123, Main Street, City, State - 800001"
                  rows="3"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-200 resize-none bg-white shadow-sm text-black placeholder-gray-500 ${
                    errors.address ? 'border-red-500 focus:ring-red-200' : 'border-gray-200'
                  }`}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.address}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Educational Details Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">3</div>
            <div>
              <h3 className="text-2xl font-bold text-black">Educational Details</h3>
              <p className="text-black">Select your education level and exam center</p>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <div>
              <label className="block text-sm font-semibold text-black mb-4">
                🎓 Education Levels <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'ssc', label: 'SSC', icon: '📚', desc: 'Secondary School Certificate' },
                  { name: 'matric', label: 'Matric', icon: '🎒', desc: 'Matriculation' },
                  { name: 'graduate', label: 'Graduate', icon: '🎓', desc: 'Graduation Degree' }
                ].map(edu => (
                  <label key={edu.name} className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                    formData[edu.name] ? 'border-purple-500 bg-purple-100 shadow-sm' : 'border-gray-200 hover:border-purple-300'
                  }`}>
                    <input
                      type="checkbox"
                      name={edu.name}
                      checked={formData[edu.name]}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <div className="ml-3">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{edu.icon}</span>
                        <span className="font-semibold text-black">{edu.label}</span>
                      </div>
                      <p className="text-xs text-black">{edu.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
              {errors.education && <p className="text-red-500 text-sm mt-2 flex items-center"><span className="mr-1">⚠️</span>{errors.education}</p>}
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-black mb-2">
                🏢 Choose Examination Center <span className="text-red-500">*</span>
              </label>
              <select
                name="examinationCenter"
                value={formData.examinationCenter}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-200 bg-white shadow-sm text-black ${
                  errors.examinationCenter ? 'border-red-500 focus:ring-red-200' : 'border-gray-200'
                }`}
              >
                <option value="">Select your preferred examination center</option>
                {examinationCenters.map(center => (
                  <option key={center.id} value={center.id}>📍 {center.name}, {center.city}</option>
                ))}
              </select>
              {errors.examinationCenter && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.examinationCenter}</p>}
            </div>
          </div>
        </div>

        {/* Documents & Payment Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">4</div>
            <div>
              <h3 className="text-2xl font-bold text-black">Documents & Payment</h3>
              <p className="text-black">Upload your photo and complete payment</p>
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <div>
              <label className="block text-sm font-semibold text-black mb-4">
                📷 Upload Photo <span className="text-red-500">*</span>
              </label>
              <div className={`border-3 border-dashed rounded-2xl p-8 text-center transition-all duration-300 hover:border-orange-400 ${
                formData.photo ? 'border-orange-400 bg-orange-100' : 'border-gray-300 hover:bg-orange-50'
              }`}>
                <input
                  type="file"
                  name="photo"
                  onChange={handleInputChange}
                  accept="image/jpeg,image/jpg,image/png"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-600 file:text-white hover:file:bg-orange-700 cursor-pointer file:cursor-pointer file:shadow-md file:transition-all file:duration-200"
                />
                <div className="mt-4">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-black">
                    {formData.photo ? `📁 ${formData.photo.name}` : 'Click to upload or drag and drop'}
                  </p>
                  <p className="text-sm text-black mt-1">PNG, JPG or JPEG • Max 2MB • Passport size recommended</p>
                </div>
              </div>
              {errors.photo && <p className="text-red-500 text-sm mt-2 flex items-center"><span className="mr-1">⚠️</span>{errors.photo}</p>}
              {formData.photo && (
                <div className="mt-6 text-center">
                  <p className="text-sm text-orange-600 font-semibold mb-3">✅ Photo Preview:</p>
                  <div className="inline-block p-2 bg-white rounded-xl shadow-lg border-2 border-orange-200">
                    <img
                      src={URL.createObjectURL(formData.photo)}
                      alt="Photo Preview"
                      className="max-h-48 rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Payment Section */}
            {paymentRequired && (
              <div className="mt-8 bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">💳</span>
                  </div>
                  <h4 className="text-xl font-bold text-black">Payment Required</h4>
                </div>
                <div className="bg-white rounded-xl p-4 border border-yellow-200 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-black font-medium">Application Processing Fee:</span>
                    <span className="text-3xl font-bold text-green-600">₹{paymentAmount}</span>
                  </div>
                </div>
                {!paymentCompleted ? (
                  <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-amber-600 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3"></div>
                        Processing Payment...
                      </div>
                    ) : (
                      <>💳 Pay ₹{paymentAmount} Securely</>
                    )}
                  </button>
                ) : (
                  <div className="bg-green-100 border-2 border-green-300 rounded-xl p-4 text-center">
                    <p className="text-black font-bold text-lg flex items-center justify-center">
                      <span className="mr-2">✅</span>
                      Payment Successful!
                      <span className="ml-2">🎉</span>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-8">
          <button
            onClick={submitForm}
            disabled={loading || (paymentRequired && !paymentCompleted) || !isEmailVerified}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-5 px-8 rounded-2xl text-xl font-bold hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-7 w-7 border-3 border-white border-t-transparent mr-3"></div>
                Submitting Application...
              </div>
            ) : (
              <>🚀 Submit Application</>
            )}
          </button>
          <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-black font-medium flex items-center justify-center">
              <span className="mr-2">ℹ️</span>
              Please review all information before submitting. Once submitted, changes cannot be made.
              <span className="ml-2">📋</span>
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-center border-t border-gray-300">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span className="text-2xl">🏛️</span>
          <p className="text-white font-semibold text-lg">Brilliant Bihar</p>
          <span className="text-2xl">✨</span>
        </div>
        <p className="text-gray-300 text-sm">© 2024 Government of Bihar. All rights reserved.</p>
        <p className="text-gray-400 text-xs mt-1">Secure • Reliable • Trusted</p>
      </div>
    </div>
  );
};