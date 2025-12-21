import React from "react";
import { Link } from "react-router";

const ContractPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tuition Contract</h1>
        <p className="text-gray-600 mb-6">
          This agreement outlines the terms and conditions between the student and the tutor.
        </p>

        {/* Contract Details */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Parties Involved</h2>
          <div className="text-gray-600">
            <p><span className="font-medium">Student:</span> John Doe (john@example.com)</p>
            <p><span className="font-medium">Tutor:</span> Jane Smith (jane@example.com)</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Tuition Details</h2>
          <div className="text-gray-600 space-y-1">
            <p><span className="font-medium">Subject:</span> Mathematics</p>
            <p><span className="font-medium">Mode:</span> Online / In-person</p>
            <p><span className="font-medium">Duration:</span> 3 months, 2 classes per week</p>
            <p><span className="font-medium">Fee:</span> 15,000 BDT</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Terms & Conditions</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Payment must be completed before the first class.</li>
            <li>Classes will be rescheduled only if notified 24 hours in advance.</li>
            <li>All learning materials are provided by the tutor.</li>
            <li>Any misconduct may result in immediate termination of the contract.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Signatures</h2>
          <div className="grid grid-cols-2 gap-8 mt-4">
            <div className="border-t border-gray-300 pt-2 text-center">
              <p className="text-gray-700">Student Signature</p>
            </div>
            <div className="border-t border-gray-300 pt-2 text-center">
              <p className="text-gray-700">Tutor Signature</p>
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className="flex justify-end mt-6 gap-4">
          <button className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-lg text-gray-800 font-semibold">
            Cancel
          </button>
         <Link
  to="/register"
  className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white font-semibold inline-block text-center"
>
  Accept & Sign
</Link>
         
        </div>
      </div>
    </div>
  );
};

export default ContractPage;
