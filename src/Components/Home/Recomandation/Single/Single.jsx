import React from "react";

const Single = (props) => {
  const { id, title, img, price, subtitle } = props.services;
  console.log(props.services);
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card-group mt-3">
        <div className="card ">
          <img src={img} alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
