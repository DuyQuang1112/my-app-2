import Subheader from "../components/header/SubHeader";
import TopUpMethod from "../components/topup/TopUpMethod";
import TopUpAmount from "../components/topup/TopUpAmount";
import DetailTopUp from "../components/topup/DetailTopUp";

const TopUp = () => {
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="absolute top-0 left-0 w-full h-[35%] bg-gray-200"></div>
        <Subheader title="Top Up NeoPay"/>
        <TopUpMethod />
        <TopUpAmount />
        <DetailTopUp />
    </div>
  );
};
export default TopUp;
