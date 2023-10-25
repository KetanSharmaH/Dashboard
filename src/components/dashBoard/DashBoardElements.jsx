import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.png";
import AllIcon from "../../assets/icons/AllIcon";
import SideBar from "./SideBar";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import * as Utils from "../../js/chartjs/utils";
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

function DashBoardElements() {
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
  return (
    <>
      <AllIcon/>
      <SideBar/>
      <div className="bg-secondary overflow-y-scroll vh-100 w-100">
        <div className="container">
          <div className="row">
            <div className="col-10 py-2">
              <h4>
                Hello Shahrukh<span>👋,</span>
              </h4>
            </div>
            <div className="col-2 py-2">
              <div className="form-group has-search d-flex">
                <span className="fa fa-search text-body-tertiary form-control-feedback" >
                  <svg className="fw-bold" width="30" height="30">
                    <use xlinkHref="#search" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control fw-bold text-body-tertiary"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="bg-white px-0 py-2 rounded text-success">
                <div className="row">
                  <div className="col-4 align-items-center p-1 d-flex">
                    <div className="rounded-pill bg-success-subtle ms-4 p-4">
                      <svg className="" width="50" height="50">
                        <use xlinkHref="#dollar" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-8 p-2">
                    <div className="row">
                      <div className="col-12 px-5 fw-bold text-body-tertiary">
                        <small>
                          <small>Earning</small>{" "}
                        </small>
                      </div>
                      <div className="col-12 px-5 fw-bold text-black fs-4">
                        $198k
                      </div>
                      <div className="col-12 px-5 fw-bold text-body-success">
                        <small>
                          <svg className=" fw-bold" width="13" height="13">
                            <use xlinkHref="#up" />
                          </svg>
                          <small>37.8% </small>
                          <small className="text-black">this month</small>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="bg-white px-0 py-2 rounded text-success">
                <div className="row">
                  <div className="col-4 align-items-center p-1 d-flex">
                    <div
                      className="rounded-pill ms-4 p-4"
                      style={{ backgroundColor: "plum" }}
                    >
                      <svg className="" width="50" height="50">
                        <use xlinkHref="#doc" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-8 p-2">
                    <div className="row">
                      <div className="col-12 px-5 fw-bold text-body-tertiary">
                        <small>
                          <small>Orders</small>{" "}
                        </small>
                      </div>
                      <div className="col-12 px-5 fw-bold text-black fs-4">
                        $2.4k
                      </div>
                      <div className="col-12 px-5 fw-bold text-danger">
                        <small>
                          <svg
                            className="fw-bold text-danger"
                            width="13"
                            height="13"
                          >
                            <use xlinkHref="#down" />
                          </svg>
                          <small>2% </small>
                          <small className="text-black">this month</small>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="bg-white px-0 py-2 rounded text-success">
                <div className="row">
                  <div className="col-4 align-items-center p-1 d-flex">
                    <div
                      className="rounded-pill ms-4 p-4"
                      style={{ backgroundColor: "skyblue" }}
                    >
                      <svg className="" width="50" height="50">
                        <use xlinkHref="#wallet" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-8 p-2">
                    <div className="row">
                      <div className="col-12 px-5 fw-bold text-body-tertiary">
                        <small>
                          <small>Balance</small>{" "}
                        </small>
                      </div>
                      <div className="col-12 px-5 fw-bold text-black fs-4">
                        $2.4k
                      </div>
                      <div className="col-12 px-5 fw-bold text-danger">
                        <small>
                          <svg
                            className="text-body-success fw-bold"
                            width="13"
                            height="13"
                          >
                            <use xlinkHref="#down" />
                          </svg>
                          <small>2% </small>
                          <small className="text-black">this month</small>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="bg-white px-0 py-2 rounded text-success">
                <div className="row">
                  <div className="col-4 align-items-center p-1 d-flex">
                    <div
                      className="rounded-pill ms-4 p-4"
                      style={{ backgroundColor: "pink" }}
                    >
                      <svg className="" width="50" height="50">
                        <use xlinkHref="#bag" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-8 p-2">
                    <div className="row">
                      <div className="col-12 px-5 fw-bold text-body-tertiary">
                        <small>
                          <small>Total Sales</small>{" "}
                        </small>
                      </div>
                      <div className="col-12 px-5 fw-bold text-black fs-4">
                        $89k
                      </div>
                      <div className="col-12 px-5 fw-bold">
                        <small>
                          <svg
                            className="text-body-success fw-bold"
                            width="13"
                            height="13"
                          >
                            <use xlinkHref="#up" />
                          </svg>
                          <small>11%</small>
                          <small className="text-black">this month</small>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-md-12  d-flex mb-3"
            >
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
                  <Bar
                    className="rounded-pills"
                    options={BarOptions}
                    data={BarData}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-md-12 d-flex"
            >
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
            <div
              className="col-xxl-9 d-flex col-lg-8"
              style={{ marginTop: "20px", width: "100%" }}
            >
              <div className="flex-fill w-100 card">
                <div
                  className="row"
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingLeft: "5px",
                    paddingTop: "6px",
                  }}
                >
                  <div className="col-6">Product Sell</div>
                  <div className="col-3">
                    <div className="form-group has-search">
                      <span className="fa fa-search text-body-tertiary form-control-feedback">
                        <svg className="fw-bold" width="30" height="30">
                          <use xlinkHref="#search" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="form-control fw-bold text-body-tertiary"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <button
                      className=" btn text-body-tertiary btn-light btn-sm fw-bold dropdown-toggle form-control pr-3"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                    >
                      Last 30 days
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-7 text-body-tertiary"
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      paddingLeft: "20px",
                    }}
                  >
                    Product Name
                  </div>
                  <div
                    className="col-2 text-body-tertiary"
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    Stock
                  </div>
                  <div
                    className="col-1 text-body-tertiary"
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    Price
                  </div>
                  <div
                    className="col-2 text-body-tertiary"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    Total Sales
                  </div>
                  <br />
                  <hr />
                </div>
                <div className="row">
                  <div className="col-1" style={{ paddingLeft: "20px" }}>
                    <img
                      className="rounded"
                      src={img1}
                      alt="crystal"
                      width="80px"
                      height="45px"
                    />
                  </div>
                  <div
                    className="col-6"
                    style={{ textAlign: "left", fontWeight: "bold" }}
                  >
                    Abstract 3D
                    <div
                      className="col-12 text-body-tertiary"
                      style={{ fontSize: "12px" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div className="col-2" style={{ textAlign: "left" }}>
                    32 in stock
                  </div>
                  <div
                    className="col-1"
                    style={{ textAlign: "left", fontWeight: "bold" }}
                  >
                    $ 45.99
                  </div>
                  <div className="col-2" style={{ textAlign: "center" }}>
                    20
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <div className="col-1" style={{ paddingLeft: "20px" }}>
                    <img
                      className="rounded"
                      src={img2}
                      alt="crystal"
                      width="80px"
                      height="45px"
                    />
                  </div>
                  <div
                    className="col-6"
                    style={{ textAlign: "left", fontWeight: "bold" }}
                  >
                    Sarphens Illustration
                    <div
                      className="col-12 text-body-tertiary"
                      style={{ fontSize: "12px" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div className="col-2" style={{ textAlign: "left" }}>
                    32 in stock
                  </div>
                  <div
                    className="col-1"
                    style={{ textAlign: "left", fontWeight: "bold" }}
                  >
                    $ 45.99
                  </div>
                  <div className="col-2" style={{ textAlign: "center" }}>
                    20
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardElements;
