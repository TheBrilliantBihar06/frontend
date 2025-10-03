import React from "react";
import { FileText, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  const terms = [
    {
      title: "Introduction",
      content:
        "Welcome to Brilliant Bihar. By accessing our website and services, you agree to be bound by these Terms & Conditions and our Privacy Policy. Please read them carefully before using our platform.",
    },
    {
      title: "Eligibility",
      content:
        "Our services are intended for students, learners, and users who seek academic and career growth. You must be at least 13 years of age, or the minimum age required in your country, to use our services.",
    },
    {
      title: "Use of Our Services",
      content:
        "You agree to use our platform lawfully and responsibly. You will not engage in any activity that disrupts, damages, interferes with, or gains unauthorized access to our services, servers, or networks.",
    },
    {
      title: "Intellectual Property Rights",
      content:
        "All content, including text, graphics, logos, course materials, and software, is the exclusive property of Brilliant Bihar or its licensors. You may not copy, reproduce, distribute, or create derivative works from our content without express written permission.",
    },
    {
      title: "Limitation of Liability",
      content:
        "While we strive for accuracy, our services and content are provided 'as is' without any warranties. Brilliant Bihar shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our platform.",
    },
    {
      title: "Amendments to Terms",
      content:
        "We reserve the right to modify these Terms & Conditions at any time. We will notify users of any changes by posting the new terms on this page. Your continued use of our services after such changes constitutes your acceptance of the new terms.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes will be subject to the exclusive jurisdiction of the courts in Patna, Bihar.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#5d5d5d] text-gray-300">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl mb-4">
            <FileText className="h-8 w-8 text-indigo-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-lg mt-3">
            Effective Date: September 27, 2025
          </p>
        </div>

        {/* Centered Main Content Document */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#4a4a4a]/70 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-gray-600/40 shadow-xl">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-strong:text-gray-100">
              {terms.map((term, index) => (
                <section
                  key={index}
                  className="pb-8 mb-8 border-b border-gray-600/30 last:border-b-0 last:pb-0 last:mb-0"
                >
                  <h2>{term.title}</h2>
                  <p>{term.content}</p>
                </section>
              ))}

              {/* Contact Section */}
              <section className="pt-4">
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about these Terms & Conditions, please do not hesitate to reach out to us.
                </p>
                <a
                  href="mailto:contact@brilliantbihar.org"
                  className="inline-flex items-center gap-2 no-underline font-semibold text-indigo-400"
                >
                  <Mail size={20} />
                  contact@thebrilliantbihar.com
                </a>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;