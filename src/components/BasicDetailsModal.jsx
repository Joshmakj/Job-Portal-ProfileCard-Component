import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BasicDetailsModal({ onClose, onSave }) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/user-info");
    onClose();
  };

  const handleSave = () => {
    onSave();
    navigate("/user-info");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-4 z-50">
      <div
        className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8 relative overflow-y-auto max-h-[90vh]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} >
       
        <style>
          {`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
       
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={22} />
        </button>

        <h2 className="text-[20px] font-semibold text-gray-900 mb-6">
          Basic details
        </h2>

       
        <label className="text-sm font-medium text-gray-700 ">Name <span className="text-red">*</span></label>
        <input
          type="text"
          defaultValue="Teamup user"
          className="w-full mt-1 mb-4 px-4 text-gray-700 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />

       
        <p className="text-sm text-gray-500 mb-6">
          <span className="font-medium text-gray-700">
            BCA at Gokc
            <br />
          </span>
          To edit go to education section.
        </p>

        
        <p className="font-medium text-gray-700">Work status</p>
        <p className="text-sm text-gray-500 mb-2">
          We will personalise your Naukri experience based on this
        </p>
        <div className="flex gap-8 mb-6 text-sm  text-gray-800">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="work" defaultChecked /> Fresher
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="work" /> Experienced
          </label>
        </div>

      
        <p className="font-medium text-gray-700">Current location <span className="text-red">*</span></p>
        <p className="text-sm text-gray-500 mb-2">
          This helps us match you to relevant jobs
        </p>
        <div className="flex gap-8 mb-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer  text-gray-800">
            <input type="radio" name="location" defaultChecked /> India
          </label>
          <label className="flex items-center gap-2 cursor-pointer  text-gray-800">
            <input type="radio" name="location" /> Outside India
          </label>
        </div>

        <input
          type="text"
          defaultValue="Bengaluru"
          className="w-48 px-4 py-2 border text-gray-700 border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-blue-500" />

     
        <p className="font-medium text-gray-700">Mobile number <span className="text-red">*</span></p>
        <p className="text-sm text-gray-500 mb-1 ">
          Recruiters will contact you on this number
        </p>
        <p className="text-sm text-gray-500 mb-1">
          7894195273{" "}
          <span className="text-blue-500 font-medium cursor-pointer">
            Change Mobile Number
          </span>
        </p>

    
        <p className="font-medium text-gray-700 mt-4">Email address <span className="text-red">*</span></p>
        <p className="text-sm text-gray-500 mb-1">
          Recruiters will email you on this email
        </p>
        <p className="text-sm text-gray-500 mb-4">
          teamupuser36@gmail.com{" "}
          <span className="text-blue-500 cursor-pointer font-medium">Change Email</span>
        </p>

 
        <p className="font-medium text-gray-700">Availability to join</p>
        <p className="text-sm text-gray-500 mb-3">
          Lets recruiters know your availability to join
        </p>

        <div className="flex flex-wrap gap-2 mb-10 font-medium">
          {[
            "15 Days or less",
            "1 Month",
            "2 Months",
            "3 Months",
            "More than 3 Months",
          ].map((v) => (
            <button
              key={v}
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-sm hover:border-blue-500 hover:text-blue-600"
            >
              {v}
            </button>
          ))}
        </div>

      
        <div className="flex justify-end gap-6 text-sm">
          <button
            onClick={handleClose}
            className="text-blue-600 fond-bold hover:text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
