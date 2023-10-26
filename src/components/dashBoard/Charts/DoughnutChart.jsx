import { Doughnut } from "react-chartjs-2";
import * as Utils from "../../../js/chartjs/utils";
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    scales,
  } from "chart.js";

  const DATA_COUNT = 3;

  ChartJS.register(
    CategoryScale,
    ArcElement,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    scales
  );

  const doughnutData = {
    labels: ["Red", "purple", "grey"],
    datasets: [
      {
        label: "Dataset 1",
        data: [23, 40, 37],
        backgroundColor: [
          Utils.CHART_COLORS.red,
          Utils.CHART_COLORS.purple,
          Utils.CHART_COLORS.grey,
        ],
      },
    ],
  };

function DoughnutChart() {
  return (
    <div className="col-xl-5 col-md-12 d-flex">
      <div className="bg-white mx-0 py-2 rounded-2 row">
        <div
          className="col-12"
          style={{ fontWeight: "bold", fontSize: "18px" }}
        >
          Customers
        </div>
        <div
          className="col-12 text-body-tertiary"
          style={{ fontSize: "13px", fontWeight: "bold" }}
        >
          Customers that buy products
        </div>
        <div className="col-12">
          <Doughnut data={doughnutData}></Doughnut>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
