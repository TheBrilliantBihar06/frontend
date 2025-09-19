import React from "react";

const Assignments = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-800">
        Create & Manage Assignments
      </h2>
      <div className="bg-white p-8 rounded-lg shadow-md mt-5">
        <form>
          <div className="mb-6">
            <label
              htmlFor="assignment-title"
              className="block mb-2 font-medium text-gray-700"
            >
              Assignment Title
            </label>
            <input
              type="text"
              id="assignment-title"
              placeholder="e.g., Lab Report 3: The Photoelectric Effect"
              className="w-full p-3 border border-gray-300 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="assignment-class"
              className="block mb-2 font-medium text-gray-700"
            >
              Assign to Class/Batch
            </label>
            <select
              id="assignment-class"
              className="w-full p-3 border border-gray-300 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="batch-a">Physics 101 - Batch A</option>
              <option value="batch-b">Physics 101 - Batch B</option>
              <option value="all">All Batches</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="due-date"
              className="block mb-2 font-medium text-gray-700"
            >
              Due Date
            </label>
            <input
              type="date"
              id="due-date"
              className="w-full p-3 border border-gray-300 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="assignment-instructions"
              className="block mb-2 font-medium text-gray-700"
            >
              Instructions
            </label>
            <textarea
              id="assignment-instructions"
              rows="5"
              placeholder="Provide clear instructions for the students..."
              className="w-full p-3 border border-gray-300 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-2 px-5 rounded-md font-medium bg-teal-500 text-white hover:bg-teal-600 transition duration-300"
          >
            Create Assignment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Assignments;
