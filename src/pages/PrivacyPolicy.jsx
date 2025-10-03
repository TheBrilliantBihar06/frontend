// import React from 'react';
// import { ShieldCheck, FileText } from 'lucide-react';

// // Import your existing Navbar and Footer components
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const PrivacyPolicy = () => {
//   return (
//     <div className="bg-[#5d5d5d] text-slate-300 font-sans">
//       <Navbar />

//       {/* Hero Section */}
//       <header className="relative bg-[#4a4a4a] py-20 sm:py-24 border-b border-gray-600/30">
//         <div className="absolute inset-0 bg-grid-slate-700/[0.05] [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="mx-auto w-fit bg-blue-500/10 p-3 rounded-xl border border-blue-500/20 mb-4">
//             <ShieldCheck className="h-8 w-8 text-blue-400" />
//           </div>
//           <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight">
//             Privacy Policy
//           </h1>
//           <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
//             Your trust and privacy are paramount to us. This policy outlines how we handle your data.
//           </p>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 sm:py-16">
//         <div className="bg-[#4a4a4a] rounded-xl border border-gray-600/30 p-8 md:p-10 shadow-lg prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-slate-100">
          
//           <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-600/50">
//             <h2 className="text-2xl font-semibold !mt-0 !mb-0">Brilliant Bihar Privacy Policy</h2>
//             <p className="text-sm text-slate-400 !mb-0">Last Updated: September 26, 2025</p>
//           </div>
          
//           <p>
//             Brilliant Bihar ("we," "us," or "our") is committed to transforming aspirations into civil services success. This Privacy Policy explains how we collect, use, and protect your information when you interact with our platform. Our commitment to <strong>Integrity</strong>, <strong>transparency</strong>, and <strong>honesty</strong> governs all our interactions, including how we handle your personal data.
//           </p>

//           <h3 id="info-we-collect">1. Information We Collect</h3>
//           <p>We collect information to provide and improve our services, ensuring every aspirant receives an equal opportunity to learn and succeed.</p>
//           <h4>A. Information You Provide to Us</h4>
//           <p>
//             When you interact with our platform, such as through our Online Inquiry Form, we may collect the following information:
//           </p>
//           <ul>
//             <li><strong>Required Information:</strong> Full Name, Email Address, Subject, and your Message.</li>
//             <li><strong>Optional Information:</strong> Phone Number.</li>
//           </ul>
          
//           <h4>B. Information We Collect Automatically</h4>
//           <p>
//             As you use our learning platform, we automatically collect data related to your academic journey to provide a personalized and effective preparation experience. This includes:
//           </p>
//           <ul>
//             <li><strong>Performance Data:</strong> We utilize a sophisticated performance analytics tool to track your progress in mock tests and daily practice quizzes, helping you identify your strengths and weaknesses.</li>
//             <li><strong>Usage Data:</strong> We may collect information on how you interact with our digital platform, whether on a computer or mobile device, to improve user experience and resource accessibility.</li>
//           </ul>

//           <h3 id="how-we-use-info">2. How We Use Your Information</h3>
//           <p>
//             Our primary goal is to empower you with the knowledge, confidence, and strategy needed for success. We use your information to:
//           </p>
//           <ul>
//             <li><strong>Respond to Inquiries:</strong> To answer your questions about our courses, fee structure, demo classes, or provide career guidance.</li>
//             <li><strong>Manage Admissions:</strong> To process your enrollment in our Complete UPSC or BPSC Preparation Courses.</li>
//             <li><strong>Provide Personalized Mentorship:</strong> To connect you with our expert mentors and facilitate one-on-one guidance.</li>
//             <li><strong>Deliver Educational Services:</strong> To provide access to our structured curriculum, live classes, and practice tests.</li>
//             <li><strong>Offer 24/7 Doubt Resolution:</strong> To facilitate our guaranteed doubt resolution service.</li>
//             <li><strong>Track Your Progress:</strong> To power the data-driven analytics tool that helps you strategically optimize your preparation.</li>
//           </ul>

//           <h3 id="how-we-share-info">3. How We Share Your Information</h3>
//           <p>
//             Your trust is paramount. We do not sell or rent your personal information to third parties. Information is shared only in the following limited circumstances:
//           </p>
//           <ul>
//             <li><strong>With Mentors and Faculty:</strong> Your academic progress and inquiries may be shared with our expert faculty and your assigned mentor to provide tailored guidance.</li>
//             <li><strong>Internally:</strong> Information may be used internally by the Brilliant Bihar team to improve our course offerings and support services.</li>
//           </ul>

//           <h3 id="data-security">4. Data Security</h3>
//           <p>
//             In line with our core value of <strong>Integrity</strong>, we are committed to protecting your personal information. We implement appropriate measures to safeguard your data and maintain its confidentiality as part of our mission to provide a secure and trustworthy learning ecosystem.
//           </p>

//           <h3 id="your-rights">5. Your Rights and Choices</h3>
//           <p>
//             We believe in the <strong>Freedom of Inquiry</strong> and transparency. You have the right to inquire about the personal data we hold about you. For any questions or requests regarding your information, please use the contact details provided below.
//           </p>

//           <h3 id="other-policies">6. Other Policies</h3>
//           <p>
//             This Privacy Policy is part of a larger set of legal guidelines. Please also review our <a href="/terms-of-service">Terms of Service</a> and <a href="/cookie-policy">Cookie Policy</a>.
//           </p>

//           <h3 id="changes">7. Changes to This Privacy Policy</h3>
//           <p>
//             We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
//           </p>

//           <h3 id="contact-us">8. Contact Us</h3>
//           <p>
//             If you have any questions or need to make an inquiry, please do not hesitate to reach out.
//           </p>
//           <ul className="!list-none !pl-0">
//             <li><strong>Email:</strong> <a href="mailto:admissions@brilliantbihar.in">admissions@brilliantbihar.in</a></li>
//             <li><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></li>
//             <li><strong>Address:</strong> Boring Road, Patna, Bihar</li>
//           </ul>
//           <p>Our team is available Monday through Saturday, from 9:00 AM to 7:00 PM IST.</p>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default PrivacyPolicy;


import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#5d5d5d] text-slate-300 font-sans">
      <Navbar />

      {/* Hero Section */}
      <header className="relative bg-[#4a4a4a] py-20 sm:py-24 border-b border-gray-600/30">
        <div className="absolute inset-0 bg-grid-slate-700/[0.05] [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mx-auto w-fit bg-blue-500/10 p-3 rounded-xl border border-blue-500/20 mb-4">
            <ShieldCheck className="h-8 w-8 text-blue-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Your trust and privacy are paramount to us. This policy outlines how we handle your data.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 sm:py-16">
        <div className="bg-[#4a4a4a] rounded-xl border border-gray-600/30 p-8 md:p-10 shadow-lg prose prose-invert prose-lg max-w-none
                        prose-headings:font-serif prose-headings:text-white
                        prose-a:text-blue-400 hover:prose-a:text-blue-300
                        prose-strong:text-slate-100
                        prose-li:mb-2
                        prose-p:mb-4
                        prose-h3:mt-6 prose-h3:mb-2
                        prose-h4:mt-4 prose-h4:mb-2
                        ">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:justify-between mb-6 pb-4 border-b border-gray-600/50">
            <h2 className="text-2xl font-semibold !mt-0 !mb-0">Brilliant Bihar Privacy Policy</h2>
            <p className="text-sm text-slate-400 !mb-0 mt-2 md:mt-0">Last Updated: September 26, 2025</p>
          </div>

          {/* Content */}
          <p>
            Brilliant Bihar ("we," "us," or "our") is committed to transforming aspirations into civil services success. This Privacy Policy explains how we collect, use, and protect your information when you interact with our platform. Our commitment to <strong>Integrity</strong>, <strong>transparency</strong>, and <strong>honesty</strong> governs all our interactions, including how we handle your personal data.
          </p>

          <h3 id="info-we-collect">1. Information We Collect</h3>
          <p>We collect information to provide and improve our services, ensuring every aspirant receives an equal opportunity to learn and succeed.</p>
          
          <h4>A. Information You Provide to Us</h4>
          <p>When you interact with our platform, such as through our Online Inquiry Form, we may collect the following information:</p>
          <ul className="list-disc list-inside">
            <li><strong>Required Information:</strong> Full Name, Email Address, Subject, and your Message.</li>
            <li><strong>Optional Information:</strong> Phone Number.</li>
          </ul>
          
          <h4>B. Information We Collect Automatically</h4>
          <p>As you use our learning platform, we automatically collect data related to your academic journey to provide a personalized and effective preparation experience. This includes:</p>
          <ul className="list-disc list-inside">
            <li><strong>Performance Data:</strong> We utilize a sophisticated performance analytics tool to track your progress in mock tests and daily practice quizzes, helping you identify your strengths and weaknesses.</li>
            <li><strong>Usage Data:</strong> We may collect information on how you interact with our digital platform, whether on a computer or mobile device, to improve user experience and resource accessibility.</li>
          </ul>

          <h3 id="how-we-use-info">2. How We Use Your Information</h3>
          <p>Our primary goal is to empower you with the knowledge, confidence, and strategy needed for success. We use your information to:</p>
          <ul className="list-disc list-inside">
            <li><strong>Respond to Inquiries:</strong> To answer your questions about our courses, fee structure, demo classes, or provide career guidance.</li>
            <li><strong>Manage Admissions:</strong> To process your enrollment in our Complete UPSC or BPSC Preparation Courses.</li>
            <li><strong>Provide Personalized Mentorship:</strong> To connect you with our expert mentors and facilitate one-on-one guidance.</li>
            <li><strong>Deliver Educational Services:</strong> To provide access to our structured curriculum, live classes, and practice tests.</li>
            <li><strong>Offer 24/7 Doubt Resolution:</strong> To facilitate our guaranteed doubt resolution service.</li>
            <li><strong>Track Your Progress:</strong> To power the data-driven analytics tool that helps you strategically optimize your preparation.</li>
          </ul>

          <h3 id="how-we-share-info">3. How We Share Your Information</h3>
          <p>Your trust is paramount. We do not sell or rent your personal information to third parties. Information is shared only in the following limited circumstances:</p>
          <ul className="list-disc list-inside">
            <li><strong>With Mentors and Faculty:</strong> Your academic progress and inquiries may be shared with our expert faculty and your assigned mentor to provide tailored guidance.</li>
            <li><strong>Internally:</strong> Information may be used internally by the Brilliant Bihar team to improve our course offerings and support services.</li>
          </ul>

          <h3 id="data-security">4. Data Security</h3>
          <p>In line with our core value of <strong>Integrity</strong>, we are committed to protecting your personal information. We implement appropriate measures to safeguard your data and maintain its confidentiality as part of our mission to provide a secure and trustworthy learning ecosystem.</p>

          <h3 id="your-rights">5. Your Rights and Choices</h3>
          <p>We believe in the <strong>Freedom of Inquiry</strong> and transparency. You have the right to inquire about the personal data we hold about you. For any questions or requests regarding your information, please use the contact details provided below.</p>

          <h3 id="other-policies">6. Other Policies</h3>
          <p>This Privacy Policy is part of a larger set of legal guidelines. Please also review our <a href="/terms-of-service">Terms of Service</a> and <a href="/cookie-policy">Cookie Policy</a>.</p>

          <h3 id="changes">7. Changes to This Privacy Policy</h3>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

          <h3 id="contact-us">8. Contact Us</h3>
          <p>If you have any questions or need to make an inquiry, please do not hesitate to reach out.</p>
          <ul className="list-disc list-inside">
            <li><strong>Email:</strong> <a href="mailto:admissions@brilliantbihar.in">admissions@brilliantbihar.in</a></li>
            <li><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></li>
            <li><strong>Address:</strong> Boring Road, Patna, Bihar</li>
          </ul>
          <p>Our team is available Monday through Saturday, from 9:00 AM to 7:00 PM IST.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
