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
    <div className="min-h-screen font-sans p-4 sm:p-6 lg:p-8">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-400">Brilliant Bihar</h1>
          <p className="text-lg text-gray-600">Online Application Form</p>
        </header>
        <Form />
      </div>
      <Footer />
    </div>
  );
}

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationId, setApplicationId] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    category: '',
    gender: '',
    phone: '',
    email: '',
    aadhaar: '',
    pan: '',
    address: '',
    tenthSchool: '',
    tenthPercentage: '',
    tenthYear: '',
    twelfthSchool: '',
    twelfthPercentage: '',
    twelfthYear: '',
    diplomaCourse: '',
    diplomaCollege: '',
    diplomaPercentage: '',
    diplomaYear: '',
    languages: [],
    examinationCenter: '',
    photo: null,
    govtId: null,
    transactionId: '',
    paymentMobile: ''
  });

  const [paymentRequired, setPaymentRequired] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [errors, setErrors] = useState({});

  const languages = ['English', 'Hindi', 'Bengali', 'Tamil', 'Telugu', 'Marathi', 'Gujarati', 'Kannada', 'Malayalam', 'Punjabi'];
  
  const examinationCenters = [
    { id: 'PAT001', name: 'Patna Center 1', city: 'Patna' },
    { id: 'GAY001', name: 'Gaya Center 1', city: 'Gaya' },
    { id: 'BHG001', name: 'Bhagalpur Center 1', city: 'Bhagalpur' },
    { id: 'MUZ001', name: 'Muzaffarpur Center 1', city: 'Muzaffarpur' },
    { id: 'DAR001', name: 'Darbhanga Center 1', city: 'Darbhanga' }
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
    
    if (type === 'checkbox' && name === 'languages') {
      setFormData(prev => ({
        ...prev,
        languages: checked 
          ? [...prev.languages, value]
          : prev.languages.filter(lang => lang !== value)
      }));
    } else if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      if (['fullName', 'fatherName', 'motherName'].includes(name)) {
        if (isOnlyLetters(value)) {
          setFormData(prev => ({
            ...prev,
            [name]: value
          }));
        }
      } else if (['phone', 'aadhaar', 'tenthPercentage', 'tenthYear', 'twelfthPercentage', 'twelfthYear', 'diplomaPercentage', 'diplomaYear'].includes(name)) {
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

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.fatherName.trim()) newErrors.fatherName = "Father's name is required";
      if (!formData.motherName.trim()) newErrors.motherName = "Mother's name is required";
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.category) newErrors.category = 'Category is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
    } else if (step === 2) {
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Enter valid 10-digit phone number';
      
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter valid email address';
      
      if (!formData.aadhaar.trim()) newErrors.aadhaar = 'Aadhaar number is required';
      else if (!/^[0-9]{12}$/.test(formData.aadhaar)) newErrors.aadhaar = 'Enter valid 12-digit Aadhaar number';
      
      if (!formData.pan.trim()) newErrors.pan = 'PAN number is required';
      else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) newErrors.pan = 'Enter valid PAN number (e.g., ABCDE1234F)';
      
      if (!formData.address.trim()) newErrors.address = 'Address is required';
    } else if (step === 3) {
      if (!formData.examinationCenter) newErrors.examinationCenter = 'Examination center is required';
    } else if (step === 4) {
      if (!formData.photo) newErrors.photo = 'Photo is required';
      if (!formData.govtId) newErrors.govtId = 'Government ID proof is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const goToStep = (step) => {
    if (step < currentStep || validateStep(currentStep)) {
      setCurrentStep(step);
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
    if (!validateStep(4)) return;

    if (paymentRequired && !paymentCompleted) {
      alert("Please complete the payment first.");
      return;
    }

    setLoading(true);

    try {
      const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL || "https://api.cloudinary.com/v1_1/dyvr0r02e/upload";
      const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET || "Registration";

      console.log('Environment Variables:', { CLOUDINARY_URL, UPLOAD_PRESET });

      const uploadToCloudinary = async (file, fileType) => {
        if (!file) {
          console.error(`${fileType} is null`);
          return "";
        }
        console.log(`Uploading ${fileType}:`, file.name, `Size: ${file.size} bytes`);
        const maxSize = fileType === "photo" ? 2 * 1024 * 1024 : 5 * 1024 * 1024;
        if (file.size > maxSize) {
          throw new Error(`${fileType === "photo" ? "Photo" : "Government ID"} exceeds size limit of ${fileType === "photo" ? "2MB" : "5MB"}`);
        }
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", UPLOAD_PRESET);
        data.append("resource_type", "auto");
        data.append("folder", fileType === "photo" ? "brilliant_bihar/registration/photos" : "brilliant_bihar/registration/docs");

        try {
          const res = await axios.post(CLOUDINARY_URL, data, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          console.log(`${fileType} uploaded to folder ${fileType === "photo" ? "brilliant_bihar/registration/photos" : "brilliant_bihar/registration/docs"}:`, {
            secure_url: res.data.secure_url,
            public_id: res.data.public_id,
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
      const govtIdUrl = await uploadToCloudinary(formData.govtId, "govtId").catch((error) => {
        throw new Error(`Government ID upload failed: ${error.message}`);
      });

      console.log('Submitting form data to backend...');
      const formDataToSend = {
        ...formData,
        photo: photoUrl,
        govtId: govtIdUrl,
        applicationId,
        paymentAmount: paymentRequired ? paymentAmount : 0,
      };

      console.log('formDataToSend:', formDataToSend);

      const response = await axios.post("http://localhost:5000/api/application/submit", formDataToSend);
      setLoading(false);
      alert(response.data.message);
      setCurrentStep(5);
    } catch (error) {
      setLoading(false);
      console.error("Submission error:", error.response?.data || error.message);
      alert(error.message || "Failed to submit application. Try again.");
    }
  };

  const renderProgressBar = () => {
    const steps = ['Personal', 'Contact', 'Education', 'Documents', 'Confirm'];
    return (
      <div className="bg-white p-4 sm:p-6 rounded-t-lg shadow-md">
        <div className="relative flex justify-between items-center mb-2">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
          
          {steps.map((label, index) => {
            const step = index + 1;
            return (
              <div 
                key={step}
                className="relative z-10 flex flex-col items-center"
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold cursor-pointer transition-all duration-300 ${
                    step < currentStep 
                    ? 'bg-green-500 text-white' 
                    : step === currentStep 
                    ? 'bg-green-600 text-white scale-110 shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                  }`}
                  onClick={() => goToStep(step)}
                >
                  {step < currentStep ? '✓' : step}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between text-xs sm:text-sm font-medium text-center">
          {steps.map((label, index) => (
            <span 
              key={label}
              className={`w-1/5 px-1 ${currentStep >= index + 1 ? 'text-green-600' : 'text-gray-400'}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Personal Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Only letters allowed"
            className={`w-full px-4 py-3 bg-white border-2 rounded-lg transition-colors text-gray-800 ${
              errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-green-500 focus:ring-0'
            }`}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Father's Name *</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleInputChange}
            placeholder="Only letters allowed"
            className={`w-full px-4 py-3 bg-white border-2 rounded-lg transition-colors text-gray-800 ${
              errors.fatherName ? 'border-red-500' : 'border-gray-200 focus:border-green-500 focus:ring-0'
            }`}
          />
          {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Mother's Name *</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleInputChange}
            placeholder="Only letters allowed"
            className={`w-full px-4 py-3 bg-white border-2 rounded-lg transition-colors text-gray-800 ${
              errors.motherName ? 'border-red-500' : 'border-gray-200 focus:border-green-500 focus:ring-0'
            }`}
          />
          {errors.motherName && <p className="text-red-500 text-sm mt-1">{errors.motherName}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-white border-2 rounded-lg transition-colors text-gray-800 ${
              errors.dateOfBirth ? 'border-red-500' : 'border-gray-200 focus:border-green-500 focus:ring-0'
            }`}
          />
          {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-white border-2 rounded-lg transition-colors text-gray-800 ${
              errors.category ? 'border-red-500' : 'border-gray-200 focus:border-green-500 focus:ring-0'
            }`}
          >
            <option value="">Select Category</option>
            <option value="general">General</option>
            <option value="obc">OBC</option>
            <option value="sc_st">SC/ST</option>
            <option value="other">Other</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Gender *</label>
          <div className="flex gap-4 mt-3">
            {['male', 'female', 'other'].map(gender => (
              <label key={gender} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                />
                <span className="ml-2 capitalize text-gray-800">{gender}</span>
              </label>
            ))}
          </div>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={nextStep}
          className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md"
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Contact Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="10-digit mobile number"
            maxLength="10"
            className={`w-full px-4 py-3 bg-white border-2 rounded-lg transition-colors text-gray-800 ${
              errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-green-500 focus:ring-0'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email ID *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-white border-2 rounded-lg transition-colors text-gray-800 ${
              errors.email ? 'border-red-500' : 'border-gray-200 focus:border-green-500 focus:ring-0'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Aadhaar Number *</label>
          <input
            type="text"
            name="aadhaar"
            value={formData.aadhaar}
            onChange={handleInputChange}
            placeholder="123456789012"
            maxLength="12"
            className={`w-full px-4 py-3 bg-white border-2 rounded-lg transition-colors text-gray-800 ${
              errors.aadhaar ? 'border-red-500' : 'border-gray-200 focus:border-green-500 focus:ring-0'
            }`}
          />
          {errors.aadhaar && <p className="text-red-500 text-sm mt-1">{errors.aadhaar}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">PAN Number *</label>
          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={(e) => {
              const value = e.target.value.toUpperCase();
              setFormData(prev => ({ ...prev, pan: value }));
              if (errors.pan) {
                setErrors(prev => ({ ...prev, pan: '' }));
              }
            }}
            placeholder="ABCDE1234F"
            maxLength="10"
            className={`w-full px-4 py-3 bg-white border-2 rounded-lg transition-colors text-gray-800 ${
              errors.pan ? 'border-red-500' : 'border-gray-200 focus:border-green-500 focus:ring-0'
            }`}
          />
          {errors.pan && <p className="text-red-500 text-sm mt-1">{errors.pan}</p>}
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          rows="4"
          className={`w-full px-4 py-3 bg-white border-2 rounded-lg transition-colors resize-none text-gray-800 ${
            errors.address ? 'border-red-500' : 'border-gray-200 focus:border-green-500 focus:ring-0'
          }`}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold shadow-md"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md"
        >
          Next
        </button>
      </div>
    </div>
  );
  
  const renderStep3 = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Educational Details</h2>
      
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">10th Standard</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="tenthSchool" value={formData.tenthSchool} onChange={handleInputChange} placeholder="School/Board" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 text-gray-800" />
          <input type="text" name="tenthPercentage" value={formData.tenthPercentage} onChange={handleInputChange} placeholder="Percentage" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 text-gray-800" />
          <input type="text" name="tenthYear" value={formData.tenthYear} onChange={handleInputChange} placeholder="Passing Year" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 text-gray-800" />
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">12th Standard</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="twelfthSchool" value={formData.twelfthSchool} onChange={handleInputChange} placeholder="School/Board" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 text-gray-800" />
          <input type="text" name="twelfthPercentage" value={formData.twelfthPercentage} onChange={handleInputChange} placeholder="Percentage" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 text-gray-800" />
          <input type="text" name="twelfthYear" value={formData.twelfthYear} onChange={handleInputChange} placeholder="Passing Year" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 text-gray-800" />
        </div>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Diploma/UG (Optional)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input name="diplomaCourse" value={formData.diplomaCourse} onChange={handleInputChange} placeholder="Course" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 text-gray-800" />
          <input name="diplomaCollege" value={formData.diplomaCollege} onChange={handleInputChange} placeholder="College/University" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 text-gray-800" />
          <input type="text" name="diplomaPercentage" value={formData.diplomaPercentage} onChange={handleInputChange} placeholder="Percentage" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 text-gray-800" />
          <input type="text" name="diplomaYear" value={formData.diplomaYear} onChange={handleInputChange} placeholder="Passing Year" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 text-gray-800" />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">Languages Known</label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {languages.map(language => (
            <label key={language} className="flex items-center space-x-2 cursor-pointer p-2 border rounded-lg hover:bg-gray-50">
              <input type="checkbox" name="languages" value={language} checked={formData.languages.includes(language)} onChange={handleInputChange} className="text-green-600 focus:ring-green-500" />
              <span className="text-sm text-gray-800">{language}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Choose Examination Center *</label>
        <select
          name="examinationCenter"
          value={formData.examinationCenter}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-white border-2 rounded-lg transition-colors text-gray-800 ${
            errors.examinationCenter ? 'border-red-500' : 'border-gray-200 focus:border-green-500 focus:ring-0'
          }`}
        >
          <option value="">Select a Center</option>
          {examinationCenters.map(center => (
            <option key={center.id} value={center.id}>{center.name}, {center.city}</option>
          ))}
        </select>
        {errors.examinationCenter && <p className="text-red-500 text-sm mt-1">{errors.examinationCenter}</p>}
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold shadow-md">Previous</button>
        <button onClick={nextStep} className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md">Next</button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Documents & Payment</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Photo *</label>
          <input type="file" name="photo" onChange={handleInputChange} accept="image/jpeg,image/png" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" required />
          <p className="text-xs text-gray-500 mt-1">PNG or JPG. Max 2MB.</p>
          {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo}</p>}
          {formData.photo && <img src={URL.createObjectURL(formData.photo)} alt="Photo Preview" className="mt-4 rounded-lg shadow-md max-h-40" />}
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Government ID *</label>
          <input type="file" name="govtId" onChange={handleInputChange} accept="image/jpeg,image/png,application/pdf" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" required />
          <p className="text-xs text-gray-500 mt-1">Aadhaar, PAN, Voter ID. PDF, PNG, JPG. Max 5MB.</p>
          {errors.govtId && <p className="text-red-500 text-sm mt-1">{errors.govtId}</p>}
          {formData.govtId && !formData.govtId.type.includes('pdf') && <img src={URL.createObjectURL(formData.govtId)} alt="ID Preview" className="mt-4 rounded-lg shadow-md max-h-40" />}
          {formData.govtId && formData.govtId.type.includes('pdf') && <p className="mt-2 text-sm text-green-700 font-medium">PDF file selected: {formData.govtId.name}</p>}
        </div>
      </div>

      {paymentRequired && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-gray-800">Payment Required</h3>
          <p className="text-gray-700">Application fee: <span className="font-bold">₹{paymentAmount}</span></p>
          {!paymentCompleted ? (
            <button onClick={handlePayment} disabled={loading} className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-semibold disabled:bg-yellow-300">
              {loading ? 'Processing...' : `Pay ₹${paymentAmount} Now`}
            </button>
          ) : (
            <p className="mt-2 text-green-600 font-bold">✓ Payment Successful!</p>
          )}
        </div>
      )}

      <div className="flex justify-between mt-8">
        <button onClick={prevStep} className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold shadow-md">Previous</button>
        <button onClick={submitForm} disabled={loading || (paymentRequired && !paymentCompleted)} className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md disabled:bg-gray-400">
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="p-8 text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          width="48"
          height="48"
          className="text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
      <p className="text-gray-600 mb-4">
        Your application ID is <span className="font-semibold text-gray-900 bg-gray-200 px-2 py-1 rounded">{applicationId}</span>.
      </p>
      <p className="text-gray-600">We have sent a confirmation to your email address. Please save your application ID for future reference.</p>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-xl relative overflow-hidden">
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
        </div>
      )}
      <div className="p-4 bg-gray-50 border-b">
        <p className="text-sm text-gray-700 font-semibold">Application ID: <span className="text-green-600">{applicationId}</span></p>
      </div>
      {renderProgressBar()}
      <div className="bg-gray-50 p-2 sm:p-6">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
        {currentStep === 5 && renderConfirmation()}
      </div>
    </div>
  );
};