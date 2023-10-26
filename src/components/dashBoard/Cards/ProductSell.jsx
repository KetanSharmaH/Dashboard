import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.png";

function ProductSell() {
  return (
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
  );
}

export default ProductSell;
