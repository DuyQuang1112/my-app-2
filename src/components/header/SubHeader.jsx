import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEllipsisV } from "react-icons/fa";

const Subheader = ({title}) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex bg-gray-200 justify-between items-center px-6 pt-[3rem] pb-[1rem]">
      
      <button onClick={() => navigate("/")} className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400">
        <FaArrowLeft className="w-5 h-5" />
      </button>

      <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

      <button className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400">
        <FaEllipsisV className="w-5 h-5" />
      </button>

    </div>
  );
};

export default Subheader;