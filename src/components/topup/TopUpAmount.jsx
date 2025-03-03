import { useState } from "react";

const TopUpAmount = () => {
    const amounts = [5, 10, 20, 50, 100, 150, 200, 250];
    const [selectedAmount, setSelectedAmount] = useState(200);

    return (
        <div className="relative mt-[20px]">

            <div className="p-4 bg-white shadow rounded-[30px]">
                <h2 className="text-lg font-semibold mb-2">Top Up Amount</h2>

                <div className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold">$ {selectedAmount},00</span>
                    <button className="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
                </div>

                {/* numpad */}
                <div className="grid grid-cols-4 gap-4 mb-2">
                    {amounts.map((amount) => (
                        <button
                            key={amount}
                            className={`p-2 text-lg font-semibold rounded-full border transition 
        ${selectedAmount === amount
                                    ? "bg-yellow-100 border-yellow-500 text-black"
                                    : "bg-white border-gray-300 text-gray-700"
                                }`}
                            onClick={() => setSelectedAmount(amount)}
                        >
                            ${amount}
                        </button>
                    ))}
                </div>
            </div>

            {/*Top Up button*/}
            <button className="mt-2 w-full py-4 text-lg font-bold bg-lime-400 text-black rounded-2xl shadow-md">
                Top Up
            </button>
        </div>
    );
};

export default TopUpAmount;
