import { FaBitcoin, FaGlobe, FaShoppingCart, FaTicketAlt, FaTools } from 'react-icons/fa';

const FeatureBar = () => {
    const menuItems = [
        { id: 1, label: 'Crypto', icon: <FaBitcoin /> },
        { id: 2, label: 'Internet', icon: <FaGlobe /> },
        { id: 3, label: 'Shopping', icon: <FaShoppingCart /> },
        { id: 4, label: 'Ticket', icon: <FaTicketAlt /> },
        { id: 5, label: 'Other', icon: <FaTools /> },
      ];
    
      return (
        <div className="mt-6 w-full flex justify-around">
          {menuItems.map(item => (
            <div key={item.id} className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full">
                    <span className="text-2xl">{item.icon}</span>
                </div>
                <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      );
};

export default FeatureBar