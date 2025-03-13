import { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const PostJobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen  m-12 w-full">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-2xl w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Post a Job</h1>

        <h2 className="text-xl font-bold mb-2">Post a New Job</h2>
        <p className="text-gray-500 mb-4">Fill in the details below to post your job listing</p>

        <div className="mb-4">
          <label className="block font-semibold text-gray-700">Job Title</label>
          <input
            type="text"
            placeholder="e.g. Senior Web Developer needed for E-commerce Project"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-gray-700">Job Category</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            value={jobCategory}
            onChange={(e) => setJobCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="software">a</option>
            <option value="design">b</option>
            <option value="marketing">c</option>
          </select>
        </div>


        <div className="mb-4">
          <label className="block font-semibold text-gray-700">Job Description</label>
          <textarea
            placeholder="Describe the job requirements, responsibilities, and qualifications..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none h-28 resize-none"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          ></textarea>
        </div>


        <div className="mb-4">
          <label className="block font-semibold text-gray-700">Budget</label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full pl-8 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
        </div>

    
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">Location</label>
          <div className="relative">
            <FiMapPin className="absolute left-3 top-2 text-gray-500" />
            <input
              type="text"
              placeholder="Enter job location"
              className="w-full pl-8 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <button className="w-full bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-300 transition flex items-center justify-center">
          <FaRegPaperPlane className="mr-2" /> Post Job
        </button>
      </div>
    </div>
  );
};

export default PostJobForm;
