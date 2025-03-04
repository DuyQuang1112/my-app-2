import { useLocation, useNavigate } from "react-router-dom";
import { IoIosStats } from "react-icons/io";
import { FaHome, FaPlusCircle, FaUser } from "react-icons/fa";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome className="w-6 h-6" /> },
    { name: "Statistics", path: "/statistics", icon: <IoIosStats className="w-6 h-6" /> },
    { name: "TopUp", path: "/topup", icon: <FaPlusCircle className="w-6 h-6" /> },
    { name: "Profile", path: "/profile", icon: <FaUser className="w-6 h-6" /> },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[80%] bg-black p-2 rounded-[30px] flex justify-around items-center">
      {menuItems.map((item) => (
        <button
          key={item.path} 
          className={`h-[50px] w-[100px] flex flex-row items-center rounded-[30px] pr-5 pl-5 transition ${location.pathname === item.path ? "text-black bg-gray-300" : "text-white"
            }`}
          onClick={() => navigate(item.path)}
          aria-label={item.name}
        >
          {item.icon}
          {location.pathname === item.path && <span className="text-sm pl-2">{item.name}</span>}
        </button>
      ))}
    </div>
  );
};

export default NavigationBar;
