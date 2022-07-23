import "../styles/Factories.css"
import { useState ,useEffect} from "react";
import useEth from "../contexts/EthContext/useEth";


function Factories() {
   const { state: { web3,contract, accounts,address } } = useEth();
   const [factories,setFactories]=useState([])

   // useEffect(()=>{
     
   //    const getFactories=async()=>{
   //       let factoryLength=await contract.methods.s_factoryCounter().call()
        
   //      for(let i=0;i<=factoryLength;i++){
   //       await contract.methods.getFactory(i).call().then((res)=>{
   //          var factorii=factories
   //          factorii.push({
   //             name:res.person,
   //             factoryName:res.factoryName,
   //             address:res.owner,
   //             serialNumber:res.serial,
   //             electricity:res.electricity, 
   //             paper:res.paper,
   //             water:res.water
   //          })

   //          setFactories(factorii)
   //          console.log(res)
   //          console.log(factories)
   //       })
   //       .catch((err)=>{
   //          console.log(err)
   //       })
   //      }
   //    } 
   
   //    if (
   //       typeof contract !== "undefined" &&
   //       typeof accounts !== "undefined" &&
   //       typeof web3 !== "undefined"
   //     ) {
   //       getFactories();
   //     }
   // },[web3,accounts,contract])



    return (

     <>
     <div className="Factories">
     <h1>FACTORIES</h1>
     <div className="factoryList">
     <div className="list">
        <img src="Images/factory.png" alt="" />
        <h3><a href="/factoryid">Sugar Factory</a></h3>
     </div>
     <div className="list">
        <img src="Images/factory.png" alt="" />
        <h3>Chemicals Factory</h3>
     </div>
     <div className="list">
        <img src="Images/factory.png" alt="" />
        <h3>Paper Factory</h3>
     </div>
     <div className="list">
        <img src="Images/factory.png" alt="" />
        <h3>Iron Factory</h3>
        </div>
     </div>
     </div>
     </>
    );
  
    
  }
  
  export default Factories;