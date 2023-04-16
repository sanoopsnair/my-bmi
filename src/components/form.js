import React, { useState } from 'react'

function form() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  return (
    <div className="col-sm-4 shadow rounded px-5">
      <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
      <form >
        <div className="row">
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Weight(kg) :</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Hight(m) :</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-primary my-3" value="Get BMI" />
      </form>
    </div>
  );
}

export default form