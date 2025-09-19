import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = ({ containerVariants, itemVariants }) => {
    const navigate = useNavigate();

    return (
        <motion.section
            className="relative bg-slate-900 text-white overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            {/* Animated background glows */}
            <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-transparent blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 -right-1/4 w-full h-full bg-gradient-to-l from-sky-500/10 via-indigo-500/10 to-transparent blur-3xl opacity-50 animate-pulse [animation-delay:1s]"></div>
            
            <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto bg-slate-800/40 backdrop-blur-lg border border-slate-700/80 rounded-2xl p-8 md:p-12 text-center"
                    variants={itemVariants}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        Ready to Begin Your Journey to Success?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-5xl mx-auto mt-4 mb-8">
                        Join thousands of aspirants who trust our expert faculty and innovative learning platform. Your dream career in civil services is just a click away.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            onClick={() => navigate('/courses')}
                            className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-rose-500/30 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Explore Courses</span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.button>

                        <motion.button
                            className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-transparent border-2 border-slate-500 text-slate-200 font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Phone className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                            <span>Request a Callback</span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CTASection;
