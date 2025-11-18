import { useNavigate } from "react-router-dom";
function ProfileCard({ name, title, bio, skills = [] }) {
  const navigate = useNavigate();

  return (
    <div className="bg-darkPurple backdrop-blur-md text-ivory p-6 sm:p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp max-w-sm w-full">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="mt-2 text-md text-ivory">{title}</p>
      <hr className="my-4 border-ivory" />
      <p className="text-sm sm:text-base leading-relaxed">{bio}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <span
              key={index}
              className="bg-ivory text-darkPurple border border-darkPurple/30 px-3 py-1 rounded-full text-xs sm:text-sm transition-all duration-200 hover:bg-darkPurple hover:text-ivory" >
              {skill}
            </span>
          ))
        ) : (
          <p className="text-sm text-gray-400">No skills added</p>
        )}
      </div>
      <button
        onClick={() => navigate("/user-info")}
        className="mt-6 bg-ivory text-darkPurple px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-darkPurple hover:text-ivory hover:shadow-lg hover:scale-105"
      >
        View Profile
      </button>
    </div>
  );
}

export default ProfileCard;
