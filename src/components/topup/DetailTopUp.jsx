const DetailTopUp = () => {
    return (
      <div className="p-4 bg-white shadow-lg rounded-2xl">
        <h2 className="text-lg font-semibold mb-3">Detail Top Up</h2>
  
        <div className="border-t border-gray-300 py-2 flex justify-between text-gray-500">
          <span>From</span>
          <span className="font-semibold text-black">Bank Transfer (BNQ)</span>
        </div>
  
        <div className="border-t border-gray-300 py-2 flex justify-between text-gray-500">
          <span>To</span>
          <span className="font-semibold text-black">Top Up Neopay</span>
        </div>
  
        <div className="border-t border-gray-300 py-2 flex justify-between text-gray-500">
          <span>Amount</span>
          <span className="font-semibold text-black">$200.00</span>
        </div>
  
        <div className="border-t border-gray-300 py-2 flex justify-between text-gray-500">
          <span>Tax</span>
          <span className="font-semibold text-black">$1.00</span>
        </div>
  
        <div className="border-t border-gray-400 py-3 flex justify-between text-gray-900 font-bold text-lg">
          <span>Total</span>
          <span>$201.00</span>
        </div>
      </div>
    );
  };
  
  export default DetailTopUp;
  