import Header from "../components/header/Header";
import NavigationBar from "../components/common/NavigationBar";

const Profile = () => {
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="absolute top-0 left-0 w-full h-[35%] bg-gray-200"></div>
      <Header />
      <div className="relative" ><h1>This is profile page</h1></div>
      <NavigationBar />
    </div>
  );
};
export default Profile;
