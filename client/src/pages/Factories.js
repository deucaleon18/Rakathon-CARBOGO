import "../styles/Factories.css"
import { useState ,useEffect} from "react";
import useEth from "../contexts/EthContext/useEth";


function Factories() {
   const { state: { web3,contract1,contract2, accounts,address1,address2 } } = useEth();
   // useEffect(()=>{
   //    const getFactories=async()=>{
   //    //   for(let i=0;i<accounts.length;i++){
   //       await contract1.methods.getFactory(accounts[0]).call().then((res)=>{
   //          console.log(res)
   //       })
   //       .catch((err)=>{
   //          console.log(err)
   //       })
   //    //   }
         
   //    }
   //    getFactories()
   // },[])



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
        <h3>Sugar Factory</h3>
     </div>
     <div className="list">
        <img src="Images/factory.png" alt="" />
        <h3>Sugar Factory</h3>
     </div>
     <div className="list">
        <img src="Images/factory.png" alt="" />
        <h3>Sugar Factory</h3>
        </div>
     </div>
     </div>
     </>
    );
  
    
  }
  
  export default Factories;