// const BalanceSection = () => {
//     return (
//       <div className="mt-6 w-[376px] h-[297px] relative">
//         <div className="w-[376px] h-[297px] left-0 top-0 absolute bg-white rounded-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
//         <div className="left-[16px] top-[159px] absolute text-black text-[15px] ">**** **** **** 1479</div>
//         <div className="left-[281px] top-[130px] absolute text-black text-[15px] ">Neo Points</div>
//         <div className="left-[283px] top-[163px] absolute text-black text-[15px] ">320 Points</div>
//         <div className="left-[16px] top-[34px] absolute text-black text-xs ">NeoCashManBalance</div>
//         <div className="left-[14px] top-[49px] absolute text-black text-4xl ">$1459.70</div>
//         <div className="left-[16px] top-[135px] absolute text-black text-[15px] ">NeoPayNumber</div>
//         <img className="w-[26px] h-6 left-[158px] top-[154px] absolute opacity-50" src="https://placehold.co/26x24" />
//         <div data-svg-wrapper className="left-[16px] top-[207.50px] absolute">
//         <svg width="340" height="1" viewBox="0 0 340 1" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path opacity="0.5" d="M-0.0030098 0.499908L339.5 0.499939" stroke="black"/>
//         </svg>
//         </div>
//         <div className="w-[168px] h-[61px] left-[193px] top-[215px] absolute bg-highlight rounded-[30px]" />
//         <div className="w-[168px] h-[61px] left-[16px] top-[216px] absolute bg-highlight rounded-[30px]" />
//         <div className="left-[249px] top-[236px] absolute text-black text-base ">Withdraw</div>
//         <div className="w-[92px] h-[21px] left-[75px] top-[236px] absolute text-black text-base">Transfer</div>
//     </div>
//     );
//   };
//   export default BalanceSection;

import { FiEye, FiArrowUpRight, FiArrowLeft } from "react-icons/fi";

const BalanceSection = () => {
  return (
    <div className="relative bg-white rounded-[30px] shadow-md p-4 w-full">
      {/* Balance Section */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">Neo Cash Main Balance</p>
          <p className="mt-2 text-4xl font-bold">$1,459.70</p>
        </div>
        <FiEye className="text-gray-500 text-xl cursor-pointer" />
      </div>

      {/* Neopay & Points Section */}
      <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
        {/* Neopay Number */}
        <div className="flex flex-col">
          <p className="text-xs">Neopay Number</p>
          <p className="font-semibold text-black text-base">**** **** **** 5324</p>
        </div>

        {/* Neo Points */}
        <div className="flex flex-col items-end">
          <p className="mb-2 text-xs">Neo Points</p>
          <p className="flex items-center gap-1 font-semibold text-black text-base">
            <FiEye className="text-sm" /> 320 Points
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300 my-5"></div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <button className="flex items-center justify-center gap-2 bg-lime-400 text-black font-medium py-4 rounded-full w-full border border-black/10 shadow-md">
          <FiArrowUpRight className="text-lg" /> Transfer
        </button>
        <button className="flex items-center justify-center gap-2 bg-lime-400 text-black font-medium py-4 rounded-full w-full border border-black/10 shadow-md">
          <FiArrowLeft className="text-lg" /> Withdraw
        </button>
      </div>

    </div>
  );
}

export default BalanceSection;

