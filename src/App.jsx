import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import UserInfoCard from "./components/UserInfoCard";
import BasicDetailsModal from "./components/BasicDetailsModal"; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-darkPurple text-ivory p-8">
        <nav className="flex gap-6 mb-10 text-ivory text-lg">
          <Link to="/profile" className="hover:underline">Profile Card</Link>
          <Link to="/user-info" className="hover:underline">User Info</Link>
           <Link to="/user-form" className="hover:underline">User form</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1 className="text-3xl">Welcome to the Job Portal UI</h1>} />
          <Route
            path="/profile"
            element={
              <ProfileCard
                name="Riya Francis"
                title="Junior Python Developer"
                bio="Backend developer with 5 years experience on Python full stack development."
                skills={["React", "Tailwind", "Django"]}
              />
            }
          />
          <Route path="/user-info" element={<UserInfoCard />} />
          <Route 
            path="/user-form" 
            element={
              <BasicDetailsModal 
                onClose={() => {}} 
                onSave={() => console.log("Saved!")} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
