import React from 'react';
import { Mic, Video, PhoneOff, Users } from 'lucide-react';

const TakeClass = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-800">Live Class Session</h2>
            <p className="text-gray-600 mt-1">Topic: Introduction to Quantum Entanglement</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
                {/* Main Video Area */}
                <div className="lg:col-span-2 bg-gray-900 rounded-lg shadow-lg flex flex-col justify-between p-4 min-h-[480px]">
                    <div className="flex-grow flex items-center justify-center">
                        <p className="text-gray-400">Your camera feed would appear here.</p>
                    </div>
                    {/* Controls */}
                    <div className="flex justify-center items-center space-x-4 p-4 bg-black bg-opacity-30 rounded-lg">
                        <button className="p-3 bg-gray-600 text-white rounded-full hover:bg-gray-500 transition-colors"><Mic size={24} /></button>
                        <button className="p-3 bg-gray-600 text-white rounded-full hover:bg-gray-500 transition-colors"><Video size={24} /></button>
                        <button className="p-3 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors"><PhoneOff size={24} /></button>
                    </div>
                </div>

                {/* Participants & Chat */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                    <h3 className="flex items-center text-lg font-bold text-gray-800 mb-4"><Users size={20} className="mr-2"/> Participants (22)</h3>
                    <ul className="space-y-2 overflow-y-auto max-h-48 mb-6">
                        <li className="text-gray-700">Anjali Sharma</li>
                        <li className="text-gray-700">Rohan Verma</li>
                        <li className="text-gray-700">Priya Singh</li>
                        <li className="text-gray-700">Amit Kumar</li>
                         {/* ... more participants */}
                    </ul>
                    <div className="border-t pt-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Live Chat</h3>
                        <div className="flex-grow space-y-2 text-sm text-gray-600">
                             <p><strong>Anjali:</strong> Sir, what is spooky action at a distance?</p>
                             <p><strong>Rohan:</strong> Can we use this for communication?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TakeClass;