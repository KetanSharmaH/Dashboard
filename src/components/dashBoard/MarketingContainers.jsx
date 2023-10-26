import Earning from "./Cards/Earning";
import Order from "./Cards/Order";
import Balance from "./Cards/Balance";
import TotalSales from "./Cards/TotalSales";

function MarketingContainers() {
  return (
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
            <Earning/>
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
            <Order/>
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
            <Balance/>
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
            <TotalSales/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingContainers;
