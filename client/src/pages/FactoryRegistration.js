import "../styles/FactoryRegistration.css"
import { useState ,useEffect} from "react";
import useEth from "../contexts/EthContext/useEth";


function FactoriesRegistration() {

  const { state: { web3,contract1,contract2, accounts,address1,address2 } } = useEth();
  const [factoryName,setFactoryName]=useState("")
  const [name,setName]=useState("")

  const registerFactory=async(e)=>{
    e.preventDefault()

    await contract1.methods.addFactory(accounts[0],name,factoryName).send({from:accounts[0]})
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })

  }
    return (
     <>

     <div className="FactoriesRegistration">
     <div className="formContainer">
        <div className="form">
          <h1>WELCOME TO CARBOGO</h1>
     <label className="label" type="username">
              Factory Name
            </label>
            <input
              value={factoryName}
              onChange={(e)=>{setFactoryName(e.target.value)}}
              className="input"
              type="text"
              placeholder="Email or Phone"
              id="username"
            />

            <label className="label" type="name">
              Owner Name
            </label>
            <input
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
              className="input"
              type="text"
              placeholder="Owner name"
              id="name"
            />

            <button className="button" onClick={(e)=>registerFactory(e)}>Register</button>
            </div>
      </div>
     </div>

     </>



    );
  
    
  }
  
  export default FactoriesRegistration;