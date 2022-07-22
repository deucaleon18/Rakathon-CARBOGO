import "../styles/Factories.css"

function Factories() {

   const { state: { web3,contract1,contract2, accounts,address1,address2 } } = useEth();
    return (

     <>
     <div className="Factories">
     <h1>FACTORIES</h1>
     <div className="list">
        <img src="Images/factory.png" alt="" />
     </div>
     </div>
     </>
    );
  
    
  }
  
  export default Factories;