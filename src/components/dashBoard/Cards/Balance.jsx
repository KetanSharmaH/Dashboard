function Balance() {
  return (
    <div className="col-8 p-2">
      <div className="row">
        <div className="col-12 px-5 fw-bold text-body-tertiary">
          <small>
            <small>Balance</small>{" "}
          </small>
        </div>
        <div className="col-12 px-5 fw-bold text-black fs-4">$2.4k</div>
        <div className="col-12 px-5 fw-bold text-danger">
          <small>
            <svg className="text-body-success fw-bold" width="13" height="13">
              <use xlinkHref="#down" />
            </svg>
            <small>2% </small>
            <small className="text-black">this month</small>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Balance;
