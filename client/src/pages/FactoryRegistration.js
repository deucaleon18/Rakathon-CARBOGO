import "../styles/FactoryRegistration.css"

function FactoriesRegistration() {


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
              className="input"
              type="text"
              placeholder="Email or Phone"
              id="username"
            />

            <label className="label" type="password">
              Password
            </label>
            <input
              className="input"
              type="password"
              placeholder="Password"
              id="password"
            />

            <button className="button">Register</button>
            </div>
      </div>
     </div>
     </>
    );
  
    
  }
  
  export default FactoriesRegistration;