import ProfileCard from "./components/ProfileCard";
function App() {
  return (
   <div className="min-h-screen bg-darkPurple text-ivory flex items-center justify-center px-4">
      <ProfileCard
        name="Riya Francis"
        title="Junior Python Developer"
        bio="Backend developer with 5 years experience on Python full stack development."
        skills={["React", "Tailwind", "Django"]}
      />
    </div>
  );
}

export default App;
