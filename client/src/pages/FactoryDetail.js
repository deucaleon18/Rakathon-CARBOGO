import "../styles/FactoryDetail.css";
import React, { useState, useEffect } from "react";
import useEth from "../contexts/EthContext/useEth";
import { useParams } from "react-router-dom";

function FactoryDetail() {
  const { id } = useParams();
  const { state: { web3,contract, accounts,address } } = useEth();
  const [isActive, setActive] = useState(true);
  const [paper,setPaper]=useState(0)
  const [electricity,setElectriciy]=useState(0)
  const [water,setWater]=useState(0)
  const [creditCount,setCreditCount]=useState(0)
  
  const editFactoryDetails=async()=>{
    await contract.methods.editFactory(0,electricity,paper,water).send({from:accounts[0]}).then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

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
                  Description : The monthly usage has been logged and updated in this section.Currently this factory is underperforming since it owns less carbon credits than the amount of carbon footprint it is generating.
                </p>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <div>
                <h3>Electricity (kwH) : 2000</h3>
                <h3>Gas Fees (l): 1000</h3>
                </div>
                <div>
                  <div style={{height:"20px",width:"200px",background:"red"}}>

                  </div>
                  <span style={{color:"rgb(0, 255, 0)"}}>Consumption:</span> 2800 kg CO2 emission<br></br>
                  <span style={{color:"rgb(0, 255, 0)"}}>Allowed:</span> 2500 kg CO2 emission
                </div>
                </div>
              </div>
              <div className="button" onClick={add}>
                Log Details
              </div>
            </div>
            <div className={!isActive ? "head1" : "login"}>
              <div className="forms">
                <label className="label" type="username">
                  Electricity (in KWh units)
                </label>
                <input
                value={electricity}
                onChange={(e)=>{setElectriciy(e.target.value)}}
                  className="input"
                  type="text"
                  placeholder="Amount"
                  id="username"
                />

                <label className="label" type="username">
                  Water consumption (in litres)
                </label>
                <input
                value={water}
                onChange={(e)=>{setWater(e.target.value)}}
                  className="input"
                  type="text"
                  placeholder="Amount"
                  id="username"
                />

                <button className="button" onClick={editFactoryDetails}>Log</button>
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
