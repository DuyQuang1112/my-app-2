import { FaUniversity } from "react-icons/fa";

const TopUpMethod = () => {
  return (
    <div className="mt-[110px] relative">
      {/* title */}
      <h2 className="text-lg font-semibold mb-2">Top Up Methods</h2>
      {/* bank transfer */}
      <div className="p-4 flex items-center bg-white rounded-2xl shadow-md">
       
        <div className="bg-purple-100 p-3 rounded-full mr-4">
          <FaUniversity className="text-purple-600 w-6 h-6" />
        </div>

        <div>
          <p className="text-gray-800 font-medium">Bank Transfer (BND)</p>
          <p className="text-gray-500 text-sm">**** **** **** 5324</p>
        </div>
      </div>
    </div>
  );
};

export default TopUpMethod;
