import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const ScheduleClass = () => {
    // Mock data for upcoming classes
    const upcomingClasses = [
        { topic: "Introduction to Quantum Entanglement", date: "2025-09-22", time: "10:00 AM", batch: "Advanced Physics 302" },
        { topic: "Wave-Particle Duality Workshop", date: "2025-09-24", time: "02:00 PM", batch: "Physics 101 - Batch A" },
    ];

    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-800">Schedule a New Class</h2>
            
            {/* Scheduling Form */}
            <div className="bg-white p-8 rounded-lg shadow-md mt-5">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="mb-6">
                            <label htmlFor="class-title" className="block mb-2 font-medium text-gray-700">Class Title/Topic</label>
                            <input type="text" id="class-title" placeholder="e.g., The Photoelectric Effect" className="w-full p-3 border border-gray-300 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="class-batch" className="block mb-2 font-medium text-gray-700">Select Class/Batch</label>
                            <select id="class-batch" className="w-full p-3 border border-gray-300 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
                                <option>Physics 101 - Batch A</option>
                                <option>Physics 101 - Batch B</option>
                                <option>Advanced Physics 302</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="class-date" className="block mb-2 font-medium text-gray-700">Date</label>
                            <input type="date" id="class-date" className="w-full p-3 border border-gray-300 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="class-time" className="block mb-2 font-medium text-gray-700">Time</label>
                            <input type="time" id="class-time" className="w-full p-3 border border-gray-300 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                        </div>
                    </div>
                    <button type="submit" className="py-2 px-6 rounded-md font-medium bg-teal-500 text-white hover:bg-teal-600 transition duration-300">Schedule Class</button>
                </form>
            </div>

            {/* Upcoming Classes List */}
            <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Classes</h3>
                <div className="space-y-4">
                    {upcomingClasses.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                            <div>
                                <p className="font-bold text-gray-800">{item.topic}</p>
                                <p className="text-sm text-gray-500">{item.batch}</p>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center"><Calendar size={16} className="mr-2"/>{item.date}</div>
                                <div className="flex items-center"><Clock size={16} className="mr-2"/>{item.time}</div>
                                <button className="font-semibold text-teal-600 hover:underline">Join</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScheduleClass;