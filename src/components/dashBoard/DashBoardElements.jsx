import img1 from "../../../1.jpg";
import img2 from "../../../2.png";
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
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
        <symbol id="house-fill" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
        </symbol>
        <symbol id="people" viewBox="0 0 16 16">
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
        </symbol>
        <symbol id="income" viewBox="0 0 16 16">
          <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
        </symbol>
        <symbol id="gitHub" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </symbol>
        <symbol id="percentage" viewBox="0 0 16 16">
          <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </symbol>
        <symbol id="help" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"
          />
        </symbol>
        <symbol id="gear" viewBox="0 0 16 16">
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
        </symbol>
        <symbol id="up" viewBox="0 0 16 16" fill="Green">
          <path
            fillRule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </symbol>
        <symbol
          id="dollar"
          className="text-sucess w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </symbol>
        <symbol
          id="down"
          className="text-sucess w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="Red"
        >
          <path
            fillRule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </symbol>
        <symbol
          id="doc"
          fill="none"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="purple"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </symbol>
        <symbol
          id="wallet"
          fill="none"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          strokeWidth={0.8}
          stroke="blue"
          className="w-6 h-6"
        >
          <path
            fill="currentColor"
            d="M19.5 7H18V6a3.003 3.003 0 0 0-3-3H4.5A2.502 2.502 0 0 0 2 5.5V18a3.003 3.003 0 0 0 3 3h14.5a2.502 2.502 0 0 0 2.5-2.5v-9A2.502 2.502 0 0 0 19.5 7zm-15-3H15a2.003 2.003 0 0 1 2 2v1H4.5a1.5 1.5 0 1 1 0-3zM21 16h-2a2 2 0 0 1 0-4h2v4zm0-5h-2a3 3 0 1 0 0 6h2v1.5a1.5 1.5 0 0 1-1.5 1.5H5a2.003 2.003 0 0 1-2-2V7.499c.432.326.959.502 1.5.501h15A1.5 1.5 0 0 1 21 9.5V11z"
          />
        </symbol>
        <symbol
          id="bag"
          fill="none"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          strokeWidth={1.4}
          stroke="red"
        >
          <g fill="none">
            <path
              strokeLinejoin="round"
              d="M4 9h16l-.835 9.181A2 2 0 0 1 17.174 20H6.826a2 2 0 0 1-1.991-1.819L4 9Z"
            />
            <path strokeLinecap="round" d="M8 11V8a4 4 0 1 1 8 0v3" />
          </g>
        </symbol>
        <symbol id="search" width="25" height="25" viewBox="0 0 32 32">
          <path
            fill="currentColor"
            d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
          />
        </symbol>
      </svg>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark "
        style={{ height: "100vh", width: "300px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="35" height="35">
            <use xlinkHref="#gear" />
          </svg>
          <span className="fs-3">Dashboard</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#house-fill" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#cart" />
              </svg>
              Product
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people" />
              </svg>
              Customers
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#income" />
              </svg>
              Income
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#percentage" />
              </svg>
              Promote
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#help" />
              </svg>
              Help
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg className="bi pe-none me-2" width="40" height="40">
              <use xlinkHref="#gitHub"></use>
            </svg>
            <strong>
              mdo
              <br />
              <p style={{ fontSize: 12 }}>Project Manager</p>
            </strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-secondary overflow-y-scroll vh-100 w-100">
        <div className="container">
          <div className="row">
            <div className="col-10 py-2">
              <h4>
                Hello Shahrukh<span>👋,</span>
              </h4>
              <br />
            </div>
            <div className="col-2 py-2">
              <div className="form-group has-search">
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
