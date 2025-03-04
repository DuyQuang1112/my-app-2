import React from 'react';

const transactions = [
  { id: 1, date: '2023-04-05', description: 'Grocery Shopping', amount: '-$50.00', avatar: 'https://placehold.co/50x50' },
  { id: 2, date: '2023-04-04', description: 'Salary', amount: '+$1500.00', avatar: 'https://placehold.co/50x50' },
  { id: 3, date: '2023-04-03', description: 'Electricity Bill', amount: '-$75.00', avatar: 'https://placehold.co/50x50' },
  { id: 4, date: '2023-04-02', description: 'Internet Bill', amount: '-$30.00', avatar: 'https://placehold.co/50x50' },
  { id: 5, date: '2023-04-05', description: 'Grocery Shopping', amount: '-$50.00', avatar: 'https://placehold.co/50x50' },
  { id: 6, date: '2023-04-04', description: 'Salary', amount: '+$1500.00', avatar: 'https://placehold.co/50x50' },
  { id: 7, date: '2023-04-03', description: 'Electricity Bill', amount: '-$75.00', avatar: 'https://placehold.co/50x50' },
  { id: 8, date: '2023-04-02', description: 'Internet Bill', amount: '-$30.00', avatar: 'https://placehold.co/50x50' },
];

const RecentTransactions = () => {
  return (
    <div className="mt-6 w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recent Transactions</h2>
        <a href="#" className="text-blue-500">Show More</a>
      </div>

      {/* list transaction */}
      <div className="flex-1 overflow-y-auto">
        <ul className="list-none p-0">
          {transactions.map(transaction => (
            <li key={transaction.id} className=" mb-4 flex justify-between items-center">
              <div className="flex items-center">
                <img src={transaction.avatar} alt="avatar" className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <p className="text-sm">{transaction.date}</p>
                  <p className="text-base font-semibold">{transaction.description}</p>
                </div>
              </div>
              <p className={`text-base ${transaction.amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                {transaction.amount}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentTransactions;
