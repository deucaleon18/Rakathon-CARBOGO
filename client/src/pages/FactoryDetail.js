import "../styles/FactoryDetail.css";
import React, { useState, useEffect } from "react";

function FactoryDetail() {
  const [isActive, setActive] = useState(true);

  const add = () => {
    setActive(false);
  };

  const add2 = () => {
    setActive(true);
  };

  useEffect(() => {
    add();
    add2();
  }, []);

  return (
    <>
      <div className="Factories">
        <h1>DETAILS</h1>
        <div className="details">
          <img src="Images/factory.png" alt="" />
          <div className="detailsDiv">
            <h2>Sugar Factory</h2>
            <div className={isActive ? "head1" : "login"}>
              <div className="factoryDetail">
                <p>
                  Description : Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Sunt, molestias. Expedita, voluptatum
                  deserunt. Cum, doloribus repellat blanditiis facilis rem
                  obcaecati quaerat autem? Harum, velit. Voluptatibus, aliquid.
                  Vel dolore maxime alias.
                </p>
                <h3>Electricity : $00</h3>
                <h3>Gas Fees : $00</h3>
              </div>
              <div className="button" onClick={add}>
                Log Details
              </div>
            </div>
            <div className={!isActive ? "head1" : "login"}>
              <div className="forms">
                <label className="label" type="username">
                  Electricity
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Amount"
                  id="username"
                />

                <label className="label" type="username">
                  Gas Fees
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Amount"
                  id="username"
                />

                <button className="button">Buy</button>
                <div className="span" onClick={add2}>Back</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default FactoryDetail;
