import React from "react";

const UploadNotes = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-800">Upload New Notes</h2>
            <div className="bg-white p-8 rounded-lg shadow-md mt-5">
                <form>
                    <div className="mb-6">
                        <label htmlFor="note-title" className="block mb-2 font-medium text-gray-700">
                            Note Title
                        </label>
                        <input
                            type="text"
                            id="note-title"
                            placeholder="e.g., Chapter 5: Wave-Particle Duality"
                            className="w-full p-3 border border-gray-300 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="note-class" className="block mb-2 font-medium text-gray-700">
                            Select Class/Batch
                        </label>
                        <select
                            id="note-class"
                            className="w-full p-3 border border-gray-300 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            <option value="batch-a">Physics 101 - Batch A</option>
                            <option value="batch-b">Physics 101 - Batch B</option>
                            <option value="adv-phy">Advanced Physics 302</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="note-file" className="block mb-2 font-medium text-gray-700">
                            Upload File (PDF, DOCX)
                        </label>
                        <input
                            type="file"
                            id="note-file"
                            accept=".pdf,.docx,.doc"
                            className="w-full text-gray-700 text-sm bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none 
                                   file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold 
                                   file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="py-2 px-5 rounded-md font-medium bg-teal-500 text-white hover:bg-teal-600 transition duration-300"
                    >
                        Upload Note
                    </button>
                </form>
            </div>
        </section>
    );
};

export default UploadNotes;
