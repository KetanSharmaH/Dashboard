import AllIcon from "../../assets/icons/AllIcon";
import SideBar from "./SideBar";
import FirstRow from "./FirstRow";
import MarketingContainers from "./MarketingContainers";
import BarChart from "./Charts/BarChart";
import DoughnutChart from "./Charts/DoughnutChart";
import ProductSell from "./Cards/ProductSell";

function DashBoardElements() {
  return (
    <>
      <AllIcon />
      <SideBar />
      <div className="bg-secondary overflow-y-scroll vh-100 w-100">
        <div className="container">
          <FirstRow/>
          <MarketingContainers/>
        </div>
        <div className="container">
          <div className="row">
            <BarChart/>
            <DoughnutChart/>
            <ProductSell/>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardElements;
