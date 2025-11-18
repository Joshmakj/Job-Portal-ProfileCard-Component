import { Pencil, MapPin, Phone, Mail, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function UserProfileCard() {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-sm p-6 flex justify-between gap-4 border border-gray-100">
      

      <div className="flex flex-1 gap-6 items-start">

        <div className="relative flex items-center justify-center">
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center"
            style={{
              background: "conic-gradient(#ff4d4d 0% 40%, #e6e6e6 40% 100%)",
            }}
          >
            <div className="w-24 h-24 rounded-full bg-[#f4f4f9] flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="user"
                className="w-16 h-16 opacity-90 rounded-full"
              />
            </div>
          </div>

      
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] bg-white text-red-500 px-2 py-[1px] rounded-full shadow-sm font-semibold">
            40%
          </div>
        </div>

       
        <div className="w-full">
          <div className="flex items-center gap-2">
            <h2 className="text-[20px] font-semibold text-gray-800">Teamup user</h2>
            <Pencil onClick={() => navigate("/user-form")} size={16}  className="text-gray-500 cursor-pointer" />
          </div>

          <p className="text-[13px] text-gray-500 mt-1">
            Profile last updated – <span className="text-gray-700 font-medium">Today</span>
          </p>

          <div className="w-full h-[1px] bg-gray-200 my-4"></div>

    
          <div className="grid grid-cols-2 gap-y-3 text-[14px] text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Bengaluru, INDIA
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} /> 7894159273
              <span className="text-blue-500 cursor-pointer">Verify</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={16} /> Fresher
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} /> teamupuser3@gmail.com
              <span className="text-blue-500 cursor-pointer">Verify</span>
            </div>

            <div className="flex items-center gap-2 col-span-2">
              <Calendar size={16} /> Add availability to join
            </div>
          </div>
        </div>
      </div>

      <div className="w-72 bg-[#fff3e6] rounded-xl p-6 shadow-sm border border-orange-100 flex flex-col justify-between">
        
        <div className="space-y-4">

  
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-full shadow-sm flex items-center justify-center">
                <Phone size={17} className="text-gray-700" />
              </div>
              <p className="text-sm text-gray-800">Verify mobile number</p>
            </div>
            <span className="text-green-500 text-sm font-semibold">↑ 10%</span>
          </div>


          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-full shadow-sm flex items-center justify-center">
                <Mail size={17} className="text-gray-700" />
              </div>
              <p className="text-sm text-gray-800">Verify email</p>
            </div>
            <span className="text-green-500 text-sm font-semibold">↑ 5%</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-full shadow-sm flex items-center justify-center">
                <Calendar size={17} className="text-gray-700" />
              </div>
              <p className="text-sm text-gray-800">Add resume</p>
            </div>
            <span className="text-green-500 text-sm font-semibold">↑ 10%</span>
          </div>
        </div>

   
        <button onClick={() => navigate("/user-form")} className="mt-6 bg-[#ff5c3b] text-white py-2 w-full rounded-full text-[14px] font-semibold shadow-sm hover:bg-[#ff4b2e] transition" >
          Add 9 missing details
        </button>

      </div>
    </div>
  );
}
