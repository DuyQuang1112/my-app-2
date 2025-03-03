import SubHeader from "../components/header/SubHeader";
import StatisticsChart from "../components/statistics/StatisticsChart";
import RecentTransactions from "../components/transactions/RecentTransactions";
import NavigationBar from "../components/common/NavigationBar";

const Statistics = () => {
  return (
        <div className="bg-white min-h-screen p-4">
            <div className="absolute top-0 left-0 w-full h-[35%] bg-gray-200"></div>
            <SubHeader title="Statistics" />
            <StatisticsChart />
            <RecentTransactions />
            <NavigationBar />
        </div>
    );
};

export default Statistics;