import "../styles/FactoryDetail.css"
function FactoryDetail() {


    return (
     <>
     <div className="Factories">
     <h1>DETAILS</h1>
     <div className="details">
        <img src="Images/factory.png" alt="" />
        <div className="detailsDiv">
            <h2>Sugar Factory</h2>
            <div className="factoryDetail">
                <p>Desc : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, molestias. Expedita, voluptatum deserunt. Cum, doloribus repellat blanditiis facilis rem obcaecati quaerat autem? Harum, velit. Voluptatibus, aliquid. Vel dolore maxime alias.</p>
                <h3>Electricity</h3>
                 <h3>Gas Fees</h3>
            </div>
            <div className="button">Buy Credits</div>
        </div>
     </div>
     </div>
     </>
    );
  
    
  }
  
  export default FactoryDetail;