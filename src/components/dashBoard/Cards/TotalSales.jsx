function TotalSales() {
  return (
    <div className="col-8 p-2">
      <div className="row">
        <div className="col-12 px-5 fw-bold text-body-tertiary">
          <small>
            <small>Total Sales</small>{" "}
          </small>
        </div>
        <div className="col-12 px-5 fw-bold text-black fs-4">$89k</div>
        <div className="col-12 px-5 fw-bold">
          <small>
            <svg className="text-body-success fw-bold" width="13" height="13">
              <use xlinkHref="#up" />
            </svg>
            <small>11%</small>
            <small className="text-black">this month</small>
          </small>
        </div>
      </div>
    </div>
  );
}

export default TotalSales;
