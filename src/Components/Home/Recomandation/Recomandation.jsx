import React, { useEffect } from "react";
import { useState } from "react";
import Single from "./Single/Single.jsx";

const Recomandation = () => {
  const { services, setServices } = useState([]);

  useEffect(() => {
    fetch("../../../../public/recomandation.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container-fluid">
      <h1>Mixologist Recommendation</h1>
      <div className="row">
        {services?.map((service, index) => (
          <Single services={service} key={index}></Single>
        ))}
      </div>
    </div>
  );
};

export default Recomandation;
