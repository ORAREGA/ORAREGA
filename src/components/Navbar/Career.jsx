import React from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { selectJob, clearSelectedJob } from '../../Redux/Featuers/jobSlice.js'; 

const jobData = [
  {
    title: ".NET Developer",
    position: 1,
    postedOn: "16/10/2024",
    experience: "2 years to 3 years",
    location: "HO Hinjewadi, Pune",
    description:
      "Design, develop, and maintain .NET applications using SQL and API development. Collaborate with cross-functional teams to deliver high-quality projects.",
  },
  {
    title: ".NET Developer",
    position: 1,
    postedOn: "16/10/2024",
    experience: "1 year to 2 years",
    location: "HO Hinjewadi, Pune",
    description:
      "Design, develop, and maintain .NET applications using SQL and API dev  elopment. Collaborate with cross-functional teams to deliver high-quality projects.",
  },
  {
    title: "Logistic Executive",
    position: 1,
    postedOn: "19/08/2024",
    experience: "6 Months to 2 Years",
    location: "Pune, Mumbai",
    description: "Excel Knowledge, Hardware Knowledge",
  },
  {
    title: "Back Office Executive",
    position: 3,
    postedOn: "12/06/2024",
    experience: "6 Months to 2 Years",
    location: "Thane, Sakinaka, Vashi",
    description: "MS Excel & Computer Knowledge",
  },
  {
    title: "Laptop Repair Technician",
    position: 4,
    postedOn: "08/06/2024",
    experience: "1+ Year",
    location: "Sakinaka, Lamington, Hyderabad",
    description: "Computer Repair, IT Hardware",
  },
  {
    title: "Printer Repair Technician",
    position: 5,
    postedOn: "14/05/2024",
    experience: "Fresher - 1 Year",
    location: "Secundarabad, Sakinaka, Vashi, Goregaon",
    description: "Printer Technician, Hardware Technician",
  },
];

const Careers = () => {
  const selectedJob = useSelector((state) => state.jobs.selectedJob);
  const dispatch = useDispatch();

  const handleApplyClick = (job) => {
    dispatch(selectJob(job));
  };

  const handleCloseForm = () => {
    dispatch(clearSelectedJob());
  };

  return (
    <div className="p-6 max-w-7xl mx-auto mt-24 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-Second to-Third text-transparent bg-clip-text mb-4">
          Careers at Orarega
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Orarega provides reliable and affordable IT repair services. We’re
          looking for passionate individuals to join our team and help us
          deliver excellence.
        </p>
      </motion.div>

      {/* Why Join Us */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 rounded-lg p-6 mb-10 shadow-md"
      >
        <h2 className="text-2xl font-semibold text-Third mb-3">
          Why should you join Orarega
        </h2>
        <p className="text-gray-700">
          We’re building a workplace with collaboration, integrity, and
          innovation at its heart. If you’re up for challenges and growth,
          Orarega is the place for you.
        </p>
      </motion.div>

      {/* Job List */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-Third mb-6">Open Positions</h3>
        <div className="grid gap-6">
          {jobData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <h4 className="text-xl font-bold text-Third">{job.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{job.location}</p>
              <p className="text-gray-600 mb-1">
                <strong>Experience:</strong> {job.experience}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Positions:</strong> {job.position}
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Posted On:</strong> {job.postedOn}
              </p>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <button
                onClick={() => handleApplyClick(job)}
                className="mt-2 px-4 py-2 bg-gradient-to-r from-Second to-Third text-white rounded hover:opacity-90 transition"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-40 flex justify-center items-center z-50 overflow-y-auto p-4">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl"
              aria-label="Close form"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-Third mb-4">
              Apply for {selectedJob.title}
            </h2>

            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              action={`mailto:hr@orarga.com?subject=Job Application for ${selectedJob.title}`}
              method="POST"
            >
              {/* Form Fields */}
              {[
                { label: "Full Name", type: "text" },
                { label: "Email", type: "email" },
                { label: "Phone Number", type: "tel" },
                {
                  label: "Total Experience (in Years)",
                  type: "text",
                  placeholder: "e.g., 2 Years",
                },
                {
                  label: "Relevant Experience",
                  type: "text",
                  placeholder: "e.g., 1.5 Years",
                },
                { label: "Current Salary", type: "text" },
                { label: "Expected Salary", type: "text" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block mb-1 font-semibold">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder || ""}
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-Third focus:outline-none"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="block mb-1 font-semibold">Gender</label>
                <select
                  className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-Third focus:outline-none"
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-semibold">Notice Period</label>
                <select
                  className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-Third focus:outline-none"
                  required
                >
                  <option value="">Select Notice Period</option>
                  <option>Immediate</option>
                  <option>15 Days</option>
                  <option>1 Month</option>
                  <option>2 Months</option>
                  <option>3 Months</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 font-semibold">Resume</label>
                <input
                  type="file"
                  className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-Third focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full py-2 bg-gradient-to-r from-Second to-Third text-white rounded hover:opacity-90 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
