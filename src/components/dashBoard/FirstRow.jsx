

function FirstRow(){
    return(
        <div className="row">
            <div className="col-10 py-2">
              <h4>
                Hello Shahrukh<span>👋,</span>
              </h4>
            </div>
            <div className="col-2 py-2">
              <div className="form-group has-search d-flex">
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
          </div>
    );
}

export default FirstRow;