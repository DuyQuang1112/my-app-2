import Header from "../components/header/Header";
import BalanceSection from "../components/balance/BalanceSection";
import RecentTransactions from "../components/transactions/RecentTransactions";
import NavigationBar from "../components/common/NavigationBar";
import FeatureBar from "../components/common/FeatureBar"

const Home = () => {
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="absolute top-0 left-0 w-full h-[35%] bg-gray-200"></div>
      <Header />
      <BalanceSection />
      <FeatureBar />
      <RecentTransactions />
      <NavigationBar />
    </div>
  );
};
export default Home;
