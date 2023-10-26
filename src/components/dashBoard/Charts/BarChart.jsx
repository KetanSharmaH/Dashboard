import { Bar } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  scales
);

const BarData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      backgroundColor: "rgba(75, 192, 192, 0.2)", // Bar color
      borderColor: "rgba(75, 192, 192, 1)", // Border color
      borderWidth: 1,
      borderRadius: 10,
      borderSkipped: false,
      borderColor: Utils.CHART_COLORS.purple,
      backgroundColor: Utils.transparentize(
        Utils.CHART_COLORS.dark_purple,
        0.5
      ),
      data: [12, 19, 13, 15, 12, 10, 22, 12, 19, 13, 15, 12, 10, 22], // Your data here
    },
  ],
};

const BarOptions = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

function BarChart() {
  return (
    <div className="col-xl-7 col-md-12  d-flex mb-3">
      <div className="row bg-white m-0 py-2 rounded-2 row">
        <div
          className="col-xl-10"
          style={{ fontWeight: "bold", fontSize: "18px" }}
        >
          Overview
        </div>
        <div className="dropdown col-2" style={{ marginTop: "5px" }}>
          <button
            className="float-end btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Quantity
          </button>
        </div>
        <div
          className="col-10 px-3 text-body-tertiary"
          style={{ fontWeight: "bold", fontSize: "12px" }}
        >
          Monthly Earning
        </div>
        <div className="col-12">
          <Bar className="rounded-pills" options={BarOptions} data={BarData} />
        </div>
      </div>
    </div>
  );
}

export default BarChart;
