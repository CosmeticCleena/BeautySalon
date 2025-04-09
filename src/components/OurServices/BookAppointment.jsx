import React, { useState } from "react";

const BookAppointment = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedService, setSelectedService] = useState(
    "Beauty care & hair cutting"
  );
  const [selectedArtist, setSelectedArtist] = useState("Dianne Russell");

  const steps = [
    { id: 1, name: "Services" },
    { id: 2, name: "Time" },
    { id: 3, name: "Details" },
    { id: 4, name: "Done" },
  ];
  return (
    <div className="flex gap-20 justify-center my-20">
      <div className="w-full max-w-xl p-6 rounded">
        <h1 className="text-3xl font-light mb-8">Book Appointment</h1>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <span className="text-sm mb-2">{step.name}</span>
                <div className="w-full flex items-center">
                  <div
                    className={`h-0.5 w-full ${
                      step.id === 1 ? "hidden" : "block"
                    } ${
                      activeStep >= step.id ? "bg-amber-400" : "bg-gray-200"
                    }`}
                  ></div>
                  <div
                    className={`rounded-full h-4 w-4 flex items-center justify-center border-2 ${
                      activeStep >= step.id
                        ? "bg-amber-400 border-amber-400"
                        : "bg-white border-gray-200"
                    }`}
                  ></div>
                  <div
                    className={`h-0.5 w-full ${
                      step.id === steps.length ? "hidden" : "block"
                    } ${activeStep > step.id ? "bg-amber-400" : "bg-gray-200"}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">Please Select Services:</h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Services
            </label>
            <div className="relative">
              <select
                className="block w-full p-2.5 border border-gray-300 rounded text-gray-700 appearance-none focus:outline-none focus:ring-1 focus:ring-amber-400 pr-8"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option>Beauty care & hair cutting</option>
                <option>Manicure & Pedicure</option>
                <option>Skin Treatment</option>
                <option>Makeup</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Artist
            </label>
            <div className="relative">
              <select
                className="block w-full p-2.5 border border-gray-300 rounded text-gray-700 appearance-none focus:outline-none focus:ring-1 focus:ring-amber-400 pr-8"
                value={selectedArtist}
                onChange={(e) => setSelectedArtist(e.target.value)}
              >
                <option>Dianne Russell</option>
                <option>Jenny Wilson</option>
                <option>Robert Fox</option>
                <option>Jacob Jones</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-8 text-sm text-gray-600">
            Submitting this form confirms Privacy Agreement.
          </div>

          <div className="flex justify-between gap-4">
            <button className="px-6 py-2 border border-gray-300 rounded focus:outline-none hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button className="px-6 py-2 bg-amber-400 text-white rounded focus:outline-none hover:bg-amber-500 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
      <img src="/img/ourServices/inclusivePackages/Appointment.svg" alt=""  className="w-[400px] h-[550px]"/>
    </div>
  );
};

export default BookAppointment;
